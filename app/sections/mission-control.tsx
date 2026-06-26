"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { IphoneMockup } from "../components/iphone-mockup";
import { CodeOrbit } from "../components/code-orbit";

const satellites = [
  { label: "Swift", angle: 0, distance: 175, color: "#FF6B00" },
  { label: "SwiftUI", angle: 45, distance: 175, color: "#3B82F6" },
  { label: "UIKit", angle: 90, distance: 175, color: "#14B8A6" },
  { label: "SPM", angle: 135, distance: 175, color: "#F59E0B" },
  { label: "CI/CD", angle: 180, distance: 175, color: "#FF6B00" },
  { label: "Testing", angle: 225, distance: 175, color: "#3B82F6" },
  { label: "AI", angle: 270, distance: 175, color: "#14B8A6" },
  { label: "Perf", angle: 315, distance: 175, color: "#F59E0B" },
];

export function MissionControl() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const smoothY = useSpring(y, { stiffness: 60, damping: 30 });

  return (
    <section
      ref={sectionRef}
      id="mission-control"
      className="relative overflow-hidden border-y border-border bg-card px-6 py-24 md:px-12 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-brutal" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Mission Control"
          title="Where code meets orbit"
          description="Every product I ship sits at the center of a constellation: native craft, architecture, automation, and AI. This is how I think about building software."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <motion.div
              style={{ y: smoothY }}
              className="relative mx-auto flex items-center justify-center lg:mx-0"
            >
              <CodeOrbit
                satellites={satellites}
                size={380}
                className="mx-auto lg:mx-0"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <IphoneMockup className="w-40 md:w-48" />
              </div>
            </motion.div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="space-y-6"
            >
              <div className="border-l-2 border-primary pl-4">
                <h3 className="font-heading text-xl font-black uppercase tracking-wide text-foreground md:text-2xl">
                  Native first, orbit always
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  I do not treat mobile as a delivery channel. I treat it as a craft. Each skill in this orbit is a layer of the stack I work on daily at Globo and in my side projects.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Swift + SwiftUI", value: "Primary stack" },
                  { label: "Clean Architecture", value: "Production standard" },
                  { label: "SPM modularization", value: "Scale ready" },
                  { label: "AI workflows", value: "Augmented craft" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-border bg-background p-4 transition-colors hover:border-primary"
                  >
                    <div className="text-xs font-black uppercase tracking-wider text-orbit">{stat.label}</div>
                    <div className="mt-1 font-heading text-sm font-bold uppercase tracking-wide text-foreground">{stat.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
