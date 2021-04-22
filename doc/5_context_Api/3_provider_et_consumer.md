# Wrapper avec "Provider" et "Consumer"

Dans `App.js`, 

- On va importer la classe Provider
- On va entourer toute notre application avec le composant `<Provider> ` afin que tout ses enfant puisse accéder a son `state`

Dans `App.js`,

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header';
    import ListeContact from './components/contact/ListeContact';
    import { Provider } from './context';

    class App extends Component {

        render() {

            return (
                <Provider>
                    <div className="App">
                        <Header />

                        <div className='container'>
                            <ListeContact />
                        </div>
                    </div>
                </Provider>
            ); 
        }
    }

    export default App;



Dans `ListeContact.js`

- On va importer le `comsumer` pour utiliser le `context`
- on crée un premier return `return ( <Consumer> {value => {` qui va entourer le deuxième return. Le premier return contient le `consumer` avec le paramètre `value` on va l'utiliser a la place de `this.state` dans le deuxième return

Avant : 

    return (
        return (
            <React.Fragment>
                {this.state.contacts.map(contact => (
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
    )

Après :

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


Dans `ListeContact.js`

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

Il reste encore à configurer la méthode `supprime()` avec notre nouvelle version de `ListeContact.js` avec `<Consumer>`