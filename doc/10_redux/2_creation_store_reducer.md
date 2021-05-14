# Création du Store et du Reducer

1) On va commencer par installer `redux` et `react-redux`

    > npm install redux

    > npm install react-redux

2) On crée le `STORE` qui va contenir le `state` de notre site

Dans `index.js`

- On importe `createStore` depuis `redux`

- On crée un dossier `Store`, dedans on crée un fichier `reducer.js` et on l'importe ici 

- On crée notre constante `store` avec `createStore` et on lui passe notre reducer.

- C'est le `reducer` qui va envoyer au `store` le `state` modifier, avant que le `store` le met à jour partout dans le site

Dans `index.js`

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import {createStore} from 'redux';
    import reducer from './Store/reducer';

    const store = createStore(reducer);

    ReactDOM.render(<App />, document.getElementById('root'));


Dans `reducer.js`

- On crée notre `state` initiale

- On crée notre constante reducer et on va lui passé en argument le `state` initiale et l'`action` que le `reducer` devra executer

- Pour l'instant, on a mis qu'un `return`, mais c'est pas fin, la suite au prochain numéro

Dans `reducer.js`

const initialState = {
    compteur : 0
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;