import React, { Component } from 'react'
import Contact from './Contact'

export default class ListeContact extends Component {

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
