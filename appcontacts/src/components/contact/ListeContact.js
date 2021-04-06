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
