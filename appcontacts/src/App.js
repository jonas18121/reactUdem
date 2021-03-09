import React, { Component } from 'react';

class App extends Component {

    presentation = () => {
        return 'Hello world';
    }

    render() {

        return (
            <div className="App">
              <h1>Notre Composant</h1>
              { this.presentation() }
            </div>
          );
        
      }
    }

export default App;

