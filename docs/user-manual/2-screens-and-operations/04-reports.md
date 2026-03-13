---
sidebar_position: 4
title: Reports
sidebar_label: Reports
---

# Reports

This page covers the report screens in QA Assistants: **Audience**, **Acquisition**, **Landing Pages**, **Top Growing**, and **All Pages**.

For live monitoring, see [Realtime](./03-realtime.md). For conversion tracking, see [Goals](./10-goal-report.md).

:::tip Simple Mode vs Advanced Mode
By default, QA Assistants runs in **Simple Mode**, showing only the **Audience** report.
Enable **Advanced Mode** in **Settings** to unlock: **Acquisition**, **Landing Pages**, **Top Growing**, **All Pages**, and **Goals**.
:::

---

## Common controls

The following controls are shared across report screens.

### Date range picker

Select a preset period — Last 7 days, Last 30 days, This month, or Last month — or pick a custom range from the calendar.

:::note
Report data is processed overnight. **Today's data is not included** in these reports. Use [Realtime](./03-realtime.md) for live activity.
:::

### Table filters

Click the filter area above a table to add conditions. Available filter types depend on the column:

- **Text columns** — contains, does not contain, equals, not equals, starts with, ends with, empty, not empty
- **Numeric / percentage / time columns** — equals, greater than, less than, empty, not empty

### Export

Each table has **CSV Export** and **JSON Export** buttons. The exported data reflects any active filters.

### Goal filter

When goals are configured, a radio button group appears to filter by a specific goal. The default is "All Goals."

### Heatmap links

In the Landing Pages, Top Growing, and All Pages tables, each row shows heatmap icons for Desktop, Tablet, and Smartphone. Click an icon to jump directly to the heatmap view for that page.

---

## Audience

The primary report screen, available in both Simple and Advanced modes.

### Summary chart

A line chart showing **Users**, **Sessions**, and **Pageviews** over the selected period, with totals displayed below.

### Users / Devices

A breakdown table by user type (New / Returning) and device category (Desktop / Tablet / Smartphone). Columns include sessions, bounce rate, pages per session, avg. session duration, and goal metrics.

### Session Recording

A list of sessions in the selected period. Click the **play button** on any row to replay the visitor's browsing activity. Use the goal filter to narrow results to sessions that completed a specific goal.

### Advanced Export

At the bottom of the page, you can download raw pageview-level data in **TSV format** for external analysis tools.

---

## Acquisition

*Advanced Mode only.*

Analyze where your traffic comes from, split into two sections:

- **Channels** — Sessions grouped by traffic channel (organic, direct, referral, social, etc.).
- **Source / Medium** — Sessions grouped by source × medium combination (e.g. `google / organic`).

Both sections include a line chart. Check the boxes next to table rows to plot selected channels or sources on the chart.

---

## Landing Pages

A table of **entry pages** — the first page visitors see when they arrive at your site. Key columns: title, URL, pageviews, unique pageviews, avg. time on page, entrances, exit rate, and goal metrics.

---

## Top Growing

Identifies landing pages with the highest **growth rate**. The selected period is split in half, and session counts are compared between the earlier and later halves. Sorted by growth rate (descending) by default.

---

## All Pages

A pageview summary of **every page** on your site — not limited to entry pages. The column structure is similar to Landing Pages.
