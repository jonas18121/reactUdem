# Lier un événement à un composant et notre "Dispatch"

Dans `ListContact.js`

- On va `ajouter une propriété id au composant Contact`, la propriété id est pareil que la propriété key, mais `c'est mieux de passé par une propriété id` 

    import React, { Component } from 'react';
    import Contact from './Contact';
    import { Consumer } from '../../context';

    export default class ListeContact extends Component {

        render() {

            return (

                <Consumer>
                    {value => {
                        return (
                            <React.Fragment>
                                {value.contacts.map(contact => (
                                    <Contact 
                                        key={contact.id}
                                        id={contact.id}
                                        nom={contact.nom}
                                        email={contact.email}
                                        tel={contact.tel}
                                    />
                                ))}
                            </React.Fragment>
                        )
                    }}
                </Consumer>
            )
        }
    }

Dans `Contact.js`

- On va mettre `this.supprimeContact()` dans une fonction annonyme afin de pouvoir lui passé les paramètres : `this.props.id` qui vient de la propriété id du composant Contact dans ListeContact et `value.dispatch` qui vient du `state` qui est dans `context.js` :  

    onClick={ () => this.supprimeContact(this.props.id, value.dispatch) }

- Dans la méthode `supprimeContact(id, dispatch)` ,  on va utiliser la méthode `state.dispatch()` et dedans :
    - on va mettre le `type d'action` qu'on veut qu'il passe à la méthode `reducer()`, ici c'est `'DELETE_CONTACT'` pour supprimer un contact
    - et le `payload` qui va nous permettre de faire la `comparaison d'id dans la méthode reducer() `  

    import React, { Component } from 'react';
    import { Consumer } from '../../context';

    export default class Contact extends Component {

        state = {
            show : true
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

