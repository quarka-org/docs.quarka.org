---
sidebar_position: 2
title: Omgeving Setup
---

# Omgeving Setup

Om nauwkeurige tracking en optimale prestaties met QA Advisor te garanderen, raden we aan uw WordPress-omgeving correct te configureren. Deze gids behandelt server-, WordPress- en plugin-configuraties voor optimale prestaties.

## Systeemvereisten

### Minimale Vereisten
- **WordPress**: Versie 5.9 of hoger
- **PHP**: Versie 7.4 of hoger
- **MySQL**: Versie 5.7 of hoger (of MariaDB 10.2+)
- **Geheugen**: Minimaal 128MB PHP geheugenlimiet
- **Schijfruimte**: 50MB beschikbare ruimte

### Aanbevolen Specificaties
- **WordPress**: Laatste stabiele versie
- **PHP**: Versie 8.0 of hoger
- **MySQL**: Versie 8.0 of hoger
- **Geheugen**: 256MB of meer PHP geheugenlimiet
- **Schijfruimte**: 200MB of meer beschikbare ruimte

## Server Configuratie

### PHP Instellingen

Voor optimale prestaties, configureer deze PHP instellingen:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### JavaScript Compressie & Minificatie

Comprimeer, minificeer of combineer **geen** JavaScript bestanden die door QA Advisor worden gebruikt.  
Sommige optimalisatie plugins of thema's kunnen interfereren met tracking scripts door hun uitvoering te wijzigen of te vertragen.

> ✅ Controleer uw cache of optimalisatie plugin instellingen  
> ✅ Schakel JS minificatie of defer/async uit voor QA Advisor scripts

Voor meer technische achtergrond, zie [Wanneer jQuery wordt Uitgesteld](/docs/user-manual/getting-started/when-defer-jquery).

### Database Optimalisatie

Voor betere database prestaties:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## WordPress Configuratie

### wp-config.php Instellingen

Voeg deze configuraties toe aan uw `wp-config.php` bestand:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Plugin & Thema Compatibiliteit

QA Advisor werkt met de meeste grote plugins en thema's. We raden echter aan:

- JavaScript defer/async uit te schakelen voor kritieke scripts
- Ervoor te zorgen dat uw cache plugin output van `qa-heatmap-analytics` toestaat
- Duplicatie te vermijden met andere tracking tools die globale events wijzigen

### Cache Plugin Configuratie

**WP Rocket**: Sluit QA Advisor scripts uit van optimalisatie
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Voeg toe aan JavaScript uitsluitingen  
**WP Super Cache**: Compatibel zonder aanvullende configuratie

## CDN & Server Migratie

Als u een CDN gebruikt (bijv. Cloudflare) of recent uw server hebt gemigreerd:

- Wis alle caches (browser, plugin, CDN)
- Bevestig dat QA Advisor scripts niet worden geblokkeerd of vertraagd
- Zorg ervoor dat uw server tijdzone correct is (gebruikt voor data groepering)

### Cloudflare Configuratie

```
URL: *uwsite.com/wp-content/plugins/qa-heatmap-analytics/*
Instellingen:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 maand
```

## Beveiligingsconfiguratie

### Bestandsrechten

Stel juiste bestandsrechten in:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Firewall Instellingen

Zorg ervoor dat deze endpoints toegankelijk zijn:
- `/wp-admin/admin-ajax.php` (voor AJAX verzoeken)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (voor statische bestanden)

## Prestatie Monitoring

### Belangrijke Metrics om te Monitoren

- **Geheugengebruik**: Houd onder 80% van limiet
- **Pagina Laadtijd**: Streef naar < 3 seconden
- **Database Queries**: Monitor langzame queries
- **Schijfruimte**: Controleer QA Advisor data groei

### Monitoring Tools

- **Query Monitor** - WordPress plugin voor debugging
- **New Relic** - APM monitoring
- **GTmetrix** - Frontend prestatie testen

## Probleemoplossing

### Veelvoorkomende Problemen

**Geheugenfouten**:
```php
ini_set('memory_limit', '512M');
```

**Timeout Problemen**:
```php
set_time_limit(300);
```

**Script Laadproblemen**:
1. Controleer browser console voor JavaScript fouten
2. Verifieer cache plugin uitsluitingen
3. Bevestig firewall instellingen

### Script Verificatie

Om te verifiëren dat het tracking script correct wordt geladen:

1. Bezoek uw website terwijl u **niet bent ingelogd**
2. Klik rechts en kies "Paginabron bekijken"
3. Zoek in de HTML naar `qahm` of `qahmz`

> Als deze strings niet worden gevonden, kan het script geblokkeerd zijn of niet laden.  
> Controleer op JavaScript fouten of plugin conflicten.

## Volgende Stappen

Na omgeving setup:

1. [Configureer Data Limieten](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Behandel jQuery Conflicten](/docs/user-manual/getting-started/when-defer-jquery)
3. [Verken het Dashboard](/docs/user-manual/screens-and-operations/dashboard)

---
