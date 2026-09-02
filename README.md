# MIT • MISA - Université d'Antananarivo

Modern static website scaffold for **Mention Informatique et Technologie (MIT) / Mathématiques Informatique et Statistique Appliquées (MISA)** - University of Antananarivo (BP 906 Ankatso).

> Mimics the architecture of http://mit.univ-antananarivo.mg (and https://mit-ua.mg) - but with a fully improved design system.

## Stack
- React 19 + Vite 6
- Tailwind CSS v4 (@tailwindcss/vite)
- React Router DOM v7 (SPA, static)
- lucide-react icons

## Pages / Architecture
- `/` - Accueil (hero, stats, histoire MISA, vision/mission, 6 objectifs, partenaires)
- `/formation/licence` - Licence L1/L2 (Informatique et Technologie) + L3 (MISA) with UE tabs
- `/formation/master` - Master M1/M2 × 2 parcours (INT & MISA)
- `/formation/arborescence` - Interactive LMD diagram (BACC → L1 → L2 → L3 → Master bifurqué → Doctorat/Emploi)
- `/admission` - Conditions d’admission (classement, dossier, dépôt, étapes)
- `/inscription` - Pré-inscription form (client-side demo)

Legacy query-param routes (`index.php?page=...`) redirect to new paths.

## Design Improvements vs Original
- **Design system**: navy + rose/cyan gradients, 24px radii, glass sticky header, generous whitespace
- **Information hierarchy**: breadcrumb pills, tab switches, card grids instead of plain Bootstrap lists
- **Responsive bento** objectives, stats bar, timeline, partner grid with hover states
- **Arborescence** rebuilt as CSS diagram (not single PNG)
- **Admission** as timeline + sidebar with clear CTA
- **Accessibility**: focus rings, semantic headings, mobile hamburger, keyboard-friendly tabs

## Run
```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production → dist/
npm run preview
```

Built from live crawl of mit.univ-antananarivo.mg (Sept 2026). Content preserved: UE lists, responsables, partenaires, contacts.
