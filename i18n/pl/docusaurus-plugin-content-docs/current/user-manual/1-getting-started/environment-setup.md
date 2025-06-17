---
sidebar_position: 2
title: Konfiguracja Środowiska
---

# Konfiguracja Środowiska

Aby zapewnić dokładne śledzenie i płynną wydajność z QA Advisor, zalecamy dostosowanie następujących ustawień serwera i wtyczek.

---

## 1. Kompresja i Minifikacja JavaScript

**Nie** kompresuj, minifikuj ani nie łącz plików JavaScript używanych przez QA Advisor.  
Niektóre wtyczki optymalizacyjne lub motywy mogą zakłócać skrypty śledzące, modyfikując lub opóźniając ich wykonanie.

> ✅ Sprawdź ustawienia swojej wtyczki cache lub optymalizacji  
> ✅ Wyłącz minifikację JS lub defer/async dla skryptów QA Advisor

Aby uzyskać więcej informacji technicznych, zobacz [Gdy jQuery jest Odraczane](/docs/user-manual/getting-started/when-defer-jquery).

---

## 2. Limit Pamięci PHP i Czas Wykonania

QA Advisor przetwarza dane śledzenia podczas dziennej agregacji, co może być intensywne pamięciowo na większych stronach.

Zalecamy następujące ustawienia PHP:

- `memory_limit`: **1024M** lub wyżej  
- `max_execution_time`: **240** sekund lub więcej

> 💡 Te ustawienia można zwykle dostosować przez `php.ini`, `.htaccess` lub panel kontrolny hostingu.  
> Jeśli nie jesteś pewien, zapytaj swojego dostawcę hostingu.

---

## 3. Kompatybilność Wtyczek i Motywów

QA Advisor działa z większością głównych wtyczek i motywów. Jednak zalecamy:

- Wyłączenie JavaScript defer/async dla krytycznych skryptów
- Upewnienie się, że twoja wtyczka cache pozwala na wyjście z `qa-heatmap-analytics`
- Unikanie duplikacji z innymi narzędziami śledzącymi, które modyfikują globalne zdarzenia

---

## 4. CDN i Migracja Serwera

Jeśli używasz CDN (np. Cloudflare) lub niedawno migrowałeś serwer:

- Wyczyść wszystkie cache (przeglądarka, wtyczka, CDN)
- Potwierdź, że skrypty QA Advisor nie są blokowane ani opóźniane
- Upewnij się, że strefa czasowa twojego serwera jest poprawna (używana do grupowania danych)

---

## 5. Opcjonalnie: Potwierdź Wyjście Skryptu

Aby zweryfikować, że skrypt śledzący jest poprawnie ładowany:

1. Odwiedź swoją stronę internetową będąc **niezalogowanym**
2. Kliknij prawym przyciskiem myszy i wybierz "Wyświetl źródło strony"
3. Przeszukaj HTML w poszukiwaniu `qahm` lub `qahmz`

> Jeśli te ciągi nie zostaną znalezione, skrypt może być zablokowany lub nie ładuje się.  
> Sprawdź błędy JavaScript lub konflikty wtyczek.

---
