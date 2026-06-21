"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { OrbitPath, Constellation } from "../components/space-orbits";
import { CodeStrip } from "../components/code-strip";
import { cn } from "@/lib/utils";

const skills = [
  { title: "iOS / Swift / SwiftUI", description: "Deep expertise building native iOS products with Swift, SwiftUI, and UIKit." },
  { title: "Clean Architecture", description: "MVVM, Clean Architecture, SOLID, and separation of concerns." },
  { title: "Swift Package Manager", description: "Modular codebases with SPM, internal packages, and versioned releases." },
  { title: "Modularization", description: "Feature modules, core layers, and clear contracts that reduce cognitive load." },
  { title: "Testing & TDD", description: "Unit tests, snapshot tests, and TDD discipline for confident shipping." },
  { title: "CI / CD", description: "GitHub Actions, Fastlane, TestFlight automation with minimal friction." },
  { title: "Design Systems", description: "Tokens, components, and design-engineering alignment between Figma and code." },
  { title: "Performance", description: "Memory profiling, lazy loading, concurrency optimization, smooth scroll." },
  { title: "AI-Augmented Workflows", description: "Using AI for documentation, code review, test generation, and standardization." },
  { title: "Technical Leadership", description: "Code review, mentoring, standards, and cross-team alignment." },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const skillCard = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <OrbitPath className="-left-24 top-24 opacity-25" size={460} duration={55} color="blue" reverse />
      <OrbitPath className="-right-20 bottom-12 opacity-20" size={380} duration={40} color="orange" />
      <CodeStrip className="left-[5%] bottom-[15%] hidden w-48 -rotate-6 opacity-15 lg:block" reverse />
      <Constellation className="right-[8%] top-[25%] hidden lg:block" count={8} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I do best"
          description="A decade of focused practice across the full iOS stack — from pixels to pipelines."
        />

        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={gridInView ? "show" : "hidden"}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, i) => (
            <motion.div key={skill.title} variants={skillCard}>
              <GlassCard
                hover
                glow={i % 3 === 0 ? "orange" : i % 3 === 1 ? "blue" : undefined}
                className="h-full"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-medium text-foreground">{skill.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
