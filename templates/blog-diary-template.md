# 開発後記 投稿テンプレート

月 1 ペースの「QA Platform 全体の中の人」視点コンテンツ。リリース告知ではなく、開発の様子・考えていることを共有する読み物。

## 使い方

1. 配置先:
   - 英語版: `blog/YYYY-MM-DD-YYYY-MM-diary.md`（スタブで OK）
   - 日本語版: `i18n/ja/docusaurus-plugin-content-blog/YYYY-MM-DD-YYYY-MM-diary.md`（本文を記載）
2. `tags: [diary]` を必ず付ける
3. 英語版は最小スタブで OK
4. `slug` は `YYYY-MM-diary` 形式

## 含めると良い要素

- 今月のテーマ（1〜2 段落）
- 取り組んだこと（スクショ・GIF を交えて 2〜3 個）
- 考えていたこと（なぜそうしたか、検討した選択肢）
- 次にやろうとしていること（フィードバックのフック）
- 今月のリリース（マイナー含めた箇条書き）

## 含めないもの

- 内部実装の細かい技術的詳細
- 未確定の方針

## 英語版テンプレート（スタブ）

`blog/YYYY-MM-DD-YYYY-MM-diary.md`:

```markdown
---
slug: YYYY-MM-diary
title: YYYY-MM Development Notes
tags: [diary]
date: YYYY-MM-DD
---

A monthly update from the QA Assistants development team.

> 📝 The full development notes are written in Japanese.
> See [Japanese version](/ja/blog/YYYY-MM-diary) for the full content.

<!-- truncate -->

This month's highlights:
- ...
```

## 日本語版テンプレート

`i18n/ja/docusaurus-plugin-content-blog/YYYY-MM-DD-YYYY-MM-diary.md`:

```markdown
---
slug: YYYY-MM-diary
title: YYYY年MM月の開発後記
tags: [diary]
date: YYYY-MM-DD
---

MM 月の開発状況をお伝えします。

<!-- truncate -->

## 今月のテーマ

(その月に取り組んだ大きなテーマを 1〜2 段落で)

## 取り組んだこと

(スクショや GIF を交えてハイライトを 2〜3 個)

## 考えていたこと

(なぜそれをしたのか、どんな選択肢を検討したか)

## 次にやろうとしていること

(直近の予定、フィードバックのフック)

## 今月のリリース

- vX.X.X.X (M/D) — XXX を修正
- vX.X.X.X (M/D) — YYY を改善
```
