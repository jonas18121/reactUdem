import React, {Component} from 'react';

const Context = React.createContext();

export class Provider extends Component {

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

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;