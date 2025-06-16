---
sidebar_position: 11
---

# Impostazioni

La sezione Impostazioni di QA Advisor è il centro di controllo per configurare ogni aspetto del plugin, dalla raccolta dati alla privacy, dalle performance alle integrazioni, permettendoti di personalizzare completamente l'esperienza analytics del tuo sito WordPress.

## Panoramica Impostazioni

### Accesso alle Impostazioni
- **Navigazione**: `QA Advisor > Impostazioni` nel menu WordPress Admin
- **URL Diretto**: `/wp-admin/admin.php?page=qahm-settings`
- **Scorciatoia**: `Ctrl + S` (quando sei nell'area admin di QA Advisor)

### Categorie Impostazioni
- **Generali**: Configurazioni base del plugin
- **Privacy**: Conformità GDPR e gestione dati
- **Performance**: Ottimizzazioni e limiti risorse
- **Heatmap**: Configurazione mappe di calore
- **Obiettivi**: Setup tracking conversioni
- **Integrazioni**: Connessioni con servizi esterni
- **Avanzate**: Configurazioni tecniche avanzate

## Impostazioni Generali

### Configurazione Base

#### Attivazione Plugin
```
🔧 Impostazioni Base:

Stato Plugin:
├── Tracking Attivo: ✓ Abilitato
├── Modalità Debug: ✗ Disabilitato (solo sviluppo)
├── Ambiente: Produzione
└── Versione: 2.1.5 (ultima)

Configurazione Sito:
├── Nome Sito: "Il Mio Sito WordPress"
├── URL Principale: https://tuosito.com
├── Timezone: Europe/Rome (UTC+1)
└── Lingua: Italiano (it_IT)

Raccolta Dati:
├── Pageview Tracking: ✓ Attivo
├── Event Tracking: ✓ Attivo
├── User Tracking: ✓ Attivo (anonimizzato)
└── Error Tracking: ✓ Attivo
```

#### Configurazioni Dominio
```
🌐 Gestione Domini:

Domini Autorizzati:
├── tuosito.com (Principale)
├── www.tuosito.com (Alias)
├── staging.tuosito.com (Staging)
└── dev.tuosito.com (Sviluppo)

Cross-Domain Tracking:
├── Abilita Cross-Domain: ✓
├── Domini Collegati: shop.tuosito.com
├── Subdomain Tracking: ✓
└── Referrer Policy: strict-origin-when-cross-origin

Esclusioni:
├── Admin Pages: ✓ Escludi /wp-admin/
├── Preview Pages: ✓ Escludi anteprime
├── Bot Traffic: ✓ Filtra bot automaticamente
└── Internal IPs: 192.168.1.0/24, 10.0.0.0/8
```

### Configurazione Utenti

#### Ruoli e Permessi
```
👥 Gestione Accessi:

Ruoli WordPress:
├── Administrator: Accesso completo
├── Editor: Solo visualizzazione report
├── Author: Solo propri contenuti
├── Contributor: Nessun accesso
└── Subscriber: Nessun accesso

Permessi Personalizzati:
├── Visualizza Dashboard: Administrator, Editor
├── Configura Obiettivi: Administrator
├── Esporta Dati: Administrator, Editor
├── Gestisci Heatmap: Administrator
└── Accesso API: Administrator (solo)

Restrizioni IP:
├── Whitelist IP: 203.0.113.0/24
├── Blacklist IP: 198.51.100.0/24
├── Geo-blocking: Blocca paesi specifici
└── VPN Detection: ⚠️ Avvisa per VPN/Proxy
```

## Impostazioni Privacy

### Conformità GDPR

#### Configurazione Privacy
```
🔒 Impostazioni Privacy GDPR:

Consenso Utenti:
├── Richiedi Consenso: ✓ Obbligatorio
├── Banner Cookie: ✓ Mostra banner
├── Opt-out Link: ✓ Fornisci link opt-out
└── Consenso Granulare: ✓ Per tipo di tracking

Anonimizzazione Dati:
├── Anonimizza IP: ✓ Ultimi 2 ottetti
├── Hash User ID: ✓ SHA-256
├── Rimuovi PII: ✓ Automatico
└── Pseudonimizzazione: ✓ Dati sensibili

Conservazione Dati:
├── Periodo Conservazione: 90 giorni
├── Auto-eliminazione: ✓ Automatica
├── Backup Sicuri: ✓ Crittografati
└── Audit Trail: ✓ Log accessi dati
```

#### Diritti Utenti GDPR
```
⚖️ Diritti Utenti:

Diritto di Accesso:
├── Portale Self-Service: ✓ Disponibile
├── Formato Export: JSON, CSV, PDF
├── Tempo Risposta: <72 ore
└── Verifica Identità: Email + Captcha

Diritto di Rettifica:
├── Correzione Dati: ✓ Permessa
├── Aggiornamento Profilo: ✓ Self-service
├── Validazione: ✓ Automatica
└── Notifica Modifiche: ✓ Email

Diritto di Cancellazione:
├── Eliminazione Completa: ✓ Disponibile
├── Conservazione Legale: 30 giorni
├── Backup Cleanup: ✓ Automatico
└── Conferma Eliminazione: ✓ Email

Diritto di Portabilità:
├── Export Strutturato: ✓ JSON/XML
├── API Access: ✓ Disponibile
├── Formato Standard: ✓ Schema.org
└── Transfer Sicuro: ✓ HTTPS + Auth
```

### Cookie e Tracking

#### Gestione Cookie
```
🍪 Configurazione Cookie:

Cookie Essenziali:
├── Session Cookie: qahm_session (necessario)
├── Preference Cookie: qahm_prefs (funzionalità)
├── Security Cookie: qahm_csrf (sicurezza)
└── Durata: Sessione o 30 giorni

Cookie Analytics:
├── Tracking Cookie: qahm_visitor (analytics)
├── Heatmap Cookie: qahm_heatmap (comportamento)
├── A/B Test Cookie: qahm_variant (testing)
└── Durata: 90 giorni (configurabile)

Cookie di Terze Parti:
├── Google Analytics: ✗ Disabilitato
├── Facebook Pixel: ✗ Disabilitato
├── Custom Integrations: ⚙️ Configurabile
└── Consenso Richiesto: ✓ Per tutti

Configurazioni Avanzate:
├── SameSite: Strict
├── Secure: ✓ Solo HTTPS
├── HttpOnly: ✓ Dove possibile
└── Domain: .tuosito.com
```

## Impostazioni Performance

### Ottimizzazioni Sistema

#### Configurazione Performance
```
⚡ Ottimizzazioni Performance:

Raccolta Dati:
├── Batch Processing: ✓ Abilitato
├── Batch Size: 100 eventi
├── Flush Interval: 30 secondi
└── Queue Limit: 1000 eventi

Database:
├── Query Optimization: ✓ Attivo
├── Index Management: ✓ Automatico
├── Connection Pooling: ✓ Abilitato
└── Slow Query Log: ✓ >2 secondi

Cache:
├── Object Cache: ✓ Redis
├── Page Cache: ✓ Compatibile
├── Query Cache: ✓ 1 ora TTL
└── Asset Cache: ✓ 24 ore TTL

Limiti Risorse:
├── Memory Limit: 256MB
├── Execution Time: 300 secondi
├── Max Queries: 100/minuto
└── File Upload: 32MB
```

#### Configurazione Server
```
🖥️ Ottimizzazioni Server:

PHP Configuration:
├── Version: 8.1+ (raccomandato)
├── Memory: 512MB+ (raccomandato)
├── Max Execution: 300s
└── Extensions: curl, json, mbstring, gd

Database Optimization:
├── Engine: InnoDB (raccomandato)
├── Buffer Pool: 256MB+
├── Query Cache: 32MB
└── Connections: 200 max

Web Server:
├── Compression: gzip/brotli
├── Keep-Alive: ✓ Abilitato
├── HTTP/2: ✓ Raccomandato
└── SSL/TLS: 1.2+ richiesto

CDN Integration:
├── Static Assets: ✓ Supportato
├── API Endpoints: ✗ Non cacheable
├── Geo-distribution: ✓ Supportato
└── Purge API: ✓ Disponibile
```

## Impostazioni Heatmap

### Configurazione Mappe di Calore

#### Tipi Heatmap
```
🔥 Configurazione Heatmap:

Click Heatmap:
├── Abilitato: ✓ Attivo
├── Elementi Tracciati: Link, Button, Form
├── Filtri: Desktop, Mobile, Tablet
├── Campionamento: 10% utenti
└── Retention: 60 giorni

Scroll Heatmap:
├── Abilitato: ✓ Attivo
├── Granularità: 50px intervalli
├── Viewport: Tutti i dispositivi
├── Campionamento: 15% utenti
└── Retention: 60 giorni

Move Heatmap:
├── Abilitato: ⚠️ Solo desktop
├── Sensibilità: Media
├── Filtro Rumore: ✓ Attivo
├── Campionamento: 5% utenti
└── Retention: 30 giorni

Session Recording:
├── Abilitato: ✓ Attivo (Premium)
├── Durata Max: 10 minuti
├── Privacy Mode: ✓ Maschera PII
├── Campionamento: 2% utenti
└── Retention: 30 giorni
```

#### Filtri e Segmentazione
```
🎯 Filtri Heatmap:

Filtri Dispositivo:
├── Desktop: ✓ Includi
├── Mobile: ✓ Includi
├── Tablet: ✓ Includi
└── Smart TV: ✗ Escludi

Filtri Geografici:
├── Paesi: Italia, Germania, Francia
├── Regioni: Europa, Nord America
├── Città: Milano, Roma, Napoli
└── Timezone: UTC+1 (Europe/Rome)

Filtri Comportamentali:
├── Nuovi Utenti: ✓ Includi
├── Utenti Ritorno: ✓ Includi
├── Sessioni >5min: ✓ Includi
├── Bounce <30s: ✗ Escludi
└── Conversioni: ✓ Segmento separato

Filtri Tecnici:
├── Browser: Chrome, Firefox, Safari
├── OS: Windows, macOS, Android, iOS
├── Risoluzione: >1024px larghezza
└── Connessione: Escludi <1Mbps
```

## Impostazioni Obiettivi

### Configurazione Tracking

#### Setup Obiettivi Base
```
🎯 Configurazione Obiettivi:

Obiettivi E-commerce:
├── Acquisto Completato: ✓ Attivo
├── Valore Dinamico: ✓ Da order_total
├── Funnel: Prodotto→Carrello→Checkout→Grazie
└── Attribution: Last-click (30 giorni)

Obiettivi Lead Generation:
├── Form Contatti: ✓ Attivo
├── Newsletter Signup: ✓ Attivo
├── Download Risorsa: ✓ Attivo
└── Valore Fisso: €50, €15, €25

Obiettivi Engagement:
├── Tempo Pagina >3min: ✓ Attivo
├── Scroll Depth >80%: ✓ Attivo
├── Video Completion: ✓ Attivo
└── Social Share: ✓ Attivo

Configurazioni Avanzate:
├── Conversioni Uniche: ✓ Per sessione
├── Lookback Window: 30 giorni
├── Cross-device: ✓ Abilitato
└── Offline Conversions: ⚙️ API
```

#### Attribution Models
```
📊 Modelli di Attribuzione:

Last-Click Attribution:
├── Peso: 100% ultimo touchpoint
├── Lookback: 30 giorni
├── Cross-device: ✓ Supportato
└── Uso: Default per e-commerce

First-Click Attribution:
├── Peso: 100% primo touchpoint
├── Lookback: 90 giorni
├── Cross-device: ✓ Supportato
└── Uso: Brand awareness

Linear Attribution:
├── Peso: Distribuito equamente
├── Touchpoint: Tutti nel percorso
├── Lookback: 30 giorni
└── Uso: Content marketing

Time-Decay Attribution:
├── Peso: Maggiore per touchpoint recenti
├── Half-life: 7 giorni
├── Lookback: 30 giorni
└── Uso: Cicli vendita lunghi

Data-Driven Attribution:
├── Algoritmo: Machine learning
├── Training: 90 giorni dati
├── Aggiornamento: Settimanale
└── Uso: Raccomandato (Premium)
```

## Impostazioni Integrazioni

### Connessioni Esterne

#### Integrazioni Analytics
```
🔗 Integrazioni Analytics:

Google Analytics:
├── Stato: ✓ Connesso
├── Property ID: GA4-XXXXXXXXX
├── Sync Obiettivi: ✓ Bidirezionale
├── Custom Dimensions: 5 configurate
└── Data Import: ✓ Giornaliero

Google Search Console:
├── Stato: ✓ Connesso
├── Property: https://tuosito.com
├── Sync Keywords: ✓ Automatico
├── Performance Data: ✓ Importato
└── Sitemap: ✓ Monitorato

Facebook Pixel:
├── Stato: ⚠️ Configurazione richiesta
├── Pixel ID: Non configurato
├── Conversions API: ✗ Non attivo
├── Custom Events: 0 configurati
└── Privacy: GDPR compliant

Google Ads:
├── Stato: ✓ Connesso
├── Account ID: 123-456-7890
├── Conversion Tracking: ✓ Attivo
├── Enhanced Conversions: ✓ Abilitato
└── Offline Conversions: ⚙️ Setup richiesto
```

#### Integrazioni CRM
```
👥 Integrazioni CRM:

HubSpot:
├── Stato: ✓ Connesso
├── API Key: hs-***-****
├── Contact Sync: ✓ Bidirezionale
├── Deal Tracking: ✓ Attivo
└── Lead Scoring: ✓ Automatico

Salesforce:
├── Stato: ⚙️ Configurazione
├── Org ID: Non configurato
├── Lead Assignment: ✗ Non attivo
├── Opportunity Sync: ✗ Non attivo
└── Custom Fields: 0 mappati

Mailchimp:
├── Stato: ✓ Connesso
├── API Key: mc-***-****
├── List Sync: ✓ Automatico
├── Segmentation: ✓ Comportamentale
└── Automation: ✓ Trigger-based

Custom CRM:
├── Webhook URL: https://api.tuocrm.com/webhook
├── Authentication: Bearer token
├── Sync Frequency: Real-time
├── Data Format: JSON
└── Retry Logic: 3 tentativi
```

### API e Webhook

#### Configurazione API
```
🔌 API Configuration:

REST API:
├── Endpoint: /wp-json/qahm/v1/
├── Authentication: JWT Bearer
├── Rate Limiting: 1000 req/hour
├── CORS: *.tuosito.com
└── Documentation: /api-docs

Webhook Endpoints:
├── Conversioni: https://api.tuosito.com/conversions
├── Eventi: https://api.tuosito.com/events
├── Utenti: https://api.tuosito.com/users
├── Errori: https://api.tuosito.com/errors
└── Retry Policy: Exponential backoff

API Keys:
├── Production: qahm_prod_***
├── Staging: qahm_stage_***
├── Development: qahm_dev_***
├── Scadenza: 365 giorni
└── Rotazione: Automatica

Security:
├── HTTPS Only: ✓ Obbligatorio
├── IP Whitelist: 203.0.113.0/24
├── Request Signing: ✓ HMAC-SHA256
└── Audit Logging: ✓ Completo
```

## Impostazioni Avanzate

### Configurazioni Tecniche

#### Configurazione Database
```
🗄️ Database Configuration:

Tabelle QA Advisor:
├── wp_qahm_data: Dati analytics principali
├── wp_qahm_sessions: Sessioni utente
├── wp_qahm_events: Eventi tracciati
├── wp_qahm_heatmaps: Dati heatmap
├── wp_qahm_goals: Configurazione obiettivi
└── wp_qahm_settings: Impostazioni plugin

Ottimizzazioni:
├── Indici: ✓ Automatici
├── Partitioning: ✓ Per data
├── Compression: ✓ InnoDB
├── Archiving: ✓ Dati vecchi
└── Backup: ✓ Incrementale

Manutenzione:
├── Cleanup Automatico: ✓ Settimanale
├── Optimize Tables: ✓ Mensile
├── Index Rebuild: ✓ Trimestrale
├── Statistics Update: ✓ Giornaliero
└── Health Check: ✓ Continuo
```

#### Configurazione Sicurezza
```
🔐 Security Configuration:

Autenticazione:
├── Two-Factor: ✓ Raccomandato
├── Session Timeout: 24 ore
├── Password Policy: Forte
├── Login Attempts: 5 max
└── Account Lockout: 30 minuti

Crittografia:
├── Data at Rest: AES-256
├── Data in Transit: TLS 1.3
├── API Keys: Encrypted storage
├── Passwords: bcrypt hash
└── PII Data: Field-level encryption

Audit e Logging:
├── Access Logs: ✓ Completi
├── Change Logs: ✓ Dettagliati
├── Error Logs: ✓ Strutturati
├── Security Events: ✓ Real-time
└── Retention: 1 anno

Compliance:
├── GDPR: ✓ Compliant
├── CCPA: ✓ Compliant
├── SOC 2: ⚙️ In progress
├── ISO 27001: ⚙️ Pianificato
└── HIPAA: ✗ Non applicabile
```

## Backup e Ripristino

### Gestione Backup

#### Configurazione Backup
```
💾 Backup Configuration:

Backup Automatici:
├── Frequenza: Giornaliera
├── Orario: 02:00 UTC
├── Retention: 30 giorni
├── Compressione: gzip
└── Crittografia: AES-256

Backup Incrementali:
├── Frequenza: Ogni 6 ore
├── Delta Changes: Solo modifiche
├── Storage: 50% riduzione
├── Recovery: Point-in-time
└── Validation: Automatica

Backup Completi:
├── Frequenza: Settimanale
├── Giorno: Domenica
├── Include: Dati + Configurazioni
├── Storage: Cloud + Local
└── Test Restore: Mensile

Disaster Recovery:
├── RTO: 4 ore
├── RPO: 1 ora
├── Backup Sites: 2 location
├── Failover: Automatico
└── Documentation: Aggiornata
```

### Import/Export

#### Gestione Dati
```
📤 Import/Export:

Export Formati:
├── CSV: ✓ Dati tabulari
├── JSON: ✓ Strutturati
├── XML: ✓ Standard
├── PDF: ✓ Report
└── Excel: ✓ Business

Import Sorgenti:
├── Google Analytics: ✓ Supportato
├── Adobe Analytics: ✓ Supportato
├── Matomo: ✓ Supportato
├── Custom CSV: ✓ Template
└── API Import: ✓ Real-time

Migrazione:
├── Da GA4: ✓ Wizard guidato
├── Da Universal: ✓ Storico
├── Da Matomo: ✓ Completa
├── Da Custom: ⚙️ Consulenza
└── Validation: ✓ Automatica

Sincronizzazione:
├── Real-time: ✓ Webhook
├── Batch: ✓ Schedulato
├── Incremental: ✓ Delta
├── Full Sync: ✓ Manuale
└── Conflict Resolution: ✓ Regole
```

## Monitoraggio e Alerting

### Sistema di Monitoraggio

#### Health Monitoring
```
📊 System Health:

Performance Metrics:
├── Response Time: <200ms (target)
├── Throughput: 1000 req/min
├── Error Rate: <0.1%
├── Uptime: 99.9%
└── Resource Usage: <80%

Data Quality:
├── Completeness: >95%
├── Accuracy: >99%
├── Timeliness: <5min delay
├── Consistency: ✓ Validated
└── Integrity: ✓ Checksums

Business Metrics:
├── Data Collection: 24/7
├── Processing Lag: <1min
├── Storage Growth: Monitored
├── User Satisfaction: >4.5/5
└── Support Tickets: <1%

Alerting Thresholds:
├── Critical: Immediate action
├── Warning: 1 hour response
├── Info: Daily digest
├── Maintenance: Scheduled
└── Escalation: Auto-escalate
```

## Best Practices

### Configurazione Ottimale

#### Raccomandazioni Setup
```
✅ Best Practices:

Configurazione Iniziale:
├── Abilita GDPR compliance
├── Configura anonimizzazione IP
├── Imposta retention dati appropriata
├── Configura backup automatici
└── Testa tutti gli obiettivi

Performance:
├── Abilita cache quando possibile
├── Ottimizza campionamento heatmap
├── Configura batch processing
├── Monitora utilizzo risorse
└── Pianifica manutenzione regolare

Sicurezza:
├── Usa HTTPS ovunque
├── Abilita 2FA per admin
├── Configura IP whitelist
├── Monitora accessi sospetti
└── Aggiorna regolarmente

Privacy:
├── Minimizza raccolta dati
├── Documenta processing
├── Fornisci opt-out facile
├── Rispetta diritti utenti
└── Audit regolari compliance
```

### Manutenzione Regolare

#### Checklist Manutenzione
```
🔧 Manutenzione Programmata:

Giornaliera:
├── Verifica health status
├── Controlla error logs
├── Monitora performance
├── Backup incrementale
└── Security scan

Settimanale:
├── Analisi trend dati
├── Pulizia dati obsoleti
├── Ottimizzazione database
├── Review alert
└── Backup completo

Mensile:
├── Audit configurazioni
├── Review obiettivi
├── Analisi ROI
├── Update documentazione
└── Training team

Trimestrale:
├── Security audit
├── Performance review
├── Capacity planning
├── Disaster recovery test
└── Compliance check
```

## Prossimi Passi

Dalle Impostazioni puoi:

1. **[Dashboard](./01-dashboard)** - Visualizza l'impatto delle configurazioni
2. **[Privacy Center](./privacy-center)** - Gestisci conformità GDPR
3. **[API Documentation](./api-docs)** - Integra con sistemi esterni
4. **[Help](./12-help)** - Ottieni supporto per configurazioni

Le Impostazioni di QA Advisor ti forniscono il controllo completo su ogni aspetto del plugin, permettendoti di configurare un sistema di analytics potente, sicuro e conforme alle normative per il tuo sito WordPress!
