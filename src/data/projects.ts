import type { Locale } from './experiences.js';

export type Project = {
  id: string;
  title: string;
  url?: string;
  repo?: string;
  status: 'live' | 'wip' | 'archived';
  tags: string[];
  summary: Record<Locale, string>;
};

export const projects: Project[] = [
  {
    id: 'ai-for-finance',
    title: 'AI for Finance',
    url: 'https://ai-for-finance-688958849481.europe-west1.run.app/docs',
    repo: 'https://github.com/TheGoldfingerCH/AI_for_Finance',
    status: 'live',
    tags: ['Python', 'FastAPI', 'Docker', 'GCP Cloud Run', 'Jupyter', 'ML'],
    summary: {
      fr: "Service de prédiction ML déployé sur Google Cloud Run : API FastAPI conteneurisée avec endpoint de prédiction, documentation Swagger interactive et structure projet reproductible (Dockerfile, Makefile, tests). Pensé comme socle réutilisable pour exposer un modèle ML en production.",
      en: 'ML prediction service deployed on Google Cloud Run: containerised FastAPI app with a prediction endpoint, interactive Swagger docs and a reproducible project structure (Dockerfile, Makefile, tests). Designed as a reusable backbone for exposing an ML model in production.',
      de: 'Auf Google Cloud Run bereitgestellter ML-Vorhersage-Service: containerisierte FastAPI-App mit Vorhersage-Endpoint, interaktiver Swagger-Dokumentation und reproduzierbarer Projektstruktur (Dockerfile, Makefile, Tests). Konzipiert als wiederverwendbares Rückgrat für die Produktion eines ML-Modells.',
    },
  },
  {
    id: 'my-swiss-career',
    title: 'My Swiss Career',
    url: 'https://my-swiss-career.ch',
    repo: 'https://github.com/TheGoldfingerCH',
    status: 'live',
    tags: ['LLM', 'Multi-agents', 'Python', 'Playwright', 'AI'],
    summary: {
      fr: "Système multi-agents IA qui automatise la recherche d'emploi : évaluation des offres sur plusieurs dimensions, génération de CV optimisés ATS et soumission des candidatures via Playwright.",
      en: 'Multi-agent AI system that automates the job search: evaluates job offers on multiple dimensions, generates ATS-optimised CVs and submits applications via Playwright.',
      de: 'Multi-Agenten-KI-System, das die Jobsuche automatisiert: Bewertung von Angeboten anhand mehrerer Dimensionen, Erstellung ATS-optimierter Lebensläufe und Einreichung von Bewerbungen via Playwright.',
    },
  },
  {
    id: 'mcp-imap',
    title: 'MCP IMAP',
    url: 'https://github.com/TheGoldfingerCH/mcp-imap',
    repo: 'https://github.com/TheGoldfingerCH/mcp-imap',
    status: 'live',
    tags: ['Python', 'MCP', 'IMAP', 'SMTP', 'Claude Desktop', 'Hermes'],
    summary: {
      fr: "Serveur MCP minimal pour lire et envoyer des emails via IMAP/SMTP — zéro dépendance externe (stdlib Python uniquement). Compatible avec Claude Desktop, Cursor, Hermes et tout client MCP. Fonctionne avec n'importe quel fournisseur mail (Infomaniak, Gmail, iCloud, Proton Bridge…).",
      en: 'Minimal MCP server for reading and sending emails via IMAP/SMTP — zero external dependencies (Python stdlib only). Compatible with Claude Desktop, Cursor, Hermes and any MCP client. Works with any mail provider (Infomaniak, Gmail, iCloud, Proton Bridge…).',
      de: 'Minimaler MCP-Server zum Lesen und Senden von E-Mails über IMAP/SMTP — ohne externe Abhängigkeiten (nur Python-Stdlib). Kompatibel mit Claude Desktop, Cursor, Hermes und jedem MCP-Client. Funktioniert mit jedem Mail-Anbieter (Infomaniak, Gmail, iCloud, Proton Bridge…).',
    },
  },
  {
    id: 'llm-code-bench',
    title: 'LLM Code Bench',
    url: 'https://github.com/TheGoldfingerCH/llm-code-bench',
    repo: 'https://github.com/TheGoldfingerCH/llm-code-bench',
    status: 'live',
    tags: ['Python', 'LLM', 'Benchmark', 'Plotly', 'CLI'],
    summary: {
      fr: "Outil de benchmark mesurant la capacité des LLMs à restituer du code précis dans de longs contextes : teste le rappel positionnel en demandant aux modèles de reproduire verbatim des fonctions JS/Python, avec scoring automatique ligne par ligne et dashboards comparatifs via Plotly.",
      en: "Benchmark tool measuring LLMs' ability to accurately recall specific code in long contexts: tests positional recall by asking models to reproduce JS/Python function definitions verbatim, with automated line-by-line scoring and comparative Plotly dashboards.",
      de: 'Benchmark-Tool zur Messung der Fähigkeit von LLMs, spezifischen Code in langen Kontexten präzise abzurufen: testet Positionsrückruf durch wörtliche Reproduktion von JS/Python-Funktionen, mit automatischem Zeilen-Scoring und vergleichenden Plotly-Dashboards.',
    },
  },
];

export const upcomingProjectsCount = 2;
