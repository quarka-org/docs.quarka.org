---
sidebar_position: 0
---

# ユーザーガイド

### QA Assistants とは？
**QA Assistants は、WordPress サイトのデータをもとに動く「データ駆動アシスタント」です。**  
ダッシュボードを眺めるだけでなく、**データが語る傾向や気づき**を短く整理して示します。   
また、**アナリティクス機能を内蔵**しており、**ヒートマップ**や**セッションリプレイ**でユーザー行動を可視化・検証できます。

#### コア価値（何がうれしい？）
- **意思決定が速い**：データから「やるべきこと」を言語化して提示（AIアシスタント）
- **現状把握がラク**：必要十分な指標に絞ったビューと、Simple/Advanced の**表示モード切替**
- **深掘りまで一気通貫**：**ヒートマップ／セッションリプレイ**で原因仮説を素早く検証
- **WordPress環境で使いやすい設計**：余計な外部依存を避け、**管理画面だけで設定〜確認まで完結**

---

## 機能カテゴリ（できること）

### AIアシスタント（Assistants）
用途別に**次アクション**を提案：ページ分析／急上昇の検出／ソーシャル示唆／要約 など。  
→ `/docs/user-manual/assistants/overview`  
→ 公式カタログ: https://quarka.org/assistants/

### アナリティクス
**Audience / Acquisition / Landing Pages / Top Growing / All Pages / Goals / Realtime** を搭載。  
必要に応じて Simple/Advanced を切り替えて使います。  
→ `/docs/user-manual/screens-and-operations`

### 可視化と再現
- **ヒートマップ**：どこで迷い、どこが効いているかを視覚的に把握  
  → `/docs/user-manual/screens-and-operations/heatmap`
- **セッションリプレイ**：実際の動線を再生してボトルネックを特定  
  → `/docs/user-manual/screens-and-operations/session-replay`

---

## 表示モードの考え方

表示モードは **「各レポート内の切替」ではなく、表示されるメニューの範囲** を切り替える機能です。

- **シンプル（既定）** に表示：**AIアシスタント（Assistants） / Realtime / Audience / Settings / Help**
- **アドバンスド** では、さらに：**Acquisition / Landing Pages / Top Growing / All Pages / Goals** が追加表示

アドバンスドモードの有効化：**Settings → Advanced Mode**

---

## メニュー早見表（表示可否 / ヒートマップ & セッションリプレイ）

> **Simple / Advanced** は、そのモードでメニューが表示されるかどうかを示します。

| メニュー | Simple | Advanced | 目的 | ヒートマップ | セッションリプレイ |
|---|:---:|:---:|---|:---:|:---:|
| **AIアシスタント（Assistants）** | ✔ | ✔ | タスク特化型アシスタント（例：ページ分析、ソーシャル、概要） | – | – |
| **Realtime** | ✔ | ✔ | リアルタイムの訪問・行動 | – | ✔ |
| **Audience** | ✔ | ✔ | サイト全体のオーディエンスとセッション | – | ✔ |
| **Acquisition** |  | ✔ | 流入元とキャンペーン効果 | – | – |
| **Landing Pages** |  | ✔ | 流入（入口）ページの評価 | ✔ | – |
| **Top Growing** |  | ✔ | 伸びが目立つページの把握 | ✔ | – |
| **All Pages** |  | ✔ | 全ページの横断比較 | ✔ | – |
| **Goals** |  | ✔ | コンバージョンとゴール達成 | ✔ | ✔ |
| **Settings** | ✔ | ✔ | 設定（モード切替を含む） | – | – |
| **Help** | ✔ | ✔ | ヘルプ & サポート（ドキュメント / サポートフォーラム / デバッグ情報） | – | – |

---

## AIアシスタントの概要

**AIアシスタント** は、**「AIアシスタント（Assistants）」メニュー** から有効化できる追加機能のアシスタント群です。  
サイトのデータ状況に応じて、文脈に合った示唆や次に取るべきアクションを提案します。

- 📌 [AIアシスタントとは？](/docs/user-manual/assistants/overview)
- 🧩 [AIアシスタントを探す ↗︎（公式サイト）](https://quarka.org/assistants/)

---

## ガイド構成

### 1) はじめに（Getting Started）
インストール、初期設定、よくある質問。  
→ /docs/user-manual/getting-started

### 2) レポート（画面一覧）
Audience / Acquisition / Landing Pages / Top Growing / All Pages / Goals / Realtime の見方と、アドバンスドモードの使いどころ。
→ /docs/user-manual/screens-and-operations

### 3) Assistants
*coming soon*
できること、導入方法、実践例。  
→ /docs/user-manual/assistants/overview  

- 🧩 [AIアシスタントを探す ↗︎（公式サイト）](https://quarka.org/assistants/)

### 4) ヘルプ & サポート
本ドキュメント、サポートフォーラム、デバッグ情報へのリンク。  
→ /docs/user-manual/help


