---
sidebar_position: 4
---

# Data Limieten Instellen (wp-config)

Configureer QA Advisor data verzameling limieten om resource gebruik te beheren en aan uw hosting vereisten te voldoen.

## Overzicht

QA Advisor verzamelt analytics data die op uw server wordt opgeslagen. Om overmatig resource gebruik te voorkomen en binnen uw hosting plan limieten te blijven, kunt u specifieke limieten configureren voor data verzameling.

## Limiet Configuratie

### Maandelijkse Paginaweergave Limiet

De belangrijkste limiet om te configureren is het maximale aantal paginaweergaven dat QA Advisor elke maand kan verzamelen.

Voeg deze regel toe aan uw `wp-config.php` bestand:

```php
// Maandelijkse paginaweergave limiet (standaard: 10,000)
define('QAHM_LIMIT_PV_MONTH', 10000);
```

### Aanbevolen Waarden per Site Type

| Site Type | Maandelijks Verkeer | Aanbevolen Limiet |
|-----------|-------------------|------------------|
| Persoonlijke Blog | < 1,000 PV | 5,000 |
| Bedrijfssite | 1,000 - 10,000 PV | 15,000 |
| Kleine E-commerce | 10,000 - 50,000 PV | 75,000 |
| Corporate Site | 50,000 - 200,000 PV | 300,000 |
| Hoog Verkeer Site | > 200,000 PV | 500,000+ |

## Geavanceerde Configuraties

### Dagelijkse Sessie Limiet

```php
// Dagelijkse sessie limiet (standaard: 1,000)
define('QAHM_LIMIT_SESSION_DAY', 1000);
```

### Heatmap Data Limiet

```php
// Heatmap data limiet per pagina (standaard: 10,000 punten)
define('QAHM_LIMIT_HEATMAP_DATA', 10000);
```

### Data Retentie Periode

```php
// Dagen data bewaren (standaard: 90 dagen)
define('QAHM_DATA_RETENTION_DAYS', 90);
```

### Log Bestand Grootte Limiet

```php
// Maximale log bestand grootte in MB (standaard: 10MB)
define('QAHM_MAX_LOG_SIZE', 10);
```

## Configuratie voor Verschillende Hosting Plannen

### Basis Gedeelde Hosting

Voor hosting plannen met beperkte resources:

```php
// Conservatieve configuratie voor gedeelde hosting
define('QAHM_LIMIT_PV_MONTH', 5000);
define('QAHM_LIMIT_SESSION_DAY', 500);
define('QAHM_DATA_RETENTION_DAYS', 30);
define('QAHM_MAX_LOG_SIZE', 5);
```

### Business/Premium Hosting

Voor plannen met meer resources:

```php
// Gebalanceerde configuratie voor business hosting
define('QAHM_LIMIT_PV_MONTH', 25000);
define('QAHM_LIMIT_SESSION_DAY', 2000);
define('QAHM_DATA_RETENTION_DAYS', 90);
define('QAHM_MAX_LOG_SIZE', 20);
```

### VPS/Dedicated Server

Voor servers met volledige controle:

```php
// Uitgebreide configuratie voor VPS/dedicated
define('QAHM_LIMIT_PV_MONTH', 100000);
define('QAHM_LIMIT_SESSION_DAY', 5000);
define('QAHM_DATA_RETENTION_DAYS', 180);
define('QAHM_MAX_LOG_SIZE', 50);
```

## Gebruik Monitoring

### Huidig Gebruik Controleren

QA Advisor biedt informatie over huidig gebruik in het admin panel:

1. Ga naar **QA Advisor > Instellingen**
2. Klik op **"Resource Gebruik"** tab
3. Bekijk maandelijkse en dagelijkse gebruik grafieken

### Limiet Waarschuwingen

Wanneer u geconfigureerde limieten nadert:

- **80% van limiet**: Gele waarschuwing in panel
- **95% van limiet**: Oranje waarschuwing met aanbevelingen
- **100% van limiet**: Data verzameling tijdelijk opgeschort

## Automatische Optimalisatie

### Automatische Data Opschoning

QA Advisor kan automatisch oude data opschonen:

```php
// Schakel automatische opschoning in (standaard: true)
define('QAHM_AUTO_CLEANUP', true);

// Opschoning frequentie in dagen (standaard: 7)
define('QAHM_CLEANUP_FREQUENCY', 7);
```

### Data Compressie

Om ruimtegebruik te verminderen:

```php
// Schakel data compressie in (standaard: true)
define('QAHM_COMPRESS_DATA', true);

// Compressie niveau 1-9 (standaard: 6)
define('QAHM_COMPRESSION_LEVEL', 6);
```

## Noodsituatie Beheer

### Tijdelijke Verzameling Opschorten

In geval van nood kunt u verzameling tijdelijk opschorten:

```php
// Schort data verzameling op (standaard: false)
define('QAHM_SUSPEND_COLLECTION', true);
```

### Tellers Resetten

Om maandelijkse tellers te resetten:

```php
// Reset tellers bij volgende load (standaard: false)
define('QAHM_RESET_COUNTERS', true);
```

## Content Type Specifieke Configuraties

### E-commerce Sites

Voor sites met veel transacties:

```php
// E-commerce configuratie
define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_TRACK_ECOMMERCE', true);
define('QAHM_ECOMMERCE_DATA_RETENTION', 365); // 1 jaar voor transactie data
```

### Nieuws Sites

Voor sites met frequent veranderende content:

```php
// Nieuws site configuratie
define('QAHM_LIMIT_PV_MONTH', 75000);
define('QAHM_TRACK_CONTENT_UPDATES', true);
define('QAHM_NEWS_DATA_RETENTION', 60); // 2 maanden voor artikelen
```

### Blogs en Informatieve Sites

Voor sites met statische content:

```php
// Blog/informatieve configuratie
define('QAHM_LIMIT_PV_MONTH', 15000);
define('QAHM_FOCUS_CONTENT_ANALYSIS', true);
define('QAHM_CONTENT_DATA_RETENTION', 120); // 4 maanden
```

## Prestatie Monitoring

### Te Controleren Metrics

1. **Schijfruimte Gebruik**: Controleer database groei
2. **Response Tijd**: Monitor prestatie impact
3. **Geheugen Gebruik**: Controleer RAM verbruik
4. **Database Queries**: Controleer query aantal en snelheid

### Monitoring Tools

```php
// Schakel prestatie logging in (alleen voor debugging)
define('QAHM_PERFORMANCE_LOG', false);

// Schakel query profiling in (alleen voor ontwikkeling)
define('QAHM_QUERY_PROFILING', false);
```

## Probleemoplossing

### Limiet Te Snel Bereikt

Als u limieten te snel bereikt:

1. Controleer bot verkeer of spam
2. Controleer cache configuraties
3. Overweeg limiet verhogen
4. Implementeer filters om irrelevant verkeer uit te sluiten

### Langzame Prestaties

Als QA Advisor de site vertraagt:

1. Verlaag data verzameling limieten
2. Verhoog automatische opschoning frequentie
3. Schakel data compressie in
4. Overweeg hosting plan upgrade

### Onvoldoende Schijfruimte

Bij ruimte problemen:

1. Verlaag data retentie periode
2. Schakel compressie en automatische opschoning in
3. Exporteer en archiveer oude data
4. Overweeg externe opslag voor backups

## Beste Praktijken

### Initiële Configuratie

1. Begin met conservatieve limieten
2. Monitor gebruik gedurende 2-4 weken
3. Pas limieten aan gebaseerd op werkelijke patronen
4. Documenteer configuraties voor toekomstige referentie

### Regulier Onderhoud

- Controleer maandelijks gebruik
- Update limieten gebaseerd op verkeer groei
- Voer reguliere data backups uit
- Monitor server prestaties

## Volgende Stappen

Na data limiet configuratie:

1. **[jQuery Beheer](/docs/user-manual/getting-started/when-defer-jquery)** - Los conflicten op
2. **[Dashboard](/docs/user-manual/screens-and-operations/dashboard)** - Begin analyse
3. **[Instellingen](/docs/user-manual/screens-and-operations/settings)** - Configureer geavanceerde opties

## Ondersteuning

Voor hulp bij limiet configuratie:

- Raadpleeg [FAQ](/docs/faq) voor veelvoorkomende problemen
- Neem contact op met ondersteuning voor gepersonaliseerd advies
- Bezoek [GitHub repository](https://github.com/quarka-org) voor technische ondersteuning

---

Juiste data limiet configuratie zorgt ervoor dat QA Advisor efficiënt draait zonder uw server te overbelasten.
