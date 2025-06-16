---
sidebar_position: 2
---

# Schermen en Bewerkingen

Deze sectie biedt een complete gids voor alle schermen en bewerkingen beschikbaar in QA Advisor. Elk scherm is ontworpen om specifieke inzichten te bieden over uw analytics data.

## Overzicht van Schermen

QA Advisor organiseert zijn functionaliteiten in gespecialiseerde schermen, elk gericht op specifieke aspecten van uw website-analyse:

### 📊 [Dashboard](./01-dashboard)
Het hoofdscherm dat een volledig overzicht biedt van uw site-prestaties:
- Belangrijke real-time metrics
- Trendgrafieken
- Prestatiesamenvatting
- Belangrijke waarschuwingen en meldingen

### 🧠 [Brains](./02-brains)
Kunstmatige intelligentie modules die automatisch uw data analyseren:
- Automatische inzichten
- Optimalisatie-aanbevelingen
- Voorspellende analyses
- Kansen identificatie

### ⚡ [Real-time](./03-realtime)
Live monitoring van uw site-activiteit:
- Actieve bezoekers in real-time
- Momenteel bekeken pagina's
- Live verkeersbronnen
- Lopende gebeurtenissen

### 👥 [Publiek](./04-audience)
Gedetailleerde analyse van uw bezoekers:
- Demografie en interesses
- Gebruikersgedrag
- Publiekssegmentatie
- Navigatiepaden

### 📈 [Acquisitie](./05-acquisition)
Begrijp waar uw bezoekers vandaan komen:
- Verkeersbronnen
- Marketingkanalen
- Advertentiecampagnes
- Verwijzingen en inkomende links

### 🎯 [Landingspagina's](./06-landing-pages)
Analyse van uw landingspagina-prestaties:
- Conversiepercentages per pagina
- Verblijftijd
- Bouncepercentage
- Voorgestelde optimalisaties

### 📊 [Top Groeiend](./07-top-growing)
Identificeer groeiende content en pagina's:
- Snel groeiende pagina's
- Trending content
- Opkomende kansen
- Trendanalyse

### 📋 [Alle Pagina's](./08-all-pages)
Volledig overzicht van alle pagina's van uw site:
- Prestaties per pagina
- Vergelijkende metrics
- Filters en sortering
- Data export

### 🎯 [Doelen](./09-goals)
Configuratie en monitoring van bedrijfsdoelen:
- Doelen definitie
- Conversie tracking
- Conversie funnels
- ROI en bedrijfsmetrics

### 🔑 [Licentie Activatie](./10-license-activation)
Beheer van uw QA Advisor licentie:
- Licentie activatie
- Abonnementsstatus
- Upgrades en downgrades
- Domeinbeheer

### 🔥 [Heatmaps](./heatmaps)
Geavanceerde visualisaties van gebruikersinteracties:
- Click, scroll, move heatmaps
- Geavanceerde filters
- Gedragsanalyse
- UX/UI inzichten

### ❓ [Help](./12-help)
Ondersteuningscentrum en bronnen:
- Geïntegreerde documentatie
- Interactieve tutorials
- Technische ondersteuning
- FAQ en probleemoplossing

## Navigatie tussen Schermen

### Hoofdmenu
Het hoofdmenu van QA Advisor is logisch georganiseerd:

```
QA Advisor
├── Dashboard          # Algemeen overzicht
├── Brains            # AI inzichten
├── Real-time         # Live monitoring
├── Publiek           # Bezoekersanalyse
├── Acquisitie        # Verkeersbronnen
├── Landingspagina's  # Pagina prestaties
├── Top Groeiend      # Groeiende content
├── Alle Pagina's     # Volledig overzicht
├── Heatmaps          # Warmtekaarten
├── Doelen            # Conversies en KPI's
├── Instellingen      # Configuraties
├── Activatie         # Licentiebeheer
└── Help              # Ondersteuning
```

### Sneltoetsen
QA Advisor ondersteunt sneltoetsen voor snelle navigatie:

- `Ctrl + D` - Dashboard
- `Ctrl + B` - Brains
- `Ctrl + R` - Real-time
- `Ctrl + H` - Heatmaps
- `Ctrl + G` - Doelen
- `Ctrl + ?` - Help

## Gemeenschappelijke Functionaliteiten

### Filters en Segmentatie
Alle schermen ondersteunen geavanceerde filters:

#### Tijdfilters
- Vandaag, Gisteren, Laatste 7 dagen
- Laatste 30 dagen, Laatste 90 dagen
- Aangepast bereik
- Periode vergelijking

#### Demografische Filters
- Land en stad
- Apparaat (desktop, mobiel, tablet)
- Browser en besturingssysteem
- Nieuwe vs. terugkerende bezoekers

#### Gedragsfilters
- Verkeersbron
- Ingangspagina's
- Sessieduur
- Aantal bekeken pagina's

### Data Export
Elk scherm maakt data export mogelijk:

#### Ondersteunde Formaten
- **CSV** - Voor analyse in Excel/Google Sheets
- **JSON** - Voor API integraties
- **PDF** - Voor rapporten en presentaties
- **PNG/JPG** - Voor grafieken en visualisaties

#### Export Opties
- Huidige gefilterde data
- Volledige periode data
- Alleen geselecteerde metrics
- Inclusief grafieken en visualisaties

### Dashboard Personalisatie

#### Aanpasbare Widgets
- Widgets toevoegen/verwijderen
- Formaat wijzigen en herrangschikken
- Getoonde metrics configureren
- Aangepaste layouts opslaan

#### Thema's en Visualisaties
- Lichte/donkere modus
- Aangepaste kleurenschema's
- Informatiedichtheid
- Grafiekvoorkeuren

## Typische Workflows

### Dagelijkse Prestatie Analyse
1. **Dashboard** - Algemeen overzicht
2. **Real-time** - Huidige activiteit
3. **Brains** - Automatische inzichten
4. **Heatmaps** - Gebruikersgedrag

### Conversie Optimalisatie
1. **Doelen** - Definieer KPI's
2. **Landingspagina's** - Identificeer kritieke pagina's
3. **Heatmaps** - Analyseer interacties
4. **Brains** - Voorgestelde optimalisaties

### Verkeer Analyse
1. **Acquisitie** - Verkeersbronnen
2. **Publiek** - Bezoekerskenmerken
3. **Top Groeiend** - Presterende content
4. **Alle Pagina's** - Volledig overzicht

## Integraties en API

### Native Integraties
- Google Analytics
- Google Search Console
- Facebook Pixel
- Google Tag Manager

### REST API
Programmatische toegang tot data:
```javascript
// Voorbeeld API call
fetch('/wp-json/qahm/v1/dashboard-stats')
  .then(response => response.json())
  .then(data => console.log(data));
```

### Webhooks
Automatische meldingen voor belangrijke gebeurtenissen:
- Verkeerspieken
- Behaalde doelen
- Kritieke fouten
- Data updates

## Volgende Stappen

Om QA Advisor te gaan verkennen:

1. **[Dashboard](./01-dashboard)** - Begin met het algemene overzicht
2. **[Doelen Configuratie](./09-goals)** - Definieer wat te meten
3. **[Heatmaps](./heatmaps)** - Begrijp gebruikersgedrag
4. **[Brains](./02-brains)** - Verkrijg automatische inzichten

Elk scherm is ontworpen om intuïtief te zijn en directe waarde te bieden. Verken de verschillende secties om alle inzichten te ontdekken die QA Advisor kan bieden over uw WordPress-site!
