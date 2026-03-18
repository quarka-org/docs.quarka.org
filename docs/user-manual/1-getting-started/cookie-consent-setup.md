---
title: Cookie Consent Tool Setup
sidebar_position: 40
---

# Cookie Consent Tool Setup

QA Assistants uses **cookieless tracking by default**.

If you use a cookie consent tool, you may need to configure it so that tracking behavior changes based on the visitor’s consent.

---

## Overview

- By default, tracking works without cookies  
- Cookies are used only when consent is given  
- If consent is not given, cookieless tracking continues  

To ensure this works correctly, you may need to configure your cookie consent tool.


---

## Step 1: Open your cookie consent tool

Open the settings screen of the cookie consent tool you are using.

---

## Step 2: Register cookies used by QA Assistants

Register the cookies used by QA Assistants and assign them to the appropriate category.

### Manual registration

If needed, add the following cookie:

- **Name:** `qahm_cookieConsent`  
- **Category:** Analytics  

---

### If cookies are automatically detected

Some tools automatically detect cookies.

In that case, check the following:

- Review the detected cookies  
- Find `qahm_cookieConsent`  
- If it is categorized as "Uncategorized", change it to **Analytics**

---

## Cookies used by QA Assistants

| Cookie Name           | Purpose               | Notes |
|----------------------|----------------------|------|
| `qahm_cookieConsent` | Stores consent status | Required for cookie-based tracking |
| `qa_id`              | User identification   | Created only when consent is given |


- `qa_id` is created only when consent is given  

---

## Example: CookieYes

Below is an example configuration using CookieYes.

### Steps

1. Open CookieYes  
2. Go to **Cookie Manager**  
3. Check **Uncategorized** cookies  
4. Find `qahm_cookieConsent`  
   - If not found, run **Scan now**  


---

### Edit cookie settings

Configure as follows:

- **Category:** Analytics  
- **Script URL Pattern:** (leave empty)  
- **Description:**  
  Cookie used to collect page view data for analytics  


---

### Final check

1. Save draft  
2. Confirm `qahm_cookieConsent` is categorized as Analytics  
3. Publish changes  


---

## Notes

- Script URL Pattern is optional  

---

## Related

- See [Settings](../2-screens-and-operations/90-settings.md) to check that cookieless tracking is enabled