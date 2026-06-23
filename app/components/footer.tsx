"use client";

import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1F2937] bg-[#0B0F19] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-heading text-sm font-black uppercase tracking-wide text-[#F8FAFC]">Rafael E. Escaleira</p>
          <p className="text-sm text-[#64748B]">© {year} byescaleira. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
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
              className="flex size-10 items-center justify-center border border-[#1F2937] bg-[#111827] text-[#94A3B8] transition-all hover:border-[#FF6B00] hover:text-[#FF6B00]"
              aria-label={social.label}
            >
              <social.icon className="size-4" />
            </a>
          ))}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-7xl text-center">
        <p className="text-xs font-mono uppercase tracking-wider text-[#64748B]">
          Brutalist edition · Built with Next.js, Tailwind CSS, Framer Motion
        </p>
      </div>
    </footer>
  );
}
