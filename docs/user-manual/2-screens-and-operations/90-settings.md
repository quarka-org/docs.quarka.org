---
sidebar_position: 90
title: Settings
---

# Settings

The Settings screen lets you manage the operating mode and tracking method of QA Assistants.

## Tabs

The Settings screen contains the following tabs.

| Tab | Description |
|-----|-------------|
| **General Settings** | Operating mode, tracking method, and data retention info (described on this page) |
| **Goals** | Goal (conversion) setup → [How to Set Up Goals](./11-goal-setup.md) |
| **Google Integration** | Google service integration (Coming soon) |

---

## General Settings

The General Settings tab contains two configuration options and one read-only information section. Click **Save** after making changes.

### Advanced Mode

| | |
|---|---|
| **Type** | Checkbox |
| **Default** | OFF |

Enabling Advanced Mode adds detailed report menus to the left sidebar in the admin panel.

- **Audience** — Visitor reports
- **Acquisition** — Traffic sources
- **Behavior** — Pages and user actions
- **Goals** — Goal conversions

:::tip OFF by default after installation
We recommend getting familiar with the basic screens (Realtime, Reports, Heatmaps) first, then enabling Advanced Mode when needed.
:::

:::note Does not affect data collection volume
Advanced Mode only adds more items to the admin interface. Enabling it does not increase the amount of data collected on your server.
:::

---

### Enable Cookieless Tracking

| | |
|---|---|
| **Type** | Checkbox |
| **Default** | ON (recommended) |

- **ON (recommended)**: Tracks visitors without using cookies by default. Cookies are only used when a cookie consent tool passes a "consented" value to the plugin.
- **OFF**: Always uses cookies for tracking.  


If you use a cookie consent tool, you may need to configure it.  
See [Cookie Consent Tool Setup](../1-getting-started/cookie-consent-setup.md).

---

### Data retention & limits

This section is **read-only**. The values cannot be changed from this screen.

| Item | Description | Default |
|------|-------------|---------|
| **Data retention** | Number of days collected data is retained | 120 days |
| **Monthly PV limit** | Maximum page views that can be collected per month | Defined in qa-config.php |

To change these values, edit `qa-config.php`.
→ [How to Configure qa-config.php](../1-getting-started/configure-qa-config.md)

:::caution When the monthly PV limit is reached
Data collection pauses for the rest of the month and resumes automatically the following month. A notification email is sent to the admin email address.
:::

---

## Google Integration

Integration with Google services is coming soon.

---

## Related Pages

- [How to Set Up Goals](./11-goal-setup.md)
- [How to Configure qa-config.php](../1-getting-started/configure-qa-config.md)
- [Help](./91-help.md)
