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
    pulsar: "hover:border-[#FF6B00]",
    nebula: "hover:border-[#3B82F6]",
    teal: "hover:border-[#14B8A6]",
    none: "hover:border-[#374151]",
  }[accent];

  return (
    <motion.div
      className={cn(
        "group relative overflow-hidden border border-[#1F2937] bg-[#0B0F19] p-5 transition-all duration-300",
        hover && accentClass,
        hover && "hover:bg-[#111827]",
        className
      )}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
