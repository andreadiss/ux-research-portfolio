# UX Research Portfolio (Vite + React)

Production-ready starter for a UX research portfolio with a scalable folder layout and core sections for:

- research feed
- case studies
- filters by method
- quick poll block
- AI-like search experience (keyword/semantic starter)

## Tech

- React 18
- Vite 5
- ESLint 9

## Folder structure

```txt
public/
  images/
src/
  components/
  data/
  utils/
  App.jsx
  main.jsx
  styles.css
```


## Important

Do not serve `index.html` directly from a static file server in the project root. This app uses JSX modules that must be transformed by Vite.

Use one of these commands instead:

```bash
npm run dev
# or
npm run build && npm run preview
```

## Local development

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```
test deploy

## Next steps

1. Replace mock `src/data` with CMS or API data source.
2. Add React Router for dedicated case-study pages.
3. Add backend/vector search API for true AI search.
4. Expand poll to persist responses.
