"use client";

import { motion } from "framer-motion";

const snippets = [
  "struct CartolaView: View {",
  "    var body: some View {",
  "        VStack(spacing: 12) {",
  "            Text(\"Hello, Cartola\")",
  "                .font(.title2.bold())",
  "            Spacer()",
  "        }",
  "        .padding()",
  "        .background(.ultraThinMaterial)",
  "    }",
  "}",
  "// Ship first, polish after",
];

export function CodeStrip() {
  const text = snippets.join("    ");
  const repeated = Array(6).fill(text).join("    ");

  return (
    <div className="pointer-events-none relative overflow-hidden py-8" aria-hidden="true">
      <div className="absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-void to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-void to-transparent" />
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap font-mono text-xs text-orbit/30"
      >
        {repeated}
      </motion.div>
    </div>
  );
}
