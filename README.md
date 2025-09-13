# 🦕 Mathelin'eirb

Le site web officiel du club Mathelin'eirb - Votre communauté étudiante préhistorique à l'ENSEIRB-MATMECA !

## 🚀 Déploiement automatique

Ce site est automatiquement déployé sur GitHub Pages à chaque push sur la branche `main`.

- **URL de production** : https://[votre-username].github.io/mathelin-eirb/
- **Déploiement automatique** : Activé via GitHub Actions
- **Branche de déploiement** : `main`

## 🛠️ Développement local

### Installation des dépendances
```bash
npm install
```

### Serveur de développement
```bash
npm run serve
```
Le site sera accessible sur http://localhost:8080

### Build de production
```bash
npm run build
```

### Linting et correction automatique
```bash
npm run lint
```

## 📁 Structure du projet

```
src/
├── assets/          # Images et ressources statiques
├── components/      # Composants Vue réutilisables
├── router/          # Configuration du routage
└── views/           # Pages principales
    ├── HomeView.vue      # Page d'accueil
    └── MembersView.vue   # Page des membres
```

## 🎨 Fonctionnalités

- **Design responsive** avec thème préhistorique
- **Page d'accueil** avec actualités et événements
- **Page des membres** avec profils et informations
- **Animations fluides** et effets visuels
- **Police Jurassic Park** pour les titres
- **Déploiement automatique** sur GitHub Pages

## 🔧 Configuration

Voir [Configuration Reference](https://cli.vuejs.org/config/) pour plus de détails sur la configuration Vue CLI.

## 📝 Contribution

1. Fork le repository
2. Créer une branche feature (`git checkout -b feature/nouvelle-fonctionnalite`)
3. Commit vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. Push vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. Ouvrir une Pull Request

## 🦕 À propos

Mathelin'eirb est le club étudiant officiel de l'ENSEIRB-MATMECA, dédié à créer une communauté forte et amicale autour des mathématiques et de l'ingénierie.
