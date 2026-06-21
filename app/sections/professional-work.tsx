"use client";

import { SectionHeading } from "../components/section-heading";
import { ScrollReveal } from "../components/scroll-reveal";
import { GlassCard } from "../components/glass-card";
import { OrbitPath, Planet } from "../components/space-orbits";
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
    <section id="work" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <OrbitPath className="-right-28 top-20 opacity-25" size={480} duration={65} color="orange" />
      <OrbitPath className="-left-20 bottom-20 opacity-20" size={360} duration={50} color="mixed" reverse />
      <Planet className="absolute right-[15%] top-[10%]" size={7} color="orange" />
      <Planet className="absolute left-[12%] bottom-[30%]" size={5} color="blue" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Professional work"
          title="Globo / Cartola FC"
          description="Currently leading iOS development for Cartola FC, the largest fantasy football game in Brazil — where performance, reliability, and native craft matter at scale."
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <ScrollReveal className="lg:col-span-2">
            <GlassCard glow="orange" className="h-full">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
                  <Trophy className="size-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Cartola FC</h3>
                  <p className="text-sm text-muted-foreground">Globo · iOS Specialist · Present</p>
                </div>
              </div>

              <p className="leading-relaxed text-muted-foreground">
                Cartola FC is more than a game — it is a national ritual during the Brazilian football season. As an iOS Specialist at Globo, I work on the architecture, performance, and user experience of an app used by millions of fans every round. The challenge is not just shipping features; it is keeping a massive codebase healthy, fast, and ready for spikes of traffic right after each match.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{item.label}</div>
                        <div className="text-sm text-muted-foreground">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <Link
                  href="/experience/globo"
                  className="group inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-pulsar"
                >
                  View full experience
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </GlassCard>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={0.1}>
              <GlassCard className="h-full">
                <h3 className="mb-4 text-lg font-semibold text-foreground">Previous roles</h3>
                <div className="space-y-4">
                  {previousRoles.map((role) => (
                    <Link
                      key={role.company}
                      href={`/experience/${role.company.toLowerCase().replace(/\s+/g, "-")}`}
                      className="group block rounded-xl border border-border bg-muted/40 p-4 transition-colors hover:border-primary/50 hover:bg-muted"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-foreground transition-colors group-hover:text-primary">{role.company}</span>
                        <ArrowRight className="size-4 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-0.5" />
                      </div>
                      <div className="text-sm text-muted-foreground">{role.role}</div>
                      <div className="mt-1 text-xs text-primary">{role.focus}</div>
                    </Link>
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
