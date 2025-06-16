---
sidebar_position: 4
---

# Datenlimits in wp-config.php konfigurieren

Für Websites mit hohem Traffic oder umfangreichen Analytics-Anforderungen ist es wichtig, die Datenlimits von QA Advisor richtig zu konfigurieren. Dieser Leitfaden zeigt Ihnen, wie Sie diese Einstellungen in der wp-config.php-Datei vornehmen.

## Warum Datenlimits konfigurieren?

### Performance-Optimierung
- Verhindert Speicherüberlauf bei großen Datenmengen
- Optimiert Datenbankabfragen
- Verbessert Dashboard-Ladezeiten
- Reduziert Server-Ressourcenverbrauch

### Compliance und Datenschutz
- Einhaltung von Datenaufbewahrungsrichtlinien
- DSGVO-konforme Datenlimitierung
- Automatische Datenbereinigung
- Kontrollierte Speichernutzung

## Grundlegende Konfiguration

### wp-config.php Einstellungen

Fügen Sie folgende Konstanten zu Ihrer wp-config.php-Datei hinzu:

```php
// QA Advisor Datenlimit-Konfiguration
// Fügen Sie diese Zeilen vor "/* Das war's, Schluss mit dem Bearbeiten! */" ein

// === QA ADVISOR DATENLIMITS ===

// Maximale Anzahl der Sitzungen pro Tag
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 10000);

// Maximale Anzahl der Seitenaufrufe pro Tag
define('QA_ADVISOR_MAX_PAGEVIEWS_PER_DAY', 50000);

// Maximale Anzahl der Events pro Tag
define('QA_ADVISOR_MAX_EVENTS_PER_DAY', 100000);

// Datenaufbewahrung in Tagen
define('QA_ADVISOR_DATA_RETENTION_DAYS', 90);

// Heatmap-Datenlimits
define('QA_ADVISOR_MAX_HEATMAP_DATA_POINTS', 100000);
define('QA_ADVISOR_MAX_ACTIVE_HEATMAPS', 20);

// Batch-Verarbeitung
define('QA_ADVISOR_BATCH_SIZE', 1000);
define('QA_ADVISOR_MAX_PROCESSING_TIME', 300); // 5 Minuten
```

## Erweiterte Konfigurationsoptionen

### Traffic-basierte Limits

```php
// Dynamische Limits basierend auf Website-Größe

// Kleine Website (< 1.000 Besucher/Tag)
define('QA_ADVISOR_TRAFFIC_TIER', 'small');
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 2000);
define('QA_ADVISOR_MAX_PAGEVIEWS_PER_DAY', 10000);
define('QA_ADVISOR_DATA_RETENTION_DAYS', 30);

// Mittlere Website (1.000 - 10.000 Besucher/Tag)
define('QA_ADVISOR_TRAFFIC_TIER', 'medium');
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 15000);
define('QA_ADVISOR_MAX_PAGEVIEWS_PER_DAY', 75000);
define('QA_ADVISOR_DATA_RETENTION_DAYS', 60);

// Große Website (> 10.000 Besucher/Tag)
define('QA_ADVISOR_TRAFFIC_TIER', 'large');
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 50000);
define('QA_ADVISOR_MAX_PAGEVIEWS_PER_DAY', 250000);
define('QA_ADVISOR_DATA_RETENTION_DAYS', 90);

// Enterprise Website (> 100.000 Besucher/Tag)
define('QA_ADVISOR_TRAFFIC_TIER', 'enterprise');
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 200000);
define('QA_ADVISOR_MAX_PAGEVIEWS_PER_DAY', 1000000);
define('QA_ADVISOR_DATA_RETENTION_DAYS', 365);
```

### Speicher-Optimierung

```php
// Speicher- und Performance-Optimierungen

// PHP-Speicherlimit für QA Advisor-Operationen
define('QA_ADVISOR_MEMORY_LIMIT', '256M');

// Maximale Ausführungszeit für Datenverarbeitung
define('QA_ADVISOR_MAX_EXECUTION_TIME', 300);

// Datenbankabfrage-Limits
define('QA_ADVISOR_MAX_QUERY_ROWS', 10000);
define('QA_ADVISOR_QUERY_TIMEOUT', 30);

// Cache-Konfiguration
define('QA_ADVISOR_CACHE_DURATION', 3600); // 1 Stunde
define('QA_ADVISOR_ENABLE_OBJECT_CACHE', true);
```

### Heatmap-spezifische Limits

```php
// Heatmap-Konfiguration für verschiedene Anforderungen

// Standard-Heatmap-Einstellungen
define('QA_ADVISOR_HEATMAP_RESOLUTION', 'medium'); // low, medium, high
define('QA_ADVISOR_HEATMAP_MAX_DATA_POINTS', 50000);
define('QA_ADVISOR_HEATMAP_RETENTION_DAYS', 30);

// Hochauflösende Heatmaps (für Premium-Nutzer)
define('QA_ADVISOR_ENABLE_HD_HEATMAPS', true);
define('QA_ADVISOR_HD_HEATMAP_MAX_DATA_POINTS', 200000);
define('QA_ADVISOR_HD_HEATMAP_RESOLUTION', 'ultra'); // ultra, 4k

// Heatmap-Generierung-Limits
define('QA_ADVISOR_MAX_CONCURRENT_HEATMAPS', 5);
define('QA_ADVISOR_HEATMAP_GENERATION_TIMEOUT', 600); // 10 Minuten
```

## Automatische Datenbereinigung

### Konfiguration der automatischen Bereinigung

```php
// Automatische Datenbereinigung aktivieren
define('QA_ADVISOR_ENABLE_AUTO_CLEANUP', true);

// Bereinigungsintervalle
define('QA_ADVISOR_CLEANUP_INTERVAL', 'daily'); // hourly, daily, weekly

// Was bereinigt werden soll
define('QA_ADVISOR_CLEANUP_OLD_SESSIONS', true);
define('QA_ADVISOR_CLEANUP_OLD_PAGEVIEWS', true);
define('QA_ADVISOR_CLEANUP_OLD_EVENTS', true);
define('QA_ADVISOR_CLEANUP_OLD_HEATMAPS', true);

// Bereinigungsrichtlinien
define('QA_ADVISOR_KEEP_AGGREGATED_DATA', true); // Aggregierte Daten behalten
define('QA_ADVISOR_COMPRESS_OLD_DATA', true); // Alte Daten komprimieren
```

### Erweiterte Bereinigungsoptionen

```php
// Granulare Bereinigungskontrolle

// Sitzungsdaten-Bereinigung
define('QA_ADVISOR_SESSION_CLEANUP_AFTER_DAYS', 30);
define('QA_ADVISOR_KEEP_SESSION_SUMMARIES', true);

// Seitenaufruf-Bereinigung
define('QA_ADVISOR_PAGEVIEW_CLEANUP_AFTER_DAYS', 60);
define('QA_ADVISOR_KEEP_DAILY_PAGEVIEW_TOTALS', true);

// Event-Bereinigung
define('QA_ADVISOR_EVENT_CLEANUP_AFTER_DAYS', 90);
define('QA_ADVISOR_KEEP_CONVERSION_EVENTS', true);

// Heatmap-Bereinigung
define('QA_ADVISOR_HEATMAP_CLEANUP_AFTER_DAYS', 45);
define('QA_ADVISOR_KEEP_TOP_PERFORMING_HEATMAPS', true);
```

## Performance-Monitoring

### Überwachung der Datenlimits

```php
// Performance-Monitoring aktivieren
define('QA_ADVISOR_ENABLE_PERFORMANCE_MONITORING', true);

// Monitoring-Schwellenwerte
define('QA_ADVISOR_PERFORMANCE_WARNING_THRESHOLD', 0.8); // 80% der Limits
define('QA_ADVISOR_PERFORMANCE_CRITICAL_THRESHOLD', 0.95); // 95% der Limits

// Benachrichtigungen
define('QA_ADVISOR_ENABLE_LIMIT_NOTIFICATIONS', true);
define('QA_ADVISOR_NOTIFICATION_EMAIL', 'admin@example.com');

// Logging
define('QA_ADVISOR_ENABLE_PERFORMANCE_LOGGING', true);
define('QA_ADVISOR_LOG_LEVEL', 'warning'); // debug, info, warning, error
```

### Automatische Anpassungen

```php
// Dynamische Limit-Anpassung
define('QA_ADVISOR_ENABLE_DYNAMIC_LIMITS', true);

// Automatische Skalierung
define('QA_ADVISOR_AUTO_SCALE_LIMITS', true);
define('QA_ADVISOR_SCALE_FACTOR', 1.5); // 50% Erhöhung bei Bedarf

// Notfall-Modus
define('QA_ADVISOR_ENABLE_EMERGENCY_MODE', true);
define('QA_ADVISOR_EMERGENCY_LIMIT_REDUCTION', 0.5); // 50% Reduktion im Notfall
```

## E-Commerce-spezifische Konfiguration

### Online-Shop-Optimierungen

```php
// E-Commerce-spezifische Datenlimits

// Produktseiten-Tracking
define('QA_ADVISOR_MAX_PRODUCT_VIEWS_PER_DAY', 25000);
define('QA_ADVISOR_PRODUCT_HEATMAP_RETENTION', 60); // Tage

// Conversion-Tracking
define('QA_ADVISOR_MAX_CONVERSIONS_PER_DAY', 5000);
define('QA_ADVISOR_CONVERSION_DATA_RETENTION', 365); // 1 Jahr

// Warenkorb-Analyse
define('QA_ADVISOR_MAX_CART_EVENTS_PER_DAY', 15000);
define('QA_ADVISOR_CART_ABANDONMENT_TRACKING_DAYS', 30);

// Customer Journey
define('QA_ADVISOR_MAX_JOURNEY_STEPS', 20);
define('QA_ADVISOR_JOURNEY_DATA_RETENTION', 180); // 6 Monate
```

## Multisite-Konfiguration

### WordPress-Multisite-Einstellungen

```php
// Multisite-spezifische Limits

if (is_multisite()) {
    // Netzwerk-weite Limits
    define('QA_ADVISOR_NETWORK_MAX_SITES', 100);
    define('QA_ADVISOR_NETWORK_MAX_TOTAL_SESSIONS', 500000);
    
    // Pro-Site-Limits
    define('QA_ADVISOR_SITE_MAX_SESSIONS_PER_DAY', 5000);
    define('QA_ADVISOR_SITE_MAX_PAGEVIEWS_PER_DAY', 25000);
    
    // Zentrale Datenverwaltung
    define('QA_ADVISOR_CENTRALIZED_DATA_STORAGE', true);
    define('QA_ADVISOR_SHARED_ANALYTICS_DATABASE', true);
}
```

## Debugging und Troubleshooting

### Debug-Konfiguration

```php
// Debug-Einstellungen für Datenlimit-Probleme

// Debug-Modus aktivieren
define('QA_ADVISOR_DEBUG_DATA_LIMITS', true);

// Detailliertes Logging
define('QA_ADVISOR_LOG_DATA_OPERATIONS', true);
define('QA_ADVISOR_LOG_LIMIT_VIOLATIONS', true);

// Performance-Profiling
define('QA_ADVISOR_ENABLE_PROFILING', true);
define('QA_ADVISOR_PROFILE_SLOW_QUERIES', true);

// Test-Modus
define('QA_ADVISOR_TEST_MODE', false); // Nur für Entwicklung
define('QA_ADVISOR_SIMULATE_HIGH_TRAFFIC', false); // Nur für Tests
```

### Monitoring-Dashboard

```php
// Erweiterte Monitoring-Optionen

// Real-time Monitoring
define('QA_ADVISOR_ENABLE_REALTIME_MONITORING', true);
define('QA_ADVISOR_MONITORING_REFRESH_INTERVAL', 30); // Sekunden

// Historische Trends
define('QA_ADVISOR_KEEP_MONITORING_HISTORY', true);
define('QA_ADVISOR_MONITORING_HISTORY_DAYS', 30);

// Alerts und Benachrichtigungen
define('QA_ADVISOR_ENABLE_SLACK_NOTIFICATIONS', false);
define('QA_ADVISOR_SLACK_WEBHOOK_URL', ''); // Slack Webhook URL

define('QA_ADVISOR_ENABLE_EMAIL_ALERTS', true);
define('QA_ADVISOR_ALERT_EMAIL_FREQUENCY', 'immediate'); // immediate, hourly, daily
```

## Validierung der Konfiguration

### Konfiguration testen

Nach der Konfiguration sollten Sie die Einstellungen validieren:

1. **WordPress-Admin überprüfen:**
   - Gehen Sie zu QA Advisor → Einstellungen → System-Status
   - Überprüfen Sie die angezeigten Limits
   - Stellen Sie sicher, dass alle Konfigurationen erkannt werden

2. **Performance-Test durchführen:**
   - Überwachen Sie die Website-Performance nach der Konfiguration
   - Überprüfen Sie Speicherverbrauch und Ladezeiten
   - Testen Sie die Datensammlung unter Last

3. **Datenqualität überprüfen:**
   - Stellen Sie sicher, dass wichtige Daten nicht verloren gehen
   - Überprüfen Sie die Genauigkeit der Analytics
   - Validieren Sie Heatmap-Qualität

## Häufige Probleme und Lösungen

### Problem: Datenverlust durch zu niedrige Limits

**Lösung:**
```php
// Limits schrittweise erhöhen
define('QA_ADVISOR_MAX_SESSIONS_PER_DAY', 20000); // Von 10000 erhöht
define('QA_ADVISOR_DATA_RETENTION_DAYS', 120); // Von 90 erhöht
```

### Problem: Performance-Probleme durch zu hohe Limits

**Lösung:**
```php
// Batch-Verarbeitung optimieren
define('QA_ADVISOR_BATCH_SIZE', 500); // Von 1000 reduziert
define('QA_ADVISOR_ENABLE_BACKGROUND_PROCESSING', true);
```

### Problem: Speicherüberlauf

**Lösung:**
```php
// Speicher-Management verbessern
define('QA_ADVISOR_MEMORY_LIMIT', '512M'); // Erhöht
define('QA_ADVISOR_ENABLE_MEMORY_OPTIMIZATION', true);
define('QA_ADVISOR_GARBAGE_COLLECTION_FREQUENCY', 'high');
```

## Nächste Schritte

Nach der Konfiguration der Datenlimits:

1. [Erkunden Sie das Dashboard](/docs/user-manual/screens-and-operations/dashboard)
2. [Richten Sie Ihre ersten Ziele ein](/docs/user-manual/screens-and-operations/goals)
3. [Erstellen Sie Heatmaps](/docs/user-manual/screens-and-operations/heatmaps)
4. [Konfigurieren Sie erweiterte Einstellungen](/docs/user-manual/screens-and-operations/settings)

## Support

Bei Problemen mit der Datenlimit-Konfiguration:
- Überprüfen Sie unsere [FAQ](/docs/faq)
- Kontaktieren Sie unser technisches Support-Team
- Besuchen Sie unsere Community-Foren für Best Practices

Die richtige Konfiguration der Datenlimits ist entscheidend für die optimale Performance von QA Advisor bei gleichzeitiger Einhaltung von Datenschutz- und Compliance-Anforderungen.
