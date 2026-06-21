"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { ScrollReveal } from "../components/scroll-reveal";
import { OrbitPath, Planet, Constellation } from "../components/space-orbits";
import { Play, Code, Sparkles, Info } from "lucide-react";

const demos = [
  {
    id: "card",
    label: "Glass Card",
    swiftCode: `struct GlassCard: View {
    var body: some View {
        VStack(alignment: .leading, spacing: 12) {
            Text("Hello, Cartola")
                .font(.title2.bold())
                .foregroundStyle(.primary)
            Text("Native iOS craft in the browser.")
                .foregroundStyle(.secondary)
            Button("Tap me") {}
                .buttonStyle(.borderedProminent)
                .tint(.orange)
        }
        .padding(24)
        .background(.ultraThinMaterial)
        .cornerRadius(20)
        .overlay(
            RoundedRectangle(cornerRadius: 20)
                .stroke(.white.opacity(0.12), lineWidth: 1)
        )
    }
}`,
    preview: (
      <div className="w-full rounded-2xl bg-white/5 p-6 backdrop-blur-xl">
        <h4 className="text-lg font-semibold text-foreground">Hello, Cartola</h4>
        <p className="mt-2 text-sm text-muted-foreground">Native iOS craft in the browser.</p>
        <button className="mt-4 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
          Tap me
        </button>
      </div>
    ),
  },
  {
    id: "animation",
    label: "Motion",
    swiftCode: `struct PulsingDot: View {
    @State private var scale: CGFloat = 1.0

    var body: some View {
        Circle()
            .fill(Color.orange)
            .frame(width: 24, height: 24)
            .scaleEffect(scale)
            .onAppear {
                withAnimation(
                    .easeInOut(duration: 1.5)
                    .repeatForever(autoreverses: true)
                ) {
                    scale = 1.3
                }
            }
    }
}`,
    preview: (
      <div className="flex h-48 items-center justify-center">
        <motion.div
          className="size-6 rounded-full bg-primary"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    ),
  },
  {
    id: "gradient",
    label: "Gradient",
    swiftCode: `struct DeepSpaceText: View {
    var body: some View {
        Text("Deep Space")
            .font(.system(size: 40, weight: .bold))
            .foregroundStyle(
                LinearGradient(
                    colors: [.white, .orange, .blue],
                    startPoint: .leading,
                    endPoint: .trailing
                )
            )
    }
}`,
    preview: (
      <div className="flex h-48 items-center justify-center">
        <span className="text-gradient text-4xl font-bold">Deep Space</span>
      </div>
    ),
  },
];

export function Playground() {
  const [active, setActive] = useState(demos[0]);

  return (
    <section id="playground" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <OrbitPath className="-right-32 top-[10%] opacity-25" size={500} duration={75} color="mixed" satellites={3} />
      <OrbitPath className="-left-24 bottom-[15%] opacity-20" size={420} duration={60} color="orange" reverse satellites={2} />
      <Planet className="absolute right-[10%] top-[20%]" size={8} color="blue" />
      <Planet className="absolute left-[12%] bottom-[25%]" size={6} color="orange" />
      <Constellation className="right-[8%] bottom-[30%] hidden opacity-50 lg:block" count={8} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Playground"
          title="SwiftUI in the browser"
          description="An interactive demo of how compiled SwiftUI artifacts can feel on the web. When the binary is available, this area renders the real component."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal className="space-y-6">
            <GlassCard glow="orange" className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Play className="size-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Live preview</h3>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => setActive(demo)}
                    className={`rounded-full px-3 py-1.5 text-xs font-medium transition-all ${
                      active.id === demo.id
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-muted/40 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {demo.label}
                  </button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  className="min-h-[200px] rounded-2xl border border-border bg-muted/40 p-6"
                >
                  {active.preview}
                </motion.div>
              </AnimatePresence>

              <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                <Sparkles className="size-4 text-primary" />
                <span>Demo rendering via React/Framer Motion</span>
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="space-y-6">
            <GlassCard className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Code className="size-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Swift source</h3>
              </div>

              <AnimatePresence mode="wait">
                <motion.pre
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-x-auto rounded-xl bg-[#0d1117] p-4 text-xs leading-relaxed text-blue-100"
                >
                  <code>{active.swiftCode}</code>
                </motion.pre>
              </AnimatePresence>
            </GlassCard>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.2}>
          <GlassCard className="mt-8">
            <div className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <Info className="size-5 text-primary" />
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-foreground">About the integration</h4>
                <p className="leading-relaxed text-muted-foreground">
                  The real goal is to embed a compiled SwiftUI artifact through
                  MSF (MiniSwift) or a compatible WebAssembly runtime. Until that
                  binary artifact is available, this playground mirrors the same
                  components in React/Framer Motion so the experience stays polished
                  and the integration point stays clear.
                </p>
                <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                  <Play className="size-4 text-primary" />
                  <span>Next step: plug the compiled .wasm artifact into the preview panel.</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
