# Pong game

Le jeu est inspiré du tennis de table en vue de dessus, et chaque joueur s'affronte en déplaçant la raquette virtuelle de haut en bas, de façon à garder la balle dans le terrain de jeu. Le joueur peut changer la direction de la balle en fonction de l'endroit où celle-ci tape sur la raquette, alors que sa vitesse augmente graduellement au cours de la manche. Un score est affiché pour la partie en cours.  

Parce qu’une vidéo vaut mille mots, tu peux trouver [un exemple de jeu ici](https://youtu.be/fiShX2pTz9A).

## Scripts

```sh
# Avec yarn
yarn {script}

# Avec npm
npm run {script}
```
  yarn start
    Starts the development server.

  yarn build
    Bundles the app into static files for production.

  yarn test
    Starts the test runner.

  yarn eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

- `start`: Lance le serveur de développement.
- `build`: Lance la construction de la version de production.
- `lint`: Affiche les erreurs dans le code.
- `lint:fix`: Tente de corriger certaines des erreurs dans le code.
- `clean`: Supprime le dossier `dist/`.
- `clean:all`: Supprime `dist/`, `node_modules/` et les fichiers `lock`.

---

## Principaux Outils

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)


### Webpack

*Task Runner*, *Builder* ou *Bundler* ie. automatisation de tâches : transpilation JS par Babel, conversion Sass -> CSS, optimisation du build, etc.

- [`webpack`](https://github.com/webpack/webpack) - Packageur de modules et ressources.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Interface en ligne de commande pour Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Serveur de développement pour Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Outil de fusion de fichiers de configuration.
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.
- Loaders :
  - [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile les fichiers avec Babel depuis Webpack.
  - [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Charge et transforme le SCSS en CSS.
    - [`sass`](https://github.com/sass/dart-sass) - Préprocesseur Sass (implémentation avec Dart).
  - [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Transforme le CSS avec PostCSS.
    - [`cssnano`](https://github.com/cssnano/cssnano) - Optimise et compresse PostCSS.
    - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Comportements pour PostCSS.
  - [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Résout et importe le CSS dans le JS.
  - [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Injecte le CSS dans le DOM.
  - [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Utilisation de ESLint avec Webpack.
  - [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copie de fichiers utilisés dans le JS.
- Plugins :
  - [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Supprime/nettoie le dossier de build.
  - [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copie des fichiers vers le dossier de build.
  - [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Génère un fichier HTML à partir d'un template.
  - [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extrait le CSS dans des fichiers séparés.
  - [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimise and minimise les ressources CSS.
  - [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minimise le Javascript.
  - [`bundle-stats`](https://github.com/relative-ci/bundle-stats) - Analyse du build.

### Babel

Transpilation ES6/JSX -> ES5.

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ vers une version JavaScript compatible partout.
- Presets :
  - [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - "Vocabulaire" ou règles de syntaxe pour Babel et l'ES6+.
  - [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - "Vocabulaire" ou règles de syntaxe pour Babel et le JSX (React).
- Plugins :
  - [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Rend possible les propriétés de classe.
  - [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) - Rend possible le déversement d'objets.

### ESLint

- [`eslint`](https://github.com/eslint/eslint) - ESLint, linter / analyseur de code JS.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Analyse le code Babel.
- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Configuration Airbnb pour ESLint.
- Plugins : 
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Analyse les imports de fichiers.
    - [`eslint-import-resolver-alias`](https://github.com/johvin/eslint-import-resolver-alias) - Permet de définir des alias pour les dossiers.
  - [`eslint-plugin-react`](https://github.com/yannickcr/eslint-plugin-react) - Analyse le code React.
  - [`eslint-plugin-react-hooks`](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Analyse les hooks de React.
  - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Analyse l'accessibilité du JSX.

### React

- [`react`](https://github.com/facebook/react) - React.
  - [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom) - Permet d'injecter des composants React dans le DOM.
- [`prop-types`](https://github.com/facebook/prop-types) - Validation de props au sein du JSX.

---
