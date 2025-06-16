---
sidebar_position: 2
---

# Instalacja

Ten przewodnik przeprowadzi Cię przez proces instalacji QA Advisor na Twojej stronie WordPress.

## Metody Instalacji

### Metoda 1: Instalacja przez WordPress Admin (Zalecana)

To najprostsza i zalecana metoda dla większości użytkowników.

#### Krok 1: Zaloguj się do WordPress Admin
1. Przejdź do swojej strony WordPress
2. Zaloguj się swoimi danymi administratora
3. Nawiguj do `Wtyczki > Dodaj Nową`

#### Krok 2: Wyszukaj QA Advisor
1. W pasku wyszukiwania wpisz "QA Advisor"
2. Naciśnij Enter lub kliknij przycisk wyszukiwania
3. Znajdź QA Advisor w wynikach wyszukiwania

#### Krok 3: Zainstaluj Wtyczkę
1. Kliknij przycisk "Zainstaluj Teraz"
2. Poczekaj na zakończenie instalacji
3. Kliknij "Aktywuj" aby aktywować wtyczkę

### Metoda 2: Instalacja Ręczna

Jeśli wolisz instalować ręcznie lub pobrałeś plik ZIP wtyczki.

#### Krok 1: Pobierz Wtyczkę
1. Odwiedź [docs.quarka.org](https://docs.quarka.org)
2. Pobierz najnowszą wersję `qa-heatmap-analytics.zip`
3. Zapisz plik na swoim komputerze

#### Krok 2: Prześlij przez WordPress Admin
1. Przejdź do `Wtyczki > Dodaj Nową` w WordPress Admin
2. Kliknij "Prześlij Wtyczkę" na górze strony
3. Kliknij "Wybierz Plik" i wybierz pobrany plik ZIP
4. Kliknij "Zainstaluj Teraz"
5. Po instalacji kliknij "Aktywuj Wtyczkę"

#### Krok 3: Instalacja przez FTP (Zaawansowana)
Jeśli masz dostęp FTP do swojego serwera:

1. **Rozpakuj plik ZIP** na swoim komputerze
2. **Prześlij folder** `qa-heatmap-analytics` do katalogu `/wp-content/plugins/` swojej strony
3. **Aktywuj wtyczkę** z panelu Wtyczki w WordPress Admin

### Metoda 3: Instalacja przez WP-CLI

Dla programistów i zaawansowanych użytkowników korzystających z WP-CLI.

```bash
# Zainstaluj najnowszą wersję
wp plugin install qa-heatmap-analytics --activate

# Lub zainstaluj z lokalnego pliku
wp plugin install /ścieżka/do/qa-heatmap-analytics.zip --activate

# Sprawdź instalację
wp plugin list | grep qa-heatmap
```

## Weryfikacja Instalacji

### Szybka Kontrola
Po aktywacji powinieneś zobaczyć:

1. **Pozycję Menu**: "QA Advisor" w pasku bocznym WordPress Admin
2. **Kreatora Konfiguracji**: Popup lub powiadomienie o konfiguracji początkowej
3. **Brak Błędów**: Żadnych komunikatów błędów w dashboardzie

### Test Podstawowych Funkcji
1. **Przejdź do Dashboard**: Kliknij `QA Advisor > Dashboard`
2. **Sprawdź Status**: Zweryfikuj, że nie ma krytycznych błędów
3. **Zobacz Ustawienia**: Wejdź do `QA Advisor > Ustawienia`

## Konfiguracja Po Instalacji

### Automatyczny Kreator Konfiguracji

Przy pierwszym dostępie QA Advisor uruchomi kreatora konfiguracji:

#### Krok 1: Ustawienia Podstawowe
- **Tryb Śledzenia**: Wybierz między Standardowym lub Zaawansowanym
- **Strony do Śledzenia**: Wybierz które strony monitorować
- **Częstotliwość Zbierania**: Skonfiguruj jak często zbierać dane

#### Krok 2: Konfiguracja Prywatności
- **Zgodność z RODO**: Aktywuj jeśli potrzebne dla zgodności europejskiej
- **Anonimizacja IP**: Zalecane dla prywatności użytkowników
- **Okres Przechowywania**: Ustaw jak długo przechowywać dane

#### Krok 3: Heatmapy
- **Typy Heatmap**: Włącz heatmapy Click, Scroll, Move
- **Współczynnik Próbkowania**: Skonfiguruj procent użytkowników do śledzenia
- **Urządzenia Docelowe**: Wybierz desktop, mobile, lub oba

#### Krok 4: Cele i Metryki
- **Główne Cele**: Zdefiniuj co chcesz mierzyć
- **Wydarzenia Konwersji**: Skonfiguruj ważne akcje do śledzenia
- **Powiadomienia**: Ustaw alerty dla krytycznych wydarzeń

### Konfiguracja Ręczna

Jeśli wolisz konfigurować ręcznie:

#### Ustawienia Ogólne
```
QA Advisor > Ustawienia > Ogólne
- Włącz Śledzenie: ✓
- Tryb Debug: Tylko do testów
- Kompresja Danych: ✓ (zalecane)
```

#### Ustawienia Prywatności
```
QA Advisor > Ustawienia > Prywatność
- Anonimizuj IP: ✓
- Szanuj Do Not Track: ✓
- Okres Przechowywania: 90 dni
```

#### Ustawienia Heatmap
```
QA Advisor > Ustawienia > Heatmapy
- Heatmapa Click: ✓
- Heatmapa Scroll: ✓
- Heatmapa Move: ✓
- Współczynnik Próbkowania: 10%
```

## Rozwiązywanie Problemów Instalacji

### Typowe Błędy i Rozwiązania

#### "Wtyczka nie może być aktywowana"
**Możliwe Przyczyny:**
- Za stara wersja PHP
- Niewystarczająca pamięć PHP
- Konflikt z innymi wtyczkami

**Rozwiązania:**
1. **Zaktualizuj PHP** do wersji 7.4 lub wyższej
2. **Zwiększ pamięć PHP** do minimum 256MB:
   ```php
   ini_set('memory_limit', '256M');
   ```
3. **Dezaktywuj inne wtyczki** tymczasowo aby zidentyfikować konflikty

#### "Błąd podczas instalacji"
**Możliwe Przyczyny:**
- Niewystarczające uprawnienia plików
- Niewystarczające miejsce na dysku
- Niestabilne połączenie internetowe

**Rozwiązania:**
1. **Sprawdź uprawnienia** katalogu `/wp-content/plugins/`
2. **Zwolnij miejsce** na serwerze
3. **Spróbuj ponownie instalacji** ze stabilnym połączeniem

#### "Wtyczka zainstalowana ale nie działa"
**Możliwe Przyczyny:**
- Zablokowany JavaScript
- Agresywny cache
- Konfiguracja serwera

**Rozwiązania:**
1. **Sprawdź konsolę przeglądarki** (F12) pod kątem błędów JavaScript
2. **Wyczyść cache** strony i przeglądarki
3. **Sprawdź konfigurację serwera** pod kątem wsparcia JavaScript

### Kontrole Kompatybilności

#### Sprawdź Wymagania Systemowe
```bash
# Sprawdź wersję PHP
php -v

# Sprawdź dostępną pamięć
php -i | grep memory_limit

# Sprawdź wymagane rozszerzenia PHP
php -m | grep -E "(curl|json|mbstring)"
```

#### Test Kompatybilności Wtyczek
1. **Aktywuj domyślny motyw** tymczasowo
2. **Dezaktywuj inne wtyczki** po jednej
3. **Testuj funkcjonalność QA Advisor** po każdej dezaktywacji
4. **Zidentyfikuj konflikty** i szukaj konkretnych rozwiązań

## Konfiguracje Zaawansowane

### Optymalizacja Wydajności

#### Konfiguracja wp-config.php
```php
// Ogranicz miesięczne zbieranie danych
define('QAHM_LIMIT_PV_MONTH', 50000);

// Ustaw okres przechowywania
define('QAHM_DATA_RETENTION_DAYS', 90);

// Włącz kompresję
define('QAHM_ENABLE_COMPRESSION', true);
```

#### Konfiguracja Serwera
```apache
# .htaccess - Włącz kompresję dla plików QA Advisor
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE application/json
    AddOutputFilterByType DEFLATE text/javascript
</IfModule>
```

### Konfiguracja Multi-site

Dla instalacji WordPress multi-site:

#### Aktywacja Sieciowa
1. **Zaloguj się jako Super Admin**
2. **Przejdź do Network Admin > Wtyczki**
3. **Aktywuj QA Advisor** dla całej sieci
4. **Skonfiguruj dla każdej strony** indywidualnie

#### Konfiguracje Scentralizowane
```php
// wp-config.php - Konfiguracje globalne
define('QAHM_NETWORK_SETTINGS', true);
define('QAHM_CENTRALIZED_DATA', false); // Oddzielne dane dla strony
```

## Następne Kroki

Po udanej instalacji:

1. **[Konfiguracja Środowiska](./environment-setup)** - Optymalizuj swój serwer
2. **[Dashboard](../2-screens-and-operations/01-dashboard)** - Eksploruj główny interfejs
3. **[Ustawienia Zaawansowane](./when-defer-jquery)** - Rozwiąż problemy kompatybilności

## Wsparcie Instalacji

Jeśli napotkasz problemy podczas instalacji:

- **[FAQ](../../faq/)** - Często zadawane pytania i rozwiązania
- **[Wsparcie Społeczności](../2-screens-and-operations/12-help)** - Forum i dyskusje
- **Wsparcie Premium** - Dla płatnych licencji

Instalacja QA Advisor jest zaprojektowana tak, aby była prosta i bezpośrednia. Postępując zgodnie z tym przewodnikiem, powinieneś mieć działającą wtyczkę w ciągu kilku minut!
