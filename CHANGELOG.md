# Changelog

## [Unreleased]

## [1.2.0] - Mars - 2026-06-25

### Fixed
- Dark/light/system theme toggle now works end-to-end; root no longer hardcodes `.dark`.

### Changed
- Refactored all sections to use CSS theme tokens (`bg-background`, `text-foreground`, `border-border`, `text-primary`) instead of hardcoded hex values.
- Standardized section rhythm and card density while preserving the brutalist orange identity.
- Contact section no longer exposes the email address; social links only.
- Updated public identity: name is now "Rafael Escaleira" everywhere.
- Updated social links to LinkedIn (`byescaleira`), GitHub (`byescaleira`), and Instagram (`rafaelescaleira`). Removed X/Twitter.

### Added
- New "Mission Control" section between Skills and Work with an animated iPhone mockup, typing Swift code, and an orbital constellation of skills.
- Reusable `IphoneMockup` and `CodeOrbit` illustration components.
- Missing `liquid-glass` and `glow-*` utility classes.
- Light mode palette: warm off-white background with the same orange accent.

### Deployed
- Production: https://www.byescaleira.com
- Vercel: https://byescaleira-frontend-qh8tjb7rm-byescaleira.vercel.app

## [1.1.0] - Venus - 2026-06-21

### Added
- Animated illustrations: starfield, orbit decorations, satellite strips, iPhone mockups, floating code blocks, scroll progress.
- iOS-style bottom Liquid Glass tab bar for mobile navigation.
- Dedicated detail pages for experiences and projects.
- Light, dark, and system theme support.
- Vivid orange as the primary accent color.

### Changed
- Contact section no longer exposes email, WhatsApp, or phone. Uses LinkedIn, GitHub, and Instagram.
- README rewritten to match byescaleira repository skeleton.

## [1.0.0] - Mercury - 2026-06-21

### Added
- Initial portfolio: Hero, About, Skills, Work, Projects, Contact.
- Deep Space / Liquid Glass visual identity.
- Framer Motion scroll animations.
- Responsive layout.

### Fixed
- Scroll-reveal sections staying invisible under static export.
