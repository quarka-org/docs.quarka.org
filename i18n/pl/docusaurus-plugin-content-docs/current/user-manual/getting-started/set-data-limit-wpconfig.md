---
sidebar_position: 4
---

# Ustawienie Limitów Danych (wp-config)

Skonfiguruj limity zbierania danych QA Advisor, aby zarządzać wykorzystaniem zasobów i spełnić wymagania Twojego hostingu.

## Przegląd

QA Advisor zbiera dane analityczne, które są przechowywane na Twoim serwerze. Aby uniknąć nadmiernego wykorzystania zasobów i przestrzegać limitów Twojego planu hostingowego, możesz skonfigurować konkretne limity dla zbierania danych.

## Konfiguracja Limitów

### Miesięczny Limit Wyświetleń Stron

Najważniejszym limitem do skonfigurowania jest maksymalna liczba wyświetleń stron, które QA Advisor może zbierać każdego miesiąca.

Dodaj tę linię do swojego pliku `wp-config.php`:

```php
// Miesięczny limit wyświetleń stron (domyślnie: 10,000)
define('QAHM_LIMIT_PV_MONTH', 10000);
```

### Zalecane Wartości dla Typu Strony

| Typ Strony | Miesięczny Ruch | Zalecany Limit |
|------------|-----------------|----------------|
| Blog Osobisty | < 1,000 PV | 5,000 |
| Strona Firmowa | 1,000 - 10,000 PV | 15,000 |
| Mały E-commerce | 10,000 - 50,000 PV | 75,000 |
| Strona Korporacyjna | 50,000 - 200,000 PV | 300,000 |
| Strona Wysokiego Ruchu | > 200,000 PV | 500,000+ |

## Konfiguracje Zaawansowane

### Dzienny Limit Sesji

```php
// Dzienny limit sesji (domyślnie: 1,000)
define('QAHM_LIMIT_SESSION_DAY', 1000);
```

### Limit Danych Mapy Ciepła

```php
// Limit danych mapy ciepła na stronę (domyślnie: 10,000 punktów)
define('QAHM_LIMIT_HEATMAP_DATA', 10000);
```

### Okres Przechowywania Danych

```php
// Dni przechowywania danych (domyślnie: 90 dni)
define('QAHM_DATA_RETENTION_DAYS', 90);
```

### Limit Rozmiaru Pliku Logów

```php
// Maksymalny rozmiar pliku logów w MB (domyślnie: 10MB)
define('QAHM_MAX_LOG_SIZE', 10);
```

## Konfiguracja dla Różnych Planów Hostingowych

### Podstawowy Hosting Współdzielony

Dla planów hostingowych z ograniczonymi zasobami:

```php
// Konserwatywna konfiguracja dla hostingu współdzielonego
define('QAHM_LIMIT_PV_MONTH', 5000);
define('QAHM_LIMIT_SESSION_DAY', 500);
define('QAHM_DATA_RETENTION_DAYS', 30);
define('QAHM_MAX_LOG_SIZE', 5);
```

### Hosting Business/Premium

Dla planów z większymi zasobami:

```php
// Zrównoważona konfiguracja dla hostingu business
define('QAHM_LIMIT_PV_MONTH', 25000);
define('QAHM_LIMIT_SESSION_DAY', 2000);
define('QAHM_DATA_RETENTION_DAYS', 90);
define('QAHM_MAX_LOG_SIZE', 20);
```

### VPS/Serwer Dedykowany

Dla serwerów z pełną kontrolą:

```php
// Rozszerzona konfiguracja dla VPS/dedykowanego
define('QAHM_LIMIT_PV_MONTH', 100000);
define('QAHM_LIMIT_SESSION_DAY', 5000);
define('QAHM_DATA_RETENTION_DAYS', 180);
define('QAHM_MAX_LOG_SIZE', 50);
```

## Monitorowanie Wykorzystania

### Sprawdzanie Bieżącego Wykorzystania

QA Advisor dostarcza informacje o bieżącym wykorzystaniu w panelu administracyjnym:

1. Przejdź do **QA Advisor > Ustawienia**
2. Kliknij zakładkę **"Wykorzystanie Zasobów"**
3. Sprawdź wykresy miesięcznego i dziennego wykorzystania

### Ostrzeżenia o Limitach

Gdy zbliżasz się do skonfigurowanych limitów:

- **80% limitu**: Żółte ostrzeżenie w panelu
- **95% limitu**: Pomarańczowe ostrzeżenie z rekomendacjami
- **100% limitu**: Zbieranie danych tymczasowo zawieszone

## Automatyczna Optymalizacja

### Automatyczne Czyszczenie Danych

QA Advisor może automatycznie czyścić stare dane:

```php
// Włącz automatyczne czyszczenie (domyślnie: true)
define('QAHM_AUTO_CLEANUP', true);

// Częstotliwość czyszczenia w dniach (domyślnie: 7)
define('QAHM_CLEANUP_FREQUENCY', 7);
```

### Kompresja Danych

Aby zmniejszyć wykorzystanie miejsca:

```php
// Włącz kompresję danych (domyślnie: true)
define('QAHM_COMPRESS_DATA', true);

// Poziom kompresji 1-9 (domyślnie: 6)
define('QAHM_COMPRESSION_LEVEL', 6);
```

## Zarządzanie Sytuacjami Awaryjnymi

### Tymczasowe Zawieszenie Zbierania

W przypadku awarii możesz tymczasowo zawiesić zbieranie:

```php
// Zawieś zbieranie danych (domyślnie: false)
define('QAHM_SUSPEND_COLLECTION', true);
```

### Reset Liczników

Aby zresetować miesięczne liczniki:

```php
// Reset liczników przy następnym ładowaniu (domyślnie: false)
define('QAHM_RESET_COUNTERS', true);
```

## Konfiguracje Specyficzne dla Typu Treści

### Strony E-commerce

Dla stron z wieloma transakcjami:

```php
// Konfiguracja e-commerce
define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_TRACK_ECOMMERCE', true);
define('QAHM_ECOMMERCE_DATA_RETENTION', 365); // 1 rok dla danych transakcji
```

### Strony Informacyjne

Dla stron z często zmieniającą się treścią:

```php
// Konfiguracja stron informacyjnych
define('QAHM_LIMIT_PV_MONTH', 75000);
define('QAHM_TRACK_CONTENT_UPDATES', true);
define('QAHM_NEWS_DATA_RETENTION', 60); // 2 miesiące dla artykułów
```

### Blogi i Strony Informacyjne

Dla stron ze statyczną treścią:

```php
// Konfiguracja blogów/informacyjnych
define('QAHM_LIMIT_PV_MONTH', 15000);
define('QAHM_FOCUS_CONTENT_ANALYSIS', true);
define('QAHM_CONTENT_DATA_RETENTION', 120); // 4 miesiące
```

## Monitorowanie Wydajności

### Metryki do Sprawdzania

1. **Wykorzystanie Miejsca na Dysku**: Sprawdzaj wzrost bazy danych
2. **Czas Odpowiedzi**: Monitoruj wpływ na wydajność
3. **Wykorzystanie Pamięci**: Sprawdzaj zużycie RAM
4. **Zapytania Bazy Danych**: Sprawdzaj liczbę i szybkość zapytań

### Narzędzia Monitorowania

```php
// Włącz logowanie wydajności (tylko do debugowania)
define('QAHM_PERFORMANCE_LOG', false);

// Włącz profilowanie zapytań (tylko do rozwoju)
define('QAHM_QUERY_PROFILING', false);
```

## Rozwiązywanie Problemów

### Limit Osiągnięty Zbyt Szybko

Jeśli osiągasz limity zbyt szybko:

1. Sprawdź ruch botów lub spam
2. Sprawdź konfiguracje cache
3. Rozważ zwiększenie limitów
4. Implementuj filtry do wykluczania nieistotnego ruchu

### Wolna Wydajność

Jeśli QA Advisor spowalnia stronę:

1. Zmniejsz limity zbierania danych
2. Zwiększ częstotliwość automatycznego czyszczenia
3. Włącz kompresję danych
4. Rozważ upgrade planu hostingowego

### Niewystarczające Miejsce na Dysku

W przypadku problemów z miejscem:

1. Zmniejsz okres przechowywania danych
2. Włącz kompresję i automatyczne czyszczenie
3. Eksportuj i archiwizuj stare dane
4. Rozważ zewnętrzne przechowywanie dla kopii zapasowych

## Najlepsze Praktyki

### Konfiguracja Początkowa

1. Zacznij od konserwatywnych limitów
2. Monitoruj wykorzystanie przez 2-4 tygodnie
3. Dostosuj limity na podstawie rzeczywistych wzorców
4. Dokumentuj konfiguracje dla przyszłego odniesienia

### Regularna Konserwacja

- Sprawdzaj miesięczne wykorzystanie
- Aktualizuj limity na podstawie wzrostu ruchu
- Wykonuj regularne kopie zapasowe danych
- Monitoruj wydajność serwera

## Następne Kroki

Po skonfigurowaniu limitów danych:

1. **[Zarządzanie jQuery](/docs/user-manual/getting-started/when-defer-jquery)** - Rozwiąż konflikty
2. **[Panel Kontrolny](/docs/user-manual/screens-and-operations/dashboard)** - Rozpocznij analizę
3. **[Ustawienia](/docs/user-manual/screens-and-operations/settings)** - Skonfiguruj opcje zaawansowane

## Wsparcie

W przypadku pomocy z konfiguracją limitów:

- Skonsultuj się z [FAQ](/docs/faq) dla typowych problemów
- Skontaktuj się z wsparciem w celu uzyskania spersonalizowanych porad
- Odwiedź [repozytorium GitHub](https://github.com/quarka-org) dla wsparcia technicznego

---

Odpowiednia konfiguracja limitów danych zapewnia, że QA Advisor działa wydajnie bez przeciążania Twojego serwera.
