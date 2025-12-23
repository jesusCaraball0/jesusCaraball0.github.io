"use client";

import { useEffect, useRef } from "react";

export default function KnowledgeGraph() {
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

    // Knowledge graph nodes (publications)
    const nodes: Array<{ x: number; y: number; connections: number[] }> = [];
    const nodeCount = 24; // increased for denser coverage

    // Initialize nodes in a wider elliptical/network pattern
    for (let i = 0; i < nodeCount; i++) {
      const angle = (i / nodeCount) * Math.PI * 2;
      const radiusX = canvas.width * 0.45; // 90% width (0.45 * 2 = 0.9)
      const radiusY = canvas.height * 0.40; // 80% height (0.40 * 2 = 0.8)
      nodes.push({
        x: canvas.width / 2 + Math.cos(angle) * radiusX,
        y: canvas.height / 2 + Math.sin(angle) * radiusY,
        connections: [],
      });
    }

    // Create connections (each node connects to 2-3 others)
    nodes.forEach((node, i) => {
      const connectionCount = 2 + Math.floor(Math.random() * 2);
      for (let j = 0; j < connectionCount; j++) {
        const target = (i + 2 + j * 2) % nodeCount;
        if (!node.connections.includes(target)) {
          node.connections.push(target);
        }
      }
    });

    let time = 0;
    const flowSpeed = 0.18; // controls left-to-right flow speed

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      time += 0.01;

      // Draw connections with directional flow (left -> right emphasis)
      nodes.forEach((node, i) => {
        node.connections.forEach((targetIdx) => {
          const target = nodes[targetIdx];

          // Emphasize flow by using a brighter tail from left to right
          const grad = ctx.createLinearGradient(node.x, node.y, target.x, target.y);
          grad.addColorStop(0, "rgba(30, 64, 175, 0.08)");
          grad.addColorStop(0.6, "rgba(30, 64, 175, 0.22)");
          grad.addColorStop(1, "rgba(30, 64, 175, 0.3)");

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(target.x, target.y);
          ctx.stroke();

          // Moving packet along the edge to simulate max-flow
          const t = (time * flowSpeed + i * 0.12 + targetIdx * 0.07) % 1;
          const px = node.x + (target.x - node.x) * t;
          const py = node.y + (target.y - node.y) * t;

          ctx.shadowBlur = 14;
          ctx.shadowColor = "rgba(30, 64, 175, 0.6)";
          ctx.fillStyle = "rgba(30, 64, 175, 0.85)";
          ctx.beginPath();
          ctx.arc(px, py, 3.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        });
      });

      // Draw nodes (more subtle, less pulsing)
      nodes.forEach((node) => {
        const pulse = 0.55 + Math.sin(time * 1.3 + node.x * 0.001 + node.y * 0.001) * 0.15;
        const size = 4.5 + Math.sin(time * 0.7 + node.x * 0.002) * 1.2;

        ctx.shadowBlur = 18;
        ctx.shadowColor = "rgba(30, 64, 175, 0.7)";
        ctx.fillStyle = `rgba(30, 64, 175, ${pulse * 0.6})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
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
      className="fixed inset-0 w-full h-full pointer-events-none opacity-60"
      style={{ zIndex: 0 }}
    />
  );
}

