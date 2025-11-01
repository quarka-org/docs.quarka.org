---
title: Configure qa-config.php
sidebar_position: 4
---

# Change Monthly PV Limit and Data Retention

Goal: change the monthly PV limit and how long data is kept by editing one file.

---

## 1) File to edit

- Path: `wp-content/qa-zero-data/qa-config.php`
- This file already exists with default values.
- The copy inside the plugin folder (`wp-content/plugins/qa-heatmap-analytics/qa-config.php`) is a template and is not loaded.

:::caution Before you edit
Edit **only** the two settings on this page (Monthly PV limit / Data retention).  
Leave other lines as they are. You may add your own **PHP comments** (e.g., `// note`)?that’s safe.
:::

<details>
<summary>Show other constants you might see (do not edit)</summary>

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
*(Names may vary by version.)*

</details>

---

## 2) How to edit

Open `wp-content/qa-zero-data/qa-config.php` using one of the following:

- Hosting file manager (edit in place), or
- FTP/SFTP/SSH (download → edit → upload back), or
- A server-side editor (e.g., SSH + vim/nano)

### A) Change the **monthly PV limit**

1. Find this line (or add it if missing):
```php
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 10000 ); // Monthly PV limit (integer, >= 1)
```
2. Replace `10000` with your limit (integer, 1 or greater).  
   Examples:
```php
// Small site
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 10000 );

// Staging / test
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 2000 );

// High-traffic (adjust to server capacity)
define( 'QAHM_CONFIG_LIMIT_PV_MONTH', 50000 );
```
3. Save (or upload back) the file.

### B) Change the **data retention (days)**

1. Find this line (or add it if missing):
```php
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 120 ); // Data retention in days (integer, >= 1)
```
2. Replace `120` with how many days to keep data (integer, 1 or greater).  
   Examples:
```php
// Production
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 120 );

// Staging / test
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 14 );

// Larger window
define( 'QAHM_CONFIG_DATA_RETENTION_DAYS', 180 );
```
3. Save (or upload back) the file.

> Input rules for both settings: use **integers ? 1**. `0` and negative values are invalid.

---

## 3) How to confirm

1. In WordPress, go to **QA Assistant → Settings → General Settings**.
2. Scroll to **Data retention & limits**.
   - Monthly PV Limit and Data retention shown there should match the numbers set in `wp-content/qa-zero-data/qa-config.php`.
3. Reports will use these values:
   - Monthly PV Limit applies to new data immediately.
   - Data retention removes older data automatically **once per night**. The maintenance timing is fixed and not user-configurable.

---

## Troubleshooting

- I edited a file but nothing changed  
  → Confirm you edited `wp-content/qa-zero-data/qa-config.php` (not the plugin template).

- Data didn’t shrink right away  
  → Old data is cleaned up once per night by an automatic job. The schedule is fixed and cannot be changed from the plugin.

- My number was rejected  
  → Use integers only, and 1 or greater.

---

## Notes (optional)

- Keep a quick backup before edits (e.g., `qa-config.php.bak`).
- Do not commit `wp-content/qa-zero-data/qa-config.php` to your repository.
