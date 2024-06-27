import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MythicOpsDoc",
  description: "mythicOps document",
  head: [['link', { rel: 'icon', href: '../ico.svg' }]],
  themeConfig: {
    logo: '../ico.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '项目介绍', link: '/overview' },
      {
        text: '项目设计',
        items: [
          { text: 'UI原型', link: '/ui' },
          { text: '前端', link: '/front-end' },
          { text: '后端', link: '/rear-end' },
        ]
      }
    ],

    sidebar: [
      {
        text: 'MythicOps',
        items: [
          { text: '项目介绍', link: '/overview' },
          { text: 'UI 原型', link: '/ui' },
          { text: '前端', link: '/front-end' },
          { text: '后端', link: '/rear-end' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lldscc/MythicOps' },
    ]
  }
})
