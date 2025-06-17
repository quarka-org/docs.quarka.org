---
sidebar_position: 2
title: Omgeving Setup
---

# Omgeving Setup

Om nauwkeurige tracking en soepele prestaties met QA Advisor te garanderen, raden we aan de volgende server- en plugin-instellingen aan te passen.

---

## 1. JavaScript Compressie & Minificatie

Comprimeer, minificeer of combineer **geen** JavaScript-bestanden die door QA Advisor worden gebruikt.  
Sommige optimalisatie-plugins of thema's kunnen tracking-scripts verstoren door hun uitvoering te wijzigen of te vertragen.

> ✅ Controleer uw cache- of optimalisatie-plugin-instellingen  
> ✅ Schakel JS-minificatie of defer/async uit voor QA Advisor-scripts

Voor meer technische achtergrond, zie [Wanneer jQuery wordt Uitgesteld](/docs/user-manual/getting-started/when-defer-jquery).

---

## 2. PHP Geheugenlimiet & Uitvoeringstijd

QA Advisor verwerkt tracking-gegevens tijdens dagelijkse aggregatie, wat geheugenintensief kan zijn op grotere sites.

We raden de volgende PHP-instellingen aan:

- `memory_limit`: **1024M** of hoger  
- `max_execution_time`: **240** seconden of meer

> 💡 Deze instellingen kunnen meestal worden aangepast via `php.ini`, `.htaccess` of uw hosting-controlepaneel.  
> Als u het niet zeker weet, vraag het aan uw hosting-provider.

---

## 3. Plugin & Thema Compatibiliteit

QA Advisor werkt met de meeste grote plugins en thema's. We raden echter aan:

- JavaScript defer/async uitschakelen voor kritieke scripts
- Ervoor zorgen dat uw cache-plugin output van `qa-heatmap-analytics` toestaat
- Duplicatie vermijden met andere tracking-tools die globale events wijzigen

---

## 4. CDN & Server Migratie

Als u een CDN gebruikt (bijv. Cloudflare) of onlangs uw server hebt gemigreerd:

- Wis alle caches (browser, plugin, CDN)
- Bevestig dat QA Advisor-scripts niet worden geblokkeerd of vertraagd
- Zorg ervoor dat de tijdzone van uw server correct is (gebruikt voor gegevensgroepering)

---

## 5. Optioneel: Script Output Bevestigen

Om te verifiëren dat het tracking-script correct wordt geladen:

1. Bezoek uw website terwijl u **niet bent ingelogd**
2. Klik met de rechtermuisknop en kies "Paginabron bekijken"
3. Zoek in de HTML naar `qahm` of `qahmz`

> Als deze strings niet worden gevonden, kan het script geblokkeerd zijn of niet laden.  
> Controleer op JavaScript-fouten of plugin-conflicten.

---
