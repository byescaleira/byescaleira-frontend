"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Smartphone,
  Layers,
  Box,
  Puzzle,
  TestTube,
  GitBranch,
  Palette,
  Zap,
  Bot,
  Cpu,
} from "lucide-react";

const skillGroups = [
  {
    title: "iOS Engineering",
    icon: Smartphone,
    skills: ["Swift", "SwiftUI", "UIKit", "Swift Concurrency", "Combine"],
  },
  {
    title: "Architecture",
    icon: Layers,
    skills: ["Clean Architecture", "MVVM", "Coordinator", "Modularization", "SPM"],
  },
  {
    title: "Quality & Testing",
    icon: TestTube,
    skills: ["TDD", "Unit Testing", "XCTest", "Snapshot Testing", "CI Quality Gates"],
  },
  {
    title: "Tooling & DevEx",
    icon: GitBranch,
    skills: ["Git", "GitHub Actions", "Fastlane", "Tuist", "Xcode Cloud"],
  },
  {
    title: "Design Systems",
    icon: Palette,
    skills: ["Design Tokens", "Component Libraries", "Accessibility", "Motion", "Typography"],
  },
  {
    title: "Performance",
    icon: Zap,
    skills: ["Memory Profiling", "Concurrency Tuning", "Scroll Performance", "Binary Size", "Metrics"],
  },
  {
    title: "AI-Augmented Workflow",
    icon: Bot,
    skills: ["AI Code Review", "Test Generation", "Documentation", "Technical Standards", "Prompting"],
  },
  {
    title: "Cross-Domain",
    icon: Cpu,
    skills: ["React / Next.js", "TypeScript", "Node.js", "REST / GraphQL", "Firebase"],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-orbit"
          >
            Skills
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
            What I build with
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-orbit">
            A mix of deep native expertise, architectural discipline, and modern
            tooling — plus the AI habits that make a team faster.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <AnimatedSection key={group.title} delay={index * 0.05}>
                <Card className="glass h-full border-white/10 transition-all hover:border-nebula/30 hover:bg-white/[0.07]">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex rounded-xl bg-nebula/10 p-3 text-nebula-glow">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="mb-3 font-heading text-base font-semibold text-starlight">
                      {group.title}
                    </h3>
                    <ul className="space-y-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="flex items-center gap-2 text-sm text-orbit"
                        >
                          <span className="size-1 rounded-full bg-cosmos" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
