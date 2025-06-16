---
sidebar_position: 13
---

# Cartes de Chaleur (Heatmaps)

Les cartes de chaleur de QA Advisor vous permettent de visualiser le comportement des utilisateurs sur vos pages WordPress, révélant où ils cliquent, comment ils défilent et quelles zones attirent le plus leur attention.

## Vue d'ensemble

Les heatmaps vous aident à :

- **Visualiser** les interactions utilisateur en temps réel
- **Identifier** les zones les plus attractives de vos pages
- **Optimiser** le placement des éléments importants
- **Améliorer** l'expérience utilisateur globale
- **Augmenter** les taux de conversion

## Types de Cartes de Chaleur

### Cartes de Clics (Click Heatmaps)

#### Fonctionnalités
- **Visualisation** de tous les clics sur la page
- **Intensité** représentée par des couleurs (rouge = plus de clics)
- **Éléments cliquables** et non-cliquables distingués
- **Données** en temps réel et historiques

#### Insights Obtenus
- **Éléments** les plus cliqués
- **Call-to-action** (CTA) les plus performants
- **Zones** d'intérêt principal
- **Clics** sur des éléments non-cliquables (frustration)

#### Optimisations Possibles
- **Repositionnement** des CTA importants
- **Amélioration** des éléments peu cliqués
- **Suppression** des distractions
- **Renforcement** des zones performantes

### Cartes de Défilement (Scroll Heatmaps)

#### Fonctionnalités
- **Profondeur** de défilement visualisée
- **Pourcentage** d'utilisateurs atteignant chaque section
- **Points** d'abandon identifiés
- **Ligne** de flottaison optimale

#### Métriques Clés
- **Fold** (ligne de flottaison) - % d'utilisateurs qui défilent
- **Sections** les plus vues
- **Points** de sortie fréquents
- **Engagement** par section

#### Applications Pratiques
- **Optimisation** de la longueur du contenu
- **Placement** stratégique des éléments importants
- **Amélioration** de l'engagement
- **Réduction** du taux de rebond

### Cartes de Mouvement (Move Heatmaps)

#### Fonctionnalités
- **Trajectoires** de la souris visualisées
- **Zones** d'hésitation identifiées
- **Patterns** de navigation révélés
- **Attention** utilisateur cartographiée

#### Insights Comportementaux
- **Parcours** visuels des utilisateurs
- **Hésitations** avant les clics
- **Zones** d'intérêt sans clic
- **Friction** dans la navigation

## Configuration des Heatmaps

### Paramètres de Base

#### Activation et Collecte
```php
// Configuration des heatmaps
define('QAHM_HEATMAP_ENABLED', true);
define('QAHM_HEATMAP_SAMPLE_RATE', 100); // 100% des visiteurs
define('QAHM_HEATMAP_MIN_PV', 50); // Minimum 50 pages vues
define('QAHM_HEATMAP_RESOLUTION', 'high'); // high, medium, low
```

#### Sélection des Pages
- **Pages** spécifiques à analyser
- **Critères** de sélection automatique
- **Exclusions** (admin, maintenance)
- **Priorisation** par trafic

#### Paramètres de Qualité
- **Résolution** des heatmaps
- **Fréquence** de mise à jour
- **Durée** de collecte
- **Seuils** de significativité

### Filtres et Segmentation

#### Filtres Temporels
- **Période** d'analyse personnalisable
- **Comparaisons** avant/après
- **Tendances** saisonnières
- **Événements** spécifiques

#### Segmentation d'Audience
- **Appareils** (desktop, mobile, tablette)
- **Sources** de trafic
- **Nouveaux** vs visiteurs récurrents
- **Géolocalisation**

#### Filtres Comportementaux
- **Durée** de session
- **Profondeur** de navigation
- **Conversions** réalisées
- **Objectifs** atteints

## Analyse et Interprétation

### Lecture des Heatmaps

#### Code Couleur
- **Rouge** : Zone très chaude (beaucoup d'interactions)
- **Orange** : Zone chaude (interactions moyennes)
- **Jaune** : Zone tiède (quelques interactions)
- **Vert** : Zone froide (peu d'interactions)
- **Bleu** : Zone très froide (aucune interaction)

#### Métriques Associées
- **Nombre** total d'interactions
- **Pourcentage** par zone
- **Temps** moyen d'attention
- **Taux** de conversion par zone

### Patterns Comportementaux

#### Patterns Positifs
- **F-Pattern** : Lecture en forme de F (naturel)
- **Z-Pattern** : Balayage en Z (efficace)
- **Gutenberg** : Diagonale naturelle de lecture
- **Focus** : Concentration sur les éléments clés

#### Patterns Problématiques
- **Dispersion** : Attention éparpillée
- **Évitement** : Zones importantes ignorées
- **Confusion** : Clics sur éléments non-cliquables
- **Abandon** : Sortie prématurée

## Optimisation Basée sur les Heatmaps

### Stratégies d'Optimisation

#### Optimisation des CTA
```php
// Optimisation basée sur les données heatmap
function qahm_optimize_cta_placement($heatmap_data) {
    $hot_zones = qahm_identify_hot_zones($heatmap_data);
    $cta_positions = qahm_get_cta_positions();
    
    $recommendations = array();
    
    foreach($cta_positions as $cta) {
        $heat_score = qahm_calculate_heat_score($cta['position'], $hot_zones);
        
        if($heat_score < 0.3) {
            $recommendations[] = array(
                'cta' => $cta,
                'action' => 'move_to_hot_zone',
                'suggested_position' => qahm_find_nearest_hot_zone($cta['position'], $hot_zones)
            );
        }
    }
    
    return $recommendations;
}
```

#### Amélioration du Contenu
- **Repositionnement** des éléments importants
- **Amélioration** des zones froides
- **Renforcement** des zones chaudes
- **Suppression** des distractions

#### Optimisation Mobile
- **Adaptation** aux interactions tactiles
- **Taille** des éléments cliquables
- **Espacement** approprié
- **Navigation** intuitive

### Tests A/B avec Heatmaps

#### Méthodologie
1. **Version A** : Page actuelle avec heatmap
2. **Version B** : Page optimisée basée sur les insights
3. **Comparaison** des heatmaps entre versions
4. **Mesure** de l'impact sur les conversions

#### Métriques de Succès
- **Amélioration** des clics sur les CTA
- **Augmentation** de l'engagement
- **Réduction** des clics de frustration
- **Amélioration** des conversions

## Heatmaps par Type de Page

### Pages d'Accueil

#### Éléments Clés à Analyser
- **Hero section** et message principal
- **Navigation** principale
- **CTA** primaires et secondaires
- **Contenu** au-dessus de la ligne de flottaison

#### Optimisations Typiques
- **Simplification** du message
- **Amélioration** de la navigation
- **Optimisation** des CTA
- **Réduction** du contenu superflu

### Pages Produit (E-commerce)

#### Zones Critiques
- **Images** produit et galerie
- **Bouton** d'achat
- **Informations** produit
- **Avis** et évaluations

#### Optimisations E-commerce
- **Amélioration** des images produit
- **Optimisation** du bouton d'achat
- **Mise** en avant des avis
- **Cross-selling** stratégique

### Articles de Blog

#### Analyse du Contenu
- **Titre** et introduction
- **Structure** et sous-titres
- **Images** et médias
- **CTA** et liens internes

#### Optimisations Éditoriales
- **Amélioration** des titres
- **Restructuration** du contenu
- **Optimisation** des images
- **Placement** stratégique des CTA

### Pages de Contact

#### Éléments Importants
- **Formulaire** de contact
- **Informations** de contact
- **Carte** et localisation
- **Éléments** de réassurance

#### Optimisations Contact
- **Simplification** du formulaire
- **Amélioration** de la visibilité
- **Ajout** d'éléments de confiance
- **Optimisation** mobile

## Intégrations et Outils

### Intégration avec d'autres Analyses

#### Google Analytics
- **Corrélation** avec les données GA
- **Enrichissement** des insights
- **Validation** des hypothèses
- **Vue** 360° du comportement

#### Outils de Test
- **A/B testing** platforms
- **User testing** tools
- **Survey** et feedback tools
- **Conversion** optimization platforms

### Export et Partage

#### Formats d'Export
- **Images** haute résolution
- **Données** brutes CSV
- **Rapports** PDF
- **Intégrations** API

#### Collaboration
- **Partage** sécurisé des heatmaps
- **Annotations** collaboratives
- **Commentaires** et discussions
- **Versions** et historique

## Cas d'Usage Avancés

### Optimisation de Formulaires

#### Analyse des Formulaires
- **Champs** les plus/moins utilisés
- **Points** d'abandon
- **Erreurs** fréquentes
- **Temps** de remplissage

#### Optimisations Formulaires
- **Réduction** du nombre de champs
- **Amélioration** des labels
- **Validation** en temps réel
- **Design** plus intuitif

### Analyse de la Navigation

#### Patterns de Navigation
- **Menus** les plus utilisés
- **Liens** internes performants
- **Breadcrumbs** et navigation
- **Search** et filtres

#### Optimisations Navigation
- **Simplification** des menus
- **Amélioration** des liens
- **Optimisation** de la recherche
- **Personnalisation** de l'expérience

### Optimisation Mobile

#### Spécificités Mobile
- **Interactions** tactiles
- **Zones** de préhension
- **Défilement** vertical
- **Navigation** par gestes

#### Adaptations Mobile
- **Taille** des éléments tactiles
- **Espacement** approprié
- **Navigation** simplifiée
- **Contenu** prioritaire

## Résolution de Problèmes

### Données Insuffisantes

Si vos heatmaps manquent de données :

1. **Augmentez** la période de collecte
2. **Vérifiez** les filtres appliqués
3. **Contrôlez** le trafic de la page
4. **Ajustez** les seuils de significativité

### Heatmaps Non Représentatives

Si les données semblent incorrectes :

1. **Vérifiez** la configuration du tracking
2. **Contrôlez** les exclusions
3. **Examinez** les filtres de bot
4. **Validez** avec d'autres métriques

### Performance Impactée

Si les heatmaps ralentissent le site :

1. **Réduisez** le taux d'échantillonnage
2. **Optimisez** la résolution
3. **Limitez** les pages trackées
4. **Configurez** le cache approprié

## Étapes Suivantes

Une fois vos heatmaps analysées et optimisées :

1. [Configurez des objectifs pour mesurer l'impact](/docs/user-manual/screens-and-operations/goals)
2. [Analysez toutes vos pages pour une vue globale](/docs/user-manual/screens-and-operations/all-pages)
3. [Utilisez les modules Brains pour des recommandations automatiques](/docs/user-manual/screens-and-operations/brains)
4. [Consultez l'aide pour des questions spécifiques](/docs/user-manual/screens-and-operations/help)
