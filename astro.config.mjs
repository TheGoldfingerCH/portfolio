import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const SITE_URL = process.env.SITE_URL || 'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  integrations: [react(), sitemap()],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      en: 'fr',
      de: 'fr',
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
