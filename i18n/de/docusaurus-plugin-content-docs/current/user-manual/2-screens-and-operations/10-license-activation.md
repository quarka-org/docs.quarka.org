---
sidebar_position: 10
---

# Lizenzaktivierung

Die Lizenzaktivierung in QA Advisor ermöglicht es Ihnen, Ihre Premium-Funktionen freizuschalten und Ihre Lizenz zu verwalten. Dieser Leitfaden führt Sie durch den Aktivierungsprozess und die Lizenzverwaltung.

## Überblick

QA Advisor bietet verschiedene Lizenzmodelle, von der kostenlosen Version bis hin zu Enterprise-Lösungen. Die Lizenzaktivierung schaltet erweiterte Funktionen frei und ermöglicht professionelle Analytics-Capabilities.

## Lizenz-Typen

### 🆓 Kostenlose Version

**Enthaltene Funktionen**
- Grundlegende Analytics (bis zu 10.000 Seitenaufrufe/Monat)
- Einfache Heatmaps (3 Heatmaps gleichzeitig)
- Standard-Dashboard
- Community-Support

**Einschränkungen**
- Begrenzte Datenaufbewahrung (30 Tage)
- Keine erweiterten Segmentierungen
- Keine API-Zugriffe
- Kein Priority-Support

### 💼 Professional

**Erweiterte Funktionen**
- Unbegrenzte Seitenaufrufe
- Erweiterte Heatmaps und Session Replays
- Brains (KI-Module)
- Custom Goals und Funnels
- 12 Monate Datenaufbewahrung

**Professional-Features**
```javascript
// Professional-Lizenz-Features
const professionalFeatures = {
    pageviews: 'unlimited',
    heatmaps: 'unlimited',
    session_replays: true,
    ai_brains: true,
    custom_goals: true,
    data_retention: '12_months',
    api_access: 'standard',
    support: 'priority'
};
```

### 🏢 Enterprise

**Enterprise-Funktionen**
- White-Label-Lösungen
- Custom Branding
- Erweiterte API-Zugriffe
- Dedicated Account Manager
- Custom Integrations
- SLA-Garantien

## Lizenz aktivieren

### 🔑 Aktivierungsprozess

**Schritt 1: Lizenzschlüssel erhalten**
1. Kaufen Sie eine Lizenz über die offizielle Website
2. Erhalten Sie Ihren Lizenzschlüssel per E-Mail
3. Notieren Sie sich Ihre Lizenzdetails

**Schritt 2: Aktivierung im Dashboard**
```php
// Lizenzaktivierung über WordPress Admin
function activate_qa_advisor_license($license_key, $email) {
    $activation_data = array(
        'license_key' => sanitize_text_field($license_key),
        'email' => sanitize_email($email),
        'domain' => get_site_url(),
        'version' => QA_ADVISOR_VERSION
    );
    
    $response = wp_remote_post('https://api.qa-advisor.com/v1/license/activate', array(
        'body' => $activation_data,
        'timeout' => 30
    ));
    
    return process_activation_response($response);
}
```

**Schritt 3: Aktivierung bestätigen**
1. Navigieren Sie zu QA Advisor → Lizenzaktivierung
2. Geben Sie Ihren Lizenzschlüssel ein
3. Geben Sie die E-Mail-Adresse des Kaufs ein
4. Klicken Sie auf "Lizenz aktivieren"
5. Warten Sie auf die Bestätigung

### ✅ Aktivierungsbestätigung

**Erfolgreiche Aktivierung**
- Grüner Status-Indikator
- Lizenz-Details werden angezeigt
- Premium-Funktionen werden freigeschaltet
- Bestätigungs-E-Mail wird gesendet

**Aktivierungsstatus überprüfen**
```javascript
// Lizenzstatus-Überprüfung
const checkLicenseStatus = () => {
    return fetch('/wp-json/qa-advisor/v1/license/status')
        .then(response => response.json())
        .then(data => {
            console.log('License Status:', data.status);
            console.log('License Type:', data.type);
            console.log('Expires:', data.expires);
            console.log('Features:', data.features);
        });
};
```

## Lizenzverwaltung

### 📊 Lizenz-Dashboard

**Lizenzinformationen**
- Lizenztyp und Status
- Aktivierungsdatum und Ablaufdatum
- Verbleibende Tage bis zur Erneuerung
- Genutzte vs. verfügbare Features

**Nutzungsstatistiken**
```php
// Lizenz-Nutzungsübersicht
$license_usage = array(
    'pageviews_used' => get_monthly_pageviews(),
    'pageviews_limit' => get_license_pageview_limit(),
    'heatmaps_active' => count_active_heatmaps(),
    'heatmaps_limit' => get_license_heatmap_limit(),
    'storage_used' => get_data_storage_usage(),
    'storage_limit' => get_license_storage_limit()
);
```

### 🔄 Lizenz-Erneuerung

**Automatische Erneuerung**
- Aktivieren Sie automatische Verlängerung
- Hinterlegen Sie Zahlungsinformationen
- Erhalten Sie Erinnerungen vor Ablauf
- Nahtlose Fortsetzung des Services

**Manuelle Erneuerung**
1. Erhalten Sie Erneuerungs-Benachrichtigung
2. Besuchen Sie das Kunden-Portal
3. Wählen Sie Erneuerungsoptionen
4. Führen Sie Zahlung durch
5. Lizenz wird automatisch verlängert

### 📈 Lizenz-Upgrade

**Upgrade-Prozess**
```php
// Lizenz-Upgrade-Funktion
function upgrade_license($current_license, $target_license) {
    $upgrade_data = array(
        'current_license' => $current_license,
        'target_license' => $target_license,
        'domain' => get_site_url(),
        'upgrade_date' => current_time('mysql')
    );
    
    $response = wp_remote_post('https://api.qa-advisor.com/v1/license/upgrade', array(
        'body' => $upgrade_data
    ));
    
    return process_upgrade_response($response);
}
```

**Upgrade-Optionen**
- Free → Professional
- Professional → Enterprise
- Temporäre Upgrades für Events
- Custom Enterprise Solutions

## Multi-Site-Lizenzen

### 🌐 Netzwerk-Aktivierung

**WordPress Multisite Support**
```php
// Multisite-Lizenz-Aktivierung
function activate_multisite_license($license_key, $sites) {
    foreach ($sites as $site_id) {
        switch_to_blog($site_id);
        
        $activation_result = activate_qa_advisor_license($license_key, get_option('admin_email'));
        
        if (!$activation_result['success']) {
            restore_current_blog();
            return array('success' => false, 'failed_site' => $site_id);
        }
        
        restore_current_blog();
    }
    
    return array('success' => true, 'activated_sites' => count($sites));
}
```

**Site-Management**
- Zentrale Lizenzverwaltung
- Site-spezifische Konfigurationen
- Bulk-Aktivierung und -Deaktivierung
- Usage-Tracking pro Site

### 🏢 Enterprise-Lizenzverwaltung

**Domain-Management**
- Mehrere Domains pro Lizenz
- Staging- und Development-Umgebungen
- Subdomain-Support
- White-Label-Konfigurationen

## Fehlerbehebung

### ❌ Häufige Aktivierungsprobleme

**Lizenzschlüssel wird nicht akzeptiert**
1. Überprüfen Sie Tippfehler im Schlüssel
2. Stellen Sie sicher, dass die E-Mail-Adresse korrekt ist
3. Überprüfen Sie, ob die Lizenz bereits verwendet wird
4. Kontaktieren Sie Support für Schlüssel-Validierung

**Aktivierung schlägt fehl**
```php
// Aktivierungs-Debugging
function debug_license_activation($license_key) {
    $debug_info = array(
        'php_version' => PHP_VERSION,
        'wordpress_version' => get_bloginfo('version'),
        'qa_advisor_version' => QA_ADVISOR_VERSION,
        'domain' => get_site_url(),
        'ssl_enabled' => is_ssl(),
        'curl_available' => function_exists('curl_init')
    );
    
    error_log('QA Advisor License Debug: ' . print_r($debug_info, true));
    return $debug_info;
}
```

**Netzwerk-Verbindungsprobleme**
1. Überprüfen Sie Firewall-Einstellungen
2. Stellen Sie sicher, dass ausgehende Verbindungen erlaubt sind
3. Überprüfen Sie SSL-Zertifikat-Validierung
4. Testen Sie API-Erreichbarkeit

### 🔧 Lizenz-Reparatur

**Lizenz-Reset**
```php
// Lizenz-Reset-Funktion
function reset_license_activation() {
    delete_option('qa_advisor_license_key');
    delete_option('qa_advisor_license_status');
    delete_option('qa_advisor_license_data');
    delete_transient('qa_advisor_license_check');
    
    // Cache leeren
    wp_cache_flush();
    
    return array('success' => true, 'message' => 'Lizenz wurde zurückgesetzt');
}
```

**Lizenz-Revalidierung**
- Erzwingen Sie eine neue Lizenz-Überprüfung
- Synchronisieren Sie Lizenz-Status mit Server
- Aktualisieren Sie lokale Lizenz-Daten
- Reaktivieren Sie Premium-Features

## API und Integrationen

### 🔌 Lizenz-API

**Lizenz-Status abfragen**
```javascript
// Lizenz-API-Zugriff
fetch('/wp-json/qa-advisor/v1/license/info')
    .then(response => response.json())
    .then(license => {
        console.log('License Type:', license.type);
        console.log('Status:', license.status);
        console.log('Features:', license.features);
        console.log('Usage:', license.usage);
    });
```

**Webhook-Integration**
- Lizenz-Status-Änderungen
- Erneuerungs-Benachrichtigungen
- Usage-Limit-Warnungen
- Upgrade-Benachrichtigungen

### 🔗 Third-Party-Integrationen

**CRM-Integration**
```php
// CRM-Lizenz-Synchronisation
function sync_license_with_crm($license_data) {
    $crm_data = array(
        'customer_email' => $license_data['email'],
        'license_type' => $license_data['type'],
        'activation_date' => $license_data['activated'],
        'expiry_date' => $license_data['expires'],
        'domain' => $license_data['domain']
    );
    
    // CRM-System aktualisieren
    return update_crm_customer_license($crm_data);
}
```

## Compliance und Sicherheit

### 🔒 Lizenz-Sicherheit

**Sicherheitsmaßnahmen**
- Verschlüsselte Lizenz-Übertragung
- Domain-Binding für Lizenz-Schutz
- Regelmäßige Lizenz-Validierung
- Anti-Piracy-Maßnahmen

**Datenschutz**
```php
// DSGVO-konforme Lizenz-Datenverarbeitung
function process_license_data_gdpr_compliant($license_data) {
    // Minimale Datensammlung
    $processed_data = array(
        'license_hash' => hash('sha256', $license_data['key']),
        'domain_hash' => hash('sha256', $license_data['domain']),
        'activation_timestamp' => time()
    );
    
    // Keine persönlichen Daten speichern
    unset($license_data['email'], $license_data['name']);
    
    return $processed_data;
}
```

## Support und Ressourcen

### 📞 Lizenz-Support

**Support-Kanäle**
- Priority-Support für Premium-Kunden
- Live-Chat für Enterprise-Kunden
- E-Mail-Support für alle Lizenz-Fragen
- Community-Forum für allgemeine Fragen

**Self-Service-Ressourcen**
- Kunden-Portal für Lizenzverwaltung
- Automatisierte Lizenz-Diagnostics
- Video-Tutorials für Aktivierung
- FAQ für häufige Probleme

## Nächste Schritte

Nach der Lizenzaktivierung:

1. [Konfigurieren Sie erweiterte Einstellungen](/docs/user-manual/screens-and-operations/settings)
2. [Nutzen Sie die Premium-Hilfe-Ressourcen](/docs/user-manual/screens-and-operations/help)
3. [Erkunden Sie erweiterte Heatmap-Funktionen](/docs/user-manual/screens-and-operations/heatmaps)
4. [Richten Sie Enterprise-Features ein](/docs/user-manual/screens-and-operations/settings)

## Support

Für Lizenz-spezifische Unterstützung:
- Konsultieren Sie unsere [FAQ](/docs/faq)
- Kontaktieren Sie unser Lizenz-Support-Team
- Besuchen Sie das Kunden-Portal
- Schauen Sie sich unsere [Community-Foren](https://github.com/quarka-org) an
