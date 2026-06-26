"use client";

import { GithubIcon, LinkedinIcon, InstagramIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-heading text-sm font-black uppercase tracking-wide text-foreground">Rafael Escaleira</p>
          <p className="text-sm text-orbit">© {year} byescaleira. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/byescaleira", icon: GithubIcon, label: "GitHub" },
            { href: "https://www.linkedin.com/in/byescaleira", icon: LinkedinIcon, label: "LinkedIn" },
            { href: "https://www.instagram.com/rafaelescaleira", icon: InstagramIcon, label: "Instagram" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex size-10 items-center justify-center border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
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
        <p className="text-xs font-mono uppercase tracking-wider text-orbit">
          Brutalist edition · Built with Next.js, Tailwind CSS, Framer Motion
        </p>
      </div>
    </footer>
  );
}
