# Mettre en place Bootstrap

En CLI 

    > npm install bootstrap

Puis on importe le css de bootstrap dans App.js pour que ça s'applique a tous les composants qui seront enfant de App

Dans `App.js`


    import React, { Component } from 'react';
    import TitreCC from './components/titre/TitreComponentClass';
    import TitreCF from './components/titre/TitreComponentFunction';
    import 'bootstrap/dist/css/bootstrap.min.css';

    class App extends Component {

        state = {

            nom1: 'Hugo',
            nom2: 'Jules',
            nom3: 'Eva'
        }

        render() {

            return (
                <div className="App">

                    <div className="composant_type_classe">
                        <TitreCC nom={this.state.nom1} />
                        <TitreCC nom={this.state.nom2} >
                        Ok, ça marche
                        </TitreCC>
                        <TitreCC nom={this.state.nom2} />
                    </div>

                    <div className="composant_type_function">
                        <TitreCF nom={this.state.nom1} />
                        <TitreCF nom={this.state.nom2} >
                        Ok, ça marche
                        </TitreCF>
                        <TitreCF nom={this.state.nom2} />
                    </div>
                </div>
            );
            
        }
    }

    export default App;



Dans `TitreComponentFunction.js`

on a mis la class='text-primary' qui vient de bootstrap

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