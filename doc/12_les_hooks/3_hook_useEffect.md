# Le Hook "UseEffect"

"UseEffect", sert à lancer une méthodes lorsqu'un composant va s'afficher pour sa permiere fois comme `componentDidMount()`

Et lorsqu'un composant est mis a jours comme `componentDidUpdate()`

Dans `Contenu.js`

- `useEffect(() => {})` sans un 2èmes paramètre en argument, il agit comme `componentDidUpdate()` et `componentDidMount()`,

    - Le piège c'est que si on met `setMonState(monState + 1 )` dans cette fonction, ça va faire une boucle infini'

- `useEffect(() => {}, [])` Avec un tableau vide en 2èmes paramètres, c\'est comme un `componentDidMount()`, 
    - on va executer useEffect lors du 1er affichage, Donc lorsque le composant va ce monter
    - Très utile si on veut appeler une api

- `useEffect(() => {}, [monState])` Avec une le state dans le tableau en 2èmes paramètres, c\'est comme un `componentDidUpdate()`, et pas de boucle infini
    - On surveille le state `monState`, donc on appel useEffect lors du 1er affichage, puis a chaque fois que la valeur de `monState` change


Dans `Contenu.js`
```js
    import React, { useState, useEffect }  from 'react'

    export default function Contenu() {

        const [monState, setMonState] = useState(0);

        const ajouteState = () => {
            setMonState(monState + 1 );
        }

        const retireState = () => {
            if(monState > 0 ) return setMonState(monState - 1 );
        }

        useEffect(() => {
            console.log('composant affiché, sans 2èmes paramètres');
            console.log("Le piège c'est que si on met setMonState(monState + 1 ) dans cette fonction, ça va faire une boucle infini");
        });

        useEffect(() => {
            console.log('appeller useEffect une seule fois au 1er affichage, c\'est tout');
            console.log('Avec un tableau vide en 2èmes paramètres, c\'est comme un componentDidMount()');
        }, []);

        useEffect(() => {
            console.log('appeller useEffect au début et une seulement lorsque le state va être modifier, pas de boucle infini');
            console.log('Avec une le state dans le tableau en 2èmes paramètres, c\'est comme un componentDidUpdate()');
        }, [monState]);

        return (
            <div>

                <p>{monState}</p>

                <button onClick={retireState}>Click pour retirer - 1</button>
                <button onClick={ajouteState}>Click pour ajouter + 1</button>
            </div>
        )
    }
```

## Autres exemple avec un clean up

Dans `App.js`

- En utilisant une fonction callback dans setTimer `timer => timer + 1`, 

  `useState` va comprendre qu'il faut utilisé la constante `timer` avec les nouvelles données qui on été ajouter en argument de la fonction callback dans setTimer.

- Le `return` dans le useEffect va représenter une clean up fonction, pour faire du nettoyage lorsque le composant va ce détruit, comme ça on libère de la mémoire.

Et ça évitera que le project devienne lent.

Pour clear un intervale en JS on utilise `clearInterval`

```js
import './App.css';
import { useState, useEffect }  from 'react'

function App() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    
    // on récupère l'id de ce setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé setInterval de la mémoire du project grace a l'id contenu dans intervalId
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}

export default App;

```