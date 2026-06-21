"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/shared/SocialIcon";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8">
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cosmos opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-cosmos" />
          </span>
          <span className="text-sm font-medium text-orbit">
            Available for iOS consulting
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-5xl font-bold tracking-tight text-starlight sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Rafael{" "}
          <span className="bg-linear-to-r from-nebula to-cosmos bg-clip-text text-transparent">
            Escaleira
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-orbit sm:text-xl"
        >
          iOS Specialist building native products that scale. Currently shaping
          mobile architecture and AI adoption at{" "}
          <span className="text-starlight">Globo</span> on{" "}
          <span className="text-starlight">Cartola FC</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <LinkButton
            size="lg"
            href="#contact"
            className="group bg-nebula px-6 text-white hover:bg-nebula/90"
          >
            <Mail className="mr-2 size-4" />
            Get in touch
          </LinkButton>
          <LinkButton
            size="lg"
            variant="outline"
            href="#work"
            className="border-white/10 bg-white/5 text-starlight backdrop-blur-sm hover:bg-white/10 hover:text-starlight"
          >
            See my work
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          <a
            href="https://linkedin.com/in/rafael-eescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-orbit transition-all hover:scale-110 hover:text-starlight"
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="size-5" />
          </a>
          <a
            href="https://github.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-orbit transition-all hover:scale-110 hover:text-starlight"
            aria-label="GitHub"
          >
            <GitHubIcon className="size-5" />
          </a>
          <a
            href="https://x.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/5 p-3 text-orbit transition-all hover:scale-110 hover:text-starlight"
            aria-label="X / Twitter"
          >
            <XIcon className="size-5" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-orbit transition-colors hover:text-starlight"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
