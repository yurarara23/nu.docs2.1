# サイドバー作成法

VitePressでサイドバーを作成する方法について説明します。

## 1. サイドバーの設定ファイルを開く

`docs/.vitepress/config.mts` ファイルを開いて、サイドバーの設定を追加します。

## 2. サイドバー設定の例

以下のように、サイドバーに追加したいリンクを設定します。

```javascript
{
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
        { text: 'git', link: '/setup/git' },
        { text: 'VSCode', link: '/setup/vscode' },
        { text: 'Node.js', link: '/setup/nodejs' },
        { text: 'cmd', link: '/setup/cmd' },
      ]
    }
  ]
}
```