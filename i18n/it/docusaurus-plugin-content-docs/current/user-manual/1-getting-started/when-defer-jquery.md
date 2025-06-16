---
sidebar_position: 4
---

# Quando Differire jQuery

Questa guida spiega come gestire i conflitti di jQuery e quando utilizzare il differimento per garantire la compatibilità ottimale di QA Advisor con il tuo tema e altri plugin WordPress.

## Panoramica del Problema

### Cos'è il Differimento jQuery?
Il differimento jQuery è una tecnica che ritarda il caricamento di jQuery fino a quando tutti gli altri script sono stati caricati. Questo può causare problemi con QA Advisor se non gestito correttamente.

### Quando si Verifica il Problema?
- **Plugin di Ottimizzazione**: WP Rocket, Autoptimize, W3 Total Cache
- **Temi Ottimizzati**: Temi che differiscono jQuery per prestazioni
- **CDN Configurazioni**: Caricamento jQuery da CDN esterni
- **Script Personalizzati**: Codice che modifica l'ordine di caricamento

## Identificazione del Problema

### Sintomi Comuni
- Heatmap non si caricano
- Dashboard QA Advisor non risponde
- Errori JavaScript nella console
- Dati di tracking non vengono raccolti

### Verifica Console Browser
Apri la console del browser (F12) e cerca errori come:
```javascript
Uncaught ReferenceError: $ is not defined
Uncaught ReferenceError: jQuery is not defined
qahm_tracker is not defined
```

### Test Rapido
```javascript
// Esegui nella console del browser
console.log(typeof jQuery);
console.log(typeof $);
// Dovrebbero restituire "function", non "undefined"
```

## Soluzioni per Plugin di Ottimizzazione

### WP Rocket

#### Configurazione Esclusioni
```
WP Rocket > Ottimizzazione File > JavaScript
- Escludi file JavaScript: 
  /wp-content/plugins/qa-heatmap-analytics/assets/js/
  
- Non ottimizzare JavaScript:
  qa-heatmap-analytics
  qahm-tracker
```

#### Esclusioni Specifiche
```javascript
// File da escludere dalla minificazione
/wp-content/plugins/qa-heatmap-analytics/assets/js/tracking.js
/wp-content/plugins/qa-heatmap-analytics/assets/js/heatmap.js
/wp-content/plugins/qa-heatmap-analytics/assets/js/dashboard.js
```

### Autoptimize

#### Impostazioni JavaScript
```
Autoptimize > JavaScript Options
- Escludi script dall'ottimizzazione:
  qa-heatmap-analytics, qahm-tracker, jquery

- Non aggregare ma differire:
  ✓ Attivo per script QA Advisor
```

#### Configurazione Avanzata
```php
// wp-config.php o functions.php
add_filter('autoptimize_filter_js_exclude', function($exclude) {
    return $exclude . ', qa-heatmap-analytics, qahm-tracker';
});
```

### W3 Total Cache

#### Configurazione Minify
```
Performance > Minify > JavaScript
- Metodo minify: Manual
- Operazioni JS: Combine only
- Escludi file:
  wp-content/plugins/qa-heatmap-analytics/assets/js/*
```

### LiteSpeed Cache

#### Ottimizzazione JS
```
LiteSpeed Cache > Ottimizzazione Pagina > JS
- Minifica JS: ON
- Escludi da minificazione:
  qa-heatmap-analytics
  
- Combina JS: OFF (per QA Advisor)
```

## Soluzioni per Temi

### Temi che Differiscono jQuery

#### Metodo 1: Hook WordPress
```php
// functions.php del tema
function fix_qahm_jquery_dependency() {
    if (is_admin()) return;
    
    // Assicura che jQuery sia caricato prima di QA Advisor
    wp_dequeue_script('jquery');
    wp_enqueue_script('jquery', includes_url('/js/jquery/jquery.min.js'), array(), false, false);
}
add_action('wp_enqueue_scripts', 'fix_qahm_jquery_dependency', 1);
```

#### Metodo 2: Forza Caricamento Header
```php
// functions.php del tema
function force_jquery_header() {
    if (!is_admin()) {
        wp_enqueue_script('jquery');
        wp_script_add_data('jquery', 'group', 0); // Carica nell'header
    }
}
add_action('wp_enqueue_scripts', 'force_jquery_header', 1);
```

### Temi Popolari

#### Astra Theme
```php
// Compatibilità Astra + QA Advisor
add_action('wp_enqueue_scripts', function() {
    if (function_exists('astra_get_option')) {
        // Disabilita differimento jQuery per QA Advisor
        remove_action('wp_enqueue_scripts', 'astra_defer_jquery');
    }
}, 1);
```

#### GeneratePress
```php
// Compatibilità GeneratePress + QA Advisor
add_filter('generate_defer_jquery', function($defer) {
    // Non differire jQuery se QA Advisor è attivo
    if (is_plugin_active('qa-heatmap-analytics/qa-heatmap-analytics.php')) {
        return false;
    }
    return $defer;
});
```

#### Divi Theme
```php
// Compatibilità Divi + QA Advisor
add_action('wp_enqueue_scripts', function() {
    if (function_exists('et_divi_fonts_url')) {
        // Assicura ordine corretto caricamento script
        wp_enqueue_script('jquery');
        wp_enqueue_script('divi-custom-script', get_template_directory_uri() . '/js/custom.js', array('jquery'), '1.0.0', true);
    }
}, 5);
```

## Configurazione QA Advisor

### Opzioni Plugin

#### Modalità Compatibilità
```php
// wp-config.php - Abilita modalità compatibilità
define('QAHM_COMPATIBILITY_MODE', true);
define('QAHM_FORCE_JQUERY_HEADER', true);
define('QAHM_DEFER_SCRIPTS', false);
```

#### Caricamento Script Personalizzato
```php
// wp-config.php - Controllo caricamento script
define('QAHM_SCRIPT_POSITION', 'header'); // header o footer
define('QAHM_JQUERY_VERSION', 'wordpress'); // wordpress, cdn, custom
```

### Impostazioni Dashboard

#### Pannello Compatibilità
```
QA Advisor > Impostazioni > Compatibilità
- Modalità Compatibilità jQuery: ✓ Attiva
- Forza jQuery nell'Header: ✓ Attiva
- Ritarda Caricamento Script: ✗ Disattiva
- Debug Conflitti JavaScript: ✓ Attiva (temporaneo)
```

## Soluzioni Avanzate

### Script Personalizzato

#### Wrapper jQuery Sicuro
```javascript
// Aggiungi al tema o plugin personalizzato
(function($) {
    'use strict';
    
    // Assicura che jQuery sia disponibile per QA Advisor
    if (typeof $ === 'undefined' || typeof jQuery === 'undefined') {
        console.warn('jQuery non disponibile per QA Advisor');
        return;
    }
    
    // Inizializza QA Advisor quando jQuery è pronto
    $(document).ready(function() {
        if (typeof qahm_tracker !== 'undefined') {
            qahm_tracker.init();
        }
    });
    
})(jQuery);
```

#### Caricamento Condizionale
```php
// functions.php - Caricamento condizionale jQuery
function conditional_jquery_loading() {
    // Controlla se QA Advisor è attivo
    if (is_plugin_active('qa-heatmap-analytics/qa-heatmap-analytics.php')) {
        // Forza jQuery standard WordPress
        wp_deregister_script('jquery');
        wp_register_script('jquery', includes_url('/js/jquery/jquery.min.js'), false, null, false);
        wp_enqueue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'conditional_jquery_loading', 1);
```

### CDN e Caricamento Esterno

#### jQuery da CDN
```php
// functions.php - jQuery da CDN con fallback
function enqueue_jquery_cdn() {
    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js', false, '3.6.0', false);
        wp_enqueue_script('jquery');
        
        // Fallback locale
        add_action('wp_head', function() {
            echo '<script>window.jQuery || document.write(\'<script src="' . includes_url('/js/jquery/jquery.min.js') . '"><\/script>\')</script>';
        });
    }
}
add_action('wp_enqueue_scripts', 'enqueue_jquery_cdn', 1);
```

## Test e Verifica

### Strumenti di Test

#### Console Browser
```javascript
// Test disponibilità jQuery
console.log('jQuery version:', jQuery.fn.jquery);
console.log('$ available:', typeof $ !== 'undefined');
console.log('QA Advisor tracker:', typeof qahm_tracker !== 'undefined');
```

#### Plugin di Debug
Installa plugin come:
- **Query Monitor** - Mostra ordine caricamento script
- **Debug Bar** - Informazioni debug dettagliate
- **Script Debug** - Analisi conflitti JavaScript

### Test Automatizzato
```php
// Aggiungi al functions.php per test
function qahm_jquery_compatibility_test() {
    if (current_user_can('administrator') && isset($_GET['qahm_test'])) {
        ?>
        <script>
        jQuery(document).ready(function($) {
            console.log('✓ jQuery caricato correttamente');
            console.log('✓ $ disponibile');
            
            if (typeof qahm_tracker !== 'undefined') {
                console.log('✓ QA Advisor tracker disponibile');
            } else {
                console.error('✗ QA Advisor tracker non disponibile');
            }
        });
        </script>
        <?php
    }
}
add_action('wp_footer', 'qahm_jquery_compatibility_test');
```

## Risoluzione Problemi Specifici

### Errore: "$ is not defined"

#### Soluzione 1: Wrapper jQuery
```javascript
// Sostituisci $ con jQuery
jQuery(document).ready(function($) {
    // Il tuo codice qui
});
```

#### Soluzione 2: Alias Sicuro
```javascript
// Crea alias sicuro
var $j = jQuery.noConflict();
$j(document).ready(function() {
    // Usa $j invece di $
});
```

### Errore: "qahm_tracker is not defined"

#### Verifica Caricamento
```php
// functions.php - Debug caricamento script
add_action('wp_footer', function() {
    if (current_user_can('administrator')) {
        echo '<script>console.log("Scripts caricati:", Object.keys(window));</script>';
    }
});
```

### Conflitti con Altri Plugin

#### Identificazione Conflitti
```php
// Disattiva temporaneamente altri plugin
// Test con solo QA Advisor attivo
// Riattiva plugin uno alla volta per identificare conflitto
```

## Best Practices

### Ordine di Caricamento
1. **jQuery Core** (sempre per primo)
2. **jQuery UI** (se necessario)
3. **Script Tema**
4. **Script Plugin**
5. **QA Advisor Scripts**

### Configurazione Raccomandata
```php
// wp-config.php - Configurazione ottimale
define('QAHM_JQUERY_COMPATIBILITY', true);
define('QAHM_SCRIPT_DEBUG', false); // Solo per produzione
define('QAHM_DEFER_SCRIPTS', false);
```

### Monitoraggio Continuo
- Controlla regolarmente la console browser
- Monitora funzionalità heatmap
- Verifica raccolta dati analytics
- Test dopo aggiornamenti tema/plugin

## Prossimi Passi

Dopo aver risolto i conflitti jQuery:

1. **[Configurazione Limiti Dati](./set-data-limit-wpconfig.md)** - Ottimizza raccolta dati
2. **[Dashboard](../2-screens-and-operations/01-dashboard.md)** - Esplora le funzionalità
3. **[Heatmap](../2-screens-and-operations/heatmaps.md)** - Configura visualizzazioni

Una corretta gestione di jQuery garantisce che QA Advisor funzioni perfettamente con qualsiasi configurazione WordPress!
