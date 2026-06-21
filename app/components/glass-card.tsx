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
        "liquid-glass rounded-2xl p-6 transition-colors duration-300",
        hover && "hover:bg-white/[0.06]",
        glow === "blue" && "glow-blue",
        glow === "amber" && "glow-amber",
        glow === "teal" && "glow-teal",
        className
      )}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  );
}
