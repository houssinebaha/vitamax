# Mettre la landing VITAMAX en ligne sur GitHub Pages

## 1. Créer un dépôt sur GitHub

1. Va sur [github.com](https://github.com) et connecte-toi.
2. Clique sur **+** → **New repository**.
3. **Repository name** : par ex. `vitamax` ou `landing-vitamax` (ce sera l’URL : `ton-pseudo.github.io/vitamax`).
4. Laisse **Public**, ne coche pas « Add a README ».
5. Clique sur **Create repository**.

---

## 2. Pousser ton projet depuis le terminal

Ouvre le terminal dans le dossier du projet, puis exécute :

```bash
cd "/Users/macgr/Desktop/landing page"

# Initialiser Git (si pas déjà fait)
git init

# Tout ajouter (node_modules et theme/ sont ignorés via .gitignore)
git add .
git commit -m "Landing VITAMAX - Pack Beauté & Jeunesse"

# Remplacer TON-PSEUDO et NOM-DU-REPO par les tiens
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/NOM-DU-REPO.git
git push -u origin main
```

Exemple si ton pseudo est `vitamaxmaroc` et le repo `vitamax` :

```bash
git remote add origin https://github.com/vitamaxmaroc/vitamax.git
git push -u origin main
```

---

## 3. Activer GitHub Pages

1. Sur la page du dépôt GitHub, va dans **Settings** (Paramètres).
2. Dans le menu de gauche : **Pages**.
3. **Source** : **Deploy from a branch**.
4. **Branch** : `main` (ou `master`) → dossier **/ (root)**.
5. **Save**.

Quelques minutes plus tard, ta landing sera en ligne à :

- **https://TON-PSEUDO.github.io/NOM-DU-REPO/**  
  (ex. `https://vitamaxmaroc.github.io/vitamax/`)

Si le repo s’appelle exactement `TON-PSEUDO.github.io`, l’URL sera :

- **https://TON-PSEUDO.github.io/**

---

## 4. (Optionnel) Domaine personnalisé

Dans **Settings** → **Pages** → **Custom domain**, entre ton domaine (ex. `vitamax.ma`), puis configure les DNS chez ton registrar comme indiqué par GitHub.
