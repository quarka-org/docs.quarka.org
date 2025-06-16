---
sidebar_position: 1
---

# Installation

Diese Anleitung führt Sie durch die Installation von QA Advisor auf Ihrer WordPress-Website.

## Installationsmethoden

Es gibt mehrere Möglichkeiten, QA Advisor auf Ihrer WordPress-Website zu installieren:

### Methode 1: Installation über WordPress Admin (Empfohlen)

1. **Melden Sie sich** in Ihrem WordPress Dashboard an
2. **Navigieren Sie** zu Plugins → Neues Plugin hinzufügen
3. **Suchen Sie** nach "QA Advisor" in der Suchleiste
4. **Klicken Sie** auf "Jetzt installieren" neben QA Advisor
5. **Aktivieren Sie** das Plugin nach Abschluss der Installation

### Methode 2: Manuelle Installation

1. **Laden Sie** die QA Advisor ZIP-Datei von der offiziellen Website herunter
2. **Melden Sie sich** in Ihrem WordPress Dashboard an
3. **Navigieren Sie** zu Plugins → Neues Plugin hinzufügen
4. **Klicken Sie** auf "Plugin hochladen"
5. **Wählen Sie** die heruntergeladene ZIP-Datei aus
6. **Klicken Sie** auf "Jetzt installieren"
7. **Aktivieren Sie** das Plugin nach Abschluss der Installation

### Methode 3: FTP-Installation

1. **Laden Sie** die QA Advisor ZIP-Datei herunter und **entpacken Sie** sie
2. **Laden Sie** den `qa-advisor` Ordner nach `/wp-content/plugins/` hoch
3. **Melden Sie sich** in Ihrem WordPress Dashboard an
4. **Navigieren Sie** zu Plugins → Installierte Plugins
5. **Aktivieren Sie** QA Advisor

## Ersteinrichtung

Nach der Aktivierung startet QA Advisor automatisch den Einrichtungsassistenten:

### Schritt 1: Willkommen
- Lesen Sie die Willkommensinformationen
- Klicken Sie auf "Einrichtung starten"

### Schritt 2: Grundeinstellungen
- **Website-Name**: Bestätigen Sie den Namen Ihrer Website
- **Zeitzone**: Überprüfen Sie die Zeitzoneneinstellungen
- **Sprache**: Wählen Sie Ihre bevorzugte Sprache

### Schritt 3: Tracking-Einstellungen
- **Automatisches Tracking**: Aktivieren Sie automatisches Seiten-Tracking
- **IP-Anonymisierung**: Aktivieren Sie für DSGVO-Konformität
- **Ausschlüsse**: Konfigurieren Sie Seiten, die vom Tracking ausgeschlossen werden sollen

### Schritt 4: Abschluss
- Überprüfen Sie alle Einstellungen
- Klicken Sie auf "Einrichtung abschließen"

## Installation überprüfen

Um zu überprüfen, ob QA Advisor ordnungsgemäß funktioniert:

1. **Besuchen Sie** Ihre Website
2. **Navigieren Sie** zu QA Advisor → Dashboard im WordPress Admin
3. **Überprüfen Sie**, dass Tracking-Daten zu erscheinen beginnen (dies kann einige Minuten dauern)

## Fehlerbehebung

### Plugin aktiviert sich nicht
- Überprüfen Sie, dass Ihre WordPress-Version 5.9 oder höher ist
- Stellen Sie sicher, dass PHP Version 7.4 oder höher ist
- Überprüfen Sie die WordPress-Fehlerprotokolle

### Keine Tracking-Daten
- Überprüfen Sie, dass der Tracking-Code im Quellcode Ihrer Seite vorhanden ist
- Stellen Sie sicher, dass JavaScript aktiviert ist
- Überprüfen Sie die Cache-Einstellungen

### Leistungsprobleme
- Konsultieren Sie [Umgebungseinrichtung](/docs/user-manual/getting-started/environment-setup)
- Konfigurieren Sie [Datenlimits](/docs/user-manual/getting-started/set-data-limit-wpconfig)

## Nächste Schritte

Sobald QA Advisor erfolgreich installiert ist:

1. [Konfigurieren Sie Ihre Umgebung](/docs/user-manual/getting-started/environment-setup)
2. [Erkunden Sie das Dashboard](/docs/user-manual/screens-and-operations/dashboard)
3. [Richten Sie Ihre ersten Ziele ein](/docs/user-manual/screens-and-operations/goals)

## Support

Wenn Sie während der Installation auf Probleme stoßen, konsultieren Sie unsere [FAQ](/docs/faq) oder kontaktieren Sie unser Support-Team.
