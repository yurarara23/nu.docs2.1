import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/nu.docs2.1/',
  title: "nu.docs2.1",
  description: "nu.docs is a documentation site",
  themeConfig: {

    sidebar: {
      // デフォルト
      '/': [
        {
          text: '目次',
          items: [
            { text: '環境構築編', link: '/setup' },
            { text: '実習編', link: '/practice' },
            { text: 'python編', link: '/python' },
            { text: 'next.js編', link: '/nodejs' },
            { text: 'VRC編', link: '/vrc' },
          ]
        }
      ],
      // setup専用サイドバー
      '/setup/': [
        {
          text: '環境構築の手順',
          items: [
            { text: 'git', link: '/setup/git' },
            { text: 'VSCode', link: '/setup/vscode' },
            { text: 'Node.js', link: '/setup/nodejs' },
            { text: 'cmd', link: '/setup/cmd' },
          ]
        }
      ],
      '/nu.docs/': [
        {
          text: 'nu.docs',
          items: [
            { text: 'docs作成法', link: '/nu.docs/docs' },
            { text: 'サイドバー設定', link: '/nu.docs/sidebar' },
            { text: '.mdの書き方', link: '/nu.docs/markdown-examples' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
