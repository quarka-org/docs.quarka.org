---
sidebar_position: 2
---

# Installazione

Questa guida ti accompagnerà attraverso il processo di installazione di QA Advisor sul tuo sito WordPress.

## Metodi di Installazione

### Metodo 1: Installazione tramite WordPress Admin (Raccomandato)

Questo è il metodo più semplice e raccomandato per la maggior parte degli utenti.

#### Passo 1: Accedi al tuo WordPress Admin
1. Vai al tuo sito WordPress
2. Accedi con le tue credenziali di amministratore
3. Naviga verso `Plugin > Aggiungi Nuovo`

#### Passo 2: Cerca QA Advisor
1. Nella barra di ricerca, digita "QA Advisor"
2. Premi Invio o clicca il pulsante di ricerca
3. Trova QA Advisor nei risultati di ricerca

#### Passo 3: Installa il Plugin
1. Clicca il pulsante "Installa Ora"
2. Attendi che l'installazione si completi
3. Clicca "Attiva" per attivare il plugin

### Metodo 2: Installazione Manuale

Se preferisci installare manualmente o hai scaricato il file ZIP del plugin.

#### Passo 1: Scarica il Plugin
1. Visita [docs.quarka.org](https://docs.quarka.org)
2. Scarica l'ultima versione di `qa-heatmap-analytics.zip`
3. Salva il file sul tuo computer

#### Passo 2: Carica tramite WordPress Admin
1. Vai su `Plugin > Aggiungi Nuovo` nel tuo WordPress Admin
2. Clicca "Carica Plugin" in alto alla pagina
3. Clicca "Scegli File" e seleziona il file ZIP scaricato
4. Clicca "Installa Ora"
5. Una volta installato, clicca "Attiva Plugin"

#### Passo 3: Installazione via FTP (Avanzato)
Se hai accesso FTP al tuo server:

1. **Estrai il file ZIP** sul tuo computer
2. **Carica la cartella** `qa-heatmap-analytics` nella directory `/wp-content/plugins/` del tuo sito
3. **Attiva il plugin** dal pannello Plugin di WordPress Admin

### Metodo 3: Installazione via WP-CLI

Per sviluppatori e utenti avanzati che utilizzano WP-CLI.

```bash
# Installa l'ultima versione
wp plugin install qa-heatmap-analytics --activate

# Oppure installa da file locale
wp plugin install /path/to/qa-heatmap-analytics.zip --activate

# Verifica l'installazione
wp plugin list | grep qa-heatmap
```

## Verifica dell'Installazione

### Controllo Rapido
Dopo l'attivazione, dovresti vedere:

1. **Voce di Menu**: "QA Advisor" nella barra laterale di WordPress Admin
2. **Assistente di Configurazione**: Popup o notifica per la configurazione iniziale
3. **Nessun Errore**: Nessun messaggio di errore nella dashboard

### Test Funzionalità Base
1. **Vai al Dashboard**: Clicca su `QA Advisor > Dashboard`
2. **Controlla lo Stato**: Verifica che non ci siano errori critici
3. **Visualizza Impostazioni**: Accedi a `QA Advisor > Impostazioni`

## Configurazione Post-Installazione

### Assistente di Configurazione Automatico

Al primo accesso, QA Advisor avvierà l'assistente di configurazione:

#### Passo 1: Impostazioni Base
- **Modalità di Tracciamento**: Scegli tra Standard o Avanzata
- **Pagine da Tracciare**: Seleziona quali pagine monitorare
- **Frequenza di Raccolta**: Configura quanto spesso raccogliere dati

#### Passo 2: Configurazione Privacy
- **Conformità GDPR**: Attiva se necessario per la conformità europea
- **Anonimizzazione IP**: Raccomandato per la privacy degli utenti
- **Periodo di Conservazione**: Imposta per quanto tempo conservare i dati

#### Passo 3: Heatmap
- **Tipi di Heatmap**: Abilita Click, Scroll, Move heatmap
- **Tasso di Campionamento**: Configura la percentuale di utenti da tracciare
- **Dispositivi Target**: Scegli desktop, mobile, o entrambi

#### Passo 4: Obiettivi e Metriche
- **Obiettivi Principali**: Definisci cosa vuoi misurare
- **Eventi di Conversione**: Configura azioni importanti da tracciare
- **Notifiche**: Imposta avvisi per eventi critici

### Configurazione Manuale

Se preferisci configurare manualmente:

#### Impostazioni Generali
```
QA Advisor > Impostazioni > Generale
- Abilita Tracciamento: ✓
- Modalità Debug: Solo per test
- Compressione Dati: ✓ (raccomandato)
```

#### Impostazioni Privacy
```
QA Advisor > Impostazioni > Privacy
- Anonimizza IP: ✓
- Rispetta Do Not Track: ✓
- Periodo Conservazione: 90 giorni
```

#### Impostazioni Heatmap
```
QA Advisor > Impostazioni > Heatmap
- Heatmap Click: ✓
- Heatmap Scroll: ✓
- Heatmap Move: ✓
- Tasso Campionamento: 10%
```

## Risoluzione Problemi di Installazione

### Errori Comuni e Soluzioni

#### "Plugin non può essere attivato"
**Possibili Cause:**
- Versione PHP troppo vecchia
- Memoria PHP insufficiente
- Conflitto con altri plugin

**Soluzioni:**
1. **Aggiorna PHP** alla versione 7.4 o superiore
2. **Aumenta memoria PHP** a 256MB minimo:
   ```php
   ini_set('memory_limit', '256M');
   ```
3. **Disattiva altri plugin** temporaneamente per identificare conflitti

#### "Errore durante l'installazione"
**Possibili Cause:**
- Permessi file insufficienti
- Spazio disco insufficiente
- Connessione internet instabile

**Soluzioni:**
1. **Controlla permessi** della directory `/wp-content/plugins/`
2. **Libera spazio** sul server
3. **Riprova l'installazione** con connessione stabile

#### "Plugin installato ma non funziona"
**Possibili Cause:**
- JavaScript bloccato
- Cache aggressiva
- Configurazione server

**Soluzioni:**
1. **Controlla console browser** (F12) per errori JavaScript
2. **Svuota cache** del sito e del browser
3. **Verifica configurazione server** per supporto JavaScript

### Controlli di Compatibilità

#### Verifica Requisiti Sistema
```bash
# Controlla versione PHP
php -v

# Controlla memoria disponibile
php -i | grep memory_limit

# Controlla estensioni PHP necessarie
php -m | grep -E "(curl|json|mbstring)"
```

#### Test Compatibilità Plugin
1. **Attiva tema predefinito** temporaneamente
2. **Disattiva altri plugin** uno alla volta
3. **Testa funzionalità QA Advisor** dopo ogni disattivazione
4. **Identifica conflitti** e cerca soluzioni specifiche

## Configurazioni Avanzate

### Ottimizzazione Performance

#### Configurazione wp-config.php
```php
// Limita raccolta dati mensile
define('QAHM_LIMIT_PV_MONTH', 50000);

// Imposta periodo conservazione
define('QAHM_DATA_RETENTION_DAYS', 90);

// Abilita compressione
define('QAHM_ENABLE_COMPRESSION', true);
```

#### Configurazione Server
```apache
# .htaccess - Abilita compressione per file QA Advisor
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE text/javascript
</IfModule>
```

### Configurazione Multi-sito

Per installazioni WordPress multi-sito:

#### Network Activation
1. **Accedi come Super Admin**
2. **Vai a Network Admin > Plugin**
3. **Attiva QA Advisor** per tutta la rete
4. **Configura per ogni sito** individualmente

#### Configurazioni Centralizzate
```php
// wp-config.php - Configurazioni globali
define('QAHM_NETWORK_SETTINGS', true);
define('QAHM_CENTRALIZED_DATA', false); // Dati separati per sito
```

## Prossimi Passi

Dopo l'installazione riuscita:

1. **[Configurazione Ambiente](./environment-setup.md)** - Ottimizza il tuo server
2. **[Dashboard](../2-screens-and-operations/01-dashboard.md)** - Esplora l'interfaccia principale
3. **[Impostazioni Avanzate](./when-defer-jquery.md)** - Risolvi problemi di compatibilità

## Supporto Installazione

Se incontri problemi durante l'installazione:

- **[FAQ](../../faq/)** - Domande frequenti e soluzioni
- **[Supporto Community](../2-screens-and-operations/12-help.md)** - Forum e discussioni
- **Supporto Premium** - Per licenze a pagamento

L'installazione di QA Advisor è progettata per essere semplice e diretta. Seguendo questa guida, dovresti avere il plugin funzionante in pochi minuti!
