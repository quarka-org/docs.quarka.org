---
sidebar_position: 1
title: Installation
---

# Installation Guide

QA Advisor is the new name and improved version of our WordPress plugin previously known as **QA Analytics**.  
Currently available as a **public beta**, it introduces a redesigned interface and enhanced features -- while keeping the same plugin identifier: `qa-heatmap-analytics`.

This guide will walk you through the steps to install the beta version on your WordPress site.


## Prerequisites

Before installing QA Advisor, ensure your system meets the following requirements:

- **WordPress**: Version 5.9 or higher
- **PHP**: Version 7.0 or higher
- **MySQL**: Version 5.7 or higher
- **Browser**: Modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## Installation Methods

### Step 1: Download the Plugin

Download the latest `qa-heatmap-analytics.zip` file from the top page of this documentation site.  
[Go to Documentation Top](/)

### Step 2: Install via WordPress Admin (Recommended)

1. Log in to your WordPress admin dashboard
2. Navigate to **Plugins** → **Add New**
3. Click the **Upload Plugin** button
4. Select the downloaded `qa-heatmap-analytics.zip` file
5. Click **Install Now**
6. Once installed, click **Activate Plugin**

### (Optional) Install via FTP

1. Extract the `qa-heatmap-analytics.zip` file on your computer
2. Use an FTP client to upload the extracted folder to `/wp-content/plugins/`
3. Activate the plugin from the WordPress admin → **Plugins**

### (Optional) Install via WP-CLI

If you have WP-CLI installed:

```bash
# Install from local file
wp plugin install qa-heatmap-analytics.zip --activate

```

## Post-Installation Steps

### Verify Installation

Check that QA Advisor is working:
1. Visit your site's frontend
2. Return to WordPress admin
3. Go to **QA Advisor** → **Realtime**
4. You should see initial tracking data

### Enable Advanced Mode (Optional)

QA Advisor offers an **Advanced Mode** that unlocks additional features such as Audience insights, Acquisition reports, and Goal tracking.  
To enable it:

1. Go to **Settings** → **QA Advisor**  
2. Check the **Advanced Mode** option  
3. Click **Save Changes**

## Troubleshooting

### Plugin Won’t Activate?

If the plugin fails to activate, please check the following:

- Make sure PHP version is 7.0 or higher  
- Ensure WordPress is up to date  
- Disable other plugins to test for conflicts

### No Data Showing?

If no data appears after installation, please consider the following:

- Tracking data in the **Dashboard** (available in Advanced Mode) is updated only once a day, typically overnight.
- To check if tracking is working immediately, go to **QA Advisor** → **Realtime** in the admin menu.
- Logged-in WordPress users are not tracked by default.
- Clear your browser cache and wait 5–10 minutes after activation to allow the first data to appear.
- If no activity is shown even in the **Realtime** view after visiting your site, the tracking script might not be loading correctly.

### Performance Issues

If your site slows down:
1. Check server resources
2. Optimize database tables


## Related Pages

- [Dashboard Overview](/docs/user-manual/screens-and-operations/dashboard) - Learn about the interface

---

Need help? Contact us at support@quarka.org
