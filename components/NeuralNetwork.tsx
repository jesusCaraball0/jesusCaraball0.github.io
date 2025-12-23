"use client";

import { useEffect, useRef } from "react";

export default function NeuralNetwork() {
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

    // Neural network nodes
    const nodes: Array<{ x: number; y: number; layer: number; pulse: number }> = [];
    const layers = 4;
    const nodesPerLayer = [3, 5, 4, 2];

    // Initialize nodes
    for (let layer = 0; layer < layers; layer++) {
      for (let i = 0; i < nodesPerLayer[layer]; i++) {
        const x = (canvas.width / (layers + 1)) * (layer + 1);
        const y = (canvas.height / (nodesPerLayer[layer] + 1)) * (i + 1);
        nodes.push({ x, y, layer, pulse: Math.random() });
      }
    }

    // Connections
    const connections: Array<{ from: number; to: number }> = [];
    let nodeIndex = 0;
    for (let layer = 0; layer < layers - 1; layer++) {
      const currentLayerNodes = nodesPerLayer[layer];
      const nextLayerNodes = nodesPerLayer[layer + 1];
      const currentStart = nodeIndex;
      const nextStart = nodeIndex + currentLayerNodes;

      for (let i = 0; i < currentLayerNodes; i++) {
        for (let j = 0; j < nextLayerNodes; j++) {
          connections.push({
            from: currentStart + i,
            to: nextStart + j,
          });
        }
      }
      nodeIndex += currentLayerNodes;
    }

    let time = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time += 0.02;

      // Update node pulses
      nodes.forEach((node) => {
        node.pulse = (node.pulse + 0.02) % (Math.PI * 2);
      });

      // Draw connections
      ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
      ctx.lineWidth = 1;
      connections.forEach((conn) => {
        const from = nodes[conn.from];
        const to = nodes[conn.to];
        const opacity = 0.1 + Math.sin(time + conn.from) * 0.1;
        ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
      });

      // Draw nodes
      nodes.forEach((node) => {
        const pulseSize = 4 + Math.sin(node.pulse) * 3;
        const opacity = 0.4 + Math.sin(node.pulse) * 0.3;

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = node.layer % 2 === 0 ? "#1e40af" : "#8b5cf6";
        ctx.fillStyle = node.layer % 2 === 0 
          ? `rgba(0, 217, 255, ${opacity})` 
          : `rgba(139, 92, 246, ${opacity})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2);
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
      className="fixed inset-0 w-full h-full pointer-events-none opacity-20"
      style={{ zIndex: 0 }}
    />
  );
}

