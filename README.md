# Site Vitrine

[![Netlify Status](https://api.netlify.com/api/v1/badges/2609efbb-c4d3-4b1a-9286-cc3389ab2cbf/deploy-status)](https://app.netlify.com/sites/sigl-epita/deploys)

Site Vitrine de la majeure SIGL développé en Angular2.

## Requirements

* `node` >= 12.13.0
* `npm`

## Developpement

Cloner le repo
```
$ git clone git@github.com:SIGL-SIWEB/site-vitrine.git
$ cd site-vitrine
```
Installer les dépendances
```
$ npm install
```
Run le projet
```
$ npm run start
```
Le site sera accessible en local à l'url http://localhost:4200

## i18n

Le site est accessible en français et en anglais.

L'internationalisation est gérée par le package [ng2-translate](https://www.npmjs.com/package/ng2-translate).

Les traductions des différents textes sont dans les fichiers `en.json` et `fr.json` dans le dossier `src/assets/i18n/`.

## Déploiement

Initialement le site était hebergé sur [Github Pages](https://pages.github.com/) (une ancienne version est toujours disponible à l'url https://sigl-siweb.github.io/site-vitrine).

Maintenant le site est hébergé par [Netlify](https://www.netlify.com/) à l'url https://sigl.epita.fr.
