---
sidebar_position: 3
title: jQuery 遅延読み込み時の対応
---

# jQuery 遅延読み込み時の対応

WordPress サイトのパフォーマンス最適化のために jQuery を遅延読み込み（defer）している場合、QA Assistants の追跡スクリプトが正常に動作しない可能性があります。このガイドでは、その対処方法をご説明します。

## 問題の概要

QA Assistants は jQuery ライブラリに依存して動作します。jQuery が遅延読み込みされている場合、以下の問題が発生する可能性があります：

- 追跡スクリプトが jQuery の読み込み完了前に実行される
- JavaScript エラーが発生し、データ収集が停止する
- ヒートマップ (Heatmap) やクリック追跡 (Click Tracking) が機能しない

## 対処方法

### 方法 1: QA Assistants スクリプトの除外（推奨）

最も簡単な解決方法は、QA Assistants の追跡スクリプトを遅延読み込みの対象から除外することです。

#### 一般的な最適化プラグインでの設定

**Autoptimize の場合：**
1. WordPress 管理画面で **設定** → **Autoptimize** に移動
2. **JavaScript オプション** セクションを開く
3. **除外するスクリプト** フィールドに以下を追加：
   ```
   qahm, qahmz
   ```

**WP Rocket の場合：**
1. **設定** → **WP Rocket** に移動
2. **ファイル最適化** タブを選択
3. **JavaScript ファイル** セクションで **除外するファイル** に以下を追加：
   ```
   /wp-content/plugins/qa-heatmap-analytics/
   ```

**LiteSpeed Cache の場合：**
1. **LiteSpeed Cache** → **ページ最適化** に移動
2. **JS 設定** タブを選択
3. **JS 除外** フィールドに以下を追加：
   ```
   qa-heatmap-analytics
   ```

### 方法 2: jQuery の除外

jQuery 自体を遅延読み込みの対象から除外する方法：

1. 使用している最適化プラグインの設定画面に移動
2. JavaScript 除外設定で `jquery` を除外リストに追加
3. 設定を保存してキャッシュをクリア

### 方法 3: カスタムコードでの対応

テーマの `functions.php` ファイルに以下のコードを追加して、QA Assistants スクリプトの読み込み順序を制御できます：

```php
function qa_advisor_script_priority() {
    // QA Assistants スクリプトの優先度を下げる
    wp_dequeue_script('qahm-frontend');
    wp_enqueue_script('qahm-frontend', 
        plugin_dir_url(__FILE__) . 'path/to/qahm-script.js', 
        array('jquery'), 
        '1.0', 
        true // フッターで読み込み
    );
}
add_action('wp_enqueue_scripts', 'qa_advisor_script_priority', 20);
```

## 設定の確認方法

### 1. ブラウザ開発者ツールでの確認

1. サイトのフロントエンドにアクセス
2. ブラウザで F12 キーを押して開発者ツールを開く
3. **コンソール** タブでエラーがないことを確認
4. **ネットワーク** タブで QA Assistants スクリプトが正常に読み込まれていることを確認

### 2. QA Assistants 管理画面での確認

1. WordPress 管理画面にログイン
2. **QA Assistants** → **リアルタイム** に移動
3. 別のブラウザまたはシークレットモードでサイトにアクセス
4. リアルタイムビューにアクティビティが表示されることを確認

### 3. ページソースでの確認

1. サイトのページソースを表示
2. 以下のスクリプトタグが存在することを確認：
   ```html
   <script src="...qa-heatmap-analytics..."></script>
   ```
3. jQuery が QA Assistants スクリプトより前に読み込まれていることを確認

## よくある問題と解決方法

### 問題: コンソールに「$ is not defined」エラーが表示される

**解決方法:**
- jQuery が QA Assistants スクリプトより後に読み込まれています
- jQuery を除外リストから削除するか、QA Assistants スクリプトの読み込み順序を調整してください

### 問題: ヒートマップが表示されない

**解決方法:**
1. ブラウザキャッシュをクリア
2. QA Assistants スクリプトが除外設定に含まれていることを確認
3. **QA Assistants** → **設定** でヒートマップ機能が有効になっていることを確認

### 問題: クリック追跡が動作しない

**解決方法:**
1. JavaScript エラーがないことを確認
2. QA Assistants スクリプトが正常に読み込まれていることを確認
3. 必要に応じて最適化プラグインの設定を見直し

## パフォーマンスへの影響

QA Assistants スクリプトを遅延読み込みから除外することによるパフォーマンスへの影響は最小限です：

- QA Assistants スクリプトは軽量（通常 10KB 未満）
- 非同期で動作するため、ページ読み込みをブロックしません
- 必要最小限の処理のみを実行

---

次は [データ制限の設定](/docs/user-manual/getting-started/configure-qa-config) について学びましょう。
