# Sri Venkateshwara Florist — Decoration Showcase

A responsive React + Vite web app for a florist and event‑decoration business. It showcases venues and decoration setups, lets visitors browse curated galleries by event type, and provides a contact form for enquiries.

The UI is built with Tailwind CSS v4 and follows a consistent teal design system (`#2b6777` / `#52ab98` / `#c8d8e4`).

## Features

- **Decoration showcase** (`/`) — Browse venues/setups with:
  - Live text **search** (by title, description, or tag).
  - **Style filter** dropdown generated from the available tags.
  - Results count, **empty state**, and one‑click **Clear filters**.
- **Decoration details** (`/decordetails`) — Image gallery with thumbnail selector, description, rating, pricing, key features, tags, and booking/quote actions.
- **Gallery** (`/gallery`) — Event categories (Wedding, Birthday, Naming Ceremony, Engagement, Sangeet, Baby Shower, Gruhapravesha) with keyboard‑accessible cards.
- **Detailed gallery** (`/gallery/:eventType`) — Auto‑advancing carousel with prev/next controls, image counter, and a thumbnail strip.
- **Contact** (`/contact`) — Contact form plus business information and hours.
- **Responsive navigation** with desktop, tablet, and mobile menus.
- **Accessibility & motion** — Focus rings, aria labels/pressed states, lazy‑loaded images, and `prefers-reduced-motion` support.

## Tech Stack

- **React 19** with **React Router 7**
- **Vite 7** (dev server + build)
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **lucide-react** for icons

## Getting Started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project Structure

```
decor/
├── public/
├── src/
│   ├── assets/            # Event photos (Birthday, Wedding, Engagement, etc.)
│   ├── Images/            # HouseWarming photos
│   ├── components/
│   │   ├── NavBar.jsx     # Responsive top navigation
│   │   ├── Footer.jsx     # Site footer with contact info
│   │   ├── ListOfItems.jsx# Home / decoration showcase with search & filters
│   │   └── DecorDetails.jsx# Single decoration detail + image gallery
│   ├── pages/
│   │   ├── Home.jsx       # Simple welcome page
│   │   ├── Contact.jsx    # Contact form + business details
│   │   ├── Gallery.jsx    # Event category grid
│   │   └── DetailedGallery.jsx # Per‑event carousel gallery
│   ├── utils/
│   │   └── galleryImages.js # Auto-imports images from asset folders (glob)
│   ├── App.jsx            # Routes + layout shell
│   ├── main.jsx           # App entry point
│   └── index.css          # Tailwind import, base styles, animations
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

## Routing

| Path | Component | Description |
| --- | --- | --- |
| `/` and `/items` | `ListOfItems` | Decoration showcase with search/filter |
| `/decordetails` | `DecorDetails` | Detail view (expects a `decoration` in router state) |
| `/gallery` | `Gallery` | Event category grid |
| `/gallery/:eventType` | `DetailedGallery` | Carousel gallery for an event type |
| `/contact` | `Contact` | Contact form and business info |

## Adding Gallery Images

Images are loaded automatically with Vite's `import.meta.glob` via `src/utils/galleryImages.js` — you no longer import each picture by hand.

To add photos:

1. Drop images into a folder under `src/assets/<FolderName>/` (or `src/Images/<FolderName>/`), named `pic1.jpeg`, `pic2.jpeg`, … (they're ordered naturally, so `pic2` comes before `pic10`). Supported extensions: `jpeg`, `jpg`, `png`, `webp`.
2. Read them anywhere with the helper:

```js
import { getGalleryImages, getCoverImage } from '../utils/galleryImages';

const photos = getGalleryImages('Birthday'); // ordered array of image URLs
const cover  = getCoverImage('Birthday');    // first image in the folder
```

3. To expose a new folder as a gallery route, add an entry to `eventConfig` in `DetailedGallery.jsx` mapping an `eventType` slug to the folder name and display copy. Missing/empty folders render a friendly empty state instead of crashing.

## Styling & Design System

- Global styles and custom `fade-in` / `slide-up` animations live in `src/index.css`.
- Primary palette: `#2b6777` (primary), `#52ab98` (accent), `#c8d8e4` (light).
- Focus states use a teal ring (`focus:ring-[#52ab98]/50`) for consistency and accessibility.

## Configuration

No environment variables are required to run the app locally. The contact form currently logs submissions to the console and shows a confirmation alert (no backend integration yet).

## Changelog

### 2026-07-18 (later)
- **Added** `src/utils/galleryImages.js` — automatically imports every image from asset sub-folders using `import.meta.glob`, naturally ordered by picture number.
- **Refactored** `DetailedGallery.jsx`, `Gallery.jsx`, and `DecorDetails.jsx` to use the new helper, removing ~140 manual per-image imports. New folders/photos now appear without adding imports.
- **Added** an empty state to `DetailedGallery` for folders with no images, and reset the carousel when the event changes.

### 2026-07-18
- **Fixed** a crash in the showcase filter caused by referencing a non‑existent `colors` field.
- **Added** a working search bar, tag‑based style filter, results count, and empty state to the decoration showcase (`ListOfItems`).
- **Cleaned up** `index.css`: removed Vite boilerplate/dark‑mode conflicts, added `fade-in`/`slide-up` animations, a `no-scrollbar` helper, and `prefers-reduced-motion` support.
- **Removed** the unused empty `App.css` and its import.
- **Improved** accessibility & design consistency across `DecorDetails`, `Gallery`, and `DetailedGallery`: teal accent colors, focus rings, aria labels, keyboard‑navigable gallery cards, correct image `alt` text, and lazy‑loaded images.
- **Rewrote** this README to document the actual project.
