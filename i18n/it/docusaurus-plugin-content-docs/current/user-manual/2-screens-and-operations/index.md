---
sidebar_position: 2
---

# Schermate e Operazioni

Questa sezione fornisce una guida completa a tutte le schermate e operazioni disponibili in QA Advisor. Ogni schermata è progettata per fornire insights specifici sui tuoi dati di analytics.

## Panoramica delle Schermate

QA Advisor organizza le sue funzionalità in schermate specializzate, ognuna focalizzata su aspetti specifici dell'analisi del tuo sito web:

### 📊 [Dashboard](./01-dashboard.md)
La schermata principale che fornisce una panoramica completa delle performance del tuo sito:
- Metriche chiave in tempo reale
- Grafici di tendenza
- Riassunto delle performance
- Avvisi e notifiche importanti

### 🧠 [Brains](./02-brains.md)
Moduli di intelligenza artificiale che analizzano automaticamente i tuoi dati:
- Insights automatici
- Raccomandazioni di ottimizzazione
- Analisi predittive
- Identificazione opportunità

### ⚡ [Tempo Reale](./03-realtime.md)
Monitoraggio live dell'attività del tuo sito:
- Visitatori attivi in tempo reale
- Pagine visualizzate al momento
- Sorgenti di traffico live
- Eventi in corso

### 👥 [Pubblico](./04-audience.md)
Analisi dettagliata dei tuoi visitatori:
- Demografia e interessi
- Comportamento degli utenti
- Segmentazione del pubblico
- Percorsi di navigazione

### 📈 [Acquisizione](./05-acquisition.md)
Comprendi da dove arrivano i tuoi visitatori:
- Sorgenti di traffico
- Canali di marketing
- Campagne pubblicitarie
- Referral e link in entrata

### 🎯 [Landing Pages](./06-landing-pages.md)
Analisi delle performance delle tue pagine di destinazione:
- Tassi di conversione per pagina
- Tempo di permanenza
- Frequenza di rimbalzo
- Ottimizzazioni suggerite

### 📊 [Top Growing](./07-top-growing.md)
Identifica contenuti e pagine in crescita:
- Pagine con crescita rapida
- Contenuti trending
- Opportunità emergenti
- Analisi delle tendenze

### 📋 [Tutte le Pagine](./08-all-pages.md)
Vista completa di tutte le pagine del tuo sito:
- Performance per pagina
- Metriche comparative
- Filtri e ordinamento
- Esportazione dati

### 🎯 [Obiettivi](./09-goals.md)
Configurazione e monitoraggio degli obiettivi di business:
- Definizione obiettivi
- Tracciamento conversioni
- Funnel di conversione
- ROI e metriche business

### 🔑 [Attivazione Licenza](./10-license-activation.md)
Gestione della tua licenza QA Advisor:
- Attivazione licenza
- Stato abbonamento
- Upgrade e downgrade
- Gestione domini

### 🔥 [Heatmap](./heatmaps.md)
Visualizzazioni avanzate delle interazioni degli utenti:
- Heatmap click, scroll, move
- Filtri avanzati
- Analisi comportamentale
- Insights UX/UI

### ❓ [Aiuto](./12-help.md)
Centro di supporto e risorse:
- Documentazione integrata
- Tutorial interattivi
- Supporto tecnico
- FAQ e risoluzione problemi

## Navigazione tra le Schermate

### Menu Principale
Il menu principale di QA Advisor è organizzato logicamente:

```
QA Advisor
├── Dashboard          # Panoramica generale
├── Brains            # Insights IA
├── Tempo Reale       # Monitoraggio live
├── Pubblico          # Analisi visitatori
├── Acquisizione      # Sorgenti traffico
├── Landing Pages     # Performance pagine
├── Top Growing       # Contenuti in crescita
├── Tutte le Pagine   # Vista completa
├── Heatmap           # Mappe di calore
├── Obiettivi         # Conversioni e KPI
├── Impostazioni      # Configurazioni
├── Attivazione       # Gestione licenza
└── Aiuto             # Supporto
```

### Scorciatoie da Tastiera
QA Advisor supporta scorciatoie da tastiera per navigazione rapida:

- `Ctrl + D` - Dashboard
- `Ctrl + B` - Brains
- `Ctrl + R` - Tempo Reale
- `Ctrl + H` - Heatmap
- `Ctrl + G` - Obiettivi
- `Ctrl + ?` - Aiuto

## Funzionalità Comuni

### Filtri e Segmentazione
Tutte le schermate supportano filtri avanzati:

#### Filtri Temporali
- Oggi, Ieri, Ultimi 7 giorni
- Ultimi 30 giorni, Ultimi 90 giorni
- Intervallo personalizzato
- Confronto periodi

#### Filtri Demografici
- Paese e città
- Dispositivo (desktop, mobile, tablet)
- Browser e sistema operativo
- Nuovi vs. visitatori di ritorno

#### Filtri Comportamentali
- Sorgente di traffico
- Pagine di ingresso
- Durata sessione
- Numero di pagine visualizzate

### Esportazione Dati
Ogni schermata permette l'esportazione dei dati:

#### Formati Supportati
- **CSV** - Per analisi in Excel/Google Sheets
- **JSON** - Per integrazioni API
- **PDF** - Per report e presentazioni
- **PNG/JPG** - Per grafici e visualizzazioni

#### Opzioni di Esportazione
- Dati filtrati correnti
- Dati completi del periodo
- Solo metriche selezionate
- Include grafici e visualizzazioni

### Personalizzazione Dashboard

#### Widget Personalizzabili
- Aggiungi/rimuovi widget
- Ridimensiona e riorganizza
- Configura metriche mostrate
- Salva layout personalizzati

#### Temi e Visualizzazioni
- Modalità chiara/scura
- Schemi colore personalizzati
- Densità informazioni
- Preferenze grafici

## Workflow Tipici

### Analisi Performance Giornaliera
1. **Dashboard** - Panoramica generale
2. **Tempo Reale** - Attività corrente
3. **Brains** - Insights automatici
4. **Heatmap** - Comportamento utenti

### Ottimizzazione Conversioni
1. **Obiettivi** - Definisci KPI
2. **Landing Pages** - Identifica pagine critiche
3. **Heatmap** - Analizza interazioni
4. **Brains** - Ottimizzazioni suggerite

### Analisi Traffico
1. **Acquisizione** - Sorgenti traffico
2. **Pubblico** - Caratteristiche visitatori
3. **Top Growing** - Contenuti performanti
4. **Tutte le Pagine** - Vista completa

## Integrazioni e API

### Integrazioni Native
- Google Analytics
- Google Search Console
- Facebook Pixel
- Google Tag Manager

### API REST
Accesso programmatico ai dati:
```javascript
// Esempio chiamata API
fetch('/wp-json/qahm/v1/dashboard-stats')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Webhook
Notifiche automatiche per eventi importanti:
- Picchi di traffico
- Obiettivi raggiunti
- Errori critici
- Aggiornamenti dati

## Prossimi Passi

Per iniziare ad esplorare QA Advisor:

1. **[Dashboard](./01-dashboard.md)** - Inizia con la panoramica generale
2. **[Configurazione Obiettivi](./09-goals.md)** - Definisci cosa misurare
3. **[Heatmap](./heatmaps.md)** - Comprendi il comportamento degli utenti
4. **[Brains](./02-brains.md)** - Ottieni insights automatici

Ogni schermata è progettata per essere intuitiva e fornire valore immediato. Esplora le diverse sezioni per scoprire tutti gli insights che QA Advisor può fornire sul tuo sito WordPress!
