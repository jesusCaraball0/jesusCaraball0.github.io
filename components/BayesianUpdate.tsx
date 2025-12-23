"use client";

import { useEffect, useRef } from "react";

export default function BayesianUpdate() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    let animationId: number;
    let time = 0;

    // Distribution functions
    const gaussian = (x: number, mean: number, std: number) => {
      const exponent = -0.5 * Math.pow((x - mean) / std, 2);
      return Math.exp(exponent);
    };

    const beta = (x: number, alpha: number, betaParam: number) => {
      const t = (x + 4) / 8;
      if (t <= 0.01 || t >= 0.99) return 0;
      const result = Math.pow(t, alpha - 1) * Math.pow(1 - t, betaParam - 1);
      return Math.min(result, 3);
    };

    const bimodal = (x: number, mean1: number, mean2: number, std: number) => {
      return 0.5 * gaussian(x, mean1, std) + 0.5 * gaussian(x, mean2, std);
    };

    const uniform = (x: number, a: number, b: number) => {
      if (x >= a && x <= b) return 0.8;
      const edge = 0.3;
      if (x >= a - edge && x < a) return 0.8 * (1 - (a - x) / edge);
      if (x > b && x <= b + edge) return 0.8 * (1 - (x - b) / edge);
      return 0;
    };

    const laplace = (x: number, mu: number, b: number) => {
      return Math.exp(-Math.abs(x - mu) / b);
    };

    const cauchy = (x: number, x0: number, gamma: number) => {
      return 1 / (1 + Math.pow((x - x0) / gamma, 2));
    };

    const easeInOutCubic = (t: number) => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const phases = [
      { name: "gaussian", duration: 3000 },
      { name: "narrow", duration: 3000 },
      { name: "bimodal", duration: 3500 },
      { name: "beta-right", duration: 3000 },
      { name: "beta-left", duration: 3000 },
      { name: "uniform", duration: 2500 },
      { name: "laplace", duration: 3000 },
      { name: "cauchy", duration: 3000 },
    ];

    const totalCycle = phases.reduce((sum, p) => sum + p.duration, 0);

    const getDistributionValue = (x: number, phaseIndex: number, progress: number): number => {
      const nextPhaseIndex = (phaseIndex + 1) % phases.length;
      const currentPhase = phases[phaseIndex].name;
      const nextPhase = phases[nextPhaseIndex].name;

      const getPhaseValue = (phaseName: string, x: number): number => {
        switch (phaseName) {
          case "gaussian":
            return gaussian(x, 0, 1.8);
          case "narrow":
            return gaussian(x, 0.3, 0.6);
          case "bimodal":
            return bimodal(x, -1.5, 1.5, 0.7);
          case "beta-right":
            return beta(x, 2, 5) * 0.8;
          case "beta-left":
            return beta(x, 5, 2) * 0.8;
          case "uniform":
            return uniform(x, -2, 2);
          case "laplace":
            return laplace(x, 0, 0.5);
          case "cauchy":
            return cauchy(x, 0, 0.8);
          default:
            return gaussian(x, 0, 1);
        }
      };

      const currentValue = getPhaseValue(currentPhase, x);
      const nextValue = getPhaseValue(nextPhase, x);
      return lerp(currentValue, nextValue, easeInOutCubic(progress));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Distribution centered in visible area
      const centerX = canvas.width * 0.5;
      const centerY = canvas.height * 0.55; // Slightly below center
      const scaleX = canvas.width * 0.1;
      const scaleY = canvas.height * 0.4; // Height of the curve

      // Calculate current phase
      const cycleTime = time % totalCycle;
      let accumulated = 0;
      let phaseIndex = 0;
      let phaseProgress = 0;

      for (let i = 0; i < phases.length; i++) {
        if (cycleTime < accumulated + phases[i].duration) {
          phaseIndex = i;
          phaseProgress = (cycleTime - accumulated) / phases[i].duration;
          break;
        }
        accumulated += phases[i].duration;
      }

      // Collect points for the curve
      const points: { x: number; y: number }[] = [];
      for (let px = 0; px <= canvas.width; px += 2) {
        const x = (px - centerX) / scaleX;
        const y = getDistributionValue(x, phaseIndex, phaseProgress);
        const screenY = centerY - y * scaleY;
        points.push({ x: px, y: screenY });
      }

      // Draw filled area under curve (upward from center)
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      points.forEach((point) => ctx.lineTo(point.x, point.y));
      ctx.lineTo(canvas.width, centerY);
      ctx.closePath();

      const gradientUp = ctx.createLinearGradient(0, centerY - scaleY, 0, centerY);
      gradientUp.addColorStop(0, "rgba(99, 102, 241, 0.1)");
      gradientUp.addColorStop(0.5, "rgba(139, 92, 246, 0.06)");
      gradientUp.addColorStop(1, "rgba(79, 70, 229, 0.02)");
      ctx.fillStyle = gradientUp;
      ctx.fill();

      // Draw mirrored distribution below (reflection)
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      points.forEach((point) => {
        const mirroredY = centerY + (centerY - point.y);
        ctx.lineTo(point.x, mirroredY);
      });
      ctx.lineTo(canvas.width, centerY);
      ctx.closePath();

      const gradientDown = ctx.createLinearGradient(0, centerY, 0, centerY + scaleY);
      gradientDown.addColorStop(0, "rgba(79, 70, 229, 0.02)");
      gradientDown.addColorStop(0.5, "rgba(139, 92, 246, 0.04)");
      gradientDown.addColorStop(1, "rgba(99, 102, 241, 0.07)");
      ctx.fillStyle = gradientDown;
      ctx.fill();

      // Draw the main curve line (top)
      ctx.beginPath();
      points.forEach((point, i) => {
        if (i === 0) ctx.moveTo(point.x, point.y);
        else ctx.lineTo(point.x, point.y);
      });
      ctx.strokeStyle = "rgba(129, 140, 248, 0.18)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Draw mirrored curve line (bottom)
      ctx.beginPath();
      points.forEach((point, i) => {
        const mirroredY = centerY + (centerY - point.y);
        if (i === 0) ctx.moveTo(point.x, mirroredY);
        else ctx.lineTo(point.x, mirroredY);
      });
      ctx.strokeStyle = "rgba(129, 140, 248, 0.12)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Subtle center line
      ctx.beginPath();
      ctx.moveTo(0, centerY);
      ctx.lineTo(canvas.width, centerY);
      ctx.strokeStyle = "rgba(148, 163, 184, 0.05)";
      ctx.lineWidth = 1;
      ctx.stroke();

      time += 16;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ opacity: 0.8, pointerEvents: "none" }}
    />
  );
}
