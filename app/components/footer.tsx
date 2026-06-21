"use client";

import { GithubIcon, LinkedinIcon, XIcon } from "./icons";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-foreground">Rafael E. Escaleira</p>
          <p className="text-sm text-muted-foreground">© {year} byescaleira. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-muted/30 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-eescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-muted/30 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="https://x.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-muted/30 p-2.5 text-muted-foreground transition-colors hover:text-foreground"
            aria-label="X/Twitter"
          >
            <XIcon className="size-4" />
          </a>
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl text-center">
        <p className="text-xs text-muted-foreground/70">
          Built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui.
          Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
