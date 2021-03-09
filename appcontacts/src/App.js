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

