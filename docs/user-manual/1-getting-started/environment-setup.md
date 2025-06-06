---
sidebar_position: 2
title: Environment Setup
---

# Environment Setup

To ensure accurate tracking and smooth performance with QA Advisor, we recommend adjusting the following server and plugin settings.

---

## 1. JavaScript Compression & Minification

Do **not** compress, minify, or combine JavaScript files used by QA Advisor.  
Some optimization plugins or themes may interfere with tracking scripts by modifying or delaying their execution.

> ✅ Check your caching or optimization plugin settings  
> ✅ Disable JS minification or defer/async for QA Advisor scripts

For more technical background, see [When jQuery is Deferred](/docs/user-manual/1-getting-started/when-defer-jquery).

---

## 2. PHP Memory Limit & Execution Time

QA Advisor processes tracking data during daily aggregation, which can be memory-intensive on larger sites.

We recommend the following PHP settings:

- `memory_limit`: **1024M** or higher  
- `max_execution_time`: **240** seconds or more

> 💡 These settings can usually be adjusted via `php.ini`, `.htaccess`, or your hosting control panel.  
> If you're unsure, ask your hosting provider.

---

## 3. Plugin & Theme Compatibility

QA Advisor works with most major plugins and themes. However, we recommend:

- Disabling JavaScript defer/async for critical scripts
- Ensuring your caching plugin allows output from `qa-heatmap-analytics`
- Avoiding duplication with other tracking tools that modify global events

---

## 4. CDN & Server Migration

If you're using a CDN (e.g., Cloudflare) or recently migrated your server:

- Clear all caches (browser, plugin, CDN)
- Confirm that QA Advisor scripts are not blocked or delayed
- Make sure your server time zone is correct (used for data grouping)

---

## 5. Optional: Confirm Script Output

To verify that the tracking script is being correctly loaded:

1. Visit your website while **not logged in**
2. Right-click and choose “View Page Source”
3. Search the HTML for `qahm` or `qahmz`

> If these strings are not found, the script may be blocked or not loading.  
> Check for JavaScript errors or plugin conflicts.

---
