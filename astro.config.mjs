import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";

export default defineConfig({

  site: 'https://szarkiewicz.com',
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      nesting: true,
    })
  ]
});