---
sidebar_position: 2
title: Configuración del Entorno
---

# Configuración del Entorno

Para garantizar un seguimiento preciso y un rendimiento óptimo con QA Advisor, recomendamos configurar correctamente su entorno de WordPress. Esta guía cubre las configuraciones de servidor, WordPress y plugins para un rendimiento óptimo.

## Requisitos del Sistema

### Requisitos Mínimos
- **WordPress**: Versión 5.9 o superior
- **PHP**: Versión 7.4 o superior
- **MySQL**: Versión 5.7 o superior (o MariaDB 10.2+)
- **Memoria**: Al menos 128MB de límite de memoria PHP
- **Espacio en Disco**: 50MB de espacio disponible

### Especificaciones Recomendadas
- **WordPress**: Última versión estable
- **PHP**: Versión 8.0 o superior
- **MySQL**: Versión 8.0 o superior
- **Memoria**: 256MB o más de límite de memoria PHP
- **Espacio en Disco**: 200MB o más de espacio disponible

## Configuración del Servidor

### Configuración de PHP

Para un rendimiento óptimo, configure estos ajustes de PHP:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### Compresión y Minificación de JavaScript

**No** comprima, minifique o combine archivos JavaScript utilizados por QA Advisor.  
Algunos plugins de optimización o temas pueden interferir con los scripts de seguimiento al modificar o retrasar su ejecución.

> ✅ Verifique la configuración de su plugin de caché u optimización  
> ✅ Desactive la minificación JS o defer/async para scripts de QA Advisor

Para más información técnica, consulte [Cuando jQuery se Difiere](/docs/user-manual/getting-started/when-defer-jquery).

### Optimización de Base de Datos

Para mejorar el rendimiento de la base de datos:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Configuración de WordPress

### Configuración de wp-config.php

Agregue estas configuraciones a su archivo `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Compatibilidad de Plugins y Temas

QA Advisor funciona con la mayoría de plugins y temas principales. Sin embargo, recomendamos:

- Desactivar JavaScript defer/async para scripts críticos
- Asegurar que su plugin de caché permita salida de `qa-heatmap-analytics`
- Evitar duplicación con otras herramientas de seguimiento que modifiquen eventos globales

### Configuración de Plugins de Caché

**WP Rocket**: Excluir scripts de QA Advisor de la optimización
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Agregar a exclusiones de JavaScript  
**WP Super Cache**: Compatible sin configuración adicional

## CDN y Migración de Servidor

Si está usando un CDN (ej. Cloudflare) o migró recientemente su servidor:

- Limpie todas las cachés (navegador, plugin, CDN)
- Confirme que los scripts de QA Advisor no estén bloqueados o retrasados
- Asegúrese de que la zona horaria del servidor sea correcta (usada para agrupación de datos)

### Configuración de Cloudflare

```
URL: *susite.com/wp-content/plugins/qa-heatmap-analytics/*
Configuración:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 mes
```

## Configuración de Seguridad

### Permisos de Archivos

Configure permisos de archivos apropiados:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Configuración de Firewall

Asegúrese de que estos endpoints sean accesibles:
- `/wp-admin/admin-ajax.php` (para solicitudes AJAX)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (para archivos estáticos)

## Monitoreo de Rendimiento

### Métricas Clave a Monitorear

- **Uso de Memoria**: Mantener bajo el 80% del límite
- **Tiempo de Carga de Página**: Objetivo < 3 segundos
- **Consultas de Base de Datos**: Monitorear consultas lentas
- **Espacio en Disco**: Verificar crecimiento de datos de QA Advisor

### Herramientas de Monitoreo

- **Query Monitor** - Plugin de WordPress para depuración
- **New Relic** - Monitoreo APM
- **GTmetrix** - Pruebas de rendimiento frontend

## Solución de Problemas

### Problemas Comunes

**Errores de Memoria**:
```php
ini_set('memory_limit', '512M');
```

**Problemas de Timeout**:
```php
set_time_limit(300);
```

**Problemas de Carga de Scripts**:
1. Verificar consola del navegador para errores de JavaScript
2. Verificar exclusiones del plugin de caché
3. Confirmar configuración del firewall

### Verificación de Scripts

Para verificar que el script de seguimiento se esté cargando correctamente:

1. Visite su sitio web mientras **no esté conectado**
2. Haga clic derecho y elija "Ver código fuente de la página"
3. Busque en el HTML `qahm` o `qahmz`

> Si estas cadenas no se encuentran, el script puede estar bloqueado o no cargándose.  
> Verifique errores de JavaScript o conflictos de plugins.

## Próximos Pasos

Después de la configuración del entorno:

1. [Configurar Límites de Datos](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Manejar Conflictos de jQuery](/docs/user-manual/getting-started/when-defer-jquery)
3. [Explorar el Dashboard](/docs/user-manual/screens-and-operations/dashboard)

---
