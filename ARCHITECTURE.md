# Architecture: byescaleira-frontend

## Overview

A static-first personal portfolio built with Next.js App Router and deployed to Vercel.

## Goals

1. **Native Apple feel on the web** — Liquid Glass surfaces, smooth motion, responsive layout.
2. **Static export friendly** — every page is pre-rendered; no runtime server needed.
3. **Accessible by default** — semantic sections, keyboard navigation, reduced-motion support.
4. **Theme aware** — light, dark, and system mode with Tailwind CSS v4.
5. **Fast iteration** — all content lives in `lib/content.ts`; UI reads from it.

## Non-goals

- Full CMS integration (content is code).
- Backend runtime or API routes.
- Framework-agnostic portability.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- Lucide React
- next-themes (theme switching)

## Structure

```
app/
  components/          # shared UI, animations, and layout
  sections/            # homepage section components
  experience/[slug]/   # dynamic experience detail pages
  project/[slug]/      # dynamic project detail pages
  globals.css          # design tokens, utilities, theme variables
  layout.tsx           # root layout with providers
  page.tsx             # homepage
lib/
  content.ts           # source of truth for experiences and projects
public/
  static assets
```

## Conventions

- All colors are CSS variables with light/dark values in `app/globals.css`.
- Animation components use `useInView` + `animate` to avoid SSR invisible-state bugs.
- Dynamic routes use `generateStaticParams` so they are pre-rendered at build time.
- Sections have `id` attributes matching the navigation anchors.
- Liquid Glass surfaces use `backdrop-blur`, translucent fills, and 1px soft borders.
