---
sidebar_position: 3
---

# Questions Fréquemment Posées (FAQ)

Cette section répond aux questions les plus courantes concernant QA Advisor. Si vous ne trouvez pas la réponse à votre question, n'hésitez pas à consulter notre [section d'aide](/docs/user-manual/screens-and-operations/help) ou à contacter notre support.

## Installation et Configuration

### Comment installer QA Advisor ?

QA Advisor peut être installé de plusieurs façons :

1. **Via l'admin WordPress** (recommandé) :
   - Allez dans Extensions → Ajouter une nouvelle
   - Recherchez "QA Advisor"
   - Cliquez sur "Installer maintenant" puis "Activer"

2. **Installation manuelle** :
   - Téléchargez le fichier ZIP depuis le site officiel
   - Téléversez via Extensions → Ajouter une nouvelle → Téléverser

3. **Via FTP** :
   - Décompressez le fichier et téléversez le dossier dans `/wp-content/plugins/`

Pour plus de détails, consultez notre [guide d'installation](/docs/user-manual/getting-started/installation).

### Quelles sont les exigences système ?

QA Advisor nécessite :

- **WordPress** : Version 5.9 ou supérieure
- **PHP** : Version 7.4 ou supérieure (recommandé : 8.0+)
- **MySQL** : Version 5.7 ou supérieure
- **Mémoire** : Au moins 128 MB de mémoire PHP
- **Espace disque** : Au moins 50 MB d'espace libre

### Le plugin fonctionne-t-il avec mon thème ?

QA Advisor est conçu pour être compatible avec tous les thèmes WordPress standards. Il fonctionne avec :

- **Thèmes** WordPress.org
- **Thèmes** premium (Avada, Divi, etc.)
- **Page builders** (Elementor, Beaver Builder, etc.)
- **Thèmes** personnalisés

Si vous rencontrez des problèmes de compatibilité, contactez notre support.

## Fonctionnalités et Utilisation

### Quelle est la différence entre QA Advisor et Google Analytics ?

QA Advisor complète Google Analytics en offrant :

- **Heatmaps** visuelles (clics, défilement, mouvement)
- **Intelligence artificielle** pour des recommandations automatiques
- **Analyse comportementale** approfondie
- **Conformité RGPD** native
- **Données** stockées localement
- **Interface** intégrée à WordPress

Google Analytics excelle dans l'analyse de trafic global, tandis que QA Advisor se concentre sur l'optimisation de l'expérience utilisateur.

### Combien de temps faut-il pour voir des données ?

Les données commencent à apparaître immédiatement après l'installation, mais pour des analyses significatives :

- **Données de base** : Quelques minutes
- **Heatmaps** : 50-100 pages vues minimum
- **Tendances** : 7-14 jours
- **Analyses IA** : 30 jours pour des recommandations précises

### Les heatmaps fonctionnent-elles sur mobile ?

Oui, QA Advisor collecte et affiche des heatmaps pour tous les appareils :

- **Desktop** : Clics de souris et défilement
- **Mobile** : Touches tactiles et gestes
- **Tablette** : Interactions tactiles adaptées

Vous pouvez filtrer les heatmaps par type d'appareil pour des analyses spécifiques.

## Confidentialité et Conformité

### QA Advisor est-il conforme au RGPD ?

Oui, QA Advisor est conçu pour être conforme au RGPD :

- **Anonymisation** automatique des adresses IP
- **Pseudonymisation** des données utilisateur
- **Consentement** utilisateur configurable
- **Droit** à l'effacement respecté
- **Portabilité** des données disponible
- **Données** stockées localement (pas de transfert vers des tiers)

### Quelles données sont collectées ?

QA Advisor collecte uniquement les données nécessaires à l'analyse :

**Données collectées :**
- Pages visitées et temps passé
- Clics et interactions (anonymisés)
- Type d'appareil et navigateur
- Résolution d'écran
- Référent (source de trafic)

**Données NON collectées :**
- Informations personnelles identifiables
- Contenu des formulaires
- Mots de passe ou données sensibles
- Historique de navigation externe

### Puis-je désactiver le tracking pour certains utilisateurs ?

Oui, plusieurs options sont disponibles :

```php
// Exclure les administrateurs
define('QAHM_TRACK_ADMIN_USERS', false);

// Exclure les utilisateurs connectés
define('QAHM_TRACK_LOGGED_IN_USERS', false);

// Exclure par rôle
add_filter('qahm_track_user', function($track, $user) {
    if(user_can($user, 'edit_posts')) {
        return false;
    }
    return $track;
}, 10, 2);
```

## Performance et Optimisation

### QA Advisor ralentit-il mon site ?

QA Advisor est optimisé pour un impact minimal sur les performances :

- **Code** léger et optimisé
- **Chargement** asynchrone
- **Cache** intelligent
- **Traitement** en arrière-plan

Impact typique : < 0.1 seconde sur le temps de chargement.

### Comment optimiser les performances ?

Pour optimiser les performances :

1. **Configurez** la mise en cache appropriée
2. **Limitez** le taux d'échantillonnage si nécessaire
3. **Ajustez** les paramètres de rétention des données
4. **Optimisez** votre base de données régulièrement

Consultez notre [guide d'optimisation](/docs/user-manual/getting-started/environment-setup).

### Puis-je limiter la collecte de données ?

Oui, plusieurs paramètres permettent de contrôler la collecte :

```php
// Taux d'échantillonnage (50% des visiteurs)
define('QAHM_SAMPLING_RATE', 50);

// Limite de pages vues pour les heatmaps
define('QAHM_MAX_HEATMAP_PV', 5000);

// Durée de rétention des données
define('QAHM_DATA_RETENTION_DAYS', 60);
```

## Licences et Support

### Quelle est la différence entre les versions gratuite et premium ?

| Fonctionnalité | Gratuit | Premium |
|---|---|---|
| Heatmaps | 1000 PV/mois | Illimitées |
| Modules Brains | Limités | Complets |
| Support | Communautaire | Prioritaire |
| Intégrations | Basiques | Étendues |
| Multi-sites | Non | Oui |

### Comment obtenir du support ?

Plusieurs options de support sont disponibles :

**Support gratuit :**
- [Documentation](/docs/user-manual) en ligne
- [Forum](https://community.quarka.org) communautaire
- [FAQ](/docs/faq) détaillée

**Support premium :**
- Chat en direct
- Email prioritaire
- Support téléphonique
- Consultation personnalisée

### Puis-je utiliser QA Advisor sur plusieurs sites ?

Cela dépend de votre licence :

- **Licence gratuite** : Un site par installation
- **Licence Pro** : Jusqu'à 3 sites
- **Licence Agency** : Jusqu'à 10 sites
- **Licence Enterprise** : Sites illimités

## Intégrations

### QA Advisor fonctionne-t-il avec mon plugin de cache ?

QA Advisor est compatible avec la plupart des plugins de cache :

- **WP Rocket** : Compatible avec configuration
- **W3 Total Cache** : Compatible
- **WP Super Cache** : Compatible
- **LiteSpeed Cache** : Compatible
- **Cloudflare** : Compatible

Des configurations spécifiques peuvent être nécessaires. Consultez notre [guide de configuration](/docs/user-manual/getting-started/environment-setup).

### Puis-je intégrer QA Advisor avec Google Analytics ?

Oui, QA Advisor peut être intégré avec Google Analytics pour :

- **Enrichir** les données GA avec les heatmaps
- **Comparer** les métriques
- **Valider** les analyses
- **Obtenir** une vue 360° du comportement utilisateur

### QA Advisor fonctionne-t-il avec les page builders ?

Oui, QA Advisor est compatible avec tous les page builders populaires :

- **Elementor** : Intégration native
- **Divi** : Compatible
- **Beaver Builder** : Compatible
- **Gutenberg** : Support complet
- **Visual Composer** : Compatible

## Résolution de Problèmes

### Pourquoi ne vois-je pas de données ?

Si aucune donnée n'apparaît :

1. **Vérifiez** que le plugin est activé
2. **Contrôlez** que vous n'êtes pas exclu du tracking
3. **Examinez** les paramètres de cache
4. **Testez** avec un navigateur en navigation privée
5. **Vérifiez** les logs d'erreur WordPress

### Les heatmaps ne s'affichent pas

Si les heatmaps ne s'affichent pas :

1. **Attendez** au moins 50-100 pages vues
2. **Vérifiez** les filtres appliqués
3. **Contrôlez** la période sélectionnée
4. **Examinez** les exclusions configurées
5. **Testez** sur une page avec plus de trafic

### Erreur "Licence invalide"

Si vous recevez cette erreur :

1. **Vérifiez** la saisie de votre clé de licence
2. **Contrôlez** que le domaine correspond
3. **Vérifiez** que la licence n'est pas expirée
4. **Contactez** le support si le problème persiste

## Migration et Sauvegarde

### Comment migrer QA Advisor vers un nouveau site ?

Pour migrer QA Advisor :

1. **Exportez** les paramètres depuis l'ancien site
2. **Installez** QA Advisor sur le nouveau site
3. **Importez** les paramètres
4. **Transférez** la licence si nécessaire
5. **Vérifiez** le bon fonctionnement

### Puis-je sauvegarder mes données QA Advisor ?

Oui, plusieurs options de sauvegarde :

- **Sauvegarde** automatique des paramètres
- **Export** des données en CSV/JSON
- **Sauvegarde** de la base de données WordPress
- **API** pour extraction des données

## Questions Techniques

### QA Advisor utilise-t-il des cookies ?

QA Advisor utilise des cookies techniques essentiels :

- **Session** : Pour suivre les sessions utilisateur
- **Préférences** : Pour les paramètres d'affichage
- **Consentement** : Pour mémoriser le choix RGPD

Aucun cookie de tracking tiers n'est utilisé.

### Le plugin est-il compatible avec HTTPS ?

Oui, QA Advisor fonctionne parfaitement avec HTTPS et le recommande pour :

- **Sécurité** des données
- **Conformité** RGPD
- **SEO** et performances
- **Confiance** des utilisateurs

### Puis-je personnaliser l'interface ?

Oui, plusieurs options de personnalisation :

- **Couleurs** et thème
- **Logos** et branding
- **Widgets** et disposition
- **Métriques** affichées

Pour des personnalisations avancées, consultez notre [guide développeur](/docs/developer-manual).

## Contact et Support Supplémentaire

Si vous ne trouvez pas la réponse à votre question dans cette FAQ :

1. **Consultez** notre [documentation complète](/docs/user-manual)
2. **Visitez** notre [forum communautaire](https://community.quarka.org)
3. **Contactez** notre support à support@quarka.org
4. **Utilisez** l'aide intégrée dans QA Advisor

Notre équipe est là pour vous aider à tirer le meilleur parti de QA Advisor !
