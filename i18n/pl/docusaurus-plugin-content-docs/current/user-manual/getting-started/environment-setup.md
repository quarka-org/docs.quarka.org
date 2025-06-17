---
sidebar_position: 3
---

# Konfiguracja Środowiska

Zoptymalizuj swoje środowisko WordPress dla optymalnej wydajności z QA Advisor. Ten przewodnik obejmuje zalecane konfiguracje dla serwera, hostingu i WordPress.

## Szczegółowe Wymagania Systemowe

### Wymagania Minimalne

| Komponent | Wymaganie Minimalne | Zalecane |
|-----------|-------------------|----------|
| WordPress | 5.0+ | 6.0+ |
| PHP | 7.4+ | 8.1+ |
| MySQL | 5.6+ | 8.0+ |
| Pamięć PHP | 128MB | 256MB+ |
| Miejsce na Dysku | 50MB | 200MB+ |
| Rozszerzenia PHP | json, curl, mbstring | + gd, zip |

### Wymagane Rozszerzenia PHP

QA Advisor wymaga następujących rozszerzeń PHP:

```php
// Rozszerzenia Obowiązkowe
- json (do przetwarzania danych)
- curl (do komunikacji API)
- mbstring (do obsługi ciągów znaków)

// Rozszerzenia Zalecane
- gd (do przetwarzania obrazów)
- zip (do kopii zapasowych i eksportów)
- openssl (do bezpiecznej komunikacji)
```

## Konfiguracja Serwera

### Ustawienia PHP

Dodaj te konfiguracje do swojego pliku `php.ini` lub `.htaccess`:

```ini
# Pamięć i Czas Wykonania
memory_limit = 256M
max_execution_time = 300
max_input_time = 300

# Przesyłanie Plików
upload_max_filesize = 64M
post_max_size = 64M

# Sesje i Wyjście
session.gc_maxlifetime = 3600
output_buffering = 4096
```

### Konfiguracja Apache (.htaccess)

Jeśli używasz Apache, dodaj do swojego pliku `.htaccess`:

```apache
# Optymalizacje QA Advisor
<IfModule mod_rewrite.c>
    RewriteEngine On
    
    # Cache dla zasobów statycznych
    <IfModule mod_expires.c>
        ExpiresActive On
        ExpiresByType text/css "access plus 1 month"
        ExpiresByType application/javascript "access plus 1 month"
        ExpiresByType image/png "access plus 1 month"
    </IfModule>
</IfModule>

# Kompresja
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/json
</IfModule>
```

### Konfiguracja Nginx

Dla serwerów Nginx, dodaj do swojego pliku konfiguracyjnego:

```nginx
# Optymalizacje QA Advisor
location ~* \.(css|js|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1M;
    add_header Cache-Control "public, immutable";
}

# Kompresja
gzip on;
gzip_types text/css application/javascript application/json;
gzip_min_length 1000;

# Limity przesyłania
client_max_body_size 64M;
```

## Konfiguracja WordPress

### wp-config.php

Dodaj te konfiguracje do swojego pliku `wp-config.php`:

```php
// Optymalizacje QA Advisor
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

// Debug (tylko dla rozwoju)
define('WP_DEBUG', false);
define('WP_DEBUG_LOG', false);

// Cache
define('WP_CACHE', true);
```

### Optymalizacje Bazy Danych

Aby poprawić wydajność bazy danych:

```sql
-- Optymalizacje MySQL dla QA Advisor
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Konfiguracje Specyficzne dla Hostingu

### Hosting Współdzielony

Dla hostingu współdzielonego, dodaj do pliku `.htaccess`:

```apache
# Limity pamięci dla hostingu współdzielonego
php_value memory_limit 256M
php_value max_execution_time 300
php_value upload_max_filesize 32M
php_value post_max_size 32M
```

### Hosting Zarządzany (WP Engine, Kinsta, itp.)

Większość hostingów zarządzanych ma automatyczne optymalizacje, ale możesz potrzebować:

- Skontaktować się z wsparciem w celu zwiększenia limitów pamięci
- Sprawdzić kompatybilność z wtyczkami cache
- Skonfigurować wykluczenia cache dla QA Advisor

### VPS/Serwery Dedykowane

Dla pełnej kontroli:

```bash
# Optymalizacje systemu operacyjnego
echo 'vm.swappiness = 10' >> /etc/sysctl.conf
echo 'net.core.rmem_max = 16777216' >> /etc/sysctl.conf
echo 'net.core.wmem_max = 16777216' >> /etc/sysctl.conf
```

## Wtyczki Cache i Kompatybilność

### Obsługiwane Wtyczki Cache

QA Advisor jest kompatybilny z:

- **WP Rocket** - Automatyczna konfiguracja
- **W3 Total Cache** - Wymaga ręcznych wykluczeń
- **WP Super Cache** - Kompatybilny bez konfiguracji
- **LiteSpeed Cache** - Automatyczne optymalizacje

### Konfiguracje Wykluczeń

Dla wtyczek cache, wyklucz te ścieżki:

```
/wp-content/plugins/qa-heatmap-analytics/
/wp-admin/admin-ajax.php?action=qahm_*
```

## Monitorowanie Wydajności

### Metryki do Monitorowania

- **Użycie Pamięci**: Utrzymuj poniżej 80% limitu
- **Czas Ładowania**: Cel < 3 sekundy
- **Zapytania Bazy Danych**: Monitoruj wolne zapytania
- **Miejsce na Dysku**: Sprawdzaj wzrost danych QA Advisor

### Narzędzia Monitorowania

- **Query Monitor** - Wtyczka WordPress do debugowania
- **New Relic** - Monitorowanie APM
- **GTmetrix** - Testy wydajności frontend

## Rozwiązywanie Typowych Problemów

### Błędy Pamięci

```php
// Tymczasowo zwiększ pamięć
ini_set('memory_limit', '512M');
```

### Problemy z Timeout

```php
// Zwiększ czas wykonania
set_time_limit(300);
```

### Problemy z Uprawnieniami Plików

```bash
# Ustaw prawidłowe uprawnienia
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

## Bezpieczeństwo

### Konfiguracje Bezpieczeństwa

```php
// wp-config.php - Dodatkowe bezpieczeństwo
define('DISALLOW_FILE_EDIT', true);
define('WP_DEBUG_DISPLAY', false);
define('SCRIPT_DEBUG', false);
```

### Firewall i Ochrona

- Skonfiguruj firewall do blokowania nieautoryzowanego dostępu
- Używaj SSL/TLS dla wszystkich komunikacji
- Implementuj uwierzytelnianie dwuskładnikowe

## Backup i Przywracanie

### Strategia Backup

1. **Pełny Backup**: Tygodniowo
2. **Backup Bazy Danych**: Codziennie
3. **Backup Danych QA Advisor**: Codziennie

### Automatyzacja Backup

```bash
# Skrypt automatycznego backup
#!/bin/bash
mysqldump -u user -p database > backup_$(date +%Y%m%d).sql
tar -czf wordpress_backup_$(date +%Y%m%d).tar.gz /path/to/wordpress/
```

## Następne Kroki

Po skonfigurowaniu środowiska:

1. **[Ustawienie Limitów Danych](/docs/user-manual/getting-started/set-data-limit-wpconfig)** - Skonfiguruj limity zbierania
2. **[Zarządzanie jQuery](/docs/user-manual/getting-started/when-defer-jquery)** - Rozwiąż konflikty
3. **[Panel Kontrolny](/docs/user-manual/screens-and-operations/dashboard)** - Rozpocznij analizę

## Wsparcie

W przypadku problemów z konfiguracją środowiska:

- Skonsultuj się z [FAQ](/docs/faq) dla typowych rozwiązań
- Skontaktuj się ze swoim dostawcą hostingu dla specyficznego wsparcia
- Odwiedź [repozytorium GitHub](https://github.com/quarka-org) dla wsparcia technicznego

---

Optymalna konfiguracja środowiska zapewnia, że QA Advisor działa z najlepszą wydajnością.
