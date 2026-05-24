# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
npm run dev      # start dev server (Vite HMR)
npm run build    # type-check + build for production
npm run preview  # preview production build
npm run lint     # ESLint with React rules
```

## Architecture

React 19 SPA with TypeScript and Vite.

- `src/main.tsx` — app entry: mounts React into `#root`
- `src/App.tsx` — root component, composes all sections
- `src/index.css` — all styles (CSS custom properties, BEM-style classes)
- `src/components/` — one file per section: Navbar, Hero, About, Skills, Projects, Contact, Footer

## Key conventions

- Single CSS file (`src/index.css`) with CSS custom properties for theming
- No CSS-in-JS, no CSS modules — plain class names
- `tsconfig.app.json` sets `"jsx": "react-jsx"` (no React import needed in components)
- Node ≥ 18 required
