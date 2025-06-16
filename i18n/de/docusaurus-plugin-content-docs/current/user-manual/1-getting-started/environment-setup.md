---
sidebar_position: 2
---

# Umgebungseinrichtung

Dieser Leitfaden hilft Ihnen dabei, Ihre Server-Umgebung für optimale Leistung mit QA Advisor zu konfigurieren.

## Systemanforderungen

### Mindestanforderungen
- **WordPress**: Version 5.9 oder höher
- **PHP**: Version 7.4 oder höher
- **MySQL**: Version 5.7 oder höher (oder MariaDB 10.2+)
- **Speicher**: Mindestens 128MB PHP-Speicherlimit
- **Festplattenspeicher**: 50MB verfügbarer Speicherplatz

### Empfohlene Spezifikationen
- **WordPress**: Neueste stabile Version
- **PHP**: Version 8.0 oder höher
- **MySQL**: Version 8.0 oder höher
- **Speicher**: 256MB oder mehr PHP-Speicherlimit
- **Festplattenspeicher**: 200MB oder mehr verfügbarer Speicherplatz

## PHP-Konfiguration

### Speicherlimit erhöhen

Für Websites mit hohem Traffic empfehlen wir, das PHP-Speicherlimit zu erhöhen:

```php
// In wp-config.php hinzufügen
ini_set('memory_limit', '256M');
```

Oder in Ihrer `.htaccess` Datei:

```apache
php_value memory_limit 256M
```

### Ausführungszeit konfigurieren

Für große Datenverarbeitungen:

```php
// In wp-config.php
ini_set('max_execution_time', 300);
```

### Upload-Limits

Für Datenimporte und -exporte:

```php
// In wp-config.php
ini_set('upload_max_filesize', '64M');
ini_set('post_max_size', '64M');
```

## Datenbank-Optimierung

### MySQL-Konfiguration

Empfohlene MySQL-Einstellungen für QA Advisor:

```sql
-- Erhöhen Sie die maximale Verbindungsanzahl
SET GLOBAL max_connections = 200;

-- Optimieren Sie den Query-Cache
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = ON;

-- Erhöhen Sie die InnoDB-Pufferpool-Größe
SET GLOBAL innodb_buffer_pool_size = 256M;
```

### Datenbank-Wartung

Regelmäßige Wartungsaufgaben:

1. **Tabellen optimieren**:
   ```sql
   OPTIMIZE TABLE wp_qa_advisor_data;
   OPTIMIZE TABLE wp_qa_advisor_sessions;
   ```

2. **Alte Daten bereinigen**:
   - QA Advisor bietet automatische Datenbereinigung
   - Konfigurierbar in den Plugin-Einstellungen

## Caching-Konfiguration

### WordPress-Cache

QA Advisor ist kompatibel mit den meisten Caching-Plugins:

- **WP Rocket**: Automatische Kompatibilität
- **W3 Total Cache**: Erfordert Ausschluss von QA Advisor JavaScript
- **WP Super Cache**: Funktioniert ohne zusätzliche Konfiguration

### Cache-Ausschlüsse

Fügen Sie diese zu Ihren Cache-Ausschlüssen hinzu:

```
/wp-content/plugins/qa-advisor/assets/js/
/wp-admin/admin-ajax.php?action=qa_advisor_*
```

## Server-Konfiguration

### Apache-Konfiguration

Empfohlene `.htaccess` Regeln:

```apache
# QA Advisor Optimierungen
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
</IfModule>

# Komprimierung aktivieren
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>
```

### Nginx-Konfiguration

Für Nginx-Server:

```nginx
# QA Advisor Optimierungen
location ~* \.(js|css)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}

# Gzip-Komprimierung
gzip on;
gzip_types text/css application/javascript;
```

## Sicherheitseinstellungen

### Dateiberechtigungen

Empfohlene Berechtigungen:

```bash
# Plugin-Verzeichnis
chmod 755 /wp-content/plugins/qa-advisor/
chmod 644 /wp-content/plugins/qa-advisor/*.php

# Upload-Verzeichnis (falls verwendet)
chmod 755 /wp-content/uploads/qa-advisor/
chmod 644 /wp-content/uploads/qa-advisor/*
```

### Firewall-Konfiguration

Stellen Sie sicher, dass diese Endpunkte zugänglich sind:

- `/wp-admin/admin-ajax.php` (für AJAX-Anfragen)
- `/wp-content/plugins/qa-advisor/assets/` (für statische Dateien)

## Leistungsüberwachung

### Überwachungstools

Empfohlene Tools zur Leistungsüberwachung:

1. **Query Monitor** (WordPress Plugin)
2. **New Relic** (Server-Monitoring)
3. **GTmetrix** (Website-Geschwindigkeit)

### Leistungsmetriken

Überwachen Sie diese Schlüsselmetriken:

- **Seitenladezeit**: < 3 Sekunden
- **Datenbankabfragen**: < 50 pro Seite
- **Speicherverbrauch**: < 80% des verfügbaren Speichers
- **CPU-Auslastung**: < 70% während Spitzenzeiten

## Fehlerbehebung

### Häufige Probleme

**Problem**: Langsame Dashboard-Ladezeiten
**Lösung**: Erhöhen Sie das PHP-Speicherlimit und optimieren Sie die Datenbank

**Problem**: JavaScript-Fehler
**Lösung**: Überprüfen Sie Cache-Ausschlüsse und Plugin-Konflikte

**Problem**: Fehlende Tracking-Daten
**Lösung**: Überprüfen Sie Firewall-Einstellungen und AJAX-Endpunkte

### Debug-Modus

Aktivieren Sie den Debug-Modus für detaillierte Fehlerprotokolle:

```php
// In wp-config.php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('QA_ADVISOR_DEBUG', true);
```

## Nächste Schritte

Nach der Umgebungseinrichtung:

1. [Konfigurieren Sie Datenlimits](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Verstehen Sie jQuery-Verzögerung](/docs/user-manual/getting-started/when-defer-jquery)
3. [Erkunden Sie das Dashboard](/docs/user-manual/screens-and-operations/dashboard)

## Support

Für weitere Unterstützung bei der Umgebungseinrichtung:
- Konsultieren Sie unsere [FAQ](/docs/faq)
- Kontaktieren Sie unser technisches Support-Team
- Besuchen Sie unsere [Community-Foren](https://github.com/quarka-org)
