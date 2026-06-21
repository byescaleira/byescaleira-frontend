"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../components/icons";

export function Hero() {
  return (
    <section
      id="#"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 pb-16 md:px-12"
    >
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 backdrop-blur-md"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cosmos opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-cosmos"></span>
          </span>
          <span className="text-sm text-orbit">
            Currently building Cartola FC at Globo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-semibold tracking-tight text-starlight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Rafael Escaleira
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-orbit md:text-2xl"
        >
          iOS Specialist. Native-first architect. 7+ years shipping Swift,
          SwiftUI, and clean architecture for products used by millions.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-xl text-base text-orbit/70"
        >
          I help teams turn mobile complexity into simple, testable, scalable
          software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-nebula px-6 text-sm font-medium text-white transition-colors hover:bg-nebula/90"
          >
            <Mail className="size-4" />
            Get in touch
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 text-sm font-medium text-starlight backdrop-blur-md transition-colors hover:bg-white/[0.08]"
          >
            See my work
            <ArrowDown className="size-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="https://github.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-orbit transition-all hover:border-nebula/50 hover:text-starlight"
            aria-label="GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-eescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-orbit transition-all hover:border-nebula/50 hover:text-starlight"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="mailto:rafaelescaleira@icloud.com"
            className="rounded-full border border-white/10 bg-white/[0.03] p-3 text-orbit transition-all hover:border-nebula/50 hover:text-starlight"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-orbit/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
