---
sidebar_position: 13
---

# Heatmap

Le Heatmap di QA Advisor sono uno strumento potente per visualizzare il comportamento degli utenti sul tuo sito WordPress, fornendo insights visivi su dove i visitatori cliccano, come scorrono le pagine e dove concentrano la loro attenzione.

## Panoramica Heatmap

### Accesso alle Heatmap
- **Navigazione**: `QA Advisor > Heatmap` nel menu WordPress Admin
- **URL Diretto**: `/wp-admin/admin.php?page=qahm-heatmaps`
- **Scorciatoia**: `Ctrl + H` (quando sei nell'area admin di QA Advisor)
- **Widget Rapido**: Icona heatmap in ogni pagina del sito (modalità admin)

### Tipi di Heatmap Disponibili
- **Click Heatmap**: Visualizza dove gli utenti cliccano
- **Scroll Heatmap**: Mostra fino a dove gli utenti scorrono
- **Move Heatmap**: Traccia il movimento del mouse
- **Attention Heatmap**: Combina tempo e movimento per mostrare aree di interesse
- **Touch Heatmap**: Specifico per dispositivi mobile (tocchi e swipe)

## Click Heatmap

### Visualizzazione Click

#### Mappa Calore Click
```
🔥 Click Heatmap - Homepage:

Zone Calde (Rosso):
├── Menu Navigazione: 2,340 click (23.4%)
├── CTA Principale: 1,876 click (18.7%)
├── Logo: 1,234 click (12.3%)
├── Footer Links: 890 click (8.9%)
└── Social Icons: 567 click (5.7%)

Zone Medie (Arancione):
├── Sidebar Widget: 456 click (4.6%)
├── Search Box: 345 click (3.5%)
├── Breadcrumb: 234 click (2.3%)
├── Related Posts: 189 click (1.9%)
└── Author Bio: 123 click (1.2%)

Zone Fredde (Blu):
├── Footer Copyright: 89 click (0.9%)
├── Privacy Policy: 67 click (0.7%)
├── Terms of Service: 45 click (0.5%)
├── Cookie Notice: 34 click (0.3%)
└── Altre aree: 156 click (1.6%)

Totale Click Tracciati: 10,000
Periodo: Ultimi 30 giorni
Dispositivi: Tutti
```

#### Analisi Click per Elemento
```
📊 Analisi Dettagliata Click:

Pulsanti CTA:
├── "Inizia Gratis": 1,234 click (CTR: 8.9%)
├── "Scopri di Più": 890 click (CTR: 6.4%)
├── "Contattaci": 567 click (CTR: 4.1%)
├── "Download": 345 click (CTR: 2.5%)
└── "Iscriviti": 234 click (CTR: 1.7%)

Link Navigazione:
├── "Prodotti": 987 click
├── "Prezzi": 765 click
├── "Blog": 654 click
├── "Supporto": 432 click
└── "Chi Siamo": 321 click

Elementi Interattivi:
├── Form Contatti: 456 click
├── Video Play: 345 click
├── Immagini Prodotto: 234 click
├── Testimonial: 189 click
└── FAQ Accordion: 123 click
```

### Insights Click Behavior

#### Pattern Comportamentali
```
🎯 Pattern Click Identificati:

Desktop vs Mobile:
├── Desktop: Click più precisi, focus su menu
├── Mobile: Touch più dispersi, focus su CTA
├── Tablet: Comportamento ibrido
└── Smart TV: Click limitati, navigazione base

Nuovi vs Returning Users:
├── Nuovi: Esplorano menu e navigazione
├── Returning: Click diretti su obiettivi
├── Power Users: Scorciatoie e funzioni avanzate
└── Casual Users: Interazioni superficiali

Sorgente Traffico:
├── Organico: Click metodici, alta esplorazione
├── Social: Click impulsivi, alta dispersione
├── Diretto: Click mirati, bassa esplorazione
├── Paid: Click focalizzati su conversione
└── Email: Click su link specifici
```

## Scroll Heatmap

### Visualizzazione Scroll

#### Mappa Profondità Scroll
```
📜 Scroll Heatmap - Blog Post:

Above the Fold (0-600px):
├── 100% utenti raggiungono
├── Tempo Medio: 15 secondi
├── Engagement: Alto
└── Azioni: 45% click, 23% condivisioni

First Scroll (600-1200px):
├── 78% utenti raggiungono
├── Tempo Medio: 45 secondi
├── Engagement: Medio-Alto
└── Azioni: 32% click, 15% condivisioni

Mid Content (1200-2400px):
├── 45% utenti raggiungono
├── Tempo Medio: 2:30 minuti
├── Engagement: Medio
└── Azioni: 18% click, 8% condivisioni

Bottom Content (2400-3600px):
├── 23% utenti raggiungono
├── Tempo Medio: 4:15 minuti
├── Engagement: Basso-Medio
└── Azioni: 12% click, 5% condivisioni

Footer (3600px+):
├── 12% utenti raggiungono
├── Tempo Medio: 6:00 minuti
├── Engagement: Basso
└── Azioni: 8% click, 2% condivisioni
```

#### Analisi Scroll Behavior
```
📊 Metriche Scroll Dettagliate:

Scroll Depth per Dispositivo:
├── Desktop: 67% scroll medio
├── Mobile: 45% scroll medio
├── Tablet: 56% scroll medio
└── Smart TV: 34% scroll medio

Scroll Speed:
├── Veloce (>5px/s): 34% utenti
├── Normale (2-5px/s): 45% utenti
├── Lento (<2px/s): 21% utenti
└── Correlazione: Scroll lento = maggior engagement

Bounce Points:
├── 15% abbandona a 300px
├── 25% abbandona a 800px
├── 35% abbandona a 1500px
├── 45% abbandona a 2500px
└── 55% abbandona prima del footer
```

### Ottimizzazione Basata su Scroll

#### Raccomandazioni Posizionamento
```
💡 Ottimizzazioni Scroll-Based:

Above-the-Fold (0-600px):
├── Posiziona value proposition principale
├── CTA primario ben visibile
├── Navigation menu ottimizzato
├── Trust signals prominenti
└── Loading speed <2 secondi

First Scroll (600-1200px):
├── Benefici chiave del prodotto
├── Social proof e testimonial
├── CTA secondario
├── Elementi interattivi
└── Video o demo

Mid Content (1200-2400px):
├── Contenuto dettagliato
├── FAQ e obiezioni comuni
├── Case study e esempi
├── CTA intermedi
└── Related content

Bottom Content (2400px+):
├── Informazioni aggiuntive
├── Footer navigation
├── Contact information
├── Legal links
└── Final CTA
```

## Move Heatmap

### Visualizzazione Movimento Mouse

#### Tracciamento Movimento
```
🖱️ Move Heatmap - Landing Page:

Zone Attenzione Alta:
├── Headline Principale: 89% coverage
├── Immagine Hero: 76% coverage
├── CTA Button: 67% coverage
├── Navigation Menu: 54% coverage
└── Social Proof: 43% coverage

Pattern Movimento:
├── F-Pattern: 45% utenti (lettura occidentale)
├── Z-Pattern: 32% utenti (scan veloce)
├── Layer Cake: 23% utenti (sezioni distinte)
└── Random: 12% utenti (esplorazione casuale)

Hesitation Points:
├── Form Fields: 2.3s hover medio
├── Pricing Table: 1.8s hover medio
├── Product Images: 1.5s hover medio
├── Testimonials: 1.2s hover medio
└── FAQ Sections: 0.9s hover medio
```

#### Insights Movimento
```
🔍 Analisi Movimento Dettagliata:

Mouse vs Eye Tracking:
├── Correlazione: 73% (alta)
├── Predittività: Mouse predice interesse
├── Lag Time: 200-500ms ritardo
└── Accuracy: ±50px precisione

Attention Patterns:
├── Text Scanning: Movimento lineare
├── Image Viewing: Movimento circolare
├── Form Filling: Movimento preciso
├── Navigation: Movimento rapido
└── Decision Making: Movimento esitante

Device Differences:
├── Desktop: Movimento preciso, hover ricco
├── Mobile: Touch points, no hover
├── Tablet: Ibrido touch/hover
└── Trackpad: Movimento meno preciso
```

## Attention Heatmap

### Combinazione Tempo + Movimento

#### Mappa Attenzione Combinata
```
👁️ Attention Heatmap - Product Page:

Attenzione Massima (Rosso Intenso):
├── Product Title: 4.2s tempo medio
├── Price: 3.8s tempo medio
├── Main Image: 3.5s tempo medio
├── Add to Cart: 2.9s tempo medio
└── Reviews Stars: 2.1s tempo medio

Attenzione Alta (Arancione):
├── Product Description: 2.8s tempo medio
├── Specifications: 2.3s tempo medio
├── Customer Reviews: 2.1s tempo medio
├── Related Products: 1.8s tempo medio
└── Shipping Info: 1.5s tempo medio

Attenzione Media (Giallo):
├── Product Gallery: 1.7s tempo medio
├── FAQ Section: 1.4s tempo medio
├── Social Share: 1.2s tempo medio
├── Breadcrumb: 0.9s tempo medio
└── Footer Links: 0.6s tempo medio

Zone Ignorate (Blu/Verde):
├── Sidebar Ads: 0.3s tempo medio
├── Cookie Notice: 0.2s tempo medio
├── Legal Links: 0.1s tempo medio
└── Background Elements: 0.1s tempo medio
```

#### Calcolo Attention Score
```
📊 Attention Score Algorithm:

Fattori Considerati:
├── Tempo di Permanenza (40% peso)
├── Movimento Mouse (25% peso)
├── Scroll Behavior (20% peso)
├── Click Proximity (10% peso)
└── Return Visits (5% peso)

Score Calculation:
├── Tempo: (secondi / max_tempo) × 40
├── Movimento: (coverage / max_coverage) × 25
├── Scroll: (depth_reached / total_depth) × 20
├── Click: (click_distance / max_distance) × 10
├── Return: (return_views / total_views) × 5
└── Total: Somma ponderata (0-100)

Interpretazione Score:
├── 80-100: Attenzione Massima
├── 60-79: Attenzione Alta
├── 40-59: Attenzione Media
├── 20-39: Attenzione Bassa
└── 0-19: Zona Ignorata
```

## Touch Heatmap (Mobile)

### Comportamento Touch Mobile

#### Analisi Touch Points
```
📱 Touch Heatmap - Mobile Homepage:

Touch Patterns:
├── Tap: 67% interazioni
├── Swipe: 23% interazioni
├── Pinch/Zoom: 8% interazioni
├── Long Press: 2% interazioni
└── Multi-touch: 1% interazioni

Zone Touch Frequenti:
├── Navigation Burger: 1,234 touch
├── CTA Button: 987 touch
├── Phone Number: 765 touch
├── Social Icons: 543 touch
└── Search Icon: 321 touch

Touch Accuracy:
├── Target Hit: 78% precisione
├── Near Miss: 15% (entro 10px)
├── Miss: 7% (oltre 10px)
├── Accidental: 3% touch
└── Fat Finger: 12% problemi

Gesture Analysis:
├── Scroll Down: 89% utenti
├── Scroll Up: 34% utenti
├── Horizontal Swipe: 12% utenti
├── Pinch Zoom: 8% utenti
└── Rotate: 2% utenti
```

#### Ottimizzazione Touch
```
✋ Touch Optimization Guidelines:

Touch Target Size:
├── Minimum: 44px × 44px
├── Recommended: 48px × 48px
├── Optimal: 56px × 56px
├── Spacing: 8px minimum
└── Context: Larger for primary actions

Touch Feedback:
├── Visual: Immediate color change
├── Haptic: Vibration feedback
├── Audio: Optional sound
├── Animation: Micro-interactions
└── Timing: <100ms response

Gesture Support:
├── Swipe Navigation: Horizontal
├── Pull to Refresh: Vertical
├── Pinch to Zoom: Images/Maps
├── Long Press: Context menus
└── Double Tap: Quick actions
```

## Filtri e Segmentazione

### Filtri Avanzati Heatmap

#### Filtri Disponibili
```
🎛️ Filtri Heatmap:

Filtri Temporali:
├── Ultimi 7 giorni
├── Ultimi 30 giorni
├── Ultimi 90 giorni
├── Range personalizzato
└── Confronto periodi

Filtri Dispositivo:
├── Desktop (Windows, Mac, Linux)
├── Mobile (iOS, Android)
├── Tablet (iPad, Android Tablet)
├── Smart TV
└── Risoluzione specifica

Filtri Geografici:
├── Paese
├── Regione/Stato
├── Città
├── Timezone
└── Lingua browser

Filtri Comportamentali:
├── Nuovi vs Returning
├── Durata sessione
├── Pagine per sessione
├── Sorgente traffico
└── Conversion status

Filtri Tecnici:
├── Browser e versione
├── Sistema operativo
├── Velocità connessione
├── JavaScript abilitato
└── Ad blocker status
```

#### Segmentazione Avanzata
```
🎯 Segmenti Heatmap:

Segmenti Predefiniti:
├── High-Value Customers
├── Mobile-First Users
├── Bounce Visitors
├── Engaged Readers
├── Conversion-Ready
└── First-Time Visitors

Segmenti Personalizzati:
├── E-commerce Shoppers
├── Blog Readers
├── Support Seekers
├── Product Researchers
└── Newsletter Subscribers

Confronto Segmenti:
├── Side-by-side view
├── Overlay comparison
├── Difference highlighting
├── Statistical significance
└── Behavior patterns
```

## Analisi e Insights

### Insights Automatici

#### AI-Powered Analysis
```
🧠 AI Insights Heatmap:

Pattern Recognition:
├── Identifica pattern comportamentali
├── Rileva anomalie nel comportamento
├── Suggerisce ottimizzazioni layout
├── Predice aree problematiche
└── Raccomanda A/B test

Automated Insights:
├── "Il 67% degli utenti mobile non vede il CTA principale"
├── "La sidebar destra è ignorata dal 89% degli utenti"
├── "Gli utenti esitano 3.2s prima di cliccare 'Acquista'"
├── "Il form contatti ha 45% abbandono al campo telefono"
└── "La gallery prodotto riceve solo 12% attenzione"

Optimization Suggestions:
├── Sposta CTA above-the-fold
├── Rimuovi o riposiziona sidebar
├── Semplifica processo acquisto
├── Rendi campo telefono opzionale
└── Migliora visibilità gallery
```

#### Correlation Analysis
```
📊 Analisi Correlazioni:

Heatmap vs Conversions:
├── Zone calde → +340% conversioni
├── Attention time → +67% engagement
├── Click accuracy → +23% satisfaction
├── Scroll depth → +45% retention
└── Touch efficiency → +89% mobile conv.

Heatmap vs Performance:
├── Load time → -23% attention per +1s
├── Mobile optimization → +156% touch accuracy
├── Page size → -12% scroll depth per 100KB
├── JavaScript errors → -67% interaction
└── SSL certificate → +34% trust signals

Heatmap vs SEO:
├── Dwell time → +45% ranking factor
├── Bounce rate → -78% SEO impact
├── User signals → +23% organic traffic
├── Core Web Vitals → +67% user experience
└── Mobile-first → +89% mobile ranking
```

## Configurazione e Setup

### Configurazione Heatmap

#### Setup Iniziale
```
⚙️ Configurazione Heatmap:

Attivazione:
├── Abilita Click Heatmap: ✓
├── Abilita Scroll Heatmap: ✓
├── Abilita Move Heatmap: ✓ (Desktop only)
├── Abilita Touch Heatmap: ✓ (Mobile only)
└── Abilita Attention Heatmap: ✓ (Premium)

Campionamento:
├── Desktop: 10% utenti
├── Mobile: 15% utenti
├── Tablet: 12% utenti
├── Frequenza: Real-time
└── Storage: 60 giorni

Privacy:
├── Anonimizzazione: ✓ Attiva
├── IP Masking: ✓ Ultimi 2 ottetti
├── PII Filtering: ✓ Automatico
├── GDPR Compliance: ✓ Conforme
└── Opt-out: ✓ Disponibile

Performance:
├── Async Loading: ✓ Non-blocking
├── Compression: ✓ gzip
├── CDN: ✓ Global distribution
├── Caching: ✓ Edge caching
└── Bandwidth: <1% overhead
```

#### Configurazione Avanzata
```
🔧 Impostazioni Avanzate:

Data Collection:
├── Batch Size: 100 eventi
├── Flush Interval: 30 secondi
├── Queue Limit: 1000 eventi
├── Retry Logic: 3 tentativi
└── Fallback: Local storage

Filtering:
├── Bot Detection: ✓ Automatico
├── Admin Exclusion: ✓ Escludi admin
├── IP Whitelist: Configurabile
├── Referrer Filtering: ✓ Spam block
└── Quality Threshold: 95%

Integration:
├── Google Analytics: ✓ Sync
├── Google Tag Manager: ✓ Compatible
├── Custom Events: ✓ API
├── Webhook: ✓ Real-time
└── Export: CSV, JSON, PDF
```

## Reporting e Export

### Report Heatmap

#### Template Report
```
📋 Report Heatmap Disponibili:

Executive Summary:
├── Key insights e raccomandazioni
├── ROI ottimizzazioni implementate
├── Trend comportamentali principali
├── Confronto performance periodi
└── Action items prioritizzati

Technical Report:
├── Dati dettagliati per pagina
├── Metriche performance
├── Analisi cross-device
├── Segmentazione avanzata
└── Correlazioni statistiche

UX/UI Report:
├── Usability insights
├── Design recommendations
├── Accessibility issues
├── Mobile optimization
└── Conversion optimization

Competitive Analysis:
├── Benchmark industry
├── Best practices comparison
├── Gap analysis
├── Opportunity identification
└── Strategic recommendations
```

### Export e Integrazione

#### Formati Export
```
📤 Export Options:

Immagini Heatmap:
├── PNG: Alta risoluzione
├── SVG: Vettoriale scalabile
├── PDF: Report completi
├── Interactive: HTML embed
└── Video: Time-lapse behavior

Dati Raw:
├── CSV: Analisi Excel
├── JSON: Integrazione API
├── XML: Standard format
├── Database: Direct export
└── Real-time: Streaming API

Integrazioni:
├── Google Analytics: Sync automatico
├── Adobe Analytics: Custom integration
├── Mixpanel: Event tracking
├── Hotjar: Data comparison
└── Custom Tools: API webhook
```

## Best Practices

### Ottimizzazione UX

#### Metodologia Heatmap-Driven
```
🎯 UX Optimization Process:

1. Collect (Raccolta Dati):
├── Accumula dati significativi (min 1000 sessioni)
├── Segmenta per dispositivo e audience
├── Filtra dati di qualità
└── Identifica pattern ricorrenti

2. Analyze (Analisi):
├── Identifica zone calde e fredde
├── Analizza percorsi utente
├── Trova punti di attrito
└── Correla con conversioni

3. Hypothesize (Ipotesi):
├── Formula ipotesi basate su dati
├── Prioritizza per impatto/sforzo
├── Definisci metriche successo
└── Pianifica test A/B

4. Test (Test):
├── Implementa modifiche
├── Monitora nuove heatmap
├── Misura impatto metriche
└── Valida o confuta ipotesi

5. Implement (Implementazione):
├── Rollout modifiche vincenti
├── Documenta learnings
├── Monitora performance long-term
└── Itera processo
```

#### Common Optimization Patterns
```
✅ Pattern Ottimizzazione Comuni:

Above-the-Fold:
├── Value proposition entro 5 secondi
├── CTA visibile senza scroll
├── Navigation intuitiva
├── Trust signals prominenti
└── Loading speed <2 secondi

Content Layout:
├── F-pattern per testo
├── Z-pattern per landing page
├── Whitespace per focus
├── Visual hierarchy chiara
└── Mobile-first design

Interaction Design:
├── Click targets >44px mobile
├── Hover states desktop
├── Touch feedback mobile
├── Error prevention
└── Progressive disclosure

Conversion Optimization:
├── Single focus per pagina
├── Riduzione friction
├── Social proof strategico
├── Urgency appropriata
└── Testing continuo
```

## Prossimi Passi

Dalle Heatmap puoi:

1. **[A/B Testing](./ab-testing)** - Testa ottimizzazioni basate su insights
2. **[Obiettivi](./09-goals)** - Misura impatto ottimizzazioni su conversioni
3. **[Pubblico](./04-audience)** - Segmenta heatmap per tipo utente
4. **[Dashboard](./01-dashboard)** - Monitora KPI post-ottimizzazione

Le Heatmap di QA Advisor trasformano il comportamento invisibile degli utenti in insights visivi actionable, permettendoti di ottimizzare sistematicamente l'esperienza utente e massimizzare le conversioni del tuo sito WordPress!
