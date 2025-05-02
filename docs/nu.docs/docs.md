
# VitePress 設定手順

## 1. リポジトリのクローン

最初にリポジトリをクローンします。以下のコマンドを実行して、最新のコードを取得します。

```bash
git clone https://github.com/yurarara23/nu.docs2.1
```

インストールしたいディレクトリにクローンしてください。  
インストール後時間がたっている場合は `git pull` を実行して最新のコードをダウンロードしてください。(VSCode上のGUIでも可)

```bash
git pull
```

## 2. VSCodeでディレクトリを開く

クローンしたディレクトリをVSCodeで開きます。ターミナルで以下のコマンドを実行してください：

```bash
code .
```

これでVSCodeが開きます。

##　ローカルサーバー立ち上げ

ターミナル内で

```bash
npm install
```
でパッケージのインストール後

```bash
npm run docs:dev
```

でローカルサーバーが立ち上がります。（リアルタイムで変更が反映されるのが見れるので開発に便利）


## 3. `index.md` に内容を追加

`docs` フォルダ内にある `index.md` ファイルに、新しいリンクを追加します。以下のように追加してください：

```yaml
- title: VRC編 (Unity)
  details: Unity, VCC
  link: /vcc
```

- `title`: リンクのタイトル（表示される文字列）
- `details`: リンクに関する説明
- `link`: 実際のリンク先（ページへのパス）

## 4. リンク先のファイル作成

`link` で指定したもの（ここでは `/vcc`）に対応するフォルダを作成します。  
`docs` フォルダ内に新規で `vcc` というフォルダを作成してください。


## 5. `index.md` の追加

新しく作成したフォルダ（`vcc`）内に、index.md（表紙）を置きます。index内にはまた以下のように書きます：

```yaml
layout: home

hero:
  name: "vcc編"

features:
- title: vccをインストールしよう
  details: VCCのインストール
  link: /vccInstall
```

これにより、`index.md` からリンクが正常に機能し、同じディレクトリ内に作成したvccInstall.mdに飛ぶことができます。

## 6. 他のファイルを参考にする

もし書き方がわからない場合は、他の `index.md` や フォルダを参考にしてください。


