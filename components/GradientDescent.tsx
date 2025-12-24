"use client";

import { useEffect, useRef } from "react";

export default function GradientDescent() {
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

    // Organic blob parameters
    interface Blob {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;
      noiseOffset: number;
    }

    const blobs: Blob[] = [
      {
        x: 0.3,
        y: 0.4,
        radius: 0.35,
        color: "rgba(30, 64, 175, 0.4)",
        speed: 0.0003,
        angle: 0,
        noiseOffset: 0,
      },
      {
        x: 0.7,
        y: 0.6,
        radius: 0.4,
        color: "rgba(59, 130, 246, 0.35)",
        speed: 0.0004,
        angle: Math.PI / 3,
        noiseOffset: 100,
      },
      {
        x: 0.5,
        y: 0.3,
        radius: 0.3,
        color: "rgba(99, 102, 241, 0.3)",
        speed: 0.0002,
        angle: Math.PI / 2,
        noiseOffset: 200,
      },
      {
        x: 0.2,
        y: 0.7,
        radius: 0.25,
        color: "rgba(139, 92, 246, 0.25)",
        speed: 0.0005,
        angle: Math.PI,
        noiseOffset: 300,
      },
    ];

    // Gradient descent ball parameters
    interface GDPoint {
      x: number;
      y: number;
      vx: number;
      vy: number;
      trail: { x: number; y: number; alpha: number }[];
    }

    const gdPoint: GDPoint = {
      x: canvas.width * 0.2,
      y: canvas.height * 0.3,
      vx: 0,
      vy: 0,
      trail: [],
    };

    let time = 0;

    // Simple noise function
    const noise = (x: number, y: number, t: number): number => {
      return (
        Math.sin(x * 0.01 + t) * Math.cos(y * 0.01 + t * 0.7) +
        Math.sin(x * 0.02 - t * 0.5) * Math.cos(y * 0.015 + t * 0.3) +
        Math.sin((x + y) * 0.008 + t * 0.4)
      );
    };

    // Draw organic blob with smooth edges
    const drawBlob = (
      blob: Blob,
      centerX: number,
      centerY: number,
      radius: number,
      t: number
    ) => {
      const points = 100;
      ctx.beginPath();

      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2;
        const noiseVal = noise(
          Math.cos(angle) * 100 + blob.noiseOffset,
          Math.sin(angle) * 100 + blob.noiseOffset,
          t * blob.speed * 100
        );
        const r = radius * (1 + noiseVal * 0.3);
        const x = centerX + Math.cos(angle) * r;
        const y = centerY + Math.sin(angle) * r;

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.closePath();

      // Create radial gradient for each blob
      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius * 1.3
      );
      gradient.addColorStop(0, blob.color);
      gradient.addColorStop(0.5, blob.color.replace("0.", "0."));
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.fill();
    };

    // Draw contour lines (loss landscape)
    const drawContours = (t: number) => {
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.55;

      for (let i = 0; i < 8; i++) {
        const baseRadius = 80 + i * 60;
        ctx.beginPath();

        for (let j = 0; j <= 100; j++) {
          const angle = (j / 100) * Math.PI * 2;
          const noiseVal = noise(
            Math.cos(angle) * 50,
            Math.sin(angle) * 50,
            t * 0.5 + i * 0.5
          );
          const r = baseRadius * (1 + noiseVal * 0.15);
          const x = centerX + Math.cos(angle) * r;
          const y = centerY + Math.sin(angle) * r;

          if (j === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.closePath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${0.03 - i * 0.003})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    };

    // Update gradient descent point
    const updateGDPoint = (t: number) => {
      const targetX = canvas.width * (0.5 + Math.sin(t * 0.3) * 0.2);
      const targetY = canvas.height * (0.55 + Math.cos(t * 0.25) * 0.15);

      // Spring physics
      const dx = targetX - gdPoint.x;
      const dy = targetY - gdPoint.y;
      gdPoint.vx += dx * 0.001;
      gdPoint.vy += dy * 0.001;
      gdPoint.vx *= 0.98;
      gdPoint.vy *= 0.98;
      gdPoint.x += gdPoint.vx;
      gdPoint.y += gdPoint.vy;

      // Add to trail
      gdPoint.trail.push({ x: gdPoint.x, y: gdPoint.y, alpha: 1 });
      if (gdPoint.trail.length > 80) gdPoint.trail.shift();

      // Update trail alpha
      gdPoint.trail.forEach((point, i) => {
        point.alpha = i / gdPoint.trail.length;
      });
    };

    // Draw gradient descent visualization
    const drawGDPoint = () => {
      // Draw trail
      if (gdPoint.trail.length > 1) {
        for (let i = 1; i < gdPoint.trail.length; i++) {
          const prev = gdPoint.trail[i - 1];
          const curr = gdPoint.trail[i];
          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${curr.alpha * 0.3})`;
          ctx.lineWidth = 2 * curr.alpha;
          ctx.stroke();
        }
      }

      // Draw main point with glow
      ctx.save();
      ctx.shadowBlur = 30;
      ctx.shadowColor = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      ctx.arc(gdPoint.x, gdPoint.y, 8, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
      ctx.fill();
      ctx.restore();

      // Inner bright core
      ctx.beginPath();
      ctx.arc(gdPoint.x, gdPoint.y, 4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
    };

    const animate = () => {
      // Clear canvas completely
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.016;

      // Draw organic blobs
      blobs.forEach((blob) => {
        blob.angle += blob.speed;
        const centerX =
          blob.x * canvas.width + Math.sin(blob.angle) * canvas.width * 0.05;
        const centerY =
          blob.y * canvas.height + Math.cos(blob.angle * 0.7) * canvas.height * 0.05;
        const radius = blob.radius * Math.min(canvas.width, canvas.height);

        drawBlob(blob, centerX, centerY, radius, time);
      });

      // Draw contour lines
      drawContours(time);

      // Update and draw gradient descent point
      updateGDPoint(time);
      drawGDPoint();

      requestAnimationFrame(animate);
    };

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
