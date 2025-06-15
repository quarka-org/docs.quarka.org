# スペイン語環境構築用 - 設定ファイル例

## docusaurus.config.js 修正例

### 現在の設定（mainブランチ）
```javascript
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'ja'],
  localeConfigs: {
    en: {
      htmlLang: 'en-US',
    },
    ja: {
      htmlLang: 'ja',
    },
  },
},

plugins: [
  [
    require.resolve('docusaurus-lunr-search'),
    {
      languages: ['en', 'ja']
    }
  ]
],
```

### 修正後の設定（スペイン語追加）
```javascript
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

plugins: [
  [
    require.resolve('docusaurus-lunr-search'),
    {
      languages: ['en', 'ja', 'es'] // ← 'es'を追加
    }
  ]
],
```

---

## 必要なディレクトリ構造

### 作成が必要なディレクトリとファイル

```
i18n/
└── es/                              ← 新規作成
    ├── code.json                    ← 新規作成
    ├── docusaurus-theme-classic/    ← 新規作成
    │   ├── footer.json              ← 新規作成
    │   └── navbar.json              ← 新規作成
    └── docusaurus-plugin-content-docs/  ← 新規作成
        └── current/                 ← 新規作成
            ├── intro.md             ← 翻訳対象
            ├── user-manual/         ← 翻訳対象
            ├── developer-manual/    ← 将来対応
            ├── faq/                 ← 翻訳対象
            └── release-notes/       ← 将来対応
```

---

## 翻訳ファイルのテンプレート

### i18n/es/code.json
```json
{
  "theme.ErrorPageContent.title": "Esta página se ha bloqueado.",
  "theme.ErrorPageContent.tryAgain": "Inténtalo de nuevo",
  "theme.NotFound.title": "Página no encontrada",
  "theme.NotFound.p1": "No pudimos encontrar lo que estabas buscando.",
  "theme.NotFound.p2": "Póngase en contacto con el propietario del sitio que le proporcionó el enlace original.",
  "theme.BackToTopButton.buttonAriaLabel": "Volver al inicio de la página",
  "theme.AnnouncementBar.closeButtonAriaLabel": "Cerrar",
  "theme.blog.archive.title": "Archivo",
  "theme.blog.archive.description": "Archivo",
  "theme.blog.paginator.navAriaLabel": "Navegación de la página del blog",
  "theme.blog.paginator.newerEntries": "Entradas más recientes",
  "theme.blog.paginator.olderEntries": "Entradas más antiguas",
  "theme.blog.post.readingTime.plurals": "Lectura de {readingTime} min",
  "theme.blog.post.readMore": "Leer más",
  "theme.blog.post.paginator.navAriaLabel": "Navegación de la página de entradas del blog",
  "theme.blog.post.paginator.newerPost": "Entrada más reciente",
  "theme.blog.post.paginator.olderPost": "Entrada más antigua",
  "theme.blog.sidebar.navAriaLabel": "Navegación de entradas recientes del blog",
  "theme.CodeBlock.copyButtonAriaLabel": "Copiar código al portapapeles",
  "theme.CodeBlock.copied": "¡Copiado!",
  "theme.CodeBlock.copy": "Copiar"
}
```

### i18n/es/docusaurus-theme-classic/navbar.json
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

### i18n/es/docusaurus-theme-classic/footer.json
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

---

## 動作確認手順

### 1. 設定ファイル修正後
```bash
npm run build
```
→ エラーが出ないことを確認

### 2. 基本翻訳ファイル作成後
```bash
npm run start
```
→ 開発サーバーが起動することを確認

### 3. 言語切り替えテスト
1. ブラウザでサイトを開く
2. 画面右上の言語切り替えメニューを確認
3. 「Español」が表示されることを確認
4. 「Español」を選択
5. UIが部分的にスペイン語になることを確認

### 4. URL確認
スペイン語選択時のURLが以下のようになることを確認：
```
http://localhost:3000/es/
```

---

## トラブルシューティング

### よくあるエラーと対処法

#### エラー1: "Cannot resolve locale 'es'"
**原因**: docusaurus.config.js の設定が不完全
**対処**: locales配列に'es'が含まれているか確認

#### エラー2: "Missing translation files"
**原因**: 必要な翻訳ファイルが不足
**対処**: code.json, navbar.json, footer.json を作成

#### エラー3: 言語切り替えメニューが表示されない
**原因**: localeConfigs の設定が不完全
**対処**: es の設定が正しく追加されているか確認

#### エラー4: 検索が動作しない
**原因**: 検索プラグインにスペイン語が追加されていない
**対処**: plugins設定でlanguagesに'es'を追加

---

## チェックリスト

### 設定ファイル修正
- [ ] docusaurus.config.js の locales に 'es' 追加
- [ ] localeConfigs に es 設定追加
- [ ] 検索プラグインの languages に 'es' 追加

### ディレクトリ作成
- [ ] i18n/es/ ディレクトリ作成
- [ ] i18n/es/docusaurus-theme-classic/ ディレクトリ作成
- [ ] i18n/es/docusaurus-plugin-content-docs/current/ ディレクトリ作成

### 基本翻訳ファイル作成
- [ ] i18n/es/code.json 作成
- [ ] i18n/es/docusaurus-theme-classic/navbar.json 作成
- [ ] i18n/es/docusaurus-theme-classic/footer.json 作成

### 動作確認
- [ ] npm run build が成功する
- [ ] npm run start で開発サーバー起動
- [ ] 言語切り替えメニューにスペイン語表示
- [ ] スペイン語選択時にUIが翻訳される
