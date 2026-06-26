# byescaleira-frontend

> Personal portfolio of Rafael Escaleira — iOS Specialist shipping native apps with Swift, SwiftUI, and a lot of coffee.

Live at **https://byescaleira-frontend.vercel.app**.

## What it is

A single-page portfolio built to feel like a native Apple experience on the web:

- Deep Space color palette with Liquid Glass surfaces
- Heavy, accessible Framer Motion animations
- Real profile content and career history
- Fully responsive from mobile to desktop
- Light, dark, and system theme support

## Built with

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **UI:** shadcn/ui
- **Motion:** Framer Motion
- **Deployment:** Vercel

## Structure

- `app/` — Next.js App Router pages and components
- `app/sections/` — page sections (Hero, About, Skills, Mission Control, Work, Projects, Contact)
- `app/components/` — shared components, animations, and detail layouts
- `lib/content.ts` — source of truth for experiences and projects
- `public/` — static assets

## Pages

- `/` — portfolio homepage
- `/experience/[slug]` — dedicated experience pages
- `/project/[slug]` — dedicated project pages

## Quick start

```bash
git clone git@github.com:byescaleira/byescaleira-frontend.git
cd byescaleira-frontend
npm install
npm run dev
```

## Documentation

- [CLAUDE.md](./CLAUDE.md) — project brief and iteration context
- [ARCHITECTURE.md](./ARCHITECTURE.md) — how the site is built
- [DECISIONS.md](./DECISIONS.md) — important technical choices
- [CHANGELOG.md](./CHANGELOG.md) — release history

## License

MIT © Rafael Escaleira

---

Built by [Rafael Escaleira](https://byescaleira.com) · [@byescaleira](https://www.instagram.com/rafaelescaleira)

If something here helped you, let me know. If something is wrong, tell me louder.
