# Créer notre premier projet react

on va utiliser l'outil `creact-react-app` () https://github.com/facebook/create-react-app ) pour créer notre premiére appli
ça va télécharger des outils utile comme `webpack et babel`
la librairie ` react, react-dom et react-scripts avec cra-template`

on tape en ligne de commande

    > npx create-react-app nom_du_projet
    > cd nom_du_projet
    > npm start

## Webpack

https://webpack.js.org/

webpack est un bundler de modules. Son objectif principal est de regrouper des fichiers JavaScript pour une utilisation dans un navigateur, 
mais il est également capable de transformer, regrouper ou empaqueter ...


À la base, webpack est un bundler de modules statiques pour les applications JavaScript modernes. 
Lorsque webpack traite votre application, 
il crée en interne un graphique de dépendances qui mappe chaque module dont votre projet a besoin et génère un ou plusieurs bundles.

En gros il va prendre des fichier type `.png, .jpg, .sass, .cjs, .js`, il va les mettre en paquets qui va être facilement lisible par le navigateur.

## Babel js

https://babeljs.io/

Babel est un transpileur, il va prendre du javascrit nouvel génération à partir de 2015, ES6,
et ça va aussi le rendre lisible par tous les navigateurs