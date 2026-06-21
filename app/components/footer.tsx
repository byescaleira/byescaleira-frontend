"use client";

import { GithubIcon, LinkedinIcon, TwitterIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium text-starlight">Rafael E. Escaleira</p>
          <p className="text-sm text-orbit">© {year} byescaleira. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-orbit transition-colors hover:text-starlight"
            aria-label="GitHub"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/rafael-eescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-orbit transition-colors hover:text-starlight"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <a
            href="https://x.com/byescaleira"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 bg-white/[0.03] p-2.5 text-orbit transition-colors hover:text-starlight"
            aria-label="X/Twitter"
          >
            <TwitterIcon className="size-4" />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl text-center">
        <p className="text-xs text-orbit/60">
          Built with Next.js, Tailwind CSS, Framer Motion, and shadcn/ui.
          Deployed on Vercel.
        </p>
      </div>
    </footer>
  );
}
