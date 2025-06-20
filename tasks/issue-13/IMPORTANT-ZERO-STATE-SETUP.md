# ⚠️ 重要: スペイン語環境がゼロからの構築であることについて

## 📋 現在の状況確認

QA Advisorドキュメントサイトは現在、以下の状態です：

### ✅ 既に対応済み
- 英語環境（デフォルト）
- 日本語環境（完全対応済み）

### ❌ 未対応（これから構築）
- **スペイン語環境は一切存在しない**
- docusaurus.config.js にスペイン語設定なし
- i18n/es/ ディレクトリが存在しない
- UI翻訳ファイルが存在しない

---

## 🚨 Devinが陥りやすい間違い

### 間違いパターン1: 既存環境の前提
❌ **間違った認識**: 「スペイン語環境は既に設定されている」
✅ **正しい認識**: 「スペイン語環境は完全にゼロから構築する必要がある」

### 間違いパターン2: 設定ファイルの見落とし
❌ **間違った行動**: いきなり翻訳ファイルを作成する
✅ **正しい行動**: まず docusaurus.config.js を修正する

### 間違いパターン3: ディレクトリ構造の誤解
❌ **間違った認識**: 「i18n/es/ は既に存在する」
✅ **正しい認識**: 「i18n/es/ ディレクトリから作成する必要がある」

---

## ✅ 正しい作業順序

### Step 1: 設定ファイル修正（最重要）
1. `docusaurus.config.js` を開く
2. `locales: ['en', 'ja']` を `locales: ['en', 'ja', 'es']` に変更
3. `localeConfigs` にスペイン語設定を追加
4. 検索プラグインの `languages` に 'es' を追加

### Step 2: ディレクトリ構造作成
1. `i18n/es/` ディレクトリを作成
2. `i18n/es/docusaurus-theme-classic/` ディレクトリを作成
3. `i18n/es/docusaurus-plugin-content-docs/current/` ディレクトリを作成

### Step 3: 基本UI翻訳ファイル作成
1. `i18n/es/code.json` を作成
2. `i18n/es/docusaurus-theme-classic/navbar.json` を作成
3. `i18n/es/docusaurus-theme-classic/footer.json` を作成

### Step 4: 動作確認
1. `npm run build` でエラーがないか確認
2. `npm run start` で開発サーバー起動
3. 言語切り替えメニューでスペイン語が表示されるか確認

### Step 5: コンテンツ翻訳
基盤構築が確認できてから、実際のドキュメント翻訳に進む

---

## 🔍 動作確認のポイント

### 確認項目1: 言語切り替えメニュー
サイト右上に以下が表示されるか：
- English
- 日本語  
- **Español** ← これが新しく追加される

### 確認項目2: URL構造
スペイン語選択時のURLが以下になるか：
```
https://docs.quarka.org/es/
```

### 確認項目3: UI翻訳
スペイン語選択時に以下が翻訳されるか：
- ナビゲーションメニュー
- フッター
- エラーページ
- 検索ボックス

---

## 📝 Devinへの明確な指示例

```
重要な前提条件：
QA Advisorドキュメントサイトにはスペイン語環境が一切存在しません。
完全にゼロからスペイン語対応を構築してください。

最初に行うべきこと：
1. docusaurus.config.js の locales配列に 'es' を追加
2. localeConfigs にスペイン語設定を追加  
3. 検索プラグインの languages に 'es' を追加
4. i18n/es/ ディレクトリ構造を新規作成

現在の設定（mainブランチ）：
- locales: ['en', 'ja'] 
- i18n/es/ ディレクトリは存在しない

これを以下に変更：
- locales: ['en', 'ja', 'es']
- i18n/es/ ディレクトリを新規作成
```

---

## 🎯 成功の判断基準

### Phase1完了の条件
- [ ] 言語切り替えメニューに「Español」が表示される
- [ ] スペイン語選択時にUIが部分的に翻訳される
- [ ] `npm run build` が成功する
- [ ] コンソールエラーが発生しない

### 最終完了の条件
- [ ] 主要ドキュメントがスペイン語で読める
- [ ] 専門用語が一貫して翻訳されている
- [ ] 地域固有の情報が含まれている
- [ ] 品質チェックリストをすべて満たしている

---

この情報を踏まえて、Devinは確実にスペイン語環境をゼロから構築できます。
