# リリース告知 投稿テンプレート

リリース時のお知らせ用テンプレート。プラグイン側「What's New」枠の表示元になる。

## 使い方

1. ファイル配置先:
   - 英語版: `blog/vX-X-X-X.md`
   - 日本語版: `i18n/ja/docusaurus-plugin-content-blog/vX-X-X-X.md`
2. ファイル名は両方同じにする（blog ディレクトリからの相対パスが一致しないと、翻訳版として結び付かない）
3. `date: YYYY-MM-DD` を必ず書く。ファイル名に日付を持たせない運用なので、これが唯一の日付源になる
4. `tags: [release]` を必ず付ける（プラグインのフィルタ条件）
5. `slug` はバージョン番号（例: `v5-4-0-0`）。ファイル名と揃える
6. `<!-- truncate -->` より上が一覧の抜粋になるので、最初の段落で要点を伝える

年別のフォルダは作らない。投稿一覧の年見出しは `date` から自動で付く。

## 投稿の判断基準

- 機能追加・大きな改善・重要な修正など、**ユーザーに知らせる価値がある更新**のみ投稿
- 軽微な内部改善や細かな修正は個別投稿せず、月次まとめか開発後記に組み込む
- 詳細な変更履歴は `readme.txt` の Changelog セクションで担保（このブログには書かない）

## チェックポイント

- [ ] 重要更新ならスクリーンショットを最低 1 枚入れる（Before/After の対比を意識）
- [ ] 英語版・日本語版で `slug` `date` `tags` を一致させる
- [ ] タイトルは「vX.X.X.X — ○○」形式

## 英語版テンプレート（重要更新）

`blog/YYYY-MM-DD-vX-X-X-X.md` に配置:

```markdown
---
slug: vX-X-X-X
title: vX.X.X.X — Added ○○ Feature
tags: [release]
date: YYYY-MM-DD
---

vX.X.X.X has been released, featuring **a new ○○ functionality** and improvements.

<!-- truncate -->

## ✨ New Feature

### ○○

(Screenshot)

(Description, use cases)

## 🔧 Improvements

- ...

## 🐛 Bug Fixes

- ...
```

## 英語版テンプレート（軽微な更新／月次まとめ）

軽微な修正の独立告知や月次まとめの場合、英語版はスタブ程度で OK:

```markdown
---
slug: vX-X-X-X
title: vX.X.X.X — Patch Release
tags: [release]
date: YYYY-MM-DD
---

vX.X.X.X has been released with bug fixes and minor improvements.

> 📝 Detailed release notes are available in Japanese.
> See [Japanese version](/ja/blog/vX-X-X-X) for the full content.

<!-- truncate -->

- Bug fix: ...
- Improvement: ...
```

## 日本語版テンプレート

`i18n/ja/docusaurus-plugin-content-blog/YYYY-MM-DD-vX-X-X-X.md`:

```markdown
---
slug: vX-X-X-X
title: vX.X.X.X — ○○機能を追加しました
tags: [release]
date: YYYY-MM-DD
---

vX.X.X.X をリリースしました。今回は **○○機能の追加** と **△△ の改善** が主な変更です。

<!-- truncate -->

## ✨ 新機能

### ○○機能

(スクリーンショット)

(機能の説明、使い方、想定シーン)

## 🔧 改善

- △△ の表示を見やすく改善

## 🐛 不具合修正

- ...
```
