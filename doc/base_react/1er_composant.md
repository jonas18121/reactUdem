# Créer notre premier composant

Un componsant doit être écrit avec une Majuscle
On mettre une parenthèse au return() dès qu'on retoune du JSX

Dans `components/Titre.js`

    import React, { Component } from 'react';

    class Titre extends Component {

        render(){
            return (
                <h1>Notre titre depuis un autre composant. </h1>
            )
        }
    }

    export default Titre;

Dans `App.js`

    import React, { Component } from 'react';
    import Titre from './components/Titre';

    class App extends Component {

        presentation = () => {
            return 'Hello world';
        }

        render() {

            return (
                <div className="App">
                <Titre />
                </div>
            );
            
        }
    }

    export default App;
