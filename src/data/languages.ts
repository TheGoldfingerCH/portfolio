import type { Locale } from './experiences.js';

export type LanguageLevel = {
  code: string;
  flag: string;
  name: Record<Locale, string>;
  level: Record<Locale, string>;
  badge: 'native' | 'fluent' | 'pro';
};

export const languages: LanguageLevel[] = [
  {
    code: 'fr',
    flag: '🇫🇷',
    name: { fr: 'Français', en: 'French', de: 'Französisch' },
    level: { fr: 'Langue maternelle', en: 'Native', de: 'Muttersprache' },
    badge: 'native',
  },
  {
    code: 'de',
    flag: '🇩🇪',
    name: { fr: 'Allemand', en: 'German', de: 'Deutsch' },
    level: { fr: 'C2 — Bilingue', en: 'C2 — Bilingual', de: 'C2 — Zweisprachig' },
    badge: 'fluent',
  },
  {
    code: 'en',
    flag: '🇬🇧',
    name: { fr: 'Anglais', en: 'English', de: 'Englisch' },
    level: { fr: 'B2 — Professionnel', en: 'B2 — Professional', de: 'B2 — Beruflich' },
    badge: 'pro',
  },
];
