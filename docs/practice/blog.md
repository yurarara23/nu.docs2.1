# 記事投稿手順（環境構築編を終えた方向け）

>  **このページは「環境構築編」を完了していることを前提としています。まだの方は、先に環境構築編を終えてから読み進めてください。**

---

## 1. 作業ディレクトリの準備

`Desktop` または `user` 直下に `develop` フォルダを作成してください。

```bash
mkdir ~/Desktop/develop
cd ~/Desktop/develop
```

---

## 2. リポジトリのクローン

以下のリポジトリをクローンします：

```bash
git clone https://github.com/yurarara23/nu.meta
cd nu.meta
```

---

## 3. Visual Studio Code の起動

クローンしたプロジェクトを VSCode で開きます：

```bash
code .
```

---

## 4. 依存関係のインストール

以下のコマンドで必要なパッケージをインストールします：

```bash
npm install
```

---

## 5. ローカルサーバーの起動

開発用サーバーを起動します：

```bash
npm run dev
```

---

## 6. 記事の作成

`app/blog/` ディレクトリに記事ファイルを作成します。ファイル名は記事のタイトル名を `.md` 拡張子で保存してください。

>  **注意：`app/blog/` および `public/` ディレクトリ以外には触れないでください。誤って他のフォルダを変更すると、エラーの原因になります。**

---

## 7. メタデータと本文の記述

Markdown形式で記事本文とメタデータを記述してください。記事内で画像を使用したい場合は、以下のルールに従ってください：

- `public/` ディレクトリ内に、自分の名前のフォルダを作成  
  例：`public/yourname/`
- 使用する画像をその中に保存  
  例：`public/yourname/sample.png`
- 記事中での画像パス：`/yourname/sample.png`

---

## 8. 記事の確認とPull Request

ローカルサーバー上で表示を確認し、記事の内容が完成したら Git 上で Pull Request を作成してください。

> Visual Studio Code の GUI を使えば、Pull Request の作成も簡単に行えます。

---

何か不明点があれば、discordで相談してください。記事の投稿を楽しみにしています！
