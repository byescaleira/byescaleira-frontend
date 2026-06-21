"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { Play, RefreshCw, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@monaco-editor/react").then((mod) => mod.default), { ssr: false });

type DemoId = "glassCard" | "pulsingDot" | "gradientText";

interface Demo {
  id: DemoId;
  label: string;
  swiftCode: string;
  description: string;
}

const demos: Demo[] = [
  {
    id: "glassCard",
    label: "Glass Card",
    description: "SwiftUI material card with typography and a bordered button.",
    swiftCode: `struct GlassCard: View {\n    var body: some View {\n        VStack(alignment: .leading, spacing: 12) {\n            Text("Hello, Cartola")\n                .font(.title2.bold())\n                .foregroundStyle(.primary)\n            Text("Native iOS craft in the browser.")\n                .foregroundStyle(.secondary)\n            Button("Tap me") {}\n                .buttonStyle(.borderedProminent)\n                .tint(.orange)\n        }\n        .padding(24)\n        .background(.ultraThinMaterial)\n        .cornerRadius(20)\n        .overlay(\n            RoundedRectangle(cornerRadius: 20)\n                .stroke(.white.opacity(0.12), lineWidth: 1)\n        )\n    }\n}`,
  },
  {
    id: "pulsingDot",
    label: "Motion",
    description: "Implicit animation with scaleEffect and repeatForever.",
    swiftCode: `struct PulsingDot: View {\n    @State private var scale: CGFloat = 1.0\n\n    var body: some View {\n        Circle()\n            .fill(Color.orange)\n            .frame(width: 24, height: 24)\n            .scaleEffect(scale)\n            .onAppear {\n                withAnimation(\n                    .easeInOut(duration: 1.5)\n                    .repeatForever(autoreverses: true)\n                ) {\n                    scale = 1.3\n                }\n            }\n    }\n}`,
  },
  {
    id: "gradientText",
    label: "Gradient",
    description: "Linear gradient applied as a foregroundStyle mask on text.",
    swiftCode: `struct GradientText: View {\n    var body: some View {\n        Text("Ship then polish")\n            .font(.largeTitle.bold())\n            .foregroundStyle(\n                LinearGradient(\n                    colors: [.orange, .red],\n                    startPoint: .leading,\n                    endPoint: .trailing\n                )\n            )\n    }\n}`,
  },
];

function translateSwiftToPreview(code: string): React.ReactNode {
  const output: React.ReactNode[] = [];
  let key = 0;

  const isText = (line: string) => /Text\("([^"]+)"\)/.test(line);
  const textContent = (line: string) => /Text\("([^"]+)"\)/.exec(line)?.[1] ?? "";
  const isButton = (line: string) => /Button\("([^"]+)"\)/.test(line);
  const buttonLabel = (line: string) => /Button\("([^"]+)"\)/.exec(line)?.[1] ?? "";
  const isCircle = (line: string) => /^\s*Circle\(\)/.test(line);
  const isGradient = (codeStr: string) => /LinearGradient/.test(codeStr);
  const fontClass = (line: string) => {
    if (/font\(:?\.largeTitle/.test(line)) return "text-3xl font-bold";
    if (/font\(:?\.title2/.test(line)) return "text-2xl font-semibold";
    if (/font\(:?\.title/.test(line)) return "text-xl font-semibold";
    return "text-sm";
  };

  const lines = code.split("\n");

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (/background\(:?\.ultraThinMaterial\)/.test(line)) continue;
    if (/cornerRadius\((\d+)\)/.test(line)) continue;
    if (/padding\((\d+)\)/.test(line)) continue;
    if (/overlay\(/.test(line) || /RoundedRectangle/.test(line) || /stroke\(/.test(line)) continue;

    if (isGradient(code)) {
      if (isText(lines[i + 1])) {
        output.push(
          <span key={key++} className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent text-3xl font-bold">
            {textContent(lines[i + 1])}
          </span>
        );
      }
      continue;
    }

    if (isText(line)) {
      const content = textContent(line);
      const classes = fontClass(line);
      const secondary = /foregroundStyle\(:?\.secondary\)/.test(line);
      const primary = /foregroundStyle\(:?\.primary\)/.test(line);
      output.push(
        <span
          key={key++}
          className={cn(classes, secondary && "text-white/60", primary && "text-white", !secondary && !primary && "text-white")}
        >
          {content}
        </span>
      );
      continue;
    }

    if (isButton(line)) {
      const label = buttonLabel(line);
      const tint = /tint\(:?\.orange\)/.test(code) ? "bg-orange-500 hover:bg-orange-600" : "bg-zinc-100 text-zinc-900 hover:bg-zinc-200";
      output.push(
        <motion.button
          key={key++}
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          className={cn("mt-1 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium text-white transition-colors", tint)}
        >
          {label}
        </motion.button>
      );
      continue;
    }

    if (isCircle(line)) {
      const sizeMatch = /frame\(width:\s*(\d+),\s*height:\s*(\d+)\)/.exec(code);
      const size = sizeMatch ? Number(sizeMatch[1]) : 24;
      output.push(
        <motion.div
          key={key++}
          className="rounded-full bg-orange-500 shadow-[0_0_24px_rgba(255,107,0,0.6)]"
          style={{ width: size, height: size }}
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      );
      continue;
    }
  }

  return output;
}

export function Playground() {
  const [activeId, setActiveId] = useState<DemoId>("glassCard");
  const [editorCode, setEditorCode] = useState(demos[0].swiftCode);
  const [error, setError] = useState<string | null>(null);

  const activeDemo = useMemo(() => demos.find((d) => d.id === activeId) ?? demos[0], [activeId]);

  useEffect(() => {
    setEditorCode(activeDemo.swiftCode);
    setError(null);
  }, [activeDemo]);

  const preview = useMemo(() => {
    try {
      const node = translateSwiftToPreview(editorCode);
      setError(null);
      return node;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Preview error");
      return null;
    }
  }, [editorCode]);

  const resetDemo = useCallback(() => {
    setEditorCode(activeDemo.swiftCode);
    setError(null);
  }, [activeDemo]);

  return (
    <section id="playground" className="relative overflow-hidden py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Playground"
          title="SwiftUI in the browser"
          description="A live Monaco editor with Swift syntax highlighting. The preview is a reactive React translation — real Swift compilation needs a backend runtime such as SwiftWasm."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <GlassCard className="relative flex min-h-[420px] flex-col p-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                <Play className="h-4 w-4 text-orange-500" />
                Live preview
              </div>
              <div className="flex gap-2">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveId(demo.id)}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                      activeId === demo.id ? "bg-orange-500 text-white shadow-[0_0_12px_rgba(255,107,0,0.4)]" : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-800/40 via-zinc-950 to-zinc-950 p-8">
              {error ? (
                <div className="flex items-center gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  <AlertCircle className="h-4 w-4" />
                  {error}
                </div>
              ) : (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeId + editorCode}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.25 }}
                    className="flex flex-col items-center"
                  >
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md flex flex-col gap-3">
                      {preview}
                    </div>
                    <p className="mt-4 max-w-xs text-center text-xs text-white/40">
                      {activeDemo.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            <div className="border-t border-white/10 px-4 py-2 text-[10px] text-white/30">
              React preview · Swift compiler integration via SwiftWasm planned
            </div>
          </GlassCard>

          <GlassCard className="relative flex min-h-[420px] flex-col p-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                <span className="font-mono text-xs text-orange-500">.swift</span>
                Source
              </div>
              <button
                onClick={resetDemo}
                className="flex items-center gap-1.5 rounded-md bg-white/5 px-2.5 py-1.5 text-xs font-medium text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <RefreshCw className="h-3 w-3" />
                Reset
              </button>
            </div>

            <div className="flex-1 bg-[#0d1117]">
              <Editor
                height="100%"
                language="swift"
                theme="vs-dark"
                value={editorCode}
                onChange={(value) => setEditorCode(value ?? "")}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 16 },
                  fontFamily: "JetBrains Mono, ui-monospace, monospace",
                }}
              />
            </div>
          </GlassCard>
        </div>

        <p className="mt-6 text-center text-xs text-white/40">
          Editing the source updates the preview immediately. A real Swift compiler in the browser
          requires SwiftWasm + a backend endpoint — that is the next engineering milestone.
        </p>
      </div>
    </section>
  );
}
