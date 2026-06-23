"use client";

import { ScrollReveal } from "../components/scroll-reveal";
import { SectionHeading } from "../components/section-heading";
import { BrutalistCard } from "../components/brutalist-card";
import { GraduationCap, Rocket, Target, Sparkles, Cpu } from "lucide-react";

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
  { icon: Cpu, title: "Native first, always", description: "Apple's APIs come before abstractions. No cross-platform shortcuts when the product deserves native." },
];

const education = [
  { school: "Descomplica", period: "2023 — 2025", degree: "BTech, Computer Systems Analysis" },
  { school: "UFMS", period: "2017 — 2021", degree: "BSc, Computer Engineering" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-b border-[#1F2937] bg-[#0B0F19] px-6 py-24 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-brutal opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Who I am"
          title="Builder by instinct, engineer by choice"
          description="I'm Rafael Escaleira, an iOS Specialist based in Brazil. I design and ship native Apple products that scale — from clean architecture to polished interfaces."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <BrutalistCard accent="pulsar" className="h-full">
              <h3 className="mb-6 border-b border-[#1F2937] pb-3 text-sm font-black uppercase tracking-[0.2em] text-[#F8FAFC]">Career path</h3>
              <div className="relative">
                <div className="absolute top-0 bottom-0 left-[7px] w-px bg-[#1F2937]" />
                <div className="space-y-6">
                  {careerSteps.map((step, i) => (
                    <ScrollReveal key={step.company} delay={i * 0.05}>
                      <div className="group relative flex items-start gap-4 pl-6">
                        <div
                          className={`absolute top-1.5 left-0 size-3.5 border transition-colors ${
                            step.type === "current"
                              ? "border-[#FF6B00] bg-[#FF6B00]"
                              : "border-[#64748B] bg-[#0B0F19] group-hover:border-[#FF6B00]"
                          }`}
                        />
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                            <span className="font-heading text-base font-bold text-[#F8FAFC] transition-colors group-hover:text-[#FF6B00]">{step.company}</span>
                            {step.period && (
                              <span className="text-xs font-mono uppercase tracking-wider text-[#64748B]">{step.period}</span>
                            )}
                          </div>
                          <div className="text-sm text-[#94A3B8]">{step.role}</div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </BrutalistCard>
          </ScrollReveal>

          <div className="space-y-8 lg:col-span-2">
            <ScrollReveal delay={0.1}>
              <BrutalistCard accent="nebula" className="h-full">
                <h3 className="mb-5 flex items-center gap-2 border-b border-[#1F2937] pb-3 text-sm font-black uppercase tracking-[0.2em] text-[#F8FAFC]"
                >
                  <GraduationCap className="size-4 text-[#3B82F6]" />
                  Education
                </h3>
                <div className="space-y-5">
                  {education.map((edu) => (
                    <div key={edu.school}>
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-base font-bold text-[#F8FAFC]">{edu.school}</span>
                        <span className="text-xs font-mono uppercase text-[#64748B]">{edu.period}</span>
                      </div>
                      <p className="text-sm text-[#94A3B8]">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </BrutalistCard>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <BrutalistCard accent="teal">
                <h3 className="mb-5 border-b border-[#1F2937] pb-3 text-sm font-black uppercase tracking-[0.2em] text-[#F8FAFC]"
                >Working principles</h3>
                <div className="grid gap-4">
                  {principles.map((principle) => {
                    const Icon = principle.icon;
                    return (
                      <div key={principle.title} className="group flex gap-4">
                        <div className="flex size-10 shrink-0 items-center justify-center border border-[#1F2937] bg-[#111827] transition-colors group-hover:border-[#FF6B00]">
                          <Icon className="size-5 text-[#FF6B00]" />
                        </div>
                        <div>
                          <h4 className="font-heading text-sm font-bold uppercase tracking-wide text-[#F8FAFC]">{principle.title}</h4>
                          <p className="text-sm text-[#94A3B8]">{principle.description}</p>
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
