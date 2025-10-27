# Terminal研修

## 1. タイトル

- Terminal研修：AI実務に近づくターミナル活用入門
- 日付：2025年10月26日
- 講師名／所属（必要に応じて差し替え）

## 2. 今日のゴール

- ターミナル操作への抵抗感をなくす
- CLIツールとAPIを扱う第一歩を踏み出す
- Cursor で実行されるコマンドがわかる。Cursorで実行させるコマンドの原理がわかる。

## 3. なぜターミナルを学ぶのか

- Claude CodeやCodexなどのターミナル型AIを使いこなすには、コマンドラインの基本理解が不可欠。
- Cursor上で実行されるコマンドや仕組みを把握すれば、AIに任せる処理の安全性や再現性を自分で確かめられる。
- Gitやデプロイなど、多くの定番ツールはターミナル操作が前提となっており、GUIだけでは把握しづらい履歴や差分も追跡できる。
- パスやディレクトリ構造の理解は、プログラミング・自動化・CLI連携の土台であり、社内コンテキストをAIに渡す際にも欠かせない。
- ターミナルを学ぶことで、AIと協働しながら自分自身がハブとして動ける“社内AI開発者”に近づける。

## 4. 事前準備

### Finderの横にホームディレクトリを追加

Finderの横にホームディレクトリを追加する方法：

1. Finderを開き、メニューバーの「Finder」>「環境設定」を選択します。
2. 「サイドバー」タブをクリックします。
3. 「よく使う項目」または「お気に入り」の項目の中から、自分のホームディレクトリを表す家のアイコン（または「ホーム」）にチェックを入れます。

### Finderの下にフォルダの階層が表示されるようにする

Finderの下にフォルダの階層が表示されるようにする方法：

1. Finderを開き、メニューバーの「表示/View」>「パスバー/ Show Path Bar」をチェックを入れます。

### ホームディレクトリにproject.zipを配置、解凍する。


## 5. ターミナル基礎ハンズオン
- シェルとパスの考え方を図で説明
[シェルとパスの考え方](https://claude.ai/public/artifacts/8854d550-8a60-4cba-b7e4-7bb8513727c4)
図：ディレクトリ／パス階層の概念図
- 基本概念整理：
  - **ホームディレクトリ**：ユーザーの作業の起点となる場所（例：`/Users/username`）。
  - **カレントディレクトリ**：現在操作している場所、`pwd`で確認。
  - **絶対パス**：最上位(`/`)からの完全な位置（例：`/Users/username/project`）。
  - **相対パス**：カレントディレクトリからの相対的な位置（例：`../docs`）。
  - **ルートディレクトリ**：最上位のディレクトリ（例：`/`）。

| 操作 | コマンド例 |
| --- | --- |
| 現在地確認 | `pwd` |
| 中身を見る | `ls` |
| 移動する | `cd`, `cd ..` |
| ディレクトリ作成 | `mkdir project` |
| ファイル作成 | `touch memo.txt` |
| ファイル確認 | `cat memo.txt` |
| ファイル移動 | `mv memo.txt docs/` |
| コピー | `cp memo.txt memo_backup.txt` |
| 履歴確認 | `history` |

#### 手順とディレクトリ階層対応
1. `cd ~`
2. `cd project`
3. `mkdir d1-1`
4. `cd d1-1`
5. `mkdir d1-2`
6. `cd d1-2`
7. `pwd`
8. `cd ..`
9. `cd ..`
10. `cd d1-1/d1-2/`
11. `cd ../..`
12. `cd d1-1/d1-2/`
13. `cd -`
14. `pwd`
15. `ls`
16. `touch memo1.txt`
17. `ls`
18. `echo "Hello, World!" > memo1.txt`
19. `cat memo1.txt`
20. `cp memo1.txt memo2.txt`
21. `ls`
22. `cd d1-1/`
23. `mv ../memo1.txt .`
24. `ls`
25. `cd ..`
26. `rm memo2.txt`
27. `ls`
28. `mkdir -p d2-1/d2-2/`
29. `cd d2-1/d2-2/`
30. `cp ../../d1-1/d1-2/memo1.txt ..`
31. `cd ~/project`
32. `rm -rf d1-1` 危険なコマンドなので間違えないように注意
33. `ls`
34. `history`
35. `exit`

最終的にどのようなディレクトリ構造になったかを確認して下さい。


## 6. Cursorでターミナルを使う
### Cursorのターミナル機能とは
- Cursorは統合開発環境（IDE）として、ターミナル機能を内蔵している
- エディタとターミナルを同じ画面で操作できるため、コマンド実行とコード編集を効率的に行える
- AIアシスタントが提案するコマンドを、その場で実行して確認できる

### Cursorのターミナルを開く方法
1. **メニューから開く**
   - メニューバーの「View」→「Terminal」を選択
2. **ショートカットキーで開く**
   - `Ctrl + `` (バッククォート) または `Ctrl + J` を押す
3. **コマンドパレットから開く**
   - `Cmd + Shift + P` (Mac) または `Ctrl + Shift + P` (Windows/Linux) でコマンドパレットを開く
   - 「Terminal」と入力して「View: Toggle Terminal」を選択

### Cursorのターミナルの特徴
- **統合された操作**：エディタでファイルを開きながら、同じ画面でコマンドを実行できる
- **複数ターミナル**：`+`ボタンで複数のターミナルを開き、並行して作業できる
- **AIとの連携**：AIが提案したコマンドをコピー&ペーストして実行できる
- **履歴機能**：実行したコマンドの履歴が残り、再実行が容易

### 実践例：Cursorでターミナルを使う
1. Cursorでプロジェクトフォルダを開く
2. ターミナルを開く（`Ctrl + ``）
3. `pwd`で現在地を確認
4. `ls`でファイル一覧を表示
5. `touch test.txt`でファイルを作成
6. エディタで`test.txt`が表示されることを確認

## 7. ターミナルからAPIを操作してみる

### 目的

- `curl`コマンドでAPIが実行できることを理解する
- Cursorは`curl`コマンドを実行できることをことを理解する
- APIが提供されているものはCursorから操作できることを理解する

### curlコマンドとは

- `curl`は、コマンドラインからHTTPリクエストを送信するためのツール
- URLを指定してデータを取得したり、APIにリクエストを送信したりできる
- レスポンスの内容を確認したり、ファイルをダウンロードしたりする際に便利
- 基本的な使い方：`curl [URL]`でGETリクエストを送信
- オプション例：
  - `-H`: ヘッダーを指定（例：`-H "Authorization: Bearer TOKEN"`）
  - `-d`: データを送信（POSTリクエストなど）
  - `-X`: HTTPメソッドを指定（例：`-X POST`）
  - `-o`: レスポンスをファイルに保存
- APIの動作確認やデバッグに重宝するツール


### JSONPlaceholder APIを使った演習

JSONPlaceholderは、認証不要で使えるテスト用の無料APIサービスです。`curl`コマンドでAPIが実行できることを体験してみましょう。

#### GETリクエスト - データを取得する

```bash
curl https://jsonplaceholder.typicode.com/posts/1
```

**レスポンス例：**
```json
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae..."
}
```

#### POSTリクエスト - データを送信する

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d '{"title": "My Post", "body": "Hello from terminal", "userId": 1}'
```

**レスポンス例：**
```json
{
  "title": "My Post",
  "body": "Hello from terminal",
  "userId": 1,
  "id": 101
}
```

→ ターミナルからAPIを操作できることが確認できました！

### ターミナルからOpenAI APIを使ってみる

OpenAI APIは、GPTモデルを使ったテキスト生成やチャット機能を提供するAPIです。実際にAPIを呼び出して、AIの応答を体験してみましょう。

#### 事前準備

1. OpenAI APIキーを取得（https://platform.openai.com/api-keys）
2. メモ帳にAPIキーを保存するなどしておく

#### チャット補完APIの呼び出し

まずはそのまま実行：

```bash
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1-mini",
    "input": "Hello"
  }'
```

**結果**：認証エラー

#### 環境変数とは

`$OPENAI_API_KEY`が空。`$`で始まる文字列は**環境変数**と呼ばれ、プログラムやコマンドが参照できる設定値

環境変数の中身を確認：

```bash
echo $OPENAI_API_KEY
```

**結果**：何も表示されない

#### 環境変数を設定する

`export`コマンドを使って環境変数を設定します：

```bash
export OPENAI_API_KEY="your-api-key-here"
```

設定できたか確認してみましょう：

```bash
echo $OPENAI_API_KEY
```

**結果**：設定したAPIキーが表示される

#### 再度APIを実行

もう一度curlコマンドを実行してみましょう：

```bash
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1-mini",
    "input": "Hello"
  }'
```

**結果**：成功。AIからの応答が返ってくる。

#### 環境変数の永続化

しかし、**ターミナルを閉じて再度開く**と、また認証エラーが発生する。

確認してみましょう：

```bash
echo $OPENAI_API_KEY
```

**結果**：何も表示されない

環境変数は**そのターミナルセッション内でのみ有効**。永続化するには、シェルの設定ファイル（`.zshrc`）に記載する必要がある：

```bash
echo 'export OPENAI_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc
```

#### ⚠️ セキュリティ上の注意

APIキーを`.zshrc`に記載すると、キーが漏洩する危険があるので注意。

推奨される方法：
- `.env`ファイルに記載し、`.gitignore`に追加する
- 環境変数管理ツール（direnv、dotenvなど）を使う
- クラウドのシークレット管理サービスを使う

### 演習コマンド

上記の手順を実際に試してみましょう：

1. 環境変数なしでcurlを実行 → 認証エラーを確認
2. `export`で環境変数を設定
3. `echo`で環境変数を確認
4. 再度curlを実行 → 成功を確認
5. 新しいターミナルを開いて、環境変数が消えていることを確認

### 発展課題
- .env ファイルについてChatGPTに聞いてみる
- 環境変数についてChatGPTに聞いてみる
- 環境変数管理ツールについてChatGPTに聞いてみる
- クラウドのシークレット管理サービスについてChatGPTに聞いてみる。
- あなたのデプロイ先のサービスは、どのようにシークレット管理サービスを使っているかも聞いてみる

## 8. ターミナルからCLIをインストールして操作してみる

### 目的

- CLIを入れると社内外ツールとすぐ連携できることを理解する
- CursorからCLIを実行できることを理解する
- CLIが提供されているものはCursorから操作できることを理解する

### 演習手順
1. Homebrew導入状況を`brew -v`で確認
2. `brew install gh`
3. `gh --version`で導入チェック
4. 認証デモ：`gh auth login`→GitHubアカウントでブラウザ認証
5. `gh repo list`や`gh issue status`で接続確認

既存のプロジェクトにアクセスし、`git clone <リポジトリURL>`でクローンしてから、`gh pr create`でPRも作成可能


## 9. Codex CLIを使ってみる

### 目的

- Codex CLIを起動して、ターミナルから対話的にコーディング補助を受ける
- 自然言語で指示を出し、コード生成や変更ができることを体験する
- モデルを切り替えて、異なるAIモデルの挙動を試す

### Codexとは

- OpenAIが開発するターミナル型コーディング補助ツール（CLI）
- ローカルのリポジトリやファイルに対して、指示に基づく提案・変更を対話的に行う
- 初回起動時にブラウザでサインインし、すぐに使い始められる

参考: 
- https://openai.com/ja-JP/codex/
- https://platform.openai.com/docs/codex

### 演習手順

1. **Codexのインストール確認**
```bash
codex --version
```
未導入の場合は以下のどちらかでインストール：
```bash
brew install --cask codex  # Homebrew推奨
npm i -g @openai/codex     # Node.jsがある場合
```

2. **Codexを起動**
```bash
cd ~/project
codex
```
初回はブラウザでサインイン画面が開く → ログイン後、ターミナルに戻る

3. **基本的な指示を出してみる**

Codexのプロンプトで以下を試す：
```
> Header.jsにコメントを追加して、その機能を説明してください
```

```
> utils.jsに日付をフォーマットする関数を作成してください
```

```
> JavaScriptファイルを一覧表示してください
```

4. **モデルを切り替える**

Codexは複数のモデルに対応している。モデルを切り替えて試してみる：
```
> /model 
```
5. **ヘルプを確認**

Codex内で使えるコマンドを確認：
```
> /help
```

6. **終了**
```
> /exit
```
または `Ctrl + D`

### よく使うCodexコマンド

| コマンド | 説明 |
| --- | --- |
| `/help` | 使えるコマンド一覧を表示 |
| `/model [name]` | モデルを切り替え |
| `/clear` | 会話履歴をクリア |
| `/exit` | Codexを終了 |

### 中断・操作のキーボードショートカット

- **実行中止**: `Ctrl + C` 他のコマンドでも有効。実行が長かったり、停止しない限り実行し続けるコマンドを実行中止するときに使う
- **入力終了/終了**: `Ctrl + D` 他のコマンドでも有効。サブプロセスを終了するときに使う



## 10. まとめ＆フォローアップ

### 今日の学び

- **ターミナル基礎**：pwd、ls、cd、mkdir、touch、cat、mv、cp、rmなどの基本コマンドとディレクトリ構造の理解
- **Cursor統合**：エディタ内でターミナルを使い、AIと連携しながら効率的に作業する方法
- **API操作**：curlコマンドでJSONPlaceholder APIやOpenAI APIを呼び出し、ターミナルから外部サービスと連携
- **環境変数**：APIキーなどの機密情報を管理する方法と、永続化の仕組み
- **CLIツール**：Homebrewでのパッケージ管理、GitHub CLI（gh）の導入と使い方
- **Codex CLI**：ターミナル型AIでコーディング補助を受け、自然言語で開発を加速する体験

### 次の一歩

- **実践してみよう**：
  - 日常の作業でターミナルを使ってみる（ファイル操作、ディレクトリ移動）
  - Cursorのターミナルから簡単なコマンドを実行してみる
  - 自分のプロジェクトでcurlを使ってAPIを試してみる
- **探求してみよう**：
  - .envファイルや環境変数管理ツール（direnv、dotenvなど）について調べてみる
  - 他のCLIツール（Slack CLI、Notion CLIなど）を探してインストールしてみる
  - Codex CLIで自分のコードにコメントを追加したり、リファクタリングを試してみる
- **コミュニティで共有**：
  - Slackで試したコマンドや疑問を共有
  - 便利なCLIツールや使い方のTipsをシェア

### 振り返り

- 振り返りアンケートで理解度と不安点を共有してください
- フィードバックは次回研修の改善に活用します

## 11. 付録：Cursorをターミナルから起動する設定
- Cursorのコマンドパレットから「Shell Command: Install 'cursor' command」を実行し、CLIをPATHに登録。
- これで `cd git/` → `mkdir new_repo` → `cursor new_repo` のような三連コンボで即座にプロジェクトを開ける。

## 12. 付録：Sublime Textをターミナルから起動する設定
- `brew install --cask sublime-text` でSublime Textをインストール（Homebrew Cask）。
- `/Applications/Sublime Text.app/Contents/SharedSupport/bin` を`PATH`に追加し、`subl`コマンドを有効化（例：`echo 'export PATH="/Applications/Sublime Text.app/Contents/SharedSupport/bin:$PATH"' >> ~/.zshrc`）。
- これで `cd git/ && mkdir new_repo && subl memo.txt` のようにターミナルから即座にエディタを開ける。
