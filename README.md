# byescaleira-frontend

Personal website for [Rafael Escaleira](https://byescaleira.com) — iOS Specialist at Globo, building native Apple products that scale.

Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, Framer Motion, shadcn/ui, and the Deep Space visual identity.

## Tech stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Components:** shadcn/ui + custom Liquid Glass pieces
- **Icons:** Lucide + custom SVGs for brand marks
- **Deployment:** Vercel (static export)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Build

```bash
npm run build
```

The static export is written to the `dist/` directory. `next.config.ts` is configured with `output: 'export'` and `distDir: 'dist'`.

## Deploy

After the build passes:

```bash
vercel --prod
```

## Project structure

```
app/
  components/    # Reusable UI pieces (StarField, GlassCard, icons)
  sections/      # Page sections (Hero, About, Skills, Work, Projects, Playground, Contact)
  globals.css    # Deep Space theme + Liquid Glass utilities
  layout.tsx     # Root layout, metadata, dark mode
  page.tsx       # Landing page assembly
components/ui/   # shadcn/ui components
public/          # Static assets
dist/            # Static export output
```

## Design notes

- Dark-first palette based on the Deep Space identity.
- Apple Liquid Glass aesthetic with backdrop blur, subtle borders, and glowing accents.
- Heavy use of Framer Motion for scroll reveals, hover micro-interactions, and the animated starfield background.
- The Playground section includes a React/Framer Motion mirror of SwiftUI components. The integration point for a real MSF/MiniSwift compiled artifact is documented and ready to plug in.

## AI usage

Parts of this site were generated with AI assistance (Claude Code) and then reviewed, edited, and wired into the real build by Rafael. The profile content, architecture decisions, and visual direction are human-owned.

---

Built by [Rafael Escaleira](https://byescaleira.com) · [@byescaleira](https://x.com/byescaleira)

If something here helped you, let me know. If something is wrong, tell me louder.
