"use client";

import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LinkButton } from "@/components/ui/link-button";
import { Mail, MessageCircle } from "lucide-react";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/shared/SocialIcon";

const contactLinks = [
  {
    label: "Email",
    value: "rafaelescaleira@icloud.com",
    href: "mailto:rafaelescaleira@icloud.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rafael-eescaleira",
    href: "https://linkedin.com/in/rafael-eescaleira",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    value: "github.com/byescaleira",
    href: "https://github.com/byescaleira",
    icon: GitHubIcon,
  },
  {
    label: "WhatsApp",
    value: "+55 67 98188-4499",
    href: "https://wa.me/5567981884499",
    icon: MessageCircle,
  },
  {
    label: "X / Twitter",
    value: "@byescaleira",
    href: "https://x.com/byescaleira",
    icon: XIcon,
  },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 px-4 py-24 sm:px-6 sm:py-32 lg:px-8"
    >
      <div className="mx-auto max-w-4xl text-center">
        <AnimatedSection>
          <Badge
            variant="outline"
            className="mb-4 border-white/10 bg-white/5 text-orbit"
          >
            Contact
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-starlight sm:text-4xl">
            Let’s build something native.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-orbit">
            Open to iOS consulting, architecture reviews, and conversations
            about AI-augmented engineering. I read every message.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="mt-10">
          <LinkButton
            size="lg"
            href="mailto:rafaelescaleira@icloud.com"
            className="bg-nebula px-8 text-white hover:bg-nebula/90"
          >
            <Mail className="mr-2 size-5" />
            Send an email
          </LinkButton>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group"
                >
                  <Card className="glass h-full border-white/10 text-left transition-all hover:border-nebula/30 hover:bg-white/[0.07]">
                    <CardContent className="flex items-center gap-4 p-5">
                      <div className="rounded-xl bg-nebula/10 p-2.5 text-nebula-glow transition-colors group-hover:bg-nebula/20"
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-orbit">
                          {link.label}
                        </p>
                        <p className="text-sm font-medium text-starlight">
                          {link.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
