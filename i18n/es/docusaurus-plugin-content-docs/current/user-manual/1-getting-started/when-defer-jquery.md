---
sidebar_position: 3
---

# Cuando jQuery está Diferido

Si su sitio utiliza la carga diferida (defer) de jQuery, necesitará realizar ajustes adicionales para asegurar que QA Advisor funcione correctamente.

## ¿Qué es la Carga Diferida de jQuery?

La carga diferida de jQuery es una técnica de optimización que retrasa la ejecución de jQuery hasta que el DOM esté completamente cargado. Esto puede mejorar los tiempos de carga de la página, pero puede causar problemas con plugins que dependen de jQuery.

## Identificar si jQuery está Diferido

### Verificación en el Código Fuente

1. **Inspeccione el Código Fuente**
   - Presione `Ctrl+U` (o `Cmd+U` en Mac) para ver el código fuente
   - Busque la etiqueta script de jQuery
   - Si ve `defer` en la etiqueta, jQuery está diferido:
     ```html
     <script src="jquery.min.js" defer></script>
     ```

2. **Verifique la Consola del Navegador**
   - Presione F12 para abrir las herramientas de desarrollador
   - En la pestaña Console, escriba: `typeof jQuery`
   - Si devuelve "undefined" al cargar la página, jQuery puede estar diferido

### Síntomas Comunes

- QA Advisor no registra datos
- Errores JavaScript relacionados con `$` o `jQuery`
- Los mapas de calor no se generan
- La funcionalidad de tiempo real no funciona

## Soluciones

### Solución 1: Excluir Scripts de QA Advisor de la Optimización

Esta es la solución más recomendada:

#### Para WP Rocket

1. **Acceda a Configuración**
   - Vaya a **Configuración** → **WP Rocket**
   - Pestaña **Optimización de Archivos**

2. **Excluya Scripts de QA Advisor**
   - En **Archivos JavaScript excluidos**, agregue:
     ```
     /wp-content/plugins/qa-heatmap-analytics/js/qahm
     /wp-content/plugins/qa-heatmap-analytics/js/qahmz
     jquery
     ```

#### Para Autoptimize

1. **Configuración de JavaScript**
   - Vaya a **Configuración** → **Autoptimize**
   - En **Configuración de JavaScript**

2. **Scripts Excluidos**
   - En el campo "Excluir scripts de Autoptimize", agregue:
     ```
     qa-heatmap-analytics, jquery
     ```

#### Para WP Fastest Cache

1. **Configuración de Minificación**
   - Vaya a **WP Fastest Cache** → **Configuración**
   - Desmarque "Combinar JS" temporalmente para probar

### Solución 2: Modificar la Configuración de jQuery

Si controla la configuración de jQuery:

#### Método wp_enqueue_script

Agregue esto a su `functions.php`:

```php
function qa_advisor_fix_jquery_defer() {
    // Remover defer de jQuery cuando QA Advisor esté activo
    if (is_plugin_active('qa-heatmap-analytics/qa-heatmap-analytics.php')) {
        wp_script_add_data('jquery-core', 'defer', false);
        wp_script_add_data('jquery', 'defer', false);
    }
}
add_action('wp_enqueue_scripts', 'qa_advisor_fix_jquery_defer', 1);
```

#### Configuración Manual

Si está usando un plugin de optimización personalizado:

```javascript
// Asegurar que jQuery esté disponible antes de QA Advisor
if (typeof jQuery === 'undefined') {
    // Cargar jQuery sincrónicamente para QA Advisor
    document.addEventListener('DOMContentLoaded', function() {
        // Inicializar QA Advisor después de que jQuery esté disponible
        if (typeof qahm !== 'undefined') {
            qahm.init();
        }
    });
}
```

### Solución 3: Configuración Avanzada

Para desarrolladores experimentados:

#### Hook Personalizado

Agregue esto a su tema o plugin personalizado:

```php
function qa_advisor_jquery_compatibility() {
    if (is_admin()) return;
    
    // Detectar si QA Advisor está activo
    if (class_exists('QAHM_Admin')) {
        // Asegurar que jQuery se cargue antes que QA Advisor
        wp_enqueue_script('jquery');
        
        // Agregar script inline para verificar jQuery
        $inline_script = "
        (function() {
            function waitForJQuery() {
                if (typeof jQuery !== 'undefined') {
                    // jQuery está disponible, inicializar QA Advisor
                    if (typeof qahm !== 'undefined') {
                        qahm.init();
                    }
                } else {
                    // Esperar un poco más
                    setTimeout(waitForJQuery, 50);
                }
            }
            waitForJQuery();
        })();
        ";
        
        wp_add_inline_script('jquery', $inline_script);
    }
}
add_action('wp_enqueue_scripts', 'qa_advisor_jquery_compatibility', 5);
```

## Verificación de la Solución

### Pruebas a Realizar

1. **Verificar Carga de Scripts**
   - Abra las herramientas de desarrollador (F12)
   - Pestaña Network → Reload la página
   - Confirme que los scripts de QA Advisor se cargan sin errores

2. **Probar Funcionalidad**
   - Navegue a **QA Advisor** → **Tiempo Real**
   - Abra su sitio en una ventana de incógnito
   - Verifique que aparezca actividad en tiempo real

3. **Verificar Consola**
   - No debe haber errores JavaScript relacionados con jQuery o QA Advisor
   - Escriba `typeof qahm` en la consola - debe devolver "object"

### Herramientas de Diagnóstico

#### Script de Verificación

Agregue temporalmente este código a su sitio para diagnosticar:

```javascript
console.log('jQuery disponible:', typeof jQuery !== 'undefined');
console.log('QA Advisor disponible:', typeof qahm !== 'undefined');
console.log('Orden de carga:', {
    jquery: !!window.jQuery,
    qahm: !!window.qahm,
    timestamp: new Date().getTime()
});
```

## Configuraciones Específicas por Plugin

### Litespeed Cache

1. **Configuración de JS**
   - Vaya a **Litespeed Cache** → **Optimización de Página**
   - En **Configuración de JS**, agregue a "Excluir JS":
     ```
     qa-heatmap-analytics
     jquery
     ```

### SG Optimizer

1. **Configuración de JavaScript**
   - Vaya a **SG Optimizer** → **Frontend**
   - Desactive "Combinar archivos JavaScript" o
   - Agregue excepciones para QA Advisor

### Hummingbird

1. **Configuración de Minificación**
   - Vaya a **Hummingbird** → **Minificar**
   - En la lista de archivos JavaScript, desactive la minificación para:
     - Scripts de jQuery
     - Scripts de QA Advisor

## Solución de Problemas Avanzada

### Problemas Persistentes

Si las soluciones anteriores no funcionan:

1. **Verificar Orden de Carga**
   ```php
   // Agregar a functions.php para debugging
   function debug_script_order() {
       global $wp_scripts;
       if (is_admin()) return;
       
       echo '<script>console.log("Scripts registrados:", ' . 
            json_encode(array_keys($wp_scripts->registered)) . ');</script>';
   }
   add_action('wp_footer', 'debug_script_order');
   ```

2. **Forzar Orden Específico**
   ```php
   function force_qa_advisor_after_jquery() {
       wp_enqueue_script('jquery');
       
       // Asegurar que QA Advisor se cargue después de jQuery
       wp_enqueue_script('qa-advisor-fix', '', array('jquery'), '1.0', true);
   }
   add_action('wp_enqueue_scripts', 'force_qa_advisor_after_jquery', 1);
   ```

### Contactar Soporte

Si continúa experimentando problemas:

1. **Información a Proporcionar**
   - Plugin de optimización utilizado
   - Versión de WordPress y PHP
   - Lista de plugins activos
   - Errores de consola específicos

2. **Contacto**
   - Email: [support@quarka.org](mailto:support@quarka.org)
   - Incluya capturas de pantalla de errores de consola

---

Una vez resueltos los problemas de jQuery, proceda a configurar [Límites de Datos](/docs/user-manual/getting-started/set-data-limit-wpconfig) si es necesario.
