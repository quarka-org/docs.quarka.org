---
sidebar_position: 2
title: Environment Setup
---

# Environment Setup

To ensure accurate tracking and smooth performance with QA Advisor, we recommend configuring your WordPress environment properly. This guide covers server, WordPress, and plugin configurations for optimal performance.

## System Requirements

### Minimum Requirements
- **WordPress**: Version 5.9 or higher
- **PHP**: Version 7.4 or higher
- **MySQL**: Version 5.7 or higher (or MariaDB 10.2+)
- **Memory**: At least 128MB PHP memory limit
- **Disk Space**: 50MB available space

### Recommended Specifications
- **WordPress**: Latest stable version
- **PHP**: Version 8.0 or higher
- **MySQL**: Version 8.0 or higher
- **Memory**: 256MB or more PHP memory limit
- **Disk Space**: 200MB or more available space

## Server Configuration

### PHP Settings

For optimal performance, configure these PHP settings:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### JavaScript Compression & Minification

Do **not** compress, minify, or combine JavaScript files used by QA Advisor.  
Some optimization plugins or themes may interfere with tracking scripts by modifying or delaying their execution.

> ✅ Check your caching or optimization plugin settings  
> ✅ Disable JS minification or defer/async for QA Advisor scripts

For more technical background, see [When jQuery is Deferred](/docs/user-manual/getting-started/when-defer-jquery).

### Database Optimization

For better database performance:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## WordPress Configuration

### wp-config.php Settings

Add these configurations to your `wp-config.php` file:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Plugin & Theme Compatibility

QA Advisor works with most major plugins and themes. However, we recommend:

- Disabling JavaScript defer/async for critical scripts
- Ensuring your caching plugin allows output from `qa-heatmap-analytics`
- Avoiding duplication with other tracking tools that modify global events

### Cache Plugin Configuration

**WP Rocket**: Exclude QA Advisor scripts from optimization
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Add to JavaScript exclusions  
**WP Super Cache**: Compatible without additional configuration

## CDN & Server Migration

If you're using a CDN (e.g., Cloudflare) or recently migrated your server:

- Clear all caches (browser, plugin, CDN)
- Confirm that QA Advisor scripts are not blocked or delayed
- Make sure your server time zone is correct (used for data grouping)

### Cloudflare Configuration

```
URL: *yoursite.com/wp-content/plugins/qa-heatmap-analytics/*
Settings:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 month
```

## Security Configuration

### File Permissions

Set appropriate file permissions:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Firewall Settings

Ensure these endpoints are accessible:
- `/wp-admin/admin-ajax.php` (for AJAX requests)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (for static files)

## Performance Monitoring

### Key Metrics to Monitor

- **Memory Usage**: Keep under 80% of limit
- **Page Load Time**: Target < 3 seconds
- **Database Queries**: Monitor slow queries
- **Disk Space**: Check QA Advisor data growth

### Monitoring Tools

- **Query Monitor** - WordPress plugin for debugging
- **New Relic** - APM monitoring
- **GTmetrix** - Frontend performance testing

## Troubleshooting

### Common Issues

**Memory Errors**:
```php
ini_set('memory_limit', '512M');
```

**Timeout Problems**:
```php
set_time_limit(300);
```

**Script Loading Issues**:
1. Check browser console for JavaScript errors
2. Verify cache plugin exclusions
3. Confirm firewall settings

### Script Verification

To verify that the tracking script is being correctly loaded:

1. Visit your website while **not logged in**
2. Right-click and choose "View Page Source"
3. Search the HTML for `qahm` or `qahmz`

> If these strings are not found, the script may be blocked or not loading.  
> Check for JavaScript errors or plugin conflicts.

## Next Steps

After environment setup:

1. [Configure Data Limits](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Handle jQuery Conflicts](/docs/user-manual/getting-started/when-defer-jquery)
3. [Explore the Dashboard](/docs/user-manual/screens-and-operations/dashboard)

---
