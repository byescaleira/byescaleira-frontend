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
        "group relative overflow-hidden rounded-2xl p-6 transition-all duration-300",
        "liquid-glass",
        hover && "hover:bg-white/[0.07] hover:shadow-[0_0_40px_-12px_rgba(59,130,246,0.2)]",
        glow === "blue" && "glow-blue",
        glow === "amber" && "glow-amber",
        glow === "teal" && "glow-teal",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25 }}
    >
      {/* Static reflection sheen */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_35%,rgba(255,255,255,0.04)_45%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.04)_55%,transparent_65%)] opacity-30 transition-opacity duration-700 group-hover:opacity-80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {children}
    </motion.div>
  );
}
