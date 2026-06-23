"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { BrutalistCard } from "../components/brutalist-card";

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
    transition: { staggerChildren: 0.05 },
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
    <section id="skills" className="relative overflow-hidden border-b border-[#1F2937] bg-[#0B0F19] px-6 py-24 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-brutal opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl">
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
              <BrutalistCard
                hover
                accent={i % 3 === 0 ? "pulsar" : i % 3 === 1 ? "nebula" : "teal"}
                className="h-full"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center border border-[#1F2937] bg-[#111827] text-xs font-black text-[#FF6B00]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-[#F8FAFC]">{skill.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#94A3B8]">{skill.description}</p>
                </div>
              </BrutalistCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
