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
        console.log('Le piège ces que si on met setMonState(monState + 1 ) dans cette fonction, ça va faire une boucle infini');
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
