
## Pour résoudre les problèmes qui ne nécessitent pas d'attention

    > npm audit fix

## Pour résoudre tous les problèmes (y compris les changements de rupture)

    > npm audit fix --force


## Installer redux 

    > npm install redux

## Installer react-redux 

    > npm install react-redux

## Installer Bootstrap

```bash
npm install bootstrap
```

## Installer UUID

```bash
npm install uuid
```
 ou 

```bash
yarn add uuid
```






# Mettre notre application en ligne

Pour Mettre notre application en ligne, sur une page de Github

## Installer gh-pages de github

    > npm install gh-pages

Dans `package.json`

- Entre la propriété `"private"` et `"dependencies"` mettre une propiété `"homepage"`

- Dans `"homepage"` mettre une url avec mon pseudo de github et le nom du projet

- Dans la propriété `"scripts"`, on va rajouter un script pour déployer notre application

    > "deploy": "npm run build&&gh-pages -d build",

- Puis Dans le terminale

    > npm run deploy

- Une fois que c'est bon on aura un lien dans le terminale qui nour dirigera vers notre projet

Dans `package.json`


    {
        "name": "reduxcoursaz",
        "version": "0.1.0",
        "private": true,
        "homepage": "https://mon_pseudo.github.io/nom_du_projet",
        "dependencies": {
            ...
        },
        "scripts": {
            "deploy": "npm run build&&gh-pages -d build",
            "start": "react-scripts start",
            "build": "react-scripts build",
            "test": "react-scripts test",
            "eject": "react-scripts eject"
        },
