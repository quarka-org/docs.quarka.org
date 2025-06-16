---
sidebar_position: 13
---

# Heatmaps (Wärmekarten)

Heatmaps in QA Advisor bieten eine visuelle Darstellung der Nutzerinteraktionen auf Ihren Webseiten. Verstehen Sie, wo Besucher klicken, wie sie scrollen und welche Bereiche ihre Aufmerksamkeit am meisten fesseln.

## Überblick

Heatmaps sind eines der mächtigsten Tools in QA Advisor, um das Nutzerverhalten zu visualisieren. Sie verwandeln komplexe Daten in intuitive, farbkodierte Visualisierungen, die sofort zeigen, wie Nutzer mit Ihren Seiten interagieren.

## Heatmap-Typen

### 🖱️ Click Heatmaps (Klick-Wärmekarten)

**Was sie zeigen**
- Wo Nutzer auf Ihrer Seite klicken
- Häufigkeit der Klicks pro Bereich
- Klick-Verteilung über verschiedene Elemente
- Ineffektive Klicks auf nicht-klickbare Elemente

**Anwendungsfälle**
```javascript
// Click Heatmap Konfiguration
const clickHeatmapConfig = {
    type: 'click',
    page_url: '/product-page',
    date_range: 'last_30_days',
    device_filter: 'all', // 'desktop', 'mobile', 'tablet'
    user_segment: 'all_users',
    min_clicks: 5 // Mindestanzahl für Anzeige
};
```

**Optimierungserkenntnisse**
- CTA-Button-Effektivität
- Navigation-Nutzung
- Rage Clicks (frustrierte Klicks)
- Dead Clicks (Klicks ohne Aktion)

### 📱 Move Heatmaps (Bewegungs-Wärmekarten)

**Was sie zeigen**
- Mausbewegungen und Cursor-Pfade
- Aufmerksamkeitsbereiche
- Lesepattern und Scan-Verhalten
- Hover-Aktivitäten

**Mobile Touch Heatmaps**
- Touch-Interaktionen auf mobilen Geräten
- Swipe-Gesten und Patterns
- Pinch-to-Zoom-Bereiche
- Touch-Heatmaps für Formulare

### 📜 Scroll Heatmaps (Scroll-Wärmekarten)

**Scroll-Tiefe-Analyse**
```javascript
// Scroll Heatmap Metriken
const scrollMetrics = {
    average_scroll_depth: 0.65, // 65% der Seite
    bounce_at_fold: 0.25, // 25% verlassen ohne Scrollen
    scroll_to_bottom: 0.15, // 15% scrollen bis zum Ende
    engagement_zones: [
        { depth: '0-25%', engagement: 'high' },
        { depth: '25-50%', engagement: 'medium' },
        { depth: '50-75%', engagement: 'low' },
        { depth: '75-100%', engagement: 'very_low' }
    ]
};
```

**Scroll-Erkenntnisse**
- Content-Engagement nach Position
- Optimal Fold-Platzierung
- Content-Länge-Optimierung
- Call-to-Action-Platzierung

### 👁️ Attention Heatmaps (Aufmerksamkeits-Wärmekarten)

**Eye-Tracking-Simulation**
- Vorhergesagte Blickpfade
- Aufmerksamkeits-Hotspots
- Visual Hierarchy Analyse
- Content-Prioritäts-Mapping

**AI-basierte Aufmerksamkeits-Vorhersage**
```python
# AI-Modell für Aufmerksamkeits-Vorhersage
def predict_attention_heatmap(page_elements, user_behavior_data):
    attention_map = {}
    
    for element in page_elements:
        attention_score = calculate_attention_score(
            element.position,
            element.size,
            element.color_contrast,
            element.content_type,
            user_behavior_data
        )
        
        attention_map[element.id] = {
            'score': attention_score,
            'predicted_views': attention_score * total_visitors,
            'confidence': calculate_confidence(attention_score)
        }
    
    return attention_map
```

## Heatmap-Erstellung und -Konfiguration

### 🛠️ Heatmap-Setup

**Automatische Heatmap-Generierung**
```php
// Automatische Heatmap-Konfiguration
$heatmap_auto_config = array(
    'enable_auto_generation' => true,
    'min_visitors_threshold' => 100,
    'update_frequency' => 'daily',
    'auto_archive_after' => 90, // Tage
    'quality_threshold' => 0.8
);
```

**Manuelle Heatmap-Erstellung**
1. Seite für Heatmap auswählen
2. Zeitraum definieren
3. Filter und Segmente einstellen
4. Heatmap-Typ wählen
5. Generierung starten

**Heatmap-Filter**
- Geräte-Typ (Desktop, Mobile, Tablet)
- Browser-Typ
- Geografische Herkunft
- Traffic-Quelle
- Nutzer-Segment
- Zeitraum

### 📊 Heatmap-Qualität und -Genauigkeit

**Datenqualitäts-Indikatoren**
```javascript
// Heatmap-Qualitäts-Metriken
const heatmapQuality = {
    data_points: 2500,
    confidence_level: 0.95,
    statistical_significance: true,
    sample_size_adequacy: 'excellent',
    data_freshness: '2 hours ago',
    quality_score: 9.2 // von 10
};
```

**Mindest-Datenmengen**
- Click Heatmaps: 50+ Klicks
- Scroll Heatmaps: 100+ Sessions
- Move Heatmaps: 200+ Bewegungen
- Attention Heatmaps: 500+ Seitenaufrufe

## Erweiterte Heatmap-Funktionen

### 🎯 Segmentierte Heatmaps

**Nutzergruppen-spezifische Heatmaps**
```php
// Segmentierte Heatmap-Analyse
function create_segmented_heatmap($page_url, $segments) {
    $heatmaps = array();
    
    foreach ($segments as $segment_name => $segment_criteria) {
        $heatmap_data = generate_heatmap_for_segment(
            $page_url,
            $segment_criteria
        );
        
        $heatmaps[$segment_name] = array(
            'data' => $heatmap_data,
            'insights' => analyze_segment_behavior($heatmap_data),
            'comparison' => compare_to_baseline($heatmap_data)
        );
    }
    
    return $heatmaps;
}
```

**Vergleichs-Heatmaps**
- Neue vs. wiederkehrende Besucher
- Mobile vs. Desktop Nutzer
- Verschiedene Traffic-Quellen
- A/B-Test-Varianten
- Zeitraum-Vergleiche

### 🔥 Dynamic Heatmaps

**Real-time Heatmap Updates**
```javascript
// Live Heatmap Updates
const liveHeatmap = {
    updateInterval: 30000, // 30 Sekunden
    
    startLiveUpdates() {
        setInterval(() => {
            this.fetchLatestData()
                .then(data => this.updateHeatmapDisplay(data));
        }, this.updateInterval);
    },
    
    fetchLatestData() {
        return fetch('/wp-json/qa-advisor/v1/heatmaps/live-data')
            .then(response => response.json());
    }
};
```

**Adaptive Heatmaps**
- Automatische Anpassung an Content-Änderungen
- Responsive Design Berücksichtigung
- Dynamic Content Integration
- Personalisierte Heatmap-Ansichten

## Heatmap-Analyse und Erkenntnisse

### 📈 Performance-Metriken

**Heatmap-KPIs**
```javascript
// Heatmap Performance Indicators
const heatmapKPIs = {
    click_through_rate: 0.12, // 12% der Besucher klicken
    attention_distribution: {
        above_fold: 0.70, // 70% Aufmerksamkeit above fold
        below_fold: 0.30
    },
    interaction_rate: 0.85, // 85% interagieren mit der Seite
    scroll_completion_rate: 0.45, // 45% scrollen bis zum Ende
    rage_click_rate: 0.03 // 3% Rage Clicks
};
```

**Automatische Erkenntnisse**
- Hotspot-Identifikation
- Cold Spot-Analyse
- Interaction Pattern Recognition
- Optimization Opportunities

### 🎨 Heatmap-Visualisierung

**Anpassbare Darstellung**
```css
/* Heatmap-Styling-Optionen */
.qa-advisor-heatmap {
    --heatmap-opacity: 0.7;
    --heatmap-blur-radius: 20px;
    --color-scheme: 'fire'; /* 'fire', 'rainbow', 'blue', 'green' */
    --intensity-scale: 'logarithmic'; /* 'linear', 'logarithmic' */
}

.heatmap-cold { color: rgba(0, 0, 255, 0.3); }
.heatmap-warm { color: rgba(255, 255, 0, 0.6); }
.heatmap-hot { color: rgba(255, 0, 0, 0.9); }
```

**Interaktive Features**
- Zoom und Pan
- Layer-Kontrollen
- Tooltip-Informationen
- Click-to-Drill-Down

## Heatmap-basierte Optimierung

### 🎯 CRO (Conversion Rate Optimization)

**Heatmap-gesteuerte A/B-Tests**
```php
// Heatmap-basierte Test-Hypothesen
function generate_ab_test_hypotheses($heatmap_data) {
    $hypotheses = array();
    
    // CTA-Button-Optimierung
    if ($heatmap_data['cta_click_rate'] < 0.05) {
        $hypotheses[] = array(
            'element' => 'cta_button',
            'hypothesis' => 'Größerer, kontrastreicherer CTA-Button erhöht Klickrate',
            'test_variations' => ['size_increase', 'color_change', 'position_change']
        );
    }
    
    // Content-Reorganisation
    if ($heatmap_data['scroll_depth'] < 0.5) {
        $hypotheses[] = array(
            'element' => 'content_layout',
            'hypothesis' => 'Wichtiger Content weiter oben platzieren',
            'test_variations' => ['content_reorder', 'summary_addition']
        );
    }
    
    return $hypotheses;
}
```

**Optimierungs-Workflows**
1. Heatmap-Analyse durchführen
2. Problembereiche identifizieren
3. Hypothesen entwickeln
4. A/B-Tests einrichten
5. Ergebnisse mit neuen Heatmaps validieren

### 📱 Mobile-Optimierung

**Mobile Heatmap Insights**
```javascript
// Mobile-spezifische Heatmap-Analyse
const mobileHeatmapAnalysis = {
    thumb_zone_usage: 0.75, // 75% Interaktionen in Daumen-Zone
    scroll_velocity: 'fast', // Schnelles Scrollen
    tap_accuracy: 0.92, // 92% präzise Taps
    pinch_zoom_areas: ['product_images', 'small_text'],
    swipe_patterns: ['horizontal_gallery', 'vertical_scroll']
};
```

**Mobile UX Optimierungen**
- Touch-Target-Größen optimieren
- Thumb-Zone-Navigation
- Swipe-Gesten implementieren
- Mobile-First-Content-Hierarchie

## Heatmap-Integration

### 🔗 Tool-Integration

**Google Analytics Integration**
```javascript
// GA4 Event-Tracking basierend auf Heatmap-Daten
function trackHeatmapEvents(heatmapData) {
    // Hotspot-Klicks als Events senden
    heatmapData.hotspots.forEach(hotspot => {
        if (hotspot.click_count > 100) {
            gtag('event', 'hotspot_interaction', {
                'hotspot_id': hotspot.id,
                'click_count': hotspot.click_count,
                'page_url': window.location.pathname
            });
        }
    });
}
```

**CRM-Integration**
- Lead-Scoring basierend auf Heatmap-Engagement
- Customer Journey Mapping
- Behavioral Segmentation
- Personalization Triggers

### 📊 Reporting und Export

**Heatmap-Berichte**
```php
// Automatisierte Heatmap-Berichte
function generate_heatmap_report($period = 'weekly') {
    $report = array(
        'summary' => get_heatmap_summary($period),
        'top_performing_pages' => get_top_heatmap_pages(5),
        'optimization_opportunities' => identify_optimization_opportunities(),
        'trend_analysis' => analyze_heatmap_trends($period),
        'recommendations' => generate_heatmap_recommendations()
    );
    
    return $report;
}
```

**Export-Optionen**
- PNG/JPG Heatmap-Bilder
- PDF-Berichte
- CSV-Daten-Export
- API-Daten-Zugriff

## Erweiterte Heatmap-Technologien

### 🤖 AI-Enhanced Heatmaps

**Machine Learning Integration**
```python
# AI-basierte Heatmap-Vorhersagen
class HeatmapPredictor:
    def __init__(self):
        self.model = load_pretrained_model('heatmap_prediction_v2')
    
    def predict_user_behavior(self, page_elements, user_context):
        features = extract_features(page_elements, user_context)
        predictions = self.model.predict(features)
        
        return {
            'predicted_clicks': predictions['clicks'],
            'attention_areas': predictions['attention'],
            'scroll_behavior': predictions['scroll'],
            'confidence_scores': predictions['confidence']
        }
```

**Predictive Heatmaps**
- Vorhersage von Nutzerverhalten für neue Seiten
- A/B-Test-Outcome-Vorhersagen
- Seasonal Behavior Predictions
- Personalized Heatmap Forecasts

### 🔬 Advanced Analytics

**Statistical Analysis**
```r
# R-basierte Heatmap-Statistiken
analyze_heatmap_significance <- function(heatmap_data) {
    # Chi-Square-Test für Klick-Verteilung
    click_distribution <- table(heatmap_data$click_zones)
    chi_square_result <- chisq.test(click_distribution)
    
    # Korrelationsanalyse
    correlation_matrix <- cor(heatmap_data[c('clicks', 'time_spent', 'scroll_depth')])
    
    return(list(
        significance = chi_square_result$p.value < 0.05,
        correlations = correlation_matrix,
        recommendations = generate_statistical_recommendations(heatmap_data)
    ))
}
```

## Datenschutz und Compliance

### 🔒 Privacy-First Heatmaps

**Anonymisierung**
```php
// Datenschutz-konforme Heatmap-Datensammlung
function collect_heatmap_data_privacy_compliant($interaction_data) {
    // IP-Anonymisierung
    $anonymized_ip = anonymize_ip($interaction_data['ip']);
    
    // Session-ID-Hashing
    $hashed_session = hash('sha256', $interaction_data['session_id']);
    
    // Koordinaten-Clustering (keine exakten Positionen)
    $clustered_coordinates = cluster_coordinates(
        $interaction_data['x'], 
        $interaction_data['y'], 
        $cluster_size = 20
    );
    
    return array(
        'anonymized_ip' => $anonymized_ip,
        'session_hash' => $hashed_session,
        'interaction_zone' => $clustered_coordinates,
        'timestamp' => $interaction_data['timestamp']
    );
}
```

**DSGVO-Compliance**
- Opt-in/Opt-out-Mechanismen
- Daten-Minimierung
- Zweckbindung
- Löschungsansprüche

## Nächste Schritte

Nach der Heatmap-Analyse:

1. [Implementieren Sie Optimierungen basierend auf Erkenntnissen](/docs/user-manual/screens-and-operations/settings)
2. [Richten Sie A/B-Tests ein](/docs/user-manual/screens-and-operations/goals)
3. [Überwachen Sie Performance-Verbesserungen](/docs/user-manual/screens-and-operations/dashboard)
4. [Nutzen Sie erweiterte Analytics](/docs/user-manual/screens-and-operations/brains)

## Support

Für erweiterte Heatmap-Funktionen:
- Konsultieren Sie unsere [FAQ](/docs/faq)
- Kontaktieren Sie unser UX-Analytics-Team
- Besuchen Sie unsere [Community-Foren](https://github.com/quarka-org)
- Schauen Sie sich unsere [Video-Tutorials](/docs/user-manual/screens-and-operations/help) an
