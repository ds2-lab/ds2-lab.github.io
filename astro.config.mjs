import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://ds2-lab.github.io',
  integrations: [mdx(), sitemap()],
  output: 'static',
  // Old URL from before the Research tab was renamed to Funding.
  redirects: { '/research': '/funding' },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
