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
