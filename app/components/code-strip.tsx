"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CodeStripProps {
  className?: string;
  reverse?: boolean;
}

const snippets = [
  "struct CartolaView: View {",
  "    var body: some View {",
  "        VStack(spacing: 12) {",
  "            Text(\"Hello, iOS\")",
  "                .font(.title.bold())",
  "                .foregroundStyle(.primary)",
  "            Button(\"Build\") {}",
  "                .buttonStyle(.borderedProminent)",
  "        }",
  "        .padding(24)",
  "        .background(.ultraThinMaterial)",
  "    }",
  "}",
  "actor CartolaStore {",
  "    private var state = AppState()",
  "    func dispatch(_ action: Action) async {",
  "        await reduce(&state, action)",
  "    }",
  "}",
  "#Preview {",
  "    CartolaView()",
  "        .environment(Store())",
  "}",
];

export function CodeStrip({ className, reverse = false }: CodeStripProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute select-none overflow-hidden rounded-2xl border border-border/40 bg-[#0d1117]/80 backdrop-blur-md",
        className
      )}
      aria-hidden="true"
    >
      <motion.div
        className="flex flex-col gap-2 px-5 py-4 font-mono text-[10px] leading-5 text-blue-100/80"
        animate={{ y: reverse ? [0, -60, 0] : [0, 60, 0] }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {snippets.map((line, i) => {
          const trimmed = line.trimStart();
          const indent = line.length - trimmed.length;
          const isKeyword = /^(struct|actor|var|func|enum|import|if|guard|return|#Preview)/.test(trimmed);
          const isString = trimmed.includes('"');
          const isComment = trimmed.startsWith("//");
          const isType = /^(Button|Text|VStack|HStack|ZStack|List|NavigationStack|\.font|\.padding|\.background|\.foreground)/.test(trimmed);

          return (
            <motion.div
              key={`${line}-${i}`}
              className="whitespace-nowrap"
              style={{ paddingLeft: `${indent * 6}px` }}
              initial={{ opacity: 0, x: reverse ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <span
                className={cn(
                  isComment && "text-[#8b949e]",
                  isKeyword && "text-[#ff7b72]",
                  isString && "text-[#a5d6ff]",
                  isType && "text-[#d2a8ff]",
                  !isComment && !isKeyword && !isString && !isType && "text-[#c9d1d9]"
                )}
              >
                {trimmed}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
