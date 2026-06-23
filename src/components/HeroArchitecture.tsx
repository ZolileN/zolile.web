'use client';

import React, { useRef, useEffect, useState } from 'react';

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  label?: string;
  isStatic?: boolean;
}

export default function HeroArchitecture() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [dimensions, setDimensions] = useState({ width: 600, height: 600 });
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.clientWidth,
          height: containerRef.current.clientHeight || 550,
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize nodes
    const nodeCount = 35;
    const nodes: Node[] = [];
    const width = dimensions.width;
    const height = dimensions.height;

    // Fixed key system nodes (architectural components)
    const systemNodes = [
      { x: width * 0.25, y: height * 0.3, label: 'Mintry Interceptor' },
      { x: width * 0.75, y: height * 0.25, label: 'TLS Decrypt' },
      { x: width * 0.5, y: height * 0.5, label: 'FinOps Ledger' },
      { x: width * 0.2, y: height * 0.7, label: 'Compliance Engine' },
      { x: width * 0.8, y: height * 0.75, label: 'AI Fleet Router' },
    ];

    systemNodes.forEach((sn) => {
      nodes.push({
        x: sn.x,
        y: sn.y,
        vx: 0,
        vy: 0,
        radius: 6,
        label: sn.label,
        isStatic: true,
      });
    });

    // Random drift nodes
    for (let i = 0; i < nodeCount - systemNodes.length; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
        isStatic: false,
      });
    }

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Mouse interactive force
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Update positions
      nodes.forEach((node) => {
        if (!node.isStatic) {
          node.x += node.vx;
          node.y += node.vy;

          // Mouse push
          if (mx !== -1000 && my !== -1000) {
            const dx = node.x - mx;
            const dy = node.y - my;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const force = (120 - dist) / 120;
              node.x += (dx / dist) * force * 1.5;
              node.y += (dy / dist) * force * 1.5;
            }
          }

          // Boundary checks
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
        }
      });

      // Draw connections (edges)
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = nodes[i].isStatic || nodes[j].isStatic ? 160 : 100;

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.15;
            ctx.strokeStyle = `rgba(0, 229, 168, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[j].y);
            ctx.lineTo(nodes[j].x, nodes[j].y); // Horizontal-vertical layout paths to look architectural
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[i].x, nodes[j].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((node) => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);

        if (node.isStatic) {
          ctx.fillStyle = '#00E5A8';
          ctx.shadowBlur = 10;
          ctx.shadowColor = 'rgba(0, 229, 168, 0.8)';
          ctx.fill();
          ctx.shadowBlur = 0; // Reset shadow

          // Draw label box
          if (node.label) {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.85)';
            ctx.strokeStyle = '#1E1E1E';
            ctx.lineWidth = 1;
            const textWidth = ctx.measureText(node.label).width;
            ctx.fillRect(node.x - textWidth / 2 - 8, node.y - 28, textWidth + 16, 20);
            ctx.strokeRect(node.x - textWidth / 2 - 8, node.y - 28, textWidth + 16, 20);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '10px JetBrains Mono, monospace';
            ctx.textAlign = 'center';
            ctx.fillText(node.label, node.x, node.y - 14);
          }
        } else {
          ctx.fillStyle = 'rgba(161, 161, 170, 0.4)';
          ctx.fill();
        }
      });

      // Frame animation
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const handleMouseLeave = () => {
    mouseRef.current = { x: -1000, y: -1000 };
  };

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[450px] relative border border-border-custom bg-bg-secondary/40 rounded-2xl overflow-hidden glow-accent cursor-crosshair group"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute top-4 left-4 flex items-center space-x-2 z-10">
        <span className="w-2.5 h-2.5 rounded-full bg-accent animate-ping" />
        <span className="w-2.5 h-2.5 rounded-full bg-accent absolute" />
        <span className="font-mono text-[9px] text-accent font-semibold tracking-wider uppercase">Live Telemetry Simulator</span>
      </div>

      <div className="absolute bottom-4 right-4 flex items-center space-x-2 z-10 font-mono text-[9px] text-text-secondary">
        <span>FPS: 60 | Nodes: 35 | Edges: Dynamic</span>
      </div>

      <canvas 
        ref={canvasRef} 
        width={dimensions.width} 
        height={dimensions.height}
        className="block"
      />
    </div>
  );
}
