# Comprendre UseReducer

Le hook UseReducer(), est un hook alternative à UseState().

Accepte un réducteur de type `(state, action) => newState`, et renvoie l’état local actuel accompagné d’une méthode `dispatch`. (Si vous avez l’habitude de Redux, vous savez déjà comment ça fonctionne.)

`useReducer` est souvent préférable à `useState` quand vous avez une logique d’état local complexe qui comprend plusieurs sous-valeurs, ou quand l’état suivant dépend de l’état précédent. `useReducer` vous permet aussi d’optimiser les performances pour des composants qui déclenchent des mises à jours profondes puisque `vous pouvez fournir dispatch à la place de fonctions de rappel.`


Dans `Compteur.js`

- On importe `useReducer()` depuis `react`

- `const [state, dispatch] = useReducer(reducer, initialState)`

    - `reducer` = c'est la fonction qui va prendre en compte le state et le retourner modifier si on a appeler les bonne action

    - `initialState` =  ce sera le state de base

    - `[state, dispatch]` useReducer , retourne le state du moment `state` et la function `dispatch` qui représente la fonction `reducer` qu'on a mis en premier argument de useReducer `useReducer(reducer, initialState)`

- On crée notre constante `initialState` de valeur 0 pour notre compteur

- On la fonction `reducer(state, action)` :

    - `state` =  c'est l'etat du state, donc si on a mis  +1, le state sera a 1 et non a 0

    - `action` = c'est l'action qu'on veut effectué

    - dans la fonction `reducer` on crée un `switch` qui récupéra nos différent type d'action pour retourner les bonnes valeurs


- `<button onClick={() => dispatch('INCREMENTE')} >Incremente</button>`, on met les différents bouton qui appellerons la fonction `dispatch()` qui est lui même la fonction `reducer()`, avec les actions a effectué, ici on a l'action `'INCREMENTE'`, on a aussi 2 autres boutton avec l'action `'DECREMENTE'` et `'RESET'`

- Dans la fonction `dispatch()`, on met que les actions qu'on veut effectué. On voit que la fonction `reducer(state, action)` qui est `dispatch()`, prend 2 argument, le state et l'action, 
Donc pourquoi dans `dispatch()` on fournit que l'action ?
Enfaite `useReducer()` va fournir lui même le state a `reducer(state, action)`, nous on a juste à donner dans `dispatch()` le nom de l'action qui va correspondre a l'un des actions qui sont dans le `switch` de `reducer()`

Dans `Compteur.js`

    import React, { useReducer } from 'react';

    const initialState = 0;

    function reducer (state, action) {
        
        switch (action) {

            case 'INCREMENTE' :
                return state + 1;

            case 'DECREMENTE' :
                return (state > 0) ? state - 1 : state;

            case 'RESET' :
                return initialState;
        
            default:
                return state;
        }
    }

    export default function Compteur() {

        const [state, dispatch] = useReducer(reducer, initialState)

        return (
            <div>
                <h1>{state}</h1>

                <button onClick={() => dispatch('INCREMENTE')} >Incremente</button>
                <button onClick={() => dispatch('DECREMENTE')} >Decremente</button>
                <button onClick={() => dispatch('RESET')} >Réinitilisé</button>
            </div>
        )
    }


Dans `App.js`

- On importe le composant `Competur.js` et on l'utilise

Dans `App.js`

    import React from 'react';
    import './App.css';
    import Navbar from './Components/Navbar';
    import Compteur from './Components/Compteur';


    function App() {

        return (
            <div className="App">
                <Navbar />

                <Compteur />
            </div>
        );
    }

    export default App;

