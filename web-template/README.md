# Hovara — Yoga Studio & Wellness HTML Template

A free, production-ready HTML template for a yoga studio, meditation
space, or small wellness practice. Built in a **Paperpillar-inspired**
direction — photography-led, card-driven, soft 24px rounded corners,
single-family **Manrope** typography, and an earthy **sage / clay /
cream** palette.

## Pages

- `index.html` — Home (hero with photography + floating cards, six class-type cards, photo split, four-instructor grid, three testimonials, four-stat strip, three-tier membership teaser, CTA)
- `classes.html` — Six class types in detail with full descriptions, "what to bring" split, six-question FAQ
- `schedule.html` — Weekly schedule with all-week + per-day tab filtering, 30+ class slots, monthly closure note, three-card workshop teaser
- `studio.html` — Studio philosophy, four founding teachers, six-card "the space" breakdown, four-stat strip, six-row timeline since 2014
- `contact.html` — Studio address, full first-class booking form, six-card visiting essentials, three-card press / careers / partnerships

## Tech

- Static HTML, vanilla CSS, vanilla JS (no build step, no framework, no JS dependencies)
- Google Fonts: **Manrope** (300 / 400 / 500 / 600 / 700 / 800 — used as a single family) and **JetBrains Mono** for tiny captions only
- Real Pexels photography in `assets/img/` — replace with your own before launch (see `assets/img/CREDITS.md`)
- Reduced-motion friendly, keyboard accessible, semantic landmarks, skip-link
- Responsive at 375 / 768 / 1024 / 1440

## Design system

All tokens live at the top of `assets/css/styles.css` as CSS custom properties:

- **Palette** — cream (50–deep), bone, sage (mist–soft–base–deep), clay (soft–base–deep), warm ink scale
- **Typography** — Manrope as the only display + body family; six type sizes; tabular numerics in mono
- **Spacing** — 1 → 10 modular scale
- **Motion** — three durations, two easings, full reduced-motion fallback
- **Shadows** — four elevation levels with warm ink-tinted alpha
- **Radii** — sm / 14 / 20 / 28 / 36 / 48 / full — soft, organic feel
- **Layout** — fluid container, photo-split utility, photo-panel utility, classes-grid (3-col), instructors (4-col)

Adjust the `:root` block to recolour or rescale. The clay accent (`--clay`)
and sage primary (`--sage-deep`) are the two saturated colours in the
system; change them to recolour the punctuation across the entire site.

## Replacing the placeholders

Every photo in `assets/img/` is sourced from Pexels under their permissive
license (full attribution in `assets/img/CREDITS.md`). For a real launch:

- Replace `yoga-pose-hero.jpg`, `yoga-class.jpg`, `yoga-meditation.jpg`,
  `yoga-warrior.jpg`, `yoga-mat.jpg`, `yoga-breathing.jpg`, `yoga-studio.jpg`
  with your own studio photography.
- Replace `instructor-01.jpg` through `instructor-04.jpg` with real teacher
  portraits (always with permission, signed model release ideal).

## Customising the brand mark

The brand mark is a 30×30 clay-coloured circle with a cream inner dot. To
swap it for a logo, replace `<span class="brand-mark"></span>` with your
own SVG logo, or restyle `.brand-mark` in `styles.css`.

## Credit

Built by [html.design](https://html.design/) as a free download — fork it,
ship it, fill it with your own quiet rooms. No attribution required.
