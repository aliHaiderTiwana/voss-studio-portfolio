# Voss Studio — Project Overview

## What this project is

A portfolio website for a solo furniture maker. It's a single-page-application
(SPA) with four pages — Home, Work, About, Contact — built to showcase
finished pieces, explain the shop's process, and let visitors send a
commission inquiry through a form.

It's built as a **starter/template**: the content (names, projects, copy) is
placeholder text for a fictional studio, but the structure, styling system,
and code are production-ready. Swap in real photos and copy and it's
deployable as-is.

## Technologies used, and why each one is there

| Technology | Role | Why this one |
|---|---|---|
| **React 18** | UI library — builds the page out of reusable components | Industry-standard, huge ecosystem, component model fits a multi-page site well |
| **Vite** | Build tool / dev server | Much faster than older tools (Create React App); instantly reflects code changes in the browser during development, bundles everything efficiently for production |
| **React Router v6** | Client-side routing | Lets the site feel like separate pages (Home/Work/About/Contact) without full page reloads — one HTML file, JS swaps content in and out |
| **CSS Modules** | Styling | Each component gets its own scoped CSS file (e.g. `Nav.module.css`) so styles never leak between components or clash — no need for a heavier library like styled-components |
| **Plain JavaScript (JSX)** | Logic | No TypeScript in this starter, to keep things approachable — the code is straightforward enough that adding TypeScript later is a small lift if you want type safety |

Nothing else is required to run it — no backend, no database, no external
API. It's a fully static site once built.

## How the pieces fit together

```
Browser loads index.html
        │
        ▼
index.html loads src/main.jsx (the one script tag)
        │
        ▼
main.jsx renders <App /> inside <BrowserRouter>
        │
        ▼
App.jsx defines the routes (which page component shows for which URL)
        │
        ▼
Depending on the URL, React Router shows Home.jsx, Work.jsx, About.jsx,
or Contact.jsx inside the shared <Nav> and <Footer>
```

### The component tree

- **`main.jsx`** — the true entry point. Wraps everything in `<BrowserRouter>`
  so the app can read and change the URL without reloading the page.
- **`App.jsx`** — the shell. Always renders `<Nav>` at the top and `<Footer>`
  at the bottom; the middle (`<main>`) changes based on the current route.
- **Pages** (`src/pages/`) — one file per URL. Each page is just a React
  component that arranges smaller components and text.
- **Components** (`src/components/`) — reusable building blocks used across
  pages:
  - `Nav.jsx` — the top navigation bar; tracks its own open/closed state for
    the mobile menu using React's `useState`.
  - `Footer.jsx` — static bottom bar with contact links.
  - `ProjectCard.jsx` — one gallery tile (photo, title, material, blurb).
    Takes a `project` object as a prop and displays it — this is why adding
    a 5th project to `src/data/projects.js` automatically produces a 5th
    card, with zero extra code.
  - `ContactForm.jsx` — the inquiry form. Holds its own state for each field,
    validates on submit, and shows error messages or a confirmation message.
  - `GrainDivider.jsx` — a decorative SVG line between sections (the site's
    signature visual detail).
- **Data** (`src/data/projects.js`) — the actual content for the gallery,
  kept separate from the components that display it. This is a common
  pattern: components describe *how* to show something, data files describe
  *what* to show. To add a new piece to the gallery, you edit this file —
  you never need to touch `ProjectCard.jsx` or `Work.jsx`.
- **Styles** (`src/styles/tokens.css`) — one shared file of CSS variables
  (colors, fonts, spacing sizes). Every component's CSS module references
  these variables instead of hardcoding colors, so changing the palette
  means editing one file instead of dozens.

### How state and interactivity work

- **Nav mobile menu**: `useState` tracks `open`/`closed`; clicking the
  hamburger button flips it, and CSS shows/hides the menu accordingly.
- **Work page filter**: `useState` tracks the selected material (e.g.
  "Walnut"); the list of projects shown is recalculated (`.filter(...)`)
  every time that state changes — no page reload, just React re-rendering.
- **Contact form**: `useState` holds the values typed into each field.
  On submit, a `validate()` function checks the values and either shows
  error messages next to the invalid fields or swaps the form out for a
  "message sent" confirmation.

None of this uses a global state manager (like Redux) — the app is small
enough that each component managing its own local state is simpler and
sufficient.

### Routing in plain terms

`App.jsx` contains a table like this:

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/work" element={<Work />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

When the URL in the browser matches one of these paths, React Router
renders that component. The `*` catches anything that doesn't match
(a typo'd URL) and shows a 404 page instead of breaking.

### How images fit in

Photos live in `src/assets/projects/` and are **imported directly in
JavaScript** (`import photo from '../assets/projects/photo.jpg'`) rather
than referenced by URL string. Vite processes these imports at build
time — renaming the file to a hashed filename for cache-busting and
including only the images actually used in the final bundle.

### What happens when you run each command

| Command | What it does |
|---|---|
| `npm install` | Downloads React, Vite, React Router, etc. into `node_modules/` |
| `npm run dev` | Starts a local dev server with hot-reload — edit a file, see the change instantly in the browser, without losing form state |
| `npm run build` | Compiles everything into a `dist/` folder: minified JS/CSS, optimized images, one `index.html` — this is what you actually deploy |
| `npm run preview` | Serves the `dist/` folder locally, so you can sanity-check the production build before deploying it |

### Accessibility and responsiveness, briefly

- The layout uses CSS Grid that collapses from 4 columns → 2 → 1 as the
  screen narrows (see the `@media` queries in each page's CSS module).
- Keyboard users get visible focus outlines and a "skip to content" link.
- The contact form ties error messages to their inputs via `aria-describedby`
  so screen readers announce them.

## Where to go from here

- Replace the placeholder projects/copy in `src/data/projects.js` and the
  page files with real content.
- Add real photos (see the "adding images" guide already covered).
- Optionally connect the contact form to a real backend (Formspree,
  Netlify Forms, or a small serverless function) so submissions actually
  arrive somewhere.
- Deploy the `dist/` folder to Netlify, Vercel, or GitHub Pages.
