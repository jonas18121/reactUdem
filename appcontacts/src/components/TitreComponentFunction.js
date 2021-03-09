import React from 'react';
import Proptypes from 'prop-types';

function TitreCF(props) {
    return (

        <div>
            <h1>Bonjour je m'appelle {props.nom}</h1>
        </div>
    )
}

TitreCF.propTypes = {
    nom: Proptypes.string.isRequired
}

export default TitreCF;