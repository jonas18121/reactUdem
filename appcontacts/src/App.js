import React, { Component } from 'react';
import Titre from './components/Titre';

class App extends Component {

    presentation = () => {
        return 'Hello world';
    }

    render() {

        return (
            <div className="App">
              <Titre nom='Hugo' />
              <Titre nom='Jules' >
                Ok, ça marche
              </Titre>
              <Titre nom='Eva' />
            </div>
        );
        
    }
}

export default App;

