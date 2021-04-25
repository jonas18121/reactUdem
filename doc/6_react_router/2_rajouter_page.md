# Rajouter des Pages

Dans `App.js`

- `<Route exact path="/" component={ListeContact} />`, On rajoute cette ligne qui va permettre d'afficher la liste des contact lorsqu'on ouvre notre application
- `<Route exact path="/ajouteContact" component={AddContact} />` , pour accéder à la page `Ajouter un Contact`
- `<Route exact path="/apropos" component={APropos} />` , pour accéder à la page `A propos`

Dans `App.js`

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header';
    import ListeContact from './components/contact/ListeContact';
    import { Provider } from './context';
    import AddContact from './components/contact/AddContact';
    import { BrowserRouter as Router, Route } from 'react-router-dom';
    import APropos from './components/page/APropos';


    class App extends Component {

        render() {

            return (

                <Provider>
                    <Router>

                        <div className="App">
                            <Header />

                            <div className='container'>
                                <Route exact path="/listeContact" component={ListeContact} />
                                <Route exact path="/" component={ListeContact} />
                                <Route exact path="/ajouteContact" component={AddContact} />
                                <Route exact path="/apropos" component={APropos} />
                            </div>
                        </div>
                    </Router>
                </Provider>
            ); 
        }
    }

    export default App;


Dans `Header.js`

- On met la balise `link` pour `Ajouter un Contact` et un autre pour `A propos`
- en bootstrap 
    - d-inline-block = display : inline-block
    - mr-2 = margin-rigth de force 2

Dans `Header.js`

    import React from 'react';
    import { Link } from 'react-router-dom';

    export default function Header() {
        return (

            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                    <div className='container'>
                        <a href='/' className='navbar-brand'>AppContacts</a>

                        <ul className='navbar-nav d-inline-block'>

                            <li className='nav-item d-inline-block mr-2'>
                                <Link to='/listeContact' className='nav-link'>Accueil</Link>
                            </li>

                            <li className='nav-item d-inline-block mr-2'>
                                <Link to='/ajouteContact' className='nav-link'>Ajouter</Link>
                            </li>

                            <li className='nav-item d-inline-block mr-2'>
                                <Link to='/apropos' className='nav-link'>à propos</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }


On cree notre composant à propos

Dans `APropos.js`

    import React from 'react'

    export default function APropos() {
        return (
            <div>
                <h1 className='display-4'>Les détails de notre app</h1>
                <p className='lead'>Version 1.0.0</p>
            </div>
        )
    }