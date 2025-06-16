---
sidebar_position: 5
---

# Impostare Limiti Dati in wp-config.php

Questa guida spiega come configurare i limiti di raccolta dati di QA Advisor tramite wp-config.php per ottimizzare prestazioni, gestire lo spazio di archiviazione e rispettare i piani di licenza.

## Panoramica Limiti Dati

### Perché Impostare Limiti?
- **Controllo Costi**: Gestione piani a pagamento basati su volume
- **Prestazioni Server**: Prevenzione sovraccarico database
- **Spazio Archiviazione**: Controllo crescita dimensioni database
- **Conformità Privacy**: Limitazione raccolta dati secondo normative

### Tipi di Limiti Disponibili
- **Pageview Mensili**: Numero massimo di visualizzazioni pagina
- **Sessioni Utente**: Limite sessioni tracciabili
- **Dati Heatmap**: Quantità dati heatmap raccolti
- **Periodo Conservazione**: Durata archiviazione dati

## Configurazione Base

### Limiti Pageview Mensili

#### Impostazione Standard
```php
// wp-config.php
// Limita a 50.000 pageview al mese (default)
define('QAHM_LIMIT_PV_MONTH', 50000);
```

#### Configurazioni per Diversi Piani
```php
// Piano Gratuito - 10.000 PV/mese
define('QAHM_LIMIT_PV_MONTH', 10000);

// Piano Starter - 50.000 PV/mese
define('QAHM_LIMIT_PV_MONTH', 50000);

// Piano Professional - 200.000 PV/mese
define('QAHM_LIMIT_PV_MONTH', 200000);

// Piano Enterprise - Illimitato
define('QAHM_LIMIT_PV_MONTH', 0); // 0 = illimitato
```

### Periodo di Conservazione Dati

#### Configurazione Retention
```php
// wp-config.php
// Conserva dati per 90 giorni (raccomandato)
define('QAHM_DATA_RETENTION_DAYS', 90);

// Altre opzioni comuni
define('QAHM_DATA_RETENTION_DAYS', 30);  // 1 mese
define('QAHM_DATA_RETENTION_DAYS', 180); // 6 mesi
define('QAHM_DATA_RETENTION_DAYS', 365); // 1 anno
```

#### Retention per Tipo di Dati
```php
// wp-config.php - Retention differenziata
define('QAHM_PAGEVIEW_RETENTION_DAYS', 90);
define('QAHM_HEATMAP_RETENTION_DAYS', 60);
define('QAHM_SESSION_RETENTION_DAYS', 30);
define('QAHM_EVENT_RETENTION_DAYS', 180);
```

## Configurazioni Avanzate

### Limiti Heatmap

#### Controllo Raccolta Heatmap
```php
// wp-config.php
// Limita heatmap a 10.000 interazioni/mese
define('QAHM_HEATMAP_LIMIT_MONTH', 10000);

// Percentuale utenti tracciati per heatmap (1-100)
define('QAHM_HEATMAP_SAMPLE_RATE', 10); // 10% degli utenti

// Limita heatmap per tipo di dispositivo
define('QAHM_HEATMAP_DESKTOP_ONLY', true); // Solo desktop
define('QAHM_HEATMAP_MOBILE_ONLY', false); // Includi mobile
```

#### Configurazione per Tipo Heatmap
```php
// wp-config.php - Controllo granulare heatmap
define('QAHM_HEATMAP_CLICK_ENABLED', true);
define('QAHM_HEATMAP_SCROLL_ENABLED', true);
define('QAHM_HEATMAP_MOVE_ENABLED', false); // Disabilita move heatmap

// Limiti specifici per tipo
define('QAHM_HEATMAP_CLICK_LIMIT', 5000);
define('QAHM_HEATMAP_SCROLL_LIMIT', 3000);
define('QAHM_HEATMAP_MOVE_LIMIT', 2000);
```

### Limiti Sessioni

#### Controllo Sessioni Utente
```php
// wp-config.php
// Massimo 1000 sessioni simultanee
define('QAHM_MAX_CONCURRENT_SESSIONS', 1000);

// Durata massima sessione (minuti)
define('QAHM_SESSION_TIMEOUT', 30);

// Limita sessioni per IP
define('QAHM_MAX_SESSIONS_PER_IP', 5);
```

### Limiti Database

#### Controllo Dimensioni Database
```php
// wp-config.php
// Limite dimensione database QA Advisor (MB)
define('QAHM_MAX_DB_SIZE_MB', 500);

// Limite numero record per tabella
define('QAHM_MAX_RECORDS_PER_TABLE', 100000);

// Abilita compressione dati
define('QAHM_ENABLE_DATA_COMPRESSION', true);
```

## Configurazioni per Ambiente

### Ambiente di Sviluppo
```php
// wp-config.php - Configurazione sviluppo
if (defined('WP_DEBUG') && WP_DEBUG) {
    // Limiti ridotti per sviluppo
    define('QAHM_LIMIT_PV_MONTH', 1000);
    define('QAHM_DATA_RETENTION_DAYS', 7);
    define('QAHM_HEATMAP_SAMPLE_RATE', 100); // Traccia tutto per test
    define('QAHM_DEBUG_MODE', true);
}
```

### Ambiente di Staging
```php
// wp-config.php - Configurazione staging
if (strpos($_SERVER['HTTP_HOST'], 'staging') !== false) {
    define('QAHM_LIMIT_PV_MONTH', 5000);
    define('QAHM_DATA_RETENTION_DAYS', 30);
    define('QAHM_HEATMAP_LIMIT_MONTH', 1000);
}
```

### Ambiente di Produzione
```php
// wp-config.php - Configurazione produzione
if (!defined('WP_DEBUG') || !WP_DEBUG) {
    define('QAHM_LIMIT_PV_MONTH', 100000);
    define('QAHM_DATA_RETENTION_DAYS', 90);
    define('QAHM_HEATMAP_SAMPLE_RATE', 10);
    define('QAHM_ENABLE_DATA_COMPRESSION', true);
}
```

## Gestione Automatica Limiti

### Pulizia Automatica Dati

#### Configurazione Cleanup
```php
// wp-config.php
// Abilita pulizia automatica
define('QAHM_AUTO_CLEANUP_ENABLED', true);

// Frequenza pulizia (daily, weekly, monthly)
define('QAHM_CLEANUP_FREQUENCY', 'weekly');

// Ora esecuzione pulizia (formato 24h)
define('QAHM_CLEANUP_TIME', '02:00');
```

#### Pulizia Selettiva
```php
// wp-config.php - Pulizia per tipo di dati
define('QAHM_CLEANUP_PAGEVIEWS', true);
define('QAHM_CLEANUP_HEATMAPS', true);
define('QAHM_CLEANUP_SESSIONS', true);
define('QAHM_CLEANUP_EVENTS', false); // Mantieni eventi

// Soglie per pulizia automatica
define('QAHM_CLEANUP_THRESHOLD_MB', 100); // Pulisci se DB > 100MB
define('QAHM_CLEANUP_THRESHOLD_RECORDS', 50000); // Pulisci se record > 50k
```

### Notifiche Limiti

#### Avvisi Amministratore
```php
// wp-config.php
// Notifica quando si raggiunge 80% del limite
define('QAHM_LIMIT_WARNING_THRESHOLD', 80);

// Email notifiche
define('QAHM_LIMIT_NOTIFICATION_EMAIL', 'admin@tuosito.com');

// Disabilita raccolta quando limite raggiunto
define('QAHM_STOP_TRACKING_ON_LIMIT', true);
```

## Monitoraggio Utilizzo

### Dashboard Utilizzo

#### Visualizzazione Limiti
```php
// wp-config.php
// Mostra utilizzo corrente nel dashboard
define('QAHM_SHOW_USAGE_DASHBOARD', true);

// Mostra proiezioni utilizzo mensile
define('QAHM_SHOW_USAGE_PROJECTIONS', true);
```

### API Monitoraggio
```php
// Controlla utilizzo corrente via codice
function check_qahm_usage() {
    if (function_exists('qahm_get_current_usage')) {
        $usage = qahm_get_current_usage();
        
        echo "Pageview questo mese: " . $usage['pageviews'] . "\n";
        echo "Limite mensile: " . $usage['limit'] . "\n";
        echo "Percentuale utilizzata: " . $usage['percentage'] . "%\n";
    }
}
```

## Configurazioni Specifiche per Settore

### E-commerce (WooCommerce)
```php
// wp-config.php - Configurazione e-commerce
define('QAHM_LIMIT_PV_MONTH', 500000); // Alto traffico
define('QAHM_HEATMAP_SAMPLE_RATE', 5); // Campione ridotto
define('QAHM_TRACK_CHECKOUT_PAGES', true);
define('QAHM_EXTENDED_ECOMMERCE_TRACKING', true);
```

### Blog/Content Site
```php
// wp-config.php - Configurazione blog
define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_HEATMAP_SAMPLE_RATE', 15);
define('QAHM_TRACK_READING_TIME', true);
define('QAHM_CONTENT_ANALYTICS_ENABLED', true);
```

### Sito Aziendale
```php
// wp-config.php - Configurazione corporate
define('QAHM_LIMIT_PV_MONTH', 100000);
define('QAHM_HEATMAP_SAMPLE_RATE', 10);
define('QAHM_LEAD_TRACKING_ENABLED', true);
define('QAHM_FORM_ANALYTICS_ENABLED', true);
```

## Ottimizzazione Prestazioni

### Configurazione Database

#### Ottimizzazioni Query
```php
// wp-config.php
// Abilita cache query per QA Advisor
define('QAHM_ENABLE_QUERY_CACHE', true);

// Limita query simultanee
define('QAHM_MAX_CONCURRENT_QUERIES', 10);

// Timeout query (secondi)
define('QAHM_QUERY_TIMEOUT', 30);
```

#### Indici Database
```php
// wp-config.php
// Crea indici automaticamente per prestazioni
define('QAHM_AUTO_CREATE_INDEXES', true);

// Ottimizza tabelle automaticamente
define('QAHM_AUTO_OPTIMIZE_TABLES', true);
```

### Configurazione Memoria

#### Gestione Memoria PHP
```php
// wp-config.php
// Memoria dedicata a QA Advisor (MB)
define('QAHM_MEMORY_LIMIT', 128);

// Limite memoria per elaborazione heatmap
define('QAHM_HEATMAP_MEMORY_LIMIT', 256);
```

## Esempi Configurazioni Complete

### Configurazione Piccolo Sito
```php
// wp-config.php - Sito piccolo (< 10k visite/mese)
define('QAHM_LIMIT_PV_MONTH', 15000);
define('QAHM_DATA_RETENTION_DAYS', 60);
define('QAHM_HEATMAP_SAMPLE_RATE', 20);
define('QAHM_HEATMAP_LIMIT_MONTH', 2000);
define('QAHM_AUTO_CLEANUP_ENABLED', true);
define('QAHM_CLEANUP_FREQUENCY', 'monthly');
```

### Configurazione Sito Medio
```php
// wp-config.php - Sito medio (10k-100k visite/mese)
define('QAHM_LIMIT_PV_MONTH', 150000);
define('QAHM_DATA_RETENTION_DAYS', 90);
define('QAHM_HEATMAP_SAMPLE_RATE', 10);
define('QAHM_HEATMAP_LIMIT_MONTH', 10000);
define('QAHM_ENABLE_DATA_COMPRESSION', true);
define('QAHM_AUTO_CLEANUP_ENABLED', true);
define('QAHM_CLEANUP_FREQUENCY', 'weekly');
```

### Configurazione Sito Grande
```php
// wp-config.php - Sito grande (> 100k visite/mese)
define('QAHM_LIMIT_PV_MONTH', 1000000);
define('QAHM_DATA_RETENTION_DAYS', 180);
define('QAHM_HEATMAP_SAMPLE_RATE', 5);
define('QAHM_HEATMAP_LIMIT_MONTH', 50000);
define('QAHM_ENABLE_DATA_COMPRESSION', true);
define('QAHM_ENABLE_QUERY_CACHE', true);
define('QAHM_AUTO_CLEANUP_ENABLED', true);
define('QAHM_CLEANUP_FREQUENCY', 'daily');
define('QAHM_MAX_DB_SIZE_MB', 2000);
```

## Risoluzione Problemi

### Limite Raggiunto Troppo Velocemente
```php
// Analizza utilizzo e ottimizza
define('QAHM_DEBUG_TRACKING', true); // Temporaneo
define('QAHM_LOG_PAGEVIEW_DETAILS', true); // Identifica traffico anomalo
```

### Prestazioni Lente
```php
// Riduci carico elaborazione
define('QAHM_HEATMAP_SAMPLE_RATE', 5); // Riduci campionamento
define('QAHM_ENABLE_DATA_COMPRESSION', true); // Abilita compressione
define('QAHM_BATCH_PROCESSING', true); // Elaborazione batch
```

### Database Troppo Grande
```php
// Pulizia aggressiva
define('QAHM_DATA_RETENTION_DAYS', 30); // Riduci retention
define('QAHM_AUTO_CLEANUP_ENABLED', true);
define('QAHM_CLEANUP_FREQUENCY', 'daily');
define('QAHM_CLEANUP_THRESHOLD_MB', 50); // Soglia più bassa
```

## Prossimi Passi

Dopo aver configurato i limiti dati:

1. **[Dashboard](../2-screens-and-operations/01-dashboard.md)** - Monitora utilizzo
2. **[Heatmap](../2-screens-and-operations/heatmaps.md)** - Configura visualizzazioni
3. **[Impostazioni](../2-screens-and-operations/11-settings.md)** - Ottimizza configurazioni

Una corretta configurazione dei limiti dati garantisce prestazioni ottimali e controllo dei costi per QA Advisor!
