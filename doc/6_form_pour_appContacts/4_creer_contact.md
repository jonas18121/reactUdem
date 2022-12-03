# Créer le Contact


Dans `AddContact.js`

- `onSubmit={this.onSubmit.bind(this, value.dispatch)}` 
    - `.bind` permet de lier `onSubmit` avec la classe de lequel il est, et aussi lier `onSubmit` au `Consumer`. c'est presque comme si on avais utiliser une fonction fléchée `onSubmit={ () => this.onSubmit(value.dispatch)}`. Mais  `.bind` c'est mieux dans ce cas là.

- On crée un objet `newContact` ce qui nous permettra de passer notre nouveau contact dans la propriété `payload` de la méthode `dispatch` qui est dans `onSubmit`

- `onSubmit = (dispath, e) => {`
    - `dispath` vient du `Comsumer`, donc c'est la méthode `dispatch` qui est dans le `state` qui est dans `context.js`
    - `e` c'est l'évènnement `onSubmit`

- `dispath({ type : 'ADD_CONTACT', payload : newContact });` c'est la méthode `dispatch` qui est dans le `state` qui est dans `context.js`
    - `type : 'ADD_CONTACT'` c'est l'action qu'on veux activer dans le `reducer` dans `context.js`
    - `payload : newContact` on passe notre nouveau contact dans la propriété `payload`

- Pour générer automatiquement des Identifiants on va faire la commande 
    
    > npm install uuid 

    - on va l'importer et l'utilser comme ça par exemple `id : uuidv4(),`

        import { v4 as uuidv4 } from 'uuid';

- On peut aussi utiliser une autre commande

    > npm install react-uuid

    - on va l'importer et l'utilser comme ça par exemple `id : uuid(),`

        import uuid from 'react-uuid'

- on remet le formulaire a 0 : 

    this.setState({
        nom : '',
        email : '',
        tel : ''
    });


Dans `AddContact.js`


    import React, { Component } from 'react';
    import {Consumer} from '../../context';
    import { v4 as uuidv4 } from 'uuid';

    export default class AddContact extends Component {

        state = {
            nom : '',
            email : '',
            tel : ''
        }

        onChange = e => this.setState({ [e.target.name] : e.target.value });

        onSubmit = (dispath, e) => {
            e.preventDefault();
            
            const newContact = { 
                id : uuidv4(),
                nom : this.state.nom,
                email : this.state.email,
                tel : this.state.tel 
            }

            dispath({ type : 'ADD_CONTACT', payload : newContact });

            // remettre a 0
            this.setState({
                nom : '',
                email : '',
                tel : ''
            });


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
                    
                                        <form onSubmit={this.onSubmit.bind(this, value.dispatch)}>
                    
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
