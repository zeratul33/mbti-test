# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # start dev server at localhost:4321
npm run build      # static build to dist/
npm run preview    # preview the dist/ build locally
```

No test runner is configured. Verify changes with `npm run build`.

## Architecture

TypeInsight is an Astro SSG site (output: static) using React islands and Tailwind CSS v4.

**Data flow for the quiz:**
1. `src/data/questions.ts` defines 10 questions and exports `scoreAnswers(answers)` which maps an `answers: Record<number, 'A'|'B'>` to a lowercase 16-type string (e.g. `"intj"`).
2. `src/components/MBTITestIsland.tsx` is the only React island (`client:load`). It runs the quiz with Framer Motion slide animations, calls `scoreAnswers`, then navigates to `/result/{type}`.
3. `src/pages/result/[type].astro` — all 16 result pages are individual static `.astro` files (not dynamic routes). Each file contains its own type constants (type, nickname, tagline, strengths, growthEdges, careers, stats) at the top.

**Layout chain:**
- `BaseLayout.astro` wraps every page — includes `SEOHead.astro` (meta + JSON-LD), site nav, and `Footer.astro`.
- `SEOHead.astro` emits `WebApplication` JSON-LD on every page, plus conditional `FAQPage` JSON-LD when `faqItems` prop is passed (currently only `test.astro`).

**Styling:**
- Tailwind v4 via `@tailwindcss/vite` (no `tailwind.config.mjs` is read by Tailwind at runtime — v4 uses CSS-first config). Custom tokens live in `tailwind.config.mjs` but are primarily expressed through inline classes.
- Design rules: `1px solid #D9D4CC` borders for all separation, no drop shadows, no `rounded-*` except `rounded-sm` on buttons, no `bg-blue-*`.
- Color palette: `paper` (#F4F1EA), `charcoal` (#1A1A1A), `forest` (#2D4A22), `brick` (#8B3A3A), `muted` (#6B6560), `border` (#D9D4CC).
- Fonts: Playfair Display (serif headings) + Inter (sans body), loaded from Google Fonts in `src/styles/global.css`.

**Monetisation placeholders:**
- `AdSensePlaceholder.astro` — replace `ca-pub-XXXXXXXXXXXXXXXX` with real publisher ID post-AdSense approval.
- `AffiliateCard.astro` — replace the BetterHelp href with the real affiliate referral URL.

## Adding a new result page

Copy any existing `src/pages/result/*.astro`, update the six constants at the top (`type`, `nickname`, `tagline`, `strengths`, `growthEdges`, `careers`, `stats`), and save under the correct lowercase filename (e.g. `enfp.astro`). No routing config needed — Astro picks it up automatically.
