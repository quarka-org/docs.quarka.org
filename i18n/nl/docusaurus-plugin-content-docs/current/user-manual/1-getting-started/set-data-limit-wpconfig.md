---
sidebar_position: 5
---

# Data Limieten Instellen in wp-config.php

Deze gids legt uit hoe u data opslag limieten voor QA Advisor kunt configureren via wp-config.php om uw database prestaties te optimaliseren en opslag ruimte te beheren.

## Overzicht

QA Advisor verzamelt verschillende soorten data zoals sessies, events, heatmap data en analytics. Om uw database prestaties te optimaliseren en opslag kosten te beheersen, kunt u limieten instellen voor hoeveel data wordt bewaard.

## Beschikbare Configuratie Opties

### Basis Data Retentie

```php
// In wp-config.php - Voeg toe boven "/* That's all, stop editing! */"

// Algemene data retentie (in dagen)
define('QA_ADVISOR_DATA_RETENTION_DAYS', 90);

// Sessie data retentie (in dagen)
define('QA_ADVISOR_SESSION_RETENTION_DAYS', 30);

// Event data retentie (in dagen)  
define('QA_ADVISOR_EVENT_RETENTION_DAYS', 60);

// Heatmap data retentie (in dagen)
define('QA_ADVISOR_HEATMAP_RETENTION_DAYS', 180);
```

### Geavanceerde Limieten

```php
// Maximum aantal sessies per dag
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 10000);

// Maximum aantal events per sessie
define('QA_ADVISOR_MAX_EVENTS_PER_SESSION', 1000);

// Maximum heatmap data punten per pagina
define('QA_ADVISOR_MAX_HEATMAP_POINTS', 50000);

// Database tabel grootte limiet (in MB)
define('QA_ADVISOR_MAX_TABLE_SIZE_MB', 500);
```

## Data Type Specifieke Configuraties

### Sessie Data Configuratie

```php
// Sessie tracking limieten
define('QA_ADVISOR_SESSION_TIMEOUT', 1800); // 30 minuten in seconden
define('QA_ADVISOR_MAX_SESSION_DURATION', 7200); // 2 uur maximum
define('QA_ADVISOR_SESSION_CLEANUP_INTERVAL', 3600); // Cleanup elke uur

// Sessie data velden
define('QA_ADVISOR_TRACK_USER_AGENT', true);
define('QA_ADVISOR_TRACK_REFERRER', true);
define('QA_ADVISOR_TRACK_IP_ADDRESS', false); // Privacy overweging
```

### Event Tracking Configuratie

```php
// Event tracking limieten
define('QA_ADVISOR_MAX_EVENTS_PER_MINUTE', 100);
define('QA_ADVISOR_EVENT_BATCH_SIZE', 50);
define('QA_ADVISOR_EVENT_QUEUE_LIMIT', 1000);

// Event types om te tracken
define('QA_ADVISOR_TRACK_CLICKS', true);
define('QA_ADVISOR_TRACK_SCROLLS', true);
define('QA_ADVISOR_TRACK_FORM_INTERACTIONS', true);
define('QA_ADVISOR_TRACK_PAGE_VIEWS', true);
```

### Heatmap Data Configuratie

```php
// Heatmap generatie limieten
define('QA_ADVISOR_HEATMAP_MIN_SESSIONS', 50); // Minimum sessies voor heatmap
define('QA_ADVISOR_HEATMAP_RESOLUTION', 1); // Pixel resolutie (1 = hoog, 5 = laag)
define('QA_ADVISOR_HEATMAP_UPDATE_INTERVAL', 3600); // Update elke uur

// Heatmap opslag
define('QA_ADVISOR_HEATMAP_COMPRESSION', true);
define('QA_ADVISOR_HEATMAP_FORMAT', 'webp'); // webp, png, jpg
```

## Performance Optimalisatie

### Database Query Limieten

```php
// Query performance instellingen
define('QA_ADVISOR_MAX_QUERY_ROWS', 10000);
define('QA_ADVISOR_QUERY_TIMEOUT', 30); // seconden
define('QA_ADVISOR_USE_INDEX_HINTS', true);

// Batch processing
define('QA_ADVISOR_BATCH_PROCESS_SIZE', 1000);
define('QA_ADVISOR_BATCH_PROCESS_INTERVAL', 300); // 5 minuten
```

### Caching Configuratie

```php
// Data caching instellingen
define('QA_ADVISOR_ENABLE_OBJECT_CACHE', true);
define('QA_ADVISOR_CACHE_EXPIRATION', 3600); // 1 uur
define('QA_ADVISOR_CACHE_PREFIX', 'qa_adv_');

// Report caching
define('QA_ADVISOR_CACHE_REPORTS', true);
define('QA_ADVISOR_REPORT_CACHE_DURATION', 1800); // 30 minuten
```

## Privacy en Compliance

### GDPR/AVG Configuratie

```php
// Privacy instellingen
define('QA_ADVISOR_ANONYMIZE_IP', true);
define('QA_ADVISOR_RESPECT_DNT', true); // Do Not Track header
define('QA_ADVISOR_COOKIE_CONSENT_REQUIRED', true);

// Data minimalisatie
define('QA_ADVISOR_MINIMAL_DATA_MODE', false);
define('QA_ADVISOR_AUTO_DELETE_USER_DATA', true);
define('QA_ADVISOR_USER_DATA_RETENTION_DAYS', 365);
```

### Data Export/Import Limieten

```php
// Export/Import configuratie
define('QA_ADVISOR_MAX_EXPORT_ROWS', 100000);
define('QA_ADVISOR_EXPORT_BATCH_SIZE', 5000);
define('QA_ADVISOR_EXPORT_TIMEOUT', 300); // 5 minuten

// Backup configuratie
define('QA_ADVISOR_AUTO_BACKUP', true);
define('QA_ADVISOR_BACKUP_RETENTION_DAYS', 30);
```

## Omgeving Specifieke Configuraties

### Ontwikkeling Omgeving

```php
// Development instellingen
if (defined('WP_DEBUG') && WP_DEBUG) {
    define('QA_ADVISOR_DEBUG_MODE', true);
    define('QA_ADVISOR_LOG_QUERIES', true);
    define('QA_ADVISOR_DATA_RETENTION_DAYS', 7); // Korte retentie voor dev
    define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 1000);
}
```

### Staging Omgeving

```php
// Staging instellingen
if (defined('WP_ENV') && WP_ENV === 'staging') {
    define('QA_ADVISOR_DATA_RETENTION_DAYS', 30);
    define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 5000);
    define('QA_ADVISOR_HEATMAP_RETENTION_DAYS', 60);
    define('QA_ADVISOR_ENABLE_SAMPLING', true);
    define('QA_ADVISOR_SAMPLING_RATE', 0.5); // 50% sampling
}
```

### Productie Omgeving

```php
// Production instellingen
if (defined('WP_ENV') && WP_ENV === 'production') {
    define('QA_ADVISOR_DATA_RETENTION_DAYS', 365);
    define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 50000);
    define('QA_ADVISOR_HEATMAP_RETENTION_DAYS', 180);
    define('QA_ADVISOR_ENABLE_COMPRESSION', true);
    define('QA_ADVISOR_USE_CDN_FOR_ASSETS', true);
}
```

## Monitoring en Alerting

### Database Monitoring

```php
// Database monitoring
define('QA_ADVISOR_MONITOR_DB_SIZE', true);
define('QA_ADVISOR_DB_SIZE_ALERT_THRESHOLD', 1000); // MB
define('QA_ADVISOR_MONITOR_QUERY_PERFORMANCE', true);

// Alerting configuratie
define('QA_ADVISOR_ENABLE_ALERTS', true);
define('QA_ADVISOR_ALERT_EMAIL', 'admin@example.com');
define('QA_ADVISOR_ALERT_THRESHOLD_SESSIONS', 45000); // 90% van limiet
```

### Performance Monitoring

```php
// Performance tracking
define('QA_ADVISOR_TRACK_PERFORMANCE_METRICS', true);
define('QA_ADVISOR_PERFORMANCE_SAMPLE_RATE', 0.1); // 10% sampling
define('QA_ADVISOR_SLOW_QUERY_THRESHOLD', 2.0); // seconden
```

## Automatische Cleanup

### Geplande Cleanup Taken

```php
// Cleanup configuratie
define('QA_ADVISOR_ENABLE_AUTO_CLEANUP', true);
define('QA_ADVISOR_CLEANUP_SCHEDULE', 'daily'); // daily, weekly, monthly
define('QA_ADVISOR_CLEANUP_TIME', '02:00'); // 2 AM

// Cleanup opties
define('QA_ADVISOR_CLEANUP_OLD_SESSIONS', true);
define('QA_ADVISOR_CLEANUP_ORPHANED_EVENTS', true);
define('QA_ADVISOR_CLEANUP_EXPIRED_HEATMAPS', true);
define('QA_ADVISOR_OPTIMIZE_TABLES_AFTER_CLEANUP', true);
```

## Voorbeeld Complete Configuratie

```php
// Voeg toe aan wp-config.php boven "/* That's all, stop editing! */"

// === QA ADVISOR CONFIGURATIE ===

// Basis data retentie
define('QA_ADVISOR_DATA_RETENTION_DAYS', 90);
define('QA_ADVISOR_SESSION_RETENTION_DAYS', 30);
define('QA_ADVISOR_EVENT_RETENTION_DAYS', 60);
define('QA_ADVISOR_HEATMAP_RETENTION_DAYS', 180);

// Performance limieten
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 10000);
define('QA_ADVISOR_MAX_EVENTS_PER_SESSION', 1000);
define('QA_ADVISOR_MAX_HEATMAP_POINTS', 50000);

// Privacy instellingen
define('QA_ADVISOR_ANONYMIZE_IP', true);
define('QA_ADVISOR_RESPECT_DNT', true);
define('QA_ADVISOR_COOKIE_CONSENT_REQUIRED', true);

// Automatische cleanup
define('QA_ADVISOR_ENABLE_AUTO_CLEANUP', true);
define('QA_ADVISOR_CLEANUP_SCHEDULE', 'daily');

// Caching
define('QA_ADVISOR_ENABLE_OBJECT_CACHE', true);
define('QA_ADVISOR_CACHE_EXPIRATION', 3600);

// === EINDE QA ADVISOR CONFIGURATIE ===
```

## Verificatie van Configuratie

### Status Controleren

Na het toevoegen van configuratie opties:

1. **Ga naar QA Advisor Dashboard**
   - Navigeer naar `QA Advisor > Instellingen > Systeem`
   - Controleer "Configuratie Status" sectie

2. **Database Status**
   - Bekijk huidige database grootte
   - Controleer actieve limieten
   - Verifieer cleanup schema

### Testing

```php
// Test configuratie (voeg tijdelijk toe aan functions.php)
function test_qa_advisor_config() {
    if (current_user_can('administrator')) {
        echo '<div class="notice notice-info">';
        echo '<h3>QA Advisor Configuratie Test</h3>';
        echo '<p>Data Retentie: ' . (defined('QA_ADVISOR_DATA_RETENTION_DAYS') ? QA_ADVISOR_DATA_RETENTION_DAYS : 'Niet ingesteld') . ' dagen</p>';
        echo '<p>Max Sessies: ' . (defined('QA_ADVISOR_MAX_SESSIONS_PER_DAY') ? QA_ADVISOR_MAX_SESSIONS_PER_DAY : 'Niet ingesteld') . '</p>';
        echo '<p>Auto Cleanup: ' . (defined('QA_ADVISOR_ENABLE_AUTO_CLEANUP') && QA_ADVISOR_ENABLE_AUTO_CLEANUP ? 'Ingeschakeld' : 'Uitgeschakeld') . '</p>';
        echo '</div>';
    }
}
add_action('admin_notices', 'test_qa_advisor_config');
```

## Troubleshooting

### Veelvoorkomende Problemen

**Probleem**: Configuratie wordt niet toegepast
```php
// Controleer of constanten correct zijn gedefinieerd
if (defined('QA_ADVISOR_DATA_RETENTION_DAYS')) {
    echo 'Configuratie geladen: ' . QA_ADVISOR_DATA_RETENTION_DAYS;
} else {
    echo 'Configuratie niet gevonden';
}
```

**Probleem**: Database groeit te snel
```php
// Verhoog cleanup frequentie
define('QA_ADVISOR_CLEANUP_SCHEDULE', 'hourly');
define('QA_ADVISOR_DATA_RETENTION_DAYS', 30); // Verlaag retentie
```

**Probleem**: Performance problemen
```php
// Verlaag limieten
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 5000);
define('QA_ADVISOR_ENABLE_SAMPLING', true);
define('QA_ADVISOR_SAMPLING_RATE', 0.5);
```

## Volgende Stappen

Na het configureren van data limieten:

1. **[Dashboard](../2-screens-and-operations/01-dashboard.md)** - Verken QA Advisor functies
2. **[Instellingen](../2-screens-and-operations/11-settings.md)** - Configureer geavanceerde opties
3. **[Heatmaps](../2-screens-and-operations/heatmaps.md)** - Begin met heatmap analyse

Uw QA Advisor data configuratie is nu geoptimaliseerd!
