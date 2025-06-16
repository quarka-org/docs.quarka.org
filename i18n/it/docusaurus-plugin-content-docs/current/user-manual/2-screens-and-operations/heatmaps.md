---
sidebar_position: 14
---

# Mappe di Calore

Le Mappe di Calore (Heatmaps) di QA Advisor forniscono visualizzazioni potenti del comportamento degli utenti, mostrando dove cliccano, come si muovono e come interagiscono con le tue pagine web.

## Panoramica

Le mappe di calore sono essenziali per:

- **User Behavior Analysis**: Comprendere come gli utenti interagiscono con le pagine
- **UX Optimization**: Identificare problemi di usabilità e opportunità di miglioramento
- **Conversion Optimization**: Ottimizzare elementi per aumentare conversioni
- **Design Validation**: Validare decisioni di design con dati reali

## Tipi di Mappe di Calore

### Click Heatmaps

#### Visualizzazione Clic
- **Hotspots**: Aree con maggiore densità di clic (rosso/arancione)
- **Cold Spots**: Aree con pochi o nessun clic (blu/verde)
- **Click Intensity**: Intensità rappresentata da colori e dimensioni
- **Click Distribution**: Distribuzione clic su tutta la pagina

#### Metriche Clic
- **Total Clicks**: Numero totale clic sulla pagina
- **Unique Clicks**: Clic da utenti unici
- **Click Rate**: Percentuale utenti che cliccano
- **Click Depth**: Profondità clic nella pagina

#### Analisi Elementi
- **Buttons**: Performance pulsanti e call-to-action
- **Links**: Efficacia link interni ed esterni
- **Images**: Interazione con immagini
- **Navigation**: Utilizzo menu e navigazione

### Move Heatmaps

#### Tracking Movimento Mouse
- **Mouse Trails**: Percorsi movimento mouse
- **Hover Areas**: Aree dove il mouse si sofferma
- **Movement Patterns**: Pattern movimento comuni
- **Attention Indicators**: Indicatori attenzione utente

#### Insights Movimento
- **Reading Patterns**: Pattern lettura contenuto
- **Visual Hierarchy**: Come gli utenti seguono gerarchia visiva
- **Distraction Points**: Elementi che distraggono
- **Engagement Zones**: Zone maggiore engagement

### Scroll Heatmaps

#### Analisi Scroll
- **Scroll Depth**: Quanto in profondità scorrono gli utenti
- **Fold Analysis**: Comportamento above/below the fold
- **Scroll Velocity**: Velocità scroll attraverso contenuto
- **Stop Points**: Punti dove gli utenti si fermano

#### Metriche Scroll
- **Average Scroll Depth**: Profondità scroll media
- **Scroll Completion Rate**: Percentuale utenti che scorrono fino in fondo
- **Time to Scroll**: Tempo prima di iniziare scroll
- **Scroll Engagement**: Engagement basato su scroll

## Configurazione Heatmaps

### Setup Iniziale

#### Attivazione Tracking
```javascript
{
  "heatmap_config": {
    "click_tracking": true,
    "move_tracking": true,
    "scroll_tracking": true,
    "touch_tracking": true, // Per dispositivi mobili
    "sampling_rate": 100    // Percentuale utenti tracciati
  }
}
```

#### Selezione Pagine
- **All Pages**: Tracking su tutte le pagine
- **Specific Pages**: Pagine specifiche selezionate
- **Page Categories**: Categorie di pagine (blog, prodotti, etc.)
- **URL Patterns**: Pattern URL con wildcard

#### Filtri Raccolta Dati
- **Device Types**: Desktop, mobile, tablet
- **User Segments**: Nuovi vs ritornanti
- **Traffic Sources**: Organico, diretto, social, paid
- **Geographic**: Filtri geografici

### Configurazioni Avanzate

#### Sampling e Performance
```javascript
{
  "advanced_config": {
    "sampling_strategy": "random", // random, systematic, stratified
    "max_data_points": 10000,      // Limite punti dati per pagina
    "data_retention": 90,          // Giorni conservazione dati
    "real_time_processing": false  // Elaborazione tempo reale
  }
}
```

#### Privacy Settings
- **IP Anonymization**: Anonimizzazione indirizzi IP
- **Session Anonymization**: Anonimizzazione sessioni
- **GDPR Compliance**: Conformità GDPR automatica
- **Opt-out Mechanism**: Meccanismo opt-out utenti

## Visualizzazione e Analisi

### Interfaccia Heatmaps

#### Controlli Visualizzazione
- **Heatmap Type**: Selezione tipo mappa calore
- **Intensity Scale**: Scala intensità colori
- **Overlay Opacity**: Opacità overlay heatmap
- **Color Scheme**: Schema colori personalizzabile

#### Filtri Temporali
- **Date Range**: Intervallo date personalizzato
- **Time of Day**: Filtro per ora del giorno
- **Day of Week**: Filtro per giorno settimana
- **Seasonal Filters**: Filtri stagionali

#### Filtri Segmentazione
- **Device Segmentation**: Segmentazione per dispositivo
- **User Type**: Nuovi vs utenti ritornanti
- **Traffic Source**: Segmentazione per fonte traffico
- **Geographic**: Segmentazione geografica

### Strumenti Analisi

#### Click Analysis Tools
- **Element Inspector**: Ispettore elementi cliccabili
- **Click Ranking**: Classifica elementi per clic
- **Conversion Correlation**: Correlazione clic-conversioni
- **A/B Test Integration**: Integrazione test A/B

#### Comparative Analysis
- **Before/After**: Confronto prima/dopo modifiche
- **Device Comparison**: Confronto comportamento per dispositivo
- **Segment Comparison**: Confronto segmenti utenti
- **Time Period Comparison**: Confronto periodi temporali

## Insights e Ottimizzazioni

### Identificazione Problemi UX

#### Common UX Issues
- **Rage Clicks**: Clic ripetuti frustrati
- **Dead Clicks**: Clic su elementi non cliccabili
- **Missed CTAs**: Call-to-action ignorati
- **Navigation Confusion**: Confusione navigazione

#### Usability Problems
- **False Affordances**: Elementi che sembrano cliccabili ma non lo sono
- **Poor Visual Hierarchy**: Gerarchia visiva confusa
- **Content Blindness**: Contenuto importante ignorato
- **Mobile Usability**: Problemi specifici mobile

### Optimization Opportunities

#### CTA Optimization
- **Button Placement**: Posizionamento ottimale pulsanti
- **Button Design**: Design pulsanti più efficaci
- **CTA Copy**: Testi call-to-action migliori
- **Visual Prominence**: Prominenza visiva CTAs

#### Content Optimization
- **Content Positioning**: Posizionamento contenuto importante
- **Reading Flow**: Ottimizzazione flusso lettura
- **Visual Elements**: Utilizzo elementi visivi
- **Information Architecture**: Architettura informazioni

#### Layout Optimization
- **Above the Fold**: Ottimizzazione area above fold
- **Sidebar Usage**: Utilizzo efficace sidebar
- **Footer Optimization**: Ottimizzazione footer
- **White Space**: Utilizzo spazio bianco

## Heatmaps per Dispositivi

### Desktop Heatmaps

#### Desktop-Specific Insights
- **Mouse Behavior**: Comportamento mouse specifico
- **Keyboard Navigation**: Navigazione da tastiera
- **Multi-Monitor**: Comportamento multi-monitor
- **Browser Differences**: Differenze tra browser

#### Desktop Optimization
- **Hover Effects**: Ottimizzazione effetti hover
- **Click Targets**: Dimensioni target clic ottimali
- **Scroll Behavior**: Comportamento scroll desktop
- **Content Density**: Densità contenuto ottimale

### Mobile Heatmaps

#### Touch Interaction Analysis
- **Tap Heatmaps**: Mappe calore tocchi
- **Swipe Patterns**: Pattern swipe
- **Pinch/Zoom**: Comportamento zoom
- **Touch Accuracy**: Accuratezza tocchi

#### Mobile-Specific Metrics
- **Thumb Zones**: Zone raggiungibili con pollice
- **Touch Target Size**: Dimensioni target tocco
- **Scroll Velocity**: Velocità scroll mobile
- **Orientation Changes**: Cambi orientamento

#### Mobile Optimization
- **Touch-Friendly Design**: Design touch-friendly
- **Mobile Navigation**: Navigazione mobile ottimizzata
- **Content Prioritization**: Prioritizzazione contenuto mobile
- **Performance Impact**: Impatto performance mobile

## Integrazione con Altri Dati

### Analytics Integration

#### Correlation Analysis
- **Heatmaps + Conversions**: Correlazione heatmap-conversioni
- **Heatmaps + Bounce Rate**: Correlazione con bounce rate
- **Heatmaps + Time on Page**: Correlazione tempo pagina
- **Heatmaps + Exit Rate**: Correlazione tasso uscita

#### Funnel Analysis
- **Conversion Funnel**: Heatmap nel funnel conversione
- **Drop-off Points**: Punti abbandono visualizzati
- **Optimization Path**: Percorso ottimizzazione guidato
- **Success Metrics**: Metriche successo correlate

### A/B Testing Integration

#### Test Design
- **Heatmap-Informed Tests**: Test basati su insights heatmap
- **Element Testing**: Test elementi specifici
- **Layout Testing**: Test layout alternativi
- **Content Testing**: Test contenuto diverso

#### Results Analysis
- **Winner Identification**: Identificazione variante vincente
- **Statistical Significance**: Significatività statistica
- **Behavioral Changes**: Cambiamenti comportamentali
- **Long-term Impact**: Impatto lungo termine

## Reporting e Condivisione

### Heatmap Reports

#### Automated Reports
- **Weekly Heatmap Summary**: Riassunto settimanale
- **Monthly Trends**: Trend mensili comportamento
- **Quarterly Analysis**: Analisi trimestrale
- **Custom Reporting**: Report personalizzati

#### Report Components
- **Visual Heatmaps**: Heatmap visive
- **Key Insights**: Insights chiave
- **Recommendations**: Raccomandazioni azioni
- **Performance Metrics**: Metriche performance

### Sharing and Collaboration

#### Team Collaboration
- **Shared Dashboards**: Dashboard condivise
- **Annotation System**: Sistema annotazioni
- **Comment Threads**: Thread commenti
- **Version Control**: Controllo versioni

#### Stakeholder Communication
- **Executive Summaries**: Riassunti esecutivi
- **Visual Presentations**: Presentazioni visive
- **ROI Reporting**: Report ROI ottimizzazioni
- **Progress Tracking**: Tracking progressi

## Privacy e Compliance

### Data Protection

#### Privacy by Design
- **Minimal Data Collection**: Raccolta dati minimale
- **Anonymization**: Anonimizzazione automatica
- **Consent Management**: Gestione consensi
- **Data Retention**: Politiche conservazione

#### Compliance Standards
- **GDPR Compliance**: Conformità GDPR
- **CCPA Compliance**: Conformità CCPA
- **Cookie Law**: Conformità cookie law
- **Industry Standards**: Standard settoriali

### User Rights

#### Data Subject Rights
- **Right to Access**: Diritto accesso dati
- **Right to Rectification**: Diritto rettifica
- **Right to Erasure**: Diritto cancellazione
- **Right to Portability**: Diritto portabilità

## Best Practice

### Implementation Best Practices
1. **Start Simple**: Inizia con configurazioni base
2. **Focus on Key Pages**: Concentrati su pagine importanti
3. **Regular Analysis**: Analizza regolarmente i dati
4. **Action-Oriented**: Trasforma insights in azioni

### Analysis Best Practices
- **Statistical Significance**: Assicura significatività statistica
- **Context Consideration**: Considera contesto business
- **User Journey**: Analizza nel contesto journey utente
- **Continuous Monitoring**: Monitoraggio continuo

### Optimization Best Practices
- **Incremental Changes**: Modifiche incrementali
- **Test Before Implementing**: Testa prima di implementare
- **Measure Impact**: Misura impatto modifiche
- **Document Learnings**: Documenta apprendimenti

## Prossimi Passi

Dopo aver configurato le heatmaps:

1. **[Landing Pages](/docs/user-manual/screens-and-operations/landing-pages)** - Applica insights alle landing page
2. **[Obiettivi](/docs/user-manual/screens-and-operations/goals)** - Configura obiettivi basati su comportamento
3. **[Brains](/docs/user-manual/screens-and-operations/brains)** - Usa AI per raccomandazioni automatiche

---

Le mappe di calore sono uno strumento potente per comprendere il comportamento degli utenti. Utilizzale strategicamente per ottimizzare l'esperienza utente e aumentare le conversioni del tuo sito web.
