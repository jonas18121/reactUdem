# State

## Qu'est ce que state

L'objet `state` sert à rendre un composant dynamique, il pourra échanger avec les autres composants.
Il va pouvoir mettre à jours les données qui sont propre a ce composant.

Chaque composant de type classe, peut avoir un objet `state` avec des données qui leurs sont propre.

`{this.state.nom1}` est une référence à notre objet state

Dans `App.js`

    import React, { Component } from 'react';
    import Titre from './components/Titre';

    class App extends Component {

        state = {

            nom1: 'Hugo',
            nom2: 'Jules',
            nom3: 'Eva'
        }

        render() {

            return (
                <div className="App">
                <Titre nom={this.state.nom1} />
                <Titre nom={this.state.nom2} >
                    Ok, ça marche
                </Titre>
                <Titre nom={this.state.nom2} />
                </div>
            );
            
        }
    }

    export default App;