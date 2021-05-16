# Introduction aux React Hooks et UseState

Dans `App.js`

- On importe notre composant `Contenu.js`

Dans `App.js`

    import React from 'react';
    import './App.css';
    import Contenu from './Contenu';

    function App() {

        return (
            <div className="App">

                <Contenu />
            </div>
        );
    }

    export default App;


Dans `Contenu.js`

- On importe `useState` depuis `react`

- On recupère le résultat de `useState`dans une constante en mode destructurer `const [monState, setMonState]`

    - `monState` correspond à mon `state`

    - `setMonState` correspond à la function qui me sert à modifier mon `state`

    - On a donné un nombre initiale à `useState` qui est de 0, `useState(0)`

- Puis pour tester, on crée un boutton pour ajouter `+ 1` et l'autre pour retirer `- 1`, avec leurs fonctions respectif

Dans `Contenu.js`

    import React, { useState }  from 'react'

    export default function Contenu() {

        const [monState, setMonState] = useState(1);

        const ajouteState = () => {
            setMonState(monState + 1 );
        }

        const retireState = () => {
            if(monState > 0 ) return setMonState(monState - 1 );
        }


        return (
            <div>

                <p>{monState}</p>

                <button onClick={retireState}>Click pour retirer - 1</button>
                <button onClick={ajouteState}>Click pour ajouter + 1</button>
            </div>
        )
    }