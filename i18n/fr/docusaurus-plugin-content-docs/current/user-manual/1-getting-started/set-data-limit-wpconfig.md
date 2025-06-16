---
sidebar_position: 3
---

# Configuration des Limites de Données

Cette page explique comment configurer les limites de données dans QA Advisor pour optimiser les performances et gérer l'utilisation de l'espace de stockage.

## Vue d'ensemble

QA Advisor collecte diverses données d'analyse qui peuvent s'accumuler au fil du temps. La configuration appropriée des limites de données vous aide à :

- Maintenir des performances optimales
- Contrôler l'utilisation de l'espace de base de données
- Respecter les réglementations sur la confidentialité des données
- Optimiser les coûts d'hébergement

## Configuration dans wp-config.php

Ajoutez ces constantes à votre fichier `wp-config.php` pour contrôler les limites de données :

### Limites de Rétention des Données

```php
// Durée de conservation des données (en jours)
define('QAHM_DATA_RETENTION_DAYS', 90);

// Durée de conservation des données de heatmap
define('QAHM_HEATMAP_RETENTION_DAYS', 30);

// Durée de conservation des sessions
define('QAHM_SESSION_RETENTION_DAYS', 60);

// Durée de conservation des données en temps réel
define('QAHM_REALTIME_RETENTION_HOURS', 24);
```

### Limites de Volume de Données

```php
// Nombre maximum de pages vues pour les heatmaps
define('QAHM_MAX_HEATMAP_PV', 10000);

// Nombre maximum de sessions enregistrées par jour
define('QAHM_MAX_SESSIONS_PER_DAY', 1000);

// Taille maximale de la base de données QA Advisor (en MB)
define('QAHM_MAX_DB_SIZE', 500);

// Nombre maximum d'événements par session
define('QAHM_MAX_EVENTS_PER_SESSION', 1000);
```

### Limites de Collecte

```php
// Taux d'échantillonnage (pourcentage de visiteurs suivis)
define('QAHM_SAMPLING_RATE', 100); // 100% = tous les visiteurs

// Limite de pages vues par session
define('QAHM_MAX_PV_PER_SESSION', 50);

// Durée maximale d'une session (en secondes)
define('QAHM_MAX_SESSION_DURATION', 7200); // 2 heures
```

## Configuration Avancée

### Nettoyage Automatique

```php
// Activer le nettoyage automatique
define('QAHM_AUTO_CLEANUP', true);

// Fréquence de nettoyage
define('QAHM_CLEANUP_INTERVAL', 'daily'); // daily, weekly, monthly

// Heure de nettoyage (format 24h)
define('QAHM_CLEANUP_TIME', '02:00');

// Nettoyage par lots pour éviter les timeouts
define('QAHM_CLEANUP_BATCH_SIZE', 1000);
```

### Optimisation des Performances

```php
// Limite de mémoire pour les opérations QA Advisor
define('QAHM_MEMORY_LIMIT', '256M');

// Timeout pour les requêtes de données
define('QAHM_QUERY_TIMEOUT', 30);

// Cache des requêtes fréquentes
define('QAHM_ENABLE_QUERY_CACHE', true);
define('QAHM_QUERY_CACHE_TTL', 3600); // 1 heure
```

## Configurations Recommandées par Type de Site

### Site à Faible Trafic (< 1000 visiteurs/mois)

```php
define('QAHM_DATA_RETENTION_DAYS', 180);
define('QAHM_MAX_HEATMAP_PV', 5000);
define('QAHM_SAMPLING_RATE', 100);
define('QAHM_MAX_SESSIONS_PER_DAY', 100);
```

### Site à Trafic Moyen (1000-10000 visiteurs/mois)

```php
define('QAHM_DATA_RETENTION_DAYS', 90);
define('QAHM_MAX_HEATMAP_PV', 10000);
define('QAHM_SAMPLING_RATE', 100);
define('QAHM_MAX_SESSIONS_PER_DAY', 500);
```

### Site à Fort Trafic (> 10000 visiteurs/mois)

```php
define('QAHM_DATA_RETENTION_DAYS', 60);
define('QAHM_MAX_HEATMAP_PV', 15000);
define('QAHM_SAMPLING_RATE', 50); // Échantillonnage réduit
define('QAHM_MAX_SESSIONS_PER_DAY', 1000);
```

### Site E-commerce

```php
define('QAHM_DATA_RETENTION_DAYS', 120); // Plus long pour l'analyse des tendances
define('QAHM_MAX_HEATMAP_PV', 20000);
define('QAHM_SAMPLING_RATE', 100);
define('QAHM_MAX_SESSIONS_PER_DAY', 2000);
define('QAHM_TRACK_ECOMMERCE', true);
```

## Surveillance de l'Utilisation

### Vérification de l'Espace de Base de Données

Utilisez cette requête SQL pour vérifier l'utilisation de l'espace :

```sql
SELECT 
    table_name,
    ROUND(((data_length + index_length) / 1024 / 1024), 2) AS 'Size (MB)'
FROM information_schema.tables 
WHERE table_schema = 'your_database_name' 
AND table_name LIKE 'wp_qahm_%'
ORDER BY (data_length + index_length) DESC;
```

### Surveillance via WordPress

QA Advisor fournit des informations sur l'utilisation des données dans :
- Tableau de bord → QA Advisor → Paramètres → Utilisation des données
- Outils → QA Advisor → Maintenance de la base de données

## Nettoyage Manuel

### Via l'Interface d'Administration

1. Allez dans **QA Advisor → Paramètres**
2. Cliquez sur l'onglet **Maintenance**
3. Sélectionnez les types de données à nettoyer
4. Définissez la période de nettoyage
5. Cliquez sur **Nettoyer les données**

### Via WP-CLI

```bash
# Nettoyer les données anciennes
wp qahm cleanup --days=90

# Nettoyer les heatmaps anciennes
wp qahm cleanup-heatmaps --days=30

# Optimiser les tables de base de données
wp qahm optimize-db
```

## Conformité RGPD

### Configuration pour la Conformité

```php
// Anonymisation automatique des IP
define('QAHM_ANONYMIZE_IP', true);

// Durée de conservation des données personnelles
define('QAHM_PERSONAL_DATA_RETENTION', 30);

// Suppression automatique des données personnelles
define('QAHM_AUTO_DELETE_PERSONAL_DATA', true);

// Consentement requis pour le suivi
define('QAHM_REQUIRE_CONSENT', true);
```

## Résolution de Problèmes

### Base de Données Trop Volumineuse

Si votre base de données devient trop volumineuse :

1. Réduisez `QAHM_DATA_RETENTION_DAYS`
2. Diminuez `QAHM_SAMPLING_RATE`
3. Activez le nettoyage automatique
4. Exécutez un nettoyage manuel

### Performances Lentes

Si QA Advisor ralentit votre site :

1. Réduisez `QAHM_MAX_SESSIONS_PER_DAY`
2. Augmentez `QAHM_MEMORY_LIMIT`
3. Activez la mise en cache des requêtes
4. Optimisez les tables de base de données

## Étapes Suivantes

Une fois les limites de données configurées :

1. [Explorez le tableau de bord](/docs/user-manual/screens-and-operations/dashboard)
2. [Configurez vos premiers objectifs](/docs/user-manual/screens-and-operations/goals)
3. [Apprenez à utiliser les heatmaps](/docs/user-manual/screens-and-operations/heatmaps)
