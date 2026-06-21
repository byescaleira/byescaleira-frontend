"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Info, RefreshCw } from "lucide-react";

const presets = [
  {
    name: "Hello SwiftUI",
    code: `VStack {
  Text("Hello, SwiftUI!")
    .font(.largeTitle)
    .foregroundColor(.blue)

  Button("Tap me") {
    count += 1
  }
}`,
  },
  {
    name: "Counter",
    code: `VStack {
  Text("Count: \\(count)")
    .font(.title)
    .foregroundColor(.teal)

  HStack {
    Button("−") { count -= 1 }
    Button("+") { count += 1 }
  }
}`,
  },
  {
    name: "Card",
    code: `VStack {
  RoundedRectangle(16)
    .fill(.blue.opacity(0.2))
    .frame(height: 80)

  Text("Card Title")
    .font(.headline)

  Text("Declarative UI rendered in the browser.")
    .font(.caption)
    .foregroundColor(.gray)
}`,
  },
];

export function Playground() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [key, setKey] = useState(0);

  const active = presets[activeIndex];

  const restart = () => {
    setCount(0);
    setKey((k) => k + 1);
  };

  return (
    <section
      id="playground"
      className="relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-orbit"
          >
            Playground
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
            SwiftUI in the browser
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-orbit">
            A live demo that mirrors the SwiftUI declarative model. The real
            integration uses a Swift-to-WASM toolchain (MiniSwift / MSF) to
            compile SwiftUI views and run them here.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="glass overflow-hidden border-white/10">
            <CardContent className="p-0">
              <div className="flex flex-col lg:flex-row">
                {/* Code panel */}
                <div className="flex flex-col border-b border-white/10 lg:w-1/2 lg:border-b-0 lg:border-r">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <div className="flex items-center gap-2">
                      <Play className="size-4 text-cosmos" />
                      <span className="text-sm font-medium text-starlight">
                        SwiftUI Preview
                      </span>
                    </div>
                    <div className="flex gap-2">
                      {presets.map((preset, index) => (
                        <button
                          key={preset.name}
                          onClick={() => {
                            setActiveIndex(index);
                            restart();
                          }}
                          className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                            index === activeIndex
                              ? "bg-nebula text-white"
                              : "text-orbit hover:text-starlight hover:bg-white/5"
                          }`}
                        >
                          {preset.name}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="relative min-h-[280px] overflow-auto bg-void-light/50 p-4 font-mono text-sm">
                    <pre className="text-orbit">
                      <code>{active.code}</code>
                    </pre>
                  </div>
                </div>

                {/* Preview panel */}
                <div className="flex flex-col lg:w-1/2">
                  <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                    <span className="text-sm font-medium text-starlight">
                      Live Output
                    </span>
                    <button
                      onClick={restart}
                      className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-xs font-medium text-orbit transition-colors hover:bg-white/5 hover:text-starlight"
                    >
                      <RefreshCw className="size-3.5" />
                      Reset
                    </button>
                  </div>
                  <div className="flex min-h-[280px] flex-1 items-center justify-center p-8">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeIndex}-${key}`}
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.25 }}
                        className="w-full max-w-xs space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                      >
                        {activeIndex === 0 && (
                          <>
                            <h3 className="text-center text-2xl font-bold text-nebula-glow">
                              Hello, SwiftUI!
                            </h3>
                            <Button
                              onClick={() => setCount((c) => c + 1)}
                              className="w-full bg-nebula text-white hover:bg-nebula/90"
                            >
                              Tap me {count > 0 && `(${count})`}
                            </Button>
                          </>
                        )}

                        {activeIndex === 1 && (
                          <>
                            <p className="text-center text-xl font-semibold text-cosmos">
                              Count: {count}
                            </p>
                            <div className="flex gap-3">
                              <Button
                                variant="outline"
                                onClick={() => setCount((c) => c - 1)}
                                className="flex-1 border-white/10 bg-white/5 text-starlight hover:bg-white/10"
                              >
                                −
                              </Button>
                              <Button
                                variant="outline"
                                onClick={() => setCount((c) => c + 1)}
                                className="flex-1 border-white/10 bg-white/5 text-starlight hover:bg-white/10"
                              >
                                +
                              </Button>
                            </div>
                          </>
                        )}

                        {activeIndex === 2 && (
                          <>
                            <div className="h-20 rounded-2xl bg-nebula/20" />
                            <h4 className="text-lg font-semibold text-starlight">
                              Card Title
                            </h4>
                            <p className="text-sm text-orbit">
                              Declarative UI rendered in the browser.
                            </p>
                          </>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-8">
          <div className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4 text-sm text-orbit">
            <Info className="mt-0.5 size-4 shrink-0 text-nebula-glow" />
            <div>
              <p className="mb-1 font-medium text-starlight">
                About the integration
              </p>
              <p>
                This playground simulates the SwiftUI declarative API. A
                production version compiles Swift source to WebAssembly with
                the MiniSwift / MSF toolchain, then renders the resulting
                canvas inside a React container. That lets visitors write real
                SwiftUI code and see it run in the browser.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
