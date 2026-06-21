"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { ScrollReveal } from "../components/scroll-reveal";
import { IphoneMockup } from "../components/iphone-mockup";
import { ArrowUpRight, Calendar } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/icons";

const contacts = [
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/rafael-eescaleira",
    href: "https://www.linkedin.com/in/rafael-eescaleira",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/byescaleira",
    href: "https://github.com/byescaleira",
  },
  {
    icon: XIcon,
    label: "X / Twitter",
    value: "x.com/byescaleira",
    href: "https://x.com/byescaleira",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const contactItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export function Contact() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-50px" });

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <IphoneMockup className="left-[2%] top-[10%] z-0 hidden opacity-30 xl:block" size="sm" screen="gradient" />
      <IphoneMockup className="right-[3%] bottom-[5%] z-0 hidden opacity-25 xl:block" size="sm" screen="code" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something native"
          description="Open for architecture consulting, iOS partnerships, and technical leadership conversations."
          align="center"
        />

        <ScrollReveal>
          <GlassCard glow="orange" className="mb-8">
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-muted-foreground">
              If you are building an iOS product and need someone who cares about
              architecture as much as animation, reach out. I am based in
              Brazil and happy to work with teams anywhere.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://calendly.com/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Calendar className="size-4" />
                Schedule a conversation
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-eescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-muted/40 px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-muted/40 px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
              <a
                href="https://x.com/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border bg-muted/40 px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
              >
                <XIcon className="size-4" />
                X
              </a>
            </div>
          </GlassCard>
        </ScrollReveal>

        <motion.div
          ref={gridRef}
          initial="hidden"
          animate={gridInView ? "show" : "hidden"}
          variants={container}
          className="grid gap-4 sm:grid-cols-3"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={contactItem}
                className="group flex items-center justify-between rounded-2xl border border-border bg-muted/40 p-5 transition-all hover:border-primary/50 hover:bg-muted"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-muted-foreground">{contact.label}</div>
                    <div className="font-medium text-foreground">{contact.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
              </motion.a>
            );
          })}
        </motion.div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-primary" />
              <span>Prefer async first, then a call when it matters.</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
