import { defineConfig } from 'vitepress'
import {
  groupIconMdPlugin,
  groupIconVitePlugin
} from 'vitepress-plugin-group-icons'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RinUI Documentation",
  description: "RinUI development documentation - A Fluent Design-like UI library for Qt Quick (QML)",
  head: [
      ['link', { rel: 'icon', href: '/assets/favicon.ico' }]  // 添加网站图标
  ],

  // 国际化 / internationalization
  locales: {
    root: {
      label: "English",
      lang: "en",

      themeConfig: {
        // 导航
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide' },
        ],

        // sidebar
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'What is RinUI?', link: '/guide/' },
              { text: 'Getting Started', link: '/guide/getting-started' },
            ]
          }
        ]
      }
    },

    zh: {
      label: "简体中文",
      lang: "zh",
      // link: "/zh/",
      title: 'RinUI 开发文档',

      themeConfig: {
        // 导航
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide' },
        ],

        // 侧边栏
        sidebar: [
          {
            text: 'RinUI 简介',
            items: [
              { text: '何为 RinUI?', link: '/zh/guide/' },
              { text: '快速开始', link: '/zh/guide/getting-started' },
            ]
          }
        ],
        editLink: {
          pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
          text: '在 GitHub 上编辑此页面'
        },
    
        docFooter: {
          prev: '上一页',
          next: '下一页'
        },
    
        outline: {
          label: '页面导航'
        },
    
        lastUpdated: {
          text: '最后更新于'
        },
    
        notFound: {
          title: '页面未找到',
          quote:
            '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
          linkLabel: '前往首页',
          linkText: '带我回首页'
        },
    
        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        skipToContentLabel: '跳转到内容'
      }
    }
  },

  themeConfig: {
    logo: '/assets/favicon.ico',
    // https://vitepress.dev/reference/default-theme-config
    // nav: [
    //   { text: 'Home', link: '/' },
    //   { text: 'Examples', link: '/markdown-examples' }
    // ],
    //
    // sidebar: [
    //   {
    //     text: 'Introduction',
    //     items: [
    //       { text: 'What is RinUI?', link: '/introduction' }
    //     ]
    //   },
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/RinLit-233-shiroko/Rin-UI' }
    ],

    // 页脚
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 RinLit'
    },
  },

  markdown: {
    config(md) {
      md.use(groupIconMdPlugin)
    },
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          'python': 'vscode-icons:file-type-python',
          'qml': 'vscode-icons:file-type-qml',
          'py': 'vscode-icons:file-type-pip',
        }
      })
    ],
  }
})
