---
sidebar_position: 4
---

# Quand Différer jQuery

Cette page explique comment gérer QA Advisor lorsque jQuery est différé ou chargé de manière asynchrone sur votre site WordPress.

## Vue d'ensemble

De nombreux plugins d'optimisation des performances différent le chargement de jQuery pour améliorer les temps de chargement des pages. Cependant, QA Advisor dépend de jQuery pour certaines fonctionnalités, ce qui peut causer des problèmes si jQuery n'est pas disponible au moment où QA Advisor se charge.

## Problèmes Courants

### Symptômes

Lorsque jQuery est différé, vous pourriez rencontrer :

- Erreurs JavaScript dans la console du navigateur
- Fonctionnalités de suivi qui ne fonctionnent pas
- Heatmaps qui ne s'affichent pas correctement
- Données de session incomplètes

### Messages d'Erreur Typiques

```javascript
Uncaught ReferenceError: $ is not defined
Uncaught ReferenceError: jQuery is not defined
Uncaught TypeError: Cannot read property 'fn' of undefined
```

## Solutions

### Solution 1 : Exclure QA Advisor du Différé

La solution la plus simple est d'exclure les scripts QA Advisor du différé jQuery.

#### Avec WP Rocket

1. Allez dans **Paramètres → WP Rocket**
2. Cliquez sur l'onglet **Optimisation des fichiers**
3. Dans **JavaScript**, trouvez **Charger JavaScript de façon différée**
4. Ajoutez ces exclusions dans **Scripts exclus** :

```
/wp-content/plugins/qa-advisor/js/qahm.js
/wp-content/plugins/qa-advisor/js/qahm-admin.js
jquery
```

#### Avec Autoptimize

1. Allez dans **Paramètres → Autoptimize**
2. Dans l'onglet **JavaScript**
3. Ajoutez à **Exclure les scripts de l'optimisation** :

```
wp-content/plugins/qa-advisor/js/qahm.js, jquery
```

#### Avec W3 Total Cache

1. Allez dans **Performance → Minify**
2. Dans **JS**, section **Operations**
3. Ajoutez à **Never minify the following JS files** :

```
wp-content/plugins/qa-advisor/js/qahm.js
wp-includes/js/jquery/jquery.js
```

### Solution 2 : Configuration Manuelle dans le Thème

Ajoutez ce code au fichier `functions.php` de votre thème :

```php
function qahm_ensure_jquery_loaded() {
    // S'assurer que jQuery est chargé avant QA Advisor
    if (is_admin()) return;
    
    wp_enqueue_script('jquery');
    
    // Forcer jQuery à se charger dans le header
    global $wp_scripts;
    $wp_scripts->add_data('jquery', 'group', 0);
    $wp_scripts->add_data('jquery-core', 'group', 0);
    $wp_scripts->add_data('jquery-migrate', 'group', 0);
}
add_action('wp_enqueue_scripts', 'qahm_ensure_jquery_loaded', 1);

// Exclure QA Advisor du différé jQuery
function qahm_exclude_from_defer($tag, $handle, $src) {
    // Scripts QA Advisor à ne pas différer
    $exclude_handles = array(
        'qahm-tracking',
        'qahm-heatmap',
        'jquery',
        'jquery-core',
        'jquery-migrate'
    );
    
    if (in_array($handle, $exclude_handles)) {
        return str_replace(' defer', '', $tag);
    }
    
    return $tag;
}
add_filter('script_loader_tag', 'qahm_exclude_from_defer', 10, 3);
```

### Solution 3 : Mode Autonome QA Advisor

QA Advisor peut fonctionner sans jQuery en mode autonome :

```php
// Dans wp-config.php
define('QAHM_NO_JQUERY_MODE', true);
```

Cette option :
- Désactive les fonctionnalités dépendantes de jQuery
- Utilise du JavaScript vanilla pour le suivi de base
- Peut limiter certaines fonctionnalités avancées

## Configuration Avancée

### Détection Automatique de jQuery

Ajoutez ce code pour détecter automatiquement si jQuery est disponible :

```javascript
// Script personnalisé à ajouter après QA Advisor
(function() {
    function initQAHM() {
        if (typeof jQuery !== 'undefined') {
            // jQuery est disponible, initialiser normalement
            if (typeof QAHM !== 'undefined') {
                QAHM.init();
            }
        } else {
            // jQuery n'est pas disponible, réessayer après 100ms
            setTimeout(initQAHM, 100);
        }
    }
    
    // Attendre que le DOM soit prêt
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQAHM);
    } else {
        initQAHM();
    }
})();
```

### Chargement Conditionnel

Pour charger QA Advisor seulement quand jQuery est disponible :

```php
function qahm_conditional_loading() {
    ?>
    <script>
    (function() {
        function loadQAHM() {
            if (typeof jQuery !== 'undefined') {
                // Charger QA Advisor
                var script = document.createElement('script');
                script.src = '<?php echo plugins_url('js/qahm.js', __FILE__); ?>';
                document.head.appendChild(script);
            } else {
                // Réessayer après 50ms
                setTimeout(loadQAHM, 50);
            }
        }
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', loadQAHM);
        } else {
            loadQAHM();
        }
    })();
    </script>
    <?php
}
add_action('wp_head', 'qahm_conditional_loading', 20);
```

## Tests et Vérification

### Vérifier le Fonctionnement

1. **Ouvrez les outils de développement** de votre navigateur
2. **Rechargez la page** et vérifiez l'onglet Console
3. **Recherchez les erreurs** liées à jQuery ou QA Advisor
4. **Testez les fonctionnalités** :
   - Clic sur des éléments
   - Défilement de page
   - Changement de page

### Tests Automatisés

Utilisez ce script pour tester automatiquement :

```javascript
// Test de fonctionnement QA Advisor
function testQAHM() {
    console.log('Test QA Advisor...');
    
    // Vérifier jQuery
    if (typeof jQuery === 'undefined') {
        console.error('jQuery non disponible');
        return false;
    }
    
    // Vérifier QA Advisor
    if (typeof QAHM === 'undefined') {
        console.error('QA Advisor non chargé');
        return false;
    }
    
    // Vérifier le suivi
    if (typeof QAHM.track === 'function') {
        console.log('QA Advisor fonctionne correctement');
        return true;
    }
    
    console.error('Fonctions QA Advisor non disponibles');
    return false;
}

// Exécuter le test après chargement
setTimeout(testQAHM, 2000);
```

## Plugins d'Optimisation Spécifiques

### Flying Press

```php
// Exclure QA Advisor de l'optimisation
add_filter('flying_press_exclude_js', function($exclude_js) {
    $exclude_js[] = 'qa-advisor';
    $exclude_js[] = 'qahm';
    return $exclude_js;
});
```

### LiteSpeed Cache

1. Allez dans **LiteSpeed Cache → Optimisation des pages**
2. Dans **Optimisation JS**, ajoutez à **Exclusions JS** :

```
wp-content/plugins/qa-advisor/js/qahm.js
```

### SG Optimizer

1. Allez dans **SG Optimizer → Frontend**
2. Dans **JavaScript**, ajoutez à **Exclude from JavaScript Optimization** :

```
qa-advisor
qahm
```

## Résolution de Problèmes

### jQuery se Charge Mais QA Advisor Ne Fonctionne Pas

1. Vérifiez l'ordre de chargement des scripts
2. Assurez-vous que QA Advisor se charge après jQuery
3. Vérifiez les conflits avec d'autres plugins

### Performances Impactées

Si exclure jQuery du différé impacte les performances :

1. Utilisez le mode autonome QA Advisor
2. Chargez jQuery de manière asynchrone mais avant QA Advisor
3. Optimisez d'autres aspects de votre site

## Étapes Suivantes

Une fois jQuery et QA Advisor configurés correctement :

1. [Explorez le tableau de bord](/docs/user-manual/screens-and-operations/dashboard)
2. [Configurez vos premiers objectifs](/docs/user-manual/screens-and-operations/goals)
3. [Apprenez à utiliser les heatmaps](/docs/user-manual/screens-and-operations/heatmaps)
