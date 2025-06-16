---
sidebar_position: 4
---

# jQuery Defer Configuratie

Deze gids helpt u bij het oplossen van jQuery gerelateerde conflicten die kunnen optreden wanneer u jQuery defer/async laadt in combinatie met QA Advisor.

## Overzicht

QA Advisor is afhankelijk van jQuery voor verschillende functionaliteiten. Wanneer jQuery wordt gedeferd of asynchroon geladen, kan dit leiden tot timing problemen waarbij QA Advisor probeert te laden voordat jQuery beschikbaar is.

## Veelvoorkomende Problemen

### JavaScript Fouten

Typische foutmeldingen die u kunt tegenkomen:

```javascript
Uncaught ReferenceError: $ is not defined
Uncaught ReferenceError: jQuery is not defined
Uncaught TypeError: Cannot read property 'fn' of undefined
```

### Symptomen

- QA Advisor tracking werkt niet
- Heatmaps worden niet gegenereerd
- Dashboard toont geen data
- Console errors in browser developer tools

## Oplossingen

### Oplossing 1: jQuery Uitzondering Toevoegen

De meest effectieve oplossing is om jQuery uit te sluiten van defer/async loading.

#### Voor WP Rocket

```php
// Voeg toe aan functions.php van uw theme
function exclude_jquery_from_defer($tag, $handle) {
    if ('jquery-core' === $handle || 'jquery' === $handle) {
        return str_replace(' defer', '', $tag);
    }
    return $tag;
}
add_filter('script_loader_tag', 'exclude_jquery_from_defer', 10, 2);
```

#### Voor Autoptimize

```php
// Voeg toe aan functions.php
function autoptimize_exclude_jquery($exclude) {
    return $exclude . ', jquery, jquery-core, jquery-migrate';
}
add_filter('autoptimize_filter_js_exclude', 'autoptimize_exclude_jquery');
```

#### Voor WP Fastest Cache

```php
// Voeg toe aan functions.php
function wpfc_exclude_jquery_from_defer() {
    if (is_admin()) return;
    
    wp_script_add_data('jquery', 'defer', false);
    wp_script_add_data('jquery-core', 'defer', false);
    wp_script_add_data('jquery-migrate', 'defer', false);
}
add_action('wp_enqueue_scripts', 'wpfc_exclude_jquery_from_defer', 999);
```

### Oplossing 2: QA Advisor Script Prioriteit Aanpassen

Zorg ervoor dat QA Advisor scripts laden na jQuery:

```php
// Voeg toe aan functions.php
function qa_advisor_script_priority() {
    // Verhoog prioriteit van QA Advisor scripts
    wp_script_add_data('qa-advisor-frontend', 'defer', true);
    wp_script_add_data('qa-advisor-heatmap', 'defer', true);
}
add_action('wp_enqueue_scripts', 'qa_advisor_script_priority', 999);
```

### Oplossing 3: jQuery Ready Check

Implementeer een jQuery ready check in uw theme:

```javascript
// Voeg toe aan uw theme's JavaScript
function waitForJQuery(callback) {
    if (typeof jQuery !== 'undefined') {
        callback();
    } else {
        setTimeout(function() {
            waitForJQuery(callback);
        }, 50);
    }
}

// Gebruik voor QA Advisor initialisatie
waitForJQuery(function() {
    // QA Advisor code hier
    if (typeof QAAdvisor !== 'undefined') {
        QAAdvisor.init();
    }
});
```

## Plugin-Specifieke Configuraties

### WP Rocket Configuratie

1. **Ga naar WP Rocket Instellingen**
   - Navigeer naar `Instellingen > WP Rocket`
   - Ga naar het "File Optimization" tabblad

2. **JavaScript Optimalisatie**
   - Schakel "Load JavaScript deferred" in
   - Voeg jQuery toe aan de uitsluitingslijst:
   ```
   jquery
   jquery-core
   jquery-migrate
   qa-advisor-frontend
   qa-advisor-heatmap
   ```

3. **Geavanceerde Instellingen**
   ```php
   // In wp-config.php
   define('WP_ROCKET_EXCLUDE_DEFER_JS', 'jquery, jquery-core, jquery-migrate');
   ```

### Autoptimize Configuratie

1. **JavaScript Opties**
   - Ga naar `Instellingen > Autoptimize`
   - Klik op "JavaScript Options"

2. **Uitsluitingen Toevoegen**
   ```
   jquery, jquery-core, jquery-migrate, qa-advisor-frontend, qa-advisor-heatmap
   ```

3. **Geavanceerde Configuratie**
   ```php
   // Custom configuratie
   function custom_autoptimize_config() {
       return 'jquery, jquery-core, jquery-migrate, qa-advisor';
   }
   add_filter('autoptimize_filter_js_exclude', 'custom_autoptimize_config');
   ```

### W3 Total Cache Configuratie

1. **Minify Instellingen**
   - Ga naar `Performance > Minify`
   - Schakel "Auto" mode uit voor JavaScript

2. **Handmatige Configuratie**
   - Voeg jQuery toe aan "Never minify the following JS files":
   ```
   wp-includes/js/jquery/jquery.js
   wp-includes/js/jquery/jquery-migrate.js
   ```

## Geavanceerde Oplossingen

### Custom jQuery Loading

Voor complexe scenarios kunt u jQuery handmatig laden:

```php
// Voeg toe aan functions.php
function custom_jquery_loading() {
    if (!is_admin()) {
        // Dequeue WordPress jQuery
        wp_dequeue_script('jquery');
        wp_deregister_script('jquery');
        
        // Enqueue jQuery zonder defer
        wp_enqueue_script(
            'jquery',
            'https://code.jquery.com/jquery-3.6.0.min.js',
            array(),
            '3.6.0',
            false // Load in header, not deferred
        );
    }
}
add_action('wp_enqueue_scripts', 'custom_jquery_loading', 1);
```

### Conditional Loading

Laad jQuery alleen wanneer QA Advisor actief is:

```php
function conditional_jquery_loading() {
    if (is_plugin_active('qa-advisor/qa-advisor.php')) {
        // Zorg ervoor dat jQuery niet wordt gedeferd
        wp_script_add_data('jquery', 'defer', false);
        wp_script_add_data('jquery-core', 'defer', false);
    }
}
add_action('wp_enqueue_scripts', 'conditional_jquery_loading', 999);
```

## Testing en Verificatie

### Browser Console Check

Test of jQuery correct laadt:

```javascript
// Open browser console en voer uit:
console.log(typeof jQuery);
console.log(typeof $);

// Beide moeten "function" retourneren
```

### QA Advisor Status Check

Controleer QA Advisor functionaliteit:

```javascript
// In browser console:
console.log(typeof QAAdvisor);
console.log(QAAdvisor.isInitialized);

// Controleer of tracking werkt:
QAAdvisor.trackEvent('test', 'manual_test');
```

### Network Tab Analyse

1. Open browser Developer Tools
2. Ga naar Network tab
3. Reload de pagina
4. Controleer laadvolgorde:
   - jQuery moet voor QA Advisor scripts laden
   - Geen 404 errors voor JavaScript bestanden

## Troubleshooting

### Probleem: Scripts Laden Niet

**Symptomen**: Geen JavaScript errors, maar QA Advisor werkt niet

**Oplossing**:
```php
// Debug script loading
function debug_script_loading() {
    global $wp_scripts;
    if (current_user_can('administrator')) {
        echo '<pre>';
        print_r($wp_scripts->queue);
        echo '</pre>';
    }
}
add_action('wp_footer', 'debug_script_loading');
```

### Probleem: Conflicten met Andere Plugins

**Symptomen**: QA Advisor werkt, maar andere plugins falen

**Oplossing**:
```php
// Selectieve jQuery defer
function selective_jquery_defer($tag, $handle) {
    $no_defer_scripts = array(
        'jquery',
        'jquery-core', 
        'jquery-migrate',
        'qa-advisor-frontend'
    );
    
    if (in_array($handle, $no_defer_scripts)) {
        return str_replace(' defer', '', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'selective_jquery_defer', 10, 2);
```

### Probleem: Performance Impact

**Symptomen**: Pagina laadt langzamer na jQuery uitsluitingen

**Oplossing**:
```php
// Optimaliseer jQuery loading
function optimize_jquery_loading() {
    if (!is_admin() && !wp_script_is('jquery', 'done')) {
        wp_enqueue_script(
            'jquery',
            'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
            array(),
            '3.6.0',
            false
        );
    }
}
add_action('wp_enqueue_scripts', 'optimize_jquery_loading', 1);
```

## Best Practices

### 1. Test Grondig
- Test op verschillende browsers
- Controleer mobile compatibility
- Verifieer alle QA Advisor functies

### 2. Monitor Performance
- Gebruik tools zoals GTmetrix of PageSpeed Insights
- Monitor laadtijden voor en na wijzigingen
- Controleer Core Web Vitals impact

### 3. Documenteer Wijzigingen
- Houd bij welke wijzigingen u heeft gemaakt
- Documenteer plugin-specifieke configuraties
- Maak backups voor wijzigingen

## Volgende Stappen

Na het oplossen van jQuery conflicten:

1. **[Data Limieten Instellen](./set-data-limit-wpconfig.md)** - Configureer data opslag
2. **[Dashboard Verkennen](../2-screens-and-operations/01-dashboard.md)** - Begin met QA Advisor
3. **[Instellingen](../2-screens-and-operations/11-settings.md)** - Configureer geavanceerde opties

Uw jQuery configuratie is nu geoptimaliseerd voor QA Advisor!
