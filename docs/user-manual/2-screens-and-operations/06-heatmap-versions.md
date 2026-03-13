---
sidebar_position: 6
title: About Heatmap Versions
---

# About Heatmap Versions


## What is a Heatmap Version?

QA Assistants internally stores the HTML of each tracked page.  
Heatmaps are rendered based on this stored HTML.

In QA Assistants, this stored page HTML is called a **Heatmap Version**.

---

## When the Page Content Looks Different

Heatmaps are rendered using the **latest Heatmap Version** stored by QA Assistants.

If the content of your website page has changed,  
the page shown in the heatmap may look different from the current live page.

To reflect the current page content in the heatmap, update the Heatmap Version.

---

## Before Updating a Heatmap Version

Heatmaps are always rendered using the **latest Heatmap Version**.  
QA Assistants does not provide a feature to switch back to older versions.

Before updating the Heatmap Version, it is recommended to save a screenshot  
of the current heatmap view. This helps you compare the state before and after the update.

---

## How to Update a Heatmap Version

If the page content has changed and you want the heatmap to reflect the new layout,  
click **Update Heatmap Version** at the top of the heatmap screen.

When you do this:

1. The page HTML for each device (Desktop, Tablet, Smartphone) is retrieved  
2. A new Heatmap Version is created  
3. The page automatically reloads

After the update, the heatmap is rendered using the new Heatmap Version.

---

## Display Misalignment

If the selected period includes data from both before and after a Heatmap Version update,  
some heatmap points may appear slightly misaligned with the actual page elements.
