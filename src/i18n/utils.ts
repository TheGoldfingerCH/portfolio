import { defaultLocale, locales, ui, type Locale } from './ui';

export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  if (first && (locales as readonly string[]).includes(first)) {
    return first as Locale;
  }
  return defaultLocale;
}

export function useTranslations(locale: Locale) {
  return ui[locale];
}

export function localizedPath(locale: Locale, path = '/'): string {
  const normalized = path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized;
  }
  return `/${locale}${normalized === '/' ? '' : normalized}`;
}

export function pathWithoutLocale(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0 && (locales as readonly string[]).includes(segments[0])) {
    segments.shift();
  }
  const joined = segments.join('/');
  return joined ? `/${joined}` : '/';
}
