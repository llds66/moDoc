import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "mythicOps_doc",
  description: "mythicOps document",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'UI', link: '/markdown-examples' },
      { text: '前端', link: '/markdown-examples' },
      { text: '后端', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lldscc/MythicOps' },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
})
