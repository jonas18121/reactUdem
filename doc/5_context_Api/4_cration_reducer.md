# Création du "Reducer"

On va mettre un `reduce`r qui va nous permettre de `supprimer des contactes`

Dans `ListContact.js`

- On va supprimer la méthode `supprime()`
- On va supprimer la propriété `supprimeClick`

Avant : 

    import React, { Component } from 'react';
    import Contact from './Contact';
    import { Consumer } from '../../context';

    export default class ListeContact extends Component {

        supprime = (id) => {

            const newContacts = this.state.contacts.filter(contact => contact.id !== id);

            this.setState({
                contacts : newContacts
            });
        }

        render() {

            return (

                <Consumer>
                    {value => {
                        return (
                            <React.Fragment>
                                {value.contacts.map(contact => (
                                    <Contact 
                                        key={contact.id}
                                        nom={contact.nom}
                                        email={contact.email}
                                        tel={contact.tel}
                                        supprimeClick={() => this.supprime(contact.id)}
                                    />
                                ))}
                            </React.Fragment>
                        )
                    }}
                </Consumer>
            )
        }
    }

Après :

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

- On va supprimer le contenu qui est dans la méthode `supprimeContact()`

import React, { Component } from 'react'

    export default class Contact extends Component {

        state = {
            show : true
        }

        supprimeContact = () => {
            
        }

        montrerContact = () => {
            this.setState({
                show : !this.state.show
            });
        }

        render() {
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
                            onClick={this.supprimeContact}
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
        }
    }

Dans `context.js`

- on va créer un `reducer`, le `reducer` va contenir nos actions, par exemple supprimer un contact
- `Dans le switch du reducer, on va créer nos différents type d'action`
- `action.payload` , ça correspond à l'élément sur lequel on va cliquer dessus

    import React, {Component} from 'react';

    const Context = React.createContext();

    const reducer = (state, action) => {

        switch (action.type) {
            case 'DELETE_CONTACT':
                return {
                    ...state,
                    contacts : state.contacts.filter(contact => contact.id !== action.payload)
                }
                
            default:
                break;
        }
    }

    export class Provider extends Component {

        state = {
            contacts : [
                {
                    id : 1,
                    nom : 'Jhon Doe',
                    email : 'jhon@gmail.com',
                    tel : "555-555-555"
                },
                {
                    id : 2,
                    nom : 'Jhonna Doe',
                    email : 'jhon@gmail.com',
                    tel : "555-555-555"
                },
                {
                    id : 3,
                    nom : 'Jhonny Doe',
                    email : 'jhon@gmail.com',
                    tel : "555-555-555"
                }
            ]
        }

        render() {
            return (
                <Context.Provider value={this.state}>
                    {this.props.children}
                </Context.Provider>
            )
        }
    }

    export const Consumer = Context.Consumer;

Dans la prochain chapitre on va `créer un Dispatch pour lier tous ça`.