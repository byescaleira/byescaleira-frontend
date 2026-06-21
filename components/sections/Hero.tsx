"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail, Sparkles } from "lucide-react";
import { LinkButton } from "@/components/ui/link-button";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/shared/SocialIcon";

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-20 sm:px-6 lg:px-8">
      <motion.div style={{ y: y1, opacity }} className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-nebula/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-cosmos/10 blur-3xl" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full liquid-glass px-4 py-1.5"
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
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-6xl font-bold tracking-tight text-starlight sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Rafael{" "}
          <span className="gradient-text glow-text">
            Escaleira
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-orbit sm:text-xl"
        >
          iOS Specialist building native products that scale. Currently shaping
          mobile architecture and AI adoption at{" "}
          <span className="font-medium text-starlight">Globo</span> on{" "}
          <span className="font-medium text-starlight">Cartola FC</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <LinkButton
            size="lg"
            href="#contact"
            className="group shine bg-nebula px-7 text-white shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:bg-nebula/90"
          >
            <Mail className="mr-2 size-4" />
            Get in touch
          </LinkButton>
          <LinkButton
            size="lg"
            variant="outline"
            href="#work"
            className="liquid-glass text-starlight hover:bg-white/[0.08] hover:text-starlight"
          >
            See my work
          </LinkButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 flex items-center justify-center gap-4"
        >
          {[{
            href: "https://linkedin.com/in/rafael-eescaleira",
            label: "LinkedIn",
            Icon: LinkedInIcon,
          }, {
            href: "https://github.com/byescaleira",
            label: "GitHub",
            Icon: GitHubIcon,
          }, {
            href: "https://x.com/byescaleira",
            label: "X / Twitter",
            Icon: XIcon,
          }].map(({ href, label, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.08 }}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group relative rounded-full liquid-glass p-3 text-orbit transition-colors hover:text-starlight"
              aria-label={label}
            >
              <Icon className="size-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-orbit transition-colors hover:text-starlight"
        aria-label="Scroll to about section"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-5" />
        </motion.div>
      </motion.a>
    </section>
  );
}
