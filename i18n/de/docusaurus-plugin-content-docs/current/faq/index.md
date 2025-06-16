---
sidebar_position: 4
---

# FAQ (Häufig gestellte Fragen)

Hier finden Sie Antworten auf die häufigsten Fragen zu QA Advisor. Diese FAQ wird regelmäßig aktualisiert basierend auf Community-Feedback und Support-Anfragen.

## Installation und Setup

### Wie installiere ich QA Advisor?

QA Advisor kann auf drei Arten installiert werden:

1. **WordPress Admin (Empfohlen)**:
   - Gehen Sie zu Plugins → Neues Plugin hinzufügen
   - Suchen Sie nach "QA Advisor"
   - Klicken Sie auf "Jetzt installieren" und dann "Aktivieren"

2. **Manuelle Installation**:
   - Laden Sie die ZIP-Datei von der offiziellen Website herunter
   - Gehen Sie zu Plugins → Neues Plugin hinzufügen → Plugin hochladen
   - Wählen Sie die ZIP-Datei aus und installieren Sie sie

3. **FTP-Upload**:
   - Entpacken Sie die ZIP-Datei
   - Laden Sie den Ordner nach `/wp-content/plugins/` hoch
   - Aktivieren Sie das Plugin im WordPress Admin

### Welche Systemanforderungen hat QA Advisor?

**Mindestanforderungen:**
- WordPress 5.9 oder höher
- PHP 7.4 oder höher
- MySQL 5.7 oder höher
- 128MB PHP-Speicherlimit
- 50MB verfügbarer Festplattenspeicher

**Empfohlene Spezifikationen:**
- WordPress neueste Version
- PHP 8.0 oder höher
- MySQL 8.0 oder höher
- 256MB PHP-Speicherlimit
- 200MB verfügbarer Festplattenspeicher

### Warum sehe ich keine Daten nach der Installation?

Es kann mehrere Gründe geben:

1. **Warten Sie 24-48 Stunden**: Neue Installationen benötigen Zeit zum Sammeln von Daten
2. **Überprüfen Sie den Tracking-Code**: Stellen Sie sicher, dass JavaScript aktiviert ist
3. **Cache-Probleme**: Leeren Sie Browser- und Plugin-Cache
4. **Firewall-Einstellungen**: Überprüfen Sie, ob ausgehende Verbindungen blockiert werden
5. **Bot-Filtering**: Stellen Sie sicher, dass Sie nicht als Bot erkannt werden

## Funktionen und Verwendung

### Was ist der Unterschied zwischen QA Advisor und Google Analytics?

QA Advisor ergänzt Google Analytics durch:

- **Heatmaps (Wärmekarten)**: Visuelle Darstellung von Klicks, Scrolling und Mausbewegungen
- **Session Replays**: Aufzeichnung echter Nutzersitzungen
- **AI-Brains**: Intelligente Analyse und automatische Erkenntnisse
- **WordPress-Integration**: Nahtlose Integration in WordPress-Umgebung
- **Datenschutz-Fokus**: DSGVO-konforme, cookiefreie Analytics-Optionen
- **Real-time Monitoring**: Live-Überwachung der Website-Aktivität

### Wie erstelle ich eine Heatmap?

1. **Automatische Generierung** (Standard):
   - Heatmaps werden automatisch für Seiten mit ausreichend Traffic erstellt
   - Mindestens 100 Besucher erforderlich

2. **Manuelle Erstellung**:
   - Gehen Sie zu QA Advisor → Heatmaps
   - Klicken Sie auf "Neue Heatmap erstellen"
   - Wählen Sie die Seite und den Zeitraum
   - Konfigurieren Sie Filter (Gerät, Traffic-Quelle, etc.)
   - Klicken Sie auf "Heatmap generieren"

### Was sind Brains und wie funktionieren sie?

Brains sind AI-Module, die automatisch Ihre Website-Daten analysieren:

- **Behavior Analysis Brain**: Analysiert Nutzerverhaltensmuster
- **Performance Brain**: Überwacht Website-Leistung
- **Conversion Brain**: Optimiert Conversion-Pfade
- **Mobile Experience Brain**: Spezialisiert auf mobile UX

Sie arbeiten kontinuierlich im Hintergrund und generieren automatische Erkenntnisse und Empfehlungen.

### Wie richte ich Ziele (Goals) ein?

1. Gehen Sie zu QA Advisor → Ziele
2. Klicken Sie auf "Neues Ziel erstellen"
3. Wählen Sie den Ziel-Typ:
   - **Destination**: URL-basierte Ziele
   - **Event**: Aktions-basierte Ziele
   - **Duration**: Zeit-basierte Ziele
4. Konfigurieren Sie die Ziel-Details
5. Testen Sie das Ziel
6. Aktivieren Sie das Tracking

## Lizenzierung und Preise

### Welche Lizenz-Optionen gibt es?

**Kostenlose Version:**
- Bis zu 10.000 Seitenaufrufe/Monat
- 3 gleichzeitige Heatmaps
- Grundlegende Analytics
- Community-Support
- 30 Tage Datenaufbewahrung

**Professional:**
- Unbegrenzte Seitenaufrufe
- Unbegrenzte Heatmaps
- AI-Brains
- Session Replays
- Priority-Support
- 12 Monate Datenaufbewahrung

**Enterprise:**
- Alle Professional-Features
- White-Label-Optionen
- Custom Branding
- Dedicated Account Manager
- SLA-Garantien
- Custom Integrations

### Wie aktiviere ich meine Lizenz?

1. Gehen Sie zu QA Advisor → Lizenzaktivierung
2. Geben Sie Ihren Lizenzschlüssel ein
3. Geben Sie die E-Mail-Adresse des Kaufs ein
4. Klicken Sie auf "Lizenz aktivieren"
5. Warten Sie auf die Bestätigung

Bei Problemen kontaktieren Sie unser Support-Team.

### Kann ich meine Lizenz auf mehreren Websites verwenden?

Das hängt von Ihrer Lizenz ab:

- **Professional**: 1 Website pro Lizenz
- **Enterprise**: Mehrere Websites möglich
- **Multisite-Lizenzen**: Verfügbar für WordPress-Netzwerke

Kontaktieren Sie uns für Custom-Lizenzierungsoptionen.

## Technische Fragen

### Ist QA Advisor DSGVO-konform?

Ja, QA Advisor ist vollständig DSGVO-konform:

- **IP-Anonymisierung**: Automatische IP-Anonymisierung
- **Cookie-Consent**: Integration mit Cookie-Consent-Plugins
- **Datenminimierung**: Sammlung nur notwendiger Daten
- **Löschungsansprüche**: Automatische Datenbereinigung
- **Transparenz**: Klare Datenschutzerklärung
- **Opt-out**: Nutzer können Tracking ablehnen

### Beeinflusst QA Advisor die Website-Performance?

QA Advisor ist für minimale Performance-Auswirkungen optimiert:

- **Asynchrones Laden**: JavaScript lädt nicht-blockierend
- **Optimierte Datensammlung**: Effiziente Batch-Verarbeitung
- **CDN-Integration**: Schnelle Asset-Auslieferung
- **Caching**: Intelligente Cache-Strategien
- **Ressourcen-Management**: Konfigurierbare Limits

Typische Performance-Auswirkung: < 50ms zusätzliche Ladezeit.

### Welche Browser werden unterstützt?

QA Advisor unterstützt alle modernen Browser:

**Desktop:**
- Chrome 70+
- Firefox 65+
- Safari 12+
- Edge 79+

**Mobile:**
- Chrome Mobile 70+
- Safari Mobile 12+
- Samsung Internet 10+
- Firefox Mobile 65+

**Legacy-Support:**
- Internet Explorer 11 (eingeschränkt)
- Ältere Browser (Graceful Degradation)

### Wie kann ich QA Advisor mit anderen Tools integrieren?

QA Advisor bietet verschiedene Integrationsmöglichkeiten:

**Analytics-Tools:**
- Google Analytics 4
- Adobe Analytics
- Matomo

**CRM-Systeme:**
- HubSpot
- Salesforce
- Custom CRM via API

**E-Mail-Marketing:**
- Mailchimp
- Constant Contact
- Custom ESP via Webhooks

**E-Commerce:**
- WooCommerce (nativ)
- Easy Digital Downloads
- Custom E-Commerce via API

## Fehlerbehebung

### Das Plugin aktiviert sich nicht

**Mögliche Ursachen und Lösungen:**

1. **PHP-Version zu alt**:
   - Überprüfen Sie Ihre PHP-Version
   - Aktualisieren Sie auf PHP 7.4 oder höher

2. **WordPress-Version zu alt**:
   - Aktualisieren Sie WordPress auf 5.9 oder höher

3. **Speicherlimit zu niedrig**:
   - Erhöhen Sie das PHP-Speicherlimit auf mindestens 128MB

4. **Plugin-Konflikte**:
   - Deaktivieren Sie andere Plugins temporär
   - Aktivieren Sie sie einzeln, um Konflikte zu identifizieren

### Heatmaps werden nicht generiert

**Troubleshooting-Schritte:**

1. **Ausreichend Daten vorhanden?**
   - Mindestens 100 Besucher erforderlich
   - Warten Sie 24-48 Stunden nach Installation

2. **JavaScript-Probleme**:
   - Überprüfen Sie Browser-Konsole auf Fehler
   - Stellen Sie sicher, dass JavaScript aktiviert ist

3. **Cache-Konflikte**:
   - Leeren Sie alle Caches
   - Deaktivieren Sie Caching-Plugins temporär

4. **Server-Ressourcen**:
   - Überprüfen Sie PHP-Speicherlimit
   - Stellen Sie sicher, dass Background-Tasks funktionieren

### Dashboard lädt langsam

**Optimierungsschritte:**

1. **Datenbank-Optimierung**:
   - Führen Sie Datenbank-Wartung durch
   - Bereinigen Sie alte Daten

2. **Server-Performance**:
   - Überprüfen Sie Server-Ressourcen
   - Optimieren Sie PHP-Konfiguration

3. **Plugin-Einstellungen**:
   - Reduzieren Sie Datenaufbewahrungszeit
   - Aktivieren Sie Caching
   - Optimieren Sie Batch-Größen

## Datenschutz und Sicherheit

### Welche Daten sammelt QA Advisor?

QA Advisor sammelt anonymisierte Daten:

**Automatisch gesammelt:**
- Seitenaufrufe und Sessions
- Klick-Koordinaten (anonymisiert)
- Scroll-Verhalten
- Geräteinformationen
- Browser-Informationen
- Anonymisierte IP-Adressen

**Nicht gesammelt:**
- Persönliche Informationen
- Exakte IP-Adressen
- Passwörter oder sensible Daten
- Formular-Inhalte (außer wenn explizit aktiviert)

### Wo werden die Daten gespeichert?

- **Lokal**: Alle Daten werden in Ihrer WordPress-Datenbank gespeichert
- **Keine Cloud**: Keine Daten werden an externe Server gesendet
- **Vollständige Kontrolle**: Sie behalten die vollständige Kontrolle über Ihre Daten
- **Backup**: Daten sind in Ihren regulären WordPress-Backups enthalten

### Wie kann ich Daten löschen?

**Automatische Bereinigung:**
- Konfigurierbare Aufbewahrungszeiten
- Automatische Löschung alter Daten

**Manuelle Löschung:**
- Einzelne Sessions löschen
- Komplette Datenbereinigung
- Nutzer-spezifische Löschung

**DSGVO-Löschungsanfragen:**
- Automatische Verarbeitung von Löschungsanfragen
- Vollständige Datenentfernung
- Bestätigung der Löschung

## Support und Community

### Wie erhalte ich Support?

**Community-Support (Kostenlos):**
- GitHub Issues
- Community-Forum
- Discord-Server

**Priority-Support (Professional/Enterprise):**
- E-Mail-Support
- Ticket-System
- Telefon-Support (Enterprise)

**Self-Service-Ressourcen:**
- Umfassende Dokumentation
- Video-Tutorials
- Wissensdatenbank

### Wie kann ich zur Community beitragen?

**Code-Beiträge:**
- GitHub Pull Requests
- Bug-Fixes
- Feature-Entwicklung

**Dokumentation:**
- Verbesserungsvorschläge
- Übersetzungen
- Tutorial-Erstellung

**Community-Hilfe:**
- Fragen in Foren beantworten
- Best Practices teilen
- Neue Nutzer unterstützen

### Wo finde ich Updates und News?

**Offizielle Kanäle:**
- Blog: blog.qa-advisor.com
- Twitter: @QAAdvisor
- LinkedIn: QA Advisor
- GitHub: github.com/quarka-org

**In-App-Benachrichtigungen:**
- Update-Benachrichtigungen
- Feature-Ankündigungen
- Wartungshinweise

## Erweiterte Funktionen

### Wie verwende ich die API?

QA Advisor bietet eine umfassende REST API:

**Authentifizierung:**
```javascript
const apiKey = 'your-api-key';
const headers = {
    'X-QA-Advisor-API-Key': apiKey,
    'Content-Type': 'application/json'
};
```

**Beispiel-Anfrage:**
```javascript
fetch('/wp-json/qa-advisor/v1/analytics/overview', {
    headers: headers
})
.then(response => response.json())
.then(data => console.log(data));
```

**Verfügbare Endpunkte:**
- `/analytics/*` - Analytics-Daten
- `/heatmaps/*` - Heatmap-Funktionen
- `/goals/*` - Ziel-Management
- `/brains/*` - AI-Erkenntnisse

### Kann ich Custom Tracking implementieren?

Ja, QA Advisor unterstützt Custom Tracking:

**JavaScript API:**
```javascript
// Custom Event tracken
qa_advisor.track('custom_event', {
    category: 'engagement',
    action: 'video_play',
    label: 'intro_video',
    value: 120
});

// Custom Goal
qa_advisor.trackGoal('newsletter_signup', {
    value: 5.00,
    currency: 'EUR'
});
```

**PHP Hooks:**
```php
// Custom Datenverarbeitung
add_action('qa_advisor_data_collected', function($data) {
    // Ihre Custom-Logik hier
});

// Custom Dashboard-Widget
add_filter('qa_advisor_dashboard_widgets', function($widgets) {
    $widgets['my_custom_widget'] = array(
        'title' => 'Mein Custom Widget',
        'callback' => 'my_widget_callback'
    );
    return $widgets;
});
```

### Wie erstelle ich Custom Reports?

**Über die API:**
```php
// Custom Report-Klasse
class My_Custom_Report {
    public function generate_report($start_date, $end_date) {
        $data = qa_advisor_get_analytics_data($start_date, $end_date);
        
        // Custom Datenverarbeitung
        $processed_data = $this->process_data($data);
        
        // Report generieren
        return $this->format_report($processed_data);
    }
}
```

**Dashboard-Integration:**
```php
// Custom Report im Dashboard anzeigen
add_action('qa_advisor_dashboard_content', function() {
    $report = new My_Custom_Report();
    $data = $report->generate_report('2025-01-01', '2025-01-31');
    
    echo '<div class="custom-report">';
    echo $this->render_report($data);
    echo '</div>';
});
```

---

**Haben Sie weitere Fragen?**

Wenn Sie Ihre Frage hier nicht finden, kontaktieren Sie uns:
- E-Mail: support@qa-advisor.com
- Community-Forum: forum.qa-advisor.com
- GitHub Issues: github.com/quarka-org/qa-advisor/issues

Wir aktualisieren diese FAQ regelmäßig basierend auf Ihrem Feedback!
