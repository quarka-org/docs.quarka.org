---
sidebar_position: 2
title: Umgebungseinrichtung
---

# Umgebungseinrichtung

Um eine genaue Verfolgung und optimale Leistung mit QA Advisor zu gewährleisten, empfehlen wir, Ihre WordPress-Umgebung ordnungsgemäß zu konfigurieren. Dieser Leitfaden behandelt Server-, WordPress- und Plugin-Konfigurationen für optimale Leistung.

## Systemanforderungen

### Mindestanforderungen
- **WordPress**: Version 5.9 oder höher
- **PHP**: Version 7.4 oder höher
- **MySQL**: Version 5.7 oder höher (oder MariaDB 10.2+)
- **Speicher**: Mindestens 128MB PHP-Speicherlimit
- **Festplattenspeicher**: 50MB verfügbarer Speicher

### Empfohlene Spezifikationen
- **WordPress**: Neueste stabile Version
- **PHP**: Version 8.0 oder höher
- **MySQL**: Version 8.0 oder höher
- **Speicher**: 256MB oder mehr PHP-Speicherlimit
- **Festplattenspeicher**: 200MB oder mehr verfügbarer Speicher

## Server-Konfiguration

### PHP-Einstellungen

Für optimale Leistung konfigurieren Sie diese PHP-Einstellungen:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### JavaScript-Komprimierung & Minifizierung

Komprimieren, minifizieren oder kombinieren Sie **keine** JavaScript-Dateien, die von QA Advisor verwendet werden.  
Einige Optimierungs-Plugins oder Themes können mit Tracking-Skripten interferieren, indem sie deren Ausführung modifizieren oder verzögern.

> ✅ Überprüfen Sie Ihre Cache- oder Optimierungs-Plugin-Einstellungen  
> ✅ Deaktivieren Sie JS-Minifizierung oder defer/async für QA Advisor-Skripte

Für weitere technische Hintergründe siehe [Wenn jQuery verzögert wird](/docs/user-manual/getting-started/when-defer-jquery).

### Datenbankoptimierung

Für bessere Datenbankleistung:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## WordPress-Konfiguration

### wp-config.php Einstellungen

Fügen Sie diese Konfigurationen zu Ihrer `wp-config.php`-Datei hinzu:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Plugin- & Theme-Kompatibilität

QA Advisor funktioniert mit den meisten großen Plugins und Themes. Wir empfehlen jedoch:

- JavaScript defer/async für kritische Skripte zu deaktivieren
- Sicherzustellen, dass Ihr Cache-Plugin Ausgaben von `qa-heatmap-analytics` zulässt
- Duplikation mit anderen Tracking-Tools zu vermeiden, die globale Events modifizieren

### Cache-Plugin-Konfiguration

**WP Rocket**: QA Advisor-Skripte von der Optimierung ausschließen
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Zu JavaScript-Ausschlüssen hinzufügen  
**WP Super Cache**: Kompatibel ohne zusätzliche Konfiguration

## CDN & Server-Migration

Wenn Sie ein CDN verwenden (z.B. Cloudflare) oder kürzlich Ihren Server migriert haben:

- Alle Caches löschen (Browser, Plugin, CDN)
- Bestätigen, dass QA Advisor-Skripte nicht blockiert oder verzögert werden
- Sicherstellen, dass die Server-Zeitzone korrekt ist (wird für Datengruppierung verwendet)

### Cloudflare-Konfiguration

```
URL: *ihreseite.com/wp-content/plugins/qa-heatmap-analytics/*
Einstellungen:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 Monat
```

## Sicherheitskonfiguration

### Dateiberechtigungen

Setzen Sie angemessene Dateiberechtigungen:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Firewall-Einstellungen

Stellen Sie sicher, dass diese Endpunkte zugänglich sind:
- `/wp-admin/admin-ajax.php` (für AJAX-Anfragen)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (für statische Dateien)

## Leistungsüberwachung

### Wichtige zu überwachende Metriken

- **Speicherverbrauch**: Unter 80% des Limits halten
- **Seitenladezeit**: Ziel < 3 Sekunden
- **Datenbankabfragen**: Langsame Abfragen überwachen
- **Festplattenspeicher**: QA Advisor-Datenwachstum prüfen

### Überwachungstools

- **Query Monitor** - WordPress-Plugin für Debugging
- **New Relic** - APM-Überwachung
- **GTmetrix** - Frontend-Leistungstests

## Fehlerbehebung

### Häufige Probleme

**Speicherfehler**:
```php
ini_set('memory_limit', '512M');
```

**Timeout-Probleme**:
```php
set_time_limit(300);
```

**Skript-Ladeprobleme**:
1. Browser-Konsole auf JavaScript-Fehler prüfen
2. Cache-Plugin-Ausschlüsse verifizieren
3. Firewall-Einstellungen bestätigen

### Skript-Verifizierung

Um zu verifizieren, dass das Tracking-Skript korrekt geladen wird:

1. Besuchen Sie Ihre Website, während Sie **nicht eingeloggt** sind
2. Rechtsklick und "Seitenquelltext anzeigen" wählen
3. Im HTML nach `qahm` oder `qahmz` suchen

> Wenn diese Strings nicht gefunden werden, könnte das Skript blockiert sein oder nicht laden.  
> Prüfen Sie auf JavaScript-Fehler oder Plugin-Konflikte.

## Nächste Schritte

Nach der Umgebungseinrichtung:

1. [Datenlimits konfigurieren](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [jQuery-Konflikte behandeln](/docs/user-manual/getting-started/when-defer-jquery)
3. [Dashboard erkunden](/docs/user-manual/screens-and-operations/dashboard)

---
