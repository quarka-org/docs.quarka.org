---
sidebar_position: 4
---

# Czas Rzeczywisty

Widok Czasu Rzeczywistego QA Advisor pozwala monitorować aktywność Twojej strony internetowej w momencie gdy się dzieje, dostarczając natychmiastowe wglądy w aktywnych odwiedzających, najpopularniejsze strony i zachowanie użytkowników w czasie rzeczywistym.

## Przegląd

Monitorowanie w czasie rzeczywistym jest niezbędne do:

- **Natychmiastowej Weryfikacji**: Potwierdzenia, że śledzenie działa prawidłowo
- **Monitorowania Wydarzeń**: Śledzenia kampanii, premier produktów lub specjalnych wydarzeń
- **Rozwiązywania Problemów**: Szybkiej identyfikacji problemów technicznych
- **Zaangażowania Na Żywo**: Obserwowania jak użytkownicy wchodzą w interakcje z nowymi treściami

## Układ Ekranu

### Panel Górny - Metryki Na Żywo

#### Aktywni Odwiedzający
- **Bieżąca Liczba**: Liczba odwiedzających obecnie na stronie
- **Trend 30 Minut**: Wykres aktywności z ostatnich 30 minut
- **Szczyt Dzienny**: Maksymalna liczba jednoczesnych odwiedzających dzisiaj

#### Wyświetlenia Stron (Ostatnia Godzina)
- **Całkowite Wyświetlenia**: Strony obejrzane w ostatniej godzinie
- **Tempo na Minutę**: Średnia wyświetleń na minutę
- **Porównanie**: Zmiana w stosunku do poprzedniej godziny

#### Nowi Odwiedzający
- **Procent**: Procent nowych odwiedzających wśród aktywnych
- **Pierwsze Wizyty**: Odwiedzający, którzy odwiedzają stronę po raz pierwszy
- **Powracający**: Odwiedzający, którzy już byli na stronie

### Sekcja Środkowa - Aktywność Na Żywo

#### Mapa Odwiedzających
Wizualizacja geograficzna w czasie rzeczywistym:

- **Aktywne Lokalizacje**: Punkty na mapie świata pokazujące aktywnych odwiedzających
- **Koncentracje**: Obszary z większą gęstością odwiedzających
- **Szczegóły Kraju**: Kliknij na kraj, aby zobaczyć konkretne szczegóły
- **Interaktywne Powiększanie**: Powiększ, aby zobaczyć szczegóły regionalne

#### Strumień Aktywności
Kanał na żywo działań użytkowników:

```
🟢 Warszawa, Polska - Wyświetla: /produkty/smartphone
🔵 Kraków, Polska - Nowy odwiedzający na: /
🟡 Gdańsk, Polska - Klik na: "Dodaj do koszyka"
🟠 Wrocław, Polska - Wyjście z: /checkout
```

#### Aktywne Strony
Lista stron obecnie wyświetlanych:

- **URL Strony**: Ścieżka strony
- **Aktywni Odwiedzający**: Liczba osób na stronie teraz
- **Średni Czas**: Średni czas spędzony na stronie
- **Działania**: Linki do szczegółów lub map ciepła

### Panel Boczny - Szybkie Wglądy

#### Top Źródła Ruchu (Na Żywo)
- **Ruch Bezpośredni**: Odwiedzający przychodzący bezpośrednio
- **Wyszukiwarki**: Ruch z Google, Bing, itp.
- **Media Społecznościowe**: Ruch z Facebook, Twitter, LinkedIn
- **Polecenia**: Ruch z innych stron internetowych

#### Aktywne Urządzenia
- **Desktop**: Procent odwiedzających desktop
- **Mobile**: Procent odwiedzających mobilnych
- **Tablet**: Procent odwiedzających tablet
- **Systemy Operacyjne**: Rozkład OS w czasie rzeczywistym

#### Używane Przeglądarki
- **Chrome**: Procent użytkowników Chrome
- **Safari**: Procent użytkowników Safari
- **Firefox**: Procent użytkowników Firefox
- **Inne**: Inne przeglądarki w użyciu

## Funkcjonalności Zaawansowane

### Filtry Czasu Rzeczywistego

#### Filtr Geograficzny
- **Kraj**: Filtruj według konkretnego kraju
- **Region**: Powiększ konkretne regiony
- **Miasto**: Skupienie na konkretnych miastach
- **Strefa Czasowa**: Uwzględnij różnice stref czasowych

#### Filtr Behawioralny
- **Nowi vs Powracający**: Segmentuj według typu odwiedzającego
- **Czas Trwania Sesji**: Filtruj według długości sesji
- **Odwiedzone Strony**: Filtruj według liczby obejrzanych stron
- **Zaangażowanie**: Filtruj według poziomu interakcji

#### Filtr Techniczny
- **Urządzenie**: Desktop, mobile, tablet
- **Przeglądarka**: Typ używanej przeglądarki
- **System Operacyjny**: OS odwiedzającego
- **Rozdzielczość Ekranu**: Rozmiary ekranu

### Alerty Czasu Rzeczywistego

#### Konfiguracja Alertów
Ustaw alerty dla konkretnych wydarzeń:

```javascript
{
  "traffic_spike": {
    "threshold": 200,
    "condition": "visitors > threshold",
    "notification": "email + dashboard"
  },
  "conversion_goal": {
    "event": "purchase_completed",
    "notification": "real_time_popup"
  },
  "error_detection": {
    "condition": "404_errors > 10/minute",
    "notification": "immediate_alert"
  }
}
```

#### Typy Alertów
- **Skoki Ruchu**: Nagłe wzrosty odwiedzających
- **Spadki Ruchu**: Znaczące zmniejszenia
- **Błędy Techniczne**: 404, 500, błędy JavaScript
- **Osiągnięte Cele**: Konwersje lub kamienie milowe
- **Nietypowe Zachowania**: Niezwykłe wzorce

### Monitorowanie Kampanii

#### Śledzenie UTM w Czasie Rzeczywistym
Monitoruj wydajność kampanii:

- **utm_source**: Źródło kampanii (google, facebook, email)
- **utm_medium**: Używane medium (cpc, social, email)
- **utm_campaign**: Nazwa kampanii
- **utm_content**: Wariant treści
- **utm_term**: Słowa kluczowe (dla kampanii płatnych)

#### Panel Kampanii Na Żywo
- **Ruch na Kampanię**: Odwiedzający dla każdej aktywnej kampanii
- **Konwersje Na Żywo**: Cele ukończone dla kampanii
- **Koszt na Klik**: CPC w czasie rzeczywistym (jeśli zintegrowane)
- **ROI Natychmiastowy**: Zwrot z inwestycji na żywo

### Interakcje Użytkowników Na Żywo

#### Mapa Ciepła Czasu Rzeczywistego
Wizualizuj interakcje w momencie gdy się dzieją:

- **Kliki Na Żywo**: Punkty pojawiające się gdy użytkownicy klikają
- **Ruch Myszy**: Ślady ruchu myszy
- **Zachowanie Przewijania**: Jak użytkownicy przewijają strony
- **Interakcje z Formularzami**: Interakcje z formularzami w czasie rzeczywistym

#### Odtwarzanie Sesji Na Żywo
Oglądaj sesje użytkowników w czasie rzeczywistym:

- **Wybór Sesji**: Wybierz aktywną sesję do obserwowania
- **Odtwarzanie Na Żywo**: Zobacz co użytkownik robi teraz
- **Adnotacje**: Dodawaj notatki podczas obserwacji
- **Kontrole Prywatności**: Przestrzegaj ustawień prywatności

## Praktyczne Zastosowanie

### Weryfikacja Po Uruchomieniu

Po uruchomieniu nowych treści lub funkcjonalności:

1. **Monitoruj Ruch**: Sprawdź czy jest wzrost odwiedzających
2. **Obserwuj Zachowanie**: Zobacz jak użytkownicy wchodzą w interakcje z nowościami
3. **Identyfikuj Problemy**: Szybko wykryj ewentualne błędy
4. **Mierz Zaangażowanie**: Oceń czy zmiany poprawiają zaangażowanie

### Zarządzanie Specjalnymi Wydarzeniami

Podczas wydarzeń, promocji lub premier:

- **Przygotowanie**: Ustaw alerty dla skoków ruchu
- **Aktywne Monitorowanie**: Śledź wydarzenie w czasie rzeczywistym
- **Szybkie Rozwiązywanie**: Interweniuj natychmiast przy problemach
- **Optymalizacja Na Żywo**: Modyfikuj strategie na podstawie danych na żywo

### Proaktywne Wsparcie Klientów

Wykorzystuj dane czasu rzeczywistego do wsparcia:

- **Identyfikacja Problemów**: Wykryj użytkowników w trudnościach
- **Proaktywna Interwencja**: Oferuj pomoc zanim poproszą
- **Targetowanie Czatu**: Rozpocznij czat z konkretnymi użytkownikami
- **Personalizacja**: Personalizuj doświadczenie na podstawie zachowania

## Konfiguracja Zaawansowana

### Ustawienia Wydajności

#### Częstotliwość Aktualizacji
```javascript
{
  "update_frequency": {
    "high_traffic": "1_second",
    "normal_traffic": "5_seconds",
    "low_traffic": "15_seconds"
  },
  "auto_adjust": true
}
```

#### Optymalizacja Zasobów
- **Adaptacyjne Odpytywanie**: Częstotliwość dostosowująca się do ruchu
- **Kompresja Danych**: Kompresja danych dla wolnych połączeń
- **Selektywne Aktualizacje**: Aktualizuj tylko zmienione dane
- **Przetwarzanie w Tle**: Przetwarzanie w tle

### Prywatność i Zgodność

#### Anonimizacja Czasu Rzeczywistego
- **Maskowanie IP**: Maskowanie adresów IP
- **Rozmywanie Lokalizacji**: Przybliżone lokalizacje
- **Anonimizacja Sesji**: Anonimowe sesje
- **Zgodność GDPR**: Automatyczna zgodność GDPR

#### Kontrole Dostępu
- **Dostęp Oparty na Rolach**: Dostęp na podstawie ról
- **Ograniczenia IP**: Ograniczenia dla IP
- **Dostęp Czasowy**: Dostęp ograniczony w czasie
- **Logowanie Audytu**: Logi dostępów

## Rozwiązywanie Problemów

### Typowe Problemy

#### Dane Nie Aktualizują Się
**Symptomy**: Dane nie aktualizują się w czasie rzeczywistym
**Rozwiązania**:
1. Sprawdź połączenie internetowe
2. Sprawdź czy JavaScript jest włączony
3. Wyłącz rozszerzenia przeglądarki blokujące skrypty
4. Wyczyść cache i przeładuj stronę

#### Wolna Wydajność
**Symptomy**: Strona czasu rzeczywistego jest wolna lub się zawiesza
**Rozwiązania**:
1. Zmniejsz częstotliwość aktualizacji
2. Ogranicz liczbę wyświetlanych elementów
3. Zamknij inne karty przeglądarki
4. Sprawdź wykorzystanie CPU systemu

#### Rozbieżności w Liczbach
**Symptomy**: Liczby nie pasują do innych źródeł
**Możliwe Przyczyny**:
- Różnice w strefach czasowych
- Różne zastosowane filtry
- Różne definicje metryk
- Opóźnienia w synchronizacji danych

### Zaawansowane Debugowanie

#### Konsola Deweloperska
Użyj konsoli przeglądarki do debugowania:

```javascript
// Sprawdź połączenie WebSocket
console.log(QAAdvisor.realtime.connection.status);

// Sprawdź częstotliwość aktualizacji
console.log(QAAdvisor.realtime.updateFrequency);

// Debug wydarzeń czasu rzeczywistego
QAAdvisor.realtime.debug = true;
```

#### Logi Systemu
Sprawdź logi pod kątem problemów po stronie serwera:

```
[2025-06-16 10:30:15] Realtime: WebSocket connection established
[2025-06-16 10:30:16] Realtime: 45 active visitors tracked
[2025-06-16 10:30:17] Realtime: Data update sent to 12 dashboard clients
```

## Najlepsze Praktyki

### Efektywne Monitorowanie
1. **Ustaw Inteligentne Alerty**: Nie za dużo, nie za mało
2. **Personalizuj Panel**: Pokazuj tylko istotne metryki
3. **Dokumentuj Anomalie**: Śledź niezwykłe wydarzenia
4. **Szkol Zespół**: Upewnij się, że wszyscy wiedzą jak używać funkcjonalności

### Optymalizacja Wydajności
- **Używaj Filtrów**: Zmniejsz obciążenie filtrując niepotrzebne dane
- **Monitoruj Zasoby**: Sprawdzaj wpływ na wydajność serwera
- **Planuj Pojemność**: Przygotuj infrastrukturę na skoki ruchu
- **Regularne Testy**: Sprawdzaj czy wszystko działa podczas niskiego ruchu

## Następne Kroki

Po zapoznaniu się z czasem rzeczywistym:

1. **[Odbiorcy](/docs/user-manual/screens-and-operations/audience)** - Analizuj odwiedzających szczegółowo
2. **[Mapy Ciepła](/docs/user-manual/screens-and-operations/heatmaps)** - Wizualizuj interakcje
3. **[Cele](/docs/user-manual/screens-and-operations/goals)** - Skonfiguruj śledzenie konwersji

---

Monitorowanie czasu rzeczywistego daje Ci natychmiastowy puls Twojej strony internetowej. Używaj go do szybkich weryfikacji, monitorowania wydarzeń i proaktywnego rozwiązywania problemów.
