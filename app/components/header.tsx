"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Playground", href: "#playground" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-4 rounded-2xl px-4 py-3 transition-all duration-300 md:mx-8 md:px-6 ${
          scrolled
            ? "glass-strong shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="#" className="text-lg font-semibold tracking-tight text-starlight">
            byescaleira
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-sm text-orbit transition-colors hover:bg-white/[0.06] hover:text-starlight"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <a
              href="https://github.com/byescaleira"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-orbit transition-colors hover:bg-white/[0.06] hover:text-starlight"
              aria-label="GitHub"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-eescaleira"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-orbit transition-colors hover:bg-white/[0.06] hover:text-starlight"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href="mailto:rafaelescaleira@icloud.com"
              className="rounded-lg p-2 text-orbit transition-colors hover:bg-white/[0.06] hover:text-starlight"
              aria-label="Email"
            >
              <Mail className="size-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="rounded-lg p-2 text-orbit hover:bg-white/[0.06] md:hidden"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="glass-strong mx-4 mt-2 rounded-2xl p-4 md:hidden"
          >
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm text-orbit transition-colors hover:bg-white/[0.06] hover:text-starlight"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
