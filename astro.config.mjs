import { defineConfig } from 'astro/config';
import lluviame from 'astro-theme-lluviame';

export default defineConfig({
  site: 'https://lluvia.me',
  integrations: [
    lluviame({
      title: 'Lluviame',
      description: 'It\'s always rainy ...',
      lang: 'zh-CN',
      ogImage: '/og-image.png',
      home: {
        headline: 'Amelia です',
        intro: 'Binary security beginner, traditional algorithm enthusiast, メランコリー·しょうじょ',
        links: [
          { text: 'GitHub', href: 'https://github.com/yuXI-fuwafuwa' },
        ],
      },
    }),
  ],
});;
