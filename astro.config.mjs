import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://machinedi.github.io',
  base: '/lab',
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'min-light',
    },
  },
});
