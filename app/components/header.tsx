"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Playground", href: "#playground" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [scrolled, setScrolled] = useState(false);

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
            ? "glass-strong shadow-2xl shadow-black/20"
            : "bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between">
          <a href="/" className="text-lg font-semibold tracking-tight text-foreground hover:text-primary transition-colors">
            byescaleira
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={isHome ? item.href : `/${item.href}`}
                className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-1 md:flex">
            <a
              href="https://github.com/byescaleira"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="GitHub"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/rafael-eescaleira"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href="https://x.com/byescaleira"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="X/Twitter"
            >
              <XIcon className="size-5" />
            </a>
            <div className="ml-1">
              <ThemeToggle />
            </div>
          </div>

          {/* Spacer for visual balance on mobile */}
          <div className="w-8 md:hidden" />
        </div>
      </div>
    </header>
  );
}
