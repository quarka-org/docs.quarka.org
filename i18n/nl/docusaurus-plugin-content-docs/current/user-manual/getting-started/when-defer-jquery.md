---
sidebar_position: 5
---

# Wanneer jQuery Uitstellen

Begrijp wanneer en hoe u uitgesteld jQuery laden beheert om conflicten met QA Advisor te voorkomen en juiste tracking functionaliteit te waarborgen.

## Overzicht

jQuery is een fundamentele JavaScript bibliotheek gebruikt door veel WordPress plugins, inclusief QA Advisor. Echter, sommige prestatie optimalisaties kunnen jQuery laden uitstellen (defer), wat juiste QA Advisor tracking functionaliteit kan verstoren.

## Wanneer jQuery Defer Problemen Veroorzaakt

### Typische Symptomen

Als QA Advisor niet correct werkt, kunt u het volgende opmerken:

- **Geen tracking data**: Paginaweergaven worden niet geregistreerd
- **Lege heatmaps**: Geen klik of muis beweging data
- **JavaScript fouten**: Fouten in browser console
- **Ontbrekende functionaliteiten**: Sommige interface functies werken niet

### Oorzaken van het Probleem

Het probleem treedt op wanneer:

1. **Optimalisatie plugins** jQuery uitstellen
2. **Aangepaste thema's** jQuery asynchroon laden
3. **CDN of cache** script laad volgorde wijzigen
4. **Server configuraties** jQuery laden vertragen

## Probleem Identificatie

### Browser Console Controleren

1. Open browser developer tools (F12)
2. Ga naar "Console" tab
3. Herlaad de pagina
4. Zoek naar fouten zoals:
   ```
   $ is not defined
   jQuery is not defined
   Cannot read property of undefined
   ```

### Functionaliteit Testen

1. Ga naar **QA Advisor > Real-time**
2. Open uw site in een nieuw tabblad
3. Navigeer tussen pagina's
4. Als u geen real-time activiteit ziet, kan er een jQuery probleem zijn

### Broncode Controleren

Bekijk pagina broncode en controleer:

```html
<!-- jQuery zou moeten laden VOOR QA Advisor scripts -->
<script src="jquery.min.js"></script>
<script src="qa-advisor-tracking.js"></script>
```

## Oplossingen voor Optimalisatie Plugins

### WP Rocket

Als u WP Rocket gebruikt:

1. Ga naar **Instellingen > WP Rocket**
2. **"Bestand Optimalisatie"** tab
3. In **"JavaScript Bestanden"**:
   - Vink NIET aan "Defer JavaScript execution"
   - OF voeg uitzonderingen toe voor QA Advisor

**Toe te voegen uitzonderingen:**
```
/wp-content/plugins/qa-heatmap-analytics/
jquery
```

### W3 Total Cache

Voor W3 Total Cache:

1. Ga naar **Performance > Minify**
2. In **"JS Minify settings"**:
   - Stel "Minify method" in op "Manual"
   - Voeg jQuery toe als eerste bestand in lijst
   - Voeg QA Advisor scripts toe na jQuery

### Autoptimize

Met Autoptimize:

1. Ga naar **Instellingen > Autoptimize**
2. **"JS, CSS & HTML"** tab
3. In **"JavaScript Options"**:
   - Vink uit "Defer JavaScript"
   - OF voeg uitzonderingen toe:

**Uit te sluiten scripts:**
```
wp-includes/js/jquery/jquery.min.js
qa-heatmap-analytics
```

### LiteSpeed Cache

Voor LiteSpeed Cache:

1. Ga naar **LiteSpeed Cache > Page Optimization**
2. **"JS Settings"** tab
3. In **"JS Defer"**:
   - Schakel volledig uit
   - OF voeg uitzonderingen toe voor jQuery en QA Advisor

## Oplossingen voor Aangepaste Thema's

### functions.php Controleren

Als uw thema jQuery op een aangepaste manier laadt, controleer `functions.php` bestand:

```php
// PROBLEEM: Uitgesteld jQuery laden
wp_enqueue_script('jquery', 'path/to/jquery.js', array(), '1.0', true);

// OPLOSSING: Laad jQuery in header (false in plaats van true)
wp_enqueue_script('jquery', 'path/to/jquery.js', array(), '1.0', false);
```

### Script Laad Volgorde

Zorg ervoor dat scripts in juiste volgorde laden:

```php
function theme_scripts() {
    // 1. Eerst jQuery
    wp_enqueue_script('jquery');
    
    // 2. Daarna andere jQuery-afhankelijke scripts
    wp_enqueue_script('theme-script', 'theme.js', array('jquery'), '1.0', false);
}
add_action('wp_enqueue_scripts', 'theme_scripts');
```

## QA Advisor Configuratie

### Compatibiliteit Modus

QA Advisor biedt compatibiliteit modus voor problematische omgevingen:

1. Ga naar **QA Advisor > Instellingen**
2. **"Geavanceerd"** tab
3. Schakel **"jQuery Compatibiliteit Modus"** in
4. Sla instellingen op

### Geforceerd jQuery Laden

Indien nodig, kunt u QA Advisor dwingen zijn eigen jQuery kopie te laden:

```php
// Voeg toe aan wp-config.php
define('QAHM_FORCE_JQUERY', true);
```

### Initialisatie Vertraging

Voor sites met langzaam laden kunt u initialisatie vertragen:

```php
// Vertraag initialisatie met 2 seconden
define('QAHM_INIT_DELAY', 2000);
```

## Testen en Verificatie

### Handmatige Test

Na het toepassen van fixes:

1. **Wis alle cache** (plugins, browser, CDN)
2. **Herlaad pagina** in incognito modus
3. **Controleer console** op JavaScript fouten
4. **Test tracking** in real-time

### Automatische Test

QA Advisor bevat een test tool:

1. Ga naar **QA Advisor > Tools**
2. Klik **"jQuery Compatibiliteit Test"**
3. Volg automatische test instructies

### Functionaliteit Verificatie

Controleer of alle functionaliteiten werken:

- ✅ Paginaweergave tracking
- ✅ Klik registratie voor heatmaps
- ✅ Muis beweging tracking
- ✅ Admin interface functionaliteiten

## Geavanceerde Configuraties

### Voorwaardelijk Laden

Voor complexe sites kunt u voorwaardelijk laden configureren:

```php
function conditional_jquery_loading() {
    // Laad jQuery alleen waar nodig
    if (is_page() || is_single()) {
        wp_enqueue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'conditional_jquery_loading');
```

### Conflict Beheer

Om conflicten met andere plugins te beheren:

```php
// Los jQuery conflicten op
function resolve_jquery_conflicts() {
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'resolve_jquery_conflicts', 1);
```

## Doorlopende Monitoring

### Fout Logs

Schakel logging in om jQuery problemen te monitoren:

```php
// wp-config.php
define('QAHM_LOG_JQUERY_ERRORS', true);
```

### Automatische Notificaties

Configureer notificaties voor jQuery fouten:

1. Ga naar **QA Advisor > Instellingen > Notificaties**
2. Schakel **"JavaScript Fout Notificaties"** in
3. Voer uw email adres in

## Specifieke Problemen Oplossen

### Fout "$ is not defined"

```javascript
// Oplossing: Gebruik jQuery in plaats van $
jQuery(document).ready(function($) {
    // Uw code hier
});
```

### Conflicten met Andere Plugins

1. Schakel andere plugins tijdelijk uit
2. Test QA Advisor individueel
3. Schakel plugins één voor één in om conflicten te identificeren

### CDN Problemen

Als u CDN gebruikt voor jQuery:

```php
// Forceer lokaal jQuery laden
function force_local_jquery() {
    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', '/wp-includes/js/jquery/jquery.min.js');
        wp_enqueue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'force_local_jquery');
```

## Beste Praktijken

### Algemene Aanbevelingen

1. **Stel jQuery niet uit** tenzij absoluut noodzakelijk
2. **Test altijd** na script wijzigingen
3. **Houd jQuery up-to-date** voor veiligheid en compatibiliteit
4. **Documenteer wijzigingen** voor toekomstige referentie

### Prioriteit Volgorde

Bij het oplossen van jQuery problemen:

1. **Eerste**: Schakel defer uit voor jQuery
2. **Tweede**: Voeg uitzonderingen toe in optimalisatie plugins
3. **Derde**: Gebruik QA Advisor compatibiliteit modus
4. **Laatste**: Geforceerd jQuery laden

## Volgende Stappen

Na het oplossen van jQuery problemen:

1. **[Dashboard](/docs/user-manual/screens-and-operations/dashboard)** - Verken interface
2. **[Real-time Weergave](/docs/user-manual/screens-and-operations/realtime)** - Controleer tracking
3. **[Heatmaps](/docs/user-manual/screens-and-operations/heatmaps)** - Begin analyse

## Ondersteuning

Voor hardnekkige jQuery problemen:

- Raadpleeg [FAQ](/docs/faq) voor specifieke oplossingen
- Verstrek details over gebruikte thema en plugins
- Neem contact op met ondersteuning met JavaScript fout logs

---

Juist jQuery beheer is essentieel voor optimale QA Advisor functionaliteit en het voorkomen van conflicten met andere site componenten.
