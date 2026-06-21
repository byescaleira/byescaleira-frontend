# Decisions

| Date | Decision | Context | Consequences | Status |
|------|----------|---------|--------------|--------|
| 2026-06-21 | Use Next.js App Router + static export | Vercel deployment, simple pages, no runtime API | Simpler hosting; must avoid server-only APIs | Active |
| 2026-06-21 | Tailwind CSS v4 with CSS theme variables | Native theme switching, minimal config | `globals.css` carries all design tokens | Active |
| 2026-06-21 | Framer Motion with `useInView` fallback | Static export was leaving `whileInView` sections invisible | Animations are more robust but slightly more code | Active |
| 2026-06-21 | Content as data in `lib/content.ts` | Portfolio changes frequently; sections iterate faster | Single source of truth, type-safe | Active |
| 2026-06-21 | No email/WhatsApp/phone in public UI | Privacy and spam prevention | Contact uses LinkedIn, GitHub, X, Calendly | Active |
| 2026-06-21 | next-themes for light/dark/system | Built-in Tailwind dark mode integration | Adds dependency, improves UX | Active |
| 2026-06-21 | Orange as primary accent | Differentiates brand; warmer than blue-only palette | Replaces blue as the main CTA color | Active |

## Decision details

### 2026-06-21 — Orange as primary accent

Switched the main accent from Nebula Blue to a vivid orange. Orange CTAs stand out against both light and dark space backgrounds and feel warmer than a cold blue-only palette. Blue/teal remain as secondary accents.
