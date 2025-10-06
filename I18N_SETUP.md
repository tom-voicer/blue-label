# Internationalization (i18n) Setup

This project has been configured with internationalization support using `next-intl`.

## Supported Languages

- **English (en)** - Default/Fallback language
- **Hebrew (he)** - RTL (Right-to-Left) support enabled

## Directory Structure

```
├── app/
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Locale-specific layout
│   │   └── page.tsx       # Locale-specific pages
│   ├── layout.tsx         # Root layout
│   └── not-found.tsx      # 404 page
├── components/
│   └── LanguageSwitcher.tsx  # Language switcher component
├── i18n/
│   ├── request.ts         # i18n request configuration
│   └── routing.ts         # Routing configuration & navigation helpers
├── messages/
│   ├── en.json           # English translations
│   └── he.json           # Hebrew translations
└── middleware.ts         # Locale detection middleware
```

## Usage

### Accessing Translations in Server Components

```tsx
import { useTranslations } from 'next-intl';

export default function MyComponent() {
  const t = useTranslations('namespace');
  
  return <h1>{t('key')}</h1>;
}
```

### Accessing Translations in Client Components

```tsx
'use client';

import { useTranslations } from 'next-intl';

export default function MyClientComponent() {
  const t = useTranslations('namespace');
  
  return <h1>{t('key')}</h1>;
}
```

### Navigation with Locales

Use the locale-aware navigation helpers from `@/i18n/routing`:

```tsx
import { Link, useRouter, usePathname } from '@/i18n/routing';

// Link component
<Link href="/about">About</Link>

// Router
const router = useRouter();
router.push('/about');

// Pathname
const pathname = usePathname();
```

### Adding New Translations

1. Add your translation keys to both language files:
   - `messages/en.json`
   - `messages/he.json`

2. Use the translations in your components:
   ```tsx
   const t = useTranslations('your-namespace');
   t('your-key');
   ```

### Adding New Languages

1. Add the locale code to `i18n/routing.ts`:
   ```ts
   locales: ['en', 'he', 'es'], // Added Spanish
   ```

2. Create a new translation file:
   - `messages/es.json`

3. Update the middleware matcher in `middleware.ts`:
   ```ts
   matcher: ['/', '/(he|en|es)/:path*'],
   ```

4. Update the LanguageSwitcher component to include the new language

## Features

- ✅ Automatic locale detection from URL
- ✅ Fallback to English for missing translations
- ✅ RTL support for Hebrew
- ✅ Static generation for all locales
- ✅ Type-safe translations
- ✅ Language switcher component
- ✅ Locale-aware navigation helpers

## URLs

The application automatically handles locale-prefixed URLs:

- `/en` - English version
- `/he` - Hebrew version
- `/` - Redirects to default locale (English)

All routes are automatically locale-aware, so `/en/about` and `/he/about` will work as expected.
