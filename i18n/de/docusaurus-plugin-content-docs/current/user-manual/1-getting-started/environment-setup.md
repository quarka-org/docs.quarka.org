---
sidebar_position: 2
title: Umgebungseinrichtung
---

# Umgebungseinrichtung

Um eine genaue Verfolgung und reibungslose Leistung mit QA Advisor zu gewährleisten, empfehlen wir die Anpassung der folgenden Server- und Plugin-Einstellungen.

---

## 1. JavaScript-Komprimierung & Minifizierung

Komprimieren, minifizieren oder kombinieren Sie **nicht** die von QA Advisor verwendeten JavaScript-Dateien.  
Einige Optimierungs-Plugins oder Themes können die Tracking-Skripte stören, indem sie deren Ausführung modifizieren oder verzögern.

> ✅ Überprüfen Sie die Einstellungen Ihres Caching- oder Optimierungs-Plugins  
> ✅ Deaktivieren Sie JS-Minifizierung oder defer/async für QA Advisor-Skripte

Für weitere technische Hintergründe siehe [Wenn jQuery verzögert wird](/docs/user-manual/getting-started/when-defer-jquery).

---

## 2. PHP-Speicherlimit & Ausführungszeit

QA Advisor verarbeitet Tracking-Daten während der täglichen Aggregation, was bei größeren Websites speicherintensiv sein kann.

Wir empfehlen die folgenden PHP-Einstellungen:

- `memory_limit`: **1024M** oder höher  
- `max_execution_time`: **240** Sekunden oder mehr

> 💡 Diese Einstellungen können normalerweise über `php.ini`, `.htaccess` oder Ihr Hosting-Kontrollpanel angepasst werden.  
> Wenn Sie unsicher sind, fragen Sie Ihren Hosting-Anbieter.

---

## 3. Plugin- & Theme-Kompatibilität

QA Advisor funktioniert mit den meisten wichtigen Plugins und Themes. Wir empfehlen jedoch:

- Deaktivierung von JavaScript defer/async für kritische Skripte
- Sicherstellen, dass Ihr Caching-Plugin die Ausgabe von `qa-heatmap-analytics` zulässt
- Vermeidung von Duplikaten mit anderen Tracking-Tools, die globale Events modifizieren

---

## 4. CDN & Server-Migration

Wenn Sie ein CDN (z.B. Cloudflare) verwenden oder kürzlich Ihren Server migriert haben:

- Löschen Sie alle Caches (Browser, Plugin, CDN)
- Bestätigen Sie, dass QA Advisor-Skripte nicht blockiert oder verzögert werden
- Stellen Sie sicher, dass die Zeitzone Ihres Servers korrekt ist (wird für Datengruppierung verwendet)

---

## 5. Optional: Skript-Ausgabe bestätigen

Um zu überprüfen, ob das Tracking-Skript korrekt geladen wird:

1. Besuchen Sie Ihre Website, während Sie **nicht eingeloggt** sind
2. Klicken Sie mit der rechten Maustaste und wählen Sie "Seitenquelltext anzeigen"
3. Durchsuchen Sie das HTML nach `qahm` oder `qahmz`

> Wenn diese Strings nicht gefunden werden, könnte das Skript blockiert sein oder nicht laden.  
> Überprüfen Sie auf JavaScript-Fehler oder Plugin-Konflikte.

---
