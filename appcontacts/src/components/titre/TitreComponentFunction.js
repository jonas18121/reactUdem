import React from 'react';
import Proptypes from 'prop-types';
import './Titre.css'

function TitreCF(props) {
    
    return (

        <div>
            <h1>Bonjour je m'appelle {props.nom}</h1>
            <p class='text-primary'>mon texte</p>
        </div>
    )
}

TitreCF.propTypes = {
    nom: Proptypes.string.isRequired
}

export default TitreCF;