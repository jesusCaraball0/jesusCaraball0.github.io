"use client";

import { useEffect, useRef } from "react";

export default function LossLandscape() {
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

    // Simplex-like noise function
    const noise = (() => {
      const p = new Uint8Array(512);
      for (let i = 0; i < 256; i++) p[i] = i;
      for (let i = 255; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [p[i], p[j]] = [p[j], p[i]];
      }
      for (let i = 0; i < 256; i++) p[256 + i] = p[i];

      const fade = (t: number) => t * t * t * (t * (t * 6 - 15) + 10);
      const lerp = (a: number, b: number, t: number) => a + t * (b - a);
      const grad = (hash: number, x: number, y: number) => {
        const h = hash & 3;
        const u = h < 2 ? x : y;
        const v = h < 2 ? y : x;
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
      };

      return (x: number, y: number): number => {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;
        x -= Math.floor(x);
        y -= Math.floor(y);
        const u = fade(x);
        const v = fade(y);
        const A = p[X] + Y;
        const B = p[X + 1] + Y;
        return lerp(
          lerp(grad(p[A], x, y), grad(p[B], x - 1, y), u),
          lerp(grad(p[A + 1], x, y - 1), grad(p[B + 1], x - 1, y - 1), u),
          v
        );
      };
    })();

    // Multi-octave noise
    const fbm = (x: number, y: number, octaves: number, lacunarity: number, gain: number): number => {
      let value = 0;
      let amplitude = 1;
      let frequency = 1;
      let maxValue = 0;

      for (let i = 0; i < octaves; i++) {
        value += amplitude * noise(x * frequency, y * frequency);
        maxValue += amplitude;
        amplitude *= gain;
        frequency *= lacunarity;
      }

      return value / maxValue;
    };

    // Grid parameters
    const gridSize = 80;
    const cellSize = 12;

    // Camera parameters
    const camera = {
      rotationX: 0.75,
      rotationY: 0,
      distance: 800,
      fov: 600,
    };

    // Project 3D point to 2D
    const project = (x: number, y: number, z: number): { x: number; y: number; depth: number } | null => {
      // Rotate around Y axis
      let rx = x * Math.cos(camera.rotationY) - z * Math.sin(camera.rotationY);
      let rz = x * Math.sin(camera.rotationY) + z * Math.cos(camera.rotationY);

      // Rotate around X axis
      const ry = y * Math.cos(camera.rotationX) - rz * Math.sin(camera.rotationX);
      rz = y * Math.sin(camera.rotationX) + rz * Math.cos(camera.rotationX);

      // Translate
      rz += camera.distance;

      // Don't render if behind camera
      if (rz < 50) return null;

      // Perspective projection
      const scale = camera.fov / rz;
      return {
        x: canvas.width / 2 + rx * scale,
        y: canvas.height / 2 + ry * scale,
        depth: rz,
      };
    };

    let time = 0;
    const cycleDuration = 12; // 12 seconds per full training cycle

    const animate = () => {
      // Clear to deep black
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.008; // Slower time progression
      camera.rotationY += 0.0003; // Much slower rotation

      // Calculate phase progress (0 to 1 over cycle)
      const cycleTime = time % cycleDuration;
      const cycleProgress = cycleTime / cycleDuration;

      // Training progress variable (like uProgress in shader)
      let trainingProgress: number;
      let stochasticJitter = 0;
      let phaseLabel = "";

      if (cycleProgress < 0.15) {
        // Phase I: Initialization (Chaos) - hold at chaotic state
        trainingProgress = 0;
        stochasticJitter = 0.3;
        phaseLabel = "initialization";
      } else if (cycleProgress < 0.7) {
        // Phase II: Optimization (The Struggle) - smoothing transition
        const t = (cycleProgress - 0.15) / 0.55;
        trainingProgress = t * t * (3 - 2 * t); // Smooth step
        // Stochastic jitter - high in middle, fades at ends
        stochasticJitter = Math.sin(t * Math.PI) * 0.4;
        phaseLabel = "optimization";
      } else if (cycleProgress < 0.92) {
        // Phase III: Convergence (The Solution) - hold at smooth state
        trainingProgress = 1;
        stochasticJitter = 0;
        phaseLabel = "convergence";
      } else {
        // Transition: entropy spike, fracture back to chaos
        const t = (cycleProgress - 0.92) / 0.08;
        trainingProgress = 1 - t * t * t;
        stochasticJitter = t * 0.5;
        phaseLabel = "reset";
      }

      // Noise parameters based on training progress
      // Chaotic: high frequency, high amplitude, many octaves
      // Smooth: low frequency, low amplitude, few octaves
      const noiseFrequency = 0.08 - trainingProgress * 0.055; // 0.08 -> 0.025
      const noiseAmplitude = 120 - trainingProgress * 80; // 120 -> 40
      const octaves = Math.max(1, Math.floor(5 - trainingProgress * 3)); // 5 -> 2
      const vibrationSpeed = 8 - trainingProgress * 6; // 8 -> 2
      const vibrationAmplitude = 15 - trainingProgress * 14; // 15 -> 1

      // Generate mesh vertices
      interface Vertex {
        x: number;
        y: number;
        z: number;
        height: number;
      }

      const vertices: Vertex[][] = [];
      const halfGrid = (gridSize * cellSize) / 2;

      for (let i = 0; i <= gridSize; i++) {
        vertices[i] = [];
        for (let j = 0; j <= gridSize; j++) {
          const worldX = i * cellSize - halfGrid;
          const worldZ = j * cellSize - halfGrid;

          // Multi-frequency noise for height
          let height = fbm(
            worldX * noiseFrequency + time * 0.1,
            worldZ * noiseFrequency + time * 0.1,
            octaves,
            2.0,
            0.5
          ) * noiseAmplitude;

          // Add high-frequency vibration during chaos
          if (trainingProgress < 0.9) {
            height += Math.sin(worldX * 0.3 + time * vibrationSpeed) *
                     Math.cos(worldZ * 0.3 + time * vibrationSpeed * 0.7) *
                     vibrationAmplitude * (1 - trainingProgress);
          }

          // Add stochastic jitter during optimization
          if (stochasticJitter > 0) {
            const jitterNoise = noise(worldX * 0.1 + time * 3, worldZ * 0.1 + time * 3);
            height += jitterNoise * stochasticJitter * 30;
          }

          // Create basin shape during convergence
          const distFromCenter = Math.sqrt(worldX * worldX + worldZ * worldZ) / halfGrid;
          const basinShape = distFromCenter * distFromCenter * 60 * trainingProgress;
          height += basinShape;

          // Pronounced global minimum at center (always present, becomes more defined during training)
          const globalMinimumStrength = 0.3 + trainingProgress * 0.7; // 30% visible initially, 100% at convergence
          const globalMinimum = Math.exp(-distFromCenter * distFromCenter * 8) * -80 * globalMinimumStrength;
          height += globalMinimum;

          // Add slight radial ripples emanating from center (gradient waves)
          const ripplePhase = distFromCenter * 12 - time * 0.5;
          const rippleStrength = (1 - distFromCenter) * 8 * (0.2 + trainingProgress * 0.3);
          height += Math.sin(ripplePhase) * rippleStrength * Math.exp(-distFromCenter * 2);

          vertices[i][j] = {
            x: worldX,
            y: -height, // Negative so valleys go down
            z: worldZ,
            height: height,
          };
        }
      }

      // Collect all edges for depth sorting
      interface Edge {
        p1: { x: number; y: number };
        p2: { x: number; y: number };
        avgDepth: number;
        avgHeight: number;
      }

      const edges: Edge[] = [];

      for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
          const v00 = vertices[i][j];
          const v10 = vertices[i + 1][j];
          const v01 = vertices[i][j + 1];

          const p00 = project(v00.x, v00.y, v00.z);
          const p10 = project(v10.x, v10.y, v10.z);
          const p01 = project(v01.x, v01.y, v01.z);

          // Horizontal edge
          if (p00 && p10) {
            edges.push({
              p1: p00,
              p2: p10,
              avgDepth: (p00.depth + p10.depth) / 2,
              avgHeight: (v00.height + v10.height) / 2,
            });
          }

          // Vertical edge
          if (p00 && p01) {
            edges.push({
              p1: p00,
              p2: p01,
              avgDepth: (p00.depth + p01.depth) / 2,
              avgHeight: (v00.height + v01.height) / 2,
            });
          }
        }
      }

      // Sort by depth (painter's algorithm)
      edges.sort((a, b) => b.avgDepth - a.avgDepth);

      // Draw edges
      edges.forEach((edge) => {
        // Depth-based fog
        const maxDepth = camera.distance + halfGrid * 1.5;
        const minDepth = camera.distance - halfGrid;
        const depthNorm = (edge.avgDepth - minDepth) / (maxDepth - minDepth);
        const fog = Math.max(0, 1 - depthNorm * 1.2);

        // Height-based coloring (electric blue palette)
        const heightNorm = (edge.avgHeight + noiseAmplitude) / (noiseAmplitude * 2);
        
        // Color: from deep blue (valleys) to bright cyan (peaks)
        const hue = 195 + heightNorm * 20; // 195-215 (cyan range)
        const saturation = 90;
        const lightness = 30 + heightNorm * 40 + (1 - depthNorm) * 15;
        const alpha = fog * (0.5 + heightNorm * 0.4);

        if (alpha < 0.02) return; // Skip invisible edges

        ctx.beginPath();
        ctx.moveTo(edge.p1.x, edge.p1.y);
        ctx.lineTo(edge.p2.x, edge.p2.y);
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`;
        ctx.lineWidth = 1 + (1 - depthNorm) * 0.5;
        ctx.stroke();
      });

      // Subtle vignette
      const vignetteGradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.height * 0.3,
        canvas.width / 2, canvas.height / 2, canvas.height * 0.9
      );
      vignetteGradient.addColorStop(0, "transparent");
      vignetteGradient.addColorStop(1, "rgba(0, 0, 0, 0.6)");
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

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
