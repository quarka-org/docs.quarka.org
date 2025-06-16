---
sidebar_position: 4
---

# Impostazione Limiti Dati (wp-config)

Configura i limiti di raccolta dati di QA Advisor per gestire l'utilizzo delle risorse e rispettare i requisiti del tuo hosting.

## Panoramica

QA Advisor raccoglie dati di analisi che vengono memorizzati sul tuo server. Per evitare un utilizzo eccessivo delle risorse e rispettare i limiti del tuo piano di hosting, puoi configurare limiti specifici per la raccolta dati.

## Configurazione dei Limiti

### Limite Mensile di Visualizzazioni Pagina

Il limite più importante da configurare è il numero massimo di visualizzazioni pagina che QA Advisor può raccogliere ogni mese.

Aggiungi questa linea al tuo file `wp-config.php`:

```php
// Limite mensile di visualizzazioni pagina (default: 10,000)
define('QAHM_LIMIT_PV_MONTH', 10000);
```

### Valori Raccomandati per Tipo di Sito

| Tipo di Sito | Traffico Mensile | Limite Raccomandato |
|---------------|------------------|---------------------|
| Blog Personale | < 1,000 PV | 5,000 |
| Sito Aziendale | 1,000 - 10,000 PV | 15,000 |
| E-commerce Piccolo | 10,000 - 50,000 PV | 75,000 |
| Sito Corporate | 50,000 - 200,000 PV | 300,000 |
| Sito Ad Alto Traffico | > 200,000 PV | 500,000+ |

## Configurazioni Avanzate

### Limite Sessioni Giornaliere

```php
// Limite giornaliero di sessioni (default: 1,000)
define('QAHM_LIMIT_SESSION_DAY', 1000);
```

### Limite Dati Mappa di Calore

```php
// Limite dati mappa di calore per pagina (default: 10,000 punti)
define('QAHM_LIMIT_HEATMAP_DATA', 10000);
```

### Periodo di Conservazione Dati

```php
// Giorni di conservazione dati (default: 90 giorni)
define('QAHM_DATA_RETENTION_DAYS', 90);
```

### Limite Dimensione File Log

```php
// Dimensione massima file log in MB (default: 10MB)
define('QAHM_MAX_LOG_SIZE', 10);
```

## Configurazione per Diversi Piani di Hosting

### Hosting Condiviso Base

Per piani di hosting con risorse limitate:

```php
// Configurazione conservativa per hosting condiviso
define('QAHM_LIMIT_PV_MONTH', 5000);
define('QAHM_LIMIT_SESSION_DAY', 500);
define('QAHM_DATA_RETENTION_DAYS', 30);
define('QAHM_MAX_LOG_SIZE', 5);
```

### Hosting Business/Premium

Per piani con più risorse:

```php
// Configurazione bilanciata per hosting business
define('QAHM_LIMIT_PV_MONTH', 25000);
define('QAHM_LIMIT_SESSION_DAY', 2000);
define('QAHM_DATA_RETENTION_DAYS', 90);
define('QAHM_MAX_LOG_SIZE', 20);
```

### VPS/Server Dedicato

Per server con controllo completo:

```php
// Configurazione estesa per VPS/dedicato
define('QAHM_LIMIT_PV_MONTH', 100000);
define('QAHM_LIMIT_SESSION_DAY', 5000);
define('QAHM_DATA_RETENTION_DAYS', 180);
define('QAHM_MAX_LOG_SIZE', 50);
```

## Monitoraggio dell'Utilizzo

### Controllo Utilizzo Corrente

QA Advisor fornisce informazioni sull'utilizzo corrente nel pannello di amministrazione:

1. Vai a **QA Advisor > Impostazioni**
2. Clicca sulla scheda **"Utilizzo Risorse"**
3. Controlla i grafici di utilizzo mensile e giornaliero

### Avvisi di Limite

Quando ti avvicini ai limiti configurati:

- **80% del limite**: Avviso giallo nel pannello
- **95% del limite**: Avviso arancione con raccomandazioni
- **100% del limite**: Raccolta dati sospesa temporaneamente

## Ottimizzazione Automatica

### Pulizia Automatica Dati

QA Advisor può pulire automaticamente i dati vecchi:

```php
// Abilita pulizia automatica (default: true)
define('QAHM_AUTO_CLEANUP', true);

// Frequenza pulizia in giorni (default: 7)
define('QAHM_CLEANUP_FREQUENCY', 7);
```

### Compressione Dati

Per ridurre l'utilizzo dello spazio:

```php
// Abilita compressione dati (default: true)
define('QAHM_COMPRESS_DATA', true);

// Livello compressione 1-9 (default: 6)
define('QAHM_COMPRESSION_LEVEL', 6);
```

## Gestione Emergenze

### Sospensione Temporanea Raccolta

In caso di emergenza, puoi sospendere temporaneamente la raccolta:

```php
// Sospendi raccolta dati (default: false)
define('QAHM_SUSPEND_COLLECTION', true);
```

### Reset Contatori

Per resettare i contatori mensili:

```php
// Reset contatori al prossimo caricamento (default: false)
define('QAHM_RESET_COUNTERS', true);
```

## Configurazioni Specifiche per Tipo di Contenuto

### Siti E-commerce

Per siti con molte transazioni:

```php
// Configurazione e-commerce
define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_TRACK_ECOMMERCE', true);
define('QAHM_ECOMMERCE_DATA_RETENTION', 365); // 1 anno per dati transazioni
```

### Siti di Notizie

Per siti con contenuto che cambia frequentemente:

```php
// Configurazione siti di notizie
define('QAHM_LIMIT_PV_MONTH', 75000);
define('QAHM_TRACK_CONTENT_UPDATES', true);
define('QAHM_NEWS_DATA_RETENTION', 60); // 2 mesi per articoli
```

### Blog e Siti Informativi

Per siti con contenuto statico:

```php
// Configurazione blog/informativi
define('QAHM_LIMIT_PV_MONTH', 15000);
define('QAHM_FOCUS_CONTENT_ANALYSIS', true);
define('QAHM_CONTENT_DATA_RETENTION', 120); // 4 mesi
```

## Monitoraggio Prestazioni

### Metriche da Controllare

1. **Utilizzo Spazio Disco**: Controlla crescita database
2. **Tempo di Risposta**: Monitora impatto sulle prestazioni
3. **Utilizzo Memoria**: Verifica consumo RAM
4. **Query Database**: Controlla numero e velocità query

### Strumenti di Monitoraggio

```php
// Abilita logging prestazioni (solo per debug)
define('QAHM_PERFORMANCE_LOG', false);

// Abilita profiling query (solo per sviluppo)
define('QAHM_QUERY_PROFILING', false);
```

## Risoluzione Problemi

### Limite Raggiunto Troppo Velocemente

Se raggiungi i limiti troppo rapidamente:

1. Controlla per traffico bot o spam
2. Verifica configurazioni di cache
3. Considera l'aumento dei limiti
4. Implementa filtri per escludere traffico non rilevante

### Prestazioni Lente

Se QA Advisor rallenta il sito:

1. Riduci i limiti di raccolta dati
2. Aumenta la frequenza di pulizia automatica
3. Abilita la compressione dati
4. Considera l'upgrade del piano di hosting

### Spazio Disco Insufficiente

Per problemi di spazio:

1. Riduci il periodo di conservazione dati
2. Abilita compressione e pulizia automatica
3. Esporta e archivia dati vecchi
4. Considera storage esterno per backup

## Best Practice

### Configurazione Iniziale

1. Inizia con limiti conservativi
2. Monitora l'utilizzo per 2-4 settimane
3. Aggiusta i limiti in base ai pattern reali
4. Documenta le configurazioni per riferimento futuro

### Manutenzione Regolare

- Controlla utilizzo mensile
- Aggiorna limiti in base alla crescita del traffico
- Esegui backup regolari dei dati
- Monitora prestazioni del server

## Prossimi Passi

Dopo aver configurato i limiti dati:

1. **[Gestione jQuery](/docs/user-manual/getting-started/when-defer-jquery)** - Risolvi conflitti
2. **[Pannello di Controllo](/docs/user-manual/screens-and-operations/dashboard)** - Inizia l'analisi
3. **[Impostazioni](/docs/user-manual/screens-and-operations/settings)** - Configura opzioni avanzate

## Supporto

Per assistenza con la configurazione dei limiti:

- Consulta la [FAQ](/docs/faq) per problemi comuni
- Contatta il supporto per consigli personalizzati
- Visita il [repository GitHub](https://github.com/quarka-org) per supporto tecnico

---

Una configurazione appropriata dei limiti dati garantisce che QA Advisor funzioni in modo efficiente senza sovraccaricare il tuo server.
