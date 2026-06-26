"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { BrutalistCard } from "../components/brutalist-card";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const projects = [
  { codename: "Prism", title: "Prism Design System", description: "Tokens, components, and documentation for building consistent iOS interfaces.", status: "In progress", tags: ["SwiftUI", "Tokens", "SPM", "Documentation"], href: "/project/prism" },
  { codename: "Orbit", title: "Orbit CLI", description: "Command-line automation for iOS projects — scaffolding, linting, releases.", status: "In progress", tags: ["Swift", "CLI", "Automation", "GitHub Actions"], href: "/project/orbit" },
  { codename: "Cashly", title: "Cashly", description: "A personal finance app exploring SwiftData, charts, and clean architecture.", status: "Idea", tags: ["SwiftUI", "SwiftData", "Charts", "Architecture"], href: "/project/cashly" },
  { codename: "Open Source", title: "Open source contributions", description: "Utilities, articles, and examples shared with the iOS community.", status: "Active", tags: ["Swift", "Articles", "Examples"], href: "/project/open-source" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const projectCard = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function PersonalProjects() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section id="projects" className="relative overflow-hidden border-b border-border bg-background px-6 py-24 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-brutal" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Projects"
          title="Personal work"
          description="Side projects where I explore new ideas, tools, and craft without delivery pressure."
        />

        <motion.div
          ref={gridRef}
          variants={container}
          initial="hidden"
          animate={gridInView ? "show" : "hidden"}
          className="grid gap-4 sm:grid-cols-2"
        >
          {projects.map((project, i) => (
            <motion.div key={project.codename} variants={projectCard}>
              <Link href={project.href} className="group block h-full">
                <BrutalistCard
                  hover
                  accent={i % 2 === 0 ? "pulsar" : "nebula"}
                  className="h-full"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 items-center justify-center border border-border bg-card text-sm font-black text-primary">
                        {project.codename[0]}
                      </span>
                      <div>
                        <h3 className="font-heading text-base font-black uppercase tracking-wide text-foreground transition-colors group-hover:text-primary">{project.title}</h3>
                        <span className="text-xs font-mono uppercase tracking-wider text-orbit">{project.status}</span>
                      </div>
                    </div>
                    <ArrowUpRight className="size-5 text-orbit transition-all group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

                  <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-brutal">
                        {tag}
                      </span>
                    ))}
                  </div>
                </BrutalistCard>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
