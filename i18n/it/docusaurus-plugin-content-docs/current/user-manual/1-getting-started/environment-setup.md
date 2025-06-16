---
sidebar_position: 3
---

# Configurazione dell'Ambiente

Ottimizza il tuo ambiente WordPress per prestazioni ottimali con QA Advisor. Questa guida copre le configurazioni consigliate per server, hosting e WordPress.

## Requisiti di Sistema Dettagliati

### Requisiti Minimi

| Componente | Requisito Minimo | Raccomandato |
|------------|------------------|--------------|
| WordPress | 5.0+ | 6.0+ |
| PHP | 7.4+ | 8.1+ |
| MySQL | 5.6+ | 8.0+ |
| Memoria PHP | 128MB | 256MB+ |
| Spazio Disco | 50MB | 200MB+ |
| Estensioni PHP | json, curl, mbstring | + gd, zip |

### Estensioni PHP Richieste

QA Advisor richiede le seguenti estensioni PHP:

```php
// Estensioni Obbligatorie
- json (per elaborazione dati)
- curl (per comunicazioni API)
- mbstring (per gestione stringhe)

// Estensioni Raccomandate
- gd (per elaborazione immagini)
- zip (per backup e esportazioni)
- openssl (per comunicazioni sicure)
```

## Configurazione del Server

### Impostazioni PHP

Aggiungi queste configurazioni al tuo file `php.ini` o `.htaccess`:

```ini
# Memoria e Tempo di Esecuzione
memory_limit = 256M
max_execution_time = 300
max_input_time = 300

# Caricamento File
upload_max_filesize = 64M
post_max_size = 64M

# Sessioni e Output
session.gc_maxlifetime = 3600
output_buffering = 4096
```

### Configurazione Apache (.htaccess)

Se utilizzi Apache, aggiungi al tuo file `.htaccess`:

```apache
# Ottimizzazioni QA Advisor
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Cache per risorse statiche
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType text/css "access plus 1 month"
        ExpiresByType application/javascript "access plus 1 month"
        ExpiresByType image/png "access plus 1 month"
    </IfModule>
</IfModule>

# Compressione
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>
```

### Configurazione Nginx

Per server Nginx, aggiungi al tuo file di configurazione:

```nginx
# Ottimizzazioni QA Advisor
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}

# Compressione
gzip on;
gzip_types text/css application/javascript application/json;
gzip_min_length 1000;

# Limiti di caricamento
client_max_body_size 64M;
```

## Configurazione WordPress

### wp-config.php

Aggiungi queste configurazioni al tuo file `wp-config.php`:

```php
// Ottimizzazioni QA Advisor
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

// Debug (solo per sviluppo)
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);

// Cache
define('WP_CACHE', true);
```

### Ottimizzazioni Database

Per migliorare le prestazioni del database:

```sql
-- Ottimizzazioni MySQL per QA Advisor
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Configurazioni Hosting Specifiche

### Hosting Condiviso

Per hosting condiviso, aggiungi al file `.htaccess`:

```apache
# Limiti di memoria per hosting condiviso
php_value memory_limit 256M
php_value max_execution_time 300
php_value upload_max_filesize 32M
php_value post_max_size 32M
```

### Hosting Gestito (WP Engine, Kinsta, etc.)

La maggior parte degli hosting gestiti ha ottimizzazioni automatiche, ma potresti dover:

- Contattare il supporto per aumentare i limiti di memoria
- Verificare la compatibilità con i plugin di cache
- Configurare le esclusioni di cache per QA Advisor

### VPS/Server Dedicati

Per controllo completo:

```bash
# Ottimizzazioni del sistema operativo
echo 'vm.swappiness = 10' >> /etc/sysctl.conf
echo 'net.core.rmem_max = 16777216' >> /etc/sysctl.conf
echo 'net.core.wmem_max = 16777216' >> /etc/sysctl.conf
```

## Plugin di Cache e Compatibilità

### Plugin di Cache Supportati

QA Advisor è compatibile con:

- **WP Rocket** - Configurazione automatica
- **W3 Total Cache** - Richiede esclusioni manuali
- **WP Super Cache** - Compatibile senza configurazione
- **LiteSpeed Cache** - Ottimizzazioni automatiche

### Configurazioni di Esclusione

Per plugin di cache, escludi questi percorsi:

```
/wp-content/plugins/qa-heatmap-analytics/
/wp-admin/admin-ajax.php?action=qahm_*
```

## Monitoraggio delle Prestazioni

### Metriche da Monitorare

- **Utilizzo Memoria**: Mantieni sotto l'80% del limite
- **Tempo di Caricamento**: Target < 3 secondi
- **Query Database**: Monitora query lente
- **Spazio Disco**: Controlla crescita dati QA Advisor

### Strumenti di Monitoraggio

- **Query Monitor** - Plugin WordPress per debug
- **New Relic** - Monitoraggio APM
- **GTmetrix** - Test prestazioni frontend

## Risoluzione Problemi Comuni

### Errori di Memoria

```php
// Aumenta temporaneamente la memoria
ini_set('memory_limit', '512M');
```

### Problemi di Timeout

```php
// Aumenta il tempo di esecuzione
set_time_limit(300);
```

### Problemi di Permessi File

```bash
# Imposta permessi corretti
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

## Sicurezza

### Configurazioni di Sicurezza

```php
// wp-config.php - Sicurezza aggiuntiva
define('DISALLOW_FILE_EDIT', true);
define('WP_DEBUG_DISPLAY', false);
define('SCRIPT_DEBUG', false);
```

### Firewall e Protezione

- Configura firewall per bloccare accessi non autorizzati
- Utilizza SSL/TLS per tutte le comunicazioni
- Implementa autenticazione a due fattori

## Backup e Ripristino

### Strategia di Backup

1. **Backup Completo**: Settimanale
2. **Backup Database**: Giornaliero
3. **Backup Dati QA Advisor**: Giornaliero

### Automazione Backup

```bash
# Script di backup automatico
#!/bin/bash
mysqldump -u user -p database > backup_$(date +%Y%m%d).sql
tar -czf wordpress_backup_$(date +%Y%m%d).tar.gz /path/to/wordpress/
```

## Prossimi Passi

Dopo aver configurato l'ambiente:

1. **[Impostazione Limiti Dati](/docs/user-manual/getting-started/set-data-limit-wpconfig)** - Configura i limiti di raccolta
2. **[Gestione jQuery](/docs/user-manual/getting-started/when-defer-jquery)** - Risolvi conflitti
3. **[Pannello di Controllo](/docs/user-manual/screens-and-operations/dashboard)** - Inizia l'analisi

## Supporto

Per problemi di configurazione dell'ambiente:

- Consulta la [FAQ](/docs/faq) per soluzioni comuni
- Contatta il tuo provider di hosting per supporto specifico
- Visita il [repository GitHub](https://github.com/quarka-org) per supporto tecnico

---

Una configurazione ottimale dell'ambiente garantisce che QA Advisor funzioni al meglio delle sue capacità.
