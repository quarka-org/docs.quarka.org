---
sidebar_position: 2
---

# Installatie

Deze gids leidt u door het complete installatieproces van QA Advisor op uw WordPress website.

## Installatie Methoden

### Methode 1: WordPress Plugin Directory (Aanbevolen)

Dit is de eenvoudigste en veiligste manier om QA Advisor te installeren.

#### Stap-voor-Stap Instructies

1. **Log in op WordPress Admin**
   - Ga naar uw WordPress admin dashboard
   - Navigeer naar `Plugins > Nieuwe Plugin Toevoegen`

2. **Zoek naar QA Advisor**
   - Typ "QA Advisor" in het zoekvenster
   - Klik op "Plugins zoeken"

3. **Installeer de Plugin**
   - Zoek QA Advisor in de zoekresultaten
   - Klik op "Nu Installeren"
   - Wacht tot de installatie voltooid is

4. **Activeer de Plugin**
   - Klik op "Activeren" zodra de installatie klaar is
   - U wordt doorgestuurd naar de plugins pagina

5. **Configuratie Wizard**
   - QA Advisor start automatisch de configuratie wizard
   - Volg de stappen om basis instellingen te configureren

### Methode 2: Handmatige Upload

Voor gebruikers die de plugin bestanden handmatig willen uploaden.

#### Vereisten
- FTP toegang tot uw website
- QA Advisor plugin ZIP bestand

#### Installatie Stappen

1. **Download Plugin Bestand**
   - Download het QA Advisor ZIP bestand
   - Pak het bestand uit op uw computer

2. **Upload via FTP**
   ```
   /wp-content/plugins/qa-advisor/
   ```
   - Upload de uitgepakte map naar uw plugins directory
   - Zorg ervoor dat alle bestanden correct zijn geüpload

3. **Activeer via WordPress**
   - Ga naar `Plugins > Geïnstalleerde Plugins`
   - Zoek QA Advisor in de lijst
   - Klik op "Activeren"

#### Upload via WordPress Admin

Alternatief kunt u het ZIP bestand direct uploaden:

1. **Ga naar Plugin Upload**
   - Navigeer naar `Plugins > Nieuwe Plugin Toevoegen`
   - Klik op "Plugin Uploaden"

2. **Selecteer Bestand**
   - Klik op "Bestand Kiezen"
   - Selecteer het QA Advisor ZIP bestand
   - Klik op "Nu Installeren"

3. **Activeer Plugin**
   - Klik op "Plugin Activeren" na succesvolle installatie

### Methode 3: WP-CLI Installatie

Voor ontwikkelaars die de command line interface gebruiken.

#### Installatie Commando's

```bash
# Installeer QA Advisor
wp plugin install qa-advisor

# Activeer de plugin
wp plugin activate qa-advisor

# Controleer installatie status
wp plugin status qa-advisor
```

#### Geavanceerde WP-CLI Opties

```bash
# Installeer specifieke versie
wp plugin install qa-advisor --version=1.2.3

# Installeer en activeer in één commando
wp plugin install qa-advisor --activate

# Installeer van ZIP URL
wp plugin install https://example.com/qa-advisor.zip
```

## Post-Installatie Configuratie

### Eerste Toegang

Na activatie vindt u QA Advisor in uw WordPress admin menu:

```
WordPress Admin → QA Advisor
```

### Configuratie Wizard

QA Advisor start automatisch een configuratie wizard die u begeleidt door:

1. **Welkomstscherm**
   - Overzicht van QA Advisor functies
   - Licentie informatie

2. **Basis Instellingen**
   - Tracking configuratie
   - Data verzameling opties

3. **Privacy Configuratie**
   - GDPR/AVG compliance instellingen
   - Cookie beleid configuratie

4. **Doelen Setup**
   - Conversie doelen definiëren
   - Success metrics instellen

5. **Voltooiing**
   - Configuratie samenvatting
   - Eerste data verzameling start

### Licentie Activatie

Voor premium functies moet u uw licentie activeren:

1. **Ga naar Licentie Activatie**
   - Navigeer naar `QA Advisor > Licentie Activatie`

2. **Voer Licentie Sleutel In**
   - Plak uw licentie sleutel in het veld
   - Klik op "Licentie Activeren"

3. **Verificatie**
   - Wacht op bevestiging van activatie
   - Premium functies worden automatisch ontgrendeld

## Verificatie van Installatie

### Controleer Plugin Status

1. **Plugin Lijst**
   - Ga naar `Plugins > Geïnstalleerde Plugins`
   - Controleer of QA Advisor actief is

2. **Menu Toegang**
   - Controleer of "QA Advisor" verschijnt in het admin menu
   - Test toegang tot verschillende secties

### Test Data Verzameling

1. **Bezoek Uw Website**
   - Open uw website in een nieuwe browser tab
   - Navigeer door enkele pagina's

2. **Controleer Dashboard**
   - Ga naar `QA Advisor > Dashboard`
   - Controleer of data wordt weergegeven (kan 24-48 uur duren)

### Controleer Heatmap Functionaliteit

1. **Heatmap Instellingen**
   - Ga naar `QA Advisor > Heatmaps`
   - Controleer of tracking actief is

2. **Test Heatmap Generatie**
   - Wacht op voldoende data verzameling
   - Controleer of heatmaps worden gegenereerd

## Veelvoorkomende Installatie Problemen

### Plugin Niet Zichtbaar

**Probleem**: QA Advisor verschijnt niet in het admin menu

**Oplossingen**:
- Controleer of de plugin correct is geactiveerd
- Verifieer gebruikersrechten (admin rechten vereist)
- Controleer op plugin conflicten

### Activatie Fouten

**Probleem**: Foutmeldingen tijdens plugin activatie

**Oplossingen**:
```php
// Verhoog PHP geheugen limiet in wp-config.php
define('WP_MEMORY_LIMIT', '256M');

// Verhoog uitvoeringstijd
ini_set('max_execution_time', 300);
```

### Database Fouten

**Probleem**: Database gerelateerde fouten

**Oplossingen**:
- Controleer database rechten
- Verifieer MySQL versie compatibiliteit
- Controleer beschikbare disk ruimte

### Bestandsrechten Problemen

**Probleem**: Kan bestanden niet schrijven

**Oplossingen**:
```bash
# Stel correcte rechten in
chmod 755 /wp-content/plugins/qa-advisor/
chmod 644 /wp-content/plugins/qa-advisor/*.php
```

## Geavanceerde Installatie Opties

### Multisite Installatie

Voor WordPress Multisite netwerken:

1. **Network Activatie**
   - Ga naar `Network Admin > Plugins`
   - Activeer QA Advisor voor het hele netwerk

2. **Per-Site Configuratie**
   - Configureer instellingen per individuele site
   - Gebruik centrale licentie voor alle sites

### Staging Omgeving

Voor test installaties:

1. **Staging Setup**
   - Installeer op staging omgeving eerst
   - Test alle functionaliteiten
   - Migreer configuratie naar productie

2. **Data Migratie**
   - Export instellingen van staging
   - Import naar productie omgeving

## Volgende Stappen

Na succesvolle installatie:

1. **[Omgeving Setup](./environment-setup.md)** - Optimaliseer uw WordPress omgeving
2. **[Dashboard](../2-screens-and-operations/01-dashboard.md)** - Verken het QA Advisor dashboard
3. **[jQuery Configuratie](./when-defer-jquery.md)** - Los eventuele jQuery conflicten op
4. **[Hulp](../2-screens-and-operations/12-help.md)** - Toegang tot ondersteuning en documentatie

Gefeliciteerd! QA Advisor is nu geïnstalleerd en klaar voor gebruik op uw WordPress website.
