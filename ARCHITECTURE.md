# ARCHITECTURE — byescaleira-frontend

## Overview

A static Next.js 16 site using the App Router. It is exported to static HTML for Vercel.

## Layers

```
app/
  layout.tsx       # Root layout: Geist fonts, dark class, metadata
  page.tsx         # Composes all sections
  globals.css      # Deep Space theme variables and utilities

components/
  sections/        # One component per page section
  shared/          # Navigation, Footer, StarField, AnimatedSection, SocialIcon, LinkButton
  ui/              # shadcn/ui primitives + LinkButton helper

lib/
  utils.ts         # cn() helper for Tailwind class merging
```

## Key patterns

- **Section components** are self-contained and use `AnimatedSection` for scroll reveals.
- **Shared animation primitives** keep motion consistent across the site.
- **Glass card styling** is applied via a `glass` utility class (backdrop blur + semi-transparent background + border).
- **Colors** come from CSS variables mapped in `@theme inline`, so both Tailwind and shadcn tokens share the Deep Space palette.
- **Static export** means no API routes; the site is fully prerendered.

## Dependencies

- `next`, `react`, `react-dom`
- `framer-motion`
- `lucide-react`
- `@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge` (via shadcn/ui)
- `tw-animate-css`, `shadcn/tailwind.css` (via shadcn/ui)
