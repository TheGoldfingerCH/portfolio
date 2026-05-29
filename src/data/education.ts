import type { Locale } from './experiences.js';

export type Credential = {
  id: string;
  title: Record<Locale, string>;
  institution: string;
  /** Used to build the Google favicon URL for the institution logo. */
  domain?: string;
  /** Local logo URL (overrides the Google favicon if set). */
  logoSrc?: string;
  period: string;
  note?: Record<Locale, string>;
  verifyUrl?: string;
};

// Long-form qualifications (diplomas, federal certificates, bootcamps).
export const diplomas: Credential[] = [
  {
    id: 'wagon',
    title: {
      fr: 'Bootcamp Data Science & IA',
      en: 'Data Science & AI Bootcamp',
      de: 'Bootcamp Data Science & KI',
    },
    institution: 'Le Wagon',
    domain: 'lewagon.com',
    period: '2025 – 2026',
    note: {
      fr: 'Python, ML, deep learning, IA appliquée en entreprise.',
      en: 'Python, ML, deep learning, applied AI in enterprise.',
      de: 'Python, ML, Deep Learning, angewandte KI im Unternehmen.',
    },
  },
  {
    id: 'sawi-marketing',
    title: {
      fr: 'Spécialiste Marketing',
      en: 'Marketing Specialist',
      de: 'Marketing-Spezialist',
    },
    institution: 'SAWI',
    domain: 'sawi.ch',
    logoSrc: '/companies/sawi.png',
    period: '2016 – 2017',
  },
  {
    id: 'cfc',
    title: {
      fr: 'CFC Médiamaticien',
      en: 'Federal VET — Mediamatician',
      de: 'EFZ Mediamatiker',
    },
    institution: 'CPNV / Eco-logis Sàrl',
    domain: 'cpnv.ch',
    period: '2007 – 2012',
  },
];

// Shorter certifications, courses and credentials.
export const certifications: Credential[] = [
  {
    id: 'claude-code-101',
    title: { fr: 'Claude Code 101', en: 'Claude Code 101', de: 'Claude Code 101' },
    institution: 'Anthropic Education',
    domain: 'anthropic.com',
    period: '2026',
    verifyUrl: 'https://verify.skilljar.com/c/hh6y3derud4z',
  },
  {
    id: 'claude-101',
    title: { fr: 'Claude 101', en: 'Claude 101', de: 'Claude 101' },
    institution: 'Anthropic Education',
    domain: 'anthropic.com',
    period: '2026',
    verifyUrl: 'https://verify.skilljar.com/c/49egzcg24ra2',
  },
  {
    id: 'google-ads',
    title: {
      fr: 'Google Ads Spécialiste',
      en: 'Google Ads Specialist',
      de: 'Google Ads Spezialist',
    },
    institution: 'Google Ads Academy',
    domain: 'google.com',
    period: '2018',
  },
  {
    id: 'markom',
    title: { fr: 'MarKom', en: 'MarKom', de: 'MarKom' },
    institution: 'SAWI',
    domain: 'sawi.ch',
    logoSrc: '/companies/sawi.png',
    period: '2013 – 2014',
  },
  {
    id: 'asfc',
    title: {
      fr: "Gestion du temps d'une équipe",
      en: 'Team time management',
      de: 'Zeitmanagement im Team',
    },
    institution: 'ASFC',
    domain: 'asfc.ch',
    period: '2013',
  },
];

// Legacy named export kept for backwards compatibility with the chatbot context builder.
export const education = [...diplomas, ...certifications];
