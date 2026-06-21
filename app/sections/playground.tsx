"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { Play, RefreshCw, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@monaco-editor/react").then((mod) => mod.default), { ssr: false });

// Real Xcode Dark color palette for Monaco
const defineXcodeDarkTheme = (monaco: typeof import("monaco-editor")) => {
  monaco.editor.defineTheme("xcode-dark", {
    base: "vs-dark",
    inherit: true,
    rules: [
      { token: "", foreground: "D4D4D4" },
      { token: "comment", foreground: "6A9955", fontStyle: "italic" },
      { token: "comment.doc", foreground: "6A9955", fontStyle: "italic" },
      { token: "keyword", foreground: "FF7B72" },
      { token: "keyword.flow", foreground: "C586C0" },
      { token: "keyword.type", foreground: "569CD6" },
      { token: "string", foreground: "CE9178" },
      { token: "string.quote", foreground: "CE9178" },
      { token: "number", foreground: "B5CEA8" },
      { token: "number.hex", foreground: "B5CEA8" },
      { token: "regexp", foreground: "CE9178" },
      { token: "type", foreground: "FFEC8B" },
      { token: "type.identifier", foreground: "FFEC8B" },
      { token: "identifier", foreground: "DCDCAA" },
      { token: "function", foreground: "DCDCAA" },
      { token: "method", foreground: "DCDCAA" },
      { token: "operator", foreground: "D4D4D4" },
      { token: "delimiter", foreground: "D4D4D4" },
      { token: "tag", foreground: "569CD6" },
      { token: "attribute.name", foreground: "9CDCFE" },
      { token: "attribute.value", foreground: "CE9178" },
      { token: "variable.name", foreground: "9CDCFE" },
      { token: "parameter", foreground: "9CDCFE" },
      { token: "property", foreground: "9CDCFE" },
      { token: "constant", foreground: "4FC1FF" },
      { token: "macro", foreground: "569CD6" },
      { token: "invalid", foreground: "F44747" },
      { token: "info-token", foreground: "569CD6" },
      { token: "warn-token", foreground: "FFCC00" },
      { token: "error-token", foreground: "F44747" },
    ],
    colors: {
      "editor.background": "1E1E1E",
      "editor.foreground": "D4D4D4",
      "editor.lineHighlightBackground": "2A2D2E",
      "editorLineNumber.foreground": "858585",
      "editorLineNumber.activeForeground": "C6C6C6",
      "editor.selectionBackground": "264F78",
      "editor.inactiveSelectionBackground": "264F7855",
      "editor.selectionHighlightBackground": "ADD6FF26",
      "editorCursor.foreground": "A6A6A6",
      "editorWhitespace.foreground": "3E3E3E",
      "editorIndentGuide.background": "3E3E3E",
      "editorIndentGuide.activeBackground": "636363",
      "editorBracketMatch.background": "0064001A",
      "editorBracketMatch.border": "B4B4B4",
      "editor.wordHighlightBackground": "575757B8",
      "editor.wordHighlightStrongBackground": "004972A8",
      "editor.findMatchBackground": "515C6A",
      "editor.findMatchHighlightBackground": "EA5C0055",
      "editor.hoverHighlightBackground": "264F78",
    },
  });
};

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
          className={cn(
            classes,
            secondary && "text-muted-foreground",
            primary && "text-foreground",
            !secondary && !primary && "text-foreground"
          )}
        >
          {content}
        </span>
      );
      continue;
    }

    if (isButton(line)) {
      const label = buttonLabel(line);
      const tint = /tint\(:?\.orange\)/.test(code)
        ? "bg-primary text-primary-foreground hover:bg-primary/90"
        : "bg-secondary text-secondary-foreground hover:bg-secondary/80";
      output.push(
        <motion.button
          key={key++}
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.02 }}
          className={cn("mt-1 inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors", tint)}
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
          className="rounded-full bg-primary shadow-[0_0_24px_rgba(255,107,0,0.6)]"
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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  if (!isClient) {
    return (
      <section id="playground" className="relative overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Playground"
            title="SwiftUI in the browser"
            description="A live Monaco editor with Swift syntax highlighting."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <GlassCard className="flex min-h-[420px] items-center justify-center">
              <span className="text-muted-foreground">Loading preview...</span>
            </GlassCard>
            <GlassCard className="flex min-h-[420px] items-center justify-center">
              <span className="text-muted-foreground">Loading editor...</span>
            </GlassCard>
          </div>
        </div>
      </section>
    );
  }

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
            <div className="flex items-center justify-between border-b border-border bg-card/50 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <Play className="h-4 w-4 text-primary" />
                Live preview
              </div>
              <div className="flex gap-2">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setActiveId(demo.id)}
                    className={cn(
                      "rounded-md px-3 py-1.5 text-xs font-medium transition-all",
                      activeId === demo.id
                        ? "bg-primary text-primary-foreground shadow-[0_0_12px_rgba(255,107,0,0.4)]"
                        : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                    )}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center bg-background p-8">
              {error ? (
                <div className="flex items-center gap-3 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
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
                    <div className="rounded-[20px] border border-border bg-card p-6 shadow-2xl backdrop-blur-md flex flex-col gap-3">
                      {preview}
                    </div>
                    <p className="mt-4 max-w-xs text-center text-xs text-muted-foreground">
                      {activeDemo.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>

            <div className="border-t border-border px-4 py-2 text-[10px] text-muted-foreground/60">
              React preview · Swift compiler integration via SwiftWasm planned
            </div>
          </GlassCard>

          <GlassCard className="relative flex min-h-[420px] flex-col p-0 overflow-hidden">
            <div className="flex items-center justify-between border-b border-border bg-card/50 px-4 py-3">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground/80">
                <span className="font-mono text-xs text-primary">.swift</span>
                Source
              </div>
              <button
                onClick={resetDemo}
                className="flex items-center gap-1.5 rounded-md bg-muted px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted/80 hover:text-foreground"
              >
                <RefreshCw className="h-3 w-3" />
                Reset
              </button>
            </div>

            <div className="flex-1 bg-[#1E1E1E]">
              <Editor
                height="100%"
                language="swift"
                theme="xcode-dark"
                value={editorCode}
                onChange={(value) => setEditorCode(value ?? "")}
                beforeMount={defineXcodeDarkTheme}
                options={{
                  minimap: { enabled: false },
                  fontSize: 13,
                  lineNumbers: "on",
                  roundedSelection: false,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 16 },
                  fontFamily: "SF Mono, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                }}
              />
            </div>
          </GlassCard>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Editing the source updates the preview immediately. A real Swift compiler in the browser
          requires SwiftWasm + a backend endpoint — that is the next engineering milestone.
        </p>
      </div>
    </section>
  );
}
