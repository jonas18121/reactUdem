# Créer une Route et un Link

React Router va nous permettre de `simuler` la sensation d'aller sur plusieurs page différente. Je dis  `simuler`, car n'oublions pas que nous sommes sur une `Application Single Page`. 
Tous nos composants passe toujours par le composant parent `App` et qui est rendu dans le `id='root'` dans `\public\index.html`.
Cela permettra une meilleure expérience utilisateur.

Lien de la documentation de React Router : https://reactrouter.com/web/guides/quick-start

## Installer React Router

On peut utiliser npm ou yarn au choix.

Pour installer React Router sur notre application, on tape la commande :

    npm install react-router-dom

## Le code

Dans `App.js`

- On import `BrowserRouter et Route` depuis `react-router-dom` : import { BrowserRouter as Router, Route } from 'react-router-dom';

- On entoure notre code dans les balises `<Router></Router>`

    - dedans on pourra lister nos différentes page. 
    - Pas besoin de mettre `<Provider>` dans `<Router></Router>`

- `<Route exact path="/listeContact" component={ListeContact} />` , c'est la route de notre page liste de contact. 
    
    - `path="/listeContact"` représente l'url de la page
    - `component={ListeContact}` représente le composant que l'on va utiliser pour afficher la page en question.


Dans `App.js`

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header';
    import ListeContact from './components/contact/ListeContact';
    import { Provider } from './context';
    import { BrowserRouter as Router, Route } from 'react-router-dom';

    class App extends Component {

        render() {

            return (
                <Provider>
                    <Router>

                        <div className="App">
                            <Header />

                            <div className='container'>
                                {/* <AddContact /> */}
                                <Route exact path="/listeContact" component={ListeContact} />
                            </div>
                        </div>
                    </Router>
                </Provider>
            ); 
        }
    }

    export default App;

Dans `Header.js`

- On va importer `Link` depuis `react-router-dom` : import { Link } from 'react-router-dom';

- `<Link to='/listeContact' className='nav-link'>Accueil</Link>` , c'est sur ce lien que le user cliquera pour accéder à la page `Accueil`

    - La balise `<Link>` représente une balise `<a>`
    - La propriété `to=` représente une propriété `href=`


Dans `Header.js`

    import React from 'react';
    import { Link } from 'react-router-dom';

    export default function Header() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                    <div className='container'>
                        <a href='/' className='navbar-brand'>AppContacts</a>

                        <ul className='navbar-nav'>
                            <li className='nav-item ml-auto'>
                                <Link to='/listeContact' className='nav-link'>Accueil</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        )
    }

