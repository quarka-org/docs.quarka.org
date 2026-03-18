---
title: Cookie同意ツールの設定
sidebar_position: 40
---

# Cookie同意ツールの設定

QA Assistants は、デフォルトで **クッキーレス計測** を使用します。

Cookie同意ツールを利用する場合は、  
ユーザーの同意状態に応じて計測方法が切り替わるように設定が必要になる場合があります。

---

## 動作の仕組み

- デフォルトでは、クッキーを使用せずに計測します  
- 同意が得られた場合のみ、クッキーを使用します  
- 同意が得られない場合は、クッキーレス計測のまま動作します  

この動作を正しく行うために、Cookie同意ツール側の設定が必要になる場合があります。


---

## Step 1: Cookie同意ツールを開く

ご利用の Cookie同意ツールの設定画面を開きます。

---

## Step 2: QA Assistantsで使用するCookieを登録する

QA Assistants が使用するCookieを登録し、  
適切なカテゴリに分類します。

### 手動で登録する場合

必要に応じて、次のCookieを追加します。

- **名前:** `qahm_cookieConsent`  
- **カテゴリ:** Analytics（解析）  

---

### 自動検出される場合

Cookie同意ツールによっては、Cookieが自動検出されます。

その場合は、次の点を確認してください。

- 検出されたCookieを確認する  
- `qahm_cookieConsent` を探す  
- 「Uncategorized」になっている場合は、**Analytics** に変更する  

---

## QA Assistants が使用するCookie

| Cookie名 | 用途 | 補足 |
|-----------------------|------------------------------|------|
| `qahm_cookieConsent` | 同意状態の保存 | Cookie利用時に必要 |
| `qa_id` | ユーザー識別 | 同意がある場合のみ生成 |


- `qa_id` は、同意が得られた場合のみ作成されます  

---

## 例：CookieYes の設定

以下は **CookieYes** を使用した設定例です。

### 手順

1. CookieYes を開く  
2. **Cookie Manager** を開く  
3. **Uncategorized** を確認する  
4. `qahm_cookieConsent` を探す  
   - 見つからない場合は **Scan now** を実行  


---

### Cookieの編集

以下のように設定します。

- **Category:** Analytics  
- **Script URL Pattern:** （空欄）  
- **Description:**  
  サイトのアクセス解析のためにページビューを記録するCookie  


---

### 最終確認

1. 下書きを保存  
2. `qahm_cookieConsent` が Analytics に分類されていることを確認  
3. 変更を公開  


---

## 補足

- Script URL Pattern の設定は任意です  

---

## 関連

- クッキーレス計測が有効になっていることを確認するには [設定](../2-screens-and-operations/90-settings.md)を参照してください