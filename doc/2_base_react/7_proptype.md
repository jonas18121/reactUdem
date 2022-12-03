# Vérifier ses props avec proptypes

Proptype permet de géré les types de propriété qu'on va prendre en compte.
Par exemple si dans `components/TitreComponentFunction.js`, 
on veut qu'il y est que des chaines de caractère dans {props.nom} ,
on va le dire dans le proptype et ça va généré une erreur dans la console si ce ne sont pas des strings qui sont passé

Dans `components/TitreComponentFunction.js` avant

import React from 'react';

function TitreCF(props) {
    return (

        <div>
            <h1>Bonjour je m'appelle {props.nom}</h1>
        </div>
    )
}

export default TitreCF;


Dans `components/TitreComponentFunction.js` après

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



Dans la partie : 

    TitreCF.propTypes = {
        nom: Proptypes.string.isRequired
    }

`Proptypes.string.isRequired` vérifie que `{props.nom}` renvoie vraiment une chaine de caractère,
Si par exemple `{props.nom}` renvoie un object ou un number ou un array, ça va retourner une erreur.

il y a aussi :

- Proptypes.string.isRequired
- Proptypes.object.isRequired
- Proptypes.number.isRequired
- Proptypes.bool.isRequired
- Proptypes.symbol.isRequired
- Proptypes.array.isRequired
- Proptypes.any.isRequired
- Proptypes.node
- Proptypes.element
- Proptypes.elementType
- Proptypes.instanceOf()
- Proptypes.oneOf()
- Proptypes.oneOfType()
- Proptypes.arrayOf()
- Proptypes.objectOf()
- Proptypes.shape()
- Proptypes.exact()


