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

