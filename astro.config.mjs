import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://machinedi.github.io',
  base: '/lab',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/notes') && !page.includes('/stack') && !page.includes('/projects'),
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'min-light',
    },
  },
});
