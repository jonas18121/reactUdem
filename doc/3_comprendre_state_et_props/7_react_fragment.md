# Comprendre les "React Fragment"

Afin d'évité d'utiliser des `<div></div>` pour vrapper (entourer) le contenu de chaque composants, 
On va plutôt utiliser `<React.Fragment></React.Fragment>` qui ne rajoute pas de noeud inutile dans le DOM du navigateur.

Car chaque `<div></div>` va ajouter un noeud dans le DOM du navigateur. 
Ce qui peut posé des problèmes de performance s'il y a trop de `<div></div>`.
Si on utilise pas la `<div></div>` en question en lui rajoutant une ClassName par exemple. vos mieux utiliser `<React.Fragment></React.Fragment>`


Dans `ListeContact.js` Avec `<div></div>` au return

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




Dans `ListeContact.js` Avec `<React.Fragment></React.Fragment>` au return


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
        }
    }
