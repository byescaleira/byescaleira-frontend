"use client";

import { useEffect, useRef } from "react";
import { useScroll, useSpring } from "framer-motion";

interface Star {
  x: number;
  y: number;
  size: number;
  baseOpacity: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  depth: number;
}

function createStars(count: number, width: number, height: number): Star[] {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const depth = Math.random();
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 0.5 + Math.random() * 1.5 + depth * 1.2,
      baseOpacity: 0.12 + Math.random() * 0.45 + depth * 0.2,
      opacity: 0,
      twinkleSpeed: 0.4 + Math.random() * 1.8,
      twinkleOffset: Math.random() * Math.PI * 2,
      depth,
    });
  }
  return stars;
}

export function StarField({ count = 220 }: { count?: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const dimensionsRef = useRef({ width: 0, height: 0, dpr: 1 });

  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 60,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      dimensionsRef.current = { width, height, dpr };
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      starsRef.current = createStars(count, width, height);
    };

    resize();
    window.addEventListener("resize", resize);
    startTimeRef.current = performance.now();

    const draw = (time: number) => {
      const { width, height } = dimensionsRef.current;
      const scroll = smoothScrollY.get();
      const elapsed = (time - startTimeRef.current) / 1000;

      ctx.clearRect(0, 0, width, height);

      // Deep space nebula gradients — adapt to orange/blue palette
      const nebula = ctx.createRadialGradient(
        width * 0.25,
        height * 0.25,
        0,
        width * 0.25,
        height * 0.25,
        width * 0.7
      );
      nebula.addColorStop(0, "rgba(255, 107, 0, 0.16)");
      nebula.addColorStop(0.4, "rgba(255, 107, 0, 0.05)");
      nebula.addColorStop(1, "transparent");
      ctx.fillStyle = nebula;
      ctx.fillRect(0, 0, width, height);

      const cosmos = ctx.createRadialGradient(
        width * 0.78,
        height * 0.82,
        0,
        width * 0.78,
        height * 0.82,
        width * 0.65
      );
      cosmos.addColorStop(0, "rgba(59, 130, 246, 0.12)");
      cosmos.addColorStop(0.45, "rgba(59, 130, 246, 0.04)");
      cosmos.addColorStop(1, "transparent");
      ctx.fillStyle = cosmos;
      ctx.fillRect(0, 0, width, height);

      // Stars with parallax
      starsRef.current.forEach((star) => {
        const twinkle = Math.sin(elapsed * star.twinkleSpeed + star.twinkleOffset);
        star.opacity = Math.max(0.05, star.baseOpacity + twinkle * 0.12);

        const parallax = scroll * (0.03 + star.depth * 0.12);
        const y = (star.y - parallax) % height;
        const drawY = y < 0 ? y + height : y;

        ctx.beginPath();
        ctx.arc(star.x, drawY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(248, 250, 252, ${star.opacity})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, [count, smoothScrollY]);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        aria-hidden="true"
      />
      <div className="absolute inset-0 grid-subtle opacity-40" />
    </div>
  );
}
