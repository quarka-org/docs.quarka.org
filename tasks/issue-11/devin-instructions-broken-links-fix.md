# Devin 指示書: Docusaurus 日本語版ブロークンリンクエラー修正

## タスク概要

**プロジェクト**: QA Advisor ドキュメントサイト (docs.quarka.org)  
**対象リポジトリ**: https://github.com/quarka-org/docs.quarka.org  
**ブランチ**: `feature/i18n-phase1-japanese-support`  
**予想ACU**: 2-5 ACU (10-15分)

## 目的

日本語版ドキュメントのビルドエラーを修正し、正常にビルドが完了するようにする。

## 問題の詳細

現在、Docusaurus の日本語版ビルドで以下のブロークンリンクエラーが発生している：

### エラー内容
```
Docusaurus found broken links!

Exhaustive list of all broken links found:
- Broken link on source page path = /ja/docs/user-manual/screens-and-operations/goals:
   -> linking to ./01-dashboard.md (resolved as: /ja/docs/user-manual/screens-and-operations/01-dashboard.md)
   -> linking to ./05-acquisition.md (resolved as: /ja/docs/user-manual/screens-and-operations/05-acquisition.md)
   -> linking to ./06-landing-pages.md (resolved as: /ja/docs/user-manual/screens-and-operations/06-landing-pages.md)
   -> linking to ./11-settings.md (resolved as: /ja/docs/user-manual/screens-and-operations/11-settings.md)

- Broken link on source page path = /ja/docs/user-manual/screens-and-operations/help:
   -> linking to ./11-settings.md (resolved as: /ja/docs/user-manual/screens-and-operations/11-settings.md)
   -> linking to ./01-dashboard.md (resolved as: /ja/docs/user-manual/screens-and-operations/01-dashboard.md)

- Broken link on source page path = /ja/docs/user-manual/screens-and-operations/license-activation:
   -> linking to ./11-settings.md (resolved as: /ja/docs/user-manual/screens-and-operations/11-settings.md)
   -> linking to ./01-dashboard.md (resolved as: /ja/docs/user-manual/screens-and-operations/01-dashboard.md)
```

## 根本原因

日本語版ファイルの相対リンクが、ファイル名ベース（例：`./01-dashboard.md`）で記述されているが、実際のDocusaurusの生成されるURLパス（例：`/docs/user-manual/screens-and-operations/dashboard`）と一致しない。

## 修正手順

### ステップ 1: 対象ファイルの特定

以下の日本語版ファイルを修正する：

1. `i18n/ja/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/10-goals.md`
2. `i18n/ja/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/12-license-activation.md`
3. `i18n/ja/docusaurus-plugin-content-docs/current/user-manual/2-screens-and-operations/13-help.md`

### ステップ 2: リンク修正パターン

以下のパターンでリンクを修正する：

#### 修正前（NG）
```markdown
[ダッシュボード](/docs/user-manual/screens-and-operations/01-dashboard)
[獲得](/docs/user-manual/screens-and-operations/05-acquisition)
[ランディングページ](/docs/user-manual/screens-and-operations/06-landing-pages)
[設定](/docs/user-manual/screens-and-operations/11-settings)
```

#### 修正後（OK）
```markdown
[ダッシュボード](/docs/user-manual/screens-and-operations/dashboard)
[獲得](/docs/user-manual/screens-and-operations/acquisition)
[ランディングページ](/docs/user-manual/screens-and-operations/landing-pages)
[設定](/docs/user-manual/screens-and-operations/settings)
```

### ステップ 3: 修正対象箇所

各ファイルの**最下部の「関連機能」セクション**で相対リンクを修正する：

#### 10-goals.md の修正箇所
```markdown
## 関連機能

- [ダッシュボード](/docs/user-manual/screens-and-operations/dashboard) - 総合的な分析データ
- [オーディエンス](/docs/user-manual/screens-and-operations/audience) - ユーザーセグメント分析
- [獲得](/docs/user-manual/screens-and-operations/acquisition) - トラフィック獲得分析
```

#### 12-license-activation.md の修正箇所
```markdown
## 関連機能

- [設定](/docs/user-manual/screens-and-operations/settings) - 基本設定の管理
- [ヘルプ](/docs/user-manual/screens-and-operations/help) - サポートとヘルプ
- [ダッシュボード](/docs/user-manual/screens-and-operations/dashboard) - 機能の利用状況確認
```

#### 13-help.md の修正箇所
```markdown
## 関連機能

- [設定](/docs/user-manual/screens-and-operations/settings) - 基本設定とカスタマイズ
- [ライセンス有効化](/docs/user-manual/screens-and-operations/license-activation) - ライセンス管理
- [ダッシュボード](/docs/user-manual/screens-and-operations/dashboard) - メイン分析画面
```

## 成功条件

1. **ビルドエラーの解消**: `npm run build` コマンドがエラーなしで完了する
2. **リンクの機能確認**: 修正したリンクが正しいページに遷移する
3. **既存の翻訳品質保持**: リンクテキストの日本語翻訳を維持する

## 技術要件

- **プラットフォーム**: Docusaurus v3.7.0
- **言語**: Markdown
- **リンク形式**: Docusaurus の内部リンク形式に準拠

## 検証手順

### 1. ローカルビルドテスト
```bash
npm run build
```

### 2. 開発サーバーでの確認
```bash
npm run start -- --locale ja
```

### 3. リンク動作確認
修正したリンクが正しく機能することを確認する

## 注意事項

1. **ファイル名変更の禁止**: ファイル名自体は変更せず、リンクのURLパス部分のみを修正する
2. **翻訳内容の保持**: リンクテキストの日本語翻訳は変更しない
3. **他ファイルへの影響確認**: 修正により他のファイルに影響がないことを確認する

## 期待される結果

- 日本語版サイトがエラーなしでビルドされる
- すべての内部リンクが正常に機能する
- ユーザーが日本語版ドキュメントを正常に閲覧できる

---

**担当者**: Devin AI  
**優先度**: 高（ビルドエラーのため）  
**関連Issue**: GitHub Issue #11  
**作業ブランチ**: `feature/i18n-phase1-japanese-support`