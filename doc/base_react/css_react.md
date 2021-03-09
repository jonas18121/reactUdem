# Du css avec React 

## 1er methode 

- On ecrit directement dans les balises avec un propriété `style` :
dans cette méthode, on peut aussi des opérations ternaire
c'est utile pour les fenètre modale par exemple

Dans `components/titre/TitreComponentFunction.js`

    import React from 'react';
    import Proptypes from 'prop-types';

    function TitreCF(props) {

        let toggle = true;
        return (

            <div>
                <h1 style={
                    {
                        color : toggle ? 'red' : 'green',
                        fontSize: '50px'
                    }
                }>Bonjour je m'appelle {props.nom}</h1>
            </div>
        )
    }

    TitreCF.propTypes = {
        nom: Proptypes.string.isRequired
    }

    export default TitreCF;


## 2èmes methode 

- On crée une variable et on met le css dedans
c'est une technique rarement utiliser


Dans `components/titre/TitreComponentFunction.js`

    import React from 'react';
    import Proptypes from 'prop-types';

    function TitreCF(props) {

        return (

            <div>
                <h1 style={styleTitre} >Bonjour je m'appelle {props.nom}</h1>
            </div>
        )
    }

    const styleTitre = {
        color: 'green',
        fontSize: '50px'
    }

    TitreCF.propTypes = {
        nom: Proptypes.string.isRequired
    }

    export default TitreCF;


## 3èmes methode 

- Créer un fichier css et on l'importe dans le fichier Js
c'est la technique la plus utiliser 

Dans `components/titre/TitreComponentFunction.js`

    import React from 'react';
    import Proptypes from 'prop-types';
    import './Titre.css'

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

Dans `components/titre/Titre.css`

    h1 {
        color: blueviolet;
        font-size: 50px;
    }