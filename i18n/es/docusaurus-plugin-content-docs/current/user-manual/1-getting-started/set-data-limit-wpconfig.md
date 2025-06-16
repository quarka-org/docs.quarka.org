---
sidebar_position: 4
---

# Configurar Límite de Datos en wp-config.php

QA Advisor incluye un límite mensual de recolección de datos por defecto para optimizar el rendimiento. Esta guía le muestra cómo personalizar estos límites según sus necesidades.

## Límites por Defecto

QA Advisor viene configurado con los siguientes límites predeterminados:

- **Páginas vistas mensuales**: 1,000
- **Sesiones mensuales**: 500
- **Eventos mensuales**: 2,000

Estos límites se reinician automáticamente el primer día de cada mes.

## ¿Por qué Existen Límites?

Los límites de datos sirven para:

1. **Optimización del Rendimiento**
   - Prevenir el uso excesivo de recursos del servidor
   - Mantener la velocidad de carga del sitio
   - Evitar problemas de memoria en hosting compartido

2. **Gestión de Base de Datos**
   - Controlar el crecimiento de la base de datos
   - Mantener consultas rápidas y eficientes
   - Prevenir problemas de almacenamiento

3. **Experiencia del Usuario**
   - Asegurar que el sitio funcione sin interrupciones
   - Mantener tiempos de respuesta rápidos

## Modificar Límites en wp-config.php

### Ubicación del Archivo

El archivo `wp-config.php` se encuentra en la raíz de su instalación de WordPress:

```
/public_html/wp-config.php
/htdocs/wp-config.php
/www/wp-config.php
```

### Sintaxis de Configuración

Agregue las siguientes líneas a su archivo `wp-config.php`, preferiblemente antes de la línea `/* That's all, stop editing! */`:

#### Configuración Básica

```php
// Configurar límite mensual de páginas vistas
define('QAHM_MONTHLY_PV_LIMIT', 5000);

// Configurar límite mensual de sesiones
define('QAHM_MONTHLY_SESSION_LIMIT', 2500);

// Configurar límite mensual de eventos
define('QAHM_MONTHLY_EVENT_LIMIT', 10000);
```

#### Configuraciones Comunes

**Para sitios pequeños (menos de 1,000 visitantes/mes):**
```php
define('QAHM_MONTHLY_PV_LIMIT', 2000);
define('QAHM_MONTHLY_SESSION_LIMIT', 1000);
define('QAHM_MONTHLY_EVENT_LIMIT', 5000);
```

**Para sitios medianos (1,000-10,000 visitantes/mes):**
```php
define('QAHM_MONTHLY_PV_LIMIT', 15000);
define('QAHM_MONTHLY_SESSION_LIMIT', 7500);
define('QAHM_MONTHLY_EVENT_LIMIT', 30000);
```

**Para sitios grandes (más de 10,000 visitantes/mes):**
```php
define('QAHM_MONTHLY_PV_LIMIT', 50000);
define('QAHM_MONTHLY_SESSION_LIMIT', 25000);
define('QAHM_MONTHLY_EVENT_LIMIT', 100000);
```

**Para sitios sin límites (usar con precaución):**
```php
define('QAHM_MONTHLY_PV_LIMIT', 0);
define('QAHM_MONTHLY_SESSION_LIMIT', 0);
define('QAHM_MONTHLY_EVENT_LIMIT', 0);
```

## Configuraciones Avanzadas

### Límites por Tipo de Contenido

```php
// Límites específicos para diferentes tipos de páginas
define('QAHM_MONTHLY_PV_LIMIT', 10000);
define('QAHM_MONTHLY_SESSION_LIMIT', 5000);

// Configuración adicional para e-commerce
define('QAHM_TRACK_ECOMMERCE', true);
define('QAHM_ECOMMERCE_EVENT_LIMIT', 20000);
```

### Configuración de Retención de Datos

```php
// Configurar cuánto tiempo mantener los datos (en días)
define('QAHM_DATA_RETENTION_DAYS', 90);

// Configurar retención específica para mapas de calor
define('QAHM_HEATMAP_RETENTION_DAYS', 180);

// Configurar retención para datos de sesión
define('QAHM_SESSION_RETENTION_DAYS', 30);
```

### Configuración de Rendimiento

```php
// Configurar límites de procesamiento
define('QAHM_MAX_PROCESSING_TIME', 30);
define('QAHM_BATCH_SIZE', 100);

// Configurar límites de memoria
define('QAHM_MEMORY_LIMIT', '256M');
```

## Monitoreo del Uso

### Verificar Límites Actuales

Para ver sus límites actuales y uso:

1. **Acceda al Panel de QA Advisor**
   - Vaya a **QA Advisor** → **Configuración**
   - Busque la sección "Límites de Datos"

2. **Verificar Uso Mensual**
   - El panel mostrará el uso actual vs. límites configurados
   - Se actualiza en tiempo real

### Alertas de Límite

QA Advisor le notificará cuando se acerque a los límites:

- **80% del límite**: Advertencia amarilla
- **95% del límite**: Advertencia naranja
- **100% del límite**: Alerta roja y pausa de recolección

## Consideraciones de Hosting

### Hosting Compartido

Para hosting compartido, considere:

```php
// Configuración conservadora para hosting compartido
define('QAHM_MONTHLY_PV_LIMIT', 3000);
define('QAHM_MONTHLY_SESSION_LIMIT', 1500);
define('QAHM_MEMORY_LIMIT', '128M');
define('QAHM_MAX_PROCESSING_TIME', 15);
```

### VPS/Servidor Dedicado

Para servidores con más recursos:

```php
// Configuración para servidores dedicados
define('QAHM_MONTHLY_PV_LIMIT', 100000);
define('QAHM_MONTHLY_SESSION_LIMIT', 50000);
define('QAHM_MEMORY_LIMIT', '512M');
define('QAHM_MAX_PROCESSING_TIME', 60);
```

### Hosting Administrado de WordPress

Para hosting especializado en WordPress:

```php
// Configuración optimizada para hosting administrado
define('QAHM_MONTHLY_PV_LIMIT', 25000);
define('QAHM_MONTHLY_SESSION_LIMIT', 12500);
define('QAHM_USE_OBJECT_CACHE', true);
```

## Solución de Problemas

### Problemas Comunes

**Los cambios no se aplican:**
- Verifique la sintaxis PHP (sin espacios extra, punto y coma al final)
- Confirme que las líneas estén antes de `/* That's all, stop editing! */`
- Limpie cualquier caché de WordPress

**Error de sintaxis:**
```php
// INCORRECTO
define('QAHM_MONTHLY_PV_LIMIT' 5000);

// CORRECTO
define('QAHM_MONTHLY_PV_LIMIT', 5000);
```

**Límites muy altos causan problemas:**
- Reduzca gradualmente los límites
- Monitoree el rendimiento del servidor
- Considere optimizar la base de datos

### Verificación de Configuración

Para verificar que la configuración se aplicó correctamente:

1. **Método 1: Panel de QA Advisor**
   - Vaya a **QA Advisor** → **Configuración**
   - Verifique que los límites mostrados coincidan con su configuración

2. **Método 2: Código de Verificación**
   Agregue temporalmente a su `functions.php`:
   ```php
   function debug_qahm_limits() {
       if (current_user_can('administrator')) {
           echo '<div style="background: #fff; padding: 10px; margin: 10px;">';
           echo 'PV Limit: ' . (defined('QAHM_MONTHLY_PV_LIMIT') ? QAHM_MONTHLY_PV_LIMIT : 'Default') . '<br>';
           echo 'Session Limit: ' . (defined('QAHM_MONTHLY_SESSION_LIMIT') ? QAHM_MONTHLY_SESSION_LIMIT : 'Default') . '<br>';
           echo 'Event Limit: ' . (defined('QAHM_MONTHLY_EVENT_LIMIT') ? QAHM_MONTHLY_EVENT_LIMIT : 'Default');
           echo '</div>';
       }
   }
   add_action('admin_notices', 'debug_qahm_limits');
   ```

## Mejores Prácticas

### Configuración Inicial

1. **Comience Conservadoramente**
   - Use límites bajos inicialmente
   - Aumente gradualmente según necesidades

2. **Monitoree Regularmente**
   - Revise el uso mensual
   - Ajuste según patrones de tráfico

3. **Considere Estacionalidad**
   - Aumente límites durante picos de tráfico
   - Reduzca durante períodos lentos

### Mantenimiento

1. **Revisión Mensual**
   - Evalúe el uso vs. límites configurados
   - Ajuste según crecimiento del sitio

2. **Optimización de Base de Datos**
   - Ejecute limpieza regular de datos antiguos
   - Optimice tablas de QA Advisor periódicamente

3. **Respaldo de Configuración**
   - Documente sus configuraciones personalizadas
   - Mantenga respaldos del archivo wp-config.php

---

Con los límites de datos configurados apropiadamente, su instalación de QA Advisor estará optimizada para su sitio específico. Proceda a explorar las [Pantallas y Operaciones](/docs/user-manual/screens-and-operations) principales.
