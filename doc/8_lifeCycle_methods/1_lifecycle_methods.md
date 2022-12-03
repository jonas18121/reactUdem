# Les "Lifecycle Methods"

Chaque composant de React possède plusieurs méthodes de cycle de vie qui nous permettent d'exécuter du code à des moments précis du processus.

Les méthodes de cycles de vie peuvent être utilisées dans les composants de type classe, mais pas dans les composants de type fonctionnel.

Les méthodes de cycles de vie sont appelé automatiquement par `React`

### Mounting (Montage) :

Lors du montage d'un composant, un composant passe par quatre méthodes de cycles de vie dans l'ordre suivant.

- 1) - constructor()
- 2) - getDerivedStateFromProps()
- 3) - render()
- 4) - componentDidMount()

### Updating (Mise à jour)

Dans le cas où les `props` ou le `state` d'un composant changent, un composant passe par 5 étapes dans l'ordre suivant

- 1) - getDerivedStateFromProps()
- 2) - shouldComponentUpdate ()
- 3) - render()
- 4) - getSnapshotBeforeUpdate()
- 5) - componentDidUpdate()

### Unmounting (Démontage)

Un composant n'a qu'une seule méthode de cycle de vie lors de la phase de démontage

- 1) - componentWillUnmount()


## Explication des méthodes du cycle de vie

- 1) - constructor() :

    -  Cette méthode est appelée lors de la première initialisation du composant. 

- 2) - render() : 

    - Cette méthode de cycle de vie renvoie des éléments en tant que sortie du composant. Il permet d'afficher le rendu du composant dans lequel, il est situé.

- 3) - componentDidMount() : 

    - Cette méthode de cycle de vie est appelé lorsque le composant est appelé, c'est-à-dire lorsque le composant parent, ainsi que les composants enfants sont tous traité et près à etre affiché.

- 4) - shouldComponentUpdate(nextProps, nextState) :

    - Cette méthode est appelée chaque fois qu'un composant est mis à jour en raison de changements de `state` ou de `prop`. Le composant et tous ses enfants seront rendus ou non en fonction de ce qui est retourné par cette méthode.

- 5) - getSnapshotBeforeUpdate(prevProps, prevState) :

    - Dans certains cas, le composant a besoin d'obtenir des informations du DOM avant qu'il ne soit potentiellement modifié. Cette méthode nous permet de faire cela.

- 6) - componentDidUpdate(prevProps, prevState, snapshot) :

    - Il s'agit d'une méthode de cycle de vie qui est appelée immédiatement après la mise à jour, mais pas pour le rendu initial. Si votre composant implémente la méthode getSnapshotBeforeUpdate (), la valeur qu'il renvoie sera reçue en tant que paramètre d'instantané.

- 7) - componentWillUnmount() :

    - Cette méthode de cycle de vie est appelé avant de détruire votre composant. Vous pouvez utiliser cette méthode de cycle de vie pour effectuer toutes les tâches de nettoyage.

- 8) - componentDidCatch(error, info) :

    - Cette méthode de cycle de vie a été introduit dans React 16 pour permettre de détecter facilement les erreurs dans les composants.




## Quelques exemple

Dans `Contact.js`

- on a utiliser componentDidMount() et componentDidUpdate()

Dans `Contact.js`

    import React, { Component } from 'react';
    import { Consumer } from '../../context';

    export default class Contact extends Component {

        componentDidMount(){
            console.log('componentDidMount() est appelé après que tous les composant soit bien charger par le render()');
        }

        componentDidUpdate(){
            console.log('componentDidUpdate() est appelé après que le composant est bien mise à jour (modifier), exemple suppression ou ajout d\'un contact.');
        }

        state = {
            show : false
        }

        supprimeContact = (id, dispatch) => {
            dispatch({ type: 'DELETE_CONTACT', payload: id });
        }

        montrerContact = () => {
            this.setState({
                show : !this.state.show
            });
        }

        render() {

            return (
                <Consumer>
                    {value => {

                        return (
                            <div className='card card-body mb-3 text-center'>

                                <h4>
                                    {this.props.nom}&nbsp; 

                                    <i 
                                        className="fas fa-sort-down" 
                                        onClick={this.montrerContact} 
                                        style={{ cursor: 'pointer' }}
                                    ></i>

                                    <i 
                                        className="fas fa-times"
                                        style={{
                                            cursor: 'pointer',
                                            float: 'right',
                                            color: 'red'
                                        }}
                                        onClick={ () => this.supprimeContact(this.props.id, value.dispatch) }
                                    ></i>
                                </h4>

                                { 
                                    this.state.show ? (

                                        <ul className="card card-body mb-3">

                                            <li className='list-group-item'>
                                                Email : {this.props.email}
                                            </li>

                                            <li className='list-group-item'>
                                                Téléphone : {this.props.tel}
                                            </li>

                                        </ul>

                                    ) : null
                                }
                            </div>
                        )
                    }}
                </Consumer>
            );
        }
    }
