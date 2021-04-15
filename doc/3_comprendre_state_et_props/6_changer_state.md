#  Changer le State depuis un autre composant

On va faire style, que on va supprimer un contact qui est dans le state de la liste de contact ListeContact.js.

On va apprendre à passer une fonction en `props` à un `composant enfant `.


Dans `Contact.js`

    import React, { Component } from 'react'

    export default class Contact extends Component {

        state = {
            show : true
        }

        supprimeContact = () => this.props.supprimeClick();

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

- On crée une icon "croix" de couleur rouge dans le `<h4>` et on lui passe la méthode supprimeContact() qui s'active au click . onClick={this.supprimeContact}

- `supprimeContact = () => this.props.supprimeClick();` : supprimeContact fait référence à la méthode `supprimeClick()` qui est passer en props dans `ListeContact.js`




Dans `ListContact.js`

    import React, { Component } from 'react'
    import Contact from './Contact'

    export default class ListeContact extends Component {

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

        supprime = (id) => {

            const newContacts = this.state.contacts.filter(contact => contact.id !== id);

            this.setState({
                contacts : newContacts
            });
        }

        render() {
            return (
                <div>
                    {this.state.contacts.map(contact => (
                        <Contact 
                            key={contact.id}
                            nom={contact.nom}
                            email={contact.email}
                            tel={contact.tel}
                            supprimeClick={() => this.supprime(contact.id)}
                        />
                    ))}
                </div>
            )
        }
    }


- `supprimeClick={() => this.supprime(contact.id)}` : supprimeClick fait référence à la méthode `supprime` qui va filtrer et retourner tous les contacts qui on un `id différent` de celui qui est passer en argument de la methode `supprime`, puis on l'enregistre dans le state via `this.setState()`