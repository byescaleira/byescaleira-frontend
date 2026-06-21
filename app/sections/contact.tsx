"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { GlassCard } from "../components/glass-card";
import { OrbitPath, Planet, Constellation } from "../components/space-orbits";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/icons";

export function Contact() {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden px-6 py-24 md:px-12 md:py-32">
      <OrbitPath className="-left-28 top-[10%] opacity-25" size={440} duration={60} color="orange" reverse satellites={2} />
      <OrbitPath className="-right-24 bottom-[15%] opacity-20" size={400} duration={50} color="mixed" satellites={2} />
      <Constellation className="left-[10%] top-[15%] hidden opacity-50 lg:block" count={7} />
      <Planet className="absolute right-[12%] top-[18%]" size={8} color="orange" />
      <Planet className="absolute left-[18%] bottom-[25%]" size={6} color="blue" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something native"
          description=""
        />

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard glow="orange" className="text-left">
            <p className="mb-8 text-center text-lg leading-relaxed text-muted-foreground">
              I am currently leading iOS at Globo, but I am always open to interesting conversations about architecture, products, or collaborations. Reach me on the public channels below.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href="https://calendly.com/byescaleira"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 sm:col-span-2"
              >
                Schedule a conversation
              </a>

              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/rafael-eescaleira", icon: LinkedinIcon },
                { label: "GitHub", href: "https://github.com/byescaleira", icon: GithubIcon },
                { label: "X", href: "https://x.com/byescaleira", icon: XIcon },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-2xl border border-border bg-muted/40 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                >
                  <item.icon className="size-4" />
                  {item.label}
                </a>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
