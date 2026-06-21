"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { ExternalLink } from "lucide-react";
import { Orbit, Wallet, Code, Hexagon } from "lucide-react";

const projects = [
  {
    codename: "Prism",
    title: "Design System",
    icon: Hexagon,
    description:
      "A personal design-system experiment: tokens, components, and patterns that bridge Figma and code with Apple-native aesthetics.",
    status: "Experiment",
    tags: ["Design Tokens", "Components", "SwiftUI"],
  },
  {
    codename: "Orbit",
    title: "CLI / Automation",
    icon: Orbit,
    description:
      "Automation tooling for repetitive engineering tasks — scaffolding, standardization, and release helpers that keep teams moving.",
    status: "Active",
    tags: ["CLI", "Automation", "Developer Experience"],
  },
  {
    codename: "Cashly",
    title: "Finance App",
    icon: Wallet,
    description:
      "A finance app concept focused on clarity, speed, and native iOS craft. Built to explore architecture and polished UX in a real product shape.",
    status: "Concept",
    tags: ["SwiftUI", "Architecture", "UX"],
  },
  {
    codename: "Open Source",
    title: "Experiments & Tools",
    icon: Code,
    description:
      "Small tools, sample apps, and explorations shared on GitHub. Playgrounds for SwiftUI, concurrency patterns, and modular architecture.",
    status: "Ongoing",
    tags: ["Swift", "Samples", "GitHub"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function PersonalProjects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Personal Projects"
          title="Side missions"
          description="Space-themed codenames for experiments that keep my craft sharp. Some ship, some teach, all are documented."
          align="center"
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.codename} variants={item}>
                <GlassCard hover className="group h-full">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-nebula/10 transition-colors group-hover:bg-nebula/20">
                      <Icon className="size-6 text-nebula" />
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-orbit">
                      {project.status}
                    </span>
                  </div>

                  <div className="mb-2 flex items-baseline gap-2">
                    <span className="text-sm font-medium text-nebula">{project.codename}</span>
                    <h3 className="text-xl font-semibold text-starlight">{project.title}</h3>
                  </div>

                  <p className="mb-5 leading-relaxed text-orbit">{project.description}</p>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-orbit"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="https://github.com/byescaleira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-nebula transition-colors hover:text-nebula-glow"
                  >
                    View on GitHub
                    <ExternalLink className="size-4" />
                  </a>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
