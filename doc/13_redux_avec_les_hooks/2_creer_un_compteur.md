# Créer un compteur


## Dans App.js

- On importe le fichier `Counter.js` depuis `'./Components/counter/Counter'`et on l'utilise 

Dans `App.js`

    import React from 'react';
    import './App.css';
    import Counter from './Components/counter/Counter'


    function App() {


        return (
            <div className="App">
                <Counter />
            </div>
        );
    }

    export default App;


## Dans Counter.js

- On importe notre CSS

- On importe `useSelector` et `useDispatch` depuis `react-redux`

    - `useSelector` pour utiliser le `state`, là ou on veut dans les composants 

    - `useDispatch` pour envoyer des `actions` au `store` qui les enverra aux `reducers`

- `const count = useSelector(state => state.count);`, On utilise useSelector pour afficher la valeur de la propriété count du state 

- `const dispatch = useDispatch();`, pour envoyer les actions

- Lorsqu'on va cliquer sur le bouton `<button onClick={incrementCount} > + </button>`, ça va appeler la fonction `incrementCount()`, qui lui même va appeler la fonction `dispatch()`, qui va envoyer l'action de type `'INCREMENT'` au `store`, qui va le transmettre au reducer `counterReducer`, qui va modifier le state et le retouner au `store`, ce qui va permettre a `useSelector` de recuperé la nouvelle version du state, pour l'afficher dans le composant

Dans `Counter.js`

    import React from 'react';
    import './Counter.css';
    import { useSelector, useDispatch } from 'react-redux';

    export default function Counter() {

        const count = useSelector(state => state.count);

        const dispatch = useDispatch();

        const incrementCount = () => {
            dispatch({
                type: 'INCREMENT'
            })
        }

        const decrementCount = () => {
            dispatch({
                type: 'DECREMENT'
            })
        }

        return (
            <div>
                <h2>Compteur : { count }</h2>

                <div className="bloc-btn">
                    <button onClick={incrementCount} > + </button>
                    <button onClick={decrementCount} > - </button>
                </div>
            </div>
        )
    }



## Dans Counter.css

Dans `Counter.css`

    .bloc-btn {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    button {
        width: 100px;
        height: 20px;
    }

    h2 {
        text-align: center;
        font-size: 35px;
    }


## Dans counterReducer.js

- on fait notre `switch` ave nos paramètres


Dans `counterReducer.js`

    const INITIAL_STATE = {
        count: 0
    }

    function counterReducer(state = INITIAL_STATE, action) {

        switch (action.type) {
            case 'INCREMENT':
                return {
                    ...state,
                    count : state.count + 1
                }
            case 'DECREMENT':
                return {
                    ...state,
                    count : state.count > 0 ? state.count - 1 : 0
                }
        
            default:
                return state;
        }
    }

    export default counterReducer;