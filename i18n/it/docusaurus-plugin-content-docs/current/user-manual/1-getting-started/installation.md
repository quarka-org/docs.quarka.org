---
sidebar_position: 2
---

# Installazione

Questa guida ti accompagnerà attraverso il processo di installazione di QA Advisor sul tuo sito WordPress.

## Metodi di Installazione

### Metodo 1: Installazione tramite Pannello di Amministrazione WordPress (Raccomandato)

1. **Scarica QA Advisor**
   - Vai alla [pagina di download ufficiale](/)
   - Clicca su "🚀 Scarica QA Advisor (β)"
   - Salva il file ZIP sul tuo computer

2. **Accedi al Pannello di Amministrazione WordPress**
   - Vai su `tuosito.com/wp-admin`
   - Accedi con le tue credenziali di amministratore

3. **Naviga alla Sezione Plugin**
   - Nel menu laterale, clicca su "Plugin"
   - Clicca su "Aggiungi Nuovo"

4. **Carica il Plugin**
   - Clicca su "Carica Plugin" nella parte superiore della pagina
   - Clicca su "Scegli File" e seleziona il file ZIP di QA Advisor
   - Clicca su "Installa Ora"

5. **Attiva il Plugin**
   - Dopo l'installazione, clicca su "Attiva Plugin"
   - QA Advisor è ora installato e attivo

### Metodo 2: Installazione tramite FTP

Se preferisci installare manualmente tramite FTP:

1. **Estrai il File ZIP**
   - Estrai il file ZIP di QA Advisor sul tuo computer
   - Dovresti vedere una cartella chiamata `qa-heatmap-analytics`

2. **Carica tramite FTP**
   - Connettiti al tuo server tramite FTP
   - Naviga alla cartella `/wp-content/plugins/`
   - Carica l'intera cartella `qa-heatmap-analytics`

3. **Attiva tramite WordPress**
   - Vai al pannello di amministrazione WordPress
   - Naviga a "Plugin" > "Plugin Installati"
   - Trova "QA Advisor" e clicca su "Attiva"

## Configurazione Post-Installazione

### Procedura Guidata di Configurazione

Dopo l'attivazione, QA Advisor avvierà automaticamente la procedura guidata di configurazione:

1. **Schermata di Benvenuto**
   - Panoramica delle funzionalità di QA Advisor
   - Clicca su "Inizia Configurazione"

2. **Impostazioni di Base**
   - Configura le impostazioni di tracciamento di base
   - Scegli quali tipi di dati raccogliere

3. **Configurazione Privacy**
   - Rivedi e configura le impostazioni sulla privacy
   - Imposta la conformità GDPR se necessario

4. **Modalità Avanzata (Opzionale)**
   - Abilita funzionalità avanzate come:
     - Insights del pubblico
     - Tracciamento obiettivi avanzato
     - Moduli AI aggiuntivi

### Verifica dell'Installazione

Per verificare che QA Advisor sia installato correttamente:

1. **Controlla il Menu di Amministrazione**
   - Dovresti vedere "QA Advisor" nel menu laterale di WordPress

2. **Accedi al Pannello di Controllo**
   - Clicca su "QA Advisor" nel menu
   - Dovresti vedere il pannello di controllo principale

3. **Verifica il Tracciamento**
   - Vai alla sezione "Tempo Reale"
   - Apri il tuo sito in una nuova scheda
   - Dovresti vedere l'attività in tempo reale nel pannello

## Risoluzione dei Problemi di Installazione

### Problemi Comuni

**Errore: "Il plugin non ha un header valido"**
- Assicurati di aver scaricato il file corretto
- Riprova a scaricare da una fonte ufficiale

**Errore di Memoria PHP**
- Aumenta il limite di memoria PHP (vedi [Configurazione dell'Ambiente](/docs/user-manual/getting-started/environment-setup))
- Contatta il tuo provider di hosting per assistenza

**Plugin Non Visibile Dopo l'Attivazione**
- Svuota la cache del browser
- Controlla se ci sono conflitti con altri plugin
- Verifica i permessi dei file

### Controlli di Compatibilità

Prima dell'installazione, QA Advisor verifica:

- Versione di WordPress (5.0+)
- Versione di PHP (7.4+)
- Estensioni PHP richieste
- Permessi di scrittura dei file
- Disponibilità di memoria

Se qualche controllo fallisce, riceverai istruzioni specifiche per risolvere il problema.

## Configurazione Avanzata

### Configurazione Manuale

Se preferisci saltare la procedura guidata:

1. **Vai alle Impostazioni**
   - QA Advisor > Impostazioni
   - Configura manualmente ogni sezione

2. **Impostazioni Principali**
   - Abilita/disabilita il tracciamento
   - Configura i domini di tracciamento
   - Imposta i limiti di raccolta dati

3. **Impostazioni Privacy**
   - Configura l'anonimizzazione IP
   - Imposta i periodi di conservazione dei dati
   - Configura le esclusioni utente

### Configurazione Multi-sito

Per installazioni WordPress multi-sito:

1. **Installazione a Livello di Rete**
   - Installa come plugin di rete se desiderato
   - Ogni sito avrà dati separati

2. **Configurazione per Sito**
   - Ogni sito può avere configurazioni indipendenti
   - Gli amministratori di sito possono gestire le proprie impostazioni

## Prossimi Passi

Dopo l'installazione riuscita:

1. **[Configurazione dell'Ambiente](/docs/user-manual/getting-started/environment-setup)** - Ottimizza le prestazioni
2. **[Pannello di Controllo](/docs/user-manual/screens-and-operations/dashboard)** - Esplora l'interfaccia principale
3. **[Vista in Tempo Reale](/docs/user-manual/screens-and-operations/realtime)** - Verifica che il tracciamento funzioni

## Supporto

Se hai bisogno di aiuto con l'installazione:

- Consulta la nostra [FAQ](/docs/faq)
- Visita il [repository GitHub](https://github.com/quarka-org) per supporto tecnico
- Contatta il supporto per assistenza personalizzata

---

Una volta completata l'installazione, procedi con la [Configurazione dell'Ambiente](/docs/user-manual/getting-started/environment-setup) per ottimizzare le prestazioni.
