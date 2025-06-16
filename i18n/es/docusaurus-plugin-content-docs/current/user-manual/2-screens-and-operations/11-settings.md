---
sidebar_position: 12
---

# Configuración

La pantalla de Configuración de QA Advisor le permite personalizar el comportamiento del plugin según sus necesidades específicas, incluyendo privacidad, límites de datos y opciones avanzadas.

## Acceso a Configuración

Para acceder a la configuración:
1. Vaya a **QA Advisor** → **Configuración**
2. Las opciones están organizadas en pestañas temáticas
3. Los cambios se guardan automáticamente o requieren confirmación
4. Algunas opciones requieren Modo Avanzado activado

## Configuración General

### Configuración Básica

**Modo Avanzado**
- Habilita funciones premium como Audiencia, Adquisición y Objetivos
- Activa análisis de Brains impulsado por IA
- Proporciona acceso a configuraciones avanzadas
- Requiere licencia comercial para algunas funciones

**Seguimiento de Usuarios Conectados**
- Por defecto: Desactivado (excluye administradores y editores)
- Activado: Incluye todos los usuarios en análisis
- Recomendación: Mantener desactivado para datos más precisos
- Útil para sitios de membresía o análisis interno

**Zona Horaria**
- Configuración automática basada en WordPress
- Opción de override manual si es necesario
- Afecta reportes y análisis temporales
- Importante para análisis de patrones de uso

### Configuración de Seguimiento

**Páginas a Rastrear**
- Todas las páginas (por defecto)
- Páginas específicas solamente
- Exclusión de páginas administrativas
- Configuración de patrones de URL

**Eventos a Rastrear**
- Clics en enlaces externos
- Descargas de archivos
- Envíos de formularios
- Interacciones con multimedia

## Configuración de Privacidad

### Cumplimiento GDPR

**Anonimización de IP**
- Activado: Anonimiza direcciones IP automáticamente
- Desactivado: Almacena IPs completas
- Recomendación: Activar para cumplimiento GDPR
- Afecta precisión de geolocalización

**Consentimiento de Cookies**
- Integración con plugins de consentimiento
- Respeto de preferencias de usuario
- Configuración de cookies esenciales vs. analíticas
- Opciones de opt-out para usuarios

**Retención de Datos**
- Período de almacenamiento de datos (30-365 días)
- Eliminación automática de datos antiguos
- Configuración específica por tipo de datos
- Cumplimiento con regulaciones locales

### Exclusiones de Seguimiento

**Exclusión de Usuarios**
- Roles de WordPress a excluir
- Usuarios específicos por ID
- Exclusión basada en capacidades
- Configuración de lista blanca/negra

**Exclusión de Páginas**
- Páginas administrativas
- Páginas de error (404, 500)
- Páginas de mantenimiento
- URLs específicas o patrones

**Exclusión de IPs**
- Direcciones IP específicas
- Rangos de IP (oficina, desarrollo)
- Exclusión automática de bots conocidos
- Lista blanca para testing

## Límites de Datos

### Límites Mensuales

**Páginas Vistas**
- Límite por defecto: 1,000 páginas vistas/mes
- Configurable vía wp-config.php
- Reinicio automático cada mes
- Alertas cuando se acerca al límite

**Sesiones**
- Límite por defecto: 500 sesiones/mes
- Relacionado con límite de páginas vistas
- Configuración independiente disponible
- Monitoreo en tiempo real

**Eventos**
- Límite por defecto: 2,000 eventos/mes
- Incluye clics, descargas, formularios
- Configuración granular por tipo de evento
- Priorización de eventos importantes

### Gestión de Límites

**Alertas de Límite**
- Notificación al 80% del límite
- Alerta crítica al 95%
- Pausa automática al 100%
- Opciones de notificación por email

**Estrategias de Límite**
- Priorización de páginas importantes
- Muestreo de tráfico alto volumen
- Configuración de períodos de gracia
- Opciones de upgrade automático

## Configuración Técnica

### Rendimiento

**Configuración de Caché**
- Compatibilidad con plugins de caché
- Configuración de exclusiones
- Optimización de consultas de base de datos
- Configuración de memoria y tiempo de ejecución

**Optimización de Scripts**
- Carga asíncrona de scripts
- Minimización de impacto en rendimiento
- Configuración de CDN si disponible
- Optimización para dispositivos móviles

### Integración

**APIs Externas**
- Configuración de integraciones con terceros
- Claves de API para servicios externos
- Configuración de webhooks
- Sincronización de datos

**Exportación de Datos**
- Formatos de exportación disponibles
- Configuración de exportación automática
- Integración con herramientas de BI
- APIs para acceso programático

## Configuración de Mapas de Calor

### Generación de Mapas

**Criterios de Generación**
- Número mínimo de interacciones requeridas
- Período de acumulación de datos
- Páginas elegibles para mapas de calor
- Configuración de actualización automática

**Configuración Visual**
- Intensidad de colores
- Transparencia de overlays
- Configuración de zoom y escala
- Opciones de exportación visual

### Filtros de Datos

**Filtros de Calidad**
- Exclusión de clics accidentales
- Filtrado de comportamiento anómalo
- Configuración de umbrales de validez
- Limpieza automática de datos

**Segmentación**
- Mapas por tipo de dispositivo
- Segmentación por fuente de tráfico
- Filtros por demografía de usuario
- Configuración de cohortes

## Configuración de Notificaciones

### Alertas del Sistema

**Tipos de Alertas**
- Problemas técnicos
- Límites de datos alcanzados
- Cambios significativos en métricas
- Actualizaciones disponibles

**Canales de Notificación**
- Notificaciones en panel de WordPress
- Emails a administradores
- Webhooks para integraciones
- Notificaciones push (si disponible)

### Reportes Automáticos

**Frecuencia de Reportes**
- Resúmenes diarios
- Reportes semanales
- Análisis mensuales
- Reportes personalizados

**Contenido de Reportes**
- Métricas clave seleccionadas
- Comparaciones período anterior
- Alertas y recomendaciones
- Gráficos y visualizaciones

## Configuración Avanzada

### Configuración de Desarrollador

**Modo Debug**
- Logging detallado de actividades
- Información de diagnóstico
- Herramientas de troubleshooting
- Acceso a logs del sistema

**Configuración de API**
- Endpoints de API disponibles
- Configuración de autenticación
- Límites de rate limiting
- Documentación de API

### Personalización

**Interfaz de Usuario**
- Personalización de dashboards
- Configuración de widgets
- Temas y colores personalizados
- Configuración de idioma

**Roles y Permisos**
- Configuración de acceso por rol
- Permisos granulares por función
- Configuración de capacidades personalizadas
- Gestión de usuarios múltiples

## Importación y Exportación

### Configuración de Backup

**Backup Automático**
- Frecuencia de backups
- Ubicación de almacenamiento
- Retención de backups
- Verificación de integridad

**Exportación de Configuración**
- Exportar configuraciones actuales
- Formato de archivo de configuración
- Configuraciones incluidas/excluidas
- Documentación de configuración

### Migración

**Importación de Configuración**
- Importar desde archivo de configuración
- Migración desde otras herramientas
- Validación de configuraciones importadas
- Resolución de conflictos

**Migración de Datos**
- Exportación de datos históricos
- Formatos de migración soportados
- Herramientas de migración disponibles
- Verificación post-migración

## Mejores Prácticas

### Configuración Inicial

**Configuración Recomendada**
- Active anonimización de IP para privacidad
- Configure límites apropiados para su tráfico
- Excluya usuarios administrativos
- Configure zona horaria correcta

### Mantenimiento Regular

**Revisión Periódica**
- Revise configuración mensualmente
- Ajuste límites según crecimiento
- Actualice exclusiones según necesidades
- Verifique cumplimiento de privacidad

### Optimización

**Monitoreo de Rendimiento**
- Monitoree impacto en velocidad del sitio
- Ajuste configuración según recursos disponibles
- Optimice configuración de caché
- Revise logs de errores regularmente

---

La configuración adecuada de QA Advisor asegura que obtenga datos precisos y útiles mientras mantiene el rendimiento del sitio y cumple con regulaciones de privacidad.

**Próximo paso**: Acceda a recursos de soporte en [Ayuda](/docs/user-manual/screens-and-operations/help).
