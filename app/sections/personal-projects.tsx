"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { IphoneMockup } from "../components/iphone-mockup";
import { ExternalLink } from "lucide-react";
import { Orbit, Wallet, Code, Hexagon } from "lucide-react";

const projects = [
  {
    codename: "Prism",
    slug: "prism",
    title: "Design System",
    icon: Hexagon,
    description:
      "A personal design-system experiment: tokens, components, and patterns that bridge Figma and code with Apple-native aesthetics.",
    status: "Experiment",
    tags: ["Design Tokens", "Components", "SwiftUI"],
  },
  {
    codename: "Orbit",
    slug: "orbit",
    title: "CLI / Automation",
    icon: Orbit,
    description:
      "Automation tooling for repetitive engineering tasks — scaffolding, standardization, and release helpers that keep teams moving.",
    status: "Active",
    tags: ["CLI", "Automation", "Developer Experience"],
  },
  {
    codename: "Cashly",
    slug: "cashly",
    title: "Finance App",
    icon: Wallet,
    description:
      "A finance app concept focused on clarity, speed, and native iOS craft. Built to explore architecture and polished UX in a real product shape.",
    status: "Concept",
    tags: ["SwiftUI", "Architecture", "UX"],
  },
  {
    codename: "Open Source",
    slug: "open-source",
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <IphoneMockup className="left-[2%] top-[8%] z-0 hidden opacity-30 xl:block" size="sm" screen="code" />
      <IphoneMockup className="right-[3%] bottom-[10%] z-0 hidden opacity-30 xl:block" size="sm" screen="swiftui" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Personal Projects"
          title="Side missions"
          description="Space-themed codenames for experiments that keep my craft sharp. Some ship, some teach, all are documented."
          align="center"
        />

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid gap-6 sm:grid-cols-2"
        >
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <motion.div key={project.codename} variants={item}>
                <a href={`/project/${project.slug}/`}>
                  <GlassCard hover className="group h-full">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <span className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground">
                        {project.status}
                      </span>
                    </div>

                    <div className="mb-2 flex items-baseline gap-2">
                      <span className="text-sm font-medium text-primary">{project.codename}</span>
                      <div className="flex items-center gap-1">
                        <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                        <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </div>

                    <p className="mb-5 leading-relaxed text-muted-foreground">{project.description}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <span className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors group-hover:text-pulsar">
                      Read more
                      <ExternalLink className="size-4" />
                    </span>
                  </GlassCard>
                </a>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
