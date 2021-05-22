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
