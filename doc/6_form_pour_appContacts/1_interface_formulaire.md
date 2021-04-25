# Créer l'interface du formulaire

Pour créer un formulaire pour ajouter des contacts, on va d'abord créer un composant nommé `AddContact`

Dans `contact/AddContact.js`

- On crée un state
- On crée notre formulaire, la propriété `value` va permettre d'écrire dans `state.nom` puis on va etre a l'écoute sur l'évènnement `onChange`

Dans `contact/AddContact.js`

    import React, { Component } from 'react'

    export default class AddContact extends Component {

        state = {
            nom : '',
            email : '',
            tel : ''
        }

        render() {
            return (
                <div className="card mb-3">
                    <div className="card-header" >Ajouter un contact</div>

                    <div className="card-body" >

                        <form>

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


Puis `on importe le composant AddContact dans App.js`

Dans `App.js`

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header';
    import ListeContact from './components/contact/ListeContact';
    import { Provider } from './context';
    import AddContact from './components/contact/AddContact';


    class App extends Component {

        render() {

            return (

                <Provider>
                    <div className="App">

                        <Header />

                        <div className='container'>
                            <AddContact />
                            <ListeContact />
                        </div>
                    </div>
                </Provider>
            ); 
        }
    }

    export default App;

