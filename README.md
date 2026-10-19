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

Open **`http://127.0.0.1:5173/`** in Chrome or Edge (Simple Browser in the IDE sometimes cannot reach localhost).

After `npm run build`, deploy with `npm run deploy` for GitHub Pages at  
`https://balinteszter-dev.github.io/balint-ezster-s-portfolio/`

## Build for production

```bash
npm run build
npm run preview
```

Static files are output to `dist/` — suitable for GitHub Pages or any static host.

## Customize

All copy, skills, jobs, and projects live in **`src/data/content.ts`**. Update project titles, links, and descriptions there to match your real repositories.
