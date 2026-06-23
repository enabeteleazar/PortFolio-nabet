# Portfolio Eléazar Nabet

Portfolio professionnel développé avec React, TypeScript, Vite et Tailwind CSS.

Le site présente Eléazar Nabet comme développeur Full Stack, créateur de NéronOS et profil orienté applications web modernes, agents IA, automatisation, Linux, auto-hébergement et architecture logicielle.

## Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React
- Framer Motion
- Zod
- Vitest
- MDX

## Contenu mis en avant

- NéronOS : assistant personnel intelligent local-first, agents, runtime, Goal Engine, LLM et interfaces.
- Projets IA : `neronOS`, `neron_llm`, `neron_vocal`, `neron_doctor`, `neronHUB`.
- Applications web : Orane Coaching, Patiss-Orane, Lowly.eu et projets historiques.
- Compétences vérifiées via les dépôts publics GitHub : React, TypeScript, Next.js, Vite, Tailwind, Python, FastAPI, Node.js, Express, SQLite, PostgreSQL, Ollama, Linux, systemd, Docker, Tailscale et Vercel.

## Installation

```bash
npm install
```

## Développement

```bash
npm run dev
```

## Build production

```bash
npm run build
```

## Prévisualisation du build

```bash
npm run preview
```

## Déploiement

Le projet est compatible Vercel. La commande de build est `npm run build` et le dossier de sortie est `dist`.

## Configuration du formulaire

La fonction Vercel `/api/contact` utilise l'API Resend. Configurer :

```bash
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_EMAIL=contact@portfolio.fr.nf
```

## Notes

- Le PHP, jQuery, Bootstrap local et les anciens fichiers SCSS/CSS ont été supprimés.
- Le formulaire utilise une fonction Vercel et conserve le lien email comme solution de repli.
- Le CV téléchargeable est fourni au format Markdown dans `public/cv-eleazar-nabet.md`.
- Les compétences affichées sont limitées aux informations présentes dans le portfolio et dans les dépôts publics GitHub analysés.
