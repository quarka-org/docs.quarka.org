---
sidebar_position: 5
---

# Quando Differire jQuery

Comprendi quando e come gestire il caricamento differito di jQuery per evitare conflitti con QA Advisor e garantire il corretto funzionamento del tracciamento.

## Panoramica

jQuery è una libreria JavaScript fondamentale utilizzata da molti plugin WordPress, incluso QA Advisor. Tuttavia, alcune ottimizzazioni delle prestazioni possono causare il caricamento differito (defer) di jQuery, il che può interferire con il corretto funzionamento del tracciamento di QA Advisor.

## Quando jQuery Defer Causa Problemi

### Sintomi Comuni

Se QA Advisor non funziona correttamente, potresti notare:

- **Nessun dato di tracciamento**: Le visualizzazioni pagina non vengono registrate
- **Mappe di calore vuote**: Nessun dato di clic o movimento mouse
- **Errori JavaScript**: Errori nella console del browser
- **Funzionalità mancanti**: Alcune funzionalità dell'interfaccia non funzionano

### Cause del Problema

Il problema si verifica quando:

1. **Plugin di ottimizzazione** differiscono jQuery
2. **Temi personalizzati** caricano jQuery in modo asincrono
3. **CDN o cache** modificano l'ordine di caricamento degli script
4. **Configurazioni server** ritardano il caricamento di jQuery

## Identificazione del Problema

### Controllo Console Browser

1. Apri gli strumenti sviluppatore del browser (F12)
2. Vai alla scheda "Console"
3. Ricarica la pagina
4. Cerca errori come:
   ```
   $ is not defined
   jQuery is not defined
   Cannot read property of undefined
   ```

### Test di Funzionalità

1. Vai a **QA Advisor > Tempo Reale**
2. Apri il tuo sito in una nuova scheda
3. Naviga tra le pagine
4. Se non vedi attività in tempo reale, potrebbe esserci un problema jQuery

### Controllo Codice Sorgente

Visualizza il codice sorgente della pagina e controlla:

```html
<!-- jQuery dovrebbe caricarsi PRIMA degli script QA Advisor -->
<script src="jquery.min.js"></script>
<script src="qa-advisor-tracking.js"></script>
```

## Soluzioni per Plugin di Ottimizzazione

### WP Rocket

Se utilizzi WP Rocket:

1. Vai a **Impostazioni > WP Rocket**
2. Scheda **"Ottimizzazione File"**
3. In **"JavaScript Files"**:
   - NON selezionare "Defer JavaScript execution"
   - OPPURE aggiungi eccezioni per QA Advisor

**Eccezioni da aggiungere:**
```
/wp-content/plugins/qa-heatmap-analytics/
jquery
```

### W3 Total Cache

Per W3 Total Cache:

1. Vai a **Performance > Minify**
2. In **"JS Minify settings"**:
   - Imposta "Minify method" su "Manual"
   - Aggiungi jQuery come primo file nella lista
   - Aggiungi gli script QA Advisor dopo jQuery

### Autoptimize

Con Autoptimize:

1. Vai a **Impostazioni > Autoptimize**
2. Scheda **"JS, CSS & HTML"**
3. In **"JavaScript Options"**:
   - Deseleziona "Defer JavaScript"
   - OPPURE aggiungi eccezioni:

**Script da escludere:**
```
wp-includes/js/jquery/jquery.min.js
qa-heatmap-analytics
```

### LiteSpeed Cache

Per LiteSpeed Cache:

1. Vai a **LiteSpeed Cache > Page Optimization**
2. Scheda **"JS Settings"**
3. In **"JS Defer"**:
   - Disabilita completamente
   - OPPURE aggiungi eccezioni per jQuery e QA Advisor

## Soluzioni per Temi Personalizzati

### Controllo functions.php

Se il tuo tema carica jQuery in modo personalizzato, controlla il file `functions.php`:

```php
// PROBLEMA: Caricamento jQuery differito
wp_enqueue_script('jquery', 'path/to/jquery.js', array(), '1.0', true);

// SOLUZIONE: Carica jQuery nell'header (false invece di true)
wp_enqueue_script('jquery', 'path/to/jquery.js', array(), '1.0', false);
```

### Ordine di Caricamento Script

Assicurati che gli script siano caricati nell'ordine corretto:

```php
function theme_scripts() {
    // 1. Prima jQuery
    wp_enqueue_script('jquery');
    
    // 2. Poi altri script che dipendono da jQuery
    wp_enqueue_script('theme-script', 'theme.js', array('jquery'), '1.0', false);
}
add_action('wp_enqueue_scripts', 'theme_scripts');
```

## Configurazione QA Advisor

### Modalità Compatibilità

QA Advisor offre una modalità compatibilità per ambienti problematici:

1. Vai a **QA Advisor > Impostazioni**
2. Scheda **"Avanzate"**
3. Abilita **"Modalità Compatibilità jQuery"**
4. Salva le impostazioni

### Caricamento Forzato jQuery

Se necessario, puoi forzare QA Advisor a caricare la propria copia di jQuery:

```php
// Aggiungi al wp-config.php
define('QAHM_FORCE_JQUERY', true);
```

### Ritardo Inizializzazione

Per siti con caricamento lento, puoi ritardare l'inizializzazione:

```php
// Ritarda inizializzazione di 2 secondi
define('QAHM_INIT_DELAY', 2000);
```

## Test e Verifica

### Test Manuale

Dopo aver applicato le correzioni:

1. **Svuota tutte le cache** (plugin, browser, CDN)
2. **Ricarica la pagina** in modalità incognito
3. **Controlla la console** per errori JavaScript
4. **Testa il tracciamento** in tempo reale

### Test Automatico

QA Advisor include uno strumento di test:

1. Vai a **QA Advisor > Strumenti**
2. Clicca su **"Test Compatibilità jQuery"**
3. Segui le istruzioni per il test automatico

### Verifica Funzionalità

Controlla che tutte le funzionalità funzionino:

- ✅ Tracciamento visualizzazioni pagina
- ✅ Registrazione clic per mappe di calore
- ✅ Tracciamento movimenti mouse
- ✅ Funzionalità interfaccia admin

## Configurazioni Avanzate

### Caricamento Condizionale

Per siti complessi, puoi configurare il caricamento condizionale:

```php
function conditional_jquery_loading() {
    // Carica jQuery solo dove necessario
    if (is_page() || is_single()) {
        wp_enqueue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'conditional_jquery_loading');
```

### Gestione Conflitti

Per gestire conflitti con altri plugin:

```php
// Risolvi conflitti jQuery
function resolve_jquery_conflicts() {
    wp_deregister_script('jquery');
    wp_register_script('jquery', 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js');
    wp_enqueue_script('jquery');
}
add_action('wp_enqueue_scripts', 'resolve_jquery_conflicts', 1);
```

## Monitoraggio Continuo

### Log degli Errori

Abilita il logging per monitorare problemi jQuery:

```php
// wp-config.php
define('QAHM_LOG_JQUERY_ERRORS', true);
```

### Notifiche Automatiche

Configura notifiche per errori jQuery:

1. Vai a **QA Advisor > Impostazioni > Notifiche**
2. Abilita **"Notifiche Errori JavaScript"**
3. Inserisci il tuo indirizzo email

## Risoluzione Problemi Specifici

### Errore "$ is not defined"

```javascript
// Soluzione: Usa jQuery invece di $
jQuery(document).ready(function($) {
    // Il tuo codice qui
});
```

### Conflitti con Altri Plugin

1. Disattiva temporaneamente altri plugin
2. Testa QA Advisor individualmente
3. Riattiva i plugin uno alla volta per identificare conflitti

### Problemi con CDN

Se utilizzi un CDN per jQuery:

```php
// Forza caricamento locale di jQuery
function force_local_jquery() {
    if (!is_admin()) {
        wp_deregister_script('jquery');
        wp_register_script('jquery', '/wp-includes/js/jquery/jquery.min.js');
        wp_enqueue_script('jquery');
    }
}
add_action('wp_enqueue_scripts', 'force_local_jquery');
```

## Best Practice

### Raccomandazioni Generali

1. **Non differire jQuery** a meno che non sia assolutamente necessario
2. **Testa sempre** dopo modifiche agli script
3. **Mantieni jQuery aggiornato** per sicurezza e compatibilità
4. **Documenta le modifiche** per riferimento futuro

### Ordine di Priorità

Quando risolvi problemi jQuery:

1. **Prima**: Disabilita defer per jQuery
2. **Seconda**: Aggiungi eccezioni nei plugin di ottimizzazione
3. **Terza**: Usa modalità compatibilità QA Advisor
4. **Ultima**: Caricamento forzato jQuery

## Prossimi Passi

Dopo aver risolto i problemi jQuery:

1. **[Pannello di Controllo](/docs/user-manual/screens-and-operations/dashboard)** - Esplora l'interfaccia
2. **[Vista in Tempo Reale](/docs/user-manual/screens-and-operations/realtime)** - Verifica il tracciamento
3. **[Mappe di Calore](/docs/user-manual/screens-and-operations/heatmaps)** - Inizia l'analisi

## Supporto

Per problemi persistenti con jQuery:

- Consulta la [FAQ](/docs/faq) per soluzioni specifiche
- Fornisci dettagli su tema e plugin utilizzati
- Contatta il supporto con log degli errori JavaScript

---

Una corretta gestione di jQuery è essenziale per il funzionamento ottimale di QA Advisor e per evitare conflitti con altri componenti del sito.
