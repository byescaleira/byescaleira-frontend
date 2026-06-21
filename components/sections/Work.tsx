"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const highlights = [
  "Led modularization and architecture decisions for Cartola FC iOS app",
  "Introduced AI-assisted code review and documentation workflows",
  "Drove SwiftUI adoption and Swift Concurrency migration patterns",
  "Improved CI/CD pipelines and quality gates for a high-traffic release cycle",
];

const previousRoles = [
  {
    company: "Deliver IT / Letsbank",
    role: "iOS Developer",
    period: "2022 — 2024",
    focus: "Banking app architecture, feature delivery, and testing culture.",
  },
  {
    company: "Next",
    role: "Mobile Developer",
    period: "2021 — 2022",
    focus: "Cross-functional product squads and React Native + iOS bridges.",
  },
  {
    company: "TocaLivros",
    role: "iOS Developer",
    period: "2020 — 2021",
    focus: "Social reading app, UI polish, and App Store release process.",
  },
  {
    company: "Boviplan",
    role: "Full Stack Developer",
    period: "2019 — 2020",
    focus: "Agtech dashboards, APIs, and mobile companion features.",
  },
];

export function Work() {
  return (
    <section
      id="work"
      className="relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-orbit"
          >
            Professional Work
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
            Where I’ve shipped
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Card className="glass mb-12 overflow-hidden border-white/10">
            <CardContent className="p-8 sm:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-nebula/15 text-lg font-bold text-nebula-glow">
                      G
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl font-bold text-starlight">
                        Globo · Cartola FC
                      </h3>
                      <p className="text-sm text-orbit">iOS Specialist · 2024 — present</p>
                    </div>
                  </div>
                  <p className="max-w-2xl text-orbit">
                    Cartola FC is one of Brazil’s biggest fantasy football
                    platforms. I joined Globo to lead iOS architecture, scale
                    the team’s engineering practices, and bring AI into the
                    development workflow without losing the craft.
                  </p>
                </div>
                <a
                  href="https://globo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-orbit transition-colors hover:text-starlight"
                >
                  Visit Globo
                  <ExternalLink className="size-4" />
                </a>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
                  >
                    <div className="mb-2 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-supernova" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-orbit">
                        Impact
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-starlight">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {previousRoles.map((role, index) => (
            <AnimatedSection key={role.company} delay={0.2 + index * 0.08}>
              <Card className="glass h-full border-white/10 transition-all hover:border-white/20">
                <CardContent className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <h4 className="font-heading text-lg font-semibold text-starlight">
                      {role.company}
                    </h4>
                    <span className="text-xs text-orbit">{role.period}</span>
                  </div>
                  <p className="mb-3 text-sm font-medium text-nebula-glow">
                    {role.role}
                  </p>
                  <p className="text-sm leading-relaxed text-orbit">{role.focus}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
