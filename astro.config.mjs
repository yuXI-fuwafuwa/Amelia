import { defineConfig } from 'astro/config';
import lluviame from 'astro-theme-lluviame';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    lluviame({
      title: '你的站点名',
      description: '你的站点描述',
      lang: 'zh-CN',
      ogImage: '/og-image.png',
      home: {
        headline: '你好，我是 ...',
        intro: '这里写首页简介。',
        links: [
          { text: 'GitHub', href: 'https://github.com/your-name' },
          { text: 'X', href: 'https://x.com/your-name' },
        ],
      },
    }),
  ],
});;
