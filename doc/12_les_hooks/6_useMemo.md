# Utiliser UseMemo

`useMemo Renvoie une valeur mémoïsée`

Fournissez une fonction de « création » et un `tableau` d’entrées. 

`useMemo` recalculera la valeur mémoïsée seulement si une des entrées a changé. 
Cette optimisation permet d’éviter des calculs coûteux à chaque rendu.

Rappelez-vous que la fonction fournie à useMemo s’exécute pendant le rendu. 

N’y faites rien que vous ne feriez pas normalement pendant un rendu. 

Par exemple, les effets de bord doivent passer par useEffect, et non useMemo.

En Gros, `useMemo` permet de ne pas mettre a jours un composant enfant qui n'en n'a pas besoin même si, son composant parent est mis à jour.


## Notre code

Dans `contenu.js`

- On a importer le composant `Enfant` et on l'utilise  

- Si on clique sur le bouton `Click pour ajouter + 1`, normalement, ça devrait agir uniquement sur le `state` compteur

- Malheureusement, en remettant à jour le composant `Contenu` ça met aussi à jour le composant `Enfant`, alors qu'on ne modifie aucune logique dans le composant `Enfant`

Dans `Contenu.js`

    import React, { useState } from 'react';
    import Enfant from './Enfant'

    export default function Contenu() {

        const [ compteur, setCompteur ] = useState(0);

        return (
            <div>
                <h1>Le parent</h1>

                <p>{ compteur }</p>

                <button onClick={() => setCompteur(compteur + 1)} > Click pour ajouter + 1</button>

                <Enfant  />
            </div>
        )
    }


Dans `Enfant.js` coder normalement


    import React from 'react'

    export default function Enfant() {
        
        console.log("Mise à jour du composant enfant");


        return (

            <div>
                <h2> Le composant enfant</h2>
            </div>
        )
    }


## avec React.memo()


Dans `Enfant.js` avec `React.memo()`

- `React.memo()` est une fonction intégré dans `React`

- `React.memo()` permet de ne pas remettre à jour le composant `Enfant.js` lorsqu'on modifie son composant parent `Contenu.js`, si `Enfant.js` n'ai pas modifie lui même et donc qu'il n'a pas besoin d'être mis à jour

- `React.memo()` va mémorisé le composant `Enfant.js` et va le changer seulement si on modifie sa logique ou ses variables, si on lui passe des `props` qui change aussi

Dans `Enfant.js`

    import React from 'react'

    const Enfant = function () {


        console.log("Mise à jour du composant enfant");

        return (

            <div>
                <h2> Le composant enfant</h2>
            </div>
        )
    }

    export default React.memo(Enfant);



Dans `Contenu.js`

    import React, { useState } from 'react';
    import Enfant from './Enfant'

    export default function Contenu() {

        const [ compteur, setCompteur ] = useState(0);

        return (
            <div>
                <h1>Le parent</h1>

                <p>{ compteur }</p>

                <button onClick={() => setCompteur(compteur + 1)} > Click pour ajouter + 1</button>

                <Enfant  />
            </div>
        )
    }


## Faille de React.memo

Dans `Contenu.js` 

- Si, on passe en `props` un tableau dans le composant `Enfant.js`, on va voir que ça va remettre à jour le composant `Enfant.js`, alors que la `props` qui est un tableau n'a pas changer, `c'est une Faille de React.memo()`

- Si, on passe en `props` une chaine de caractères, un nombre ou un booléan, si on ne les changent pas,  `React.memo()` ne refera pas une mise à jour du composant `Enfant.js`

- Mais si, on passe en `props` un tableau, un objet ou une fonction, même si on ne les change pas, `React.memo()` refera une mise à jour du composant `Enfant.js` car ils vont être recréer et comme on les passe au composant enfant, ça les remettra à jour. `c'est une Faille de React.memo()`

- Donc on va utiliser `useMemo()` pour régler ce problème

Dans `Contenu.js`

    import React, { useState } from 'react';
    import Enfant from './Enfant'

    export default function Contenu() {

        const [ compteur, setCompteur ] = useState(0);

        const array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

        return (
            <div>
                <h1>Le parent</h1>

                <p>{ compteur }</p>

                <button onClick={() => setCompteur(compteur + 1)} > Click pour ajouter + 1</button>

                <Enfant chaine={array}  />
            </div>
        )
    }


Dans `Enfant.js` qui reçois en props un tableau avec `React.memo`

- Il est remis à jour même si, il n'a pas besoin car `React.memo` ne sait pas géré les props en array, objet et function

Dans `Enfant.js`

    import React from 'react'

    const Enfant = function ({ chaine }) {


        console.log("Mise à jour du composant enfant");

        return (

            <div>
                <h2> Le composant enfant</h2>
                <p>{ chaine }</p>
            </div>
        )
    }

    export default React.memo(Enfant);


# useMemo

Dans `Contenu.js` avec useMemo pour passé un tableau en props

- avec `useMemo()`, l'application va mémoriser le tableau, et le surveillra pour voir s'il est modifier ou pas

- Dans `useMemo()` le tableau vide en deuxième argument `[]`, signifie qu'il va affiché les valeurs qui sont dans la constante `tab`, une fois et ils ne vont plus jamais changer, saut si on modifie le contenu qui est dans la constante `tab`

- Si dans `useMemo()` en deuxièmes argument on met `[tab]`, c'est pas bon car c'est comme si on a pas utiliser useMemo, ça va reproduire la même faille que `React.memo`


Dans `Contenu.js`

    import React, { useState, useMemo } from 'react';
    import Enfant from './Enfant'

    export default function Contenu() {

        const [ compteur, setCompteur ] = useState(0);

        const tab = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];

        const array = useMemo(() => {
            return tab;
        }, []);

        return (
            <div>
                <h1>Le parent</h1>

                <p>{ compteur }</p>

                <button onClick={() => setCompteur(compteur + 1)} > Click pour ajouter + 1</button>

                <Enfant chaine={array}  />
            </div>
        )
    }


Dans `Enfant.js` qui reçois en props un tableau avec `React.memo`

- Même si on utilise le `useMemo`dans `Contenu.js`, il faut continué d'utiliser `React.memo` pour que les tableaux passé en props ne remettent pas a jour le composant enfant, si il n'en n'a pas besoin

Dans `Enfant.js`

    import React from 'react'

    const Enfant = function ({ chaine }) {

        console.log("Mise à jour du composant enfant");

        return (

            <div>
                <h2> Le composant enfant</h2>
                <p>{ chaine }</p>
            </div>
        )
    }

    export default React.memo(Enfant);