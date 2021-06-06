# Mise en place

Ici on va utilser Redux avec la hooks `useSelector` et `useDispatch`

Site React Redux : https://react-redux.js.org/

Site Redux : https://redux.js.org/introduction/getting-started

En ligne de commande on, Installe  `redux` et `react redux`

    > npm install redux

    > npm install react-redux

## Le Code

### Dans index.js

- On importe `createStore` depuis `redux`, pour créer un `store`, dedans on va avoir accès au `state` et aux `reducers` 

- On importe `Provider` deuis `react-redux`, pour englober le composant `<App />`, cela permettra de propager notre`state` dans toute l'application. N'importe quel composant de notre application pourra avoir accès a notre `state` sans problème, s'il en a besoin. Cela nous permettra aussi d'utiliser les 2 hooks `useSelector` et `useDispatch`

- On importe notre `reducer`, `counterReducer()`

- `const store = createStore(counterReducer);` On cree notre `store` avec notre `reducer`, `counterReducer()` en paramètre

- `<Provider store={store}>`. On met notre constante `store` dans la propriété store du composant `Provider`

Dans `index.js`


    import React from 'react';
    import ReactDOM from 'react-dom';
    import App from './App';
    import reportWebVitals from './reportWebVitals';
    import { createStore } from 'redux';
    import { Provider } from 'react-redux';
    import counterReducer from './redux/reducer/counterReducer';

    const store = createStore(counterReducer);



    ReactDOM.render(
        <Provider store={store}>
            <React.StrictMode>
            <App />
            </React.StrictMode>
        </Provider>,
    document.getElementById('root')
    );

    reportWebVitals();



### Dans counterreducer.js

- `INITIAL_STATE` On détermine un `state` initiale

- Dans la fonction `counterReducer(state = INITIAL_STATE, action)`, on met en paramètre 1 notre `state` initiale et en paramètre 2 `action` qui sera un objet

- Pour l'instant ou retourne que le `state`, on lui passera un `switch` dans les prochains cours

Dans `counterreducer.js`


    const INITIAL_STATE = {
        count: 0
    }

    function counterReducer(state = INITIAL_STATE, action) {

        return state;
    }

    export default counterReducer;

