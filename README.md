# Bálint Eszter — Portfolio

React + TypeScript single-page portfolio built from the resume in this folder.

## Sections

- **About me** — Professional summary, education, languages  
- **Skills** — Technical skills grouped by category  
- **My projects** — Showcase cards (edit in `src/data/content.ts`)  
- **Experiences** — Career timeline  
- **Contact me** — Email, phone, LinkedIn, GitHub  

## Run locally

Requires [Node.js](https://nodejs.org/) 18+.

```bash
cd portfolio
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

Static files are output to `dist/` — suitable for GitHub Pages or any static host.

## Customize

All copy, skills, jobs, and projects live in **`src/data/content.ts`**. Update project titles, links, and descriptions there to match your real repositories.
