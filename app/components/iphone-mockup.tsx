"use client";

import { motion } from "framer-motion";

const codeLines = [
  { text: "import SwiftUI", color: "#FF6B00" },
  { text: "", color: "" },
  { text: "struct MissionControl: View {", color: "#3B82F6" },
  { text: "  @State private var orbit = 0.0", color: "#F8FAFC" },
  { text: "", color: "" },
  { text: "  var body: some View {", color: "#3B82F6" },
  { text: "    VStack {", color: "#14B8A6" },
  { text: "      SwiftUI", color: "#F59E0B" },
  { text: "      CleanArchitecture", color: "#F59E0B" },
  { text: "    }", color: "#14B8A6" },
  { text: "  }", color: "#3B82F6" },
  { text: "}", color: "#3B82F6" },
];

export function IphoneMockup({ className }: { className?: string }) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative"
      >
        {/* Glow */}
        <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />

        <svg
          viewBox="0 0 280 560"
          className="relative z-10 w-full max-w-[280px] drop-shadow-2xl"
          aria-hidden="true"
        >
          {/* Device frame */}
          <rect
            x="12"
            y="12"
            width="256"
            height="536"
            rx="36"
            fill="var(--card)"
            stroke="var(--border)"
            strokeWidth="2"
          />
          {/* Screen */}
          <rect
            x="24"
            y="24"
            width="232"
            height="512"
            rx="24"
            fill="#0B0F19"
          />
          {/* Dynamic Island */}
          <rect x="98" y="36" width="84" height="24" rx="12" fill="#111827" />

          {/* Code content */}
          <g transform="translate(36, 80)">
            {codeLines.map((line, i) => (
              <motion.text
                key={i}
                x="0"
                y={i * 22 + 14}
                fontFamily="var(--font-jetbrains-mono), monospace"
                fontSize="12"
                fill={line.color || "#64748B"}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3, duration: 0.3 }}
              >
                {line.text}
              </motion.text>
            ))}
            {/* Cursor */}
            <motion.rect
              x="0"
              y={codeLines.length * 22 + 6}
              width="8"
              height="14"
              fill="#FF6B00"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </g>

          {/* Home indicator */}
          <rect x="100" y="528" width="80" height="4" rx="2" fill="#64748B" />
        </svg>
      </motion.div>
    </motion.div>
  );
}
