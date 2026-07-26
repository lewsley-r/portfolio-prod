# rlewsley.is-a.dev

Personal developer portfolio for **Ronan Lewsley** — Software Engineer based in Belfast, UK.

> **Live**: https://rlewsley.is-a.dev  
> **Source**: https://github.com/lewsley-r/portfolio-prod

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build | Vite 5 |
| Styling | Tailwind CSS v4 |
| Fonts | Inter (text), Space Grotesk (headings), JetBrains Mono (code) |
| Deployment | `gh-pages` via GitHub Actions |

Zero runtime dependencies beyond Vue itself. No router, no state management library — the site is a single-page, single-view application.

## Features

- **Hero section** with bio, role, and call-to-action links
- **Project grid** — 5 featured projects with category filtering and tech badges
- **Experience timeline** — career history from degree through current role at Whitespace, with expandable bullet-point details
- **Tech stack matrix** — 16 rated skills across 4 categories (Languages, DevOps, Data Engineering, Databases)
- **Dark/Light mode** — persists to `localStorage`, flashes prevention via inline `<script>` in `<head>`
- **Cyber/terminal aesthetic** — Warm Carbon (`#12161f`) and Amber Gold (`#f59e0b`) palette with card blur, glow effects, and monochrome accents
- **Responsive** — works across mobile, tablet, and desktop viewports
- **SEO metadata** — title, description, theme-color for both colour schemes
- **Accessibility** — `focus-visible` outlines, `prefers-reduced-motion` support, semantic landmarks

## Projects Featured

1. **PageGrade** — Chrome extension that runs a 25-point technical SEO audit on any page. Manifest V3, Lemon Squeezy monetisation, no backend dependency.
2. **Ulster Computing Blogs (UUCB)** — Social blogging platform with NLP-driven topic tagging. Vue, Laravel, K8s on GCP.
3. **682 MicroBlogs** — Cloud-native micro-blogging platform on Azure Functions + Cosmos DB with GitHub Actions CI/CD.
4. **Premier League Fantasy Team Builder** — FPL squad optimiser SPA. Angular, Flask, MongoDB.
5. **rlewsley.is-a.dev** — This portfolio site.

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts Vite dev server on `http://localhost:3000` with HMR enabled.

### Build

```bash
npm run build
```

Outputs a production build to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally for verification.

### Deploy

```bash
npm run deploy
```

Builds the project and pushes `dist/` to the `gh-pages` branch. The live site at `rlewsley.is-a.dev` is served from this branch via GitHub Pages. Always commit and push source changes to `main` before deploying.

## Project Structure

```
src/
├── App.vue                    # Root layout: header, main, footer
├── main.js                    # Entry point
├── style.css                  # Global styles, CSS custom properties, utility classes
├── views/
│   └── HomeView.vue           # Top-level view composing all sections
├── components/
│   ├── HeroSection.vue        # Bio, avatar, CTA buttons
│   ├── ExperienceTimeline.vue # Career timeline with expandable entries
│   ├── TechStackMatrix.vue    # Skills grid with proficiency bars
│   ├── ProjectGrid.vue        # Project cards with category filter
│   ├── CyberHeader.vue        # Top navigation bar with theme toggle
│   └── CyberFooter.vue        # Footer with social links and contact
├── data/
│   ├── projects.js            # Project entries and category list
│   ├── experiences.js         # Work history entries
│   └── skills.js              # Tech categories and proficiency data
public/
├── avatar.svg                 # Profile avatar
├── cv.pdf                     # Downloadable CV
├── favicon.png                # Browser tab icon
├── CNAME                      # Custom domain for GitHub Pages
└── pg-privacy/                # Privacy policy page for PageGrade extension
```

## Design

The theme is built around a **Warm Carbon & Amber Gold** palette:

- **Dark mode**: deep navy-grey (`#12161f`) background, amber (`#f59e0b`) accent, teal (`#14b8a6`) secondary
- **Light mode**: slate-white background, burnt amber (`#b45309`) accent, teal secondary
- Card surfaces use `backdrop-filter: blur()` for a frosted-glass effect
- Borders glow on hover via `box-shadow` transitions
- Subtle radial gradient overlays add depth without visual noise

## Colophon

- Version: 3.0.4
- Fonts served self-hosted via Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- No analytics, no tracking, no third-party scripts
