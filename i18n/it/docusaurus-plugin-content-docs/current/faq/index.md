---
sidebar_position: 1
---

# Domande Frequenti (FAQ)

Trova risposte rapide alle domande più comuni su QA Advisor WordPress Analytics Plugin.

## Installazione e Configurazione

### Come installo QA Advisor?

**Metodo Raccomandato:**
1. Vai su `Plugin > Aggiungi Nuovo` in WordPress
2. Cerca "QA Advisor"
3. Clicca "Installa Ora"
4. Attiva il plugin
5. Segui l'assistente di configurazione

**Metodo Manuale:**
1. Scarica il file ZIP del plugin
2. Vai su `Plugin > Aggiungi Nuovo > Carica`
3. Seleziona il file e installa
4. Attiva il plugin

### QA Advisor è compatibile con la mia versione di WordPress?

QA Advisor è compatibile con:
- **WordPress**: 5.0 o superiore (raccomandato: versione più recente)
- **PHP**: 7.4 o superiore (raccomandato: 8.1+)
- **MySQL**: 5.6 o superiore

### Come configuro il plugin dopo l'installazione?

Dopo l'attivazione, QA Advisor avvierà automaticamente l'assistente di configurazione che ti guiderà attraverso:
- Impostazioni base di tracciamento
- Configurazioni privacy (GDPR/LGPD)
- Configurazione heatmap
- Definizione obiettivi iniziali

## Funzionalità e Caratteristiche

### Quali dati raccoglie QA Advisor?

**Dati Raccolti:**
- Pagine visitate e tempo sulla pagina
- Click e interazioni (per heatmap)
- Informazioni dispositivo e browser
- Posizione geografica (paese/città)
- Modelli di navigazione

**Dati NON Raccolti:**
- Informazioni personali identificabili
- Contenuto dei moduli
- Password o dati sensibili
- Indirizzi IP completi (anonimizzati)

### Come funzionano le heatmap?

Le heatmap raccolgono dati anonimi di interazione degli utenti e creano visualizzazioni colorate che mostrano:
- **Zone Calde (Rosso)**: Molta attività
- **Zone Tiepide (Giallo/Verde)**: Attività moderata
- **Zone Fredde (Blu)**: Poca attività

### Cosa sono i moduli "Brains"?

I Brains sono moduli IA che analizzano automaticamente i tuoi dati e forniscono:
- Insights sulle performance del sito
- Raccomandazioni di ottimizzazione
- Identificazione di opportunità
- Analisi predittive

## Performance e Compatibilità

### QA Advisor influisce sulla velocità del mio sito?

QA Advisor è ottimizzato per un impatto minimo sulle performance:
- Script caricati in modo asincrono
- Dati elaborati in background
- Cache intelligente implementata
- Impatto tipico: meno di 0.1s sui tempi di caricamento

### È compatibile con plugin di cache?

**Compatibile con:**
- WP Rocket
- W3 Total Cache
- WP Super Cache
- LiteSpeed Cache
- Autoptimize

**Configurazione Raccomandata:**
- Escludi script QA Advisor dalla minificazione
- Permetti caricamento asincrono
- Configura object cache se disponibile

### Funziona con page builder?

**Completamente Compatibile:**
- Elementor
- Divi Builder
- Beaver Builder
- Gutenberg
- Visual Composer

## Privacy e Conformità

### QA Advisor è conforme a GDPR/LGPD?

**Sì, completamente conforme:**
- Anonimizzazione automatica IP
- Dati archiviati localmente
- Nessun cookie di tracciamento obbligatorio
- Opzioni opt-out per utenti
- Periodo di conservazione configurabile

### Dove vengono archiviati i dati?

Tutti i dati sono archiviati:
- **Localmente**: Nel tuo database WordPress
- **Nessun servizio esterno**: Nessun dato inviato a terze parti
- **Controllo completo**: Possiedi tutti i tuoi dati
- **Backup**: Incluso nei backup regolari di WordPress

### Come configuro la conformità LGPD?

1. Vai su `QA Advisor > Impostazioni > Privacy`
2. Attiva "Conformità LGPD"
3. Configura periodo di conservazione (raccomandato: 90 giorni)
4. Attiva anonimizzazione IP
5. Configura banner consenso se necessario

## Licenze e Piani

### Qual è la differenza tra i piani?

**Gratuito:**
- Analytics di base
- Heatmap limitate (1.000 visualizzazioni/mese)
- 1 sito
- Supporto community

**Professional (€29/mese):**
- Heatmap illimitate
- Fino a 5 siti
- Moduli IA completi
- Supporto prioritario

**Enterprise (Su richiesta):**
- Siti illimitati
- White-label
- API completa
- Supporto dedicato

### Come attivo la mia licenza?

1. Vai su `QA Advisor > Attivazione Licenza`
2. Inserisci la tua chiave di licenza
3. Clicca "Attiva"
4. Le funzionalità premium vengono sbloccate automaticamente

### Posso usarlo su più siti?

Dipende dal tuo piano:
- **Gratuito**: 1 sito
- **Professional**: Fino a 5 siti
- **Enterprise**: Siti illimitati

## Risoluzione Problemi

### I dati non appaiono nel dashboard

**Possibili Cause e Soluzioni:**

1. **Plugin appena installato**
   - Attendi 24-48 ore per la raccolta iniziale dei dati

2. **JavaScript bloccato**
   - Controlla console browser (F12)
   - Disattiva temporaneamente ad blocker
   - Testa in modalità incognito

3. **Cache troppo aggressiva**
   - Svuota cache del sito
   - Configura esclusioni per script QA Advisor

4. **Conflitto con altri plugin**
   - Disattiva temporaneamente altri plugin analytics
   - Testa con tema predefinito

### Le heatmap non vengono generate

**Verifiche:**

1. **Traffico sufficiente**
   - Minimo 100 sessioni necessarie
   - Attendi più tempo per la raccolta

2. **Impostazioni corrette**
   - Verifica che le pagine siano incluse
   - Conferma tasso di campionamento

3. **Problemi tecnici**
   - Controlla log errori
   - Testa su dispositivi diversi

### Performance lenta dopo l'installazione

**Ottimizzazioni:**

1. **Configura limiti dati**
   ```php
   define('QAHM_LIMIT_PV_MONTH', 10000);
   define('QAHM_DATA_RETENTION_DAYS', 30);
   ```

2. **Ottimizza server**
   - Aumenta memoria PHP a 256MB
   - Configura object cache
   - Ottimizza database

3. **Impostazioni plugin**
   - Riduci frequenza raccolta
   - Limita pagine tracciate
   - Attiva compressione dati

## Funzionalità Avanzate

### Come uso l'API di QA Advisor?

**Per sviluppatori:**

1. Attiva API in `Impostazioni > Avanzate`
2. Genera chiave API
3. Usa endpoint disponibili:
   ```
   GET /wp-json/qahm/v1/stats
   GET /wp-json/qahm/v1/heatmaps
   POST /wp-json/qahm/v1/events
   ```

### Come creo report personalizzati?

1. Vai su `QA Advisor > Report`
2. Clicca "Nuovo Report"
3. Seleziona metriche desiderate
4. Configura filtri e periodo
5. Salva e programma invio automatico

### Posso integrare con Google Analytics?

**Sì, integrazione disponibile:**
1. Vai su `Impostazioni > Integrazioni`
2. Connetti il tuo account Google Analytics
3. Configura importazione dati
4. Visualizza dati combinati nel dashboard

## Supporto e Risorse

### Dove trovare ulteriore aiuto?

**Risorse Disponibili:**
- **Documentazione**: [docs.quarka.org](https://docs.quarka.org)
- **Forum Community**: Supporto gratuito
- **Email**: supporto@qaadvisor.com (licenze a pagamento)
- **Chat**: Disponibile sul sito ufficiale

### Come segnalare bug o suggerire funzionalità?

1. **GitHub**: Per sviluppatori e bug tecnici
2. **Forum**: Per discussioni community
3. **Email**: Per supporto diretto (licenze a pagamento)
4. **Modulo Feedback**: All'interno del plugin

### È disponibile formazione?

**Risorse di Apprendimento:**
- Tutorial video su YouTube
- Webinar mensili gratuiti
- Documentazione completa
- Programma certificazione (prossimamente)

---

**Non hai trovato la tua domanda?** Contattaci attraverso i canali di supporto o consulta la nostra [documentazione completa](/docs/user-manual).
