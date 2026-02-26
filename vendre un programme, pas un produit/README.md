# VITAMAX – Landing « Vendre un programme, pas un produit »

Landing page **indépendante** pour le **Programme Transformation Peau 90 jours** VITAMAX, ciblant les femmes marocaines. Stratégie : **vendre un programme, pas un produit**.

## Contenu

- **index.html** – Page unique avec toutes les sections
- **css/styles.css** – Styles (mobile-first, couleurs VITAMAX)
- **js/main.js** – FAQ, menu mobile, top bar au scroll
- **images/** – Dossier pour les visuels (voir `images/README.md`)

## Sections de la page

1. **Hero** – Nom du programme, slogan, CTA « Rejoindre le programme maintenant »
2. **Problème** – Défis peau des femmes marocaines
3. **Solution** – Programme VITAMAX (résultats, pas ingrédients)
4. **Programme** – Mois 1, 2, 3 (collagène, vitamines, routine, résultats)
5. **Témoignages** – Avis et avant/après
6. **Tarifs** – Programme 90 jours + option VIP Club
7. **FAQ** – Résultats, sécurité, livraison, Maroc
8. **CTA final** – Rappel des bénéfices + bouton principal

## Personnalisation

- **WhatsApp** : remplacer `212664341918` par votre numéro (format international sans +) dans tous les liens `https://wa.me/...`
- **Images** : ajouter les fichiers listés dans `images/README.md` (logo, hero, témoignages)
- **Logo** : si `images/logo-vitamax.png` est absent, le texte « VITAMAX » s’affiche à la place

## Hébergement (GitHub Pages)

1. Pousser ce dossier dans un dépôt (ou sous-dossier).
2. Sur GitHub : **Settings → Pages** → Source « Deploy from a branch » → branch `main` (ou `master`) → dossier **/ (root)** ou le dossier qui contient `index.html`.
3. L’URL sera du type : `https://votre-username.github.io/repo-name/` (ou avec sous-dossier si vous avez mis la landing dans un sous-dossier).

La page fonctionne en **fichiers statiques** (HTML/CSS/JS), sans build.

## Lien avec la landing existante

Cette page **ne modifie pas** la landing actuelle (racine du projet). Elle est conçue pour être utilisée séparément (autre URL, autre campagne, A/B test « programme » vs « produit »).
