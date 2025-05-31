---
sidebar_position: 1
title: Installation
---

# Installation Guide

This guide will walk you through the process of installing QA Advisor on your WordPress website.

## Prerequisites

Before installing QA Advisor, ensure your system meets the following requirements:

- **WordPress**: Version 5.0 or higher
- **PHP**: Version 7.4 or higher
- **MySQL**: Version 5.7 or higher
- **Browser**: Modern browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## Installation Methods

### Method 1: WordPress Admin Dashboard (Recommended)

1. **Download the Plugin**
   - Download `qa-heatmap-analytics.zip` from the [official website](/)

2. **Upload via WordPress Admin**
   - Log in to your WordPress admin dashboard
   - Navigate to **Plugins** → **Add New**
   - Click **Upload Plugin** button at the top
   - Choose the downloaded zip file
   - Click **Install Now**

3. **Activate the Plugin**
   - After installation, click **Activate Plugin**
   - You'll be redirected to the QA Advisor welcome page

### Method 2: FTP Upload

1. **Extract the Plugin**
   - Unzip `qa-heatmap-analytics.zip` on your computer

2. **Upload via FTP**
   - Connect to your server using FTP client
   - Navigate to `/wp-content/plugins/` directory
   - Upload the extracted `qa-advisor` folder

3. **Activate in WordPress**
   - Log in to WordPress admin
   - Go to **Plugins** page
   - Find QA Advisor and click **Activate**

### Method 3: WP-CLI (Advanced)

If you have WP-CLI installed:

```bash
# Install from local file
wp plugin install qa-heatmap-analytics.zip --activate

# Or if hosted on WordPress.org (future)
wp plugin install qa-advisor --activate
```

## Post-Installation Steps

### 1. Initial Configuration

After activation, you'll see a setup wizard. If you skip it, go to:
- **Settings** → **QA Advisor**

### 2. Verify Installation

Check that QA Advisor is working:
1. Visit your site's frontend
2. Return to WordPress admin
3. Go to **QA Advisor** → **Dashboard**
4. You should see initial tracking data

### 3. Configure Tracking

Set up basic tracking options:
- Enable/disable specific tracking features
- Set user role permissions
- Configure data retention policies

## Troubleshooting

### Plugin Won't Activate

**Error: "Plugin could not be activated because it triggered a fatal error"**
- Check PHP version (must be 7.4+)
- Ensure WordPress is up to date
- Check for conflicts with other plugins

### No Data Showing

If the dashboard shows no data:
1. Clear your browser cache
2. Check if tracking script is loaded (View Page Source)
3. Ensure you're not logged in as admin (if admin tracking is disabled)
4. Wait 5-10 minutes for initial data collection

### Performance Issues

If your site slows down:
1. Check server resources
2. Optimize database tables
3. Adjust data collection frequency in settings

## Next Steps

Now that QA Advisor is installed, proceed to:
- [Initial Setup](./initial-setup) - Configure your analytics preferences
- [Dashboard Overview](../screens-and-operations/dashboard) - Learn about the interface
- [FAQs](./faqs) - Common questions and answers

---

Need help? Contact us at support@quarka.org
