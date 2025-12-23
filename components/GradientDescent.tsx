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

    // Gradient descent visualization
    let time = 0;
    const points: Array<{ x: number; y: number; z: number }> = [];
    const path: Array<{ x: number; y: number }> = [];

    // Initialize points for 3D surface
    for (let i = 0; i < 50; i++) {
      for (let j = 0; j < 50; j++) {
        const x = (i / 50) * canvas.width;
        const y = (j / 50) * canvas.height;
        const z = Math.sin(i * 0.2) * Math.cos(j * 0.2) * 50;
        points.push({ x, y, z });
      }
    }

    // Gradient descent path
    let currentX = canvas.width * 0.2;
    let currentY = canvas.height * 0.3;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Draw 3D surface (loss landscape)
      ctx.strokeStyle = "rgba(30, 64, 175, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < points.length - 1; i++) {
        const p1 = points[i];
        const p2 = points[i + 1];
        if (Math.abs(p1.x - p2.x) < canvas.width / 50) {
          const z1 = p1.z + Math.sin(time + p1.x * 0.01) * 20;
          const z2 = p2.z + Math.sin(time + p2.x * 0.01) * 20;
          const y1 = p1.y + z1;
          const y2 = p2.y + z2;
          ctx.beginPath();
          ctx.moveTo(p1.x, y1);
          ctx.lineTo(p2.x, y2);
          ctx.stroke();
        }
      }

      // Gradient descent path
      const gradientX = Math.sin(currentX * 0.01 + time) * 0.5;
      const gradientY = Math.cos(currentY * 0.01 + time) * 0.5;
      currentX -= gradientX * 2;
      currentY -= gradientY * 2;

      // Keep within bounds
      currentX = Math.max(0, Math.min(canvas.width, currentX));
      currentY = Math.max(0, Math.min(canvas.height, currentY));

      path.push({ x: currentX, y: currentY });
      if (path.length > 200) path.shift();

      // Draw path
      ctx.strokeStyle = "#1e40af";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 1; i < path.length; i++) {
        ctx.moveTo(path[i - 1].x, path[i - 1].y);
        ctx.lineTo(path[i].x, path[i].y);
      }
      ctx.stroke();

      // Draw current point with glow
      ctx.fillStyle = "#1e40af";
      ctx.shadowBlur = 20;
      ctx.shadowColor = "#1e40af";
      ctx.beginPath();
      ctx.arc(currentX, currentY, 6, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw contour lines
      ctx.strokeStyle = "rgba(139, 92, 246, 0.2)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 10; i++) {
        const radius = 50 + i * 30;
        ctx.beginPath();
        ctx.arc(currentX, currentY, radius, 0, Math.PI * 2);
        ctx.stroke();
      }

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
      className="fixed inset-0 w-full h-full pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
}

