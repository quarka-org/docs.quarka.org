---
title: General Behavior
sidebar_label: General Behavior
---

# General Behavior

This page describes the basic behavior of QA Assistants, including data collection and tracking behavior.


## Tracking Scope

### Logged-in Users

Logged-in WordPress users are excluded from tracking by default.


### Form Input Data

Form input data, passwords, and similar input content are not collected.  


---

## Data Collection Limits

QA Assistants has a monthly Pageview limit.  
After the limit is reached, data collected after that point is not saved.  
The monthly Pageview count is automatically reset on the first day of each month.  
The limit can be changed in `qa-config.php`. 
See [Configure qa-config.php](/docs/user-manual/getting-started/configure-qa-config) for details.
