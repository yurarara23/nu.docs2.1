# Python & コマンド入門

目次

- Python のインストールと確認方法
- コマンドシェル（PowerShell）の基本操作
- VSCode の使い方と Python 開発準備
- 実際に Python コードを書いて動かしてみよう
- よく使う小技やTips

---

## 1. Pythonのインストール方法

まずは Python をインストールしましょう。

- 公式サイト：[https://www.python.org/downloads/](https://www.python.org/downloads/)
- インストーラーを実行する時は、**「Add Python to PATH」にチェックを入れる！**

### インストール確認

PowerShell やターミナルで以下を実行：

```powershell
py --version
```

または：

```powershell
python --version
```

> バージョン番号が出ればOK（例：`Python 3.12.2`）

---

## 2. コマンドシェル（PowerShell）の基本

Windowsで「PowerShell」または「ターミナル」を使って操作します。

### よく使うコマンド

| コマンド        | 説明                           |
|---------------|--------------------------------|
| `cd`          | ディレクトリ移動（`Tab`で補完）|
| `cd ..`       | 一つ上のディレクトリへ戻る     |
| ↑ / ↓         | 過去のコマンド履歴をたどる     |
| `dir`         | 現在のフォルダの中身を見る     |

```powershell
cd Desktop\my_python_project
```

---

## 3. VSCodeの使い方（Python向け）

1. [VSCode](https://code.visualstudio.com/) をインストール  
2. VSCode 起動後、「拡張機能（Extensions）」で `Python` をインストール  
3. `.py` ファイルを作成して Python コードを記述  
4. `Ctrl + Shift + \`` でターミナルを開き、実行できる

```py
# test.py
print("Hello, Python!")
```

ターミナルで：

```bash
python test.py
```

または、エディタ内で右クリック → **Python ファイルをターミナルで実行**

---

## 4. Pythonコードを動かしてみよう

### Hello World

```py
print("Hello, World!")
```

### 入力を使ってみる

```py
a = float(input("b?: "))
print("入力された値：", a)
```

> 💡 `float()` → 実数型（小数）に変換  
> 💡 `int()` → 整数型に変換

---

## 5. 小技＆よく使うTips

- `cd` + `Tab`：パスの自動補完が便利  
- ↑ / ↓：入力履歴をさかのぼって再実行できる  
- `float(input())`：入力を実数に変換する  
- `a = float(input())` は `print()` ではなく `input()` に使う！

```py
a = float(input("実数を入力してください: "))
```

---

## 📝 演習課題（やってみよう）

1. 好きな食べ物を入力して表示する

```py
food = input("好きな食べ物は？: ")
print("あなたの好きな食べ物は", food, "ですね！")
```

2. 2つの数値を入力して合計を出す

```py
x = float(input("1つ目の数値: "))
y = float(input("2つ目の数値: "))
print("合計は:", x + y)
```

3. 名前と年齢を入力し、年齢に10を足して出力

```py
name = input("名前は？: ")
age = int(input("年齢は？: "))
print(name, "さんは10年後、", age + 10, "歳です！")
```

---

## 🔚 おつかれさま！

これでPythonの基本操作と環境構築、簡単なコードの実行まで学べました！  
次は条件分岐・繰り返しなどを覚えていくとさらに面白くなります。

