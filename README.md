# Kinderarztpraxis Dr. Carmen Müller — Website

Website for the pediatric practice of **Dr. med. Carmen Müller**, Fachärztin für
Kinderheilkunde und Jugendmedizin, in Heidelberg, Germany.

Built with **Next.js (App Router)** and **TypeScript**. All pages are
statically pre-rendered (SSG), so the content is present in the HTML for search
engines and social crawlers, and every page has its own real URL.

## Practice information

- **Dr. med. Carmen Müller** — Fachärztin für Kinderheilkunde und Jugendmedizin
- Dossenheimer Landstr. 40, 69121 Heidelberg
- Tel.: 06221 412450 · Fax: 06221 4348260
- Email: praxisteammueller@web.de

## Pages

| Route              | Menu label         | Content                                          |
| ------------------ | ------------------ | ------------------------------------------------ |
| `/`                | Startseite         | Welcome message and a gallery of the practice    |
| `/vor-ihrem-besuch`| Vor Ihrem Besuch   | Information for patients before their visit       |
| `/team`            | Team               | The practice team                                |
| `/leistungen`      | Leistungen         | Full list of medical services offered            |
| `/links`           | Links              | Useful external links                            |
| `/notfalle`        | Notfälle           | Emergency contacts and information               |
| `/contact`         | Kontakt            | Address, phone, fax and email                    |
| `/about`           | Impressum          | Legal notice / imprint and opening hours         |

The root layout ([src/app/layout.tsx](src/app/layout.tsx)) provides a shared
header, navigation bar (with a mobile menu), footer, scroll-to-top button and a
popup across all pages. It also holds the site-wide SEO metadata and the
`MedicalClinic` JSON-LD structured data.

## Tech stack

- [Next.js 14](https://nextjs.org/) (App Router) with [TypeScript](https://www.typescriptlang.org/)
- [React 18](https://react.dev/)
- [react-image-gallery](https://github.com/xiaolin/react-image-gallery) for image galleries
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) for the Alegreya Sans web font
- Plain CSS (one stylesheet per component/page, in `src/styles/`)

## Getting started

Requires [Node.js](https://nodejs.org/) 18.18+ and npm.

```bash
# Install dependencies
npm install

# Start the development server at http://localhost:3000
npm run dev
```

## Available scripts

| Command         | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| `npm run dev`   | Run the app in development mode at http://localhost:3000     |
| `npm run build` | Create an optimized production build                         |
| `npm run start` | Serve the production build locally                           |
| `npm run lint`  | Run ESLint                                                   |

## Project structure

```
public/
├── img/                  # Images (practice, team and services galleries)
├── logo.png              # Stable logo used for Open Graph / social sharing
├── logo192.png / 512.png # PWA icons
├── manifest.json         # Web app manifest
├── robots.txt            # References the sitemap
└── sitemap.xml           # Sitemap of all pages
src/
├── app/                  # App Router: one folder per route + layout.tsx
│   ├── layout.tsx        # Root layout: header, nav, footer, metadata, JSON-LD
│   └── <route>/page.tsx  # One page per route (statically rendered)
├── components/           # Navbar, Footer, Popup, galleries, ContactData, …
└── styles/               # One CSS file per page/component + globals.css
```

Interactive pieces (navigation menu, image galleries, popup, scroll-to-top) are
client components (`"use client"`); the rest render on the server as static HTML.

## Deployment (Vercel)

The project is deployed on [Vercel](https://vercel.com/), which auto-detects
Next.js — no build configuration is required. Pushing to the default branch
triggers a new deployment.

To deploy your own instance: import the GitHub repository in Vercel and deploy.
When using a custom domain, update the `SITE_URL` constant in
[src/app/layout.tsx](src/app/layout.tsx) and the URLs in
[public/sitemap.xml](public/sitemap.xml) / [public/robots.txt](public/robots.txt)
so canonical tags, Open Graph URLs and the sitemap point at the live domain.
