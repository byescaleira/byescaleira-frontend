"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/icons";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden border-b border-[#1F2937] bg-[#0B0F19] px-6 pt-24 pb-12 md:px-12"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 grid-brutal opacity-70" />

      {/* Top status bar */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="absolute top-0 left-0 right-0 hidden border-b border-[#1F2937] md:block"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-xs font-mono uppercase tracking-wider text-[#64748B] md:px-8">
          <span>Campo Grande, MS / Rio de Janeiro, BR</span>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 bg-[#14B8A6]" />
              Available for select projects
            </span>
            <span>Swift / SwiftUI / AI workflows</span>
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 inline-flex items-center gap-2 border border-[#1F2937] px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-[#94A3B8]"
        >
          <span className="h-2 w-2 bg-[#FF6B00]" />
          Currently building Cartola FC at Globo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-6xl font-black uppercase tracking-tighter text-[#F8FAFC] sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Rafael
          <br />
          <span className="text-[#FF6B00]">Escaleira</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex max-w-3xl flex-wrap items-center gap-3 text-lg text-[#94A3B8] md:text-xl"
        >
          <span className="font-heading text-xl font-bold uppercase tracking-wide text-[#F8FAFC] md:text-2xl">
            iOS Specialist.
          </span>
          {["Swift", "SwiftUI", "Clean Architecture", "AI-augmented workflows"].map((tag) => (
            <span key={tag} className="tag-brutal">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-[#94A3B8]"
        >
          I help teams turn mobile complexity into simple, testable, scalable software.
          Currently leading AI adoption in engineering workflows at Globo.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#contact" className="btn-brutal">
            Get in touch
          </a>
          <a href="#work" className="btn-brutal-outline">
            See my work
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex items-center gap-6"
        >
          {[
            { href: "https://github.com/byescaleira", icon: GithubIcon, label: "GitHub" },
            { href: "https://www.linkedin.com/in/rafael-eescaleira", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "https://x.com/byescaleira", icon: XIcon, label: "X/Twitter" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64748B] transition-colors hover:text-[#FF6B00]"
            >
              <social.icon className="size-4" />
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-[#64748B] transition-colors hover:text-[#FF6B00]"
      >
        <span>Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
