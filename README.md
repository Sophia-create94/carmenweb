# Kinderarztpraxis Dr. Carmen Müller — Website

Website for the pediatric practice of **Dr. med. Carmen Müller**, Fachärztin für
Kinderheilkunde und Jugendmedizin, in Heidelberg, Germany.

A single-page application built with **React 18** and **TypeScript** that presents
the practice, its team, its range of medical services, opening information and
contact details to patients and their families.

## Practice information

- **Dr. med. Carmen Müller** — Fachärztin für Kinderheilkunde und Jugendmedizin
- Dossenheimer Landstr. 40, 69121 Heidelberg
- Tel.: 06221 412450 · Fax: 06221 4348260
- Email: praxisteammueller@web.de

## Pages

The site uses client-side routing (`HashRouter`) with the following pages:

| Route              | Menu label         | Content                                                        |
| ------------------ | ------------------ | ------------------------------------------------------------- |
| `/`                | Startseite         | Welcome message and a gallery of the practice                 |
| `/vor-ihrem-besuch`| Vor Ihrem Besuch   | Information for patients before their visit                    |
| `/team`            | Team               | The practice team                                             |
| `/leistungen`      | Leistungen         | Full list of medical services offered                         |
| `/links`           | Links              | Useful external links                                        |
| `/notfalle`        | Notfälle           | Emergency contacts and information                            |
| `/contact`         | Kontakt            | Address, phone, fax and email                                |
| `/about`           | —                  | About the practice                                           |

The layout provides a shared navigation bar (with a mobile menu), footer and a
scroll-to-top button across all pages.

## Tech stack

- [React 18](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [React Router](https://reactrouter.com/) (`react-router-dom` v7) for routing
- [react-image-gallery](https://github.com/xiaolin/react-image-gallery) for image galleries
- Bootstrapped with [Create React App](https://create-react-app.dev/) (`react-scripts`)
- Plain CSS (one stylesheet per component/page)

## Getting started

Requires [Node.js](https://nodejs.org/) (a recent LTS version) and npm.

```bash
# Install dependencies
npm install

# Start the development server at http://localhost:3000
npm start
```

The page reloads automatically when you edit the source, and lint errors are
shown in the console.

## Available scripts

| Command         | Description                                                       |
| --------------- | ---------------------------------------------------------------- |
| `npm start`     | Run the app in development mode at http://localhost:3000          |
| `npm test`      | Launch the test runner in interactive watch mode                 |
| `npm run build` | Build an optimized production bundle into the `build/` folder     |

## Project structure

```
src/
├── App.tsx                # Route definitions
├── index.tsx             # App entry point
├── components/           # Reusable components (ContactData, Popup)
├── pages/                # One folder per page, each with its .tsx and .css
│   └── LayoutPage/       # Shared layout: Navbar, Footer, ScrollToTopButton
├── enums/                # Shared enums
└── img/                  # Images (practice, team and services galleries)
```

## Deployment

Run `npm run build` to produce a static, optimized bundle in the `build/`
folder, which can be served by any static host. Because routing uses
`HashRouter`, no special server-side rewrite configuration is required.
