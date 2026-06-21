"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/icons";
import { ScrollProgress } from "../components/scroll-progress";
import { OrbitPath, Planet, Constellation } from "../components/space-orbits";

export function Hero() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);
  const y = useTransform(scrollY, [0, 400], [0, 60]);
  const smoothY = useSpring(y, { stiffness: 100, damping: 30 });

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-12 md:px-12"
    >
      <ScrollProgress />

      {/* Central orbital system behind headline */}
      <OrbitPath
        className="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30"
        size={700}
        duration={100}
        color="mixed"
        thickness={1.2}
        satellites={3}
      />
      <OrbitPath
        className="-left-24 top-1/4 opacity-40 md:left-[5%]"
        size={420}
        duration={55}
        color="orange"
        reverse
        satellites={2}
      />
      <OrbitPath
        className="-right-24 top-1/3 opacity-35 md:right-[8%]"
        size={520}
        duration={70}
        color="blue"
        satellites={2}
      />

      <Constellation className="left-[8%] top-[22%] opacity-60" count={6} />
      <Constellation className="right-[10%] bottom-[25%] opacity-50" count={8} />

      <Planet className="absolute top-[16%] left-[12%]" size={10} color="orange" />
      <Planet className="absolute top-[12%] right-[22%]" size={7} color="blue" />
      <Planet className="absolute bottom-[30%] left-[18%]" size={6} color="muted" />
      <Planet className="absolute bottom-[22%] right-[16%]" size={11} color="orange" />
      <Planet className="absolute top-[42%] right-[6%] hidden md:block" size={5} color="blue" />
      <Planet className="absolute bottom-[40%] left-[4%] hidden md:block" size={4} color="orange" />

      <motion.div
        style={{ opacity, scale, y: smoothY }}
        className="relative z-10 max-w-4xl text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-4 py-2 text-sm text-muted-foreground backdrop-blur-md"
        >
          <span className="size-2 rounded-full bg-primary"></span>
          Currently building Cartola FC at Globo
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-5xl font-semibold tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Rafael Escaleira
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 text-lg text-muted-foreground md:text-xl"
        >
          <span className="text-foreground">iOS Specialist.</span>
          {["Swift", "SwiftUI", "Clean Architecture", "AI-augmented workflows"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border bg-muted/40 px-3 py-1 text-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
        >
          I help teams turn mobile complexity into simple, testable, scalable software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="group inline-flex h-12 items-center gap-2 rounded-full border border-border bg-muted/40 px-6 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            See my work
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
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
              className="flex size-10 items-center justify-center rounded-full border border-border bg-muted/40 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
            >
              <social.icon className="size-4" />
            </a>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="uppercase tracking-[0.2em]">Scroll</span>
        <ArrowDown className="size-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
