"use client";

import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-orbit">
          Built by{" "}
          <a
            href="https://byescaleira.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-starlight hover:text-nebula-glow"
          >
            Rafael Escaleira
          </a>
          .
        </p>
        <p className="flex items-center gap-1.5 text-sm text-orbit">
          Crafted with native-first principles and a lot of
          <Heart className="size-4 text-mars" fill="currentColor" />.
        </p>
      </div>
    </footer>
  );
}
