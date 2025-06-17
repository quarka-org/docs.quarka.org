---
sidebar_position: 3
---

# Omgeving Setup

Optimaliseer uw WordPress omgeving voor optimale prestaties met QA Advisor. Deze handleiding behandelt aanbevolen configuraties voor server, hosting en WordPress.

## Gedetailleerde Systeemvereisten

### Minimale Vereisten

| Component | Minimale Vereiste | Aanbevolen |
|-----------|-------------------|------------|
| WordPress | 5.0+ | 6.0+ |
| PHP | 7.4+ | 8.1+ |
| MySQL | 5.6+ | 8.0+ |
| PHP Geheugen | 128MB | 256MB+ |
| Schijfruimte | 50MB | 200MB+ |
| PHP Extensies | json, curl, mbstring | + gd, zip |

### Vereiste PHP Extensies

QA Advisor vereist de volgende PHP extensies:

```php
// Verplichte Extensies
- json (voor data verwerking)
- curl (voor API communicatie)
- mbstring (voor string handling)

// Aanbevolen Extensies
- gd (voor image verwerking)
- zip (voor backups en exports)
- openssl (voor veilige communicatie)
```

## Server Configuratie

### PHP Instellingen

Voeg deze configuraties toe aan uw `php.ini` of `.htaccess` bestand:

```ini
# Geheugen en Uitvoeringstijd
memory_limit = 256M
max_execution_time = 300
max_input_time = 300

# Bestand Uploads
upload_max_filesize = 64M
post_max_size = 64M

# Sessies en Output
session.gc_maxlifetime = 3600
output_buffering = 4096
```

### Apache Configuratie (.htaccess)

Als u Apache gebruikt, voeg toe aan uw `.htaccess` bestand:

```apache
# QA Advisor Optimalisaties
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Cache voor statische resources
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType text/css "access plus 1 month"
        ExpiresByType application/javascript "access plus 1 month"
        ExpiresByType image/png "access plus 1 month"
    </IfModule>
</IfModule>

# Compressie
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>
```

### Nginx Configuratie

Voor Nginx servers, voeg toe aan uw configuratie bestand:

```nginx
# QA Advisor Optimalisaties
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}

# Compressie
gzip on;
gzip_types text/css application/javascript application/json;
gzip_min_length 1000;

# Upload limieten
client_max_body_size 64M;
```

## WordPress Configuratie

### wp-config.php

Voeg deze configuraties toe aan uw `wp-config.php` bestand:

```php
// QA Advisor Optimalisaties
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

// Debug (alleen voor ontwikkeling)
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);

// Cache
define('WP_CACHE', true);
```

### Database Optimalisaties

Om database prestaties te verbeteren:

```sql
-- MySQL optimalisaties voor QA Advisor
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Hosting-Specifieke Configuraties

### Gedeelde Hosting

Voor gedeelde hosting, voeg toe aan `.htaccess` bestand:

```apache
# Geheugen limieten voor gedeelde hosting
php_value memory_limit 256M
php_value max_execution_time 300
php_value upload_max_filesize 32M
php_value post_max_size 32M
```

### Beheerde Hosting (WP Engine, Kinsta, etc.)

De meeste beheerde hosting heeft automatische optimalisaties, maar u heeft mogelijk nodig:

- Contact opnemen met ondersteuning voor verhoogde geheugen limieten
- Compatibiliteit controleren met cache plugins
- Cache uitsluitingen configureren voor QA Advisor

### VPS/Dedicated Servers

Voor volledige controle:

```bash
# OS optimalisaties
echo 'vm.swappiness = 10' >> /etc/sysctl.conf
echo 'net.core.rmem_max = 16777216' >> /etc/sysctl.conf
echo 'net.core.wmem_max = 16777216' >> /etc/sysctl.conf
```

## Cache Plugins en Compatibiliteit

### Ondersteunde Cache Plugins

QA Advisor is compatibel met:

- **WP Rocket** - Automatische configuratie
- **W3 Total Cache** - Vereist handmatige uitsluitingen
- **WP Super Cache** - Compatibel zonder configuratie
- **LiteSpeed Cache** - Automatische optimalisaties

### Uitsluiting Configuraties

Voor cache plugins, sluit deze paden uit:

```
/wp-content/plugins/qa-heatmap-analytics/
/wp-admin/admin-ajax.php?action=qahm_*
```

## Prestatie Monitoring

### Te Monitoren Metrics

- **Geheugengebruik**: Houd onder 80% van limiet
- **Laadtijd**: Doel < 3 seconden
- **Database Queries**: Monitor langzame queries
- **Schijfruimte**: Controleer QA Advisor data groei

### Monitoring Tools

- **Query Monitor** - WordPress plugin voor debugging
- **New Relic** - APM monitoring
- **GTmetrix** - Frontend prestatie tests

## Veelvoorkomende Problemen Oplossen

### Geheugen Fouten

```php
// Tijdelijk geheugen verhogen
ini_set('memory_limit', '512M');
```

### Timeout Problemen

```php
// Uitvoeringstijd verhogen
set_time_limit(300);
```

### Bestandspermissie Problemen

```bash
# Juiste permissies instellen
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

## Beveiliging

### Beveiligings Configuraties

```php
// wp-config.php - Extra beveiliging
define('DISALLOW_FILE_EDIT', true);
define('WP_DEBUG_DISPLAY', false);
define('SCRIPT_DEBUG', false);
```

### Firewall en Bescherming

- Configureer firewall om ongeautoriseerde toegang te blokkeren
- Gebruik SSL/TLS voor alle communicatie
- Implementeer twee-factor authenticatie

## Backup en Herstel

### Backup Strategie

1. **Volledige Backup**: Wekelijks
2. **Database Backup**: Dagelijks
3. **QA Advisor Data Backup**: Dagelijks

### Backup Automatisering

```bash
# Automatische backup script
#!/bin/bash
mysqldump -u user -p database > backup_$(date +%Y%m%d).sql
tar -czf wordpress_backup_$(date +%Y%m%d).tar.gz /path/to/wordpress/
```

## Volgende Stappen

Na omgeving configuratie:

1. **[Data Limieten Instellen](/docs/user-manual/getting-started/set-data-limit-wpconfig)** - Configureer verzameling limieten
2. **[jQuery Beheer](/docs/user-manual/getting-started/when-defer-jquery)** - Los conflicten op
3. **[Dashboard](/docs/user-manual/screens-and-operations/dashboard)** - Begin analyse

## Ondersteuning

Voor omgeving configuratie problemen:

- Raadpleeg [FAQ](/docs/faq) voor veelvoorkomende oplossingen
- Neem contact op met uw hosting provider voor specifieke ondersteuning
- Bezoek [GitHub repository](https://github.com/quarka-org) voor technische ondersteuning

---

Optimale omgeving configuratie zorgt ervoor dat QA Advisor met de beste prestaties draait.
