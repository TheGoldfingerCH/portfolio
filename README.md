# Portfolio — Nicolas Geng

One-pager personnel multilingue (FR / EN / DE), construit avec **Astro 5**, **Tailwind v4**, **React** (île pour le chatbot) et **Node SSR**. Inclut un chatbot IA optionnel propulsé par **Claude (Anthropic)**.

## Stack

- **Astro 5** — rendu hybride, multilingue natif
- **Tailwind v4** — design system sobre, dark by default
- **React 19** — composant interactif (chatbot)
- **Anthropic SDK** — endpoint serveur `/api/chat`
- **Node 22** adapter pour SSR

## Démarrage local (sans Docker)

```bash
cp .env.example .env
npm install
npm run dev
```

Le site est servi sur http://localhost:4321 — FR à la racine, EN sous `/en`, DE sous `/de`.

## Démarrage avec Docker (dev, hot-reload)

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up
```

## Build de production + container

```bash
cp .env.example .env
docker compose up --build
```

## Activer le chatbot IA

Propulsé par **Google Gemini 2.5 Flash** (free tier : 10 req/min, 250 req/jour, largement suffisant pour un portfolio).

1. Récupère une clé API gratuite : https://aistudio.google.com/app/apikey
2. Dans `.env` :
   ```env
   CHATBOT_ENABLED=true
   GEMINI_API_KEY=AIza...
   ```
3. Redémarre le serveur : `docker compose -f docker-compose.dev.yml restart` (ou stop/start).

Le bouton « Discuter avec mon IA » apparaît en bas à droite. L'endpoint `/api/chat` est protégé par :
- Vérification du flag `CHATBOT_ENABLED`
- Rate limit en mémoire (10 requêtes / 60 s par IP)
- Validation et taille max des messages (2000 chars × 20 msgs max)
- System prompt avec garde-fous anti prompt-injection, généré dynamiquement depuis `src/data/`

Pour switcher de modèle (par ex. vers `gemini-2.5-pro` payant), édite `MODEL_ID` dans [src/pages/api/chat.ts](src/pages/api/chat.ts).

## Structure

```
src/
  components/         # Sections (Hero, About, Skills, Projects, Experience, Contact) + ChatBot
  data/               # Source de vérité : profile, skills, experiences, projects, education
  i18n/               # Locales (FR/EN/DE), traductions UI, helpers
  layouts/            # BaseLayout (SEO, meta, JSON-LD)
  lib/                # chatContext.ts — construit le system prompt RAG-lite
  pages/
    index.astro       # FR (locale par défaut)
    en/index.astro    # EN
    de/index.astro    # DE
    api/chat.ts       # Endpoint Anthropic
  styles/global.css   # Tokens + Tailwind
public/
  cv/                 # Déposer ici les PDFs (FR/EN/DE)
  images/             # Déposer ici nicolas.jpg (portrait)
```

## Personnaliser le contenu

- Mettre à jour **`src/data/experiences.ts`** pour ajouter / modifier un poste (FR/EN/DE).
- Ajouter un projet dans **`src/data/projects.ts`** dès qu'il est live.
- Adapter les libellés UI dans **`src/i18n/ui.ts`**.
- Le system prompt du chatbot est **généré automatiquement** depuis `src/data/*` via `src/lib/chatContext.ts` — pas besoin de le maintenir séparément.

## Déploiement (Kreativmedia / VPS)

Le projet produit une **app Node standalone** (`dist/server/entry.mjs`).

Option recommandée : déployer le container `portfolio-nicolas-geng:latest` derrière un reverse proxy (Nginx / Traefik) avec TLS.

```bash
# Sur le serveur (après ssh + copie du repo)
docker compose up -d --build
```

Variables d'environnement requises en prod :
- `SITE_URL` (ex. `https://nicolasgeng.ch`)
- `CHATBOT_ENABLED=true` (optionnel)
- `ANTHROPIC_API_KEY` (si chatbot)

## TODO avant mise en ligne

- [ ] Déposer le portrait `public/images/nicolas.jpg`
- [ ] Déposer les 3 PDFs du CV dans `public/cv/`
- [ ] Adapter `SITE_URL` dans `.env` au domaine final
- [ ] Optionnel : remplacer `og-image.svg` par une vraie image 1200×630 (PNG/JPG)
