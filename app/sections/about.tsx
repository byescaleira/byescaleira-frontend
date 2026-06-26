"use client";

import { ScrollReveal } from "../components/scroll-reveal";
import { SectionHeading } from "../components/section-heading";
import { BrutalistCard } from "../components/brutalist-card";
import { GraduationCap, Rocket, Target, Sparkles, Cpu } from "lucide-react";
import Link from "next/link";

const careerSteps = [
  { company: "Globo", role: "iOS Specialist — Cartola FC", period: "Present", type: "current", slug: "globo" },
  { company: "Deliver IT / Letsbank", role: "iOS Developer", period: "2022 — 2023", type: "past", slug: "deliver-it-letsbank" },
  { company: "Next", role: "iOS Developer", period: "2021 — 2022", type: "past", slug: "next" },
  { company: "TocaLivros", role: "Mobile Developer", period: "2020 — 2021", type: "past", slug: "tocalivros" },
  { company: "Boviplan", role: "Mobile Developer", period: "2019 — 2020", type: "past", slug: "boviplan" },
  { company: "A.A.A. UFMS", role: "Developer", period: "2018 — 2019", type: "past", slug: "aaa-ufms" },
  { company: "CATWORK", role: "Developer", period: "2017 — 2018", type: "past", slug: "catwork" },
];

const principles = [
  { icon: Rocket, title: "Ship first, polish after", description: "Working software beats perfect branches. I ship small, learn fast, and refine with real usage." },
  { icon: Sparkles, title: "AI writes fast. I decide slow", description: "AI accelerates the craft; human judgment owns the consequences. Every line gets reviewed." },
  { icon: Target, title: "Design is engineering", description: "Spacing, motion, and typography are technical decisions. A beautiful UI is a well-architected one." },
  { icon: Cpu, title: "Native first, always", description: "Apple's APIs come before abstractions. No cross-platform shortcuts when the product deserves native." },
];

const education = [
  { school: "Descomplica", period: "2023 — 2025", degree: "BTech, Computer Systems Analysis" },
  { school: "UFMS", period: "2017 — 2021", degree: "BSc, Computer Engineering" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-border bg-background px-6 py-24 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-brutal" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who I am"
          title="Builder by instinct, engineer by choice"
          description="I'm Rafael Escaleira, an iOS Specialist based in Brazil. I design and ship native Apple products that scale — from clean architecture to polished interfaces."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <BrutalistCard accent="pulsar" className="h-full">
              <h3 className="mb-6 border-b border-border pb-3 text-sm font-black uppercase tracking-[0.2em] text-foreground">Career path</h3>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[7px] w-px bg-border" />
                <div className="space-y-6">
                  {careerSteps.map((step, i) => (
                    <ScrollReveal key={step.company} delay={i * 0.05}>
                      <Link
                        href={`/experience/${step.slug}`}
                        className="group relative flex items-start gap-4 pl-6"
                      >
                        <div
                          className={`absolute top-1.5 left-0 size-3.5 border transition-colors ${
                            step.type === "current"
                              ? "border-primary bg-primary"
                              : "border-orbit bg-background group-hover:border-primary"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <span className="font-heading text-base font-bold text-foreground transition-colors group-hover:text-primary">{step.company}</span>
                            {step.period && (
                              <span className="text-xs font-mono uppercase tracking-wider text-orbit">{step.period}</span>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{step.role}</div>
                        </div>
                      </Link>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </BrutalistCard>
          </ScrollReveal>

          <div className="space-y-8 lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <BrutalistCard accent="nebula" className="h-full">
                <h3 className="mb-5 flex items-center gap-2 border-b border-border pb-3 text-sm font-black uppercase tracking-[0.2em] text-foreground">
                  <GraduationCap className="size-4 text-nebula" />
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((edu) => (
                    <div key={edu.school}>
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-base font-bold text-foreground">{edu.school}</span>
                        <span className="text-xs font-mono uppercase text-orbit">{edu.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </BrutalistCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <BrutalistCard accent="teal">
                <h3 className="mb-5 border-b border-border pb-3 text-sm font-black uppercase tracking-[0.2em] text-foreground">Working principles</h3>
                <div className="grid gap-4">
                  {principles.map((principle) => {
                    const Icon = principle.icon;
                    return (
                      <div key={principle.title} className="group flex gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center border border-border bg-card transition-colors group-hover:border-primary">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground">{principle.title}</h4>
                          <p className="text-sm text-muted-foreground">{principle.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </BrutalistCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
