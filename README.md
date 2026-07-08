# kavleen.in

Claude-style chat portfolio. React + Vite, no backend — answers are keyword-routed resume sections styled like Claude responses.

## Dev

```bash
npm install
npm run dev        # http://localhost:3000
```

## Edit content

Everything lives in `src/data/content.js` — profile, experience, projects, skills, suggestions, and the intro line for each answer. The UI never needs touching for content changes.

## Deploy

`npm run build` produces `dist/`. The domain (kavleen.in) currently points at GitHub Pages (`kavleeeen.github.io`), so the simplest path is deploying `dist/` there via the included GitHub Actions workflow — see `.github/workflows/deploy.yml`.
