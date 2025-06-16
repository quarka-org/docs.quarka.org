---
sidebar_position: 11
---

# Einstellungen

Die Einstellungen-Seite in QA Advisor ist Ihr zentraler Ort für die Konfiguration aller Aspekte des Plugins. Hier können Sie Tracking-Verhalten, Datenschutz-Einstellungen, Performance-Parameter und erweiterte Funktionen anpassen.

## Überblick

Die Einstellungen sind in verschiedene Kategorien unterteilt, um eine einfache Navigation und Konfiguration zu ermöglichen. Jede Kategorie behandelt spezifische Aspekte von QA Advisor.

## Tracking-Einstellungen

### 📊 Grundlegendes Tracking

**Tracking-Aktivierung**
```php
// Grundlegende Tracking-Konfiguration
$tracking_settings = array(
    'enable_tracking' => true,
    'track_logged_in_users' => false,
    'track_admin_users' => false,
    'exclude_bots' => true,
    'minimum_session_duration' => 5 // Sekunden
);
```

**Datensammlung-Optionen**
- Seitenaufrufe und Sessions
- Klick-Tracking
- Scroll-Verhalten
- Formular-Interaktionen
- Download-Tracking
- Externe Link-Klicks

### 🎯 Erweiterte Tracking-Optionen

**Custom Events**
```javascript
// Custom Event-Tracking konfigurieren
const customEvents = {
    video_play: {
        enabled: true,
        track_progress: true,
        milestones: [25, 50, 75, 100] // Prozent
    },
    file_downloads: {
        enabled: true,
        track_file_types: ['.pdf', '.doc', '.zip'],
        track_file_size: true
    },
    social_shares: {
        enabled: true,
        platforms: ['facebook', 'twitter', 'linkedin']
    }
};
```

## Datenschutz-Einstellungen

### 🔒 DSGVO-Compliance

**Datenschutz-Konfiguration**
```php
// DSGVO-konforme Einstellungen
$privacy_settings = array(
    'anonymize_ip' => true,
    'cookie_consent_required' => true,
    'data_retention_days' => 90,
    'enable_opt_out' => true,
    'respect_do_not_track' => true
);
```

**Cookie-Management**
- Cookie-Consent-Integration
- Cookie-freies Tracking (optional)
- Granulare Cookie-Kontrolle
- Automatische Cookie-Bereinigung

### 🛡️ Datenminimierung

**Datensammlung-Limits**
```php
// Datenminimierung-Einstellungen
define('QA_ADVISOR_COLLECT_USER_AGENT', false);
define('QA_ADVISOR_COLLECT_REFERRER', true);
define('QA_ADVISOR_COLLECT_SCREEN_RESOLUTION', true);
define('QA_ADVISOR_ANONYMIZE_SEARCH_TERMS', true);
```

## Performance-Einstellungen

### ⚡ Optimierung

**Cache-Konfiguration**
```php
// Cache-Einstellungen
$cache_settings = array(
    'enable_caching' => true,
    'cache_duration' => 3600, // 1 Stunde
    'cache_type' => 'redis', // file, redis, memcached
    'compress_data' => true
);
```

**Batch-Verarbeitung**
- Datenverarbeitung in Batches
- Hintergrund-Verarbeitung
- Cron-Job-Konfiguration
- Ressourcen-Limits

### 🔧 Erweiterte Performance

**Datenbank-Optimierung**
```php
// Datenbank-Performance-Einstellungen
$db_settings = array(
    'enable_indexing' => true,
    'optimize_queries' => true,
    'batch_size' => 1000,
    'max_execution_time' => 300
);
```

## Heatmap-Einstellungen

### 🔥 Heatmap-Konfiguration

**Generierung-Einstellungen**
```php
// Heatmap-Konfiguration
$heatmap_settings = array(
    'auto_generate' => true,
    'min_data_points' => 100,
    'resolution' => 'medium', // low, medium, high, ultra
    'update_frequency' => 'daily',
    'max_active_heatmaps' => 20
);
```

**Qualitäts-Einstellungen**
- Auflösung und Detailgrad
- Datenqualitäts-Filter
- Rauschunterdrückung
- Glättungsalgorithmen

### 📊 Heatmap-Typen

**Verfügbare Heatmap-Typen**
- Click Heatmaps
- Move Heatmaps
- Scroll Heatmaps
- Attention Heatmaps
- Touch Heatmaps (Mobile)

## Brains-Einstellungen

### 🧠 KI-Konfiguration

**Brains-Aktivierung**
```php
// KI-Brains-Einstellungen
$brains_settings = array(
    'enable_brains' => true,
    'confidence_threshold' => 0.8,
    'update_frequency' => 'hourly',
    'max_insights_per_day' => 50
);
```

**Verfügbare Brains**
- Behavior Analysis Brain
- Performance Brain
- Conversion Brain
- Mobile Experience Brain
- Content Optimization Brain

### 🎯 Insight-Konfiguration

**Insight-Generierung**
```javascript
// Insight-Konfiguration
const insightConfig = {
    priority_levels: ['low', 'medium', 'high', 'critical'],
    categories: ['performance', 'ux', 'conversion', 'content'],
    auto_implement: false, // Automatische Umsetzung
    notification_threshold: 'medium'
};
```

## Integration-Einstellungen

### 🔗 Third-Party-Integrationen

**Google Analytics Integration**
```php
// GA4-Integration
$ga_integration = array(
    'enable_ga4_sync' => true,
    'ga4_measurement_id' => 'G-XXXXXXXXXX',
    'sync_goals' => true,
    'sync_audiences' => true
);
```

**E-Commerce-Integration**
- WooCommerce-Integration
- Easy Digital Downloads
- Custom E-Commerce-Tracking
- Revenue-Attribution

### 📧 Benachrichtigungen

**Notification-Einstellungen**
```php
// Benachrichtigungs-Konfiguration
$notification_settings = array(
    'email_notifications' => true,
    'slack_integration' => false,
    'webhook_urls' => array(),
    'notification_frequency' => 'daily'
);
```

## API-Einstellungen

### 🔑 API-Konfiguration

**API-Zugriff**
```php
// API-Einstellungen
$api_settings = array(
    'enable_api' => true,
    'api_version' => 'v1',
    'rate_limit' => 1000, // Anfragen pro Stunde
    'require_authentication' => true
);
```

**Webhook-Konfiguration**
- Webhook-URLs definieren
- Event-Trigger konfigurieren
- Authentifizierung einrichten
- Retry-Mechanismen

### 🛡️ Sicherheits-Einstellungen

**API-Sicherheit**
```php
// Sicherheits-Konfiguration
$security_settings = array(
    'enable_cors' => true,
    'allowed_origins' => array('https://example.com'),
    'api_key_rotation' => 'monthly',
    'log_api_requests' => true
);
```

## Erweiterte Einstellungen

### 🔧 Erweiterte Konfiguration

**wp-config.php Einstellungen**
```php
// Erweiterte wp-config.php Einstellungen
define('QA_ADVISOR_MAX_EXECUTION_TIME', 300);
define('QA_ADVISOR_MEMORY_LIMIT', '256M');
define('QA_ADVISOR_BATCH_SIZE', 1000);
define('QA_ADVISOR_CACHE_DURATION', 3600);
define('QA_ADVISOR_ENABLE_COMPRESSION', true);
```

**Feature-Flags**
```php
// Feature-Aktivierung
define('QA_ADVISOR_ENABLE_HEATMAPS', true);
define('QA_ADVISOR_ENABLE_SESSION_REPLAY', true);
define('QA_ADVISOR_ENABLE_AI_BRAINS', true);
define('QA_ADVISOR_ENABLE_REAL_TIME', true);
```

### 🔧 Server-Konfiguration

**Nginx-Konfiguration**
```nginx
# QA Advisor Nginx-Optimierungen
location ~* /wp-content/plugins/qa-advisor/assets/ {
    expires 1M;
    add_header Cache-Control "public, immutable";
    gzip on;
    gzip_types application/javascript text/css;
}
```

**Apache-Konfiguration**
```apache
# QA Advisor Apache-Optimierungen
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
</IfModule>
```

## Fehlerbehebung

### 🔍 Diagnose-Tools

**System-Status-Check**
```php
// System-Diagnose
function qa_advisor_system_check() {
    return array(
        'php_version' => PHP_VERSION,
        'wordpress_version' => get_bloginfo('version'),
        'memory_limit' => ini_get('memory_limit'),
        'max_execution_time' => ini_get('max_execution_time'),
        'database_version' => get_database_version(),
        'ssl_enabled' => is_ssl(),
        'curl_available' => function_exists('curl_init'),
        'gd_available' => extension_loaded('gd')
    );
}
```

**Konfigurations-Validierung**
- Einstellungs-Konsistenz-Prüfung
- Abhängigkeits-Validierung
- Performance-Impact-Analyse
- Sicherheits-Audit

### 🛠️ Reparatur-Tools

**Einstellungen zurücksetzen**
```php
// Einstellungen-Reset
function reset_qa_advisor_settings($category = 'all') {
    $default_settings = get_qa_advisor_default_settings();
    
    switch ($category) {
        case 'tracking':
            update_option('qa_advisor_tracking_settings', $default_settings['tracking']);
            break;
        case 'privacy':
            update_option('qa_advisor_privacy_settings', $default_settings['privacy']);
            break;
        case 'all':
            foreach ($default_settings as $key => $value) {
                update_option('qa_advisor_' . $key . '_settings', $value);
            }
            break;
    }
}
```

## Nächste Schritte

Nach der Einstellungs-Konfiguration:

1. [Nutzen Sie die Hilfe-Ressourcen](/docs/user-manual/screens-and-operations/help)
2. [Erstellen Sie optimierte Heatmaps](/docs/user-manual/screens-and-operations/heatmaps)
3. [Überwachen Sie alle Seiten](/docs/user-manual/screens-and-operations/all-pages)
4. [Richten Sie spezifische Ziele ein](/docs/user-manual/screens-and-operations/goals)

## Support

Für erweiterte Einstellungs-Konfiguration:
- Konsultieren Sie unsere [FAQ](/docs/faq)
- Kontaktieren Sie unser technisches Support-Team
- Besuchen Sie unsere [Community-Foren](https://github.com/quarka-org)
- Schauen Sie sich unsere [Performance-Optimierungsanleitung](/docs/user-manual/getting-started/environment-setup) an
