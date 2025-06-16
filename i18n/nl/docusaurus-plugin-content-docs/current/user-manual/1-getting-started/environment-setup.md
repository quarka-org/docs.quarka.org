---
sidebar_position: 3
---

# Omgeving Instellen

Deze gids helpt u bij het optimaliseren van uw WordPress omgeving voor QA Advisor om de beste prestaties en compatibiliteit te garanderen.

## WordPress Omgeving Vereisten

### Minimale Vereisten
- **WordPress**: 5.0 of hoger
- **PHP**: 7.4 of hoger (aanbevolen: 8.1+)
- **MySQL**: 5.6 of hoger (of MariaDB 10.1+)
- **Geheugen**: 128MB minimum (aanbevolen: 256MB+)
- **Disk Ruimte**: 50MB vrije ruimte

### Aanbevolen Configuratie
- **WordPress**: Nieuwste stabiele versie
- **PHP**: 8.1 of 8.2 voor optimale prestaties
- **MySQL**: 8.0+ of MariaDB 10.5+
- **Geheugen**: 512MB of meer
- **Disk Ruimte**: 200MB+ voor uitgebreide data opslag

## PHP Configuratie

### Geheugen Limiet Verhogen

QA Advisor heeft voldoende geheugen nodig voor data verwerking:

```php
// In wp-config.php
define('WP_MEMORY_LIMIT', '256M');

// Of in .htaccess
php_value memory_limit 256M

// Of in php.ini
memory_limit = 256M
```

### Uitvoeringstijd Configuratie

Voor grote datasets en heatmap generatie:

```php
// In wp-config.php
ini_set('max_execution_time', 300);

// Of in .htaccess
php_value max_execution_time 300

// Of in php.ini
max_execution_time = 300
```

### Upload Limieten

Voor data import/export functionaliteiten:

```php
// In php.ini
upload_max_filesize = 64M
post_max_size = 64M
max_file_uploads = 20
```

## Database Optimalisatie

### MySQL/MariaDB Instellingen

Voor optimale QA Advisor prestaties:

```sql
-- Verhoog query cache (indien beschikbaar)
SET GLOBAL query_cache_size = 268435456;

-- Optimaliseer InnoDB buffer pool
SET GLOBAL innodb_buffer_pool_size = 134217728;

-- Verhoog max connections indien nodig
SET GLOBAL max_connections = 200;
```

### Database Onderhoud

Regelmatig onderhoud voor optimale prestaties:

```sql
-- Optimaliseer QA Advisor tabellen
OPTIMIZE TABLE wp_qa_advisor_sessions;
OPTIMIZE TABLE wp_qa_advisor_events;
OPTIMIZE TABLE wp_qa_advisor_heatmaps;

-- Controleer tabel integriteit
CHECK TABLE wp_qa_advisor_sessions;
```

## WordPress Configuratie

### wp-config.php Optimalisaties

Essentiële instellingen voor QA Advisor:

```php
// Verhoog WordPress geheugen limiet
define('WP_MEMORY_LIMIT', '256M');

// Schakel WordPress cron in (voor geplande taken)
define('DISABLE_WP_CRON', false);

// Verhoog heartbeat interval voor real-time functies
define('WP_POST_REVISIONS', 3);

// Database reparatie inschakelen (indien nodig)
define('WP_ALLOW_REPAIR', true);
```

### Caching Configuratie

QA Advisor werkt met de meeste caching plugins:

```php
// Sluit QA Advisor admin pagina's uit van caching
// Voor WP Rocket
if (!defined('DONOTCACHEPAGE')) {
    define('DONOTCACHEPAGE', true);
}

// Voor W3 Total Cache
if (!defined('DONOTCACHEDB')) {
    define('DONOTCACHEDB', true);
}
```

## Server Configuratie

### Apache Configuratie

Optimale .htaccess instellingen:

```apache
# Verhoog PHP limieten
php_value memory_limit 256M
php_value max_execution_time 300
php_value upload_max_filesize 64M
php_value post_max_size 64M

# Compressie voor QA Advisor assets
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>

# Browser caching voor QA Advisor assets
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Nginx Configuratie

Voor Nginx servers:

```nginx
# PHP configuratie
location ~ \.php$ {
    fastcgi_read_timeout 300;
    fastcgi_buffer_size 128k;
    fastcgi_buffers 4 256k;
    fastcgi_busy_buffers_size 256k;
}

# Compressie
gzip on;
gzip_types text/css application/javascript application/json;

# Browser caching
location ~* \.(css|js|json)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}
```

## Plugin Compatibiliteit

### Caching Plugins

QA Advisor is getest met:
- **WP Rocket**: Volledig compatibel
- **W3 Total Cache**: Compatibel met configuratie
- **WP Super Cache**: Basis compatibiliteit
- **LiteSpeed Cache**: Volledig compatibel

### Security Plugins

Configuratie voor security plugins:

```php
// Wordfence - Sta QA Advisor AJAX calls toe
// Voeg toe aan Wordfence whitelist:
// wp-admin/admin-ajax.php?action=qa_advisor_*

// Sucuri - Configureer rate limiting
// Verhoog limiet voor QA Advisor endpoints
```

### Performance Plugins

Optimalisatie met performance plugins:

- **Autoptimize**: Sluit QA Advisor scripts uit van optimalisatie
- **WP Optimize**: Configureer database cleanup schema's
- **Query Monitor**: Gebruik voor QA Advisor performance monitoring

## Hosting Omgeving

### Gedeelde Hosting

Voor gedeelde hosting providers:

1. **Controleer Resource Limieten**
   - Verifieer geheugen en CPU limieten
   - Controleer database verbinding limieten
   - Test uitvoeringstijd restricties

2. **Optimaliseer Instellingen**
   - Gebruik conservatieve geheugen instellingen
   - Schakel intensieve functies uit indien nodig
   - Plan data verwerking tijdens rustige uren

### VPS/Dedicated Servers

Voor VPS en dedicated servers:

1. **Server Resources**
   - Alloceer voldoende RAM (minimum 1GB)
   - Zorg voor SSD opslag voor database
   - Configureer adequate CPU resources

2. **Database Optimalisatie**
   - Tune MySQL/MariaDB configuratie
   - Implementeer database caching
   - Configureer regelmatige backups

### Cloud Hosting

Voor cloud platforms (AWS, Google Cloud, Azure):

1. **Schaalbaarheid**
   - Configureer auto-scaling voor traffic pieken
   - Gebruik managed database services
   - Implementeer CDN voor assets

2. **Monitoring**
   - Stel resource monitoring in
   - Configureer alerting voor performance issues
   - Gebruik cloud-native caching oplossingen

## Troubleshooting

### Veelvoorkomende Problemen

**Geheugen Fouten**
```
Fatal error: Allowed memory size exhausted
```
Oplossing: Verhoog PHP memory_limit naar 256M of hoger

**Timeout Fouten**
```
Maximum execution time exceeded
```
Oplossing: Verhoog max_execution_time naar 300 seconden

**Database Verbinding Fouten**
```
Error establishing a database connection
```
Oplossing: Controleer database credentials en verhoog max_connections

### Performance Issues

**Langzame Dashboard Loading**
- Controleer database indexen
- Optimaliseer MySQL configuratie
- Verhoog PHP memory limit

**Heatmap Generatie Problemen**
- Verhoog uitvoeringstijd limiet
- Controleer beschikbare disk ruimte
- Verifieer GD library installatie

## Verificatie

### Systeem Status Controleren

Na configuratie, controleer:

1. **QA Advisor Status**
   - Ga naar QA Advisor > Instellingen > Systeem Status
   - Controleer alle groene vinkjes
   - Los eventuele waarschuwingen op

2. **Performance Test**
   - Test dashboard laadtijden
   - Verifieer heatmap generatie
   - Controleer real-time data updates

3. **Compatibiliteit Test**
   - Test met actieve plugins
   - Verifieer theme compatibiliteit
   - Controleer mobile responsiveness

## Volgende Stappen

Na het optimaliseren van uw omgeving:

1. **[jQuery Configuratie](./when-defer-jquery.md)** - Los jQuery conflicten op
2. **[Data Limieten](./set-data-limit-wpconfig.md)** - Configureer data opslag
3. **[Dashboard](../2-screens-and-operations/01-dashboard.md)** - Begin met QA Advisor gebruiken

Uw WordPress omgeving is nu geoptimaliseerd voor QA Advisor!
