# Decisions

| Date | Decision | Context | Consequences | Status |
|------|----------|---------|--------------|--------|
| 2026-06-21 | Use Next.js App Router + static export | Vercel deployment, simple pages, no runtime API | Simpler hosting; must avoid server-only APIs | Active |
| 2026-06-21 | Tailwind CSS v4 with CSS theme variables | Native theme switching, minimal config | `globals.css` carries all design tokens | Active |
| 2026-06-21 | Framer Motion with `useInView` fallback | Static export was leaving `whileInView` sections invisible | Animations are more robust but slightly more code | Active |
| 2026-06-21 | Content as data in `lib/content.ts` | Portfolio changes frequently; sections iterate faster | Single source of truth, type-safe | Active |
| 2026-06-21 | No email/WhatsApp/phone in public UI | Privacy and spam prevention | Contact uses LinkedIn, GitHub, Instagram | Active |
| 2026-06-21 | next-themes for light/dark/system | Built-in Tailwind dark mode integration | Adds dependency, improves UX | Active |
| 2026-06-21 | Orange as primary accent | Differentiates brand; warmer than blue-only palette | Replaces blue as the main CTA color | Active |
| 2026-06-25 | Refactor theme with CSS tokens | Hardcoded colors broke light mode and made future theming painful | All sections use semantic tokens; light mode is a real palette | Active |
| 2026-06-25 | Add Mission Control section | User wanted one section that breaks the template while staying on-brand | SVG/CSS-only iPhone + orbit illustration; no new dependencies | Active |
| 2026-06-25 | Keep brutalist orange as the reference design | Other apps are basing their look on this site | Layout was standardized, not rebranded | Active |

## Decision details

### 2026-06-25 — Refactor theme with CSS tokens

The original site used hex colors everywhere and had `.dark` hardcoded on the `<html>` tag. The theme toggle existed but did nothing visually. We rewrote `globals.css` with real light/dark palettes and migrated every section to use Tailwind semantic tokens (`bg-background`, `text-foreground`, etc.). The light mode keeps the brutalist orange accent but inverts the page background to a warm off-white.

### 2026-06-25 — Add Mission Control section

To break the repetitive section rhythm, we added a full-width "Mission Control" block between Skills and Work. It combines a floating iPhone mockup with typing Swift code and a scroll-driven orbital ring of capability nodes. Everything is SVG/CSS/Framer Motion — no images, no new runtime dependencies.

### 2026-06-25 — Keep brutalist orange as the reference design

The user explicitly said other applications are using this site as the design reference, so we preserved the core visual system: orange accent, squared corners, heavy uppercase headings, grid backgrounds, and thick borders. Changes were structural and thematic, not a rebrand.



### 2026-06-21 — Orange as primary accent

Switched the main accent from Nebula Blue to a vivid orange. Orange CTAs stand out against both light and dark space backgrounds and feel warmer than a cold blue-only palette. Blue/teal remain as secondary accents.
