"use client";

import { ScrollReveal } from "../components/scroll-reveal";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { OrbitDecoration } from "../components/orbit-decoration";
import {
  Rocket,
  BrainCircuit,
  Paintbrush,
  PackageOpen,
  GraduationCap,
  Briefcase,
  ArrowUpRight,
} from "lucide-react";

const principles = [
  {
    icon: Rocket,
    title: "Ship first, polish after",
    description:
      "Working software beats perfect branches. I ship small, learn fast, and refine with real usage.",
  },
  {
    icon: BrainCircuit,
    title: "AI writes fast. I decide slow",
    description:
      "AI accelerates the craft; human judgment owns the consequences. Every line gets reviewed.",
  },
  {
    icon: Paintbrush,
    title: "Design is engineering",
    description:
      "Spacing, motion, and typography are technical decisions. A beautiful UI is a well-architected one.",
  },
  {
    icon: PackageOpen,
    title: "Native first, always",
    description:
      "Apple's APIs come before abstractions. No cross-platform shortcuts when the product deserves native.",
  },
];

const career = [
  {
    company: "Globo",
    role: "iOS Specialist — Cartola FC",
    period: "Present",
    type: "current",
    slug: "globo",
  },
  { company: "Deliver IT / Letsbank", role: "iOS Developer", period: "", slug: "deliver-it-letsbank" },
  { company: "Next", role: "iOS Developer", period: "", slug: "next" },
  { company: "TocaLivros", role: "Mobile Developer", period: "", slug: "tocalivros" },
  { company: "Boviplan", role: "Mobile Developer", period: "", slug: "boviplan" },
  { company: "A.A.A. UFMS", role: "Developer", period: "", slug: "aaa-ufms" },
  { company: "CATWORK", role: "Developer", period: "", slug: "catwork" },
];

const education = [
  {
    school: "Descomplica",
    degree: "BTech, Computer Systems Analysis",
    period: "2023 — 2025",
  },
  {
    school: "UFMS",
    degree: "BSc, Computer Engineering",
    period: "2017 — 2021",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32"
    >
      <OrbitDecoration className="-right-32 top-24 h-80 w-80 opacity-20 md:-right-16 md:opacity-30" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who I Am"
          title="Builder by instinct, engineer by choice"
          description="I'm Rafael Escaleira, an iOS Specialist based in Brazil. I design and ship native Apple products that scale — from clean architecture to polished interfaces."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal className="space-y-6">
            <GlassCard hover className="h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-nebula/10">
                  <Briefcase className="size-5 text-nebula" />
                </div>
                <h3 className="text-xl font-semibold text-starlight">Career path</h3>
              </div>

              <div className="relative space-y-0">
                {career.map((step, index) => (
                  <a
                    key={step.company}
                    href={`/experience/${step.slug}/`}
                    className="group relative flex items-start gap-4 pb-8 pl-8 last:pb-0"
                  >
                    {index !== career.length - 1 && (
                      <div className="absolute top-2 bottom-0 left-[11px] w-px bg-white/10" />
                    )}
                    <div
                      className={`absolute top-1.5 left-0 size-5 rounded-full border-2 transition-colors ${
                        step.type === "current"
                          ? "border-cosmos bg-cosmos"
                          : "border-orbit bg-void group-hover:border-nebula"
                      }`}
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <span className="font-medium text-starlight transition-colors group-hover:text-nebula">{step.company}</span>
                        {step.period && (
                          <span className="text-xs font-medium text-cosmos">{step.period}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm text-orbit">{step.role}</p>
                        <ArrowUpRight className="size-3 text-orbit opacity-0 transition-opacity group-hover:opacity-100" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="space-y-8">
            <ScrollReveal delay={0.1}>
              <GlassCard hover className="h-full">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-nebula/10">
                    <GraduationCap className="size-5 text-nebula" />
                  </div>
                  <h3 className="text-xl font-semibold text-starlight">Education</h3>
                </div>
                <div className="space-y-4">
                  {education.map((edu) => (
                    <div key={edu.school}>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-starlight">{edu.school}</span>
                        <span className="text-xs text-orbit">{edu.period}</span>
                      </div>
                      <p className="text-sm text-orbit">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard hover className="h-full">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-nebula/10">
                    <Rocket className="size-5 text-nebula" />
                  </div>
                  <h3 className="text-xl font-semibold text-starlight">Working principles</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {principles.map((principle) => (
                    <div key={principle.title} className="rounded-xl bg-white/[0.03] p-4">
                      <principle.icon className="mb-2 size-5 text-nebula" />
                      <h4 className="mb-1 text-sm font-medium text-starlight">{principle.title}</h4>
                      <p className="text-xs leading-relaxed text-orbit">{principle.description}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
