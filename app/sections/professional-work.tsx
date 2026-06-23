"use client";

import { SectionHeading } from "../components/section-heading";
import { ScrollReveal } from "../components/scroll-reveal";
import { BrutalistCard } from "../components/brutalist-card";
import { ArrowRight, Trophy, Zap, Users, Target } from "lucide-react";
import Link from "next/link";

const highlights = [
  { icon: Trophy, label: "Millions of active users", description: "Cartola FC during the Brazilian football season." },
  { icon: Zap, label: "Performance at scale", description: "Spikes right after every match, handled reliably." },
  { icon: Users, label: "Cross-team alignment", description: "iOS, backend, product, and design working as one unit." },
  { icon: Target, label: "Native craft", description: "SwiftUI, UIKit, and Clean Architecture in production." },
];

const previousRoles = [
  { company: "Deliver IT / Letsbank", role: "iOS Developer", focus: "Fintech, security, SDKs, CI/CD" },
  { company: "Next", role: "iOS Developer", focus: "E-commerce, performance, design systems" },
  { company: "TocaLivros", role: "Mobile Developer", focus: "React Native & iOS, marketplaces" },
  { company: "Boviplan", role: "Mobile Developer", focus: "Agtech iOS apps" },
];

const tags = ["Swift", "SwiftUI", "UIKit", "Clean Architecture", "Swift Concurrency", "SPM", "CI/CD"];

export function ProfessionalWork() {
  return (
    <section id="work" className="relative overflow-hidden border-b border-[#1F2937] bg-[#0B0F19] px-6 py-24 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-brutal opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional work"
          title="Globo / Cartola FC"
          description="Currently leading iOS development for Cartola FC, the largest fantasy football game in Brazil — where performance, reliability, and native craft matter at scale."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <BrutalistCard accent="pulsar" className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center border border-[#1F2937] bg-[#111827]">
                  <Trophy className="size-6 text-[#FF6B00]" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-black uppercase tracking-wide text-[#F8FAFC]">Cartola FC</h3>
                  <p className="text-sm font-mono uppercase tracking-wider text-[#64748B]">Globo · iOS Specialist · Present</p>
                </div>
              </div>

              <p className="leading-relaxed text-[#94A3B8]">
                Cartola FC is more than a game — it is a national ritual during the Brazilian football season. As an iOS Specialist at Globo, I work on the architecture, performance, and user experience of an app used by millions of fans every round. The challenge is not just shipping features; it is keeping a massive codebase healthy, fast, and ready for spikes of traffic right after each match.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center border border-[#1F2937] bg-[#111827]">
                        <Icon className="size-4 text-[#FF6B00]" />
                      </div>
                      <div>
                        <div className="font-heading text-sm font-bold uppercase tracking-wide text-[#F8FAFC]">{item.label}</div>
                        <div className="text-sm text-[#94A3B8]">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="tag-brutal">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/experience/globo"
                  className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#FF6B00] transition-colors hover:text-[#FF8C42]"
                >
                  View full experience
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </BrutalistCard>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <BrutalistCard accent="nebula" className="h-full">
                <h3 className="mb-4 border-b border-[#1F2937] pb-3 text-sm font-black uppercase tracking-[0.2em] text-[#F8FAFC]"
                >Previous roles</h3>
                <div className="space-y-3">
                  {previousRoles.map((role) => (
                    <Link
                      key={role.company}
                      href={`/experience/${role.company.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group block border border-[#1F2937] bg-[#0B0F19] p-4 transition-all hover:border-[#3B82F6] hover:bg-[#111827]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-heading text-sm font-bold uppercase tracking-wide text-[#F8FAFC] transition-colors group-hover:text-[#3B82F6]">{role.company}</span>
                        <ArrowRight className="size-4 text-[#64748B] transition-all group-hover:text-[#3B82F6] group-hover:translate-x-0.5" />
                      </div>
                      <div className="text-sm text-[#94A3B8]">{role.role}</div>
                      <div className="mt-1 text-xs font-mono uppercase text-[#3B82F6]">{role.focus}</div>
                    </Link>
                  ))}
                </div>
              </BrutalistCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
