"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface IphoneMockupProps {
  className?: string;
  float?: boolean;
  rotate?: boolean;
  size?: "sm" | "md" | "lg";
  screen?: "swiftui" | "code" | "gradient";
}

/* Real iPhone 15 Pro logical specs */
const W = 393;
const H = 852;
const RADIUS = 56;
const BEZEL = 12;
const ISLAND_W = 126;
const ISLAND_H = 37;
const ISLAND_R = 20;
const TOP_SAFE = 59;
const BOTTOM_SAFE = 34;

function shade(hex: string, pct: number): string {
  const h = hex.trim();
  const m = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(h);
  if (!m) return hex;
  const [r, g, b] = [parseInt(m[1], 16), parseInt(m[2], 16), parseInt(m[3], 16)];
  const k = (100 + pct) / 100;
  const to = (v: number) => Math.max(0, Math.min(255, Math.round(v * k)));
  return `#${to(r).toString(16).padStart(2, "0")}${to(g).toString(16).padStart(2, "0")}${to(b).toString(16).padStart(2, "0")}`;
}

function SwiftUIScreen() {
  return (
    <div className="h-full w-full bg-gradient-to-br from-[#0B0F19] via-[#0f172a] to-[#1e293b] p-3">
      <div className="mb-3 rounded-xl bg-white/10 p-3 backdrop-blur-md">
        <div className="mb-2 h-2 w-20 rounded-full bg-primary/80" />
        <div className="space-y-2">
          <div className="h-2 w-full rounded-full bg-white/20" />
          <div className="h-2 w-3/4 rounded-full bg-white/15" />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div className="aspect-square rounded-2xl bg-primary/20" />
        <div className="aspect-square rounded-2xl bg-[#3B82F6]/20" />
        <div className="aspect-square rounded-2xl bg-[#8B5CF6]/20" />
        <div className="aspect-square rounded-2xl bg-white/10" />
      </div>
      <div className="mt-3 rounded-xl bg-white/10 p-3">
        <div className="h-2 w-16 rounded-full bg-primary/60" />
      </div>
    </div>
  );
}

function CodeScreen() {
  const lines = [
    { indent: 0, text: "struct CartolaView: View {", color: "#F472B6" },
    { indent: 2, text: "var body: some View {", color: "#60A5FA" },
    { indent: 4, text: "VStack(spacing: 12) {", color: "#F472B6" },
    { indent: 6, text: "Text(\"Hello\")", color: "#FACC15" },
    { indent: 6, text: ".font(.title)", color: "#A78BFA" },
    { indent: 6, text: ".foregroundColor(.primary)", color: "#A78BFA" },
    { indent: 4, text: "}", color: "#F472B6" },
    { indent: 2, text: "}", color: "#60A5FA" },
    { indent: 0, text: "}", color: "#F472B6" },
  ];

  return (
    <div className="h-full w-full bg-[#0d1117] p-4 font-mono text-[8px] leading-4 md:text-[10px]">
      {lines.map((line, i) => (
        <div key={i} className="flex">
          <span className="w-4 shrink-0 text-[#6b7280]">{i + 1}</span>
          <span style={{ paddingLeft: `${line.indent * 8}px`, color: line.color }}>
            {line.text}
          </span>
        </div>
      ))}
    </div>
  );
}

function GradientScreen() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-[#FF8C42] to-[#3B82F6]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_50%)]" />
      <div className="absolute bottom-8 left-4 right-4 rounded-2xl bg-black/30 p-3 backdrop-blur-md">
        <div className="h-2 w-24 rounded-full bg-white/80" />
        <div className="mt-2 h-1.5 w-full rounded-full bg-white/30" />
      </div>
    </div>
  );
}

export function IphoneMockup({
  className,
  float = true,
  rotate = true,
  size = "md",
  screen = "swiftui",
}: IphoneMockupProps) {
  const { scrollY } = useScroll();
  const rotateY = useTransform(scrollY, [0, 1000], [0, rotate ? 12 : 0]);
  const y = useTransform(scrollY, [0, 1000], [0, float ? -40 : 0]);
  const smoothRotate = useSpring(rotateY, { stiffness: 60, damping: 30 });
  const smoothY = useSpring(y, { stiffness: 60, damping: 30 });

  const scale = size === "sm" ? 0.55 : size === "lg" ? 0.85 : 0.7;
  const color = "#1c1e22"; // space-black
  const frameGradient = `linear-gradient(135deg, ${shade(color, 8)} 0%, ${color} 40%, ${shade(color, -14)} 100%)`;

  const outerWidth = W + BEZEL * 2;
  const outerHeight = H + BEZEL * 2;
  const outerRadius = RADIUS + BEZEL;

  const screens = {
    swiftui: <SwiftUIScreen />,
    code: <CodeScreen />,
    gradient: <GradientScreen />,
  };

  return (
    <motion.div
      style={{
        rotateY: smoothRotate,
        y: smoothY,
        perspective: 1200,
      }}
      animate={
        float
          ? {
              y: [0, -14, 0],
              rotateZ: [0, 1, 0],
            }
          : undefined
      }
      transition={
        float
          ? {
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
              rotateZ: { duration: 7, repeat: Infinity, ease: "easeInOut" },
            }
          : undefined
      }
      className={cn("pointer-events-none absolute", className)}
    >
      <div
        style={{
          width: outerWidth * scale,
          height: outerHeight * scale,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        aria-label="iPhone mockup"
      >
        {/* Frame */}
        <div
          style={{
            width: outerWidth,
            height: outerHeight,
            borderRadius: outerRadius,
            background: frameGradient,
            padding: BEZEL,
            boxShadow:
              "0 25px 60px rgba(0,0,0,0.45), 0 10px 20px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Screen */}
          <div
            style={{
              width: "100%",
              height: "100%",
              borderRadius: RADIUS,
              overflow: "hidden",
              position: "relative",
              background: "#000",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.03), inset 0 12px 24px rgba(0,0,0,0.35), inset 0 -8px 16px rgba(0,0,0,0.28)",
            }}
          >
            {/* Dynamic Island */}
            <div
              style={{
                position: "absolute",
                top: 12,
                left: "50%",
                transform: "translateX(-50%)",
                width: ISLAND_W,
                height: ISLAND_H,
                borderRadius: ISLAND_R,
                background: "#000",
                zIndex: 10,
                boxShadow: "0 1px 2px rgba(0,0,0,0.7)",
              }}
              aria-hidden
            />

            {/* Content with safe area */}
            <div
              style={{
                position: "absolute",
                top: TOP_SAFE,
                right: 0,
                bottom: BOTTOM_SAFE,
                left: 0,
                overflow: "hidden",
              }}
            >
              {screens[screen]}
            </div>

            {/* Home indicator */}
            <div
              style={{
                position: "absolute",
                bottom: 8,
                left: "50%",
                transform: "translateX(-50%)",
                width: 134,
                height: 5,
                borderRadius: 3,
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.35))",
                zIndex: 10,
                pointerEvents: "none",
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
