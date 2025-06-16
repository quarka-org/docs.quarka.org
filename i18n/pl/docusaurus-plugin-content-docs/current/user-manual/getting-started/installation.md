---
sidebar_position: 2
---

# Instalacja

Ten przewodnik przeprowadzi Cię przez proces instalacji QA Advisor na Twojej stronie WordPress.

## Metody Instalacji

### Metoda 1: Instalacja przez Panel Administracyjny WordPress (Zalecana)

1. **Pobierz QA Advisor**
   - Przejdź do [oficjalnej strony pobierania](/)
   - Kliknij "🚀 Pobierz QA Advisor (β)"
   - Zapisz plik ZIP na swoim komputerze

2. **Zaloguj się do Panelu Administracyjnego WordPress**
   - Przejdź do `twojastrona.com/wp-admin`
   - Zaloguj się swoimi danymi administratora

3. **Przejdź do Sekcji Wtyczek**
   - W menu bocznym kliknij "Wtyczki"
   - Kliknij "Dodaj nową"

4. **Prześlij Wtyczkę**
   - Kliknij "Prześlij wtyczkę" w górnej części strony
   - Kliknij "Wybierz plik" i wybierz plik ZIP QA Advisor
   - Kliknij "Zainstaluj teraz"

5. **Aktywuj Wtyczkę**
   - Po instalacji kliknij "Aktywuj wtyczkę"
   - QA Advisor jest teraz zainstalowany i aktywny

### Metoda 2: Instalacja przez FTP

Jeśli wolisz zainstalować ręcznie przez FTP:

1. **Rozpakuj Plik ZIP**
   - Rozpakuj plik ZIP QA Advisor na swoim komputerze
   - Powinieneś zobaczyć folder o nazwie `qa-heatmap-analytics`

2. **Prześlij przez FTP**
   - Połącz się ze swoim serwerem przez FTP
   - Przejdź do folderu `/wp-content/plugins/`
   - Prześlij cały folder `qa-heatmap-analytics`

3. **Aktywuj przez WordPress**
   - Przejdź do panelu administracyjnego WordPress
   - Przejdź do "Wtyczki" > "Zainstalowane wtyczki"
   - Znajdź "QA Advisor" i kliknij "Aktywuj"

## Konfiguracja Po Instalacji

### Kreator Konfiguracji

Po aktywacji QA Advisor automatycznie uruchomi kreator konfiguracji:

1. **Ekran Powitalny**
   - Przegląd funkcjonalności QA Advisor
   - Kliknij "Rozpocznij konfigurację"

2. **Ustawienia Podstawowe**
   - Skonfiguruj podstawowe ustawienia śledzenia
   - Wybierz jakie typy danych zbierać

3. **Konfiguracja Prywatności**
   - Przejrzyj i skonfiguruj ustawienia prywatności
   - Ustaw zgodność z GDPR jeśli potrzebne

4. **Tryb Zaawansowany (Opcjonalny)**
   - Włącz zaawansowane funkcjonalności takie jak:
     - Wglądy w odbiorców
     - Zaawansowane śledzenie celów
     - Dodatkowe moduły AI

### Weryfikacja Instalacji

Aby sprawdzić czy QA Advisor został poprawnie zainstalowany:

1. **Sprawdź Menu Administracyjne**
   - Powinieneś zobaczyć "QA Advisor" w menu bocznym WordPress

2. **Uzyskaj Dostęp do Panelu Kontrolnego**
   - Kliknij "QA Advisor" w menu
   - Powinieneś zobaczyć główny panel kontrolny

3. **Sprawdź Śledzenie**
   - Przejdź do sekcji "Czas Rzeczywisty"
   - Otwórz swoją stronę w nowej karcie
   - Powinieneś zobaczyć aktywność w czasie rzeczywistym w panelu

## Rozwiązywanie Problemów z Instalacją

### Typowe Problemy

**Błąd: "Wtyczka nie ma prawidłowego nagłówka"**
- Upewnij się, że pobrałeś właściwy plik
- Spróbuj ponownie pobrać z oficjalnego źródła

**Błąd Pamięci PHP**
- Zwiększ limit pamięci PHP (zobacz [Konfiguracja Środowiska](/docs/user-manual/getting-started/environment-setup))
- Skontaktuj się ze swoim dostawcą hostingu po pomoc

**Wtyczka Niewidoczna Po Aktywacji**
- Wyczyść cache przeglądarki
- Sprawdź czy są konflikty z innymi wtyczkami
- Sprawdź uprawnienia plików

### Kontrole Kompatybilności

Przed instalacją QA Advisor sprawdza:

- Wersję WordPress (5.0+)
- Wersję PHP (7.4+)
- Wymagane rozszerzenia PHP
- Uprawnienia zapisu plików
- Dostępność pamięci

Jeśli jakakolwiek kontrola się nie powiedzie, otrzymasz konkretne instrukcje rozwiązania problemu.

## Konfiguracja Zaawansowana

### Konfiguracja Ręczna

Jeśli wolisz pominąć kreator:

1. **Przejdź do Ustawień**
   - QA Advisor > Ustawienia
   - Skonfiguruj ręcznie każdą sekcję

2. **Główne Ustawienia**
   - Włącz/wyłącz śledzenie
   - Skonfiguruj domeny śledzenia
   - Ustaw limity zbierania danych

3. **Ustawienia Prywatności**
   - Skonfiguruj anonimizację IP
   - Ustaw okresy przechowywania danych
   - Skonfiguruj wykluczenia użytkowników

### Konfiguracja Multi-site

Dla instalacji WordPress multi-site:

1. **Instalacja na Poziomie Sieci**
   - Zainstaluj jako wtyczkę sieciową jeśli chcesz
   - Każda strona będzie miała oddzielne dane

2. **Konfiguracja dla Strony**
   - Każda strona może mieć niezależne konfiguracje
   - Administratorzy stron mogą zarządzać własnymi ustawieniami

## Następne Kroki

Po udanej instalacji:

1. **[Konfiguracja Środowiska](/docs/user-manual/getting-started/environment-setup)** - Zoptymalizuj wydajność
2. **[Panel Kontrolny](/docs/user-manual/screens-and-operations/dashboard)** - Eksploruj główny interfejs
3. **[Widok w Czasie Rzeczywistym](/docs/user-manual/screens-and-operations/realtime)** - Sprawdź czy śledzenie działa

## Wsparcie

Jeśli potrzebujesz pomocy z instalacją:

- Skonsultuj się z naszymi [FAQ](/docs/faq)
- Odwiedź [repozytorium GitHub](https://github.com/quarka-org) dla wsparcia technicznego
- Skontaktuj się z wsparciem w celu uzyskania spersonalizowanej pomocy

---

Po ukończeniu instalacji przejdź do [Konfiguracji Środowiska](/docs/user-manual/getting-started/environment-setup) aby zoptymalizować wydajność.
