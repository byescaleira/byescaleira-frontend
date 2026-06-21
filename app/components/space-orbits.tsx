"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface OrbitPathProps {
  className?: string;
  size?: number;
  duration?: number;
  reverse?: boolean;
  opacity?: number;
  color?: "orange" | "blue" | "mixed";
  thickness?: number;
}

export function OrbitPath({
  className,
  size = 400,
  duration = 30,
  reverse = false,
  opacity = 0.35,
  color = "orange",
  thickness = 1,
}: OrbitPathProps) {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1500], reverse ? [0, -90] : [0, 90]);
  const smoothRotate = useSpring(rotate, { stiffness: 50, damping: 30 });

  const strokeColor =
    color === "orange"
      ? "rgba(255,107,0,OPACITY)"
      : color === "blue"
        ? "rgba(59,130,246,OPACITY)"
        : "url(#mixedGradient)";

  const resolvedStroke = strokeColor.replace("OPACITY", String(opacity));

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
          <linearGradient id="mixedGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,107,0,0.5)" />
            <stop offset="60%" stopColor="rgba(59,130,246,0.3)" />
            <stop offset="100%" stopColor="rgba(255,107,0,0.1)" />
          </linearGradient>
        </defs>

        {/* Outer dashed ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.46}
          fill="none"
          stroke={resolvedStroke}
          strokeWidth={thickness}
          strokeDasharray={`${size * 0.04} ${size * 0.06}`}
          opacity={opacity}
        />

        {/* Middle solid ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.34}
          fill="none"
          stroke={resolvedStroke}
          strokeWidth={thickness * 0.7}
          opacity={opacity * 0.7}
        />

        {/* Inner dotted ring */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size * 0.22}
          fill="none"
          stroke={resolvedStroke}
          strokeWidth={thickness * 0.6}
          strokeDasharray={`${size * 0.01} ${size * 0.04}`}
          opacity={opacity * 0.5}
        />

        {/* Satellites orbiting on rings */}
        {[0.46, 0.34, 0.22].map((ratio, i) => (
          <motion.circle
            key={i}
            cx={size / 2}
            cy={size / 2}
            r={size * 0.02}
            fill="rgba(255,107,0,0.8)"
            animate={{
              cx: [
                size / 2 + size * ratio * Math.cos(0),
                size / 2 + size * ratio * Math.cos(Math.PI / 2),
                size / 2 + size * ratio * Math.cos(Math.PI),
                size / 2 + size * ratio * Math.cos((3 * Math.PI) / 2),
                size / 2 + size * ratio * Math.cos(2 * Math.PI),
              ],
              cy: [
                size / 2 + size * ratio * Math.sin(0),
                size / 2 + size * ratio * Math.sin(Math.PI / 2),
                size / 2 + size * ratio * Math.sin(Math.PI),
                size / 2 + size * ratio * Math.sin((3 * Math.PI) / 2),
                size / 2 + size * ratio * Math.sin(2 * Math.PI),
              ],
            }}
            transition={{
              duration: duration + i * 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </svg>
    </motion.div>
  );
}

interface PlanetProps {
  className?: string;
  size?: number;
  color?: "orange" | "blue" | "muted";
  glow?: boolean;
}

export function Planet({ className, size = 12, color = "orange", glow = true }: PlanetProps) {
  const colorClass =
    color === "orange"
      ? "bg-primary"
      : color === "blue"
        ? "bg-blue-500"
        : "bg-muted-foreground";

  return (
    <motion.div
      className={cn("rounded-full", colorClass, className)}
      style={{
        width: size,
        height: size,
        boxShadow: glow ? `0 0 ${size * 1.5}px ${size * 0.5}px var(--pulsar)` : undefined,
      }}
      animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
      transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden="true"
    />
  );
}

interface ConstellationProps {
  className?: string;
  count?: number;
}

export function Constellation({ className, count = 8 }: ConstellationProps) {
  return (
    <div className={cn("pointer-events-none absolute", className)} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const r = 60 + Math.random() * 40;
        return (
          <motion.div
            key={i}
            className="absolute size-1 rounded-full bg-primary/50"
            style={{
              left: Math.cos(angle) * r + 80,
              top: Math.sin(angle) * r + 80,
            }}
            animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.4, 1] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        );
      })}
    </div>
  );
}
