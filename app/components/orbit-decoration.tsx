"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbitDecorationProps {
  className?: string;
  satellites?: number;
  reverse?: boolean;
}

export function OrbitDecoration({
  className,
  satellites = 3,
  reverse = false,
}: OrbitDecorationProps) {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], reverse ? [0, -180] : [0, 180]);

  return (
    <motion.div
      style={{ rotate }}
      className={cn("pointer-events-none absolute select-none", className)}
      aria-hidden="true"
    >
      <svg viewBox="0 0 400 400" className="h-full w-full opacity-30">
        <defs>
          <linearGradient id="orbitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
            <stop offset="50%" stopColor="rgba(20,184,166,0.35)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
          </linearGradient>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="url(#orbitGradient)"
          strokeWidth="1"
          strokeDasharray="8 8"
        />
        <circle
          cx="200"
          cy="200"
          r="120"
          fill="none"
          stroke="rgba(248,250,252,0.08)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="80"
          fill="none"
          stroke="rgba(59,130,246,0.2)"
          strokeWidth="1"
          strokeDasharray="4 12"
        />
        {Array.from({ length: satellites }).map((_, i) => {
          const angle = (i / satellites) * Math.PI * 2;
          const r = 160;
          const x = 200 + Math.cos(angle) * r;
          const y = 200 + Math.sin(angle) * r;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill="rgba(59,130,246,0.25)" />
              <circle cx={x} cy={y} r="3" fill="rgba(248,250,252,0.8)" />
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}

export function SatelliteStrip({ className, reverse = false }: { className?: string; reverse?: boolean }) {
  return (
    <div className={cn("pointer-events-none absolute flex select-none gap-8", className)} aria-hidden="true">
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={i}
          animate={{ y: [0, -16, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          className="size-2 rounded-full bg-nebula/40 shadow-[0_0_12px_rgba(59,130,246,0.5)]"
        />
      ))}
    </div>
  );
}
