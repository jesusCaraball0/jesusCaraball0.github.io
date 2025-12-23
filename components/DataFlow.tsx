"use client";

import { useEffect, useRef } from "react";

export default function DataFlow() {
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

    // Data packets
    const packets: Array<{ x: number; y: number; speed: number; size: number }> = [];

    // Initialize packets
    for (let i = 0; i < 20; i++) {
      packets.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1 + Math.random() * 2,
        size: 2 + Math.random() * 4,
      });
    }

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      packets.forEach((packet) => {
        // Move packet
        packet.x += packet.speed;
        if (packet.x > canvas.width) {
          packet.x = -10;
          packet.y = Math.random() * canvas.height;
        }

        // Draw packet with trail
        const gradient = ctx.createLinearGradient(
          packet.x - 20,
          packet.y,
          packet.x,
          packet.y
        );
        gradient.addColorStop(0, "rgba(30, 64, 175, 0)");
        gradient.addColorStop(1, "rgba(30, 64, 175, 0.6)");

        ctx.fillStyle = gradient;
        ctx.fillRect(packet.x - 20, packet.y - 1, 20, 2);

        // Draw packet
        ctx.fillStyle = "#1e40af";
        ctx.shadowBlur = 10;
        ctx.shadowColor = "#1e40af";
        ctx.beginPath();
        ctx.arc(packet.x, packet.y, packet.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

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

