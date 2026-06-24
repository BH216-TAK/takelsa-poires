# TAKELSA — Poires Williams · build de production

Dossier **statique autonome**, prêt à déployer. Modèle : le site huile « Le Puits ».

## Déploiement (GitHub Pages)

**Copier le contenu de ce dossier `site/` à la racine du repo** `takelsa-poires`
(ou dans `docs/` selon ta config Pages). Rien d'autre n'est requis.

```
takelsa-poires/
├── index.html        ← page unique (standalone)
├── styles.css        ← tokens + styles (inline-friendly)
├── app.js            ← logique vanilla (FR↔AR, animations) — zéro dépendance
└── assets/
    ├── og-image.jpg  ← aperçu de partage 1200×630
    └── photos/       ← .webp (responsive) + fallback .jpg
```

→ en ligne sur `https://bh216-tak.github.io/takelsa-poires/`.

## Technique

- **Zéro CDN runtime, zéro Babel** : pas de React/unpkg, pas de `text/babel`.
  Tout est en **JS vanilla pré-écrit** (la seule logique est la bascule FR/AR).
- **100 % autonome** : aucune référence hors-dossier. Tous les chemins sont
  **relatifs** (`./…`) — fonctionne sous le sous-chemin `/takelsa-poires/`.
- **Polices** : `@import` Google Fonts dans `styles.css` (Marcellus · Spectral ·
  Archivo · Tajawal · Noto Sans Tifinagh), `font-display: swap` — la **seule**
  requête externe. Le site reste lisible avec les polices système si elle tarde.
  *(Pour 100 % hors-ligne : déposer les `.woff2` dans `assets/fonts/` et
  remplacer l'`@import` par des `@font-face` locaux — me redemander.)*
- **Photos** : `<picture>` **WebP** responsive (`srcset` + `sizes`) avec fallback
  **JPG** léger — pensé **connexion faible** (1ᵉʳ écran ~110 Ko en WebP).
- **Progressive enhancement** : `index.html` contient un héros + contact
  **statiques** lisibles sans JS ; `app.js` les remplace par le site complet.
- **Accessibilité / mouvement** : `prefers-reduced-motion` respecté (ken-burns,
  sceau, reveals coupés ; contenu visible).

## Fidélité

Rendu **identique au v8 validé** : FR↔AR + RTL, **AR Derja** (lede, contact,
fruit, libellés carte), **بير الزيت** (4 emplacements), **أشجار السرول**, halo
terracotta sous « ويليامز », signature **El Bir**, mobile aéré, lien domaine →
huile au footer (FR + AR). Garde-fous inchangés (invitation, zéro chiffre,
producteur = TAKELSA / Ridha = contact, Messenger d'abord, ⵣ canonique).

> Source éditable : `ui_kits/vitrine/` (aperçu design-system, React). Ce dossier
> `site/` en est l'export de production — modifier la source puis ré-exporter, ou
> éditer directement `app.js` / `styles.css` (mêmes contenus).
