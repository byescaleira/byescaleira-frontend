"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface BrutalistCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  accent?: "pulsar" | "nebula" | "teal" | "none";
}

export function BrutalistCard({
  children,
  className,
  hover = true,
  accent = "none",
}: BrutalistCardProps) {
  const accentClass = {
    pulsar: "hover:border-primary",
    nebula: "hover:border-nebula",
    teal: "hover:border-teal",
    none: "hover:border-muted-foreground/30",
  }[accent];

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden border border-border bg-background p-5 transition-all duration-300",
        hover && accentClass,
        hover && "hover:bg-card",
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
