# Issue #29: Environment Setup ドキュメント多言語統一

## タスク概要
英語版の `environment-setup.md` を基準として、8言語版を統一する。

## 作業対象ファイル

### 基準ファイル（コピー元）
- `docs/user-manual/1-getting-started/environment-setup.md`

### 更新対象ファイル（8言語）
1. `i18n/de/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
2. `i18n/es/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
3. `i18n/fr/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
4. `i18n/it/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
5. `i18n/ja/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
6. `i18n/nl/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
7. `i18n/pl/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`
8. `i18n/pt/docusaurus-plugin-content-docs/current/user-manual/1-getting-started/environment-setup.md`

## 作業手順
1. 英語版の内容を確認
2. 各言語に適切に翻訳
3. 各言語版ファイルを置き換え
4. ビルドテスト実行

## 品質要件
- 翻訳精度を確保（機械翻訳後のレビュー必須）
- 全言語版で同一構造・同一内容
- ビルドエラーなし

## Devin実行コマンド
このタスクをDevinに実行してもらう場合：
- イシュー番号: #29
- ブランチ: issue-29/environment-setup-multilang-unify
- 作業ディレクトリ: tasks/issue-29/
