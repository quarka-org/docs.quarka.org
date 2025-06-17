---
sidebar_position: 4
---

# Real-time

QA Advisor's Real-time Weergave stelt u in staat om uw website activiteit te monitoren terwijl het gebeurt, en biedt onmiddellijke inzichten in actieve bezoekers, populaire pagina's en gebruikersgedrag in real-time.

## Overzicht

Real-time monitoring is essentieel voor:

- **Onmiddellijke Verificatie**: Bevestigen dat tracking correct werkt
- **Gebeurtenis Monitoring**: Tracking van campagnes, product launches of speciale gebeurtenissen
- **Probleemoplossing**: Snelle identificatie van technische problemen
- **Live Betrokkenheid**: Observeren hoe gebruikers interacteren met nieuwe content

## Scherm Layout

### Bovenste Paneel - Live Metrics

#### Actieve Bezoekers
- **Huidig Aantal**: Aantal bezoekers momenteel op site
- **30 Minuten Trend**: Grafiek van activiteit van laatste 30 minuten
- **Dagelijkse Piek**: Maximum aantal gelijktijdige bezoekers vandaag

#### Paginaweergaven (Laatste Uur)
- **Totale Weergaven**: Pagina's bekeken in laatste uur
- **Tempo per Minuut**: Gemiddelde weergaven per minuut
- **Vergelijking**: Verandering ten opzichte van vorig uur

#### Nieuwe Bezoekers
- **Percentage**: Percentage nieuwe bezoekers onder actieve
- **Eerste Bezoeken**: Bezoekers die site voor het eerst bezoeken
- **Terugkerend**: Bezoekers die eerder op site waren

### Middelste Sectie - Live Activiteit

#### Bezoeker Kaart
Real-time geografische visualisatie:

- **Actieve Locaties**: Punten op wereldkaart die actieve bezoekers tonen
- **Concentraties**: Gebieden met hogere bezoeker dichtheid
- **Land Details**: Klik op land voor specifieke details
- **Interactief Zoomen**: Zoom in voor regionale details

#### Activiteit Stream
Live feed van gebruiker acties:

```
🟢 Amsterdam, Nederland - Bekijkt: /producten/smartphone
🔵 Rotterdam, Nederland - Nieuwe bezoeker op: /
🟡 Utrecht, Nederland - Klik op: "Toevoegen aan winkelwagen"
🟠 Den Haag, Nederland - Verlaat: /checkout
```

#### Actieve Pagina's
Lijst van pagina's momenteel bekeken:

- **Pagina URL**: Pagina pad
- **Actieve Bezoekers**: Aantal mensen op pagina nu
- **Gemiddelde Tijd**: Gemiddelde tijd besteed op pagina
- **Acties**: Links naar details of heatmaps

### Zijpaneel - Snelle Inzichten

#### Top Verkeersbronnen (Live)
- **Direct Verkeer**: Bezoekers die direct komen
- **Zoekmachines**: Verkeer van Google, Bing, etc.
- **Social Media**: Verkeer van Facebook, Twitter, LinkedIn
- **Referrals**: Verkeer van andere websites

#### Actieve Apparaten
- **Desktop**: Percentage desktop bezoekers
- **Mobiel**: Percentage mobiele bezoekers
- **Tablet**: Percentage tablet bezoekers
- **Besturingssystemen**: OS verdeling in real-time

#### Gebruikte Browsers
- **Chrome**: Percentage Chrome gebruikers
- **Safari**: Percentage Safari gebruikers
- **Firefox**: Percentage Firefox gebruikers
- **Andere**: Andere browsers in gebruik

## Geavanceerde Functionaliteiten

### Real-time Filters

#### Geografische Filter
- **Land**: Filter op specifiek land
- **Regio**: Zoom in op specifieke regio's
- **Stad**: Focus op specifieke steden
- **Tijdzone**: Houd rekening met tijdzone verschillen

#### Gedragsfilter
- **Nieuw vs Terugkerend**: Segmenteer op bezoeker type
- **Sessie Duur**: Filter op sessie lengte
- **Bezochte Pagina's**: Filter op aantal bekeken pagina's
- **Betrokkenheid**: Filter op interactie niveau

#### Technische Filter
- **Apparaat**: Desktop, mobiel, tablet
- **Browser**: Type gebruikte browser
- **Besturingssysteem**: Bezoeker OS
- **Scherm Resolutie**: Scherm groottes

### Real-time Alerts

#### Alert Configuratie
Stel alerts in voor specifieke gebeurtenissen:

```javascript
{
  "traffic_spike": {
    "threshold": 200,
    "condition": "visitors > threshold",
    "notification": "email + dashboard"
  },
  "conversion_goal": {
    "event": "purchase_completed",
    "notification": "real_time_popup"
  },
  "error_detection": {
    "condition": "404_errors > 10/minute",
    "notification": "immediate_alert"
  }
}
```

#### Alert Types
- **Verkeer Spikes**: Plotselinge bezoeker toenames
- **Verkeer Dalingen**: Significante afnames
- **Technische Fouten**: 404, 500, JavaScript fouten
- **Behaalde Doelen**: Conversies of mijlpalen
- **Ongewoon Gedrag**: Ongebruikelijke patronen

### Campagne Monitoring

#### Real-time UTM Tracking
Monitor campagne prestaties:

- **utm_source**: Campagne bron (google, facebook, email)
- **utm_medium**: Gebruikt medium (cpc, social, email)
- **utm_campaign**: Campagne naam
- **utm_content**: Content variant
- **utm_term**: Keywords (voor betaalde campagnes)

#### Live Campagne Dashboard
- **Verkeer per Campagne**: Bezoekers voor elke actieve campagne
- **Live Conversies**: Doelen voltooid voor campagnes
- **Cost per Click**: Real-time CPC (indien geïntegreerd)
- **Onmiddellijke ROI**: Live return on investment

### Live Gebruiker Interacties

#### Real-time Heatmap
Visualiseer interacties terwijl ze gebeuren:

- **Live Kliks**: Punten die verschijnen wanneer gebruikers klikken
- **Muis Beweging**: Muis beweging sporen
- **Scroll Gedrag**: Hoe gebruikers door pagina's scrollen
- **Formulier Interacties**: Real-time formulier interacties

#### Live Sessie Replay
Bekijk gebruiker sessies in real-time:

- **Sessie Selectie**: Kies actieve sessie om te observeren
- **Live Replay**: Zie wat gebruiker nu doet
- **Annotaties**: Voeg notities toe tijdens observatie
- **Privacy Controles**: Respecteer privacy instellingen

## Praktische Toepassingen

### Post-Launch Verificatie

Na lancering van nieuwe content of functionaliteiten:

1. **Monitor Verkeer**: Controleer of er bezoeker toename is
2. **Observeer Gedrag**: Zie hoe gebruikers interacteren met nieuwe elementen
3. **Identificeer Problemen**: Detecteer snel eventuele fouten
4. **Meet Betrokkenheid**: Beoordeel of wijzigingen betrokkenheid verbeteren

### Speciale Gebeurtenis Management

Tijdens gebeurtenissen, promoties of launches:

- **Voorbereiding**: Stel alerts in voor verkeer spikes
- **Actieve Monitoring**: Track gebeurtenis in real-time
- **Snelle Oplossing**: Intervenieer onmiddellijk bij problemen
- **Live Optimalisatie**: Pas strategieën aan gebaseerd op live data

### Proactieve Klantondersteuning

Gebruik real-time data voor ondersteuning:

- **Probleem Identificatie**: Detecteer gebruikers in moeilijkheden
- **Proactieve Interventie**: Bied hulp voordat ze vragen
- **Chat Targeting**: Start chat met specifieke gebruikers
- **Personalisatie**: Personaliseer ervaring gebaseerd op gedrag

## Geavanceerde Configuratie

### Prestatie Instellingen

#### Update Frequentie
```javascript
{
  "update_frequency": {
    "high_traffic": "1_second",
    "normal_traffic": "5_seconds",
    "low_traffic": "15_seconds"
  },
  "auto_adjust": true
}
```

#### Resource Optimalisatie
- **Adaptieve Polling**: Frequentie past zich aan verkeer aan
- **Data Compressie**: Compressie voor langzame verbindingen
- **Selectieve Updates**: Update alleen gewijzigde data
- **Achtergrond Verwerking**: Achtergrond processing

### Privacy en Compliance

#### Real-time Anonimisatie
- **IP Masking**: Maskeer IP adressen
- **Locatie Vervaging**: Geschatte locaties
- **Sessie Anonimisatie**: Anonieme sessies
- **GDPR Compliance**: Automatische GDPR naleving

#### Toegangscontroles
- **Role-based Access**: Toegang gebaseerd op rollen
- **IP Beperkingen**: IP beperkingen
- **Tijd Toegang**: Tijd-beperkte toegang
- **Audit Logging**: Toegang logs

## Probleemoplossing

### Veelvoorkomende Problemen

#### Data Wordt Niet Bijgewerkt
**Symptomen**: Data wordt niet real-time bijgewerkt
**Oplossingen**:
1. Controleer internet verbinding
2. Controleer of JavaScript ingeschakeld is
3. Schakel browser extensies uit die scripts blokkeren
4. Wis cache en herlaad pagina

#### Langzame Prestaties
**Symptomen**: Real-time pagina is langzaam of hangt
**Oplossingen**:
1. Verlaag update frequentie
2. Beperk aantal weergegeven items
3. Sluit andere browser tabs
4. Controleer systeem CPU gebruik

#### Nummer Discrepanties
**Symptomen**: Nummers komen niet overeen met andere bronnen
**Mogelijke Oorzaken**:
- Tijdzone verschillen
- Verschillende toegepaste filters
- Verschillende metric definities
- Data synchronisatie vertragingen

### Geavanceerd Debuggen

#### Developer Console
Gebruik browser console voor debugging:

```javascript
// Controleer WebSocket verbinding
console.log(QAAdvisor.realtime.connection.status);

// Controleer update frequentie
console.log(QAAdvisor.realtime.updateFrequency);

// Debug real-time gebeurtenissen
QAAdvisor.realtime.debug = true;
```

#### Systeem Logs
Controleer logs voor server-side problemen:

```
[2025-06-16 10:30:15] Realtime: WebSocket connection established
[2025-06-16 10:30:16] Realtime: 45 active visitors tracked
[2025-06-16 10:30:17] Realtime: Data update sent to 12 dashboard clients
```

## Beste Praktijken

### Effectieve Monitoring
1. **Stel Slimme Alerts In**: Niet te veel, niet te weinig
2. **Personaliseer Dashboard**: Toon alleen relevante metrics
3. **Documenteer Anomalieën**: Houd ongebruikelijke gebeurtenissen bij
4. **Train Team**: Zorg ervoor dat iedereen weet hoe functionaliteiten te gebruiken

### Prestatie Optimalisatie
- **Gebruik Filters**: Verminder belasting door onnodige data te filteren
- **Monitor Resources**: Controleer impact op server prestaties
- **Plan Capaciteit**: Bereid infrastructuur voor op verkeer spikes
- **Regelmatige Tests**: Controleer of alles werkt tijdens laag verkeer

## Volgende Stappen

Na kennismaking met real-time:

1. **[Publiek](/docs/user-manual/screens-and-operations/audience)** - Analyseer bezoekers in detail
2. **[Heatmaps](/docs/user-manual/screens-and-operations/heatmaps)** - Visualiseer interacties
3. **[Doelen](/docs/user-manual/screens-and-operations/goals)** - Configureer conversie tracking

---

Real-time monitoring geeft u de onmiddellijke puls van uw website. Gebruik het voor snelle verificaties, gebeurtenis monitoring en proactieve probleemoplossing.
