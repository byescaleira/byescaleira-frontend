"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { ExternalLink, Sparkles, Terminal, Wallet } from "lucide-react";
import { GitHubIcon } from "@/components/shared/SocialIcon";

const projects = [
  {
    name: "Prism",
    codename: "Cosmos module",
    icon: Sparkles,
    description:
      "A design-system experiment for iOS and web. Tokens, components, and motion patterns built to feel native across platforms.",
    tags: ["Design System", "SwiftUI", "React"],
    status: "In progress",
  },
  {
    name: "Orbit",
    codename: "CLI / automation",
    icon: Terminal,
    description:
      "A personal automation CLI for scaffolding modules, running release checks, and keeping side-project workflows consistent.",
    tags: ["Swift", "CLI", "SPM"],
    status: "Prototype",
  },
  {
    name: "Cashly",
    codename: "Personal finance app",
    icon: Wallet,
    description:
      "A finance tracker focused on speed and clarity. Built to validate native-first architecture in a real product context.",
    tags: ["SwiftUI", "Core Data", "CloudKit"],
    status: "In progress",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-orbit"
          >
            Personal Projects
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
            Experiments in public
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-orbit">
            Side projects where I test architecture ideas, document decisions,
            and keep the craft sharp.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <AnimatedSection key={project.name} delay={index * 0.08}>
                <Card className="glass h-full border-white/10 transition-all hover:border-nebula/30 hover:bg-white/[0.07]">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="inline-flex rounded-xl bg-nebula/10 p-3 text-nebula-glow">
                        <Icon className="size-5" />
                      </div>
                      <Badge
                        variant="outline"
                        className="border-white/10 bg-white/5 text-xs text-orbit"
                      >
                        {project.status}
                      </Badge>
                    </div>

                    <h3 className="mb-1 font-heading text-xl font-semibold text-starlight">
                      {project.name}
                    </h3>
                    <p className="mb-4 text-xs font-medium uppercase tracking-wider text-cosmos">
                      {project.codename}
                    </p>
                    <p className="mb-6 flex-1 text-sm leading-relaxed text-orbit">
                      {project.description}
                    </p>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-orbit"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <LinkButton
                        size="sm"
                        variant="outline"
                        href="https://github.com/byescaleira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border-white/10 bg-white/5 text-orbit hover:bg-white/10 hover:text-starlight"
                      >
                        <GitHubIcon className="mr-2 size-4" />
                        Code
                      </LinkButton>
                      <LinkButton
                        size="sm"
                        variant="outline"
                        href="https://github.com/byescaleira"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border-white/10 bg-white/5 text-orbit hover:bg-white/10 hover:text-starlight"
                      >
                        <ExternalLink className="mr-2 size-4" />
                        Details
                      </LinkButton>
                    </div>
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
