---
sidebar_position: 2
title: Configurazione dell'Ambiente
---

# Configurazione dell'Ambiente

Per garantire un tracciamento accurato e prestazioni fluide con QA Advisor, raccomandiamo di regolare le seguenti impostazioni del server e del plugin.

---

## 1. Compressione e Minificazione JavaScript

**Non** comprimere, minificare o combinare i file JavaScript utilizzati da QA Advisor.  
Alcuni plugin di ottimizzazione o temi potrebbero interferire con gli script di tracciamento modificando o ritardando la loro esecuzione.

> ✅ Controlla le impostazioni del tuo plugin di cache o ottimizzazione  
> ✅ Disabilita la minificazione JS o defer/async per gli script QA Advisor

Per maggiori informazioni tecniche, vedi [Quando jQuery è Differito](/docs/user-manual/getting-started/when-defer-jquery).

---

## 2. Limite di Memoria PHP e Tempo di Esecuzione

QA Advisor elabora i dati di tracciamento durante l'aggregazione giornaliera, che può essere intensiva in memoria su siti più grandi.

Raccomandiamo le seguenti impostazioni PHP:

- `memory_limit`: **1024M** o superiore  
- `max_execution_time`: **240** secondi o più

> 💡 Queste impostazioni possono solitamente essere regolate tramite `php.ini`, `.htaccess` o il pannello di controllo del tuo hosting.  
> Se non sei sicuro, chiedi al tuo provider di hosting.

---

## 3. Compatibilità Plugin e Tema

QA Advisor funziona con la maggior parte dei principali plugin e temi. Tuttavia, raccomandiamo:

- Disabilitare JavaScript defer/async per script critici
- Assicurarsi che il tuo plugin di cache permetta l'output da `qa-heatmap-analytics`
- Evitare duplicazioni con altri strumenti di tracciamento che modificano eventi globali

---

## 4. CDN e Migrazione Server

Se stai utilizzando un CDN (es. Cloudflare) o hai recentemente migrato il tuo server:

- Svuota tutte le cache (browser, plugin, CDN)
- Conferma che gli script QA Advisor non siano bloccati o ritardati
- Assicurati che il fuso orario del tuo server sia corretto (utilizzato per il raggruppamento dati)

---

## 5. Opzionale: Conferma Output Script

Per verificare che lo script di tracciamento si stia caricando correttamente:

1. Visita il tuo sito web mentre **non sei loggato**
2. Clicca con il tasto destro e scegli "Visualizza sorgente pagina"
3. Cerca nell'HTML `qahm` o `qahmz`

> Se queste stringhe non vengono trovate, lo script potrebbe essere bloccato o non caricarsi.  
> Controlla errori JavaScript o conflitti di plugin.

---
