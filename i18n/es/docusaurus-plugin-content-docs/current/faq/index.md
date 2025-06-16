---
sidebar_position: 1
---

# Preguntas Frecuentes

Esta sección contiene respuestas a las preguntas frecuentes sobre QA Advisor WordPress Analytics.

## Instalación y Configuración

### P: ¿Cuáles son los requisitos mínimos para instalar QA Advisor?

**R:** Para que QA Advisor funcione correctamente, debe cumplir los siguientes requisitos:

- **WordPress**: Versión 5.9 o superior
- **PHP**: Versión 7.0 o superior (recomendado: 7.4 o superior)
- **MySQL**: Versión 5.7 o superior
- **Navegador**: Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

Para más detalles, consulte la [Guía de Instalación](/docs/user-manual/getting-started/installation).

### P: ¿Qué es el modo avanzado y cómo lo activo?

**R:** El modo avanzado es un modo que permite utilizar funciones avanzadas como perspectivas de audiencia, informes de adquisición y seguimiento de objetivos.

Pasos para activarlo:
1. Vaya a **QA Advisor** → **Configuración**
2. Marque la opción **Modo Avanzado**
3. Haga clic en **Guardar Cambios**

### P: ¿Puedo cambiar el límite mensual de recolección de datos?

**R:** Sí, puede cambiarlo agregando el siguiente código a su archivo `wp-config.php`:

```php
// Establecer límite mensual a 10,000 páginas vistas
define('QAHM_MONTHLY_PV_LIMIT', 10000);

// Para hacerlo ilimitado
define('QAHM_MONTHLY_PV_LIMIT', 0);
```

Para más detalles, consulte [Configuración de Límites de Datos](/docs/user-manual/getting-started/set-data-limit-wpconfig).

## Seguimiento y Visualización de Datos

### P: ¿Por qué no se muestran los datos?

**R:** Si no se muestran los datos, verifique lo siguiente:

1. **Verificar seguimiento**: Confirme datos inmediatos en **QA Advisor** → **Tiempo Real**
2. **Usuarios conectados**: Los usuarios conectados de WordPress están excluidos por defecto
3. **Caché**: Limpie la caché del navegador y espere 5-10 minutos
4. **JavaScript**: Verifique que no haya errores en la consola del navegador

### P: ¿Cuándo se actualizan los datos del panel de control?

**R:** Los datos del panel de control se actualizan una vez al día, generalmente durante la noche. Si desea verificar datos en tiempo real, utilice la pantalla **Tiempo Real**.

### P: Los mapas de calor no se muestran.

**R:** Si los mapas de calor no se muestran:

1. **Datos suficientes**: Se necesitan datos mínimos de clics para generar mapas de calor
2. **Errores de JavaScript**: Verifique errores en la consola del navegador
3. **Configuración de exclusión**: Confirme que los scripts de QA Advisor no estén excluidos por plugins de caché
4. **Verificar configuración**: Confirme que la función de mapas de calor esté habilitada en **Configuración**

## Rendimiento y Compatibilidad

### P: ¿QA Advisor afecta la velocidad del sitio?

**R:** QA Advisor está diseñado para ser ligero y el impacto en el rendimiento del sitio es mínimo:

- El tamaño del script es generalmente menor a 10KB
- Funciona de forma asíncrona y no bloquea la carga de páginas
- Ejecuta solo el procesamiento mínimo necesario

### P: ¿Hay conflictos con otros plugins?

**R:** QA Advisor es compatible con muchos plugins, pero puede requerir ajustes de configuración con los siguientes tipos de plugins:

**Plugins de Caché**:
- WP Rocket, W3 Total Cache, WP Super Cache
- Excluya los scripts de QA Advisor (`qahm`, `qahmz`) de la optimización de JavaScript

**Plugins de Seguridad**:
- Wordfence, Sucuri Security
- Confirme que la carga de scripts de QA Advisor no esté bloqueada

Para más detalles, consulte [Configuración del Entorno](/docs/user-manual/getting-started/environment-setup).

### P: ¿Cómo manejar cuando jQuery está diferido?

**R:** Cuando jQuery está configurado para carga diferida (defer), también necesita diferir los scripts de QA Advisor.

**Métodos de solución**:
1. Agregue los scripts de QA Advisor a la lista de exclusión de plugins de caché
2. O excluya jQuery de la carga diferida

Para más detalles, consulte [Manejo de jQuery Diferido](/docs/user-manual/getting-started/when-defer-jquery).

## Funciones y Uso

### P: ¿Cuál es la diferencia entre la función de tiempo real y el panel de control?

**R:** 
- **Tiempo Real**: Muestra inmediatamente la actividad de visitantes que están navegando el sitio actualmente
- **Panel de Control**: Análisis integral de datos históricos agregados (actualización diaria)

Use tiempo real para verificación inmediata de datos, y el panel de control para análisis de tendencias.

### P: ¿Cómo configuro objetivos?

**R:** La configuración de objetivos está disponible en **Modo Avanzado**:

1. Vaya a **QA Advisor** → **Objetivos**
2. Haga clic en **Agregar Nuevo Objetivo**
3. Seleccione el tipo de objetivo (páginas vistas, eventos, tiempo, etc.)
4. Configure las condiciones y guarde

### P: ¿Cuánto tiempo toma mostrar los datos de mapas de calor?

**R:** Para mostrar mapas de calor se requieren las siguientes condiciones:

- **Número mínimo de clics**: Aproximadamente 30-50 clics
- **Período de acumulación de datos**: Generalmente 1-3 días
- **Número de páginas vistas**: Páginas con tráfico suficiente

Si hay pocos datos, recomendamos esperar más tráfico o verificar en páginas populares.

## Privacidad y Seguridad

### P: ¿Es compatible con GDPR?

**R:** Sí, QA Advisor está diseñado para cumplir con GDPR:

- **Anonimización de información personal**: Opción de anonimización de direcciones IP
- **Período de retención de datos**: Período de retención de datos configurable
- **Consentimiento del usuario**: Integración con gestión de consentimiento de cookies
- **Eliminación de datos**: Función de eliminación de datos de usuario

La configuración detallada se puede realizar en **QA Advisor** → **Configuración** → **Privacidad**.

### P: ¿Qué tipos de datos se recopilan?

**R:** Datos que recopila QA Advisor:

**Datos anonimizados**:
- Páginas vistas, posiciones de clics, profundidad de desplazamiento
- Información del dispositivo, información del navegador
- Direcciones IP anonimizadas (según configuración)

**Datos que NO se recopilan**:
- Información que pueda identificar individuos
- Contenido de formularios (se puede excluir en configuración)
- Contraseñas o información de tarjetas de crédito

## Preguntas Específicas de España

### P: ¿Es compatible con la ley de protección de datos de España?

**R:** Sí, QA Advisor puede configurarse para cumplir con la ley de protección de datos de España:

- **Procesamiento anonimizado**: Anonimización de direcciones IP para que no se puedan identificar individuos
- **Minimización de datos**: Recopilación solo de los datos mínimos necesarios
- **Transparencia**: Explicación clara de los datos recopilados
- **Control del usuario**: Funciones para detener y eliminar la recopilación de datos

### P: ¿Hay problemas de codificación de caracteres en sitios en español?

**R:** QA Advisor es totalmente compatible con UTF-8 y no ocurren problemas de codificación de caracteres en sitios en español:

- **Títulos de páginas en español**: Se muestran y registran correctamente
- **URLs en español**: Se procesan adecuadamente
- **Palabras clave de búsqueda en español**: Se rastrean con precisión
- **Salida de informes**: Salida normal en español

### P: ¿Es compatible con los principales servicios de hosting españoles?

**R:** QA Advisor es compatible con los principales servicios de hosting españoles:

- **Hostinger**: Compatible
- **SiteGround**: Compatible
- **Raiola Networks**: Compatible
- **Webempresa**: Compatible

Sin embargo, algunos hostings compartidos pueden requerir ajustes en los límites de memoria PHP.

## Solución de Problemas

### P: ¿Qué hacer cuando aparece "Se ha alcanzado el límite de datos"?

**R:** Cuando se alcanza el límite mensual de recolección de datos:

1. **Esperar hasta el próximo mes**: Se reinicia automáticamente el día 1 de cada mes
2. **Cambiar el valor límite**: Cambie el límite superior en [Configuración de Límites de Datos](/docs/user-manual/getting-started/set-data-limit-wpconfig)
3. **Datos en tiempo real**: Disponibles independientemente del límite

### P: ¿Qué hacer cuando no se muestra la pantalla de administración?

**R:** Si no puede acceder a la pantalla de administración:

1. **Verificar permisos**: Confirme que tiene permisos de administrador de WordPress
2. **Conflicto de plugins**: Desactive temporalmente otros plugins para probar
3. **Limpiar caché**: Limpie la caché del navegador y del servidor
4. **Registro de errores**: Verifique el registro de errores de WordPress

### P: ¿Se pueden exportar los datos?

**R:** Sí, QA Advisor permite exportar datos en los siguientes formatos:

- **Formato CSV**: Salida de datos tabulares
- **Informes PDF**: Informes para presentaciones
- **Integración API**: Integración con otras herramientas (Modo Avanzado)

La función de exportación se puede acceder desde el botón "Exportar" en cada pantalla.

## Soporte y Recursos

### P: ¿Cómo puedo recibir soporte?

**R:** Puede recibir soporte para QA Advisor de las siguientes maneras:

- **Soporte por email**: support@quarka.org
- **Documentación**: [Guía del Usuario](/docs/user-manual)
- **GitHub Issues**: [Reportes de errores y solicitudes de funciones](https://github.com/qa-advisor/issues)
- **Comunidad**: [GitHub Discussions](https://github.com/qa-advisor/discussions)

### P: ¿Cómo se realizan las actualizaciones?

**R:** Actualizaciones de QA Advisor:

- **Notificación automática**: Notificación de actualización en la pantalla de administración de WordPress
- **Actualización manual**: Actualización manual desde la pantalla de plugins
- **Respaldo recomendado**: Se recomienda hacer respaldo del sitio antes de actualizar
- **Verificación de compatibilidad**: Verificación previa de compatibilidad con las principales versiones de WordPress

### P: ¿Es necesaria la migración de la versión beta a la versión oficial?

**R:** Sobre la migración de la versión beta actual a la versión oficial:

- **Migración automática**: Migración automática al lanzamiento de la versión oficial
- **Retención de datos**: Los datos existentes se conservan
- **Mantenimiento de configuración**: La configuración actual se mantiene
- **Notificación**: Se enviará notificación al lanzamiento de la versión oficial

---

Si tiene otras preguntas, no dude en contactar al [soporte](mailto:support@quarka.org).
