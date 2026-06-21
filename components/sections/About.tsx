"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const principles = [
  { title: "Native first", description: "Apple's APIs before abstractions. No cross-platform shortcuts." },
  { title: "AI-augmented", description: "AI accelerates; human judgment owns the consequences." },
  { title: "Design = architecture", description: "Spacing, motion, and typography are technical decisions." },
  { title: "Ship then polish", description: "Working software beats perfect branches." },
];

const careerTimeline = [
  { year: "2024", role: "iOS Specialist", company: "Globo · Cartola FC", current: true },
  { year: "2022", role: "iOS Developer", company: "Deliver IT / Letsbank" },
  { year: "2021", role: "Mobile Developer", company: "Next" },
  { year: "2020", role: "iOS Developer", company: "TocaLivros" },
  { year: "2019", role: "Full Stack", company: "Boviplan" },
  { year: "2017", role: "Started", company: "CATWORK · A.A.A. UFMS" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-orbit"
          >
            Who I Am
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
            Native iOS, scaled by craft.
          </h2>
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-2">
          <AnimatedSection delay={0.1}>
            <Card className="glass h-full border-white/10">
              <CardContent className="space-y-6 p-8">
                <p className="text-lg leading-relaxed text-starlight"
                >
                  I’m Rafael Escaleira, an iOS Specialist with 7+ years building
                  products across startups, banks, and media. My path started in
                  Campo Grande, MS, moved through computer engineering at UFMS,
                  and landed me at{" "}
                  <span className="text-nebula-glow">Globo</span> leading iOS
                  work on Cartola FC.
                </p>
                <p className="leading-relaxed text-orbit">
                  I care about modular architecture, testable code, and the kind
                  of developer experience that makes teams ship faster without
                  breaking things. Right now I’m focused on bringing AI into the
                  engineering workflow — documentation, code review, tests, and
                  technical standards — while keeping human judgment at the
                  center.
                </p>
                <p className="leading-relaxed text-orbit">
                  When I’m not deep in Xcode, I’m documenting decisions, building
                  experiments like Prism and Orbit, or trying to make a website
                  feel as good as a native app.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="grid gap-4 sm:grid-cols-2">
              {principles.map((principle) => (
                <Card
                  key={principle.title}
                  className="glass border-white/10 transition-all hover:border-nebula/30 hover:bg-white/[0.07]"
                >
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-heading text-base font-semibold text-starlight">
                      {principle.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-orbit">
                      {principle.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={0.3} className="mt-16">
          <h3 className="mb-8 text-center font-heading text-2xl font-semibold text-starlight">
            Career timeline
          </h3>
          <div className="relative">
            <div className="absolute inset-y-0 left-4 w-px bg-gradient-to-b from-nebula/50 via-cosmos/30 to-transparent md:left-1/2" />
            <div className="space-y-8">
              {careerTimeline.map((item, index) => (
                <div
                  key={item.year + item.company}
                  className={`relative flex flex-col gap-2 md:flex-row md:items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="flex-1 md:text-center">
                    <span className="inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-orbit">
                      {item.year}
                    </span>
                  </div>
                  <div className="absolute left-4 top-1 size-2.5 rounded-full bg-nebula shadow-[0_0_10px_rgba(59,130,246,0.6)] md:left-1/2 md:-translate-x-1/2" />
                  <div className="flex-1 pl-10 md:pl-0">
                    <Card className="glass inline-block border-white/10">
                      <CardContent className="px-5 py-3">
                        <p className="font-medium text-starlight">{item.role}</p>
                        <p className="text-sm text-orbit">
                          {item.company}
                          {item.current && (
                            <span className="ml-2 text-cosmos">· current</span>
                          )}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
