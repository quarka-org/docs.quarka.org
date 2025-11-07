---
sidebar_position: 11
title: When jQuery is Deferred
id: when-defer-jquery
---

# When jQuery is Deferred

QA Assistants relies on jQuery (registered via WordPress) for proper tracking behavior.  
If jQuery is loaded too late—such as when using the `defer` attribute—it can prevent the tracking script from initializing correctly.

## What Can Go Wrong

If `jquery.js` is loaded with the `defer` attribute, it may delay jQuery's availability, causing the QA Assistants script to run **before jQuery is ready**. This can lead to:

- Tracking data not being recorded ("no data")
- Heatmaps failing to display, even though page data exists
- JavaScript errors that may interfere with other plugins

## How to Avoid This

To ensure proper functionality, please consider one of the following approaches:

1. **Do not apply `defer` to jQuery.**  
   This is the most reliable way to preserve the correct script order.

2. **Include QA Assistants’ tracking script as part of your `defer` queue, but after jQuery.**  
   For example, if you are managing defer behavior in `functions.php`, be sure to include QA Assistants' scripts (`qa-heatmap-analytics/js`) *after* jQuery in the defer list.

> 💡 Based on internal testing, deferring jQuery can prevent the QA Assistants tracking script from initializing correctly.

## Summary

Always ensure that jQuery is available **before** the QA Assistants tracking script runs.  
This prevents loss of data and ensures your heatmaps and analytics work as expected.
