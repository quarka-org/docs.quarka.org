---
sidebar_position: 2
title: Initial Setup
---

# Initial Setup

After installing QA Advisor, follow this guide to configure the plugin for optimal performance and accuracy.

## Setup Wizard

When you first activate QA Advisor, you'll see a setup wizard. This section covers each step:

### Step 1: Welcome & License

1. **Welcome Screen**
   - Read the brief introduction
   - Accept terms of service
   - Enter license key (for premium features)

2. **License Activation** (Beta users can skip)
   - Enter your license key
   - Click "Activate License"
   - Verify activation status

### Step 2: Basic Configuration

Configure fundamental settings:

#### Tracking Settings

```
□ Enable Click Tracking
□ Enable Scroll Tracking  
□ Enable Mouse Movement Tracking
□ Enable Form Analytics
□ Enable Session Recording (Premium)
```

**Recommended**: Enable all for comprehensive analytics

#### User Privacy

```
□ Anonymize IP Addresses
□ Respect Do Not Track
□ Enable Cookie Consent
□ GDPR Compliance Mode
```

**Important**: Enable based on your jurisdiction's requirements

### Step 3: Advanced Settings

#### Data Collection

**Sampling Rate**
- `100%` - Track all visitors (recommended for small sites)
- `50%` - Track half of visitors (balanced approach)
- `25%` - Track quarter of visitors (high-traffic sites)

**Data Retention**
- `30 days` - Minimum recommended
- `90 days` - Default (recommended)
- `365 days` - Maximum retention

#### Performance Options

**Script Loading**
- `Async` - Non-blocking (recommended)
- `Defer` - Load after page
- `Normal` - Standard loading

**Cache Duration**
- `1 hour` - Real-time priority
- `6 hours` - Balanced (default)
- `24 hours` - Performance priority

## Manual Configuration

If you skip the wizard, configure settings manually:

### 1. General Settings

Navigate to **Settings** → **QA Advisor** → **General**

- **Site Name**: Your website identifier
- **Time Zone**: Match your WordPress timezone
- **Language**: Interface language
- **Email Reports**: Weekly/monthly summaries

### 2. Tracking Configuration

Go to **Settings** → **QA Advisor** → **Tracking**

#### Pages to Track

```
Include Rules:
- All Pages (default)
- Specific URLs: /products/*, /blog/*
- Post Types: post, page, product

Exclude Rules:
- Admin pages: /wp-admin/*
- Checkout: /checkout/*
- Account pages: /my-account/*
```

#### User Roles

Configure which user roles to track:

```
□ Administrator - Usually excluded
□ Editor - Optional
□ Author - Optional
□ Contributor - Recommended
□ Subscriber - Recommended
□ Guest/Visitor - Always tracked
```

### 3. Heatmap Settings

**Heatmap Resolution**
- `High` - Detailed tracking (more data)
- `Medium` - Balanced (recommended)
- `Low` - Basic tracking (less data)

**Click Aggregation**
- `1px` - Precise (high CPU usage)
- `5px` - Default (recommended)
- `10px` - Grouped (better performance)

### 4. Integration Settings

#### Google Analytics

```
□ Enable GA Integration
  GA Tracking ID: UA-XXXXX-Y
  □ Import historical data
  □ Sync events
```

#### Other Integrations

- **WooCommerce**: Track product interactions
- **Contact Form 7**: Form submission analytics
- **Elementor**: Page builder compatibility

## Verification Checklist

After setup, verify everything is working:

### ✓ Tracking Script

View your site's source code and look for:
```html
<!-- QA Advisor Analytics -->
<script async src="/wp-content/plugins/qa-advisor/assets/tracking.js"></script>
```

### ✓ Data Collection

1. Open your site in an incognito window
2. Click around and scroll
3. Return to QA Advisor dashboard
4. Check for new data (may take 5 minutes)

### ✓ Heatmap Generation

1. Visit a page on your site
2. Perform several clicks
3. Go to **QA Advisor** → **Heatmaps**
4. Select the page
5. Verify heatmap appears

### ✓ Performance Impact

Test site speed:
1. Use Google PageSpeed Insights
2. Compare before/after scores
3. Adjust settings if needed

## Common Configuration Issues

### No Data Appearing

- Check JavaScript console for errors
- Verify tracking code is present
- Ensure you're not blocking your own IP
- Clear all caches

### Heatmaps Not Generating

- Minimum 10 interactions required
- Wait for aggregation (hourly)
- Check heatmap settings
- Verify page is being tracked

### High Server Load

- Reduce sampling rate
- Increase cache duration
- Enable data aggregation
- Consider CDN for assets

## Security Recommendations

1. **Regular Updates**
   - Enable auto-updates for security patches
   - Check for updates weekly

2. **Access Control**
   - Limit dashboard access to admins
   - Use strong passwords
   - Enable 2FA if available

3. **Data Protection**
   - Regular backups
   - SSL certificate required
   - Encrypted data storage

## Next Steps

Configuration complete! Now explore:

- [Dashboard Overview](../screens-and-operations/dashboard) - Understanding your analytics
- [Creating Your First Heatmap](../screens-and-operations/heatmaps) - Visual analytics
- [FAQs](./faqs) - Common questions

---

Need help with configuration? Contact support@quarka.org
