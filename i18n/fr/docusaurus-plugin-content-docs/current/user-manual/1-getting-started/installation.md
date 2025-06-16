---
sidebar_position: 1
---

# Installation

Ce guide vous accompagnera dans l'installation de QA Advisor sur votre site WordPress.

## Méthodes d'Installation

Il existe plusieurs façons d'installer QA Advisor sur votre site WordPress :

### Méthode 1 : Installation via l'Admin WordPress (Recommandée)

1. **Connectez-vous** à votre tableau de bord WordPress
2. **Naviguez** vers Extensions → Ajouter une nouvelle
3. **Recherchez** "QA Advisor" dans la barre de recherche
4. **Cliquez** sur "Installer maintenant" à côté de QA Advisor
5. **Activez** le plugin une fois l'installation terminée

### Méthode 2 : Installation Manuelle

1. **Téléchargez** le fichier ZIP de QA Advisor depuis le site officiel
2. **Connectez-vous** à votre tableau de bord WordPress
3. **Naviguez** vers Extensions → Ajouter une nouvelle
4. **Cliquez** sur "Téléverser une extension"
5. **Sélectionnez** le fichier ZIP téléchargé
6. **Cliquez** sur "Installer maintenant"
7. **Activez** le plugin une fois l'installation terminée

### Méthode 3 : Installation FTP

1. **Téléchargez** et **décompressez** le fichier ZIP de QA Advisor
2. **Téléversez** le dossier `qa-advisor` vers `/wp-content/plugins/`
3. **Connectez-vous** à votre tableau de bord WordPress
4. **Naviguez** vers Extensions → Extensions installées
5. **Activez** QA Advisor

## Configuration Initiale

Après l'activation, QA Advisor lancera automatiquement l'assistant de configuration :

### Étape 1 : Bienvenue
- Lisez les informations de bienvenue
- Cliquez sur "Commencer la configuration"

### Étape 2 : Paramètres de Base
- **Nom du site** : Confirmez le nom de votre site
- **Fuseau horaire** : Vérifiez les paramètres de fuseau horaire
- **Langue** : Sélectionnez votre langue préférée

### Étape 3 : Paramètres de Suivi
- **Suivi automatique** : Activez le suivi automatique des pages
- **Anonymisation IP** : Activez pour la conformité RGPD
- **Exclusions** : Configurez les pages à exclure du suivi

### Étape 4 : Finalisation
- Vérifiez tous les paramètres
- Cliquez sur "Terminer la configuration"

## Vérification de l'Installation

Pour vérifier que QA Advisor fonctionne correctement :

1. **Visitez** votre site web
2. **Naviguez** vers QA Advisor → Tableau de bord dans l'admin WordPress
3. **Vérifiez** que les données de suivi commencent à apparaître (cela peut prendre quelques minutes)

## Résolution de Problèmes

### Le plugin ne s'active pas
- Vérifiez que votre version de WordPress est 5.9 ou supérieure
- Assurez-vous que PHP est version 7.4 ou supérieure
- Vérifiez les logs d'erreur WordPress

### Aucune donnée de suivi
- Vérifiez que le code de suivi est présent dans le source de votre page
- Assurez-vous que JavaScript est activé
- Vérifiez les paramètres de cache

### Problèmes de performance
- Consultez [Configuration de l'environnement](/docs/user-manual/getting-started/environment-setup)
- Configurez [les limites de données](/docs/user-manual/getting-started/set-data-limit-wpconfig)

## Étapes Suivantes

Une fois QA Advisor installé avec succès :

1. [Configurez votre environnement](/docs/user-manual/getting-started/environment-setup)
2. [Explorez le tableau de bord](/docs/user-manual/screens-and-operations/dashboard)
3. [Configurez vos premiers objectifs](/docs/user-manual/screens-and-operations/goals)

## Support

Si vous rencontrez des problèmes pendant l'installation, consultez notre [FAQ](/docs/faq) ou contactez notre équipe de support.
