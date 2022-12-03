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
