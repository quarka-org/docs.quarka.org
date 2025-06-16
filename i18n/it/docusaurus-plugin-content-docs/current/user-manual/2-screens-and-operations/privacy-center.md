---
sidebar_position: 14
---

# Centro Privacy

## Panoramica
Il Centro Privacy di QA Advisor fornisce strumenti completi per gestire la conformità alla privacy, inclusi GDPR, CCPA e altre normative sulla protezione dei dati. Questa sezione ti aiuta a configurare il consenso degli utenti, gestire i dati personali e mantenere la conformità normativa.

## Accesso a Questa Sezione
1. Accedi al pannello admin di WordPress
2. Naviga nel menu della barra laterale sinistra
3. Clicca su "QA Advisor"
4. Seleziona "Centro Privacy" dal sottomenu

## Layout Sezione

Il Centro Privacy include:
- **Gestione Consensi**: Configurazione banner e preferenze cookie
- **Controllo Dati**: Gestione dati personali raccolti
- **Conformità Normative**: Strumenti per GDPR, CCPA, ePrivacy
- **Audit Privacy**: Monitoraggio e reporting conformità
- **Richieste Utenti**: Gestione diritti privacy utenti

## Gestione Consensi

### Banner Cookie
- **Configurazione**: Personalizza aspetto e contenuto banner
- **Categorie Cookie**: Organizza cookie per tipologia
- **Opzioni Consenso**: Granularità controllo utente
- **Localizzazione**: Testi in multiple lingue

### Preferenze Utente
```
Categorie Consenso:
✅ Cookie Necessari (sempre attivi)
⚙️ Cookie Funzionali (opzionali)
📊 Cookie Analytics (opzionali)
🎯 Cookie Marketing (opzionali)
```

### Gestione Consensi
- **Raccolta**: Meccanismi ottenimento consenso
- **Storage**: Memorizzazione sicura preferenze
- **Aggiornamento**: Gestione modifiche consenso
- **Scadenza**: Rinnovo periodico consensi

## Controllo Dati

### Inventario Dati
- **Dati Raccolti**: Lista completa informazioni tracciate
- **Finalità Utilizzo**: Scopo raccolta per ogni dato
- **Base Legale**: Giustificazione legale trattamento
- **Retention**: Periodi conservazione dati

### Classificazione Dati
- **Dati Personali**: Informazioni identificative
- **Dati Sensibili**: Categorie speciali dati
- **Dati Anonimi**: Informazioni non identificative
- **Dati Pseudonimizzati**: Dati con identificatori rimossi

### Flussi Dati
- **Raccolta**: Punti raccolta dati sul sito
- **Elaborazione**: Processi analisi e utilizzo
- **Condivisione**: Trasferimenti a terze parti
- **Conservazione**: Sistemi storage e backup

## Conformità Normative

### GDPR (Regolamento Generale Protezione Dati)
- **Principi**: Liceità, correttezza, trasparenza
- **Diritti Utenti**: Accesso, rettifica, cancellazione, portabilità
- **Obblighi**: Informativa, consenso, sicurezza
- **Sanzioni**: Prevenzione violazioni e multe

### CCPA (California Consumer Privacy Act)
- **Diritti Consumatori**: Conoscere, cancellare, opt-out vendita
- **Obblighi Business**: Informativa, risposta richieste
- **Categorie Dati**: Identificatori, commerciali, biometrici
- **Terze Parti**: Gestione condivisioni dati

### ePrivacy Directive
- **Cookie Law**: Consenso cookie non essenziali
- **Comunicazioni**: Email marketing e tracking
- **Dispositivi**: Accesso informazioni dispositivo
- **Opt-in/Opt-out**: Meccanismi consenso

## Diritti Privacy Utenti

### Diritto di Accesso
- **Richiesta**: Modulo richiesta dati personali
- **Verifica Identità**: Processo autenticazione richiedente
- **Fornitura Dati**: Export dati in formato leggibile
- **Tempi Risposta**: Entro 30 giorni dalla richiesta

### Diritto di Rettifica
- **Correzione**: Modifica dati inesatti
- **Integrazione**: Completamento dati incompleti
- **Notifica**: Comunicazione a terze parti
- **Documentazione**: Registro modifiche effettuate

### Diritto di Cancellazione
- **Richiesta**: Modulo richiesta cancellazione
- **Valutazione**: Verifica legittimità richiesta
- **Esecuzione**: Rimozione dati da tutti i sistemi
- **Conferma**: Notifica completamento cancellazione

### Diritto di Portabilità
- **Export**: Estrazione dati in formato strutturato
- **Formati**: JSON, CSV, XML
- **Trasferimento**: Invio diretto ad altro controller
- **Sicurezza**: Crittografia durante trasferimento

## Strumenti Conformità

### Privacy Impact Assessment
- **Valutazione Rischi**: Analisi impatto privacy
- **Misure Mitigazione**: Azioni riduzione rischi
- **Documentazione**: Report valutazione
- **Aggiornamento**: Revisione periodica

### Data Protection Officer
- **Contatti**: Informazioni DPO designato
- **Responsabilità**: Supervisione conformità
- **Formazione**: Training team privacy
- **Consulenza**: Supporto decisioni privacy

### Audit e Monitoraggio
- **Controlli Automatici**: Verifica conformità continua
- **Report Compliance**: Dashboard stato conformità
- **Alerting**: Notifiche violazioni potenziali
- **Documentazione**: Log attività privacy

## Configurazione Tecnica

### Cookie Management
```javascript
// Configurazione Cookie
{
  "necessary": {
    "enabled": true,
    "description": "Cookie essenziali funzionamento sito"
  },
  "analytics": {
    "enabled": false,
    "description": "Cookie analisi performance",
    "cookies": ["_ga", "_gid", "qahm_*"]
  },
  "marketing": {
    "enabled": false,
    "description": "Cookie personalizzazione pubblicità"
  }
}
```

### Data Retention
- **Politiche**: Regole conservazione automatica
- **Scadenze**: Date eliminazione automatica
- **Eccezioni**: Dati da conservare per obblighi legali
- **Purging**: Processi pulizia periodica

### Sicurezza Dati
- **Crittografia**: Protezione dati in transito e riposo
- **Accesso**: Controlli autorizzazione
- **Backup**: Procedure backup sicure
- **Incident Response**: Gestione violazioni dati

## Best Practices

### Implementazione Privacy by Design
- **Proattività**: Anticipare problemi privacy
- **Default**: Impostazioni privacy-friendly predefinite
- **Integrazione**: Privacy in tutto il ciclo sviluppo
- **Trasparenza**: Comunicazione chiara pratiche

### Gestione Consensi
- **Granularità**: Controllo specifico per categoria
- **Facilità**: Processo semplice e chiaro
- **Revoca**: Possibilità ritirare consenso facilmente
- **Documentazione**: Registro consensi ottenuti

### Formazione Team
- **Awareness**: Sensibilizzazione privacy
- **Procedure**: Training su processi conformità
- **Aggiornamenti**: Formazione continua normative
- **Responsabilità**: Definizione ruoli privacy

## Risoluzione Problemi

### Banner Non Visualizzato
- **Problema**: Banner consenso non appare
- **Soluzioni**: Verifica configurazione e cache
- **Controlli**: JavaScript abilitato, conflitti plugin

### Consensi Non Salvati
- **Problema**: Preferenze utente non memorizzate
- **Soluzioni**: Verifica storage browser e database
- **Debug**: Log errori e configurazione

### Richieste Privacy Non Elaborate
- **Problema**: Richieste utenti non processate
- **Soluzioni**: Verifica workflow e notifiche
- **Escalation**: Procedure gestione ritardi

## Documentazione Legale

### Privacy Policy
- **Template**: Modelli conformi normative
- **Personalizzazione**: Adattamento specifico sito
- **Aggiornamenti**: Revisione periodica
- **Pubblicazione**: Posizionamento visibile

### Cookie Policy
- **Inventario**: Lista completa cookie utilizzati
- **Descrizioni**: Finalità ogni cookie
- **Durata**: Periodi conservazione
- **Terze Parti**: Cookie servizi esterni

### Termini di Servizio
- **Condizioni**: Regole utilizzo servizio
- **Limitazioni**: Esclusioni responsabilità
- **Modifiche**: Procedure aggiornamento
- **Giurisdizione**: Foro competente

## Prossimi Passi

Dal Centro Privacy puoi facilmente navigare verso:

1. **[Impostazioni](./11-settings)** - Configurazione privacy generale
2. **[Dashboard](./01-dashboard)** - Monitoraggio conformità
3. **[Aiuto](./12-help)** - Supporto questioni privacy
4. **Documentazione Legale** - Template e guide conformità

Il Centro Privacy di QA Advisor ti fornisce tutti gli strumenti necessari per mantenere la conformità alle normative privacy e proteggere i dati dei tuoi utenti!
