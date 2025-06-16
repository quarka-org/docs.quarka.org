---
sidebar_position: 11
---

# Attivazione Licenza

La sezione Attivazione Licenza ti permette di gestire la tua licenza QA Advisor, controllare lo stato dell'abbonamento, configurare l'autorizzazione del dominio e accedere alle funzionalità premium.

## Panoramica

La gestione della licenza è importante per:

- **Feature Access**: Accesso a tutte le funzionalità disponibili
- **Compliance**: Conformità ai termini di licenza
- **Support Eligibility**: Idoneità per supporto tecnico
- **Updates**: Accesso agli aggiornamenti del software

## Tipi di Licenza

### Licenza Beta (Attuale)

#### Caratteristiche Beta
- **Accesso Gratuito**: Utilizzo gratuito durante il periodo beta
- **Funzionalità Complete**: Accesso a tutte le funzionalità principali
- **Supporto Community**: Supporto tramite community e documentazione
- **Feedback Program**: Partecipazione al programma feedback

#### Limitazioni Beta
- **Nessuna SLA**: Nessun Service Level Agreement garantito
- **Stabilità**: Possibili bug e instabilità
- **Data Retention**: Politiche conservazione dati in evoluzione
- **Feature Changes**: Funzionalità possono cambiare senza preavviso

### Licenze Future (Estate 2025)

#### Licenza Starter
- **Siti Singoli**: Un sito WordPress
- **Traffico Limitato**: Fino a 10,000 visualizzazioni/mese
- **Funzionalità Base**: Analytics e mappe di calore base
- **Supporto Email**: Supporto via email

#### Licenza Professional
- **Siti Multipli**: Fino a 5 siti WordPress
- **Traffico Esteso**: Fino a 100,000 visualizzazioni/mese
- **Funzionalità Avanzate**: Moduli AI, obiettivi avanzati
- **Supporto Prioritario**: Supporto prioritario

#### Licenza Enterprise
- **Siti Illimitati**: Numero illimitato di siti
- **Traffico Illimitato**: Nessun limite traffico
- **Funzionalità Complete**: Tutte le funzionalità disponibili
- **Supporto Dedicato**: Account manager dedicato

## Attivazione Licenza

### Processo di Attivazione

#### Step 1: Ottenere Licenza
1. **Acquisto**: Acquista licenza dal sito ufficiale
2. **Ricevi Chiave**: Ricevi chiave licenza via email
3. **Backup**: Salva chiave in luogo sicuro
4. **Preparazione**: Prepara informazioni dominio

#### Step 2: Inserimento Chiave
1. Vai a **QA Advisor > Attivazione Licenza**
2. Inserisci la **Chiave Licenza** nel campo appropriato
3. Inserisci il **Dominio** del sito (es. example.com)
4. Clicca **"Attiva Licenza"**

#### Step 3: Verifica Attivazione
- **Status Verde**: Licenza attivata correttamente
- **Funzionalità Sbloccate**: Accesso a tutte le funzionalità
- **Data Scadenza**: Visualizzazione data scadenza
- **Informazioni Supporto**: Dettagli supporto disponibile

### Configurazione Dominio

#### Autorizzazione Dominio
```
Dominio Principale: example.com
Domini Autorizzati:
- www.example.com
- example.com
- staging.example.com (se incluso nel piano)
```

#### Gestione Multi-Dominio
- **Dominio Primario**: Dominio principale autorizzato
- **Sottodomini**: Sottodomini inclusi automaticamente
- **Domini Aggiuntivi**: Domini extra (se supportati dal piano)
- **Ambiente Staging**: Autorizzazione ambiente test

## Gestione Abbonamento

### Informazioni Abbonamento

#### Dettagli Licenza
- **Tipo Licenza**: Starter, Professional, Enterprise
- **Data Attivazione**: Quando è stata attivata
- **Data Scadenza**: Quando scade l'abbonamento
- **Rinnovo Automatico**: Status rinnovo automatico
- **Metodo Pagamento**: Metodo pagamento associato

#### Utilizzo Corrente
- **Siti Attivi**: Numero siti attualmente attivi
- **Traffico Mensile**: Utilizzo traffico corrente
- **Limite Traffico**: Limite mensile del piano
- **Funzionalità Utilizzate**: Funzionalità attualmente in uso

### Gestione Rinnovo

#### Rinnovo Automatico
- **Abilitazione**: Abilita/disabilita rinnovo automatico
- **Metodo Pagamento**: Configura metodo pagamento
- **Notifiche**: Imposta notifiche rinnovo
- **Fatturazione**: Gestione informazioni fatturazione

#### Rinnovo Manuale
- **Notifiche Scadenza**: Avvisi prima della scadenza
- **Processo Rinnovo**: Istruzioni per rinnovo manuale
- **Grazia Period**: Periodo di grazia post-scadenza
- **Riattivazione**: Processo riattivazione dopo scadenza

## Upgrade e Downgrade

### Cambio Piano

#### Upgrade Piano
1. **Valutazione Necessità**: Analizza necessità upgrade
2. **Confronto Piani**: Confronta funzionalità disponibili
3. **Processo Upgrade**: Segui processo upgrade
4. **Attivazione Immediata**: Funzionalità disponibili immediatamente

#### Downgrade Piano
1. **Verifica Compatibilità**: Controlla compatibilità utilizzo attuale
2. **Backup Dati**: Backup dati che potrebbero essere persi
3. **Processo Downgrade**: Segui processo downgrade
4. **Limitazioni**: Comprendi nuove limitazioni

### Migrazione Dati

#### Backup Pre-Migrazione
- **Esportazione Dati**: Esporta tutti i dati importanti
- **Configurazioni**: Salva configurazioni personalizzate
- **Report Storici**: Backup report storici
- **Integrazioni**: Documenta integrazioni attive

#### Post-Migrazione
- **Verifica Funzionalità**: Controlla tutte le funzionalità
- **Ripristino Configurazioni**: Ripristina configurazioni
- **Test Integrazioni**: Testa integrazioni
- **Validazione Dati**: Valida integrità dati

## Risoluzione Problemi Licenza

### Problemi Comuni

#### Licenza Non Riconosciuta
**Sintomi**: Messaggio "Licenza non valida"
**Soluzioni**:
1. Verifica chiave licenza (copia/incolla accurato)
2. Controlla connessione internet
3. Verifica dominio inserito correttamente
4. Contatta supporto se persiste

#### Limite Traffico Superato
**Sintomi**: Funzionalità limitate, avvisi traffico
**Soluzioni**:
1. Controlla utilizzo traffico corrente
2. Considera upgrade piano
3. Ottimizza tracking per ridurre utilizzo
4. Contatta supporto per opzioni

#### Problemi Rinnovo
**Sintomi**: Licenza scaduta, funzionalità bloccate
**Soluzioni**:
1. Verifica metodo pagamento
2. Controlla email per notifiche
3. Rinnova manualmente se necessario
4. Contatta supporto fatturazione

### Diagnostica Licenza

#### Strumenti Diagnostici
```javascript
// Verifica status licenza
QAAdvisor.license.getStatus();

// Test connessione server licenze
QAAdvisor.license.testConnection();

// Verifica autorizzazione dominio
QAAdvisor.license.validateDomain();

// Log diagnostici
QAAdvisor.license.getDiagnostics();
```

#### Log di Sistema
```
[2025-06-16 10:30:15] License: Activation attempt for domain example.com
[2025-06-16 10:30:16] License: Key validation successful
[2025-06-16 10:30:17] License: Domain authorization confirmed
[2025-06-16 10:30:18] License: Features unlocked - Professional plan
```

## Sicurezza Licenza

### Protezione Chiave Licenza

#### Best Practice Sicurezza
- **Storage Sicuro**: Conserva chiave in luogo sicuro
- **Accesso Limitato**: Limita accesso alla chiave
- **Backup Multipli**: Mantieni backup in luoghi diversi
- **Documentazione**: Documenta dove è conservata

#### Prevenzione Abusi
- **Monitoraggio Utilizzo**: Monitora utilizzo anomalo
- **Autorizzazione Dominio**: Usa solo su domini autorizzati
- **Condivisione**: Non condividere chiave licenza
- **Segnalazione**: Segnala utilizzi sospetti

### Compliance e Audit

#### Audit Licenza
- **Utilizzo Conforme**: Verifica utilizzo conforme ai termini
- **Documentazione**: Mantieni documentazione licenza
- **Rinnovi**: Traccia rinnovi e scadenze
- **Reporting**: Report utilizzo per audit

#### Conformità Termini
- **Lettura Termini**: Leggi e comprendi termini licenza
- **Rispetto Limiti**: Rispetta limiti piano
- **Uso Appropriato**: Usa software appropriatamente
- **Aggiornamenti Termini**: Monitora aggiornamenti termini

## Supporto Licenza

### Canali Supporto

#### Supporto Self-Service
- **Documentazione**: Documentazione completa online
- **FAQ**: Domande frequenti licenze
- **Video Tutorial**: Tutorial video attivazione
- **Community Forum**: Forum community supporto

#### Supporto Diretto
- **Email Support**: Supporto via email
- **Live Chat**: Chat dal vivo (piani premium)
- **Phone Support**: Supporto telefonico (Enterprise)
- **Account Manager**: Manager dedicato (Enterprise)

### Informazioni Richieste

#### Per Supporto Licenza
- **Chiave Licenza**: Chiave licenza (ultimi 4 caratteri)
- **Dominio**: Dominio del sito
- **Tipo Piano**: Tipo piano licenza
- **Descrizione Problema**: Descrizione dettagliata problema
- **Screenshot**: Screenshot errori se applicabile

#### Tempi Risposta
- **Starter**: 48-72 ore
- **Professional**: 24-48 ore
- **Enterprise**: 4-8 ore
- **Emergenze**: 1-2 ore (solo Enterprise)

## Migrazione da Beta

### Preparazione Migrazione

#### Checklist Pre-Migrazione
- [ ] Backup completo dati QA Advisor
- [ ] Documentazione configurazioni attuali
- [ ] Lista integrazioni attive
- [ ] Export report storici importanti
- [ ] Verifica compatibilità tema/plugin

#### Pianificazione Transizione
- **Timeline**: Pianifica timeline migrazione
- **Downtime**: Minimizza downtime durante transizione
- **Testing**: Pianifica testing post-migrazione
- **Rollback**: Prepara piano rollback se necessario

### Processo Migrazione

#### Step Migrazione
1. **Acquisto Licenza**: Acquista licenza appropriata
2. **Backup Dati**: Backup completo dati beta
3. **Attivazione**: Attiva nuova licenza
4. **Migrazione Dati**: Migra dati da versione beta
5. **Testing**: Testa tutte le funzionalità
6. **Go Live**: Attiva versione licenziata

#### Post-Migrazione
- **Verifica Funzionalità**: Controlla tutte le funzionalità
- **Configurazione**: Riconfigura impostazioni personalizzate
- **Monitoraggio**: Monitora performance post-migrazione
- **Supporto**: Contatta supporto per problemi

## Prossimi Passi

Dopo aver attivato la licenza:

1. **[Impostazioni](/docs/user-manual/screens-and-operations/settings)** - Configura impostazioni avanzate
2. **[Dashboard](/docs/user-manual/screens-and-operations/dashboard)** - Esplora funzionalità sbloccate
3. **[Aiuto](/docs/user-manual/screens-and-operations/help)** - Accedi al supporto premium

---

Una licenza attiva garantisce accesso completo a QA Advisor e supporto professionale. Gestisci la tua licenza proattivamente per massimizzare il valore del tuo investimento.
