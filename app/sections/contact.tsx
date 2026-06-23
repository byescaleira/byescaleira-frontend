"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../components/section-heading";
import { BrutalistCard } from "../components/brutalist-card";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/icons";

export function Contact() {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="relative overflow-hidden border-b border-[#1F2937] bg-[#0B0F19] px-6 py-24 md:px-12 md:py-32">
      <div className="pointer-events-none absolute inset-0 grid-brutal opacity-50" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <SectionHeading
          align="center"
          eyebrow="Contact"
          title="Let's build something native"
        />

        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 24 }}
          animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <BrutalistCard accent="pulsar">
            <p className="mb-8 text-center text-lg leading-relaxed text-[#94A3B8]">
              I am currently leading iOS at Globo, but I am always open to interesting conversations about architecture, products, or collaborations. Reach me on the public channels below.
            </p>

            <div className="grid gap-3">
              <a
                href="mailto:rafaelescaleira@icloud.com"
                className="btn-brutal text-center"
              >
                rafaelescaleira@icloud.com
              </a>

              <div className="grid gap-3 sm:grid-cols-3">
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
                    className="btn-brutal-outline justify-center"
                  >
                    <item.icon className="size-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </BrutalistCard>
        </motion.div>
      </div>
    </section>
  );
}
