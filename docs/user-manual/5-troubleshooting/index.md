---
title: Troubleshooting
sidebar_label: Troubleshooting
---


# Troubleshooting

This page summarizes common issues and checkpoints when using QA Assistants.

## No data appears

If no data appears, check the following:  

- Verify whether access data appears in **Realtime**  
- Logged-in WordPress users are excluded from tracking by default  
- Clear the browser cache and wait a few minutes before checking again  
- Check the browser console for JavaScript errors  

---

## Session data suddenly became 0 during the month

Please check the following:

- Verify that the monthly Pageview limit has not been reached  
  After the limit is reached, additional data is not saved.  
  → [Settings](/docs/user-manual/screens-and-operations/settings#data-retention--limits)

- Check for server errors or memory shortage issues

- Check whether JavaScript errors are stopping the tracking script

---

## Heatmap is not displayed

If the Heatmap is not displayed, check the following:  

- Verify that enough data has been accumulated for Heatmap generation  
- Check the browser console for JavaScript errors  
- Verify that QA Assistants scripts are excluded from cache plugin optimization  

---

## Cache and deferred loading

Cache plugins and JavaScript deferred loading settings may prevent tracking scripts from working correctly.  

If you are using `jQuery defer`, see the following page:  

- [When jQuery is Deferred](/docs/user-manual/getting-started/when-defer-jquery)
