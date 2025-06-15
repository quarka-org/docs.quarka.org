# Devin実行用指示書: スペイン語対応 Phase2

## 🎯 ミッション概要
QA Advisorドキュメントサイト（docs.quarka.org）のスペイン語対応を実施し、スペイン語圏ユーザーが主要機能を理解できるようにする。

## 🔧 技術環境
- **フレームワーク**: Docusaurus 3.x with I18N support
- **ベースリポジトリ**: quarka-org/docs.quarka.org
- **作業ブランチ**: issue-13/i18n-phase2-spanish-support
- **参考実装**: 既存の日本語対応（日本語ロケール設定を参考にする）

## 📋 実行タスク（優先順位順）

### サブタスク1: スペイン語対応基盤の整備と検証 (4-6 ACU)
**見積もり時間**: 10-15分

#### 作業内容
1. **Docusaurus設定の更新**
   - `docusaurus.config.js`にスペイン語ロケール（es）を追加
   - 既存の日本語設定（ja）を参考に、スペイン語の言語設定を実装
   - ナビゲーションメニューのスペイン語対応

2. **スペイン語表示の最適化**
   - スペイン語特有の文字（ñ、ü、アクセント記号）の表示確認
   - フォント設定の最適化
   - 文字エンコーディング（UTF-8）の確認

3. **言語切り替え機能の検証**
   - 言語選択メニューにスペイン語オプション追加
   - 言語切り替え後の動作確認

#### 成功条件
- [ ] 言語切り替えでスペイン語が選択可能
- [ ] スペイン語特有の文字が正しく表示される
- [ ] スペイン語ページの基本レイアウトが正常に動作する

#### 具体的な実装手順
```javascript
// docusaurus.config.js の更新例
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ja', 'es'], // スペイン語を追加
  localeConfigs: {
    en: {
      label: 'English',
    },
    ja: {
      label: '日本語',
    },
    es: {
      label: 'Español', // スペイン語追加
    },
  },
},
```

---

### サブタスク2: ユーザーマニュアル（コア機能）のスペイン語翻訳 (12-18 ACU)
**見積もり時間**: 35-50分

#### 翻訳対象ファイル（優先順）
1. `docs/intro.md` → `i18n/es/docusaurus-plugin-content-docs/current/intro.md`
2. `docs/installation/` → `i18n/es/docusaurus-plugin-content-docs/current/installation/`
3. `docs/getting-started/` → `i18n/es/docusaurus-plugin-content-docs/current/getting-started/`
4. `docs/dashboard/` → `i18n/es/docusaurus-plugin-content-docs/current/dashboard/`
5. `docs/settings/` → `i18n/es/docusaurus-plugin-content-docs/current/settings/`

#### 翻訳品質基準
1. **専門用語の一貫性**
   - WordPress公式スペイン語翻訳に準拠
   - QA Advisor固有用語は英語併記
   - 用語集ファイル作成（`glossary-es.md`）

2. **文体・敬語**
   - 「usted」form（丁寧語）使用
   - プロフェッショナルかつ親しみやすいトーン
   - 簡潔で理解しやすい文章構造

3. **地域対応**
   - スペイン語圏で一般的なホスティング環境への言及
   - WordPress管理画面のスペイン語表記に合わせる

#### 重要な翻訳例
```
English: "QA Advisor Dashboard"
Spanish: "Panel de Control de QA Advisor"

English: "WordPress Plugin Installation"
Spanish: "Instalación del Plugin de WordPress"

English: "Analytics Settings"
Spanish: "Configuración de Análisis"
```

#### 成功条件
- [ ] 主要セクションがスペイン語で読める
- [ ] 専門用語が一貫して翻訳されている
- [ ] スペイン語圏のWordPress環境に適した説明

---

### サブタスク3: FAQ（よくある質問）のスペイン語翻訳 (10-14 ACU)
**見積もり時間**: 30-40分

#### 作業内容
1. **既存FAQ翻訳**
   - `docs/faq/` セクション全体の翻訳
   - 技術的な質問と回答の正確な翻訳

2. **地域特化FAQ追加**
   - スペイン語版WordPressでの設定方法
   - 人気ホスティングサービス（Hostinger、GoDaddy、Webempresa）での動作
   - GDPR（ヨーロッパ）対応に関する質問

3. **FAQ分類の最適化**
   - スペイン語圏ユーザー向けの分類整理
   - 検索しやすいキーワード設定

#### 地域別配慮事項
- **メキシコ**: 大手ホスティング（Hostinger、GoDaddy）
- **スペイン**: GDPR準拠、欧州サーバー設置の重要性
- **アルゼンチン**: 現地CMSプロバイダーとの互換性
- **コロンビア**: 中小企業向けWordPress環境

#### 成功条件
- [ ] 主要FAQがスペイン語で提供される
- [ ] 地域固有の技術環境に対応
- [ ] 自己解決可能なFAQが整備される

---

### サブタスク4: スペイン語圏特有のコンテンツ追加 (6-8 ACU)
**見積もり時間**: 15-20分

#### 作業内容
1. **互換性情報の追加**
   - スペイン語圏人気WordPressテーマとの互換性
   - 一般的なプラグインとの競合回避ガイド

2. **サポートチャネル情報**
   - 地域別サポート情報
   - スペイン語コミュニティリソース

3. **地域最適化ガイド**
   - 地域特有のWordPress設定推奨事項
   - パフォーマンス最適化のベストプラクティス

#### 成功条件
- [ ] スペイン語圏特有の情報が提供される
- [ ] 地域のWordPress環境に最適化された情報
- [ ] コミュニティサポートリソースへの案内

---

## 🔍 品質保証チェックリスト

### 技術的品質
- [ ] すべてのリンクが正常に動作する
- [ ] 画像・メディアが適切に表示される
- [ ] スペイン語特有文字の表示が正常
- [ ] レスポンシブデザインが機能する

### 翻訳品質
- [ ] WordPress公式用語との一致性
- [ ] スペイン語文法・語彙の正確性
- [ ] 技術的内容の正確性
- [ ] 一貫した敬語レベル・文体

### ユーザビリティ
- [ ] ナビゲーションが直感的
- [ ] 検索機能がスペイン語で動作
- [ ] 地域固有の配慮事項が反映されている

---

## 📚 重要な参考資料

### WordPress公式リソース
- [WordPress Codex (スペイン語)](https://codex.wordpress.org/es)
- [WordPress.org スペイン語翻訳](https://translate.wordpress.org/locale/es/)
- [プラグイン翻訳ガイドライン](https://developer.wordpress.org/plugins/internationalization/)

### 既存実装の参考
- 日本語対応の実装パターンを参考にする
- `i18n/ja/` ディレクトリの構造を参考にスペイン語版を作成
- `docusaurus.config.js` の日本語設定を参考にする

### 地域別WordPressコミュニティ
- [WordPress España](https://es.wordpress.org/)
- [WordPress México](https://mx.wordpress.org/)
- [WordPress Argentina](https://ar.wordpress.org/)
- [WordPress Colombia](https://co.wordpress.org/)

---

## 🚨 重要な注意事項

### 1. 翻訳方針の統一
- 専門用語は必ず英語併記
- WordPress公式翻訳に準拠
- 「usted」form（丁寧語）で統一

### 2. 品質最優先
- 機械翻訳のままではなく、文脈に適した自然な翻訳
- 技術的正確性を最重視
- 地域の文化的配慮を忘れない

### 3. 段階的実装
- 各サブタスク完了後に動作確認
- 問題があれば即座に修正
- 最終的な統合テスト実施

---

## 📈 進捗報告

作業完了後は `progress-tracking.md` に以下を記録：
- 完了したサブタスク
- 実際にかかった時間（ACU）
- 発見した問題と解決方法
- 品質チェック結果
- 今後の改善提案

---

## 🎉 成功の定義

この作業が成功とみなされる条件：
1. スペイン語でサイトが正常に表示・動作する
2. 主要ユーザーマニュアルがスペイン語で利用可能
3. FAQが自己解決に使える品質で提供される
4. スペイン語圏の技術環境に適した内容が含まれる
5. 翻訳品質が実用レベルに達している
6. 今後のスペイン語コンテンツ拡張の基盤が整っている

このミッションを通じて、QA Advisorのスペイン語圏での普及とユーザー体験向上に貢献してください。

¡Buena suerte! (頑張って！)
