---
sidebar_position: 1
---

# Instalación

Esta guía le ayudará a instalar QA Advisor en su sitio de WordPress de manera rápida y sencilla.

## Requisitos del Sistema

Antes de instalar QA Advisor, asegúrese de que su sitio cumpla con los siguientes requisitos:

- **WordPress**: Versión 5.9 o superior
- **PHP**: Versión 7.0 o superior (recomendado: 7.4 o superior)
- **MySQL**: Versión 5.7 o superior
- **Navegador**: Navegador moderno (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)

## Métodos de Instalación

### Método 1: Instalación Manual (Recomendado)

1. **Descargue QA Advisor**
   - Descargue el archivo ZIP del plugin desde el enlace proporcionado
   - Guarde el archivo en su computadora

2. **Acceda al Panel de WordPress**
   - Inicie sesión en su panel de administración de WordPress
   - Navegue a **Plugins** → **Añadir nuevo**

3. **Suba el Plugin**
   - Haga clic en **Subir plugin**
   - Seleccione el archivo ZIP de QA Advisor
   - Haga clic en **Instalar ahora**

4. **Active el Plugin**
   - Una vez instalado, haga clic en **Activar plugin**
   - QA Advisor aparecerá en su menú de administración

### Método 2: Instalación por FTP

Si prefiere usar FTP:

1. **Extraiga el Archivo**
   - Descomprima el archivo ZIP de QA Advisor
   - Esto creará una carpeta llamada `qa-heatmap-analytics`

2. **Suba por FTP**
   - Conecte a su servidor por FTP
   - Navegue a `/wp-content/plugins/`
   - Suba la carpeta `qa-heatmap-analytics`

3. **Active desde WordPress**
   - Vaya a **Plugins** en su panel de WordPress
   - Busque "QA Advisor" y haga clic en **Activar**

## Verificación de la Instalación

Después de la instalación exitosa:

1. **Verifique el Menú**
   - Debería ver "QA Advisor" en su menú de administración de WordPress

2. **Acceda al Panel**
   - Haga clic en **QA Advisor** → **Panel de Control**
   - Si ve la interfaz del panel, la instalación fue exitosa

3. **Verifique el Seguimiento**
   - Visite su sitio web en una ventana de incógnito
   - Regrese al panel de QA Advisor
   - Vaya a **Tiempo Real** para ver si se registra actividad

## Configuración Inicial

### Configuración Básica

1. **Acceda a Configuración**
   - Vaya a **QA Advisor** → **Configuración**

2. **Configure las Opciones Básicas**
   - **Seguimiento de Usuarios Conectados**: Desactivado por defecto
   - **Límite de Datos Mensuales**: 1,000 páginas vistas por defecto
   - **Retención de Datos**: 90 días por defecto

3. **Configuración de Privacidad**
   - **Anonimización de IP**: Activado (recomendado)
   - **Exclusión de Formularios**: Configure según sus necesidades
   - **Cumplimiento GDPR**: Active si es necesario

### Configuración Avanzada (Opcional)

Para usuarios avanzados:

1. **Modo Avanzado**
   - Active el "Modo Avanzado" para funciones adicionales
   - Esto habilita Audiencia, Adquisición y Objetivos

2. **Configuración de Objetivos**
   - Configure objetivos de conversión
   - Defina eventos importantes para su sitio

## Solución de Problemas

### Problemas Comunes

**El plugin no aparece después de la instalación:**
- Verifique que el archivo ZIP no esté corrupto
- Asegúrese de tener permisos de administrador
- Revise los logs de error de WordPress

**No se registran datos:**
- Verifique que JavaScript esté habilitado
- Revise la configuración de caché
- Confirme que no esté navegando como usuario conectado

**Error de permisos:**
- Verifique los permisos de archivos (755 para carpetas, 644 para archivos)
- Asegúrese de que WordPress pueda escribir en wp-content/plugins/

### Verificación de Funcionamiento

Para confirmar que QA Advisor funciona correctamente:

1. **Prueba de Tiempo Real**
   - Abra su sitio en una ventana de incógnito
   - Vaya a **QA Advisor** → **Tiempo Real**
   - Debería ver actividad en tiempo real

2. **Prueba de Mapas de Calor**
   - Navegue por varias páginas de su sitio
   - Espere 24-48 horas para acumulación de datos
   - Verifique **QA Advisor** → **Mapas de Calor**

## Próximos Pasos

Una vez instalado exitosamente:

1. **Configure su Entorno** → [Configuración del Entorno](/docs/user-manual/getting-started/environment-setup)
2. **Explore el Panel** → [Panel de Control](/docs/user-manual/screens-and-operations/dashboard)
3. **Configure Objetivos** → [Configuración de Objetivos](/docs/user-manual/screens-and-operations/goals)

---

¿Necesita ayuda? Consulte nuestras [Preguntas Frecuentes](/docs/faq) o contacte al [soporte técnico](mailto:support@quarka.org).
