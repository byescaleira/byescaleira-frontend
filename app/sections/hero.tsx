"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "../components/icons";
import { IphoneMockup } from "../components/iphone-mockup";
import { CodeStrip } from "../components/code-strip";

const words = ["Swift", "SwiftUI", "Clean Architecture", "AI-augmented workflows"];

export function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 pb-16 md:px-12"
    >
      {/* Animated ambient orbs */}
      <motion.div
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.08, 1, 0.98],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[18%] left-[18%] h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -30, 20, 0],
            y: [0, 30, -20, 0],
            scale: [1, 1.05, 1, 1.02],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[16%] right-[16%] h-[32rem] w-[32rem] rounded-full bg-primary/20 blur-[110px]"
        />
        <motion.div
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -40, 20, 0],
            scale: [1, 1.12, 0.95, 1],
          }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[45%] left-[60%] h-64 w-64 rounded-full bg-primary/10 blur-[80px]"
        />
      </motion.div>

      {/* Floating iPhone mockups */}
      <IphoneMockup
        className="right-[5%] top-[18%] z-0 hidden lg:block"
        size="md"
        screen="swiftui"
        rotate
      />
      <IphoneMockup
        className="bottom-[16%] left-[6%] z-0 hidden opacity-60 lg:block"
        size="sm"
        screen="code"
      />

      {/* Animated code strip */}
      <CodeStrip className="top-[10%] left-0 z-0 hidden md:block" />
      <CodeStrip className="bottom-[12%] right-0 z-0 hidden md:block" reverse />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 inline-flex items-center gap-2 rounded-full liquid-glass px-4 py-2"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-primary"></span>
          </span>
          <span className="text-sm text-muted-foreground">
            Currently building Cartola FC at Globo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-6xl font-semibold tracking-tight text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
        >
          Rafael{" "}
          <span className="text-gradient glow-text">Escaleira</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 flex min-h-[2rem] max-w-2xl items-center justify-center gap-2 text-xl text-muted-foreground md:text-2xl"
        >
          <span className="font-medium text-foreground">iOS Specialist.</span>
          <span className="inline-flex">
            {words.map((word, index) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                  y: [10, 0, 0, -10],
                }}
                transition={{
                  duration: 3,
                  delay: index * 3,
                  repeat: Infinity,
                  repeatDelay: (words.length - 1) * 3 - 3,
                  ease: "easeInOut",
                  times: [0, 0.15, 0.85, 1],
                }}
                className="absolute font-medium text-primary"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-4 max-w-xl text-base text-muted-foreground/80"
        >
          I help teams turn mobile complexity into simple, testable, scalable
          software.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground shadow-[0_0_50px_-10px_var(--pulsar)] transition-all hover:bg-primary/90 hover:shadow-[0_0_60px_-8px_var(--pulsar)]"
          >
            Get in touch
          </a>
          <a
            href="#work"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full liquid-glass px-6 text-sm font-medium text-foreground transition-all hover:bg-muted"
          >
            See my work
            <ArrowDown className="size-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {[
            { href: "https://github.com/byescaleira", label: "GitHub", Icon: GithubIcon },
            { href: "https://www.linkedin.com/in/rafael-eescaleira", label: "LinkedIn", Icon: LinkedinIcon },
            { href: "https://x.com/byescaleira", label: "X/Twitter", Icon: XIcon },
          ].map(({ href, label, Icon }, i) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.08 }}
              whileHover={{ scale: 1.12, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="liquid-glass rounded-full p-3 text-muted-foreground transition-colors hover:text-foreground"
              aria-label={label}
            >
              <Icon className="size-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-muted-foreground/50"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="size-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
