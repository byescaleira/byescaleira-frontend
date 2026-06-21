# byescaleira-frontend

Personal website for [Rafael Escaleira](https://byescaleira.com) — iOS Specialist at Globo, working on Cartola FC.

Built with Next.js 14+ (App Router), React, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui. Statically exported for Vercel.

## Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **UI:** shadcn/ui (base-nova style)
- **Motion:** Framer Motion
- **Icons:** Lucide + inline SVGs for social brands
- **Fonts:** Geist (sans) and Geist Mono

## Local setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

The site is statically exported to the `dist/` directory. The build must pass with zero errors before deploying.

## Deploy

```bash
vercel --prod
```

Requires the Vercel CLI and access to the target project.

## Project structure

```
app/                  # Next.js routes, layout, and global styles
components/
  sections/           # Hero, About, Skills, Work, Projects, Playground, Contact
  shared/             # Navigation, Footer, StarField, AnimatedSection, SocialIcon
  ui/                 # shadcn/ui components + LinkButton helper
public/               # Static assets
```

## Notes

- The `/website-builder-setup` skill was not available in this session, so the project was scaffolded manually with the equivalent stack from the brief.
- The SwiftUI playground is a declarative React demo. A production version would compile SwiftUI views to WebAssembly via MiniSwift / MSF and render the canvas inside the React container.

---

Built by [Rafael Escaleira](https://byescaleira.com) · [@byescaleira](https://x.com/byescaleira)

If something here helped you, let me know. If something is wrong, tell me louder.
