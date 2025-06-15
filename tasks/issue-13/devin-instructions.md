# Devin実行用指示書: スペイン語対応 Phase2 (修正版)

## 🎯 ミッション概要
QA Advisorドキュメントサイト（docs.quarka.org）のスペイン語対応を**ゼロから構築**し、スペイン語圏ユーザーが主要機能を理解できるようにする。

## ⚠️ 重要な前提条件
**現在の状況**: スペイン語環境は未構築です。以下の状態からスタートします：
- docusaurus.config.js の locales に 'es' が含まれていない
- i18n/es/ ディレクトリが存在しない
- 検索プラグインにスペイン語が設定されていない

## 🔧 技術環境
- **フレームワーク**: Docusaurus 3.x with I18N support
- **ベースリポジトリ**: quarka-org/docs.quarka.org
- **作業ブランチ**: issue-13/i18n-phase2-spanish-support
- **参考実装**: 既存の日本語対応（ja設定を参考にする）

## 📋 実行タスク（優先順位順）

### サブタスク1: スペイン語対応基盤の構築と検証 (6-8 ACU)
**見積もり時間**: 15-20分（初期構築のため時間増加）

#### ⚠️ 注意：完全にゼロからの環境構築

#### 1.1 Docusaurus設定の更新
**必須作業**: `docusaurus.config.js`の以下箇所を修正

```javascript
// 現在の設定（修正前）
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ja'], // ← ここにスペイン語が未追加
  localeConfigs: {
    en: {
      htmlLang: 'en-US',
    },
    ja: {
      htmlLang: 'ja',
    },
    // ← スペイン語設定が存在しない
  },
},

// 修正後
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ja', 'es'], // ← 'es'を追加
  localeConfigs: {
    en: {
      htmlLang: 'en-US',
    },
    ja: {
      htmlLang: 'ja',
    },
    es: {                     // ← 新規追加
      htmlLang: 'es',
      label: 'Español',
    },
  },
},
```

#### 1.2 検索プラグイン設定の更新
**必須作業**: docusaurus-lunr-search設定を更新

```javascript
// 現在の設定（修正前）
plugins: [
  [
    require.resolve('docusaurus-lunr-search'),
    {
      languages: ['en', 'ja'] // ← スペイン語が未対応
    }
  ]
],

// 修正後
plugins: [
  [
    require.resolve('docusaurus-lunr-search'),
    {
      languages: ['en', 'ja', 'es'] // ← 'es'を追加
    }
  ]
],
```

#### 1.3 i18nディレクトリ構造の作成
**必須作業**: 以下のディレクトリ構造を新規作成

```
i18n/
└── es/
    ├── code.json                                   ← UI要素の翻訳
    ├── docusaurus-theme-classic/
    │   ├── footer.json                            ← フッター翻訳
    │   └── navbar.json                            ← ナビゲーション翻訳
    └── docusaurus-plugin-content-docs/
        └── current/                               ← ドキュメント翻訳用
            ├── user-manual/                       ← 将来のコンテンツ用
            ├── developer-manual/                  ← 将来のコンテンツ用
            ├── faq/                              ← 将来のコンテンツ用
            └── release-notes/                    ← 将来のコンテンツ用
```

#### 1.4 基本UI翻訳ファイルの作成
**必須作業**: 最低限の翻訳ファイルを作成

**i18n/es/code.json**:
```json
{
  "theme.ErrorPageContent.title": "Esta página se ha bloqueado.",
  "theme.ErrorPageContent.tryAgain": "Inténtalo de nuevo",
  "theme.NotFound.title": "Página no encontrada",
  "theme.NotFound.p1": "No pudimos encontrar lo que estabas buscando.",
  "theme.NotFound.p2": "Póngase en contacto con el propietario del sitio que le proporcionó el enlace original.",
  "theme.BackToTopButton.buttonAriaLabel": "Volver al inicio de la página"
}
```

**i18n/es/docusaurus-theme-classic/navbar.json**:
```json
{
  "title": "Documentación de QA Advisor",
  "item.label.User Guide": "Guía del Usuario",
  "item.label.Developer Guide": "Guía del Desarrollador",
  "item.label.Blog": "Blog",
  "item.label.Release Notes": "Notas de la Versión",
  "item.label.FAQ": "Preguntas Frecuentes",
  "item.label.GitHub": "GitHub"
}
```

**i18n/es/docusaurus-theme-classic/footer.json**:
```json
{
  "title.Docs": "Documentación",
  "title.Community": "Comunidad",
  "title.More": "Más",
  "link.Docs.User Guide": "Guía del Usuario",
  "link.Docs.Developer Guide": "Guía del Desarrollador",
  "link.Docs.FAQ": "Preguntas Frecuentes",
  "link.Community.GitHub": "GitHub",
  "link.More.Blog": "Blog",
  "link.More.Release Notes": "Notas de la Versión",
  "copyright": "Copyright © 2025 Quarka Organization. Construido con Docusaurus."
}
```

#### 1.5 動作確認テスト
1. `npm run build` でビルドエラーがないか確認
2. `npm run start` で開発サーバー起動
3. 言語切り替えメニューにスペイン語が表示されるか確認
4. スペイン語に切り替えてUIが翻訳されているか確認

#### 成功条件
- [ ] docusaurus.config.js にスペイン語設定が追加される
- [ ] 言語切り替えでスペイン語が選択可能になる
- [ ] スペイン語選択時にUIが基本翻訳される
- [ ] ビルドエラーが発生しない
- [ ] i18n/es/ ディレクトリ構造が作成される

---

### サブタスク2: ユーザーマニュアル（コア機能）のスペイン語翻訳 (12-18 ACU)
**見積もり時間**: 35-50分

#### 前提条件確認
サブタスク1で i18n/es/docusaurus-plugin-content-docs/current/ が作成されていることを確認

#### 翻訳対象ファイル（優先順）
既存の英語版ファイルをスペイン語ディレクトリにコピーして翻訳：

1. **`docs/intro.md`** → **`i18n/es/docusaurus-plugin-content-docs/current/intro.md`**
2. **`docs/user-manual/`** → **`i18n/es/docusaurus-plugin-content-docs/current/user-manual/`**
3. **`docs/user-manual/installation/`** → **`i18n/es/docusaurus-plugin-content-docs/current/user-manual/installation/`**
4. **`docs/user-manual/getting-started/`** → **`i18n/es/docusaurus-plugin-content-docs/current/user-manual/getting-started/`**
5. **`docs/user-manual/dashboard/`** → **`i18n/es/docusaurus-plugin-content-docs/current/user-manual/dashboard/`**

#### 翻訳手順
1. **英語版をコピー**: 元ファイルをスペイン語ディレクトリにコピー
2. **メタデータ翻訳**: frontmatterの title, description を翻訳
3. **本文翻訳**: 翻訳ガイドラインに従って内容を翻訳
4. **リンク確認**: 内部リンクが正しく動作するか確認

#### 翻訳品質基準
1. **専門用語の一貫性**
   - WordPress公式スペイン語翻訳に準拠
   - QA Advisor固有用語は英語併記
   - 用語集ファイル作成（`i18n/es/docusaurus-plugin-content-docs/current/glossary.md`）

2. **文体・敬語**
   - 「usted」form（丁寧語）使用
   - プロフェッショナルかつ親しみやすいトーン
   - 簡潔で理解しやすい文章構造

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
- [ ] 内部リンクが正常に動作する

---

### サブタスク3: FAQ（よくある質問）のスペイン語翻訳 (10-14 ACU)
**見積もり時間**: 30-40分

#### 翻訳対象
**`docs/faq/`** → **`i18n/es/docusaurus-plugin-content-docs/current/faq/`**

#### 作業内容
1. **既存FAQ翻訳**
   - FAQ セクション全体の翻訳
   - 技術的な質問と回答の正確な翻訳

2. **地域特化FAQ追加**
   - スペイン語版WordPressでの設定方法
   - 人気ホスティングサービス（Hostinger、GoDaddy、Webempresa）での動作
   - GDPR（ヨーロッパ）対応に関する質問

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

#### 成功条件
- [ ] スペイン語圏特有の情報が提供される
- [ ] 地域のWordPress環境に最適化された情報

---

## 🔍 品質保証チェックリスト

### 技術的品質
- [ ] `npm run build` が成功する
- [ ] `npm run start` で開発サーバーが起動する
- [ ] すべてのリンクが正常に動作する
- [ ] 画像・メディアが適切に表示される
- [ ] スペイン語特有文字（ñ、ü、アクセント記号）が正しく表示される
- [ ] レスポンシブデザインが機能する
- [ ] 言語切り替えが正常動作する

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

---

## 🚨 重要な注意事項

### 1. 環境構築の順序を厳密に守る
1. **まず**設定ファイル更新（docusaurus.config.js）
2. **次に**ディレクトリ構造作成
3. **その後**基本翻訳ファイル作成
4. **最後に**動作確認

### 2. エラー発生時の対処
- ビルドエラーが発生した場合、設定ファイルの構文を確認
- 言語切り替えが表示されない場合、config.jsの設定を再確認
- 翻訳が反映されない場合、ファイルパスを確認

### 3. 段階的実装の重要性
- 各サブタスク完了後に必ず動作確認
- 問題があれば次のサブタスクに進まない
- ビルドエラーは即座に修正

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
1. **環境構築**: スペイン語環境が正常に動作する
2. **翻訳品質**: 主要コンテンツが実用レベルでスペイン語化される
3. **技術的品質**: ビルドエラーがなく、すべての機能が動作する
4. **ユーザビリティ**: スペイン語圏ユーザーが直感的に使用できる
5. **拡張性**: 今後のスペイン語コンテンツ追加の基盤が整う

**特に重要**: サブタスク1の基盤構築が確実に完了してから次に進むこと！

¡Buena suerte! (頑張って！)
