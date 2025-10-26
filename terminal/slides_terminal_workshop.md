# Terminal研修 スライド草案

## 1. タイトル
- Terminal研修 〜AI活用に近づくターミナル入門〜
- 日付：2025年10月26日
- 講師名／所属（必要に応じて差し替え）

## 2. 今日のゴール
- ターミナル操作への抵抗感をなくす
- CLIツールとAPIを扱う第一歩を踏み出す
- Git講座への接続イメージをつかむ

## 3. 背景：AI導入成熟度モデル
- Phase 2（組織×汎用）からPhase 3（個人×特化）へ移行するにはターミナル／API／Gitへの理解が必須。
- 非エンジニアが社内AI開発者として自走するための技術基盤を整えることが研修の狙い。
- 本研修はAPI講座とGit講座を橋渡しし、実務でコンテキスト自動化へつなげる第一歩。

## 4. 本日の流れ（120分想定）
1. API×AIデモ（10分）
2. モジュールA：ターミナル基礎ハンズオン（35分）
3. モジュールB：CLIインストール体験（20分）
4. モジュールC：APIウォームアップ演習（25分）
5. モジュールD：Gitクイックラン（20分）
6. まとめ＆フォローアップ（10分）

## 5. モジュール0：API×AIデモ
- ターミナルからAIが動く驚きを共有
- リクエスト構造：エンドポイント／ヘッダー／JSONボディ
- Codex CLIなどターミナル型AIの活用事例を紹介

### デモ手順（講師用メモ）
```bash
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1-mini",
    "input": "今日の研修で得られる価値を2行でまとめて"
  }'
```
- レスポンス例をスクリーンに投影し、要素を解説

## 6. モジュールA：ターミナル基礎ハンズオン
- シェルとパスの考え方を図で説明
- 演習：ホーム確認→ディレクトリ移動→ファイル作成・閲覧
- 基本概念整理：
  - **ホームディレクトリ**：ユーザーの作業の起点となる場所（例：`/Users/username`）。
  - **カレントディレクトリ**：現在操作している場所、`pwd`で確認。
  - **絶対パス**：最上位(`/`)からの完全な位置（例：`/Users/username/project`）。
  - **相対パス**：カレントディレクトリからの相対的な位置（例：`../docs`）。
- 移動コマンド例（10パターン）：
  1. `pwd`（現在地を確認）
  2. `cd ~`（ホームディレクトリへ移動）
  3. `cd /`（ルートディレクトリへ移動）
  4. `cd Documents`（カレント配下のDocumentsへ）
  5. `cd ..`（1つ上の階層へ）
  6. `cd ../..`（2つ上の階層へ）
  7. `cd -`（直前のディレクトリに戻る）
  8. `cd ~/workspace/project`（絶対パス指定で移動）
  9. `cd $(pwd)/../logs`（現在地からの相対パスを展開）
 10. `cd /Applications && pwd`（移動後に場所を確認）
- よく使うコマンド（抜粋）

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

- 一貫演習シナリオ（全コマンド確認）：
  1. `pwd` で現在地を確認。
  2. `ls` でホーム直下のフォルダを把握。
  3. `mkdir terminal-training` で作業用ディレクトリを作成。
  4. `cd terminal-training` でディレクトリに移動。
  5. `touch memo.txt` で空ファイルを生成。
  6. `cat memo.txt` で中身（空であること）を確認。
  7. `cp memo.txt memo_backup.txt` でバックアップファイルを作成。
  8. `mkdir docs` で移動先フォルダを用意。
  9. `mv memo.txt docs/` で元ファイルを`docs`へ移動。
 10. `ls` で`docs`と`memo_backup.txt`があることを確認。
 11. `cd ..` で1つ上のホームに戻る。
 12. `history` で実行履歴を見て振り返り。

### 環境変数とPATHの基本
- **環境変数**：シェルが参照する設定値。例：`export OPENAI_API_KEY="sk-..."`
- **参照方法**：`echo $OPENAI_API_KEY` で値を確認（スクリーン共有時は伏字推奨）。
- **一時設定**：ターミナルを閉じるとクリアされる。例：`export PATH="/custom/bin:$PATH"`
- **永続化**：`~/.bashrc` や `~/.zshrc` に `export` 行を追記し、設定を残す。
- **PATHの概念**：コマンドの検索場所リスト。`echo $PATH` で確認し、追加するときは末尾に`:$PATH`を忘れない。
- **消えるPATH対策**：一時的な設定は新しいシェルで反映されないため、設定ファイルに記載→`source ~/.zshrc`で読み込み。

- ミニ課題：ディレクトリ→ファイル→追記→コピー→履歴スクリーンショット

## 7. モジュールB：CLIインストール体験
- CLIを入れると社内外ツールとすぐ連携できる
- GitHub CLI（`gh`）を題材に、導入から認証までを実演
- 事前にHomebrew確認→`brew update`→`brew install gh`

### 演習手順
1. Homebrew導入状況を`brew -v`で確認
2. `brew install gh`
3. `gh --version`で導入チェック
4. 認証デモ：`gh auth login`→GitHubアカウントでブラウザ認証
5. `gh repo list`や`gh issue status`で接続確認

## 8. モジュールC：APIウォームアップ演習
- 実際に`curl`を打ちながらAPI概念を整理
- APIキー管理・エラー時のリカバリを共有
- レスポンスの構造を読み、成果物をメモ

### 演習コマンド
```bash
curl https://api.openai.com/v1/responses \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "gpt-4.1-mini",
    "input": "GitHub CLIでできることを3点挙げて"
  }'
```
- 手順書に従ってパラメータを確認し、体験シートに記録

## 9. モジュールD：Gitクイックラン
- Git講座に向けたウォームアップ
- コマンドラインでの一連の流れを通す

### 演習手順
1. `git clone <教材URL>`または既存リポジトリにアクセスし、`cd existing-project`で移動。
2. `git switch -c feature/update-readme`で新しいブランチを作成して切り替え。
3. READMEをエディタで1行編集し、`git status`で変更内容を確認。
4. `git add README.md`→`git commit -m "Update README"`でコミット。
5. `git push --set-upstream origin feature/update-readme`でリモートに反映。
6. `gh pr create --fill` もしくは `gh pr create -t "Update README" -b "学習用の更新"` でPRを作成。
7. ブラウザでGitHubを開き、ブランチとPRが作成されたことを確認。
8. 作業後は `git switch main`（または既定ブランチ）で戻り、`git pull`で最新化。
- Git講座ではブランチ運用・差分確認・レビュー方法まで掘り下げる予定と案内

## 10. まとめ＆フォローアップ
- 今日の学び：ターミナル基礎／CLI導入／API体験／Git初歩
- 次の一歩：Slackで疑問を共有、任意CLI導入や`curl`ログをコミュニティでシェア、Git講座の事前課題を案内
- 振り返りアンケートで理解度と不安点を収集し、次回研修へ反映

## 11. 補足
- OpenAI APIキーを扱えない参加者には講師が代理実行
- エラー例（Permission denied, command not found）を事前に想定し、対処手順をスライド裏に添付
- 時間に余裕があればCodex CLIとの協働デモを追加

## 12. 付録：Cursorをターミナルから起動する設定
- Cursorのコマンドパレットから「Shell Command: Install 'cursor' command」を実行し、CLIをPATHに登録。
- これで `cd git/` → `mkdir new_repo` → `cursor new_repo` のような三連コンボで即座にプロジェクトを開ける。

## 13. 付録：Sublime Textをターミナルから起動する設定
- `brew install --cask sublime-text` でSublime Textをインストール（Homebrew Cask）。
- `/Applications/Sublime Text.app/Contents/SharedSupport/bin` を`PATH`に追加し、`subl`コマンドを有効化（例：`echo 'export PATH="/Applications/Sublime Text.app/Contents/SharedSupport/bin:$PATH"' >> ~/.zshrc`）。
- これで `cd git/ && mkdir new_repo && subl memo.txt` のようにターミナルから即座にエディタを開ける。
