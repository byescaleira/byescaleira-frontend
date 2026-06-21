"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "blue" | "amber" | "teal" | "none";
}

export function GlassCard({
  children,
  className,
  hover = false,
  glow = "none",
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl p-6 transition-colors duration-300",
        "liquid-glass",
        hover && "hover:bg-white/[0.06]",
        glow === "blue" && "glow-blue",
        glow === "amber" && "glow-amber",
        glow === "teal" && "glow-teal",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25 }}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.05)_45%,rgba(255,255,255,0.12)_50%,rgba(255,255,255,0.05)_55%,transparent_60%)] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
      {children}
    </motion.div>
  );
}
