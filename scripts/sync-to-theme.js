#!/usr/bin/env node
/**
 * Copie le template Liquid et la liste des assets depuis le projet vers theme/
 * À lancer avant shopify theme push pour mettre à jour la landing VITAMAX.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const THEME = path.join(ROOT, 'theme');

const files = [
  { src: 'shopify-theme/page.landing-vitamax.liquid', dest: 'templates/page.landing-vitamax.liquid' },
];

const assetMap = [
  ['image/logo without background.png', 'logo-without-background.png'],
  ['image/vitamax-produits-hero.png', 'vitamax-produits-hero.png'],
  ['image/collagen marin bottle.png', 'collagen-marin-bottle.png'],
  ['image/multivitamine.png', 'multivitamine.png'],
  ['image/creme retinole.png', 'creme-retinole.png'],
  ['image/new image pack.png', 'new-image-pack.png'],
  ['image/before after.png', 'before-after.png'],
];

if (!fs.existsSync(THEME)) {
  console.error('Le dossier theme/ n’existe pas. Lancez d’abord: npm run shopify:pull');
  process.exit(1);
}

for (const { src, dest } of files) {
  const srcPath = path.join(ROOT, src);
  const destPath = path.join(THEME, dest);
  if (fs.existsSync(srcPath)) {
    fs.mkdirSync(path.dirname(destPath), { recursive: true });
    fs.copyFileSync(srcPath, destPath);
    console.log('Copié:', dest);
  }
}

const assetsDir = path.join(THEME, 'assets');
if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir, { recursive: true });

for (const [local, assetName] of assetMap) {
  const srcPath = path.join(ROOT, local);
  const destPath = path.join(assetsDir, assetName);
  if (fs.existsSync(srcPath)) {
    fs.copyFileSync(srcPath, destPath);
    console.log('Asset:', assetName);
  }
}

console.log('Sync terminé. Vous pouvez lancer: npm run shopify:push');
