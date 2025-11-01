---
title: qa-config.php を設定する
sidebar_position: 4
---

# 月間PV上限とデータ保存期間を変更する

**目的**：1つのファイルを編集して、**月間PV上限**と**データの保存期間**を変更します。

---

## 1) 編集するファイル

- パス：`wp-content/qa-zero-data/qa-config.php`
- 既定値が入ったファイルが **すでに存在** します。
- プラグインフォルダ内（`wp-content/plugins/qa-heatmap-analytics/qa-config.php`）の同名ファイルは**テンプレート**であり、**読み込まれません**。

:::caution 編集前の注意
このページで説明している **2つの設定（「月間PV上限」「データ保存期間」）だけ** を編集してください。  
それ以外の行は変更しないでください。メモなどの **PHPコメント（例：`// note`）** を追加するのは安全です。
:::

<details>
<summary>他に見かける可能性がある定数（変更しないでください）</summary>

```
QAHM_CONFIG_USE_LSCMD_LISTFILE
QAHM_CONFIG_TWO_SYSTEM_MODE
QAHM_CONFIG_SYSTEM_MODE
QAHM_CONFIG_CPROC_NUM_MAX
QAHM_CONFIG_RCNK_MAX
QAHM_CONFIG_SOCIAL_REFERRER
QAHM_CONFIG_BEHAVIORAL_SEND_INTERVAL
QAHM_CONFIG_HTML_DIFF_DETECTION_MODE
```
*（バージョンにより名称が異なる場合があります。）*

</details>

---

## 2) 編集方法

`wp-content/qa-zero-data/qa-config.php` を次のいずれかの方法で開きます：

- レンタルサーバーのファイルマネージャー（その場で編集）
- FTP/SFTP/SSH（ダウンロード → 編集 → アップロード）
- サーバー側エディタ（例：SSH + vim/nano）

### A) **月間PV上限** を変更する

1. 次の行を探します（ない場合は追加します）：
```php
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 10000 ); // Monthly PV limit (integer, >= 1)
```
2. `10000` を希望の上限値（**1以上の整数**）に置き換えます。  
   例：
```php
// 小規模サイト
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 10000 );

// ステージング / テスト
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 2000 );

// 高トラフィック（サーバー容量に合わせて調整）
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 50000 );
```
3. ファイルを保存（またはアップロード）します。

### B) **データ保存期間（日数）** を変更する

1. 次の行を探します（ない場合は追加します）：
```php
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 120 ); // Data retention in days (integer, >= 1)
```
2. `120` を保持したい日数（**1以上の整数**）に置き換えます。  
   例：
```php
// 本番運用
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 120 );

// ステージング / テスト
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 14 );

// より長い期間
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 180 );
```
3. ファイルを保存（またはアップロード）します。

> 両設定の入力ルール：**1以上の整数** を使用してください。`0` や負の値は無効です。

---

## 3) 反映の確認方法

1. WordPress 管理画面で **QA Assistant → Settings → General Settings** を開きます。
2. **Data retention & limits** のセクションを確認します。
   - `wp-content/qa-zero-data/qa-config.php` で設定した **月間PV上限** と **データ保存期間** がここに表示されます。
3. レポートへの反映について：
   - **月間PV上限** は新規データに即時適用されます。
   - **データ保存期間** に基づく古いデータの削除は **毎晩1回** 自動で行われます（タイミングは固定で、ユーザー側で変更できません）。

---

## トラブルシューティング

- **編集したのに変更が反映されない**  
  → `wp-content/qa-zero-data/qa-config.php` を編集したか（プラグイン内のテンプレートではないか）確認してください。

- **データがすぐに減らない**  
  → 古いデータのクリーンアップは **夜間の自動処理** で実行されます。スケジュールは固定で、プラグインからは変更できません。

- **数値が拒否された**  
  → **整数のみ**、かつ **1以上** を使用してください。

---

## 備考（任意）

- 編集前に簡易バックアップ（例：`qa-config.php.bak`）を残すことをおすすめします。
- `wp-content/qa-zero-data/qa-config.php` は **リポジトリにコミットしない** でください。

