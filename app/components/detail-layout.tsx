"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Header } from "./header";
import { Footer } from "./footer";
import { ScrollProgress } from "./scroll-progress";
import { MobileTabBar } from "./mobile-tab-bar";
import { StarField } from "./star-field";
import { GlassCard } from "./glass-card";

interface DetailLayoutProps {
  children: React.ReactNode;
  eyebrow: string;
  title: string;
  subtitle?: string;
  link?: string;
  linkLabel?: string;
}

export function DetailLayout({
  children,
  eyebrow,
  title,
  subtitle,
  link,
  linkLabel = "Visit site",
}: DetailLayoutProps) {
  return (
    <>
      <StarField />
      <ScrollProgress />
      <Header />
      <main className="relative z-10 flex flex-1 flex-col pb-24 pt-32 md:pb-0">
        <section className="px-6 md:px-12">
          <div className="mx-auto max-w-4xl">
            <motion.a
              href="/#"
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              Back to home
            </motion.a>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <GlassCard glow="orange">
                <span className="mb-3 inline-block text-xs font-medium uppercase tracking-[0.2em] text-primary">
                  {eyebrow}
                </span>
                <h1 className="font-heading text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
                )}
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-pulsar"
                  >
                    {linkLabel}
                    <ExternalLink className="size-4" />
                  </a>
                )}
              </GlassCard>
            </motion.div>

            <div className="mt-8">{children}</div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileTabBar />
    </>
  );
}
