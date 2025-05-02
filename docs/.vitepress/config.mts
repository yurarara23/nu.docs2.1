import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/nu.docs2.1/',
  title: "nu.docs2.1",

  head: [
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // サイトのファビコン（ブラウザのタブに表示される小さなアイコン）
  
    ["meta", { property: "og:image", content: "/icon.png" }],
    // SNS（特にFacebookなど）で共有されたときに表示される画像
  
    ["meta", { property: "og:site_name", content: "nu.docs2.1" }],
    // SNS上で表示されるサイト名（"your site name" の部分を実際のサイト名に変更する）
  
    ["meta", { property: "twitter:card", content: "summary" }],
    // Twitterカードの種類。ここでは「summary」（簡易カード）を指定
  
  ],
  
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
      { icon: 'github', link: 'https://github.com/yurarara23/nu.docs2.1' },
      { icon: 'discord', link: '' },
    ]
  }
})
