---
sidebar_position: 2
---

# Configuración del Entorno

Para obtener datos precisos y confiables de QA Advisor, es importante configurar correctamente su entorno de WordPress. Esta guía le ayudará a optimizar su configuración.

## Configuración de Plugins de Caché

Los plugins de caché pueden interferir con el seguimiento de QA Advisor. Aquí se explica cómo configurar los plugins más populares:

### WP Rocket

1. **Acceda a Configuración de WP Rocket**
   - Vaya a **Configuración** → **WP Rocket**

2. **Excluya Scripts de QA Advisor**
   - Pestaña **Optimización de Archivos**
   - En **Archivos JavaScript excluidos**, agregue:
     ```
     /wp-content/plugins/qa-heatmap-analytics/js/qahm
     /wp-content/plugins/qa-heatmap-analytics/js/qahmz
     ```

3. **Configure Caché de Páginas**
   - Asegúrese de que las páginas con seguimiento activo no estén excesivamente cacheadas
   - Considere excluir páginas críticas del caché si es necesario

### W3 Total Cache

1. **Configuración de Minificación**
   - Vaya a **Rendimiento** → **Minificar**
   - En **Nunca minificar los siguientes archivos JS**, agregue:
     ```
     qa-heatmap-analytics/js/qahm
     qa-heatmap-analytics/js/qahmz
     ```

2. **Configuración de Caché de Objetos**
   - Asegúrese de que los datos de QA Advisor no interfieran con el caché de objetos

### WP Super Cache

1. **Configuración Avanzada**
   - Vaya a **Configuración** → **WP Super Cache**
   - Pestaña **Avanzado**

2. **Scripts Rechazados**
   - Agregue los scripts de QA Advisor a la lista de archivos que no deben ser cacheados

## Configuración de Plugins de Seguridad

### Wordfence

1. **Lista Blanca de Scripts**
   - Vaya a **Wordfence** → **Firewall** → **Todas las Opciones**
   - En **Lista blanca de URLs**, agregue:
     ```
     /wp-content/plugins/qa-heatmap-analytics/
     ```

2. **Configuración de Rate Limiting**
   - Ajuste los límites para permitir el seguimiento normal de usuarios

### Sucuri Security

1. **Configuración del Firewall**
   - Asegúrese de que las solicitudes AJAX de QA Advisor no sean bloqueadas
   - Configure excepciones para los endpoints de QA Advisor

## Configuración del Servidor

### Límites de PHP

Verifique y ajuste los siguientes límites de PHP si es necesario:

```php
memory_limit = 256M
max_execution_time = 300
post_max_size = 64M
upload_max_filesize = 64M
```

### Configuración de Base de Datos

Para sitios con alto tráfico:

1. **Optimización de MySQL**
   - Asegúrese de que las tablas de QA Advisor estén optimizadas
   - Configure índices apropiados

2. **Límites de Conexión**
   - Verifique que MySQL pueda manejar las conexiones adicionales

## Configuración de CDN

### Cloudflare

1. **Configuración de Caché**
   - Excluya los scripts de QA Advisor del caché de Cloudflare
   - Configure reglas de página para `/wp-content/plugins/qa-heatmap-analytics/*`

2. **Configuración de Seguridad**
   - Asegúrese de que las solicitudes AJAX no sean bloqueadas
   - Configure el nivel de seguridad apropiado

### MaxCDN / StackPath

1. **Exclusiones de Caché**
   - Excluya archivos JavaScript de QA Advisor del CDN
   - Configure TTL apropiado para recursos estáticos

## Configuración de Hosting

### Hosting Compartido

Para hosting compartido, verifique:

1. **Límites de Recursos**
   - CPU y memoria suficientes para el procesamiento adicional
   - Límites de base de datos apropiados

2. **Configuración de Cron**
   - Asegúrese de que los trabajos cron de WordPress funcionen correctamente

### VPS/Servidor Dedicado

Para servidores dedicados:

1. **Configuración de Nginx**
   ```nginx
   location ~* /wp-content/plugins/qa-heatmap-analytics/ {
       expires 1d;
       add_header Cache-Control "public, immutable";
   }
   ```

2. **Configuración de Apache**
   ```apache
   <Directory "/wp-content/plugins/qa-heatmap-analytics/">
       ExpiresActive On
       ExpiresByType application/javascript "access plus 1 day"
   </Directory>
   ```

## Verificación de la Configuración

### Lista de Verificación

Después de configurar su entorno, verifique:

- [ ] Los scripts de QA Advisor se cargan correctamente
- [ ] No hay errores JavaScript en la consola del navegador
- [ ] Los datos aparecen en Tiempo Real
- [ ] Los mapas de calor se generan después de suficiente tráfico
- [ ] No hay conflictos con otros plugins

### Herramientas de Diagnóstico

1. **Consola del Navegador**
   - Presione F12 y verifique la pestaña Console
   - Busque errores relacionados con `qahm` o `qahmz`

2. **Herramientas de Red**
   - Verifique que las solicitudes AJAX se completen exitosamente
   - Confirme que no hay errores 404 o 500

3. **Plugin Health Check**
   - Use el plugin "Health Check & Troubleshooting" para identificar conflictos

## Configuración Específica por Tipo de Sitio

### Sitios de E-commerce

Para sitios de WooCommerce:

1. **Páginas Sensibles**
   - Considere excluir páginas de checkout del seguimiento
   - Configure objetivos para conversiones

2. **Rendimiento**
   - Optimice para manejar alto volumen de transacciones
   - Configure límites de datos apropiados

### Sitios de Membresía

Para sitios con áreas de miembros:

1. **Privacidad**
   - Configure exclusiones para contenido privado
   - Asegure el cumplimiento de políticas de privacidad

2. **Seguimiento de Usuarios**
   - Decida si rastrear usuarios conectados
   - Configure roles y permisos apropiados

## Solución de Problemas

### Problemas Comunes

**Los scripts no se cargan:**
- Verifique la configuración del plugin de caché
- Revise los logs de error del servidor
- Confirme que los archivos existen en el servidor

**Datos inconsistentes:**
- Verifique la configuración de zona horaria
- Revise la configuración de caché de base de datos
- Confirme que no hay múltiples instancias ejecutándose

**Problemas de rendimiento:**
- Ajuste los límites de datos mensuales
- Optimice la configuración de base de datos
- Considere usar un CDN para recursos estáticos

---

Una vez configurado su entorno, proceda a explorar las [Pantallas y Operaciones](/docs/user-manual/screens-and-operations) de QA Advisor.
