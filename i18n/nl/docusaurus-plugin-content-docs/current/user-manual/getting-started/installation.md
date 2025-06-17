---
sidebar_position: 2
---

# Installatie

Deze handleiding begeleidt u door het proces van het installeren van QA Advisor op uw WordPress site.

## Installatie Methoden

### Methode 1: Installatie via WordPress Admin Panel (Aanbevolen)

1. **Download QA Advisor**
   - Ga naar de [officiële download pagina](/)
   - Klik "🚀 Download QA Advisor (β)"
   - Sla het ZIP-bestand op uw computer op

2. **Log in op WordPress Admin Panel**
   - Ga naar `uwsite.com/wp-admin`
   - Log in met uw administrator gegevens

3. **Ga naar Plugins Sectie**
   - Klik "Plugins" in het zijmenu
   - Klik "Nieuwe toevoegen"

4. **Upload Plugin**
   - Klik "Plugin uploaden" bovenaan de pagina
   - Klik "Bestand kiezen" en selecteer het QA Advisor ZIP-bestand
   - Klik "Nu installeren"

5. **Activeer Plugin**
   - Na installatie, klik "Plugin activeren"
   - QA Advisor is nu geïnstalleerd en actief

### Methode 2: FTP Installatie

Als u liever handmatig installeert via FTP:

1. **Pak ZIP-bestand uit**
   - Pak het QA Advisor ZIP-bestand uit op uw computer
   - U zou een map genaamd `qa-heatmap-analytics` moeten zien

2. **Upload via FTP**
   - Verbind met uw server via FTP
   - Navigeer naar de `/wp-content/plugins/` map
   - Upload de volledige `qa-heatmap-analytics` map

3. **Activeer via WordPress**
   - Ga naar het WordPress admin panel
   - Ga naar "Plugins" > "Geïnstalleerde plugins"
   - Vind "QA Advisor" en klik "Activeren"

## Post-Installatie Configuratie

### Configuratie Wizard

Na activatie start QA Advisor automatisch de configuratie wizard:

1. **Welkomstscherm**
   - Overzicht van QA Advisor functionaliteiten
   - Klik "Begin configuratie"

2. **Basis Instellingen**
   - Configureer basis tracking instellingen
   - Kies welke data types te verzamelen

3. **Privacy Configuratie**
   - Bekijk en configureer privacy instellingen
   - Stel GDPR compliance in indien nodig

4. **Geavanceerde Modus (Optioneel)**
   - Schakel geavanceerde functies in zoals:
     - Publiek inzichten
     - Geavanceerde doelen tracking
     - Extra AI modules

### Installatie Verificatie

Om te controleren of QA Advisor correct is geïnstalleerd:

1. **Controleer Admin Menu**
   - U zou "QA Advisor" moeten zien in het WordPress zijmenu

2. **Toegang tot Dashboard**
   - Klik "QA Advisor" in het menu
   - U zou het hoofddashboard moeten zien

3. **Controleer Tracking**
   - Ga naar de "Real-time" sectie
   - Open uw site in een nieuw tabblad
   - U zou real-time activiteit moeten zien in het panel

## Installatie Probleemoplossing

### Veelvoorkomende Problemen

**Fout: "Plugin heeft geen geldige header"**
- Zorg ervoor dat u het juiste bestand heeft gedownload
- Probeer opnieuw te downloaden van de officiële bron

**PHP Geheugen Fout**
- Verhoog PHP geheugen limiet (zie [Omgeving Setup](/docs/user-manual/getting-started/environment-setup))
- Neem contact op met uw hosting provider voor hulp

**Plugin Niet Zichtbaar Na Activatie**
- Wis browser cache
- Controleer op conflicten met andere plugins
- Controleer bestandspermissies

### Compatibiliteit Controles

Voor installatie controleert QA Advisor:

- WordPress versie (5.0+)
- PHP versie (7.4+)
- Vereiste PHP extensies
- Bestand schrijfpermissies
- Geheugen beschikbaarheid

Als een controle faalt, krijgt u specifieke instructies om het probleem op te lossen.

## Geavanceerde Configuratie

### Handmatige Configuratie

Als u de wizard wilt overslaan:

1. **Ga naar Instellingen**
   - QA Advisor > Instellingen
   - Configureer handmatig elke sectie

2. **Hoofd Instellingen**
   - Schakel tracking in/uit
   - Configureer tracking domeinen
   - Stel data verzameling limieten in

3. **Privacy Instellingen**
   - Configureer IP anonimisatie
   - Stel data retentie periodes in
   - Configureer gebruiker uitsluitingen

### Multi-site Configuratie

Voor WordPress multi-site installaties:

1. **Netwerk-niveau Installatie**
   - Installeer als netwerk plugin indien gewenst
   - Elke site heeft aparte data

2. **Per-site Configuratie**
   - Elke site kan onafhankelijke configuraties hebben
   - Site administrators kunnen hun eigen instellingen beheren

## Volgende Stappen

Na succesvolle installatie:

1. **[Omgeving Setup](/docs/user-manual/getting-started/environment-setup)** - Optimaliseer prestaties
2. **[Dashboard](/docs/user-manual/screens-and-operations/dashboard)** - Verken de hoofdinterface
3. **[Real-time Weergave](/docs/user-manual/screens-and-operations/realtime)** - Controleer of tracking werkt

## Ondersteuning

Als u hulp nodig heeft bij installatie:

- Raadpleeg onze [FAQ](/docs/faq)
- Bezoek [GitHub repository](https://github.com/quarka-org) voor technische ondersteuning
- Neem contact op met ondersteuning voor gepersonaliseerde hulp

---

Na het voltooien van de installatie, ga naar [Omgeving Setup](/docs/user-manual/getting-started/environment-setup) om prestaties te optimaliseren.
