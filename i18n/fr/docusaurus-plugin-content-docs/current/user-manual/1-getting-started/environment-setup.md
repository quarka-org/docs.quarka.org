---
sidebar_position: 2
title: Configuration de l'Environnement
---

# Configuration de l'Environnement

Pour garantir un suivi précis et des performances optimales avec QA Advisor, nous recommandons de configurer correctement votre environnement WordPress. Ce guide couvre les configurations de serveur, WordPress et plugins pour des performances optimales.

## Exigences Système

### Exigences Minimales
- **WordPress**: Version 5.9 ou supérieure
- **PHP**: Version 7.4 ou supérieure
- **MySQL**: Version 5.7 ou supérieure (ou MariaDB 10.2+)
- **Mémoire**: Au moins 128MB de limite mémoire PHP
- **Espace Disque**: 50MB d'espace disponible

### Spécifications Recommandées
- **WordPress**: Dernière version stable
- **PHP**: Version 8.0 ou supérieure
- **MySQL**: Version 8.0 ou supérieure
- **Mémoire**: 256MB ou plus de limite mémoire PHP
- **Espace Disque**: 200MB ou plus d'espace disponible

## Configuration du Serveur

### Paramètres PHP

Pour des performances optimales, configurez ces paramètres PHP:

```php
memory_limit = 256M
max_execution_time = 300
max_input_vars = 3000
post_max_size = 64M
upload_max_filesize = 64M
```

### Compression et Minification JavaScript

**Ne pas** compresser, minifier ou combiner les fichiers JavaScript utilisés par QA Advisor.  
Certains plugins d'optimisation ou thèmes peuvent interférer avec les scripts de suivi en modifiant ou retardant leur exécution.

> ✅ Vérifiez les paramètres de votre plugin de cache ou d'optimisation  
> ✅ Désactivez la minification JS ou defer/async pour les scripts QA Advisor

Pour plus d'informations techniques, voir [Quand jQuery est Différé](/docs/user-manual/getting-started/when-defer-jquery).

### Optimisation de Base de Données

Pour de meilleures performances de base de données:

```sql
SET GLOBAL innodb_buffer_pool_size = 256M;
SET GLOBAL query_cache_size = 64M;
SET GLOBAL query_cache_type = 1;
```

## Configuration WordPress

### Paramètres wp-config.php

Ajoutez ces configurations à votre fichier `wp-config.php`:

```php
define('WP_MEMORY_LIMIT', '256M');
define('WP_MAX_MEMORY_LIMIT', '512M');

define('WP_CACHE', true);

define('QAHM_LIMIT_PV_MONTH', 50000);
define('QAHM_LIMIT_SESSION_MONTH', 5000);
define('QAHM_DATA_RETENTION_DAYS', 90);
```

## Compatibilité Plugins et Thèmes

QA Advisor fonctionne avec la plupart des plugins et thèmes majeurs. Cependant, nous recommandons:

- Désactiver JavaScript defer/async pour les scripts critiques
- S'assurer que votre plugin de cache autorise la sortie de `qa-heatmap-analytics`
- Éviter la duplication avec d'autres outils de suivi qui modifient les événements globaux

### Configuration des Plugins de Cache

**WP Rocket**: Exclure les scripts QA Advisor de l'optimisation
```
/wp-content/plugins/qa-heatmap-analytics/js/qahm
/wp-content/plugins/qa-heatmap-analytics/js/qahmz
```

**W3 Total Cache**: Ajouter aux exclusions JavaScript  
**WP Super Cache**: Compatible sans configuration supplémentaire

## CDN et Migration de Serveur

Si vous utilisez un CDN (ex. Cloudflare) ou avez récemment migré votre serveur:

- Videz tous les caches (navigateur, plugin, CDN)
- Confirmez que les scripts QA Advisor ne sont pas bloqués ou retardés
- Assurez-vous que le fuseau horaire du serveur est correct (utilisé pour le regroupement des données)

### Configuration Cloudflare

```
URL: *votresite.com/wp-content/plugins/qa-heatmap-analytics/*
Paramètres:
- Cache Level: Cache Everything
- Edge Cache TTL: 1 mois
```

## Configuration de Sécurité

### Permissions de Fichiers

Définissez les permissions de fichiers appropriées:

```bash
chmod 755 wp-content/plugins/qa-heatmap-analytics/
chmod 644 wp-content/plugins/qa-heatmap-analytics/*.php
```

### Paramètres Firewall

Assurez-vous que ces endpoints sont accessibles:
- `/wp-admin/admin-ajax.php` (pour les requêtes AJAX)
- `/wp-content/plugins/qa-heatmap-analytics/assets/` (pour les fichiers statiques)

## Surveillance des Performances

### Métriques Clés à Surveiller

- **Utilisation Mémoire**: Maintenir sous 80% de la limite
- **Temps de Chargement Page**: Objectif < 3 secondes
- **Requêtes Base de Données**: Surveiller les requêtes lentes
- **Espace Disque**: Vérifier la croissance des données QA Advisor

### Outils de Surveillance

- **Query Monitor** - Plugin WordPress pour le débogage
- **New Relic** - Surveillance APM
- **GTmetrix** - Tests de performance frontend

## Dépannage

### Problèmes Courants

**Erreurs de Mémoire**:
```php
ini_set('memory_limit', '512M');
```

**Problèmes de Timeout**:
```php
set_time_limit(300);
```

**Problèmes de Chargement de Scripts**:
1. Vérifier la console du navigateur pour les erreurs JavaScript
2. Vérifier les exclusions du plugin de cache
3. Confirmer les paramètres du firewall

### Vérification des Scripts

Pour vérifier que le script de suivi se charge correctement:

1. Visitez votre site web en **n'étant pas connecté**
2. Clic droit et choisissez "Afficher le code source de la page"
3. Recherchez dans le HTML `qahm` ou `qahmz`

> Si ces chaînes ne sont pas trouvées, le script peut être bloqué ou ne pas se charger.  
> Vérifiez les erreurs JavaScript ou les conflits de plugins.

## Prochaines Étapes

Après la configuration de l'environnement:

1. [Configurer les Limites de Données](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Gérer les Conflits jQuery](/docs/user-manual/getting-started/when-defer-jquery)
3. [Explorer le Dashboard](/docs/user-manual/screens-and-operations/dashboard)

---
