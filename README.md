# byescaleira-frontend

Personal website for [Rafael Escaleira](https://github.com/byescaleira) — iOS Specialist at Globo, working on Cartola FC.

Live at **https://byescaleira-frontend.vercel.app** (deployed on Vercel).

## What it is

A single-page portfolio built to feel like a native Apple experience on the web:

- Deep Space color palette with Liquid Glass surfaces
- Heavy, accessible Framer Motion animations
- Real profile content and career history
- Interactive SwiftUI-in-the-browser Playground demo
- Fully responsive from mobile to desktop

## Built with

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui (base-nova)
- **Motion:** Framer Motion
- **Icons:** Lucide + inline SVGs
- **Fonts:** DM Sans, Space Grotesk, JetBrains Mono

## Design workflow

This site was designed with the help of **UI/UX Pro Max** and **Framer Motion**, installed via the [website-builder-setup](https://github.com/tenfoldmarc/website-builder-setup) skill for Claude Code.

The design system was generated with:

```bash
python3 .claude/skills/ui-ux-pro-max/scripts/search.py \
  "personal portfolio ios specialist dark mode liquid glass apple premium animations" \
  --design-system -p "byescaleira" -f markdown --persist
```

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static export is enabled via `output: 'export'` in `next.config.ts`. The build must pass with zero errors before deploying.

## Deploy

```bash
vercel --prod
```

## Project structure

```
app/
  components/     # Reusable UI primitives (Header, Footer, GlassCard, ScrollReveal, etc.)
  sections/       # Hero, About, Skills, Work, Projects, Playground, Contact
  globals.css     # Deep Space + Liquid Glass design tokens
  layout.tsx      # Fonts and metadata
  page.tsx        # Landing page composition
public/           # Static assets
.claude/          # Claude Code skills (UI/UX Pro Max, Framer Motion)
```

## SwiftUI Playground note

The Playground simulates SwiftUI components in React. The production vision is to embed a compiled Swift-to-WASM artifact from MSF / MiniSwift and render the real canvas inside the same container.

---

Built by Rafael Escaleira · [@byescaleira](https://x.com/byescaleira)
