# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (also runs Next's internal type generation and static prerendering)
- `npm run start` — serve the production build
- `npm run lint` — ESLint via `eslint-config-next/core-web-vitals`

There is no test suite configured in this repo — don't assume one exists.

## Architecture

This is a single-page personal portfolio (one route: `app/page.js`) built with Next.js App Router, plain JavaScript (no TypeScript), and CSS Modules. There is no data fetching, no API routes, no database — all content is hardcoded as data arrays inside the relevant component files (e.g. `PROJECTS` in `components/Projects/Projects.js`, `SKILLS`/`HISTORY` in `components/Experience/Experience.js`).

**Component layout**: each section lives in its own folder under `components/` with a paired `Component.js` + `Component.module.css` (e.g. `components/About/About.js` + `About.module.css`). `app/page.js` composes `Sidebar` plus the four section components (`About`, `Projects`, `Experience`, `Contact`) in order.

**Shared section styles**: `components/Section.module.css` holds the common `.section` / `.sectionHeading` / `.sectionHeader` styles used across sections. Sections that need to override part of the shared style (`Experience`, `Contact`) do so via CSS Modules `composes: section from "../Section.module.css"` rather than duplicating rules — follow this pattern for any new section instead of copy-pasting `Section.module.css` content.

**Client/server split**: everything is a server component by default. Only the two pieces of the sidebar that need browser APIs are client components: `components/Sidebar/Nav.js` (scroll-spy active-link highlighting via `IntersectionObserver`) and `components/Sidebar/ThemeToggle.js` (toggles `data-theme="dark"` on `<html>` and persists to `localStorage`). `components/Sidebar/Sidebar.js` itself stays a server component and just renders these two as islands.

**Theme handling**: dark/light theme state lives on `document.documentElement`'s `data-theme` attribute, driven by `localStorage.theme` with a `prefers-color-scheme` fallback. Because that attribute is set by an inline script (`app/layout.js`, `next/script` with `strategy="beforeInteractive"`) before React hydrates, `<html>` in the root layout has `suppressHydrationWarning` — this is intentional (avoids a flash of the wrong theme) and should not be removed.

**Fonts/SEO/images**: `app/layout.js` loads Inter and IBM Plex Mono via `next/font/google` (exposed as the `--font-inter` / `--font-ibm-plex-mono` CSS variables used throughout the `*.module.css` files) and defines the site's `metadata` (title template, description, OpenGraph, Twitter card). `app/opengraph-image.js` and `app/icon.js` generate the OG image and favicon at build time using `next/og`'s `ImageResponse` — edit these directly rather than adding static image files. Project thumbnail screenshots live in `public/imgs/` and are rendered with `next/image` (`fill` layout inside a fixed-aspect wrapper).

**Path alias**: `@/*` maps to the repo root (`jsconfig.json`), e.g. `import Sidebar from "@/components/Sidebar/Sidebar"`.

**Deployment**: the app is deployed on Vercel under the custom domain `https://shpynda.dev`, which is also `siteUrl`/`metadataBase` in `app/layout.js`.
