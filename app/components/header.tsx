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
      className={`fixed top-0 left-0 right-0 z-50 border-b border-[#1F2937] bg-[#0B0F19] transition-all duration-200 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-8">
        <a
          href="/"
          className="font-heading text-lg font-black uppercase tracking-tight text-[#F8FAFC] transition-colors hover:text-[#FF6B00]"
        >
          byescaleira
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={isHome ? item.href : `/${item.href}`}
              className="text-xs font-bold uppercase tracking-[0.15em] text-[#94A3B8] transition-colors hover:text-[#FF6B00]"
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
            className="text-[#94A3B8] transition-colors hover:text-[#FF6B00]"
            aria-label="GitHub"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-eescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] transition-colors hover:text-[#FF6B00]"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-5" />
          </a>
          <a
            href="https://x.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#94A3B8] transition-colors hover:text-[#FF6B00]"
            aria-label="X/Twitter"
          >
            <XIcon className="size-5" />
          </a>
          <div className="border-l border-[#1F2937] pl-4">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile spacer for balance */}
        <div className="w-8 md:hidden" />
      </div>
    </header>
  );
}
