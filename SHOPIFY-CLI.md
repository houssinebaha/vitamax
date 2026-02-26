# Lier Cursor à Shopify avec Shopify CLI

Une fois cette configuration faite, vous pourrez envoyer votre landing page vers Shopify depuis le terminal de Cursor.

---

## 1. Connexion à votre boutique (une seule fois)

Dans le **terminal de Cursor** (Terminal → New Terminal), exécutez :

```bash
cd "/Users/macgr/Desktop/landing page"
npm run shopify:login
```

(La boutique `vitamax-6460.myshopify.com` est déjà configurée dans les scripts.)

- Une page du navigateur s’ouvrira pour vous connecter à Shopify.
- Une fois la connexion faite, le terminal confirmera que vous êtes connecté.

---

## 2. Télécharger le thème actuel

Pour travailler sur une copie de votre thème Shopify dans le projet :

```bash
mkdir -p theme
cd theme
npx shopify theme pull
cd ..
```

Tout le thème (templates, assets, etc.) sera téléchargé dans le dossier `theme/`.

---

## 3. Copier la landing et les images dans le thème

À chaque fois que vous modifiez la landing ou les images, lancez :

```bash
npm run shopify:deploy
```

Cette commande :

1. Copie `shopify-theme/page.landing-vitamax.liquid` vers `theme/Templates/`
2. Copie les images du dossier `image/` vers `theme/assets/` (avec les noms attendus par le template)
3. Envoie les changements sur Shopify avec `shopify theme push`

*(Si vous voulez seulement copier sans envoyer, exécutez `node scripts/sync-to-theme.js`.)*

---

## 4. Commandes utiles

| Commande | Description |
|----------|-------------|
| `npx shopify auth login` | Se connecter à la boutique (une fois) |
| `npm run shopify:pull` | Télécharger le thème dans `theme/` |
| `node scripts/sync-to-theme.js` | Copier la landing + images dans `theme/` |
| `npm run shopify:push` | Envoyer le thème vers Shopify (depuis `theme/`) |
| `npm run shopify:deploy` | Sync + push en une fois |
| `npm run shopify:dev` | Lancer le serveur de prévisualisation (depuis `theme/`) |

---

## 5. Créer la page dans Shopify

Après le premier push :

1. Shopify Admin → **Boutique en ligne** → **Pages** → **Ajouter une page**.
2. Donnez un titre (ex. « Pack Beauté »).
3. À droite : **Modèle de thème** → **landing-vitamax**.
4. Enregistrez.

Votre landing sera accessible à l’URL de la page (ex. `/pages/pack-beaute`).

---

## Dépannage

- **« Theme not found »** : exécutez d’abord `npm run shopify:pull` depuis la racine du projet.
- **« Not logged in »** : relancez `npx shopify auth login`.
- **Images manquantes** : vérifiez que les fichiers existent dans `image/` et que `node scripts/sync-to-theme.js` a bien été exécuté avant un push.
