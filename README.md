# Pong game

Le jeu est inspiré du tennis de table en vue de dessus, et chaque joueur s'affronte en déplaçant la raquette virtuelle de haut en bas, de façon à garder la balle dans le terrain de jeu. Le joueur peut changer la direction de la balle en fonction de l'endroit où celle-ci tape sur la raquette, alors que sa vitesse augmente graduellement au cours de la manche. Un score est affiché pour la partie en cours.  

Parce qu’une vidéo vaut mille mots, tu peux trouver [un exemple de jeu ici](https://youtu.be/fiShX2pTz9A).

## Scripts

Lunch yarn to install the dependances.

### Front

```sh
# Avec yarn
yarn {script}

# Avec npm
npm run {script}
```

- `start`: Start the development server.
- `build`: Starts the construction of the production version.
- `lint`: Displays errors in the code.
- `lint:fix`: Attempts to correct some of the errors in the code.
- `clean`: Deletes the folder `dist/`.
- `clean:all`: Deletes `dist/`, `node_modules/` and the files `lock`.

### Back

#### Mongo Database

In shell :

- Run mongo services `brew services start mongodb/brew/mongodb-community` for MAC

#### Conf .env

```env
  PORT=5050
  DB_HOST=mongodb://127.0.0.1:27017/pong
```

#### Run server

Launch the server part for the API score

`yarn server` : use node
`yarn servermon` : use nodemon

---

## Main Tools

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [PostCSS](https://postcss.org/)
- [ESLint](https://eslint.org/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)

### Webpack

*Task Runner*, *Builder* ou *Bundler* ie. automatisation de tâches : transpilation JS par Babel, conversion Sass -> CSS, optimisation du build, etc.

- [`webpack`](https://github.com/webpack/webpack) - Packager of modules and resources.
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for Webpack.
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for Webpack.
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Configuration file merge tool.
- [`cross-env`](https://github.com/kentcdodds/cross-env) - Cross platform configuration.
- Loaders :
  - [`babel-loader`](https://webpack.js.org/loaders/babel-loader/) - Transpile files with Babel from Webpack.
  - [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Loads and transforms the SCSS into CSS.
    - [`sass`](https://github.com/sass/dart-sass) - Preprocessor Sass (implémentation with Dart).
  - [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Transforms CSS with PostCSS.
    - [`cssnano`](https://github.com/cssnano/cssnano) - Optimizes and compresses PostCSS.
    - [`postcss-preset-env`](https://www.npmjs.com/package/postcss-preset-env) - Behaviors for PostCSS.
  - [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve and import CSS into JS.
  - [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Injects CSS into the DOM.
  - [`eslint-loader`](https://webpack.js.org/loaders/eslint-loader/) - Use ESLint with Webpack.
  - [`file-loader`](https://webpack.js.org/loaders/file-loader/) - Copy files used in JS.
- Plugins:
  - [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Delete/clean the build folder.
  - [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to the build folder.
  - [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generates an HTML file from a template.
  - [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files.
  - [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS resources.
  - [`terser-webpack-plugin`](https://github.com/webpack-contrib/terser-webpack-plugin) - Minimizes Javascript.
  - [`bundle-stats`](https://github.com/relative-ci/bundle-stats) - Build analysis.

### Babel

Transpilation ES6/JSX -> ES5.

- [`@babel/core`](https://www.npmjs.com/package/@babel/core) - Transpile ES6+ to an everywhere compatible JavaScript version.
- Presets :
  - [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) - "Vocabulary" or syntax rules for Babel and ES6+.
  - [`@babel/preset-react`](https://babeljs.io/docs/en/babel-preset-react) - "Vocabulary" or syntax rules for Babel and JSX (React).
- Plugins:
  - [`@babel/plugin-proposal-class-properties`](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties) - Makes class properties possible.
  - [`@babel/plugin-proposal-object-rest-spread`](https://babeljs.io/docs/en/babel-plugin-proposal-object-rest-spread) - Makes object-spreading possible.

### ESLint

- [`eslint`](https://github.com/eslint/eslint) - ESLint, linter / JS code analyzer.
- [`babel-eslint`](https://github.com/babel/babel-eslint) - Analyzes Babel code.
- [`eslint-config-airbnb`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) - Airbnb configuration for ESLint.
- Plugins:
  - [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Parse file imports.
    - [`eslint-import-resolver-alias`](https://github.com/johvin/eslint-import-resolver-alias) - Allows you to set aliases for folders.
  - [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react) - Parse React code.
  - [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/master/packages/eslint-plugin-react-hooks) - Parse React hooks.
  - [`eslint-plugin-jsx-a11y`](https://github.com/evcohen/eslint-plugin-jsx-a11y) - Analyzes the accessibility of JSX.

### React

- [`react`](https://github.com/facebook/react) - React.
  - [`react-dom`](https://github.com/facebook/react/tree/master/packages/react-dom) - Allows you to inject React components into the DOM.
- [`prop-types`](https://github.com/facebook/prop-types) - Validation of props within the JSX.

---
