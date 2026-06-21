"use client";

import { SectionHeading } from "../components/section-heading";
import { ScrollReveal } from "../components/scroll-reveal";
import { GlassCard } from "../components/glass-card";
import { OrbitDecoration } from "../components/orbit-decoration";
import { IphoneMockup } from "../components/iphone-mockup";
import { CodeStrip } from "../components/code-strip";
import { Globe, Trophy, Users, TrendingUp, Tv, ArrowUpRight } from "lucide-react";

const highlights = [
  {
    icon: Users,
    value: "Millions",
    label: "Monthly active users",
  },
  {
    icon: Trophy,
    value: "Cartola FC",
    label: "Brazil's #1 fantasy football app",
  },
  {
    icon: TrendingUp,
    value: "Scale",
    label: "Production iOS architecture",
  },
];

const previousRoles = [
  {
    company: "Deliver IT / Letsbank",
    role: "iOS Developer",
    focus: "Fintech",
  },
  {
    company: "Next",
    role: "iOS Developer",
    focus: "Growth",
  },
  {
    company: "TocaLivros",
    role: "Mobile Developer",
    focus: "Edtech",
  },
  {
    company: "Boviplan",
    role: "Mobile Developer",
    focus: "Agtech",
  },
];

export function ProfessionalWork() {
  return (
    <section id="work" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <OrbitDecoration className="-left-40 bottom-0 h-96 w-96 opacity-20 md:-left-24 md:opacity-30" reverse />
      <IphoneMockup className="right-[2%] top-[5%] z-0 hidden opacity-35 xl:block" size="sm" screen="swiftui" />
      <CodeStrip className="bottom-[15%] left-0 z-0 hidden opacity-25 lg:block" />

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Professional Work"
          title="Globo / Cartola FC"
          description="Currently leading iOS development for Cartola FC, the largest fantasy football game in Brazil — where performance, reliability, and native craft matter at scale."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-3">
            <GlassCard glow="orange" className="group h-full">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Tv className="size-7 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-2xl font-semibold text-foreground">Cartola FC</h3>
                    <ArrowUpRight className="size-5 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>
                  <p className="text-sm text-muted-foreground">Globo · iOS Specialist · Present</p>
                </div>
              </div>

              <a href="/experience/globo/" className="block">
                <p className="mb-6 leading-relaxed text-muted-foreground">
                  Cartola FC is more than a game — it is a national ritual during
                  the Brazilian football season. As an iOS Specialist at Globo, I
                  work on the architecture, performance, and user experience of
                  an app used by millions of fans every round. The challenge is
                  not just shipping features; it is keeping a massive codebase
                  healthy, fast, and ready for spikes of traffic right after each
                  match.
                </p>
              </a>

              <div className="mb-6 flex flex-wrap gap-2">
                {[
                  "Swift",
                  "SwiftUI",
                  "UIKit",
                  "Clean Architecture",
                  "SPM",
                  "CI/CD",
                  "Performance",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-muted/40 px-3 py-1 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {highlights.map((h) => {
                  const Icon = h.icon;
                  return (
                    <div
                      key={h.label}
                      className="rounded-xl bg-muted/40 p-4 text-center"
                    >
                      <Icon className="mx-auto mb-2 size-5 text-primary" />
                      <div className="text-lg font-semibold text-foreground">{h.value}</div>
                      <div className="text-xs text-muted-foreground">{h.label}</div>
                    </div>
                  );
                })}
              </div>
            </GlassCard>
          </ScrollReveal>

          <ScrollReveal delay={0.15} className="lg:col-span-2">
            <GlassCard className="h-full">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                  <Globe className="size-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Previous stops</h3>
              </div>

              <div className="space-y-4">
                {previousRoles.map((role) => (
                  <div
                    key={role.company}
                    className="flex items-start justify-between rounded-xl bg-muted/40 p-4"
                  >
                    <div>
                      <div className="font-medium text-foreground">{role.company}</div>
                      <div className="text-sm text-muted-foreground">{role.role}</div>
                    </div>
                    <span className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground">
                      {role.focus}
                    </span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
