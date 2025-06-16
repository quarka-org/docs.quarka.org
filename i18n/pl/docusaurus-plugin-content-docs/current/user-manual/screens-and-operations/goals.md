---
sidebar_position: 10
---

# Cele

Sekcja Cele pozwala Ci konfigurować i monitorować cele konwersji, śledzić lejek sprzedaży i mierzyć sukces Twoich kampanii marketingowych poprzez konkretne i praktyczne metryki.

## Przegląd

Śledzenie celów jest fundamentalne dla:

- **Pomiaru ROI**: Mierzenia zwrotu z inwestycji marketingowych
- **Optymalizacji Konwersji**: Optymalizacji współczynników konwersji
- **Business Intelligence**: Uzyskiwania wglądów w zachowania generujące wartość
- **Śledzenia Wydajności**: Monitorowania postępu w kierunku celów biznesowych

## Typy Celów

### Cele Docelowe

#### Cele URL Destination
- **Wizyty Stron**: Wizyty na konkretnych stronach (podziękowania, potwierdzenie zamówienia)
- **Ukończenia Formularzy**: Ukończenie formularzy kontaktowych/rejestracyjnych
- **Strony Pobierania**: Dostęp do stron pobierania
- **Potwierdzenia Subskrypcji**: Potwierdzenia zapisów do newslettera

#### Konfiguracja Celów Destination
```javascript
{
  "goal_name": "Contact Form Completion",
  "type": "destination",
  "url_pattern": "/thank-you-contact",
  "match_type": "exact", // exact, begins_with, regex
  "case_sensitive": false,
  "value": 25.00
}
```

### Cele Czasu Trwania

#### Cele Session Duration
- **Próg Zaangażowania**: Sesje przekraczające określony czas trwania
- **Konsumpcja Treści**: Minimalny czas na ważnych treściach
- **Badanie Produktów**: Czas poświęcony na badanie produktów
- **Zaangażowanie Edukacyjne**: Czas na treściach edukacyjnych

#### Konfiguracja Celów Duration
```javascript
{
  "goal_name": "High Engagement Session",
  "type": "duration",
  "threshold_seconds": 300, // 5 minut
  "comparison": "greater_than",
  "value": 10.00
}
```

### Cele Stron na Sesję

#### Cele Page Depth
- **Eksploracja Strony**: Minimalna liczba odwiedzonych stron
- **Odkrywanie Treści**: Dogłębna eksploracja treści
- **Przeglądanie Produktów**: Nawigacja po katalogu produktów
- **Zachowanie Badawcze**: Dogłębne zachowanie badawcze

#### Konfiguracja Celów Pages/Session
```javascript
{
  "goal_name": "Deep Site Exploration",
  "type": "pages_per_session",
  "threshold_pages": 5,
  "comparison": "greater_than_or_equal",
  "value": 15.00
}
```

### Cele Wydarzeń

#### Niestandardowe Cele Event
- **Kliki Przycisków**: Kliki na konkretne przyciski
- **Odtwarzanie Wideo**: Odtwarzanie wideo
- **Pobieranie Plików**: Pobieranie konkretnych plików
- **Udostępnienia Społecznościowe**: Udostępnienia społecznościowe
- **Zapisy do Newslettera**: Zapisy do newslettera

#### Konfiguracja Celów Event
```javascript
{
  "goal_name": "Product Video Watched",
  "type": "event",
  "event_category": "video",
  "event_action": "play",
  "event_label": "product_demo",
  "value": 20.00
}
```

## Lejek Konwersji

### Konfiguracja Lejka

#### Lejek Wieloetapowy
```javascript
{
  "funnel_name": "E-commerce Purchase",
  "steps": [
    {
      "step": 1,
      "name": "Product View",
      "url": "/product/*",
      "required": false
    },
    {
      "step": 2,
      "name": "Add to Cart",
      "url": "/cart",
      "required": true
    },
    {
      "step": 3,
      "name": "Checkout",
      "url": "/checkout",
      "required": true
    },
    {
      "step": 4,
      "name": "Purchase Complete",
      "url": "/order-confirmation",
      "required": true
    }
  ]
}
```

#### Analiza Lejka
- **Współczynniki Konwersji**: Współczynnik konwersji dla każdego kroku
- **Punkty Porzucenia**: Punkty porzucenia w lejku
- **Wąskie Gardła**: Wąskie gardła procesu
- **Możliwości Optymalizacji**: Możliwości optymalizacji

### Wizualizacja Lejka

#### Wizualne Raporty Lejka
- **Podział Krok po Kroku**: Szczegółowy podział na kroki
- **Wizualizacja Przepływu**: Wizualizacja przepływu użytkowników
- **Analiza Porzuceń**: Analiza porzuceń
- **Analiza Kohorty**: Analiza kohorty w lejku

#### Metryki Lejka
- **Ogólny Współczynnik Konwersji**: Ogólny współczynnik konwersji
- **Współczynniki Konwersji Kroków**: Współczynniki dla pojedynczych kroków
- **Średni Czas Między Krokami**: Średni czas między krokami
- **Prędkość Lejka**: Prędkość postępu w lejku

## Śledzenie E-commerce

### Rozszerzone E-commerce

#### Wydajność Produktów
- **Wyświetlenia Produktów**: Wyświetlenia produktów
- **Dodanie do Koszyka**: Dodania do koszyka
- **Usunięcie z Koszyka**: Usunięcia z koszyka
- **Ukończenia Zakupów**: Ukończenia zakupów

#### Śledzenie Transakcji
```javascript
{
  "transaction_id": "TXN-12345",
  "revenue": 299.99,
  "tax": 24.00,
  "shipping": 15.00,
  "currency": "PLN",
  "items": [
    {
      "item_id": "PROD-001",
      "item_name": "Smartphone XYZ",
      "category": "Electronics",
      "quantity": 1,
      "price": 299.99
    }
  ]
}
```

#### Metryki E-commerce
- **Przychody**: Całkowite przychody
- **Średnia Wartość Zamówienia**: Średnia wartość zamówienia
- **Współczynnik Zakupów**: Współczynnik zakupów
- **Przychód na Odwiedzającego**: Przychód na odwiedzającego
- **Wydajność Produktów**: Wydajność pojedynczych produktów

### Zachowanie Zakupowe

#### Analiza Koszyka
- **Współczynnik Porzucenia Koszyka**: Współczynnik porzucenia koszyka
- **Średnia Wartość Koszyka**: Średnia wartość koszyka
- **Produkty na Koszyk**: Średnie produkty na koszyk
- **Odzyskiwanie Koszyka**: Odzyskiwanie porzuconych koszyków

#### Analiza Checkout
- **Porzucenie Checkout**: Porzucenie checkout
- **Wydajność Metod Płatności**: Wydajność metod płatności
- **Wpływ Opcji Dostawy**: Wpływ opcji dostawy
- **Analiza Pól Formularza**: Analiza pól formularza

## Generowanie Leadów

### Śledzenie Leadów

#### Źródła Leadów
- **Leady Organiczne**: Leady z ruchu organicznego
- **Leady Płatne**: Leady z ruchu płatnego
- **Leady Społecznościowe**: Leady z mediów społecznościowych
- **Leady Email**: Leady z marketingu email
- **Leady Polecające**: Leady z poleceń

#### Punktacja Jakości Leadów
```javascript
{
  "lead_scoring": {
    "demographic_fit": 25,    // 0-25 punktów
    "behavioral_signals": 35, // 0-35 punktów
    "engagement_level": 25,   // 0-25 punktów
    "source_quality": 15      // 0-15 punktów
  },
  "total_score": 100,
  "grade": "A" // A, B, C, D na podstawie wyniku
}
```

#### Śledzenie Pielęgnowania Leadów
- **Zaangażowanie Email**: Zaangażowanie w pielęgnowanie email
- **Konsumpcja Treści**: Konsumpcja treści edukacyjnych
- **Zachowanie na Stronie**: Zachowanie na stronie internetowej
- **Interakcja ze Sprzedażą**: Interakcje z zespołem sprzedaży

### Cele Specyficzne dla B2B

#### Marketing Oparty na Kontach
- **Wizyty Kont Docelowych**: Wizyty kont docelowych
- **Zaangażowanie Decydentów**: Zaangażowanie decydentów
- **Pobierania Treści**: Pobierania treści B2B
- **Prośby o Demo**: Prośby o demo produktu

#### Integracja Lejka Sprzedaży
- **Leady Kwalifikowane Marketingowo**: Leady kwalifikowane przez marketing
- **Leady Kwalifikowane Sprzedażowo**: Leady kwalifikowane przez sprzedaż
- **Tworzenie Możliwości**: Tworzenie możliwości
- **Zamknięcie Transakcji**: Zamknięcie kontraktów

## Modelowanie Atrybucji

### Atrybucja Multi-Touch

#### Modele Atrybucji
- **Pierwszy Dotyk**: Atrybucja pierwszego dotyku
- **Ostatni Dotyk**: Atrybucja ostatniego dotyku
- **Liniowa**: Liniowa rozproszona atrybucja
- **Zanik Czasowy**: Zanik czasowy
- **Oparta na Pozycji**: Oparta na pozycji (40-20-40)
- **Oparta na Danych**: Model oparty na danych

#### Niestandardowa Atrybucja
```javascript
{
  "attribution_model": "custom",
  "touchpoint_weights": {
    "first_touch": 0.4,
    "middle_touches": 0.2,
    "last_touch": 0.4
  },
  "lookback_window": 30, // dni
  "conversion_credit": "fractional"
}
```

### Śledzenie Cross-Device

#### Mapowanie Podróży Użytkownika
- **Przełączanie Urządzeń**: Zmiana urządzenia w podróży
- **Konwersje Cross-Device**: Konwersje między urządzeniami
- **Podróże Multi-Session**: Podróże wielosesyjne
- **Rozwiązywanie Tożsamości**: Rozwiązywanie tożsamości użytkownika

#### Wyzwania Atrybucji
- **Ograniczenia Cookie**: Ograniczenia cookie
- **Zgodność z Prywatnością**: Zgodność z prywatnością
- **Fragmentacja Danych**: Fragmentacja danych
- **Dopasowywanie Tożsamości**: Dopasowywanie tożsamości

## Zaawansowana Konfiguracja Celów

### Inteligentne Cele

#### Wykrywanie Celów Oparte na AI
- **Automatyczne Odkrywanie Celów**: Automatyczne odkrywanie celów
- **Rozpoznawanie Wzorców Behawioralnych**: Rozpoznawanie wzorców behawioralnych
- **Predykcyjne Ustawianie Celów**: Predykcyjne ustawianie celów
- **Dynamiczne Dostosowywanie Celów**: Dynamiczne dostosowywanie celów

#### Optymalizacja Uczenia Maszynowego
- **Predykcja Konwersji**: Predykcja konwersji
- **Optymalizacja Wartości Celów**: Optymalizacja wartości celów
- **Segmentacja Publiczności**: Segmentacja publiczności dla celów
- **Wyzwalacze Personalizacji**: Wyzwalacze personalizacji

### Cele Warunkowe

#### Cele Oparte na Regułach
```javascript
{
  "goal_name": "High-Value Customer",
  "conditions": [
    {
      "metric": "session_duration",
      "operator": ">",
      "value": 600
    },
    {
      "metric": "pages_viewed",
      "operator": ">=",
      "value": 10
    },
    {
      "metric": "previous_purchases",
      "operator": ">",
      "value": 0
    }
  ],
  "logic": "AND",
  "value": 100.00
}
```

#### Dynamiczne Wartości Celów
- **Wartości Oparte na Czasie**: Wartości oparte na czasie
- **Wartości Segmentów Użytkowników**: Wartości dla segmentów użytkowników
- **Wartości Kategorii Produktów**: Wartości dla kategorii produktów
- **Wartości Specyficzne dla Kampanii**: Wartości specyficzne dla kampanii

## Raportowanie i Analityka

### Raporty Wydajności Celów

#### Raporty Konwersji
- **Współczynnik Ukończenia Celów**: Współczynnik ukończenia celów
- **Wartość Celów**: Całkowita wartość celów
- **Trendy Konwersji**: Trendy konwersji
- **Porównanie Celów**: Porównanie wydajności celów

#### Raporty Lejka
- **Wizualizacja Lejka**: Wizualizacja lejka
- **Analiza Kroków**: Analiza pojedynczych kroków
- **Analiza Porzuceń**: Analiza porzuceń
- **Rekomendacje Optymalizacji**: Rekomendacje optymalizacji

### Śledzenie Celów w Czasie Rzeczywistym

#### Monitorowanie Konwersji Na Żywo
- **Konwersje w Czasie Rzeczywistym**: Konwersje w czasie rzeczywistym
- **Alerty Celów**: Alerty celów
- **Panele Wydajności**: Panele wydajności na żywo
- **Monitorowanie Kampanii**: Monitorowanie kampanii na żywo

#### Automatyczne Alerty
```javascript
{
  "alert_name": "Low Conversion Rate",
  "condition": {
    "metric": "conversion_rate",
    "operator": "<",
    "threshold": 0.02,
    "time_period": "1_hour"
  },
  "notification": {
    "email": ["marketing@company.com"],
    "slack": "#marketing-alerts",
    "frequency": "immediate"
  }
}
```

## Integracja i Automatyzacja

### Integracja Platform Marketingowych

#### Integracja CRM
- **Synchronizacja Leadów**: Synchronizacja leadów
- **Atrybucja Konwersji**: Atrybucja konwersji
- **Podróż Klienta**: Kompletna podróż klienta
- **Pipeline Sprzedaży**: Pipeline sprzedaży

#### Integracja Email Marketingu
- **Śledzenie Konwersji**: Śledzenie konwersji email
- **Segmentacja**: Segmentacja oparta na celach
- **Automatyczne Kampanie**: Automatyczne kampanie
- **Atrybucja Wydajności**: Atrybucja wydajności

### Reguły Automatyzacji

#### Automatyzacja Oparta na Celach
- **Akcje Wyzwalające**: Akcje wyzwalające oparte na celach
- **Tworzenie Publiczności**: Automatyczne tworzenie publiczności
- **Optymalizacja Kampanii**: Automatyczna optymalizacja kampanii
- **Reguły Personalizacji**: Reguły personalizacji

#### Integracja Inteligentnej Licytacji
- **Licytacja Oparta na Konwersji**: Oferty oparte na konwersjach
- **Optymalizacja Wartości Celów**: Optymalizacja wartości celów
- **Automatyczna Alokacja Budżetu**: Automatyczna alokacja budżetu
- **Automatyczna Optymalizacja Wydajności**: Automatyczna optymalizacja wydajności

## Prywatność i Zgodność

### Śledzenie Celów Przyjazne Prywatności

#### Śledzenie Bez Cookie
- **Dane Własne**: Wykorzystanie danych własnych
- **Śledzenie Po Stronie Serwera**: Śledzenie po stronie serwera
- **Analityka Szanująca Prywatność**: Analityka szanująca prywatność
- **Zarządzanie Zgodami**: Zarządzanie zgodami

#### Zgodność GDPR
- **Minimalizacja Danych**: Minimalizacja danych
- **Ograniczenie Celu**: Ograniczenie celu
- **Śledzenie Zgód**: Śledzenie zgód
- **Prawo do Usunięcia**: Prawo do usunięcia

## Najlepsze Praktyki

### Strategia Celów
1. **Cele SMART**: Specific, Measurable, Achievable, Relevant, Time-bound
2. **Zgodność Biznesowa**: Zgodność z celami biznesowymi
3. **Przypisanie Wartości**: Realistyczne przypisanie wartości
4. **Regularne Przeglądy**: Regularne przeglądy wydajności

### Implementacja
- **Zacznij Prosto**: Zacznij od prostych celów
- **Testuj Dokładnie**: Dokładnie testuj konfiguracje
- **Dokumentuj Ustawienia**: Dokumentuj konfiguracje
- **Monitoruj Ciągle**: Ciągłe monitorowanie

### Optymalizacja
- **Decyzje Oparte na Danych**: Decyzje oparte na danych
- **Ciągłe Testowanie**: Ciągłe testowanie
- **Optymalizacja Lejka**: Systematyczna optymalizacja lejka
- **Analiza Atrybucji**: Regularna analiza atrybucji

## Następne Kroki

Po skonfigurowaniu celów:

1. **[Ustawienia](/docs/user-manual/screens-and-operations/settings)** - Skonfiguruj powiadomienia i automatyzacje
2. **[Panel Kontrolny](/docs/user-manual/screens-and-operations/dashboard)** - Monitoruj wydajność celów
3. **[Brains](/docs/user-manual/screens-and-operations/brains)** - Używaj AI do optymalizacji konwersji

---

Cele są sercem pomiaru sukcesu online. Konfiguruj je strategicznie, aby uzyskać praktyczne wglądy, które napędzają wzrost Twojego biznesu.
