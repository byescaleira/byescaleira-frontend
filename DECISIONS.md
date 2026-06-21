# DECISIONS — byescaleira-frontend

| Date | Decision | Context | Consequences | Status |
|---|---|---|---|---|
| 2026-06-21 | Use Next.js 16 + App Router | Brief requires Next.js 14+ with static export; latest stable was available. | Access to latest features and faster Turbopack builds. | Active |
| 2026-06-21 | Use Tailwind CSS 4 and shadcn/ui base-nova | `create-next-app` template ships Tailwind 4; shadcn/ui init matched it. | New `@theme inline` syntax and base-nova components; slight learning curve. | Active |
| 2026-06-21 | Build custom Deep Space theme instead of default shadcn colors | Brief specifies Void Black, Nebula Blue, Starlight, etc. | Unique visual identity; requires custom CSS variables and Tailwind theme mapping. | Active |
| 2026-06-21 | Create `LinkButton` wrapper instead of shadcn `asChild` | Installed shadcn Button uses `@base-ui/react/button`, which has no `asChild` prop. | Consistent accessible link buttons without invalid HTML nesting. | Active |
| 2026-06-21 | Use inline SVGs for GitHub, LinkedIn, and X | Lucide React no longer ships brand icons in the installed version. | Exact brand icon shapes; no extra dependency. | Active |
| 2026-06-21 | Provide React-based SwiftUI playground demo | MiniSwift / MSF compiled artifact not available in this session. | Polished interactive demo + clear technical explanation of future integration. | Active |
| 2026-06-21 | Document AI usage honestly | Operating rule: "When using AI in a project, document it honestly." | README notes that the site was built with AI assistance. | Active |
| 2026-06-21 | Default to dark mode only | Brief: "Dark-first palette with controlled light moments." | Simpler CSS; light mode can be added later if needed. | Active |
