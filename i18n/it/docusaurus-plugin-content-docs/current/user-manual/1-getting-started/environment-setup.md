---
sidebar_position: 3
---

# Configurazione Ambiente

Questa guida ti aiuterà a configurare l'ambiente ottimale per QA Advisor, garantendo prestazioni massime e compatibilità con il tuo setup WordPress.

## Requisiti di Sistema

### Requisiti Server Minimi
- **PHP**: 7.4 o superiore (raccomandato: 8.0+)
- **WordPress**: 5.0 o superiore (raccomandato: 6.0+)
- **MySQL**: 5.7 o superiore / MariaDB 10.2+
- **Memoria PHP**: 256MB minimo (raccomandato: 512MB+)
- **Spazio Disco**: 50MB per il plugin + spazio per i dati

### Requisiti Server Raccomandati
- **PHP**: 8.1 o superiore
- **WordPress**: Ultima versione stabile
- **MySQL**: 8.0+ / MariaDB 10.5+
- **Memoria PHP**: 1GB o superiore
- **Spazio Disco**: 500MB+ per installazioni con traffico elevato

## Configurazione PHP

### Impostazioni PHP Ottimali

#### memory_limit
```php
; wp-config.php o php.ini
ini_set('memory_limit', '512M');
```

#### max_execution_time
```php
; Per elaborazione dati pesanti
ini_set('max_execution_time', 300);
```

#### upload_max_filesize
```php
; Per caricamento file di configurazione
ini_set('upload_max_filesize', '32M');
ini_set('post_max_size', '32M');
```

### Estensioni PHP Richieste
Verifica che queste estensioni siano abilitate:

```bash
# Controlla estensioni PHP
php -m | grep -E "(curl|json|mbstring|mysqli|zip|gd)"
```

**Estensioni Essenziali:**
- `curl` - Per comunicazioni API
- `json` - Per elaborazione dati
- `mbstring` - Per supporto caratteri internazionali
- `mysqli` - Per database MySQL
- `zip` - Per gestione archivi
- `gd` - Per elaborazione immagini (heatmap)

## Configurazione Database

### Ottimizzazioni MySQL/MariaDB

#### Configurazione my.cnf
```ini
[mysqld]
# Ottimizzazioni per QA Advisor
innodb_buffer_pool_size = 256M
innodb_log_file_size = 64M
max_connections = 200
query_cache_size = 32M
query_cache_type = 1
```

#### Indici Database
QA Advisor crea automaticamente gli indici necessari, ma puoi verificarli:

```sql
-- Verifica indici tabelle QA Advisor
SHOW INDEX FROM wp_qahm_data;
SHOW INDEX FROM wp_qahm_sessions;
```

### Backup Database
Prima dell'installazione, crea sempre un backup:

```bash
# Backup completo database
mysqldump -u username -p database_name > backup_pre_qahm.sql

# Backup solo tabelle WordPress
mysqldump -u username -p database_name wp_* > backup_wp_tables.sql
```

## Configurazione WordPress

### wp-config.php Ottimizzazioni

#### Limiti Raccolta Dati
```php
// Limita PV mensili (default: 50000)
define('QAHM_LIMIT_PV_MONTH', 100000);

// Periodo conservazione dati (giorni)
define('QAHM_DATA_RETENTION_DAYS', 90);

// Abilita compressione dati
define('QAHM_ENABLE_COMPRESSION', true);
```

#### Debug e Logging
```php
// Solo per troubleshooting
define('QAHM_DEBUG', false);
define('QAHM_LOG_LEVEL', 'error'); // error, warning, info, debug
```

#### Sicurezza
```php
// Restrizioni accesso
define('QAHM_RESTRICT_ACCESS', true);
define('QAHM_ALLOWED_IPS', '192.168.1.0/24,10.0.0.0/8');
```

### .htaccess Ottimizzazioni

#### Compressione File QA Advisor
```apache
# Compressione per file QA Advisor
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE text/javascript
    AddOutputFilterByType DEFLATE application/javascript
</IfModule>
```

#### Cache Headers
```apache
# Cache per risorse statiche QA Advisor
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType application/json "access plus 1 hour"
    ExpiresByType text/javascript "access plus 1 week"
</IfModule>
```

## Configurazione Server Web

### Apache

#### Moduli Richiesti
```bash
# Abilita moduli necessari
a2enmod rewrite
a2enmod deflate
a2enmod expires
a2enmod headers
```

#### VirtualHost Ottimizzato
```apache
<VirtualHost *:80>
    ServerName tuosito.com
    DocumentRoot /var/www/html
    
    # Ottimizzazioni per QA Advisor
    <Directory /var/www/html>
        AllowOverride All
        Options -Indexes +FollowSymLinks
    </Directory>
    
    # Compressione
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
    </IfModule>
</VirtualHost>
```

### Nginx

#### Configurazione Ottimizzata
```nginx
server {
    listen 80;
    server_name tuosito.com;
    root /var/www/html;
    index index.php;
    
    # Ottimizzazioni per QA Advisor
    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;
        
        # Timeout estesi per elaborazione dati
        fastcgi_read_timeout 300;
        fastcgi_send_timeout 300;
    }
    
    # Compressione
    gzip on;
    gzip_types text/css application/javascript application/json;
    
    # Cache per risorse statiche
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Configurazione CDN

### Cloudflare
Se utilizzi Cloudflare, configura:

#### Page Rules
```
tuosito.com/wp-admin/admin-ajax.php*
- Cache Level: Bypass
- Disable Performance

tuosito.com/wp-content/plugins/qa-heatmap-analytics/*
- Cache Level: Standard
- Browser Cache TTL: 1 week
```

#### Firewall Rules
```
# Proteggi endpoint QA Advisor
(http.request.uri.path contains "/wp-admin/admin-ajax.php" and http.request.uri.query contains "action=qahm")
- Action: Allow
- Rate Limiting: 100 requests per minute
```

### Altri CDN
Per CDN come MaxCDN, KeyCDN:

```php
// wp-config.php - Esclusioni CDN
define('QAHM_CDN_EXCLUDE_PATHS', [
    '/wp-admin/admin-ajax.php',
    '/wp-content/plugins/qa-heatmap-analytics/assets/js/tracking.js'
]);
```

## Monitoraggio Performance

### Strumenti di Monitoraggio

#### Query Monitor Plugin
Installa Query Monitor per monitorare:
- Query database QA Advisor
- Tempo di caricamento
- Utilizzo memoria

#### New Relic / Datadog
Configura monitoraggio APM:
```php
// Tracciamento custom per QA Advisor
if (function_exists('newrelic_add_custom_tracer')) {
    newrelic_add_custom_tracer('qahm_process_data');
    newrelic_add_custom_tracer('qahm_generate_heatmap');
}
```

### Metriche da Monitorare
- **Tempo risposta**: < 200ms per tracking
- **Utilizzo memoria**: < 50MB per richiesta
- **Query database**: < 10 query per pageview
- **Spazio disco**: Crescita dati nel tempo

## Ottimizzazione Prestazioni

### Caching

#### Object Cache
```php
// wp-config.php - Redis/Memcached
define('WP_CACHE', true);
define('QAHM_USE_OBJECT_CACHE', true);
```

#### Page Cache
Configura esclusioni per:
- `/wp-admin/admin-ajax.php?action=qahm_*`
- Pagine con tracking attivo
- Dashboard QA Advisor

### Database

#### Pulizia Automatica
```php
// wp-config.php - Pulizia automatica
define('QAHM_AUTO_CLEANUP', true);
define('QAHM_CLEANUP_INTERVAL', 'weekly');
```

#### Ottimizzazione Tabelle
```sql
-- Esegui settimanalmente
OPTIMIZE TABLE wp_qahm_data;
OPTIMIZE TABLE wp_qahm_sessions;
OPTIMIZE TABLE wp_qahm_heatmaps;
```

## Sicurezza

### Protezione File

#### Protezione Directory
```apache
# .htaccess in /wp-content/plugins/qa-heatmap-analytics/data/
<Files "*">
    Order Allow,Deny
    Deny from all
</Files>
```

### Controllo Accessi

#### Restrizioni IP
```php
// wp-config.php - Accesso limitato
define('QAHM_ADMIN_IPS', [
    '192.168.1.100',
    '203.0.113.0/24'
]);
```

#### Autenticazione a Due Fattori
Abilita 2FA per utenti con accesso QA Advisor:
```php
// Richiedi 2FA per QA Advisor
add_filter('qahm_require_2fa', '__return_true');
```

## Test Configurazione

### Script di Verifica
Crea uno script per testare la configurazione:

```php
<?php
// test-qahm-environment.php
function test_qahm_environment() {
    $tests = [
        'PHP Version' => version_compare(PHP_VERSION, '7.4.0', '>='),
        'Memory Limit' => (int)ini_get('memory_limit') >= 256,
        'MySQL Version' => version_compare(mysql_get_server_info(), '5.7.0', '>='),
        'Required Extensions' => extension_loaded('curl') && extension_loaded('json')
    ];
    
    foreach ($tests as $test => $result) {
        echo $test . ': ' . ($result ? 'PASS' : 'FAIL') . "\n";
    }
}

test_qahm_environment();
?>
```

### Benchmark Performance
```bash
# Test carico server
ab -n 1000 -c 10 http://tuosito.com/wp-admin/admin-ajax.php?action=qahm_track

# Test database
mysqlslap --user=username --password --host=localhost --concurrency=10 --iterations=100 --query="SELECT * FROM wp_qahm_data LIMIT 100"
```

## Risoluzione Problemi

### Problemi Comuni

#### "Memoria Insufficiente"
```php
// Aumenta memoria temporaneamente
ini_set('memory_limit', '1024M');
```

#### "Timeout Connessione Database"
```php
// wp-config.php
define('DB_TIMEOUT', 30);
```

#### "Errori JavaScript"
- Controlla conflitti con altri plugin
- Verifica compressione/minificazione
- Testa con tema predefinito

### Log di Debug
```php
// wp-config.php - Abilita logging
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('QAHM_DEBUG_LOG', true);
```

## Prossimi Passi

Dopo aver configurato l'ambiente:

1. **[Installazione](./installation.md)** - Procedi con l'installazione del plugin
2. **[Dashboard](../2-screens-and-operations/01-dashboard.md)** - Esplora l'interfaccia
3. **[Configurazioni Avanzate](./when-defer-jquery.md)** - Ottimizzazioni specifiche

Una configurazione ambiente ottimale garantisce che QA Advisor funzioni al massimo delle prestazioni e fornisca dati accurati per le tue analisi WordPress!
