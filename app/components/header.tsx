"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-md transition-all duration-200 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="font-heading text-lg font-black uppercase tracking-tight text-foreground transition-colors hover:text-primary"
        >
          byescaleira
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              className="text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="https://www.instagram.com/rafaelescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Instagram"
          >
            <InstagramIcon className="size-5" />
          </a>
          <div className="border-l border-border pl-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile spacer for balance */}
        <div className="w-8 md:hidden" />
      </div>
    </header>
  );
}
