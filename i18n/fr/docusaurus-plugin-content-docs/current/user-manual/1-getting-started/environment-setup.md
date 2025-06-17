---
sidebar_position: 2
title: Configuration de l'Environnement
---

# Configuration de l'Environnement

Pour assurer un suivi précis et des performances fluides avec QA Advisor, nous recommandons d'ajuster les paramètres de serveur et de plugin suivants.

---

## 1. Compression et Minification JavaScript

Ne compressez, ne minifiez ou ne combinez **pas** les fichiers JavaScript utilisés par QA Advisor.  
Certains plugins d'optimisation ou thèmes peuvent interférer avec les scripts de suivi en modifiant ou retardant leur exécution.

> ✅ Vérifiez les paramètres de votre plugin de cache ou d'optimisation  
> ✅ Désactivez la minification JS ou defer/async pour les scripts QA Advisor

Pour plus d'informations techniques, voir [Quand jQuery est Différé](/docs/user-manual/getting-started/when-defer-jquery).

---

## 2. Limite de Mémoire PHP et Temps d'Exécution

QA Advisor traite les données de suivi lors de l'agrégation quotidienne, ce qui peut être intensif en mémoire sur les sites plus importants.

Nous recommandons les paramètres PHP suivants :

- `memory_limit` : **1024M** ou plus  
- `max_execution_time` : **240** secondes ou plus

> 💡 Ces paramètres peuvent généralement être ajustés via `php.ini`, `.htaccess` ou votre panneau de contrôle d'hébergement.  
> Si vous n'êtes pas sûr, demandez à votre fournisseur d'hébergement.

---

## 3. Compatibilité Plugin et Thème

QA Advisor fonctionne avec la plupart des plugins et thèmes majeurs. Cependant, nous recommandons :

- Désactiver JavaScript defer/async pour les scripts critiques
- S'assurer que votre plugin de cache autorise la sortie de `qa-heatmap-analytics`
- Éviter la duplication avec d'autres outils de suivi qui modifient les événements globaux

---

## 4. CDN et Migration de Serveur

Si vous utilisez un CDN (ex. Cloudflare) ou avez récemment migré votre serveur :

- Videz tous les caches (navigateur, plugin, CDN)
- Confirmez que les scripts QA Advisor ne sont pas bloqués ou retardés
- Assurez-vous que le fuseau horaire de votre serveur est correct (utilisé pour le regroupement des données)

---

## 5. Optionnel : Confirmer la Sortie du Script

Pour vérifier que le script de suivi se charge correctement :

1. Visitez votre site web en étant **non connecté**
2. Clic droit et choisissez "Afficher le code source de la page"
3. Recherchez dans le HTML `qahm` ou `qahmz`

> Si ces chaînes ne sont pas trouvées, le script peut être bloqué ou ne pas se charger.  
> Vérifiez les erreurs JavaScript ou les conflits de plugins.

---
