"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

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

export function CodeStrip({
  className,
  reverse,
}: {
  className?: string;
  reverse?: boolean;
}) {
  const text = snippets.join("    ");
  const repeated = Array(8).fill(text).join("    ");

  return (
    <div
      className={cn(
        "pointer-events-none absolute w-full overflow-hidden py-6 opacity-40",
        className
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="whitespace-nowrap font-mono text-xs text-muted-foreground/30"
      >
        {repeated}
      </motion.div>
    </div>
  );
}
