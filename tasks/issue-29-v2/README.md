# Issue #29: Environment Setup ドキュメント翻訳統一（第2回）

## 🚫 重要な制約事項（必須遵守）

### **絶対に変更してはいけないファイル**
- `docs/user-manual/1-getting-started/environment-setup.md`（英語版）
- **このファイルは参照のみ。1文字も変更禁止**

### **改善・最適化の全面禁止**
- 英語版の内容改善禁止
- 技術情報の追加禁止  
- セクションの追加禁止
- 構造の変更禁止
- 「より良い内容」への変更禁止

## ✅ 作業内容（翻訳のみ）

### **基準ファイル（参照のみ）**
- `docs/user-manual/1-getting-started/environment-setup.md`

### **変更対象ファイル（8言語）**
1. `i18n/de/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
2. `i18n/es/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
3. `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
4. `i18n/it/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
5. `i18n/ja/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
6. `i18n/nl/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
7. `i18n/pl/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
8. `i18n/pt/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`

### **作業手順**
1. **英語版の内容を確認**（変更せず参照のみ）
2. **各言語版を英語版の翻訳で置き換え**
3. **構造・見出し・リンクは英語版と同一にする**
4. **翻訳精度の確認**

## 📁 ファイル操作制限

### **参照のみ**
- `docs/user-manual/1-getting-started/environment-setup.md`

### **変更可能**
- 上記8つの多言語ファイルのみ

### **変更禁止**
- 上記以外の全ファイル
- 英語版ファイル
- 他のドキュメントファイル
- 設定ファイル

## 🎯 成功基準

### **必須チェック項目**
- [ ] 英語版ファイルが1文字も変更されていない
- [ ] 8言語版が全て英語版の翻訳になっている
- [ ] 各言語版の構造が英語版と同一
- [ ] ビルドエラーが発生しない
- [ ] 変更ファイル数が8ファイルちょうど

### **翻訳品質**
- [ ] 機械翻訳後の自然な表現への調整
- [ ] 技術用語の適切な翻訳
- [ ] リンクURLの正確性

## ❌ 絶対にしてはいけないこと

### **内容変更禁止**
- 英語版の「改善」「最適化」「詳細化」
- システム要件の追加
- 新しいセクションの追加
- 技術情報の拡張
- 設定例の追加

### **構造変更禁止**
- 見出し構造の変更
- セクション順序の変更
- リンク先の変更

### **ファイル操作禁止**
- 英語版ファイルの変更
- 新ファイルの作成
- ファイルの削除
- 他言語版以外のファイル変更

## 🔍 品質確認

### **差分確認**
- 変更されるファイル: 8つの多言語版のみ
- 変更されてはいけないファイル: 英語版
- 期待される変更: 翻訳による内容統一のみ

### **内容確認**
- 英語版と各言語版の構造が同一
- 技術的内容が翻訳により正確に伝達
- リンクが正しく機能する

## 📝 Devin実行指示

**目的**: 英語版environment-setup.mdの内容を基準として、8言語版を翻訳により統一する

**重要**: 英語版は絶対に変更せず、参照のみ。各言語版を英語版の正確な翻訳に置き換えるだけ。

**制約**: 改善・最適化・追加は一切禁止。純粋な翻訳作業のみ。

---

### 前回の失敗の学習
- Devinは前回、英語版を大幅に改訂してしまいました
- 今回は英語版の変更を完全に禁止し、翻訳のみに限定します
- 「改善」志向を完全に封じ込めた指示にしています