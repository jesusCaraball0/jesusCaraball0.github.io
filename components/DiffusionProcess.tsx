"use client";

import { useEffect, useRef } from "react";

export default function DiffusionProcess() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Particle system for diffusion visualization
    interface Particle {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      noiseX: number;
      noiseY: number;
      size: number;
      alpha: number;
      hue: number;
    }

    const particleCount = 3000;
    const particles: Particle[] = [];

    // Create organic shape targets (multiple blob shapes)
    const createTargetShape = (index: number, total: number): { x: number; y: number } => {
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.5;
      
      // Create multiple organic blob shapes
      const blobCount = 3;
      const blobIndex = index % blobCount;
      
      // Different blob centers
      const blobCenters = [
        { x: centerX - canvas.width * 0.15, y: centerY - canvas.height * 0.1 },
        { x: centerX + canvas.width * 0.12, y: centerY + canvas.height * 0.05 },
        { x: centerX, y: centerY + canvas.height * 0.15 },
      ];
      
      const center = blobCenters[blobIndex];
      const particlesPerBlob = Math.floor(total / blobCount);
      const localIndex = Math.floor(index / blobCount);
      
      // Organic blob shape using multiple sine waves
      const angle = (localIndex / particlesPerBlob) * Math.PI * 2 * 3; // Multiple rotations
      const radiusVariation = 
        Math.sin(angle * 2) * 0.3 +
        Math.sin(angle * 3 + 1) * 0.2 +
        Math.sin(angle * 5 + 2) * 0.15;
      
      const baseRadius = Math.min(canvas.width, canvas.height) * (0.12 + blobIndex * 0.03);
      const radius = baseRadius * (0.3 + Math.random() * 0.7 + radiusVariation * 0.3);
      
      return {
        x: center.x + Math.cos(angle) * radius,
        y: center.y + Math.sin(angle) * radius * 0.8,
      };
    };

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const target = createTargetShape(i, particleCount);
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        targetX: target.x,
        targetY: target.y,
        noiseX: (Math.random() - 0.5) * canvas.width * 0.8,
        noiseY: (Math.random() - 0.5) * canvas.height * 0.8,
        size: 1.5 + Math.random() * 2,
        alpha: 0.3 + Math.random() * 0.5,
        hue: 200 + Math.random() * 60, // Blue to purple range
      });
    }

    let time = 0;
    const cycleDuration = 12; // seconds for full cycle
    
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.016;
      
      // Diffusion progress: 0 = pure noise, 1 = crystallized structure
      // Creates a smooth oscillation between noise and structure
      const cycleProgress = (time % cycleDuration) / cycleDuration;
      const diffusionProgress = Math.sin(cycleProgress * Math.PI * 2) * 0.5 + 0.5;
      
      // Noise scale decreases as structure forms
      const noiseScale = 1 - diffusionProgress;
      
      particles.forEach((particle, i) => {
        // Update noise offset for continuous movement
        const noiseTime = time * 0.5;
        particle.noiseX = Math.sin(noiseTime + i * 0.01) * canvas.width * 0.4 * noiseScale;
        particle.noiseY = Math.cos(noiseTime * 0.7 + i * 0.01) * canvas.height * 0.4 * noiseScale;
        
        // Interpolate between noisy position and target position
        const noisyX = particle.targetX + particle.noiseX;
        const noisyY = particle.targetY + particle.noiseY;
        
        // Smooth interpolation
        particle.x += (noisyX - particle.x) * 0.02;
        particle.y += (noisyY - particle.y) * 0.02;
        
        // Dynamic alpha based on diffusion progress
        const dynamicAlpha = particle.alpha * (0.4 + diffusionProgress * 0.6);
        
        // Dynamic size - particles get slightly larger when crystallized
        const dynamicSize = particle.size * (0.8 + diffusionProgress * 0.4);
        
        // Color shifts from cooler (noise) to warmer (structure)
        const hueShift = diffusionProgress * 20;
        const hue = particle.hue + hueShift;
        const saturation = 60 + diffusionProgress * 20;
        const lightness = 50 + diffusionProgress * 15;
        
        // Draw particle with glow
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, dynamicSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${dynamicAlpha})`;
        ctx.fill();
        
        // Add subtle glow for larger particles
        if (particle.size > 2.5 && diffusionProgress > 0.5) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, dynamicSize * 2, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${dynamicAlpha * 0.2})`;
          ctx.fill();
        }
      });

      // Draw subtle connecting lines between nearby particles when crystallized
      if (diffusionProgress > 0.6) {
        ctx.strokeStyle = `rgba(100, 150, 255, ${(diffusionProgress - 0.6) * 0.15})`;
        ctx.lineWidth = 0.5;
        
        for (let i = 0; i < particles.length; i += 20) {
          for (let j = i + 1; j < Math.min(i + 30, particles.length); j += 5) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 50) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      requestAnimationFrame(animate);
    };

    // Clear canvas initially
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
