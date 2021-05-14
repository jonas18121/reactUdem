# Changer le state d'un composant avec le Store et connect()

Pour Changer le state d'un composant avec le Store et connect()

Dans `Compteur.js`

- On va créer une méthode `mapStateToProps`, afin de savoir avec quel partie du `state` qui est dans le `store`, on veut utiliser, 

- Puis, on passe la méthode `mapStateToProps` en premier argument de la méthode `connect`, qui va mettre en relation le `store` et le composant `Compteur`

- `<Resultat valeur={this.props.counter} />`, le composant `Resultat` va utiliser la `props` `counter` qui a été créer dans `mapStateToProps`, ce qui va mettre en relation le `store` et le composant `Compteur`

- On va créer une méthode `mapDispatchToProps`, afin de définir les type d'action qu'on veut envoyer au `reducer`

- Dans `mapDispatchToProps` , `incremente : () => dispatch({ type : 'INCREMENTE' }), ` 

    - `incremente` = la `props` qu'on va utiliser dans le composant `IncrBtn`

    - `() => dispatch({ type : 'INCREMENTE' })` = le type d'action qu'on va envoyer au `reducer`, ici c'est 'INCREMENTE'

- Faire pareil pour 'DECREMENTE'

- `connect(mapStateToProps, mapDispatchToProps)(Compteur)`

    - Vu que comme ça => `(Compteur)` . Le composant `Compteur` est connecter au `store`. Le composant `Compteur` recevra toute les modifications apporter par le `reducer`, lorsque le `store` aura mis à jour le `state`

Dans `Compteur.js`

    import React, { Component } from 'react'
    import './Compteur.css';
    import Resultat from '../Composants/Resultat/Resultat.js';
    import IncrBtn from '../Composants/IncrBtn/IncrBtn.js';
    import { connect } from 'react-redux';

    class Compteur extends Component {

        render() {
            return (
                <div className="cont">
                    
                    <div className="blocConmpt">
                        <Resultat valeur={this.props.counter} />
                    </div>

                    <div className="contBtn">
                        <IncrBtn txt="Incremente" clicked={ this.props.incremente } />
                        <IncrBtn txt="Decremente" clicked={ this.props.decremente } />
                    </div>
                </div>
            )
        }
    }

    const mapStateToProps = state => {
        return {
            counter : state.compteur
        }
    }

    const mapDispatchToProps = dispatch => {
        return {
            incremente : () => dispatch({ type : 'INCREMENTE' }), 
            decremente : () => dispatch({ type : 'DECREMENTE' }) 
        }
    }

    export default connect(mapStateToProps, mapDispatchToProps)(Compteur);


Dans `reducer.js`

- On crée une condition pour dire : Si le type d'action est égale à 'INCREMENTE', on ajoute `+1` au `state.compteur `

    if (action.type === 'INCREMENTE') return { compteur : state.compteur + 1 }

- On crée une autre condition pour dire : Si le type d'action est égale à 'DECREMENTE' et que résultat du `state.compteur` est supérieur à zéro , on enlève `-1` au state.compteur 

    if (action.type === 'DECREMENTE' && state.compteur > 0) return { compteur : state.compteur - 1 }

Dans `reducer.js`

    const initialState = {
        compteur : 0
    }

    const reducer = (state = initialState, action) => {

        if (action.type === 'INCREMENTE') return { compteur : state.compteur + 1 }

        if (action.type === 'DECREMENTE' && state.compteur > 0) return { compteur : state.compteur - 1 }

        return state;
    }

    export default reducer;