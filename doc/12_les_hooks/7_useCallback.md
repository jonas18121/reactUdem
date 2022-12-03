#  Utiliser le Hook "UseCallback"

useCallback est comme useMemo

useCallback(fn, inputs) est équivalent à useMemo(() => fn, inputs).

Que ce soit `React.memo`, `useMemo` et `useCallback`, il faut les utiliser avec partimonie.
On les utilisent pour des composants qui on beaucoup de composants enfants qui n'ont pas besion d'être mis à jour en même temps que le parent, afin d'éviter des problème de performance 


## Notre code

### Dans `Contenu.js` avant useCallback

Dans `Contenu.js`

- Si on creer une fonction qu'on appellera `foo` et qu'on le passe en `props` au composant `Enfant.js`, on verra que lorsqu'on va mettre a jour le composant parent `Contenu.js`, le composant `Enfant.js` se mettra a jour aussi car React va recréer la function `foo`, On a la même faille qu'on avait avec `React.memo`

- il faut utiliser `useCallback`

Dans `Contenu.js`

    import React, { useState, useMemo } from 'react';
    import Enfant from './Enfant'

    export default function Contenu() {

        const [ compteur, setCompteur ] = useState(0);

        const tab = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

        const array = useMemo(() => {
            return tab;
        }, []);

        const foo = () => {
            console.log("Click");
        }

        return (
            <div>
                <h1>Le parent</h1>

                <p>{ compteur }</p>

                <button onClick={() => setCompteur(compteur + 1)} > Click pour ajouter + 1</button>

                <Enfant chaine={array} myFunc={foo} />
            </div>
        )
    }

Dans `Enfant.js`

    import React from 'react'

    const Enfant = function (props) {


        console.log("Mise à jour du composant enfant");

        return (

            <div>
                <h2> Le composant enfant</h2>
                <p>{ props.chaine }</p>
                <button onClick={props.myFunc} >Click</button>
            </div>
        )
    }

    export default React.memo(Enfant);

### Dans `Contenu.js` avec useCallback

Dans `Contenu.js`

- Avec `useCallback` va mémoriser le contenu de la fonction `foo` 

- Maintenant si on click sur le bouton `Click pour ajouter + 1` pour mettre à jour le composant parent `Contenu.js`, ça ne va pas remettre a jour le composant `Enfant.js`, tous est réglé

Dans `Contenu.js` 

    import React, { useState, useMemo, useCallback } from 'react';
    import Enfant from './Enfant'

    export default function Contenu() {

        const [ compteur, setCompteur ] = useState(0);

        console.log('parent a jour');

        const tab = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

        const array = useMemo(() => {
            return tab;
        }, []);

        const foo = useCallback(() => {
            console.log("Click");
        }, []);

        return (
            <div>
                <h1>Le parent</h1>

                <p>{ compteur }</p>

                <button onClick={() => setCompteur(compteur + 1)} > Click pour ajouter + 1</button>

                <Enfant chaine={array} myFunc={foo} />
            </div>
        )
    }


Dans `Enfant.js`

    import React from 'react'

    const Enfant = function (props) {


        console.log("Mise à jour du composant enfant");

        return (

            <div>
                <h2> Le composant enfant</h2>
                <p>{ props.chaine }</p>
                <button onClick={props.myFunc} >Click</button>
            </div>
        )
    }

    export default React.memo(Enfant);