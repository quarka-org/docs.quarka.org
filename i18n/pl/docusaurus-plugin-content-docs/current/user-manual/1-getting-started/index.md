---
sidebar_position: 1
---

# Rozpoczęcie Pracy z QA Advisor

Witamy w QA Advisor! Ta sekcja przeprowadzi Cię przez wszystko, co musisz wiedzieć, aby rozpocząć pracę z najpotężniejszą wtyczką analytics dla WordPress.

## Szybki Przegląd

QA Advisor to kompleksowa wtyczka analytics dla WordPress, która zapewnia:
- Szczegółowe heatmapy i śledzenie interakcji
- Analytics w czasie rzeczywistym z dashboard na żywo
- Moduły AI "Mózgi" dla automatycznych wglądów
- Pełną zgodność z RODO/LGPD
- Lokalne przechowywanie danych bez zewnętrznych zależności

## Proces Instalacji

### 1. Wymagania Systemowe
Przed instalacją upewnij się, że Twój system spełnia minimalne wymagania:
- **WordPress**: 5.0 lub wyższy (zalecane: najnowsza wersja)
- **PHP**: 7.4 lub wyższy (zalecane: 8.1+)
- **MySQL**: 5.6 lub wyższy
- **Pamięć**: Minimum 256MB (zalecane: 512MB+)

### 2. Metody Instalacji
Wybierz preferowaną metodę:
- **[Instalacja Standardowa](./installation)** - Zalecana metoda przez WordPress Admin
- **[Instalacja Ręczna](./installation#instalacja-reczna)** - Dla zaawansowanych użytkowników
- **[Instalacja przez WP-CLI](./installation#wp-cli)** - Dla programistów

### 3. Konfiguracja Po Instalacji
Po instalacji:
- **[Konfiguracja Środowiska](./environment-setup)** - Optymalizuj ustawienia serwera
- **[Konfiguracje Zaawansowane](./when-defer-jquery)** - Rozwiąż problemy kompatybilności
- **[Limity Danych](./set-data-limit-wpconfig)** - Skonfiguruj limity zbierania danych

## Konfiguracja Początkowa

### Kreator Konfiguracji
Przy pierwszym dostępie QA Advisor automatycznie uruchomi kreatora konfiguracji, który przeprowadzi Cię przez:

1. **Ustawienia Podstawowe**
   - Konfiguracja śledzenia
   - Wybór stron do monitorowania
   - Ustawienia próbkowania

2. **Prywatność i Zgodność**
   - Konfiguracja RODO/LGPD
   - Anonimizacja IP
   - Okres przechowywania danych

3. **Heatmapy**
   - Aktywacja heatmap
   - Konfiguracja typów heatmap
   - Ustawienia zbierania

4. **Cele Początkowe**
   - Definicja KPI
   - Konfiguracja wydarzeń konwersji
   - Ustawienie powiadomień

### Weryfikacja Instalacji

Po konfiguracji sprawdź, czy wszystko działa poprawnie:

1. **Sprawdź Dashboard**
   - Przejdź do `QA Advisor > Dashboard`
   - Sprawdź, czy nie ma błędów
   - Kontroluj status zbierania danych

2. **Test Śledzenia**
   - Odwiedź swoją stronę w oknie incognito
   - Przejdź do `QA Advisor > Czas Rzeczywisty`
   - Sprawdź, czy Twoja wizyta jest śledzona

3. **Weryfikacja Heatmap**
   - Poczekaj 24-48 godzin na początkowe zbieranie
   - Sprawdź `QA Advisor > Heatmapy`
   - Zweryfikuj generowanie map ciepła

## Rozwiązywanie Typowych Problemów

### Wtyczka Nie Śledzi Danych
Jeśli dane się nie pojawiają:
1. Sprawdź konsolę przeglądarki (F12) pod kątem błędów JavaScript
2. Zweryfikuj, czy nie ma konfliktów z innymi wtyczkami
3. Upewnij się, że cache nie interferuje
4. Sprawdź ustawienia prywatności przeglądarki

### Heatmapy Nie Są Generowane
Jeśli heatmapy się nie generują:
1. Sprawdź, czy masz wystarczający ruch (minimum 100 sesji)
2. Kontroluj ustawienia próbkowania
3. Upewnij się, że strony są włączone w śledzenie
4. Sprawdź logi błędów

### Niska Wydajność
Jeśli strona jest spowolniona:
1. Skonfiguruj odpowiednie limity danych
2. Optymalizuj ustawienia serwera
3. Włącz kompresję danych
4. Rozważ upgrade hostingu

## Następne Kroki

Po ukończeniu instalacji i konfiguracji początkowej:

1. **Eksploruj Dashboard**: Zapoznaj się z głównym interfejsem
2. **Skonfiguruj Cele**: Ustaw metryki specyficzne dla Twojego biznesu
3. **Personalizuj Ustawienia**: Dostosuj QA Advisor do swoich potrzeb
4. **Rozpocznij Analizę**: Zacznij zbierać i analizować dane

## Dodatkowe Zasoby

- **[FAQ](../../faq/)** - Odpowiedzi na najczęstsze pytania
- **[Informacje o Wydaniach](../../release-notes/)** - Najnowsze funkcje i aktualizacje
- **[Wsparcie](../2-screens-and-operations/12-help)** - Jak uzyskać pomoc

Jesteś gotowy do rozpoczęcia! Przejdź do [Przewodnika Instalacji](./installation) aby zainstalować QA Advisor na swojej stronie WordPress.
