# Le Hook "UseEffect"

"UseEffect", sert à lancer une méthodes lorsqu'un composant va s'afficher pour sa permiere fois comme `componentDidMount()`

Et lorsqu'un composant est mis a jours comme `componentDidUpdate()`

Dans `Contenu.js`

- `useEffect(() => {})` sans un 2èmes paramètre en argument, il agit comme `componentDidUpdate()` et `componentDidMount()`,

    - Le piège c'est que si on met `setMonState(monState + 1 )` dans cette fonction, ça va faire une boucle infini'

- `useEffect(() => {}, [])` Avec un tableau vide en 2èmes paramètres, c\'est comme un `componentDidMount()`

- `useEffect(() => {}, [monState])` Avec une le state dans le tableau en 2èmes paramètres, c\'est comme un `componentDidUpdate()`, et pas de boucle infini


Dans `Contenu.js`

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
            console.log('Le piège c'est que si on met setMonState(monState + 1 ) dans cette fonction, ça va faire une boucle infini');
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
