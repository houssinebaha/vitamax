# Lier la landing page VITAMAX à Shopify

Ce guide explique comment publier et connecter votre landing page à votre boutique Shopify. Les boutons « Ajouter au panier » utiliseront automatiquement les variantes de votre produit.

---

## Vue d’ensemble

| Étape | Action |
|-------|--------|
| 1 | Créer le produit avec 3 variantes |
| 2 | Uploader les images dans Assets |
| 3 | Copier le template Liquid |
| 4 | Créer la page et choisir le modèle |
| 5 | Tester les liens « Ajouter au panier » |

---

## Étape 1 : Créer le produit « Pack Beauté & Jeunesse »

1. Dans **Shopify Admin**, allez dans **Produits** → **Ajouter un produit**.
2. **Titre** : `Pack Beauté & Jeunesse VITAMAX`
3. **Handle** (slug) : `pack-beaute-jeunesse` *(important pour la liaison)*
4. Créez **3 variantes** via les options de produit :

| Variante | Option (ex. "Formule") | Prix | SKU optionnel |
|----------|------------------------|------|---------------|
| Découverte | Découverte (1 pack) | 379 DH | pack-1 |
| Mensuel | Mensuel (2 packs) | 679 DH | pack-2 |
| Trimestriel | Trimestriel (6 packs) | 1 819 DH | pack-6 |

5. Ajoutez une image du pack pour chaque variante (ou une image par défaut).
6. **Enregistrez** le produit.

> **Important** : L’ordre des variantes doit être : 1) Découverte, 2) Mensuel, 3) Trimestriel. Le template Liquid les récupère par index (0, 1, 2).

---

## Étape 2 : Uploader les images dans Assets

1. **Boutique en ligne** → **Thèmes** → **Actions** (⋯) sur votre thème → **Modifier le code**.
2. Section **Ressources du thème** → **Assets** → **Ajouter un fichier**.
3. Uploadez chaque fichier avec **exactement** le nom indiqué (sans espaces) :

| Fichier local | Nom dans Shopify Assets |
|---------------|-------------------------|
| `image/logo without background.png` | `logo-without-background.png` |
| `image/vitamax-produits-hero.png` | `vitamax-produits-hero.png` |
| `image/collagen marin bottle.png` | `collagen-marin-bottle.png` |
| `image/multivitamine.png` | `multivitamine.png` |
| `image/creme retinole.png` | `creme-retinole.png` |
| `image/new image pack.png` | `new-image-pack.png` |
| `image/before after.png` | `before-after.png` |

4. Enregistrez.

---

## Étape 3 : Ajouter le modèle de page

1. Dans **Modifier le code** du thème, section **Modèles** (Templates).
2. **Ajouter un nouveau modèle** → choisir **Page**.
3. Nom du modèle : `landing-vitamax` → le fichier `page.landing-vitamax.liquid` est créé.
4. Ouvrez le fichier `shopify-theme/page.landing-vitamax.liquid` de ce projet.
5. **Copiez tout le contenu** et **collez-le** dans l’éditeur Shopify, en remplaçant tout.
6. **Enregistrez**.

---

## Étape 4 : Créer la page

1. **Boutique en ligne** → **Pages** → **Ajouter une page**.
2. **Titre** : par ex. `Pack Beauté` ou `VITAMAX`.
3. Laissez le **contenu** vide.
4. Dans la colonne de droite, **Modèle de thème** : choisir **landing-vitamax**.
5. **Visibilité** : Visible (ou Masquée pour tests).
6. **Enregistrer**.

---

## Étape 5 : Vérifier les liens

- La page sera accessible à une URL du type :  
  `https://votre-boutique.myshopify.com/pages/pack-beaute`
- Les boutons « Ajouter au panier » redirigent vers `/cart/add?id=VARIANT_ID&quantity=X` et utilisent automatiquement les variantes du produit `pack-beaute-jeunesse`.

### Option : page d’accueil

1. **Boutique en ligne** → **Préférences**.
2. Section **Page d’accueil** → choisir la page créée.
3. **Enregistrer**.

---

## Dépannage

| Problème | Solution |
|----------|----------|
| Images ne s’affichent pas | Vérifier les noms des fichiers dans Assets (sans espaces, exactement comme dans le tableau). |
| Page blanche | Vérifier que le bon modèle (**landing-vitamax**) est bien sélectionné pour la page. |
| « Ajouter au panier » ne fonctionne pas | Vérifier que le produit existe avec le handle `pack-beaute-jeunesse` et 3 variantes dans le bon ordre. |
| Handle du produit différent | Modifier la ligne 18 du fichier Liquid : remplacer `pack-beaute-jeunesse` par votre handle. |

---

## Liaison automatique

Le template Liquid utilise `all_products['pack-beaute-jeunesse']` pour récupérer les variantes. Les IDs sont injectés automatiquement, sans configuration manuelle.

Si vous utilisez un handle différent, modifiez cette ligne dans le fichier Liquid :

```liquid
{% assign pack_product = all_products['votre-handle'] %}
```
