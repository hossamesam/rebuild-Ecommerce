import { Pathnames } from "next-intl/routing";

export const locales = ['en', 'ar'] as const;
 
// The `pathnames` object holds pairs of internal and
// external paths. Based on the locale, the external
// paths are rewritten to the shared, internal ones.
export const pathnames = {
  // If all locales use the same pathname, a single
  // external path can be used for all locales
  '/': '/',
  '/blog': '/blog',
 
  // If locales use different paths, you can
  // specify each external path per locale
  '/about': {
    en: '/',
    ar: '/ueber-uns'
  },
 
  // Dynamic params are supported via square brackets
  '/news/[articleSlug]-[articleId]': {
    en: '/news/[articleSlug]-[articleId]',
    ar: '/neuigkeiten/[articleSlug]-[articleId]'
  },
 
  // Static pathnames that overlap with dynamic segments
  // will be prioritized over the dynamic segment
  '/news/just-in': {
    en: '/news/just-in',
    ar: '/neuigkeiten/aktuell'
  },
 
  // Also (optional) catch-all segments are supported
  '/categories/[...slug]': {
    en: '/categories/[...slug]',
    ar: '/categories/[...slug]'
  }
} satisfies Pathnames<typeof locales>;