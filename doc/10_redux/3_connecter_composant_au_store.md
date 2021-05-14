# Connecter un composant au store

## Autoriser le Store à injecter le state vers le composant


Dans `index.js`

- On importe `Provider` depuis `react-redux`

- Avec le composant `Provider`, on va entourer le composant `App`

- On met notre constante `store`, dans la propriété `store` du composant `App`, afin d'Autoriser la constante `store` d'injecter le `state` vers des composants enfant du composant `App`

Dans `index.js`

    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import {createStore} from 'redux';
    import reducer from './Store/reducer';
    import { Provider } from 'react-redux';

    const store = createStore(reducer);

    ReactDOM.render(<Provider> <App store={store} /> </Provider>, document.getElementById('root'));
   

Dans `Compteur.js`

- On importe `connect` depuis `react-redux`

- `connect` est une méthode qui prend deux arguments, en premier la partie du `state` qu'on veut utiliser et en deuxième l'action a executer par le `reducer`, puis `connect` retourne une fonction qui prend notre composant en argument. Exemple :

    connect(param1, param2)(Compteur)

- Maintenant notre composant `Compteur.js` est connecter à notre `store`

Dans `Compteur.js`

    import React, { Component } from 'react'
    import './Compteur.css';
    import Resultat from '../Composants/Resultat/Resultat.js';
    import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';
    import { connect } from 'react-redux';

    class Compteur extends Component {

        state = {
            compteur : 0
        }

        calcul = (action) => {

            if(action === "plus1"){
                this.setState( ( statePrec ) => { return { compteur: statePrec.compteur + 1 } } )
            } 
            if(action === "moins1"){
                this.setState( ( statePrec ) => { return { compteur: statePrec.compteur - 1 } } )
            }
        
            
        }
        

        render() {
            return (
                <div className="cont">
                <div className="blocConmpt">
                    <Resultat valeur={this.state.compteur} />
                </div>
                <div className="contBtn">
                    <IncrBtn txt="Incremente" clicked={() => this.calcul("plus1")} />
                    <IncrBtn txt="Decremente" clicked={() => this.calcul("moins1")} />
                </div>
            </div>
            )
        }
    }

    export default connect()(Compteur);
