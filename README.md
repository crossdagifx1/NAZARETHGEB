# Saint Gabriel Church — Adama, Ethiopia

A responsive bilingual website for Saint Gabriel Church in Adama, Ethiopia. The site presents the parish, its location and visitor information, a church photo gallery, and service and feast details in English and Amharic.

## Project overview

The interface pairs an Ethiopian Orthodox visual identity—parchment backgrounds, crimson and gold accents, decorative cross motifs, and classical typography—with a mobile-friendly layout. Visitors can switch languages from the header; the selected language updates the page copy, image descriptions, document title, and document language.

## Features

- **Bilingual experience:** English and Amharic content and navigation.
- **Parish information:** Church introduction, Adama location, map directions, and practical visitor guidance.
- **Photo gallery:** Seven church-listing photographs with translated captions and accessible descriptions.
- **Service schedule:** Responsive timetable with the supplied regular services and a clear note where vigil times are still to be confirmed.
- **Feasts and events:** A highlighted monthly feast and annual Feast of St Gabriel, with programme details marked for confirmation. Example events from the design reference are not presented as real events.
- **Responsive presentation:** Layouts designed for desktop and mobile screens.

Service and feast details reflect the information supplied for the site. Visitors should confirm current service arrangements and event programmes with the parish.

## Technology

- React 19 and TypeScript
- Vite 7
- Tailwind CSS 4
- `vite-plugin-singlefile` for a self-contained static build
- OpenStreetMap embed for the location map

## Run locally

Requires Node.js and npm.

```bash
npm ci
npm run dev
```

To create and preview a production build:

```bash
npm run build
npm run preview
```

The static build is written to `dist/`.

## Deployment

The project is configured for static deployment from the `main` branch through Vercel. A successful production build can also be hosted by any static web host that serves the generated `dist/` output.

## Project structure

```text
src/
  App.tsx          Main page sections and responsive layouts
  Ornaments.tsx    Reusable decorative church-themed elements
  translations.ts  English and Amharic interface copy
  index.css        Global styles and design tokens
public/
  images/          Optimized church and gallery photography
  manus-routes.json
index.html          Document shell and page metadata
vite.config.ts      Vite, React, Tailwind, and single-file build setup
```

## Developer

Designed and developed by **[Dagmawi Amare](https://checkits.my.id)**.

## License

The project code and photographs, as identified by the project owner, are released under the [MIT License](LICENSE). See the license file for the full terms.
