# Changez le state grâce à "Dispatch"

On va créer dans une `méthode nommé dispatch()` (dans l'objet state) qui va nous permettre de `choisir les types d'action` à executer dans la `fonction reducer()`

Dans `context.js`

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
            dispatch: action => {
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


Dans `Contact.js`

- On va entourer le `return` (qui est dans le render() de `Contact.js`) d'un `<Consumer>` afin de pouvoir utiliser la méthode `dispatch()`

    import React, { Component } from 'react';
    import { Consumer } from '../../context';

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
                    }}
                </Consumer>
            );
        }
    }
