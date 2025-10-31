---
sidebar_position: 1
---

# 開発者マニュアル

QA Assistant 開発者マニュアルへようこそ。ここでは、QAL（Query Assistant Language）を通してデータ駆動アシスタントの可能性を最大限に引き出す方法をお伝えします。

---

## アナリティクスの未来：データと対話する

Webサイトのデータに自然言語で質問できることを想像してみてください。

> 「先週モバイルユーザーが訪問した上位10ページを表示して」

ダッシュボードをクリックする代わりに、データに**質問**するだけです。これが**データ駆動アシスタント**としてのQA Assistantのビジョンです — アナリティクスがレポートではなく、会話になる世界です。

---

## QA Assistant API（プレビュー版）のご紹介

すべてのアナリティクスデータへのアクセスを提供するREST APIを開発中です。カスタムダッシュボードの構築、AIツールとの統合、レポートの自動化など、APIがあなたのゲートウェイになります。

### なぜ重要なのか

**開発者の方へ：**
- データ駆動アシスタントを作成する（プラグインで追加可能）
- データエクスポートとレポートを自動化
- クライアント向けのパーソナライズされたダッシュボードを作成

**AI愛好家の方へ：**
- QA AssistantをClaude、ChatGPT、その他のAIツールに接続
- AIにトラフィックパターンを分析させ、改善を提案させる
- Webサイトの動作を理解し、自動で稼働するAIデータ駆動アシスタントを構築

**パワーユーザーの方へ：**
- BigQueryやLooker Studioに接続する
- QA Assistantデータを他のソースと組み合わせる
- スクリプトで自動化されたレポートをスケジュール

---

## QAL（Query Assistant Language）とは？

APIの中核にあるのは**QAL**（Query Assistant Language）です — データ駆動アシスタントがデータを自由に扱うための言語です。QALはSQLのような自由度の高い言語ではなく、QAの列指向構造に特化して設計されています。

**QALの設計思想：**
- **経路の明示**：データの参照経路（マテリアル→ビュー→結果）を明確に記述
- **決定性**：同じクエリは必ず同じ結果を返す
- **最小仕様**：AIも人間も誤解しない、必要最小限の構文

### QALの基本構造

QALクエリは以下の4つの要素で構成されます：

1. **materials**：元となるデータソース（マテリアル）を指定
2. **time**：分析期間を明示的に指定（相対的な指定は不可）
3. **make**：マテリアルから中間ビューを段階的に構築
4. **result**：最終的に返すビューを指定

### QALの一例

ブログページのページビュー集計をリクエストする方法は次のとおりです：

```json
{
  "tracking_id": "your-site-id",
  "materials": [
    { "name": "allpv" }
  ],
  "time": {
    "start": "2025-10-01T00:00:00",
    "end": "2025-10-31T00:00:00",
    "tz": "Asia/Tokyo"
  },
  "make": {
    "blog_pages": {
      "from": ["allpv"],
      "filter": {
        "and": [
          { "like": { "col": "allpv.url", "val": "%/blog/%" } },
          { "eq": { "col": "allpv.device_type", "val": "smp" } }
        ]
      },
      "keep": ["allpv.url", "allpv.title"],
      "calc": {
        "pageviews": "COUNT(allpv.pv_id)",
        "sessions": "COUNTUNIQUE(allpv.reader_id)"
      }
    }
  },
  "result": {
    "use": "blog_pages",
    "sort": [{ "by": "pageviews", "dir": "desc" }],
    "limit": 10
  }
}
```

**このクエリの動作：**
1. `allpv`マテリアルから2025年10月のデータを取得
2. URLに「/blog/」を含み、デバイスタイプがモバイル（smp）のデータにフィルタ
3. URL別にページビュー数とセッション数を集計
4. ページビュー数の降順で上位10件を返す

---

## QALの特徴

### 1. 明示的な時間指定

QALでは相対的な時間指定（「昨日」「先週」など）は使えません。必ず具体的な日時を指定します：

```json
"time": {
  "start": "2025-10-01T00:00:00",
  "end": "2025-10-31T00:00:00",
  "tz": "Asia/Tokyo"
}
```

これにより、クエリの実行時期に関わらず、常に同じ結果が得られます。

### 2. データの経路を明示

QALでは、データの流れを段階的に構築します：

```json
"make": {
  "step1": {
    "from": ["allpv"],
    "keep": ["allpv.url", "allpv.reader_id"],
    "filter": {
      "and": [
        { "like": { "col": "allpv.url", "val": "%/blog/%" } }
      ]
    }
  },
  "step2": {
    "from": ["step1"],
    "keep": ["step1.url"],
    "calc": {
      "sessions": "COUNTUNIQUE(step1.reader_id)"
    }
  }
}
```

### 3. 制限された集計関数

QALで使える集計関数は以下の6つのみです：

- `COUNT(column)` - 行数をカウント
- `COUNTUNIQUE(column)` - ユニーク値をカウント
- `SUM(column)` - 合計値を計算
- `AVERAGE(column)` - 平均値を計算
- `MIN(column)` - 最小値を取得
- `MAX(column)` - 最大値を取得

### 4. 完全修飾名の使用

列名は常に `<マテリアル名>.<列名>` または `<ビュー名>.<列名>` の形式で指定します：

```json
"keep": ["allpv.url", "allpv.title"],
"calc": {
  "pageviews": "COUNT(allpv.pv_id)"
}
```

---

## 実際のユースケース

### 1. デバイス別トラフィック分析

モバイルとデスクトップのトラフィックを比較：

```json
{
  "tracking_id": "your-site-id",
  "materials": [{ "name": "allpv" }],
  "time": {
    "start": "2025-10-01T00:00:00",
    "end": "2025-10-31T00:00:00",
    "tz": "Asia/Tokyo"
  },
  "make": {
    "device_stats": {
      "from": ["allpv"],
      "keep": ["allpv.device_type"],
      "calc": {
        "sessions": "COUNTUNIQUE(allpv.reader_id)",
        "pageviews": "COUNT(allpv.pv_id)",
        "avg_time": "AVERAGE(allpv.page_msec)"
      }
    }
  },
  "result": { "use": "device_stats" }
}
```

### 2. キャンペーン効果測定

UTMキャンペーン別のパフォーマンスを分析：

```json
{
  "tracking_id": "your-site-id",
  "materials": [
    { "name": "allpv" }
  ],
  "time": {
    "start": "2025-10-01T00:00:00",
    "end": "2025-10-31T00:00:00",
    "tz": "Asia/Tokyo"
  },
  "make": {
    "campaign_performance": {
      "from": ["allpv"],
      "filter": {
        "and": [
          { "like": { "col": "allpv.utm_campaign", "val": "%sale%" } }
        ]
      },
      "keep": ["allpv.utm_campaign", "allpv.utm_source"],
      "calc": {
        "sessions": "COUNTUNIQUE(allpv.reader_id)",
        "pageviews": "COUNT(allpv.pv_id)",
        "avg_time": "AVERAGE(allpv.page_msec)"
      }
    }
  },
  "result": {
    "use": "campaign_performance",
    "sort": [{ "by": "sessions", "dir": "desc" }],
    "limit": 20
  }
}
```

**このクエリの動作：**
1. `allpv`マテリアルから2025年10月のデータを取得
2. UTMキャンペーンに「sale」を含むトラフィックをフィルタ
3. キャンペーンとソース別にセッション数、ページビュー数、平均滞在時間を集計
4. セッション数の降順で上位20件を返す

### 3. AI駆動のインサイト

MCP（Model Context Protocol）経由でQA AssistantをClaudeに接続すれば、自然言語でデータを分析できます：

```
あなた: 今月最もオーガニックトラフィックを獲得しているブログ投稿を教えて
Claude: [QALクエリを生成して実行] 
        オーガニックトラフィックのトップ5投稿は...
```

AIアシスタントはQALを生成し、結果を自然な言葉で説明してくれます。

---

## 利用可能なマテリアル（データソース）

QALでアクセスできる主なマテリアル：

### 📊 統合ページビューログ（`allpv`）

QA Assistantの中核となる統合データソースです。ページビュー、セッション、UTMキャンペーン、デバイス情報など、Webサイトの行動データがすべて含まれています：

**基本情報：**
- URL、タイトル、リファラー
- ページ滞在時間、スクロール深度
- タイムスタンプ

**訪問者情報：**
- 読者ID、セッションID
- デバイスタイプ、ブラウザ、OS
- 国、地域情報

**マーケティング情報：**
- UTMパラメータ（utm_source, utm_medium, utm_campaign）
- キャンペーンID
- 流入元チャネル

**エンゲージメント指標：**
- ページビュー、セッション
- 精読率、迷いスコア（今後追加予定）
- コンバージョンイベント

### 🔍 Search Consoleデータ（`gsc`）

検索パフォーマンスデータ：
- キーワードとクエリ
- クリック数、インプレッション数、CTR
- 検索での表示形式
- 経時的なランキング

QA Assistantの設計思想として、データを**1つの統合されたマテリアル**（`allpv`）に集約することで、複雑なJOIN操作を不要にし、ユーザーにとって直感的で理解しやすいデータ構造を実現しています。今後もユーザー行動に関する様々な指標が`allpv`に追加されていきます。

---

## データ駆動アシスタントの未来

QA AssistantとQALが実現する未来：

**今日：** レポートを確認して何が起こったかを理解する

**明日：** アシスタントが何が起こっているか、そしてその理由を積極的に教えてくれる

**未来：** アシスタントが何が起こるかを予測し、アクションを提案する

### プラグインで拡張可能

QA Assistantは、プラグインで自由にアシスタントを増やすことができます。これにより、毎回大変だったレポート作業を会話形式で簡単に終わらせることができるようになります。

**QALとAPIが可能にすること：**

- **AI統合**：言語モデルにアナリティクスを分析させる
- **自動化**：データパターンに応答するワークフローを構築
- **カスタマイゼーション**：正確なニーズに合わせた体験を作成
- **イノベーション**：まだ想像もしていないツールを構築

---

## レスポンス形式

QAL APIは、データの返却形式を柔軟に選択できます：

### JSON形式（インライン）

小規模なデータセット（最大5万行）の場合：

```json
{
  "data": [
    {
      "url": "/blog/article-1",
      "pageviews": 1250,
      "sessions": 890
    },
    {
      "url": "/blog/article-2",
      "pageviews": 980,
      "sessions": 720
    }
  ],
  "meta": {
    "truncated": false,
    "row_count": 2
  }
}
```

### ファイル形式（CSV/Parquet）

大規模なデータセットの場合、ファイルURLが返されます：

```json
{
  "data_url": "https://api.qa-assistant.com/results/abc123.csv",
  "meta": {
    "truncated": false,
    "row_count": 125000,
    "format": "csv"
  }
}
```

`result`セクションで形式を指定：

```json
"result": {
"use": "my_view",
"return": {
"mode": "FILE",
"format": "CSV"
}
}
```

---

## いつ使えるようになるか？

APIは現在**積極的に開発中**です。設計の改良、初期ユーザーとのテスト、包括的なドキュメントの準備を進めています。

**現在の進捗状況：**
- ✅ コアAPIデザイン完了
- ✅ QAL仕様確定
- 🚧 開発者ドキュメント作成中
- 🚧 クライアントライブラリとサンプル作成中
- 🚧 AI統合用MCPサーバー開発中

**早期アクセスをご希望ですか？**

早期テスターに興味がある方、または特定のユースケースをお持ちの方は、ぜひお知らせください。[GitHub Issues](https://github.com/quarka-org)または[QA Assistant Meetup](https://www.meetup.com/ja-jp/qa-analytics-meetup/)にご参加ください。

---

## 最新情報をチェック

この開発者マニュアルは開発の進捗に応じて定期的に更新されます。このページをブックマークして、以下をチェックしてください：

- QAL仕様の更新とベストプラクティス
- コード例とチュートリアル
- 早期アクセスのお知らせ
- 統合ガイドとMCPサーバー情報

**質問やアイデアがありますか？** [GitHub Issues](https://github.com/quarka-org)または[QA Assistant Meetup](https://www.meetup.com/ja-jp/qa-analytics-meetup/)で共有ください。あなたのフィードバックがデータ駆動アシスタントの未来を形作ります。