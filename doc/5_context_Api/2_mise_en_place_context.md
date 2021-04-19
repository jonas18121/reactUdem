# Mise en place du "context"

ic on va commencer a utiliser context

On crée un fichier nommé `src/context.js`

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

- On crée un context avec : `const Context = React.createContext();`
- On crée une classe, ici on la nomme `Provider` : `export class Provider extends Component`
- Dans la classe `Provider` on va mettre l'objet state qu'on veut partager a toute l'application
- Dans le `render()`, on mettre `<Context.Provider >` et va partager tout ce qu'il y a dans le state grace à `value={this.state}`
- `{this.props.children}` pour permettre à tout les enfants de `<Context.Provider >` d'avoir access au `state`
- `export const Consumer = Context.Consumer;` c'est pour pouvoir consomer le tout