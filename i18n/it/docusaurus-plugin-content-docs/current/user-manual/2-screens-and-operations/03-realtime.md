---
sidebar_position: 4
---

# Tempo Reale

La vista Tempo Reale di QA Advisor ti permette di monitorare l'attività del tuo sito web mentre accade, fornendo insights immediati sui visitatori attivi, le pagine più popolari e il comportamento degli utenti in tempo reale.

## Panoramica

Il monitoraggio in tempo reale è essenziale per:

- **Verifica Immediata**: Confermare che il tracciamento funziona correttamente
- **Monitoraggio Eventi**: Seguire campagne, lanci di prodotti o eventi speciali
- **Risoluzione Problemi**: Identificare rapidamente problemi tecnici
- **Engagement Live**: Vedere come gli utenti interagiscono con nuovi contenuti

## Layout della Schermata

### Pannello Superiore - Metriche Live

#### Visitatori Attivi
- **Conteggio Corrente**: Numero di visitatori attualmente sul sito
- **Tendenza 30 Minuti**: Grafico dell'attività negli ultimi 30 minuti
- **Picco Giornaliero**: Massimo numero di visitatori simultanei oggi

#### Visualizzazioni Pagina (Ultima Ora)
- **Totale Visualizzazioni**: Pagine viste nell'ultima ora
- **Tasso al Minuto**: Media di visualizzazioni per minuto
- **Confronto**: Variazione rispetto all'ora precedente

#### Nuovi Visitatori
- **Percentuale**: Percentuale di nuovi visitatori tra quelli attivi
- **Primi Accessi**: Visitatori che stanno visitando il sito per la prima volta
- **Ritornanti**: Visitatori che sono già stati sul sito

### Sezione Centrale - Attività Live

#### Mappa Visitatori
Visualizzazione geografica in tempo reale:

- **Posizioni Attive**: Punti sulla mappa mondiale che mostrano visitatori attivi
- **Concentrazioni**: Aree con maggiore densità di visitatori
- **Dettagli Paese**: Click su un paese per vedere dettagli specifici
- **Zoom Interattivo**: Ingrandisci per vedere dettagli regionali

#### Stream Attività
Feed live delle azioni degli utenti:

```
🟢 Milano, Italia - Visualizza: /prodotti/smartphone
🔵 Roma, Italia - Nuovo visitatore su: /
🟡 Napoli, Italia - Clic su: "Aggiungi al carrello"
🟠 Torino, Italia - Uscita da: /checkout
```

#### Pagine Attive
Lista delle pagine attualmente visualizzate:

- **URL Pagina**: Percorso della pagina
- **Visitatori Attivi**: Numero di persone sulla pagina ora
- **Tempo Medio**: Tempo medio trascorso sulla pagina
- **Azioni**: Link per vedere dettagli o mappe di calore

### Pannello Laterale - Insights Rapidi

#### Top Fonti Traffico (Live)
- **Traffico Diretto**: Visitatori che arrivano direttamente
- **Motori di Ricerca**: Traffico da Google, Bing, etc.
- **Social Media**: Traffico da Facebook, Twitter, LinkedIn
- **Referral**: Traffico da altri siti web

#### Dispositivi Attivi
- **Desktop**: Percentuale di visitatori desktop
- **Mobile**: Percentuale di visitatori mobile
- **Tablet**: Percentuale di visitatori tablet
- **Sistemi Operativi**: Distribuzione OS in tempo reale

#### Browser Utilizzati
- **Chrome**: Percentuale utenti Chrome
- **Safari**: Percentuale utenti Safari
- **Firefox**: Percentuale utenti Firefox
- **Altri**: Altri browser in uso

## Funzionalità Avanzate

### Filtri Tempo Reale

#### Filtro Geografico
- **Paese**: Filtra per paese specifico
- **Regione**: Zoom su regioni specifiche
- **Città**: Focus su città particolari
- **Fuso Orario**: Considera differenze di fuso orario

#### Filtro Comportamentale
- **Nuovi vs Ritornanti**: Segmenta per tipo di visitatore
- **Durata Sessione**: Filtra per lunghezza sessione
- **Pagine Visitate**: Filtra per numero di pagine viste
- **Engagement**: Filtra per livello di interazione

#### Filtro Tecnico
- **Dispositivo**: Desktop, mobile, tablet
- **Browser**: Tipo di browser utilizzato
- **Sistema Operativo**: OS del visitatore
- **Risoluzione Schermo**: Dimensioni schermo

### Alerting Tempo Reale

#### Configurazione Avvisi
Imposta avvisi per eventi specifici:

```javascript
{
  "traffic_spike": {
    "threshold": 200,
    "condition": "visitors > threshold",
    "notification": "email + dashboard"
  },
  "conversion_goal": {
    "event": "purchase_completed",
    "notification": "real_time_popup"
  },
  "error_detection": {
    "condition": "404_errors > 10/minute",
    "notification": "immediate_alert"
  }
}
```

#### Tipi di Avvisi
- **Picchi di Traffico**: Aumenti improvvisi di visitatori
- **Cali di Traffico**: Diminuzioni significative
- **Errori Tecnici**: 404, 500, errori JavaScript
- **Obiettivi Raggiunti**: Conversioni o milestone
- **Comportamenti Anomali**: Pattern inusuali

### Monitoraggio Campagne

#### Tracking UTM in Tempo Reale
Monitora le performance delle campagne:

- **utm_source**: Fonte della campagna (google, facebook, email)
- **utm_medium**: Mezzo utilizzato (cpc, social, email)
- **utm_campaign**: Nome della campagna
- **utm_content**: Variante del contenuto
- **utm_term**: Parole chiave (per campagne a pagamento)

#### Dashboard Campagne Live
- **Traffico per Campagna**: Visitatori per ogni campagna attiva
- **Conversioni Live**: Obiettivi completati per campagna
- **Costo per Clic**: CPC in tempo reale (se integrato)
- **ROI Istantaneo**: Ritorno sull'investimento live

### Interazioni Utente Live

#### Heatmap Tempo Reale
Visualizza le interazioni mentre accadono:

- **Clic Live**: Punti che appaiono quando gli utenti cliccano
- **Movimento Mouse**: Tracce del movimento del mouse
- **Scroll Behavior**: Come gli utenti scorrono le pagine
- **Form Interactions**: Interazioni con moduli in tempo reale

#### Session Replay Live
Guarda le sessioni degli utenti in tempo reale:

- **Selezione Sessione**: Scegli una sessione attiva da osservare
- **Playback Live**: Vedi cosa sta facendo l'utente ora
- **Annotazioni**: Aggiungi note durante l'osservazione
- **Privacy Controls**: Rispetta le impostazioni privacy

## Utilizzo Pratico

### Verifica Post-Lancio

Dopo aver lanciato nuovi contenuti o funzionalità:

1. **Monitora Traffico**: Controlla se c'è un aumento di visitatori
2. **Osserva Comportamento**: Vedi come gli utenti interagiscono con le novità
3. **Identifica Problemi**: Rileva rapidamente eventuali errori
4. **Misura Engagement**: Valuta se le modifiche migliorano l'engagement

### Gestione Eventi Speciali

Durante eventi, promozioni o lanci:

- **Preparazione**: Imposta avvisi per picchi di traffico
- **Monitoraggio Attivo**: Segui l'evento in tempo reale
- **Risoluzione Rapida**: Intervieni immediatamente su problemi
- **Ottimizzazione Live**: Modifica strategie basandoti sui dati live

### Supporto Clienti Proattivo

Utilizza i dati tempo reale per il supporto:

- **Identificazione Problemi**: Rileva utenti in difficoltà
- **Intervento Proattivo**: Offri aiuto prima che chiedano
- **Chat Targeting**: Avvia chat con utenti specifici
- **Personalizzazione**: Personalizza l'esperienza basandoti sul comportamento

## Configurazione Avanzata

### Impostazioni Performance

#### Frequenza Aggiornamento
```javascript
{
  "update_frequency": {
    "high_traffic": "1_second",
    "normal_traffic": "5_seconds",
    "low_traffic": "15_seconds"
  },
  "auto_adjust": true
}
```

#### Ottimizzazione Risorse
- **Adaptive Polling**: Frequenza che si adatta al traffico
- **Data Compression**: Compressione dati per connessioni lente
- **Selective Updates**: Aggiorna solo dati cambiati
- **Background Processing**: Elaborazione in background

### Privacy e Conformità

#### Anonimizzazione Tempo Reale
- **IP Masking**: Mascheramento indirizzi IP
- **Location Fuzzing**: Posizioni approssimative
- **Session Anonymization**: Sessioni anonime
- **GDPR Compliance**: Conformità automatica GDPR

#### Controlli Accesso
- **Role-Based Access**: Accesso basato sui ruoli
- **IP Restrictions**: Restrizioni per IP
- **Time-Based Access**: Accesso limitato nel tempo
- **Audit Logging**: Log degli accessi

## Risoluzione Problemi

### Problemi Comuni

#### Dati Non Aggiornati
**Sintomi**: I dati non si aggiornano in tempo reale
**Soluzioni**:
1. Controlla la connessione internet
2. Verifica che JavaScript sia abilitato
3. Disabilita estensioni browser che bloccano script
4. Svuota cache e ricarica la pagina

#### Performance Lente
**Sintomi**: La pagina tempo reale è lenta o si blocca
**Soluzioni**:
1. Riduci la frequenza di aggiornamento
2. Limita il numero di elementi visualizzati
3. Chiudi altre schede del browser
4. Controlla l'utilizzo CPU del sistema

#### Discrepanze nei Conteggi
**Sintomi**: I numeri non corrispondono ad altre fonti
**Cause Possibili**:
- Differenze nei fusi orari
- Filtri applicati diversi
- Definizioni metriche diverse
- Ritardi nella sincronizzazione dati

### Debug Avanzato

#### Console Sviluppatore
Utilizza la console del browser per debug:

```javascript
// Verifica connessione WebSocket
console.log(QAAdvisor.realtime.connection.status);

// Controlla frequenza aggiornamenti
console.log(QAAdvisor.realtime.updateFrequency);

// Debug eventi tempo reale
QAAdvisor.realtime.debug = true;
```

#### Log di Sistema
Controlla i log per problemi server-side:

```
[2025-06-16 10:30:15] Realtime: WebSocket connection established
[2025-06-16 10:30:16] Realtime: 45 active visitors tracked
[2025-06-16 10:30:17] Realtime: Data update sent to 12 dashboard clients
```

## Best Practice

### Monitoraggio Efficace
1. **Imposta Avvisi Intelligenti**: Non troppi, non troppo pochi
2. **Personalizza Dashboard**: Mostra solo metriche rilevanti
3. **Documenta Anomalie**: Tieni traccia di eventi inusuali
4. **Forma il Team**: Assicurati che tutti sappiano usare la funzionalità

### Ottimizzazione Performance
- **Usa Filtri**: Riduci il carico filtrando dati non necessari
- **Monitora Risorse**: Controlla l'impatto sulle prestazioni del server
- **Pianifica Capacità**: Prepara l'infrastruttura per picchi di traffico
- **Test Regolari**: Verifica che tutto funzioni durante periodi di basso traffico

## Prossimi Passi

Dopo aver familiarizzato con il tempo reale:

1. **[Pubblico](/docs/user-manual/screens-and-operations/audience)** - Analizza i visitatori in dettaglio
2. **[Mappe di Calore](/docs/user-manual/screens-and-operations/heatmaps)** - Visualizza le interazioni
3. **[Obiettivi](/docs/user-manual/screens-and-operations/goals)** - Configura il tracking delle conversioni

---

Il monitoraggio tempo reale ti dà il polso immediato del tuo sito web. Utilizzalo per verifiche rapide, monitoraggio eventi e risoluzione proattiva dei problemi.
