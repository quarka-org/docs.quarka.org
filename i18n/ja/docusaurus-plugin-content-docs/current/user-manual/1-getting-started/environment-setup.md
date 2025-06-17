---
sidebar_position: 2
title: 環境セットアップ
---

# 環境セットアップ

QA Advisor が正確にデータを追跡し、最適なパフォーマンスを発揮するために、WordPress 環境を適切に設定することが重要です。このガイドでは、サーバー、WordPress、プラグインの設定について説明します。

## システム要件

### 最小要件
- **WordPress**: バージョン 5.9 以上
- **PHP**: バージョン 7.4 以上
- **MySQL**: バージョン 5.7 以上（または MariaDB 10.2+）
- **メモリ**: 最低 128MB の PHP メモリ制限
- **ディスク容量**: 50MB の利用可能領域

### 推奨仕様
- **WordPress**: 最新の安定版
- **PHP**: バージョン 8.0 以上
- **MySQL**: バージョン 8.0 以上
- **メモリ**: 256MB 以上の PHP メモリ制限
- **ディスク容量**: 200MB 以上の利用可能領域

## サーバー設定

### PHP 設定

最適なパフォーマンスのために、以下の PHP 設定を行ってください：

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### JavaScript の圧縮・最小化

QA Advisor で使用される JavaScript ファイルを圧縮、最小化、または結合**しないでください**。  
一部の最適化プラグインやテーマは、追跡スクリプトの実行を変更または遅延させることで干渉する可能性があります。

> ✅ キャッシュまたは最適化プラグインの設定を確認してください  
> ✅ QA Advisor スクリプトの JS 最小化や defer/async を無効にしてください

技術的な背景については、[jQuery が遅延される場合](/docs/user-manual/getting-started/when-defer-jquery)を参照してください。

### データベース最適化

データベースパフォーマンスの向上のために：

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## WordPress 設定

### wp-config.php 設定

`wp-config.php` ファイルに以下の設定を追加してください：

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## プラグインとテーマの互換性

QA Advisor は主要なプラグインやテーマと連携しますが、以下を推奨します：

- 重要なスクリプトの JavaScript defer/async を無効にする
- キャッシュプラグインが `qa-heatmap-analytics` からの出力を許可することを確認する
- グローバルイベントを変更する他の追跡ツールとの重複を避ける

### キャッシュプラグイン設定

**WP Rocket**: QA Advisor スクリプトを最適化から除外
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: JavaScript 除外に追加  
**WP Super Cache**: 追加設定なしで互換

## CDN とサーバー移行

CDN（例：Cloudflare）を使用している場合、またはサーバーを最近移行した場合：

- すべてのキャッシュをクリアする（ブラウザ、プラグイン、CDN）
- QA Advisor スクリプトがブロックまたは遅延されていないことを確認する
- サーバーのタイムゾーンが正しいことを確認する（データのグループ化に使用）

### Cloudflare 設定

```
URL: *yoursite.com/wp-content/plugins/qa-heatmap-analytics/*
設定:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
```

## セキュリティ設定

### ファイル権限

適切なファイル権限を設定してください：

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### ファイアウォール設定

以下のエンドポイントがアクセス可能であることを確認してください：
- `/wp-admin/admin-ajax.php`（AJAX リクエスト用）
- `/wp-content/plugins/qa-heatmap-analytics/assets/`（静的ファイル用）

## パフォーマンス監視

### 監視すべき主要メトリクス

- **メモリ使用量**: 制限の 80% 未満に保つ
- **ページ読み込み時間**: 3 秒未満を目標
- **データベースクエリ**: 遅いクエリを監視
- **ディスク容量**: QA Advisor データの増加を確認

### 監視ツール

- **Query Monitor** - デバッグ用 WordPress プラグイン
- **New Relic** - APM 監視
- **GTmetrix** - フロントエンドパフォーマンステスト

## トラブルシューティング

### よくある問題

**メモリエラー**:
```php
ini_set('memory_limit', '512M');
```

**タイムアウト問題**:
```php
set_time_limit(300);
```

**スクリプト読み込み問題**:
1. ブラウザコンソールで JavaScript エラーを確認
2. キャッシュプラグインの除外設定を確認
3. ファイアウォール設定を確認

### スクリプト確認

追跡スクリプトが正しく読み込まれていることを確認するには：

1. **ログインしていない状態**でウェブサイトにアクセス
2. 右クリックして「ページのソースを表示」を選択
3. HTML で `qahm` または `qahmz` を検索

> これらの文字列が見つからない場合、スクリプトがブロックされているか読み込まれていない可能性があります。  
> JavaScript エラーやプラグインの競合を確認してください。

## 次のステップ

環境セットアップ後：

1. [データ制限の設定](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [jQuery 競合の処理](/docs/user-manual/getting-started/when-defer-jquery)
3. [ダッシュボードの探索](/docs/user-manual/screens-and-operations/dashboard)

---
