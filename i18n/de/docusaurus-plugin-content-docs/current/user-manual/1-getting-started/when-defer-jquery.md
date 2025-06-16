---
sidebar_position: 4
---

# Wann jQuery verzögern

Dieser Leitfaden erklärt, wann und wie Sie jQuery-Verzögerung für bessere Kompatibilität mit QA Advisor verwenden.

## Überblick

jQuery-Verzögerung ist eine Optimierungstechnik, die das Laden von jQuery bis nach dem ersten Seiteninhalt verzögert. Während dies die Seitenladegeschwindigkeit verbessern kann, kann es auch die Funktionalität von QA Advisor beeinträchtigen, wenn es nicht richtig konfiguriert ist.

## Wann jQuery-Verzögerung verwenden

### Empfohlene Szenarien

**✅ Verwenden Sie jQuery-Verzögerung wenn:**
- Ihre Website hat langsame Ladezeiten
- Sie verwenden ein Leistungsoptimierungs-Plugin
- Ihre Website hat minimale jQuery-Abhängigkeiten
- Sie haben die Kompatibilität mit QA Advisor getestet

**❌ Vermeiden Sie jQuery-Verzögerung wenn:**
- Ihr Theme stark von jQuery abhängt
- Sie viele jQuery-basierte Plugins verwenden
- Sie Probleme mit QA Advisor Tracking feststellen
- Ihre Website bereits schnell lädt

## Kompatibilitätsprüfung

### Vor der Aktivierung der jQuery-Verzögerung

1. **Testen Sie QA Advisor Funktionalität**:
   - Überprüfen Sie, ob Heatmaps (Wärmekarten) korrekt laden
   - Stellen Sie sicher, dass Klick-Tracking funktioniert
   - Verifizieren Sie, dass Session-Aufzeichnungen starten

2. **Überprüfen Sie Theme-Kompatibilität**:
   - Testen Sie alle interaktiven Elemente
   - Überprüfen Sie Dropdown-Menüs und Formulare
   - Stellen Sie sicher, dass Slider und Karussells funktionieren

### Nach der Aktivierung der jQuery-Verzögerung

1. **QA Advisor Dashboard überprüfen**:
   - Bestätigen Sie, dass neue Daten ankommen
   - Überprüfen Sie Heatmap-Generierung
   - Testen Sie Echtzeit-Tracking

2. **Frontend-Funktionalität testen**:
   - Navigieren Sie durch Ihre Website
   - Testen Sie alle interaktiven Funktionen
   - Überprüfen Sie die Browser-Konsole auf Fehler

## Konfiguration mit beliebten Plugins

### WP Rocket

```php
// QA Advisor von jQuery-Verzögerung ausschließen
add_filter('rocket_delay_js_exclusions', function($exclusions) {
    $exclusions[] = 'qa-advisor';
    $exclusions[] = 'qa_advisor';
    return $exclusions;
});
```

### Autoptimize

```php
// QA Advisor JavaScript von Optimierung ausschließen
add_filter('autoptimize_filter_js_exclude', function($exclude) {
    return $exclude . ', qa-advisor, qa_advisor';
});
```

### W3 Total Cache

```php
// QA Advisor von Minifizierung ausschließen
add_filter('w3tc_minify_js_do_tag_minification', function($do_tag_minification, $script_tag) {
    if (strpos($script_tag, 'qa-advisor') !== false) {
        return false;
    }
    return $do_tag_minification;
}, 10, 2);
```

## Manuelle Konfiguration

### wp-config.php Einstellungen

```php
// QA Advisor jQuery-Kompatibilität erzwingen
define('QA_ADVISOR_FORCE_JQUERY', true);

// QA Advisor Skripte früh laden
define('QA_ADVISOR_EARLY_LOAD', true);
```

### Theme functions.php

```php
// QA Advisor Skripte mit hoher Priorität laden
add_action('wp_enqueue_scripts', function() {
    if (function_exists('qa_advisor_enqueue_scripts')) {
        qa_advisor_enqueue_scripts();
    }
}, 5); // Frühe Priorität
```

## Fehlerbehebung

### Häufige Probleme

**Problem**: Heatmaps laden nicht
**Lösung**: 
```php
// QA Advisor von jQuery-Verzögerung ausschließen
add_filter('your_plugin_delay_js_exclusions', function($exclusions) {
    $exclusions[] = 'qa-advisor-heatmap';
    return $exclusions;
});
```

**Problem**: Klick-Tracking funktioniert nicht
**Lösung**:
```php
// Event-Listener früher initialisieren
add_action('wp_footer', function() {
    if (function_exists('qa_advisor_init_tracking')) {
        echo '<script>
            document.addEventListener("DOMContentLoaded", function() {
                qa_advisor_init_tracking();
            });
        </script>';
    }
}, 5);
```

**Problem**: Session-Aufzeichnungen starten nicht
**Lösung**:
```php
// Session-Tracking erzwingen
define('QA_ADVISOR_FORCE_SESSION_TRACKING', true);
```

## Leistungsoptimierung

### Beste Praktiken

1. **Selektive Verzögerung**:
   - Verzögern Sie nur nicht-kritische jQuery-Skripte
   - Behalten Sie QA Advisor Skripte unverzögert

2. **Kritische Pfad-Optimierung**:
   - Laden Sie QA Advisor CSS inline für kritische Stile
   - Verzögern Sie nicht-kritische QA Advisor Funktionen

3. **Bedingte Ladung**:
   ```php
   // QA Advisor nur auf bestimmten Seiten laden
   add_action('wp_enqueue_scripts', function() {
       if (is_front_page() || is_single()) {
           qa_advisor_enqueue_scripts();
       }
   });
   ```

## Testen und Validierung

### Automatisierte Tests

```javascript
// QA Advisor Funktionalität testen
function testQAAdvisorCompatibility() {
    // Überprüfen, ob QA Advisor geladen ist
    if (typeof qa_advisor !== 'undefined') {
        console.log('QA Advisor erfolgreich geladen');
        
        // Tracking-Funktionalität testen
        if (qa_advisor.tracking && qa_advisor.tracking.isActive()) {
            console.log('Tracking ist aktiv');
        }
        
        // Heatmap-Funktionalität testen
        if (qa_advisor.heatmap && qa_advisor.heatmap.isReady()) {
            console.log('Heatmap ist bereit');
        }
    } else {
        console.error('QA Advisor nicht geladen - jQuery-Verzögerung könnte ein Problem sein');
    }
}

// Test nach DOM-Ladung ausführen
document.addEventListener('DOMContentLoaded', testQAAdvisorCompatibility);
```

### Manuelle Überprüfung

1. **Browser-Entwicklertools verwenden**:
   - Überprüfen Sie die Netzwerk-Registerkarte auf QA Advisor Anfragen
   - Schauen Sie in die Konsole nach JavaScript-Fehlern
   - Überprüfen Sie die Elemente-Registerkarte auf QA Advisor HTML

2. **QA Advisor Dashboard überprüfen**:
   - Bestätigen Sie Datensammlung in Echtzeit
   - Überprüfen Sie Heatmap-Generierung
   - Testen Sie alle Dashboard-Funktionen

## Nächste Schritte

Nach der Konfiguration der jQuery-Verzögerung:

1. [Konfigurieren Sie Datenlimits](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Erkunden Sie das Dashboard](/docs/user-manual/screens-and-operations/dashboard)
3. [Richten Sie Heatmaps ein](/docs/user-manual/screens-and-operations/heatmaps)

## Support

Wenn Sie Probleme mit jQuery-Verzögerung und QA Advisor haben:
- Konsultieren Sie unsere [FAQ](/docs/faq)
- Kontaktieren Sie unser technisches Support-Team
- Teilen Sie Ihre Konfiguration in unseren [Community-Foren](https://github.com/quarka-org)
