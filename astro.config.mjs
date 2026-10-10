import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://edirodin.me',
  base: '/',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/notes') &&
        !page.includes('/stack') &&
        !page.includes('/projects') &&
        !page.includes('/system-model'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'min-light',
    },
  },
});
