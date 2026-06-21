"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface IphoneMockupProps {
  className?: string;
  float?: boolean;
  rotate?: boolean;
  screen?: "swiftui" | "code" | "gradient";
  size?: "sm" | "md" | "lg";
}

const screens = {
  swiftui: (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-primary/30" />
        <div className="h-2 w-20 rounded bg-white/10" />
      </div>
      <div className="mt-2 h-28 rounded-2xl bg-gradient-to-br from-primary/40 to-primary/30 p-3">
        <div className="h-2 w-16 rounded bg-white/20" />
        <div className="mt-2 h-2 w-24 rounded bg-white/10" />
        <div className="mt-4 flex gap-2">
          <div className="h-8 flex-1 rounded-xl bg-white/15" />
          <div className="h-8 flex-1 rounded-xl bg-white/15" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-2 w-full rounded bg-white/10" />
        <div className="h-2 w-5/6 rounded bg-white/10" />
        <div className="h-2 w-4/6 rounded bg-white/10" />
      </div>
      <div className="mt-auto flex justify-center gap-4">
        <div className="size-10 rounded-full bg-primary/30" />
        <div className="size-10 rounded-full bg-primary/30" />
        <div className="size-10 rounded-full bg-pulsar/30" />
      </div>
    </div>
  ),
  code: (
    <div className="flex h-full flex-col p-4 font-mono text-[10px] leading-relaxed text-blue-100/90">
      <span className="text-purple-300">struct</span>{" "}
      <span className="text-yellow-200">CartolaView</span>:{" "}
      <span className="text-yellow-200">View</span>{" "}
      {"{"}
      <div className="pl-3">
        <span className="text-purple-300">var</span>{" "}
        <span className="text-blue-200">body</span>:{" "}
        <span className="text-yellow-200">some</span>{" "}
        <span className="text-yellow-200">View</span>{" "}
        {"{"}
        <div className="pl-3">
          <span className="text-yellow-200">VStack</span>
          {"("}
          <span className="text-blue-200">spacing</span>:{" "}
          <span className="text-orange-300">12</span>
          {")"}
          {" {"}
          <div className="pl-3">
            <span className="text-yellow-200">Text</span>
            {"(\"Hello, Cartola\")"}
            <br />
            <span className="text-yellow-200">.font</span>
            {"(.title2)"}
            <br />
            <span className="text-yellow-200">.padding</span>
            {"()"}
          </div>
          {"}"}
        </div>
        {"}"}
      </div>
      {"}"}
    </div>
  ),
  gradient: (
    <div className="flex h-full flex-col items-center justify-center gap-3 p-4">
      <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary via-pulsar to-primary/70 shadow-lg shadow-primary/30" />
      <div className="text-center text-sm font-medium text-foreground">Deep Space</div>
      <div className="text-xs text-muted-foreground">Liquid Glass</div>
    </div>
  ),
};

const sizeClasses = {
  sm: "w-[180px]",
  md: "w-[240px]",
  lg: "w-[300px]",
};

export function IphoneMockup({
  className,
  float = true,
  rotate = false,
  screen = "swiftui",
  size = "md",
}: IphoneMockupProps) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 60]);
  const rotateZ = useTransform(scrollY, [0, 500], [0, rotate ? 6 : 0]);

  return (
    <motion.div
      style={{ y: float ? y : undefined, rotateZ: rotate ? rotateZ : undefined }}
      className={cn("pointer-events-none absolute select-none", sizeClasses[size], className)}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        animate={
          float
            ? {
                y: [0, -16, 0],
                rotate: [0, 1.5, -1.5, 0],
              }
            : undefined
        }
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Frame */}
        <div className="relative overflow-hidden rounded-[2.4rem] border-[6px] border-border bg-background p-1 shadow-2xl shadow-black/50">
          <div className="absolute top-0 left-1/2 z-10 h-5 w-24 -translate-x-1/2 rounded-b-xl bg-black/40" />
          <div className="aspect-[9/19.5] overflow-hidden rounded-[1.8rem] border border-white/5 bg-[hsl(var(--card))]">
            {screens[screen]}
          </div>
        </div>
        {/* Reflection */}
        <div className="pointer-events-none absolute inset-0 rounded-[2.4rem] bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.08)_48%,rgba(255,255,255,0.16)_52%,rgba(255,255,255,0.08)_56%,transparent_64%)] opacity-40" />
      </motion.div>
    </motion.div>
  );
}
