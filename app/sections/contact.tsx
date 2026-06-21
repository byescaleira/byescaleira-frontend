"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { ScrollReveal } from "../components/scroll-reveal";
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
    <section id="contact" className="relative px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something native"
          description="Open for architecture consulting, iOS partnerships, and technical leadership conversations."
          align="center"
        />

        <ScrollReveal>
          <GlassCard glow="blue" className="mb-8">
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-orbit">
              If you are building an iOS product and need someone who cares about
              architecture as much as animation, reach out. I am based in
              Brazil and happy to work with teams anywhere.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://calendly.com/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-nebula px-6 text-sm font-medium text-white transition-colors hover:bg-nebula/90"
              >
                <Calendar className="size-4" />
                Schedule a conversation
              </a>
              <a
                href="https://www.linkedin.com/in/rafael-eescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-starlight transition-colors hover:bg-white/[0.08]"
              >
                <LinkedinIcon className="size-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-starlight transition-colors hover:bg-white/[0.08]"
              >
                <GithubIcon className="size-4" />
                GitHub
              </a>
              <a
                href="https://x.com/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-starlight transition-colors hover:bg-white/[0.08]"
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
          className="grid gap-4 sm:grid-cols-2"
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
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-nebula/50 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-nebula/10 transition-colors group-hover:bg-nebula/20">
                    <Icon className="size-5 text-nebula" />
                  </div>
                  <div className="text-left">
                    <div className="text-sm text-orbit">{contact.label}</div>
                    <div className="font-medium text-starlight">{contact.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="size-5 text-orbit transition-colors group-hover:text-nebula" />
              </motion.a>
            );
          })}
        </motion.div>

        <ScrollReveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 text-sm text-orbit">
            <div className="flex items-center gap-2">
              <Calendar className="size-4 text-nebula" />
              <span>Prefer async first, then a call when it matters.</span>
            </div>
            <a
              href="https://calendly.com/byescaleira"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-5 font-medium text-starlight transition-colors hover:border-nebula/50 hover:bg-white/[0.08]"
            >
              <Calendar className="size-4 text-nebula" />
              Schedule a conversation
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
