# nu.docs2!

##デプロイのときのエラーと対処履歴
- vitepress: not found
→ vitepress 未インストールが原因 → npm install --save-dev vitepress 実行

- npm ci が失敗
→ package-lock.json が未生成 → npm install して lock ファイルを作成・コミット
