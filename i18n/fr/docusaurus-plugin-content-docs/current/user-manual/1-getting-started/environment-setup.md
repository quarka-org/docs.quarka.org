---
sidebar_position: 2
---

# Configuration de l'Environnement

Cette page vous guide dans l'optimisation de votre environnement WordPress pour QA Advisor afin d'assurer des performances optimales et une collecte de données fiable.

## Configuration du Serveur

### Exigences PHP

QA Advisor nécessite PHP 7.4 ou supérieur, mais nous recommandons PHP 8.0+ pour de meilleures performances :

```php
// Paramètres PHP recommandés
memory_limit = 256M
max_execution_time = 300
post_max_size = 64M
upload_max_filesize = 64M
```

### Configuration de la Base de Données

Assurez-vous que votre base de données MySQL/MariaDB est optimisée :

```sql
-- Paramètres MySQL recommandés
innodb_buffer_pool_size = 256M
max_connections = 200
query_cache_size = 64M
```

## Configuration WordPress

### wp-config.php

Ajoutez ces constantes à votre fichier `wp-config.php` pour optimiser QA Advisor :

```php
// Activer le mode debug pour le développement
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);

// Optimisations QA Advisor
define('QAHM_DEBUG', false);
define('QAHM_DATA_RETENTION_DAYS', 90);
define('QAHM_MAX_HEATMAP_PV', 10000);
```

### Paramètres de Cache

QA Advisor fonctionne avec la plupart des plugins de cache, mais nécessite une configuration appropriée :

#### WP Rocket
```javascript
// Exclure les scripts QA Advisor du cache
/wp-content/plugins/qa-advisor/js/qahm.js
```

#### W3 Total Cache
- Exclure `/wp-admin/admin-ajax.php` de la mise en cache
- Ajouter `qahm_` aux cookies exclus

#### WP Super Cache
- Ajouter `qahm_session` aux cookies rejetés

## Configuration du CDN

Si vous utilisez un CDN, assurez-vous que les fichiers QA Advisor sont correctement servis :

### Cloudflare
```javascript
// Règles de page Cloudflare
/wp-content/plugins/qa-advisor/js/* - Cache Level: Standard
/wp-admin/admin-ajax.php?action=qahm_* - Cache Level: Bypass
```

### MaxCDN/StackPath
- Exclure `/wp-admin/admin-ajax.php` de la mise en cache
- Inclure les fichiers CSS/JS de QA Advisor dans le CDN

## Optimisation des Performances

### Paramètres de Collecte de Données

Configurez la collecte de données selon vos besoins :

```php
// Dans wp-config.php
define('QAHM_SAMPLING_RATE', 100); // 100% des visiteurs
define('QAHM_SESSION_TIMEOUT', 1800); // 30 minutes
define('QAHM_HEATMAP_RESOLUTION', 'high'); // high, medium, low
```

### Nettoyage Automatique

Configurez le nettoyage automatique des anciennes données :

```php
// Rétention des données (en jours)
define('QAHM_DATA_RETENTION_DAYS', 90);

// Nettoyage automatique
define('QAHM_AUTO_CLEANUP', true);
define('QAHM_CLEANUP_INTERVAL', 'daily');
```

## Configuration de Sécurité

### Permissions de Fichiers

Assurez-vous que les permissions de fichiers sont correctement définies :

```bash
# Permissions recommandées
chmod 755 /wp-content/plugins/qa-advisor/
chmod 644 /wp-content/plugins/qa-advisor/js/qahm.js
chmod 644 /wp-content/plugins/qa-advisor/css/qahm.css
```

### Sécurité des Données

Configurez la sécurité des données utilisateur :

```php
// Anonymisation IP (RGPD)
define('QAHM_ANONYMIZE_IP', true);

// Chiffrement des données sensibles
define('QAHM_ENCRYPT_DATA', true);

// Durée de conservation des données personnelles
define('QAHM_PERSONAL_DATA_RETENTION', 30);
```

## Surveillance et Maintenance

### Logs de Debug

Activez les logs pour surveiller les performances :

```php
// Activer les logs QA Advisor
define('QAHM_DEBUG_LOG', true);
define('QAHM_LOG_LEVEL', 'info'); // error, warning, info, debug
```

### Surveillance des Performances

Surveillez régulièrement :

- Utilisation de la mémoire PHP
- Temps de réponse des pages
- Taille de la base de données
- Logs d'erreur

### Maintenance Régulière

Effectuez ces tâches de maintenance :

1. **Hebdomadaire** : Vérifiez les logs d'erreur
2. **Mensuel** : Optimisez la base de données
3. **Trimestriel** : Révisez les paramètres de rétention des données

## Résolution de Problèmes

### Problèmes de Performance

Si vous rencontrez des problèmes de performance :

1. Vérifiez l'utilisation de la mémoire PHP
2. Optimisez les paramètres de base de données
3. Configurez la mise en cache appropriée
4. Réduisez le taux d'échantillonnage si nécessaire

### Problèmes de Collecte de Données

Si les données ne sont pas collectées :

1. Vérifiez que JavaScript est activé
2. Contrôlez les paramètres de cache
3. Vérifiez les logs d'erreur
4. Testez avec les outils de développement du navigateur

## Étapes Suivantes

Une fois votre environnement configuré :

1. [Configurez les limites de données](/docs/user-manual/getting-started/set-data-limit-wpconfig)
2. [Explorez le tableau de bord](/docs/user-manual/screens-and-operations/dashboard)
3. [Configurez vos premiers objectifs](/docs/user-manual/screens-and-operations/goals)
