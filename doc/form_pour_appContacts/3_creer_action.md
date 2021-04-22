# Créer l'Action

Dans `context.js`

- On va rajouter dans le `reducer`, une action qui permet d'ajouter un contact 
    - l'action est `'ADD_CONTACT'`
    - `action.payload`, représente les coordonnés du contact qu'on va rentrer dans le formulaire
    - `...state.contacts` représente les contacts déjà existant qui sont dans `state.contacts`

Dans `context.js`

    import React, {Component} from 'react';

    const Context = React.createContext();

    const reducer = (state, action) => {

        switch (action.type) {
            case 'DELETE_CONTACT':
                return {
                    contacts : state.contacts.filter(contact => contact.id !== action.payload)
                }

            case 'ADD_CONTACT' :
                return {
                    contacts : [ action.payload, ...state.contacts ]
                }
                
            default:
                return state;
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
            ],
            dispatch : action => {
                this.setState(state => reducer(state, action));
            }
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



Dans `AddContact.js`

- On va importer le Comsumer

Dans `AddContact.js`

    import React, { Component } from 'react';
    import {Consumer} from '../../context';

    export default class AddContact extends Component {

        state = {
            nom : '',
            email : '',
            tel : ''
        }

        onChange = e => this.setState({ [e.target.name] : e.target.value });

        onSubmit = e => {
            e.preventDefault();
            console.log(this.state);
        }

        render() {

            return (
                <Consumer>
                    {
                        value => {

                            return (
                                <div className="card mb-3">
                                    <div className="card-header" >Ajouter un contact</div>
                    
                                    <div className="card-body" >
                    
                                        <form onSubmit={this.onSubmit}>
                    
                                            <div className="form-group">
                                                <label htmlFor="nom">Nom</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Entrez un nom ..."
                                                    name="nom"
                                                    value={this.state.nom}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                    
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Entrez un Email ..."
                                                    name="email"
                                                    value={this.state.email}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                    
                                            <div className="form-group">
                                                <label htmlFor="tel">Téléphone</label>
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder="Téléphone ..."
                                                    name="tel"
                                                    value={this.state.tel}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                    
                                            <input
                                                type="submit"
                                                value="Ajouter un contact"
                                                className="btn btn-block btn-primary"
                                            />
                                        </form>
                                    </div>
                                </div>
                            )
                        }
                    }
                </Consumer>
            )
        }
    }
