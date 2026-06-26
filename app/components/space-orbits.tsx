"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useId } from "react";
import { cn } from "@/lib/utils";

interface OrbitPathProps {
  className?: string;
  size?: number;
  duration?: number;
  reverse?: boolean;
  opacity?: number;
  color?: "orange" | "blue" | "mixed";
  thickness?: number;
  satellites?: number;
}

export function OrbitPath({
  className,
  size = 400,
  duration = 30,
  reverse = false,
  opacity = 0.55,
  color = "orange",
  thickness = 1.5,
  satellites = 2,
}: OrbitPathProps) {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1200], reverse ? [0, -120] : [0, 120]);
  const smoothRotate = useSpring(rotate, { stiffness: 60, damping: 30 });

  const gradientId = useId();

  return (
    <motion.div
      style={{ rotate: smoothRotate }}
      className={cn("pointer-events-none absolute select-none", className)}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="overflow-visible"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={color === "blue" ? "rgba(59,130,246,0.7)" : "rgba(255,107,0,0.7)"} />
            <stop offset="50%" stopColor={color === "blue" ? "rgba(59,130,246,0.4)" : "rgba(255,140,0,0.45)"} />
            <stop offset="100%" stopColor={color === "blue" ? "rgba(59,130,246,0.1)" : "rgba(255,107,0,0.1)"} />
          </linearGradient>
        </defs>

        {/* Outer dashed ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.46}
          fill="none"
          stroke={`url(#${gradientId})`}
          strokeWidth={thickness}
          strokeDasharray={`${size * 0.05} ${size * 0.04}`}
          opacity={opacity}
        />

        {/* Middle solid ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.32}
          fill="none"
          stroke={color === "blue" ? "rgba(59,130,246,0.5)" : "rgba(255,107,0,0.5)"}
          strokeWidth={thickness * 0.7}
          opacity={opacity * 0.7}
        />

        {/* Inner dotted ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.18}
          fill="none"
          stroke={color === "blue" ? "rgba(59,130,246,0.35)" : "rgba(255,107,0,0.35)"}
          strokeWidth={thickness * 0.6}
          strokeDasharray={`${size * 0.01} ${size * 0.03}`}
          opacity={opacity * 0.5}
        />

        {/* Satellites */}
        {Array.from({ length: satellites }).map((_, i) => {
          const ringRatio = [0.46, 0.32, 0.18][i % 3];
          const orbitDuration = duration + i * 10;
          return (
            <motion.circle
              key={i}
              cx={size / 2}
              cy={size / 2}
              r={Math.max(4, size * 0.012)}
              fill={color === "blue" ? "#60A5FA" : "#FF6B00"}
              animate={{
                cx: Array.from({ length: 5 }, (_, k) =>
                  size / 2 + size * ringRatio * Math.cos((k * Math.PI * 2) / 4)
                ),
                cy: Array.from({ length: 5 }, (_, k) =>
                  size / 2 + size * ringRatio * Math.sin((k * Math.PI * 2) / 4)
                ),
              }}
              transition={{
                duration: orbitDuration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                filter: `drop-shadow(0 0 ${size * 0.02}px ${color === "blue" ? "#60A5FA" : "#FF6B00"})`,
              }}
            />
          );
        })}
      </svg>
    </motion.div>
  );
}

interface OrbitNodeProps {
  className?: string;
  label?: string;
  active?: boolean;
  color?: "orange" | "blue";
}

export function OrbitNode({ className, label, active = false, color = "orange" }: OrbitNodeProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute flex flex-col items-center",
        className
      )}
      aria-hidden="true"
    >
      <motion.div
        className={cn(
          "rounded-full border-2",
          color === "orange"
            ? active
              ? "border-primary bg-primary"
              : "border-primary/50 bg-background"
            : active
              ? "border-blue-500 bg-blue-500"
              : "border-blue-500/50 bg-background"
        )}
        animate={{ scale: active ? [1, 1.2, 1] : [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ width: active ? 16 : 12, height: active ? 16 : 12 }}
      />
      {label && (
        <span className="mt-2 text-[10px] uppercase tracking-wider text-muted-foreground">{label}</span>
      )}
    </div>
  );
}

// Deterministic pseudo-random helper for constellation points.
function seededRandom(seed: number) {
  const x = Math.sin(seed * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

interface ConstellationProps {
  className?: string;
  count?: number;
  connected?: boolean;
}

export function Constellation({ className, count = 8, connected = true }: ConstellationProps) {
  const points = Array.from({ length: count }).map((_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const r = 70 + seededRandom(i) * 40;
    return {
      x: Math.cos(angle) * r + 100,
      y: Math.sin(angle) * r + 100,
      delay: seededRandom(i + 100) * 2,
      duration: 3 + seededRandom(i + 200) * 2,
    };
  });

  return (
    <svg
      width={200}
      height={200}
      viewBox="0 0 200 200"
      className={cn("pointer-events-none absolute overflow-visible", className)}
      aria-hidden="true"
    >
      {connected &&
        points.map((p, i) => {
          const next = points[(i + 1) % points.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={p.x}
              y1={p.y}
              x2={next.x}
              y2={next.y}
              stroke="rgba(255,107,0,0.25)"
              strokeWidth={1}
              strokeDasharray="4 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: p.delay }}
            />
          );
        })}
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.x}
          cy={p.y}
          r={3}
          fill="rgba(255,107,0,0.8)"
          animate={{ opacity: [0.3, 1, 0.3], scale: [1, 1.4, 1] }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}
    </svg>
  );
}

interface PlanetProps {
  className?: string;
  size?: number;
  color?: "orange" | "blue" | "muted";
  glow?: boolean;
}

export function Planet({ className, size = 12, color = "orange", glow = true }: PlanetProps) {
  const fill =
    color === "orange"
      ? "#FF6B00"
      : color === "blue"
        ? "#3B82F6"
        : "#64748B";

  return (
    <motion.div
      className={cn("rounded-full", className)}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle at 30% 30%, ${fill}, ${fill}88)`,
        boxShadow: glow ? `0 0 ${size * 1.8}px ${size * 0.6}px ${fill}66` : undefined,
      }}
      animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 4 + (size % 7) * 0.5, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

interface SectionOrbitRingProps {
  className?: string;
  sectionProgress?: number;
  color?: "orange" | "blue";
}

export function SectionOrbitRing({ className, sectionProgress = 0, color = "orange" }: SectionOrbitRingProps) {
  const size = 320;
  const stroke = color === "orange" ? "#FF6B00" : "#3B82F6";
  const circumference = 2 * Math.PI * (size * 0.45);
  const progressOffset = circumference * (1 - Math.min(1, Math.max(0, sectionProgress)));

  return (
    <div className={cn("pointer-events-none absolute", className)} aria-hidden="true">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.45}
          fill="none"
          stroke={stroke}
          strokeWidth={2}
          opacity={0.12}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.45}
          fill="none"
          stroke={stroke}
          strokeWidth={3}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          opacity={0.6}
        />
      </svg>
    </div>
  );
}
