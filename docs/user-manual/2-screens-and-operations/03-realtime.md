---
sidebar_position: 3
---

# Realtime

A screen for monitoring your site's live activity.

## Accessing This Screen

1. Log in to your WordPress admin panel
2. Click **QA Assistants** in the left sidebar
3. Select **Realtime**

> Realtime is available in both Simple mode and Advanced mode.

## Screen Layout

The Realtime screen consists of two main sections:

1. **Realtime Activity** — Current user counts
2. **Session Recordings** — List of completed sessions with session replay

---

## Realtime Activity

### Users in the Last 30 Minutes

Displays the number of currently active sessions on your site.

Sessions that have had **any activity within the last 30 minutes** are counted. Activity includes not only page views and navigation, but also scrolling, clicking, and other interactions.

### Active Users in the Last 1 Minute

Of the users in the last 30 minutes, this shows the number who have had **any interaction within the last 60 seconds**.

### Auto-refresh

User counts are **automatically updated every 10 seconds**.

---

## Session Recordings

### Overview

This section displays a list of completed user sessions with their browsing data.

Sessions with no activity for more than 30 minutes are processed as "completed." Only sessions that have dwell data (behavioral records such as scrolling) are added to this list.

The list holds a **maximum of 5,000 sessions**. As new sessions are added, the oldest ones are removed.

### Table Columns

| Column | Description |
|---|---|
| **Device** | Device type (PC / Smartphone / Tablet) |
| **Exit Time** | Last access time of the session |
| **Entry Page** | First page of the session (with link) |
| **Exit Page** | Last page of the session (with link) |
| **Referrer** | Traffic source ("direct" for direct access) |
| **PVs** | Number of page views in the session |
| **Duration** | Total session duration |
| **Play** | Session replay button |

The table supports sorting, filtering, and CSV export. It displays 100 entries per page with pagination.

### Session Replay

Click the play button (video icon) to replay the user's browsing behavior as a movie-like playback in a new window.

:::note
- Sessions without dwell data do not appear in the list
- Session replay is available for today's sessions. For past sessions, use the replay feature in [Visit Report](./04-reports.md)
:::

### Auto-refresh

The session list is **automatically updated every 1 minute**.

---

## Auto-refresh Summary

| Target | Refresh Interval |
|---|---|
| User counts (30 min / 1 min) | Every 10 seconds |
| Session Recordings list | Every 1 minute |

- Updates run only while the browser tab is active
- When the tab becomes inactive, updates pause and resume immediately when you return to the tab
