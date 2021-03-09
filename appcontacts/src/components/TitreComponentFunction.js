import React from 'react';

function TitreCF(props) {
    return (

        <div>
            <h1>Notre titre depuis un composant de type function. </h1>
            {props.nom} <br />
            {props.children}
        </div>
    )
}

export default TitreCF;