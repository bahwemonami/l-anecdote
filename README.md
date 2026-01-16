# L'Anecdote - Site Vitrine Restaurant

![Angular](https://img.shields.io/badge/Angular-19-DD0031?style=flat-square&logo=angular)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat-square&logo=sass&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square&logo=greensock&logoColor=white)

Site vitrine moderne et responsive pour le restaurant **L'Anecdote**, bistrot parisien situé près de la Gare de Lyon (Paris 12ème).

## 🍽️ Aperçu

L'Anecdote est un bistrot parisien authentique proposant une cuisine française traditionnelle et généreuse. Ce site vitrine présente :

- **Menu complet** avec entrées, plats, desserts et boissons
- **Galerie photos** avec lightbox interactive
- **Avis clients** vérifiés de TheFork
- **Formulaire de contact** avec validation
- **Intégration Google Maps**
- **Boutons CTA fonctionnels** (appel téléphonique, itinéraire, réservation)

## 🚀 Technologies

| Technologie | Version | Usage |
|-------------|---------|-------|
| **Angular** | 19 | Framework frontend |
| **TypeScript** | 5.x | Typage strict |
| **SCSS** | - | Design system & styles |
| **Tailwind CSS** | 3.x | Utilitaires CSS |
| **GSAP** | 3.x | Animations fluides |

### Fonctionnalités Angular
- ✅ Standalone Components
- ✅ Lazy Loading (routes)
- ✅ Signals pour la réactivité
- ✅ View Transitions API
- ✅ Scroll Position Restoration

## 📦 Installation

```bash
# Cloner le repository
git clone <repository-url>
cd restaurant-anecdote

# Installer les dépendances
npm install
```

## 🛠️ Développement

```bash
# Démarrer le serveur de développement
ng serve

# Ouvrir dans le navigateur
# http://localhost:4200
```

## 🏗️ Build Production

```bash
# Build optimisé pour la production
ng build --configuration production

# Les fichiers seront générés dans dist/restaurant-anecdote
```

## 📁 Structure du Projet

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       └── animation.service.ts   # Service GSAP animations
│   │
│   ├── shared/
│   │   └── components/
│   │       ├── header/                 # Navigation responsive
│   │       ├── footer/                 # Pied de page
│   │       └── ui/
│   │           └── lightbox/           # Galerie lightbox
│   │
│   ├── features/
│   │   ├── home/                       # Page d'accueil
│   │   ├── about/                      # Page À propos
│   │   ├── menu/                       # Carte du restaurant
│   │   ├── gallery/                    # Galerie photos
│   │   ├── reviews/                    # Avis clients
│   │   └── contact/                    # Contact & Maps
│   │
│   ├── data/
│   │   ├── restaurant.data.ts          # Infos restaurant
│   │   ├── menu.data.ts                # Menu complet
│   │   ├── gallery.data.ts             # Photos
│   │   └── reviews.data.ts             # Avis clients
│   │
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
│
├── styles/
│   ├── abstracts/
│   │   ├── _variables.scss             # Variables design system
│   │   └── _mixins.scss                # Mixins SCSS
│   ├── base/
│   │   ├── _reset.scss                 # Reset CSS
│   │   └── _typography.scss            # Typographie
│   ├── components/
│   │   ├── _buttons.scss               # Boutons
│   │   └── _cards.scss                 # Cards
│   └── styles.scss                     # Import principal
│
├── assets/
│   └── images/
│
└── index.html                          # HTML avec SEO
```

## 🎨 Design System

### Couleurs

| Couleur | Hex | Usage |
|---------|-----|-------|
| Primary | `#714c3e` | Marron principal |
| Accent | `#d99621` | Or/doré pour CTAs |
| Background | `#fdfbf7` | Fond crème |
| Text | `#1a1a1a` | Texte principal |

### Typographie

- **Titres**: Playfair Display (serif)
- **Corps**: Lato (sans-serif)

### Breakpoints

- Mobile: `< 640px`
- Tablet: `≥ 768px`
- Desktop: `≥ 1024px`
- Large: `≥ 1280px`

## 📱 Pages

| Route | Page | Description |
|-------|------|-------------|
| `/` | Accueil | Hero, spécialités, témoignages, carte |
| `/about` | À propos | Histoire, valeurs, philosophie |
| `/menu` | La Carte | Menu complet par catégories |
| `/gallery` | Galerie | Photos avec filtres et lightbox |
| `/reviews` | Avis | Témoignages clients TheFork |
| `/contact` | Contact | Formulaire, infos, Google Maps |

## ⚡ Animations GSAP

- **Scroll Reveal**: Éléments apparaissent au scroll
- **Parallax**: Effet de profondeur sur les images
- **Stagger**: Animation en cascade des cards
- **Counter**: Animation des chiffres
- **Hover Effects**: Interactions fluides

## ♿ Accessibilité

- Semantic HTML5
- ARIA labels
- Navigation au clavier
- Contraste WCAG AA
- Focus visible
- Skip links (implicites)

## 🔍 SEO

- Meta tags optimisés
- Open Graph / Twitter Cards
- JSON-LD (Schema.org Restaurant)
- Sitemap prêt pour génération
- Balises géographiques

## 📞 Fonctionnalités CTA

Les boutons d'action sont entièrement fonctionnels :

```html
<!-- Appel téléphonique -->
<a href="tel:+33143433030">Appeler</a>

<!-- Email -->
<a href="mailto:contact@lanecdote-paris.fr">Email</a>

<!-- Google Maps -->
<a href="https://www.google.com/maps/search/...">Itinéraire</a>

<!-- Réservation TheFork -->
<a href="https://www.thefork.fr/restaurant/l-anecdote-r839905">Réserver</a>
```

## 🧪 Tests

```bash
# Tests unitaires
ng test

# Tests e2e (si configurés)
ng e2e
```

## 📊 Informations Restaurant

- **Nom**: L'Anecdote
- **Adresse**: 237 Rue de Bercy, 75012 Paris
- **Téléphone**: 01 43 43 30 30
- **Cuisine**: Française traditionnelle
- **Prix moyen**: 28€
- **Note**: 8.3/10 (TheFork)
- **Horaires**: 11:30 - 23:00 (7j/7)

## 🔧 Maintenance

### Modifier les données

Les données sont hardcodées dans `src/app/data/`. Pour mettre à jour :

1. **Restaurant**: `restaurant.data.ts`
2. **Menu**: `menu.data.ts`
3. **Photos**: `gallery.data.ts`
4. **Avis**: `reviews.data.ts`

### Ajouter une page

1. Créer le composant dans `src/app/features/`
2. Ajouter la route dans `app.routes.ts`
3. Mettre à jour la navigation dans `header.component.ts`

## 📄 Licence

© 2026 L'Anecdote - Tous droits réservés

---

Développé avec ❤️ pour L'Anecdote
