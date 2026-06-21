# PROPOSAL — byescaleira-frontend

## What

A personal website for Rafael Escaleira (`byescaleira`), an iOS Specialist at Globo working on Cartola FC. The site showcases his profile, skills, professional work, personal projects, and a SwiftUI-in-the-browser playground.

## Why

A single, fast, well-designed destination that reflects Rafael’s real work, working principles, and technical depth — without relying on generic portfolio templates.

## Scope

1. Hero with animated background and clear positioning.
2. About / bio, working principles, and career timeline.
3. Skills grid covering iOS, architecture, testing, tooling, design systems, performance, and AI workflows.
4. Professional work with Globo/Cartola as the main case.
5. Personal projects: Prism, Orbit, Cashly.
6. SwiftUI browser playground (interactive demo with technical explanation).
7. Contact section with email, LinkedIn, GitHub, WhatsApp, and X.

## Out of scope

- Backend or CMS integration.
- Blog or content management.
- Full Swift-to-WASM compiler integration (provided as polished demo + explanation).

## Stack

- Next.js 14+ (App Router)
- React + TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui
- Static export for Vercel

## Success criteria

- `npm run build` passes with zero errors.
- Site is deployed to Vercel.
- All content reflects Rafael’s real profile (no placeholders).

## Timeline

Single 6-week cycle target: ship MVP in days, then polish.
