# Mieux comprendre State et Props

Comme `App.js` est le parent qui est au sommet de tous les autres parents.
Ce n'est pas très propre de rajouter 3 `<Contact />`, donc on va les enlever et les mettre dans un composant qui va les lister  

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header'
    import Contact from './components/contact/Contact'

    class App extends Component {


        render() {

            return (
                <div className="App">
                    <Header />

                    <div className='container'>
                        <Contact />
                        <Contact />
                        <Contact />
                    </div>
                </div>
            );
            
        }
    }

    export default App;


`On enlève les balise conatct dans App.js`

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header'

    class App extends Component {


        render() {

            return (
                <div className="App">
                    <Header />

                    <div className='container'>
                        
                    </div>
                </div>
            );
            
        }
    }

    export default App;

On cree un composant nommé `ListeContact.js` pour fournir la liste de contact
et on implémentra `ListeContact.js` dans `App.js`

Dans `ListeContact.js`

    import React, { Component } from 'react'
    import Contact from './Contact'

    export default class ListeContact extends Component {

        state = {
            contacts : [
                {
                    id : 1,
                    nom : 'Jhon Doe',
                    email : 'jhon@gmail.com',
                    tel : 555-555-555
                },
                {
                    id : 2,
                    nom : 'Jhon Doe',
                    email : 'jhon@gmail.com',
                    tel : 555-555-555
                },
                {
                    id : 3,
                    nom : 'Jhon Doe',
                    email : 'jhon@gmail.com',
                    tel : 555-555-555
                }
            ]
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
                        />
                    ))}
                </div>
            )
        }
    }

L'objet `state` aura toutes les données qu'il y aura dans nos contacts

La méthode map() qui est dans this.state.contacts.map() , permet de retourner les 3 objets (avec leurs propriétés) qui sont dans this.state.contacts 

On met les parenthèses après la flèche `=>` comme on retourne du `JSX`, 
{this.state.contacts.map(contact => `()` )}



Là on peut `importer`, notre composant `ListeContact` dans `App.js`


    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header'
    import ListeContact from './components/contact/ListeContact'

    class App extends Component {

        render() {

            return (
                <div className="App">
                    <Header />

                    <div className='container'>
                        <ListeContact />
                    </div>
                </div>
            );
            
        }
    }

    export default App;

ça va retourner 3 contacts, mais il n'y aura rien dedans car dans `Contact.js`, on n'a pas encore ecrit la référence (`les props`)


Dans `Contact.js` avec les props

    import React, { Component } from 'react'

    export default class Contact extends Component {
        render() {
            return (
                <div className='card card-body mb-3 text-center' >

                    <h4>{this.props.nom}</h4>

                    <ul className="card card-body mb-3">
                        <li className='list-group-item'>
                            Email : {this.props.email}
                        </li>
                        <li className='list-group-item'>
                            Téléphone : {this.props.tel}
                        </li>
                    </ul>
                </div>
            )
        }
    }
