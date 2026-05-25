# Aline Pons — Site web

Site éditorial pour la marque Aline Pons.
Direction artistique « Héritage solaire & couture libre ».

## Structure

```
aline-pons-site/
├── index.html              # Accueil : hero, manifeste, valeurs, lookbook
├── histoire.html           # L'histoire de la marque
├── journal.html            # Carnet visuel (mosaïque)
├── contact.html            # Page de contact
│
├── collection/             # 5 pages tenues
│   ├── la-minotte.html     # Veste officier modulable
│   ├── la-mireio.html      # Jupe modulable
│   ├── le-farandolo.html   # Bermuda drapé
│   ├── la-fada.html        # Bomber sculptural
│   └── le-belugo.html      # Trench évolutif
│
├── css/
│   └── style.css           # Feuille de style unique
│
├── js/
│   └── script.js           # Nav scroll, menu mobile, reveal animations
│
└── assets/
    ├── images/             # 23 photos optimisées (~6 Mo)
    └── logo/               # Logo manuscrit Aline Pons (crème, brun, noir)
                            # + monogramme AP (favicon, signatures)
```

## Publier sur GitHub Pages

1. Créer un nouveau dépôt GitHub (public ou privé avec Pages activé).
2. Pousser tout le contenu du dossier `aline-pons-site/` à la racine du dépôt.
3. Dans Settings → Pages → Source, choisir la branche `main` et le dossier `/ (root)`.
4. Le site sera accessible à `https://<utilisateur>.github.io/<nom-du-depot>/`.

Pour un domaine personnalisé (`alinepons.fr`), ajouter un fichier `CNAME`
à la racine contenant juste `alinepons.fr` et configurer les DNS chez le registrar.

## Direction artistique

- **Palette** : crème chaud `#F3E3C8`, brun cuir `#4A2A1E`, rouge cuir `#9E1F16`,
  vert olive `#294C3A`, jaune soleil `#D99A22`, doré vieilli `#B78A3A`.
- **Typographies** : Cormorant Garamond (titres éditoriaux italiques),
  Inter (texte courant), logo manuscrit Aline Pons.
- **Esprit** : éditorial, chaleureux, artisanal, premium sans froideur.

## Personnaliser

- **Modifier un texte** : éditer directement le fichier HTML correspondant.
- **Changer une photo** : remplacer le fichier dans `assets/images/` en gardant
  le même nom, ou modifier la référence dans le HTML.
- **Ajuster les couleurs** : tout est dans `:root` au début de `css/style.css`.
- **Ajouter une tenue** : dupliquer une page de `collection/`, renommer,
  mettre à jour images et textes, puis ajouter une carte dans `index.html`
  (section `<div class="lookbook">`).

## Liens à mettre à jour

Avant publication, penser à :

- Instagram : remplacer `https://instagram.com` par le vrai compte
  (présent dans tous les footers et `contact.html`).
- Email : remplacer `bonjour@alinepons.fr` par l'adresse réelle.
- Compte Insta affiché : `@aline.pons` dans `contact.html`.

## Compatibilité

- Responsive : desktop, tablette, mobile.
- Pas de framework, pas de build : HTML, CSS et JS purs.
- Polices chargées depuis Google Fonts.
- Tous les navigateurs modernes (Chrome, Safari, Firefox, Edge).

---

© 2025 Aline Pons. Fait avec soin en Provence.
