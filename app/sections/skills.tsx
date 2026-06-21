"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { IphoneMockup } from "../components/iphone-mockup";
import { SatelliteStrip } from "../components/orbit-decoration";
import { CodeStrip } from "../components/code-strip";
import {
  Smartphone,
  Layers,
  Box,
  Puzzle,
  TestTube,
  Workflow,
  Palette,
  Gauge,
  Bot,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    icon: Smartphone,
    title: "iOS / Swift / SwiftUI",
    description:
      "Deep expertise building native iOS products with Swift, SwiftUI, and UIKit. Focused on performance, accessibility, and platform idioms.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    description:
      "MVVM, Clean Architecture, SOLID, and separation of concerns. I structure code so teams can move fast without breaking things.",
  },
  {
    icon: Box,
    title: "Swift Package Manager",
    description:
      "Modular codebases with SPM. Internal packages, dependency boundaries, and versioned releases that scale with the team.",
  },
  {
    icon: Puzzle,
    title: "Modularization",
    description:
      "Feature modules, core layers, and clear contracts. From monoliths to organized architectures that reduce build times and cognitive load.",
  },
  {
    icon: TestTube,
    title: "Testing & TDD",
    description:
      "Unit tests, snapshot tests, and TDD discipline. I believe confidence in shipping comes from a solid safety net.",
  },
  {
    icon: Workflow,
    title: "CI / CD",
    description:
      "GitHub Actions, Fastlane, TestFlight automation. Pipelines that lint, test, build, and deploy with minimal friction.",
  },
  {
    icon: Palette,
    title: "Design Systems",
    description:
      "Tokens, components, and design-engineering alignment. I've built systems that bridge Figma and code without losing craft.",
  },
  {
    icon: Gauge,
    title: "Performance",
    description:
      "Memory profiling, lazy loading, concurrency optimization, and smooth scroll. Performance is a feature, not an afterthought.",
  },
  {
    icon: Bot,
    title: "AI-Augmented Workflows",
    description:
      "Using AI for documentation, code review, test generation, and technical standardization — with human judgment at every gate.",
  },
  {
    icon: GitBranch,
    title: "Technical Leadership",
    description:
      "Code review, mentoring, standards, and cross-team alignment. I help teams ship better software, together.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <SatelliteStrip className="left-8 top-32 hidden flex-col md:flex" />
      <IphoneMockup
        className="right-4 top-20 z-0 hidden opacity-40 lg:block"
        size="sm"
        screen="gradient"
        float={false}
      />
      <IphoneMockup
        className="left-[2%] bottom-20 z-0 hidden opacity-30 xl:block"
        size="sm"
        screen="code"
        float
      />
      <CodeStrip className="top-[55%] right-0 z-0 hidden opacity-25 xl:block" reverse />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="What I do best"
          description="A decade of focused practice across the full iOS stack — from pixels to pipelines."
          align="center"
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.title} variants={item}>
                <GlassCard hover className="h-full">
                  <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{skill.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{skill.description}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
