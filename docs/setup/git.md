
# Git & GitHub 基礎まとめ

## Gitとは？
- バージョン管理システム
- ソースコードなどの変更履歴を記録・追跡できる
- 1人でもチームでも使える

## GitHubとは？
- Gitのリモートリポジトリ（共有サーバー）を提供するサービス
- オンライン上でコードを共有・公開・管理できる
- Gitのデータをクラウドで扱えるようにしたもの


## 用語解説

| 用語 | 意味 |
|------|------|
| リポジトリ（Repository） | プロジェクトのフォルダ。Gitで管理される単位。 |
| ローカルリポジトリ | 自分のPC上のリポジトリ。 |
| リモートリポジトリ | GitHubなどサーバー上のリポジトリ。 |
| clone（クローン） | リモートリポジトリを自分のPCにコピーすること。 |
| commit（コミット） | 変更をローカルリポジトリに保存する操作。 |
| push（プッシュ） | ローカルの変更をリモートに送信する操作。 |
| pull（プル） | リモートの変更をローカルに取り込む操作。 |
| branch（ブランチ） | 開発の枝分かれ。通常は `main` ブランチが存在する。 |
| merge（マージ） | 他のブランチの変更を取り込むこと。 |


## Gitの導入（Windows/Mac）

### 1. Gitのインストール
- https://git-scm.com/ からダウンロード・インストール

::: info
- インストーラの選択肢はすべてnextでいいです。
- 一応windowsの設定→ストレージでアンインストールしたらまた1からインストールできます。
:::

### 2. Gitの初期設定（ターミナルで）

```bash
git config --global user.name "あなたの名前"
git config --global user.email "あなたのメールアドレス"
git config --global init.defaultBranch main

```


##  GitHubの準備

1. GitHub（https://github.com）に登録

::: info
usernameとemailはgitの初期設定の際に使ったものでOK!
:::

