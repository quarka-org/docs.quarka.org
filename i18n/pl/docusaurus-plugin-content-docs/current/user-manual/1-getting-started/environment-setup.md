---
sidebar_position: 2
title: Konfiguracja Środowiska
---

# Konfiguracja Środowiska

Aby zapewnić dokładne śledzenie i optymalną wydajność z QA Advisor, zalecamy prawidłową konfigurację środowiska WordPress. Ten przewodnik obejmuje konfiguracje serwera, WordPress i wtyczek dla optymalnej wydajności.

## Wymagania Systemowe

### Wymagania Minimalne
- **WordPress**: Wersja 5.9 lub wyższa
- **PHP**: Wersja 7.4 lub wyższa
- **MySQL**: Wersja 5.7 lub wyższa (lub MariaDB 10.2+)
- **Pamięć**: Co najmniej 128MB limitu pamięci PHP
- **Miejsce na Dysku**: 50MB dostępnego miejsca

### Zalecane Specyfikacje
- **WordPress**: Najnowsza stabilna wersja
- **PHP**: Wersja 8.0 lub wyższa
- **MySQL**: Wersja 8.0 lub wyższa
- **Pamięć**: 256MB lub więcej limitu pamięci PHP
- **Miejsce na Dysku**: 200MB lub więcej dostępnego miejsca

## Konfiguracja Serwera

### Ustawienia PHP

Dla optymalnej wydajności skonfiguruj te ustawienia PHP:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### Kompresja i Minifikacja JavaScript

**Nie** kompresuj, minifikuj ani nie łącz plików JavaScript używanych przez QA Advisor.  
Niektóre wtyczki optymalizacyjne lub motywy mogą interferować ze skryptami śledzącymi, modyfikując lub opóźniając ich wykonanie.

> ✅ Sprawdź ustawienia wtyczki cache lub optymalizacji  
> ✅ Wyłącz minifikację JS lub defer/async dla skryptów QA Advisor

Więcej informacji technicznych znajdziesz w [Gdy jQuery jest Odroczony](/docs/user-manual/getting-started/when-defer-jquery).

### Optymalizacja Bazy Danych

Dla lepszej wydajności bazy danych:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Konfiguracja WordPress

### Ustawienia wp-config.php

Dodaj te konfiguracje do pliku `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Kompatybilność Wtyczek i Motywów

QA Advisor działa z większością głównych wtyczek i motywów. Jednak zalecamy:

- Wyłączenie JavaScript defer/async dla krytycznych skryptów
- Upewnienie się, że wtyczka cache pozwala na wyjście z `qa-heatmap-analytics`
- Unikanie duplikacji z innymi narzędziami śledzącymi, które modyfikują globalne zdarzenia

### Konfiguracja Wtyczek Cache

**WP Rocket**: Wyklucz skrypty QA Advisor z optymalizacji
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Dodaj do wykluczeń JavaScript  
**WP Super Cache**: Kompatybilny bez dodatkowej konfiguracji

## CDN i Migracja Serwera

Jeśli używasz CDN (np. Cloudflare) lub niedawno migrowałeś serwer:

- Wyczyść wszystkie cache (przeglądarka, wtyczka, CDN)
- Potwierdź, że skrypty QA Advisor nie są blokowane ani opóźniane
- Upewnij się, że strefa czasowa serwera jest poprawna (używana do grupowania danych)

### Konfiguracja Cloudflare

```
URL: *twojastrona.com/wp-content/plugins/qa-heatmap-analytics/*
Ustawienia:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 miesiąc
```

## Konfiguracja Bezpieczeństwa

### Uprawnienia Plików

Ustaw odpowiednie uprawnienia plików:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Ustawienia Firewall

Upewnij się, że te endpointy są dostępne:
- `/wp-admin/admin-ajax.php` (dla żądań AJAX)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (dla plików statycznych)

## Monitorowanie Wydajności

### Kluczowe Metryki do Monitorowania

- **Użycie Pamięci**: Utrzymuj poniżej 80% limitu
- **Czas Ładowania Strony**: Cel < 3 sekundy
- **Zapytania Bazy Danych**: Monitoruj wolne zapytania
- **Miejsce na Dysku**: Sprawdzaj wzrost danych QA Advisor

### Narzędzia Monitorowania

- **Query Monitor** - Wtyczka WordPress do debugowania
- **New Relic** - Monitorowanie APM
- **GTmetrix** - Testy wydajności frontend

## Rozwiązywanie Problemów

### Częste Problemy

**Błędy Pamięci**:
```php
ini_set('memory_limit', '512M');
```

**Problemy z Timeout**:
```php
set_time_limit(300);
```

**Problemy z Ładowaniem Skryptów**:
1. Sprawdź konsolę przeglądarki pod kątem błędów JavaScript
2. Zweryfikuj wykluczenia wtyczki cache
3. Potwierdź ustawienia firewall

### Weryfikacja Skryptu

Aby zweryfikować, że skrypt śledzący ładuje się poprawnie:

1. Odwiedź swoją stronę internetową będąc **niezalogowanym**
2. Kliknij prawym przyciskiem i wybierz "Wyświetl źródło strony"
3. Wyszukaj w HTML `qahm` lub `qahmz`

> Jeśli te ciągi nie zostaną znalezione, skrypt może być zablokowany lub nie ładuje się.  
> Sprawdź błędy JavaScript lub konflikty wtyczek.

## Następne Kroki

Po konfiguracji środowiska:

1. [Skonfiguruj Limity Danych](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Obsłuż Konflikty jQuery](/docs/user-manual/getting-started/when-defer-jquery)
3. [Poznaj Dashboard](/docs/user-manual/screens-and-operations/dashboard)

---
