# Portfolio — Nicolas Geng

One-pager personnel multilingue (FR / EN / DE), construit avec **Astro 5** + **Tailwind v4** + une île React pour le chatbot **Google Gemini 2.5 Flash**.

## Architecture

- **Astro static** (`output: 'static'`) — pages préren­dues servies par n'importe quel hébergeur de fichiers statiques (ici **Plesk / KreativMedia** sur `allrun.ch`).
- **API chatbot sur Vercel** — la fonction `api/chat.ts` est déployée comme function serverless gratuite (free tier Gemini : 10 RPM, 250 RPD). Le front fetche cette URL via la variable `PUBLIC_CHAT_API_URL`.
- **GitHub Action** — à chaque push sur `main`, le site est construit et publié sur la branche `deploy` que Plesk pulle.

## Stack

- Astro 5, Tailwind v4 (`@tailwindcss/vite`)
- React 19 (île client pour le chatbot uniquement)
- `@google/genai` (SDK Gemini officiel)
- `@vercel/node` (typings pour la fonction Vercel)

## Démarrage local (Docker, recommandé)

```bash
cp .env.example .env
docker compose -f docker-compose.dev.yml up
```

Site servi sur http://localhost:4321 — FR à la racine, EN sous `/en`, DE sous `/de`.

> Le chatbot n'apparaît que si `PUBLIC_CHAT_API_URL` est défini dans `.env`. Une fois l'API déployée sur Vercel (voir plus bas), mets l'URL dedans et le bouton apparaît automatiquement.

## Démarrage local (sans Docker)

```bash
cp .env.example .env
npm install
npm run dev
```

## Build de production

```bash
npm run build      # → ./dist (HTML + assets)
npm run preview    # → vérifier le build localement
```

## Déploiement

### A. Site statique → Plesk (allrun.ch)

1. Plesk → **Sites & Domaines → allrun.ch → Git**
2. **Dépôt distant** : URL HTTPS du repo GitHub (`https://github.com/TheGoldfingerCH/portfolio.git`)
3. **Branche** : `deploy` (créée automatiquement par la GitHub Action à chaque build)
4. **Chemin serveur** : `/httpdocs`
5. **Mode** : Automatique
6. Pas d'actions de déploiement supplémentaires nécessaires (le build est déjà fait dans la branche `deploy`)

À chaque push sur `main` :
- GitHub Action build → publie sur la branche `deploy`
- Plesk détecte le push → pulle la branche `deploy` → site mis à jour

### B. Endpoint chatbot → Vercel

1. Crée un compte gratuit sur https://vercel.com
2. **Add New Project → Import** le repo GitHub `portfolio`
3. **Framework Preset** : Other
4. **Build & Output Settings** : laisser par défaut (le `vercel.json` du repo override)
5. **Environment Variables** :
   - `GEMINI_API_KEY` = ta clé Gemini (https://aistudio.google.com/app/apikey)
   - `ALLOWED_ORIGINS` = `https://allrun.ch,https://www.allrun.ch`
6. **Deploy**

Vercel donne une URL du type `https://allrun-chat-xxx.vercel.app`. Le endpoint est alors `https://allrun-chat-xxx.vercel.app/api/chat`.

### C. Connecter les deux

Une fois l'URL Vercel obtenue :

1. Dans **GitHub → Settings → Secrets and variables → Actions → Variables**, ajoute :
   - `PUBLIC_CHAT_API_URL` = `https://allrun-chat-xxx.vercel.app/api/chat`
   - `SITE_URL` = `https://allrun.ch`
2. Push (ou re-run l'action) → la prochaine build inclura l'URL → le chatbot apparaît sur le site Plesk.

Pour tester le chatbot en local, mets aussi `PUBLIC_CHAT_API_URL` dans `.env` local.

## Structure

```
src/
  components/         # Sections (Hero, About, Skills, …) + ChatBot
  data/               # Source de vérité : profile, skills, experiences, projects, education
  i18n/               # Locales (FR/EN/DE), traductions UI, helpers
  layouts/            # BaseLayout (SEO, meta, JSON-LD)
  lib/                # chatContext.ts — construit le system prompt
  pages/
    index.astro       # FR (locale par défaut)
    en/index.astro    # EN
    de/index.astro    # DE
  styles/global.css   # Tokens + Tailwind
api/
  chat.ts             # Vercel function — endpoint Gemini
public/
  cv/                 # Déposer les PDFs (FR/EN/DE)
  images/             # nicolas.jpg
  companies/          # logos institutionnels (sawi.png)
.github/workflows/
  deploy-plesk.yml    # Build static + push to "deploy" branch
vercel.json           # Config Vercel (function uniquement, pas de build)
```

## Personnaliser le contenu

- **Expériences** : `src/data/experiences.ts`
- **Études + certifications** : `src/data/education.ts`
- **Projets** : `src/data/projects.ts`
- **Compétences + outils** : `src/data/skills.ts`
- **Libellés UI** : `src/i18n/ui.ts`

Le system prompt du chatbot est **généré automatiquement** depuis `src/data/*` via `src/lib/chatContext.ts` — pas besoin de le maintenir séparément.

<!-- Vercel deployment trigger: 2026-05-29T20:24:23Z -->
