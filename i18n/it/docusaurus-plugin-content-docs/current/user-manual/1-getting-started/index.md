---
sidebar_position: 1
---

# Iniziare con QA Advisor

Benvenuto in QA Advisor! Questa sezione ti guiderà attraverso tutto ciò che devi sapere per iniziare con il plugin di analytics WordPress più potente.

## Panoramica Rapida

QA Advisor è un plugin di analytics WordPress completo che fornisce:
- Heatmap dettagliate e tracciamento delle interazioni
- Analytics in tempo reale con dashboard live
- Moduli IA "Brains" per insights automatici
- Conformità completa a GDPR/LGPD
- Archiviazione locale dei dati senza dipendenze esterne

## Processo di Installazione

### 1. Requisiti di Sistema
Prima di installare, assicurati che il tuo sistema soddisfi i requisiti minimi:
- **WordPress**: 5.0 o superiore (raccomandato: ultima versione)
- **PHP**: 7.4 o superiore (raccomandato: 8.1+)
- **MySQL**: 5.6 o superiore
- **Memoria**: Minimo 256MB (raccomandato: 512MB+)

### 2. Metodi di Installazione
Scegli il metodo che preferisci:
- **[Installazione Standard](./installation)** - Metodo raccomandato tramite WordPress Admin
- **[Installazione Manuale](./installation#installazione-manuale)** - Per utenti avanzati
- **[Installazione via WP-CLI](./installation#wp-cli)** - Per sviluppatori

### 3. Configurazione Post-Installazione
Dopo l'installazione:
- **[Configurazione Ambiente](./environment-setup)** - Ottimizza le impostazioni del server
- **[Configurazioni Avanzate](./when-defer-jquery)** - Risolvi problemi di compatibilità
- **[Limiti Dati](./set-data-limit-wpconfig)** - Configura limiti di raccolta dati

## Configurazione Iniziale

### Assistente di Configurazione
Al primo accesso, QA Advisor avvierà automaticamente l'assistente di configurazione che ti guiderà attraverso:

1. **Impostazioni Base**
   - Configurazione del tracciamento
   - Selezione delle pagine da monitorare
   - Impostazioni di campionamento

2. **Privacy e Conformità**
   - Configurazione GDPR/LGPD
   - Anonimizzazione IP
   - Periodo di conservazione dati

3. **Heatmap**
   - Attivazione delle heatmap
   - Configurazione dei tipi di heatmap
   - Impostazioni di raccolta

4. **Obiettivi Iniziali**
   - Definizione di KPI
   - Configurazione eventi di conversione
   - Impostazione notifiche

### Verifica dell'Installazione

Dopo la configurazione, verifica che tutto funzioni correttamente:

1. **Controlla il Dashboard**
   - Vai su `QA Advisor > Dashboard`
   - Verifica che non ci siano errori
   - Controlla lo stato della raccolta dati

2. **Test di Tracciamento**
   - Visita il tuo sito in una finestra incognito
   - Vai su `QA Advisor > Tempo Reale`
   - Verifica che la tua visita sia tracciata

3. **Verifica Heatmap**
   - Attendi 24-48 ore per la raccolta iniziale
   - Controlla `QA Advisor > Heatmap`
   - Verifica la generazione delle mappe di calore

## Risoluzione Problemi Comuni

### Plugin Non Traccia Dati
Se i dati non appaiono:
1. Controlla la console del browser (F12) per errori JavaScript
2. Verifica che non ci siano conflitti con altri plugin
3. Assicurati che il caching non interferisca
4. Controlla le impostazioni di privacy del browser

### Heatmap Non Generate
Se le heatmap non si generano:
1. Verifica di avere traffico sufficiente (minimo 100 sessioni)
2. Controlla le impostazioni di campionamento
3. Assicurati che le pagine siano incluse nel tracciamento
4. Verifica i log di errore

### Performance Lenta
Se il sito è rallentato:
1. Configura limiti di dati appropriati
2. Ottimizza le impostazioni del server
3. Abilita la compressione dei dati
4. Considera l'upgrade dell'hosting

## Prossimi Passi

Una volta completata l'installazione e la configurazione iniziale:

1. **Esplora il Dashboard**: Familiarizza con l'interfaccia principale
2. **Configura gli Obiettivi**: Imposta metriche specifiche per il tuo business
3. **Personalizza le Impostazioni**: Adatta QA Advisor alle tue esigenze
4. **Inizia l'Analisi**: Comincia a raccogliere e analizzare i dati

## Risorse Aggiuntive

- **[FAQ](../../faq)** - Risposte alle domande più comuni
- **[Note di Rilascio](../../release-notes)** - Ultime funzionalità e aggiornamenti
- **[Supporto](../2-screens-and-operations/12-help)** - Come ottenere aiuto

Sei pronto per iniziare! Procedi con la [Guida all'Installazione](./installation) per installare QA Advisor sul tuo sito WordPress.
