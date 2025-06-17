---
sidebar_position: 2
title: Configuración del Entorno
---

# Configuración del Entorno

Para garantizar un seguimiento preciso y un rendimiento fluido con QA Advisor, recomendamos ajustar las siguientes configuraciones de servidor y plugin.

---

## 1. Compresión y Minificación de JavaScript

**No** comprima, minifique o combine archivos JavaScript utilizados por QA Advisor.  
Algunos plugins de optimización o temas pueden interferir con los scripts de seguimiento al modificar o retrasar su ejecución.

> ✅ Verifique la configuración de su plugin de caché u optimización  
> ✅ Desactive la minificación JS o defer/async para los scripts de QA Advisor

Para más información técnica, consulte [Cuando jQuery se Difiere](/docs/user-manual/getting-started/when-defer-jquery).

---

## 2. Límite de Memoria PHP y Tiempo de Ejecución

QA Advisor procesa datos de seguimiento durante la agregación diaria, lo que puede ser intensivo en memoria en sitios más grandes.

Recomendamos las siguientes configuraciones PHP:

- `memory_limit`: **1024M** o superior  
- `max_execution_time`: **240** segundos o más

> 💡 Estas configuraciones generalmente se pueden ajustar a través de `php.ini`, `.htaccess` o el panel de control de su hosting.  
> Si no está seguro, consulte con su proveedor de hosting.

---

## 3. Compatibilidad de Plugins y Temas

QA Advisor funciona con la mayoría de los principales plugins y temas. Sin embargo, recomendamos:

- Desactivar JavaScript defer/async para scripts críticos
- Asegurar que su plugin de caché permita la salida de `qa-heatmap-analytics`
- Evitar duplicación con otras herramientas de seguimiento que modifiquen eventos globales

---

## 4. CDN y Migración de Servidor

Si está usando un CDN (ej. Cloudflare) o migró recientemente su servidor:

- Limpie todas las cachés (navegador, plugin, CDN)
- Confirme que los scripts de QA Advisor no estén bloqueados o retrasados
- Asegúrese de que la zona horaria de su servidor sea correcta (se usa para agrupación de datos)

---

## 5. Opcional: Confirmar Salida del Script

Para verificar que el script de seguimiento se esté cargando correctamente:

1. Visite su sitio web mientras **no esté conectado**
2. Haga clic derecho y elija "Ver código fuente de la página"
3. Busque en el HTML `qahm` o `qahmz`

> Si estas cadenas no se encuentran, el script puede estar bloqueado o no cargando.  
> Verifique errores de JavaScript o conflictos de plugins.

---
