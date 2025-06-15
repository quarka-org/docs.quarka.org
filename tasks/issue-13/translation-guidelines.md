# スペイン語翻訳ガイドライン

## 🎯 基本方針

### 対象地域とアプローチ
- **主要対象**: スペイン、メキシコ、アルゼンチン、コロンビア
- **言語変種**: ラテンアメリカスペイン語（es-LA）をベースとする
- **地域差対応**: 必要に応じてスペインスペイン語（es-ES）の差異を注記

### 文体・敬語レベル
- **基本姿勢**: 「usted」form（丁寧語）を使用
- **トーン**: プロフェッショナルかつ親しみやすく
- **文体**: 簡潔で理解しやすい文章構造

---

## 📝 専門用語翻訳規則

### WordPress関連用語
WordPress公式スペイン語翻訳に準拠し、以下のような統一を図る：

| English | Español | 注記 |
|---------|---------|------|
| Dashboard | Panel de Control | WordPress管理画面 |
| Plugin | Plugin | そのまま使用 |
| Theme | Tema | |
| Widget | Widget | そのまま使用 |
| Post | Entrada | |
| Page | Página | |
| Settings | Configuración | |
| Media Library | Biblioteca de Medios | |
| Users | Usuarios | |
| Comments | Comentarios | |

### QA Advisor固有用語
英語併記を基本とし、スペイン語圏での理解を助ける：

| English | Español (English) | 用途 |
|---------|------------------|------|
| QA Advisor | QA Advisor | 製品名はそのまま |
| Heatmap | Mapa de Calor (Heatmap) | 初回は併記 |
| Analytics | Análisis (Analytics) | 文脈に応じて |
| Tracking | Seguimiento (Tracking) | |
| Dashboard | Panel de Control | WordPress標準に合わせる |
| Session Recording | Grabación de Sesión | |
| Conversion | Conversión | |
| Bounce Rate | Tasa de Rebote | |

### 技術用語
一般的なWeb開発・マーケティング用語：

| English | Español | 注記 |
|---------|---------|------|
| Website | Sitio Web | |
| Homepage | Página de Inicio | |
| Landing Page | Página de Aterrizaje | |
| Click-through Rate | Tasa de Clics (CTR) | |
| Search Engine Optimization | Optimización para Motores de Búsqueda (SEO) | |
| User Experience | Experiencia del Usuario (UX) | |
| User Interface | Interfaz de Usuario (UI) | |

---

## 🌍 地域別配慮事項

### メキシコ
- **ホスティング**: Hostinger、GoDaddy、Webempresaが人気
- **決済**: PayPal、Stripe、Conektaが一般的
- **特記事項**: 米国との近さからUS英語への馴染みが高い

### スペイン
- **規制**: GDPR準拠が必須
- **ホスティング**: SiteGround、Webempresa（現地）が人気
- **特記事項**: 欧州仕様のプライバシー対応が重要

### アルゼンチン
- **ホスティング**: NicホストIng、DonWeb（現地プロバイダー）
- **決済**: MercadoPago、PayPalが主流
- **特記事項**: 経済状況により海外サービスの利用に制約

### コロンビア
- **ホスティング**: ColombiaHosting、Hostgator
- **対象**: 中小企業のWordPressサイトが多い
- **特記事項**: 価格感度が高い市場

---

## ✍️ 文章作成ガイドライン

### 敬語・丁寧語の使用
```
❌ 悪い例: "Haz clic aquí" (馴れ馴れしい)
✅ 良い例: "Haga clic aquí" (丁寧)

❌ 悪い例: "Instala el plugin"
✅ 良い例: "Instale el plugin"
```

### 文章構造
- **短文を心がける**: 長すぎる文は避け、理解しやすい構造にする
- **能動態を優先**: 受動態より能動態の方が分かりやすい
- **具体例を含める**: 抽象的な説明より具体例を示す

### 技術説明のコツ
```
❌ 悪い例: "Configure las opciones avanzadas del sistema de análisis"
✅ 良い例: "Configure las opciones avanzadas de análisis en el panel de QA Advisor"

❌ 悪い例: "Error en el proceso"
✅ 良い例: "Error durante la instalación del plugin - verifique los permisos de archivo"
```

---

## 🔍 品質チェック基準

### 言語品質
- [ ] スペイン語文法が正確
- [ ] 語彙選択が適切
- [ ] 地域によらず理解可能
- [ ] 専門用語が統一されている

### 技術精度
- [ ] WordPress環境での動作が正確に説明されている
- [ ] 手順が再現可能
- [ ] エラー対応が適切に記載されている
- [ ] スクリーンショット説明が一致している

### ユーザビリティ
- [ ] 初心者にも理解しやすい
- [ ] 段階的な説明になっている
- [ ] 必要な情報が網羅されている
- [ ] 関連リンクが適切に設置されている

---

## 📚 参考リソース

### WordPress公式翻訳
- [WordPress.org スペイン語](https://es.wordpress.org/)
- [WordPress翻訳プロジェクト](https://translate.wordpress.org/locale/es/)
- [WordPress用語集（スペイン語）](https://translate.wordpress.org/locale/es/default/glossary/)

### 言語リファレンス
- [RAE（スペイン王立言語アカデミー）](https://www.rae.es/)
- [Fundéu（文体・語法ガイド）](https://www.fundeu.es/)
- [Microsoft言語ポータル](https://www.microsoft.com/en-us/language/)

### 地域別WordPressコミュニティ
- [WordPress España](https://es.wordpress.org/)
- [WordPress México](https://mx.wordpress.org/)
- [WordPress Argentina](https://ar.wordpress.org/)
- [WordPress Colombia](https://co.wordpress.org/)

---

## 📋 翻訳作業フロー

### 1. 準備段階
1. 原文の内容を十分に理解する
2. 技術的な部分の動作を確認する
3. 関連するWordPress公式翻訳を確認する

### 2. 翻訳実行
1. 専門用語は統一用語集に従う
2. 文体・敬語レベルを統一する
3. 地域特有の配慮事項を含める

### 3. 品質確認
1. スペイン語としての自然さを確認
2. 技術的正確性を検証
3. WordPress環境での実際の表記と照合

### 4. 最終調整
1. 全体の一貫性を確認
2. リンク・参照の正確性を確認
3. 地域差への配慮を最終確認

---

## ⚠️ よくある注意点

### 避けるべき表現
- 機械翻訳特有の不自然な表現
- 地域限定の俗語や方言
- 技術用語の不統一
- 過度に複雑な文章構造

### 特に注意すべき点
- **género（性別）**: スペイン語の名詞は男性/女性があるため、統一する
- **números（数字）**: 地域により小数点表記が異なる（. vs ,）
- **fechas（日付）**: 日付形式の地域差（DD/MM/YYYY vs MM/DD/YYYY）
- **monedas（通貨）**: 各国の通貨表記に注意

---

このガイドラインに従うことで、スペイン語圏のユーザーにとって使いやすく、理解しやすいドキュメントを作成できます。
