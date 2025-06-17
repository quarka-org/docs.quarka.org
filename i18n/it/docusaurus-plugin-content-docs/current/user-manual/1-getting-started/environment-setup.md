---
sidebar_position: 2
title: Configurazione dell'Ambiente
---

# Configurazione dell'Ambiente

Per garantire un tracciamento accurato e prestazioni ottimali con QA Advisor, raccomandiamo di configurare correttamente il vostro ambiente WordPress. Questa guida copre le configurazioni di server, WordPress e plugin per prestazioni ottimali.

## Requisiti di Sistema

### Requisiti Minimi
- **WordPress**: Versione 5.9 o superiore
- **PHP**: Versione 7.4 o superiore
- **MySQL**: Versione 5.7 o superiore (o MariaDB 10.2+)
- **Memoria**: Almeno 128MB di limite memoria PHP
- **Spazio Disco**: 50MB di spazio disponibile

### Specifiche Raccomandate
- **WordPress**: Ultima versione stabile
- **PHP**: Versione 8.0 o superiore
- **MySQL**: Versione 8.0 o superiore
- **Memoria**: 256MB o più di limite memoria PHP
- **Spazio Disco**: 200MB o più di spazio disponibile

## Configurazione Server

### Impostazioni PHP

Per prestazioni ottimali, configurate queste impostazioni PHP:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### Compressione e Minificazione JavaScript

**Non** comprimere, minificare o combinare file JavaScript utilizzati da QA Advisor.  
Alcuni plugin di ottimizzazione o temi possono interferire con gli script di tracciamento modificando o ritardando la loro esecuzione.

> ✅ Controllate le impostazioni del vostro plugin di cache o ottimizzazione  
> ✅ Disabilitate la minificazione JS o defer/async per gli script QA Advisor

Per maggiori informazioni tecniche, vedere [Quando jQuery è Differito](/docs/user-manual/getting-started/when-defer-jquery).

### Ottimizzazione Database

Per migliori prestazioni del database:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Configurazione WordPress

### Impostazioni wp-config.php

Aggiungete queste configurazioni al vostro file `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Compatibilità Plugin e Temi

QA Advisor funziona con la maggior parte dei plugin e temi principali. Tuttavia, raccomandiamo:

- Disabilitare JavaScript defer/async per script critici
- Assicurarsi che il vostro plugin di cache permetta output da `qa-heatmap-analytics`
- Evitare duplicazioni con altri strumenti di tracciamento che modificano eventi globali

### Configurazione Plugin Cache

**WP Rocket**: Escludere script QA Advisor dall'ottimizzazione
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Aggiungere alle esclusioni JavaScript  
**WP Super Cache**: Compatibile senza configurazione aggiuntiva

## CDN e Migrazione Server

Se state usando un CDN (es. Cloudflare) o avete recentemente migrato il vostro server:

- Pulite tutte le cache (browser, plugin, CDN)
- Confermate che gli script QA Advisor non siano bloccati o ritardati
- Assicuratevi che il fuso orario del server sia corretto (usato per raggruppamento dati)

### Configurazione Cloudflare

```
URL: *vostrosito.com/wp-content/plugins/qa-heatmap-analytics/*
Impostazioni:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 mese
```

## Configurazione Sicurezza

### Permessi File

Impostate permessi file appropriati:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Impostazioni Firewall

Assicuratevi che questi endpoint siano accessibili:
- `/wp-admin/admin-ajax.php` (per richieste AJAX)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (per file statici)

## Monitoraggio Prestazioni

### Metriche Chiave da Monitorare

- **Uso Memoria**: Mantenere sotto l'80% del limite
- **Tempo Caricamento Pagina**: Obiettivo < 3 secondi
- **Query Database**: Monitorare query lente
- **Spazio Disco**: Controllare crescita dati QA Advisor

### Strumenti di Monitoraggio

- **Query Monitor** - Plugin WordPress per debugging
- **New Relic** - Monitoraggio APM
- **GTmetrix** - Test prestazioni frontend

## Risoluzione Problemi

### Problemi Comuni

**Errori Memoria**:
```php
ini_set('memory_limit', '512M');
```

**Problemi Timeout**:
```php
set_time_limit(300);
```

**Problemi Caricamento Script**:
1. Controllare console browser per errori JavaScript
2. Verificare esclusioni plugin cache
3. Confermare impostazioni firewall

### Verifica Script

Per verificare che lo script di tracciamento si stia caricando correttamente:

1. Visitate il vostro sito mentre **non siete loggati**
2. Clic destro e scegliete "Visualizza sorgente pagina"
3. Cercate nell'HTML `qahm` o `qahmz`

> Se queste stringhe non vengono trovate, lo script potrebbe essere bloccato o non caricarsi.  
> Controllate errori JavaScript o conflitti plugin.

## Prossimi Passi

Dopo la configurazione dell'ambiente:

1. [Configurare Limiti Dati](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Gestire Conflitti jQuery](/docs/user-manual/getting-started/when-defer-jquery)
3. [Esplorare il Dashboard](/docs/user-manual/screens-and-operations/dashboard)

---
