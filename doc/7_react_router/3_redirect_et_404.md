# Faire une redirection et une page "Erreur 404"


## redirection

Dans `AddContact.js`

- On va mettre une `redirection` à la fin de l'algorithme de notre méthode `onSubmit` qui est `this.props.history.push('./');`

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

            // redirect
            this.props.history.push('./');
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


## Page "Erreur 404"

On cree notre composant de page d'erreur

Dans `page/Erreur.js`

    import React from 'react'

    export default function Erreur() {
        return (
            <div>
                <h1 className='display-3'>Erreur 404 : Page non trouvée.</h1>
            </div>
        )
    }

Dans `App.js`

- On import notre composant de page d'Erreur

- On import `Switch depuis 'react-router-dom'`

    - On va mettre toutes les balises `Route` dans la balise `Switch`

    - La balise `Switch` va nous permettre d'afficher notre page d'erreur, si on veut accéder à une `URL` qui ne matche pas avec ceux qu'on a mis dans les balises `Route`

- `<Route component={Erreur}/>` pour permettre à `Switch` d'accéder a notre page d'erreur

Dans `App.js`

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header';
    import ListeContact from './components/contact/ListeContact';
    import { Provider } from './context';
    import AddContact from './components/contact/AddContact';
    import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
    import APropos from './components/page/APropos';
    import Erreur from './components/page/Erreur';


    class App extends Component {

        render() {

            return (

                <Provider>
                    <Router>

                        <div className="App">
                            <Header />

                            <div className='container'>

                                <Switch>
                                    <Route exact path="/listeContact" component={ListeContact} />
                                    <Route exact path="/" component={ListeContact} />
                                    <Route exact path="/ajouteContact" component={AddContact} />
                                    <Route exact path="/apropos" component={APropos} />
                                    <Route component={Erreur}/>
                                </Switch>
                            </div>
                        </div>
                    </Router>
                </Provider>
            ); 
        }
    }

    export default App;

