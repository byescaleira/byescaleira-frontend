"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Satellite {
  label: string;
  angle: number;
  distance: number;
  color: string;
}

interface CodeOrbitProps {
  satellites: Satellite[];
  size?: number;
  className?: string;
}

export function CodeOrbit({ satellites, size = 420, className }: CodeOrbitProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const ringOffset = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const cx = size / 2;
  const cy = size / 2;
  const outerR = size * 0.42;
  const innerR = size * 0.28;

  return (
    <motion.div
      ref={containerRef}
      style={{ width: size, height: size }}
      className={`pointer-events-none relative select-none ${className}`}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="absolute inset-0 overflow-visible"
      >
        <defs>
          <linearGradient id="orbitOrange" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,107,0,0.6)" />
            <stop offset="100%" stopColor="rgba(255,107,0,0.05)" />
          </linearGradient>
          <linearGradient id="orbitBlue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
            <stop offset="100%" stopColor="rgba(59,130,246,0.05)" />
          </linearGradient>
        </defs>

        {/* Outer ring — animates via dash offset on scroll */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={outerR}
          fill="none"
          stroke="url(#orbitOrange)"
          strokeWidth={1.5}
          strokeDasharray={`${size * 0.05} ${size * 0.04}`}
          strokeDashoffset={ringOffset}
          opacity={0.7}
        />

        {/* Inner ring */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={innerR}
          fill="none"
          stroke="url(#orbitBlue)"
          strokeWidth={1}
          strokeDasharray={`${size * 0.02} ${size * 0.03}`}
          strokeDashoffset={useTransform(ringOffset, (v) => -v * 1.5)}
          opacity={0.5}
        />

        {/* Satellite nodes and connection lines */}
        {satellites.map((sat, i) => {
          const sx = cx + Math.cos((sat.angle * Math.PI) / 180) * sat.distance;
          const sy = cy + Math.sin((sat.angle * Math.PI) / 180) * sat.distance;
          return (
            <g key={sat.label}>
              <motion.line
                x1={cx}
                y1={cy}
                x2={sx}
                y2={sy}
                stroke={sat.color}
                strokeWidth={1}
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.35 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
              />
              <motion.circle
                cx={sx}
                cy={sy}
                r={6}
                fill={sat.color}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 + 0.3 }}
                style={{
                  filter: `drop-shadow(0 0 6px ${sat.color})`,
                }}
              />
            </g>
          );
        })}

        {/* Center node */}
        <circle cx={cx} cy={cy} r={10} fill="#FF6B00" opacity={0.9} />
        <circle cx={cx} cy={cy} r={18} fill="none" stroke="#FF6B00" strokeWidth={1} opacity={0.4} />
      </svg>

      {/* Labels */}
      {satellites.map((sat, i) => {
        const sx = cx + Math.cos((sat.angle * Math.PI) / 180) * sat.distance;
        const sy = cy + Math.sin((sat.angle * Math.PI) / 180) * sat.distance;
        return (
          <motion.div
            key={`label-${sat.label}`}
            className="absolute text-[10px] font-black uppercase tracking-wider text-foreground"
            style={{
              left: sx,
              top: sy,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 + 0.5 }}
          >
            {sat.label}
          </motion.div>
        );
      })}
    </motion.div>
  );
}
