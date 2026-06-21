"use client";

import { ScrollReveal } from "../components/scroll-reveal";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { OrbitPath, Constellation } from "../components/space-orbits";
import { GraduationCap, Rocket, Target, Sparkles } from "lucide-react";

const careerSteps = [
  { company: "Globo", role: "iOS Specialist — Cartola FC", period: "Present", type: "current" },
  { company: "Deliver IT / Letsbank", role: "iOS Developer", period: "2022 — 2023", type: "past" },
  { company: "Next", role: "iOS Developer", period: "2021 — 2022", type: "past" },
  { company: "TocaLivros", role: "Mobile Developer", period: "2020 — 2021", type: "past" },
  { company: "Boviplan", role: "Mobile Developer", period: "2019 — 2020", type: "past" },
  { company: "A.A.A. UFMS", role: "Developer", period: "2018 — 2019", type: "past" },
  { company: "CATWORK", role: "Developer", period: "2017 — 2018", type: "past" },
];

const principles = [
  { icon: Rocket, title: "Ship first, polish after", description: "Working software beats perfect branches. I ship small, learn fast, and refine with real usage." },
  { icon: Sparkles, title: "AI writes fast. I decide slow", description: "AI accelerates the craft; human judgment owns the consequences. Every line gets reviewed." },
  { icon: Target, title: "Design is engineering", description: "Spacing, motion, and typography are technical decisions. A beautiful UI is a well-architected one." },
  { icon: Rocket, title: "Native first, always", description: "Apple's APIs come before abstractions. No cross-platform shortcuts when the product deserves native." },
];

const education = [
  { school: "Descomplica", period: "2023 — 2025", degree: "BTech, Computer Systems Analysis" },
  { school: "UFMS", period: "2017 — 2021", degree: "BSc, Computer Engineering" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <OrbitPath className="-right-24 top-12 opacity-25" size={420} duration={60} color="mixed" satellites={2} />
      <OrbitPath className="-left-16 bottom-24 opacity-20" size={340} duration={45} color="orange" reverse satellites={2} />
      <Constellation className="left-[6%] top-[30%] hidden opacity-60 lg:block" count={10} />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Who I am"
          title="Builder by instinct, engineer by choice"
          description="I'm Rafael Escaleira, an iOS Specialist based in Brazil. I design and ship native Apple products that scale — from clean architecture to polished interfaces."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <GlassCard glow="orange" className="h-full">
              <h3 className="mb-6 text-lg font-semibold text-foreground">Career path</h3>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />
                <div className="space-y-6">
                  {careerSteps.map((step, i) => (
                    <ScrollReveal key={step.company} delay={i * 0.05}>
                      <div className="group relative flex items-start gap-4 pl-6">
                        <div
                          className={`absolute top-1.5 left-0 size-3.5 rounded-full border-2 transition-colors ${
                            step.type === "current"
                              ? "border-primary bg-primary"
                              : "border-muted-foreground bg-background group-hover:border-primary"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <span className="font-medium text-foreground transition-colors group-hover:text-primary">{step.company}</span>
                            {step.period && (
                              <span className="text-xs font-medium text-primary">{step.period}</span>
                            )}
                          </div>
                          <div className="text-sm text-muted-foreground">{step.role}</div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="space-y-8 lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <GlassCard className="h-full">
                <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold text-foreground"
                >
                  <GraduationCap className="size-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((edu) => (
                    <div key={edu.school}>
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground">{edu.school}</span>
                        <span className="text-xs text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <GlassCard glow="blue">
                <h3 className="mb-5 text-lg font-semibold text-foreground">Working principles</h3>
                <div className="grid gap-4">
                  {principles.map((principle) => {
                    const Icon = principle.icon;
                    return (
                      <div key={principle.title} className="group flex gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                          <Icon className="size-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{principle.title}</h4>
                          <p className="text-sm text-muted-foreground">{principle.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </GlassCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
