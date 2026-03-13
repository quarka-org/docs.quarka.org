---
sidebar_position: 5
title: Heatmaps
---

# Heatmaps

The Heatmap feature visualizes actual user behavior on a page.  
It helps you quickly understand interaction patterns and access trends.

---

## How to View Heatmaps

To view heatmaps, open the page report under **Behavior** in the left menu.

From the report list, select **Heatmap** in the corresponding column for the page you want to analyze.  
The heatmap displays data based on the selected period and filters.

---

## Types of Heatmaps

You can switch between heatmap types by selecting them in the menu.  
Colors and intensity indicate where user activity occurred and how concentrated it is.

### Scroll Map

Shows how far visitors scroll down the page.

It displays the percentage of users who reached each position on the page.  
The number of visitors who reached that position is also shown.

### Attention Map

Highlights areas that attract user attention.

Areas that are read more frequently appear in red.  
The calculation is based on viewing time and stay patterns.

### Click Heatmap

Visualizes where users clicked on the page.

Areas with more clicks appear in red.  
Clicks on non-link elements are also included.

### Click Count Map

Displays the number of clicks for each element.

- Shows click counts as numbers
- Helps identify elements with concentrated interaction

The background color of the numbers depends on the element’s CSS position.

- **Blue background**  
  Indicates elements that follow the screen (fixed position).  
  These are elements with `position: absolute` or `position: fixed`.

- **Black background**  
  Indicates elements in the normal page layout.

---

## Color Scale

The colors used in Scroll Map, Attention Map, and Click Heatmap represent relative activity levels.

Higher activity is shown in warmer colors.

![Color Scale](/img/user-manual/heatmap-4.png)

---

## Screen Menu

The menu at the top of the heatmap screen allows you to change display conditions and view detailed metrics.

- **Period**  
  Change the time range used for the heatmap.

- **Device**  
  Switch between Desktop, Smartphone, and Tablet data.

- **Update Heatmap Version**  
  Updates the stored page HTML used to render the heatmap.

### Metrics

- **Valid Data**  
  The number of sessions used to render the heatmap.

- **Average Stay**  
  The average time users actively viewed the page.  
  Time spent in other applications is not included.

---

## Notes When Using Heatmaps

- **Data Differences**  
  Page views and heatmap data may not match because they use different aggregation methods.

- **Page Updates**  
  If the page HTML has changed, the heatmap view may differ from the current live page.  
  See [Heatmap Versions](./06-heatmap-versions.md) for details.

