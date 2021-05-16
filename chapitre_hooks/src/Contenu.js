import React, { useState }  from 'react'

export default function Contenu() {

    const [monState, setMonState] = useState(0);

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
