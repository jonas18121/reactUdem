import React, { Component } from 'react';
import TitreCC from './components/TitreComponentClass';
import TitreCF from './components/TitreComponentFunction';

class App extends Component {

    state = {

        nom1: 'Hugo',
        nom2: 'Jules',
        nom3: 'Eva'
    }

    render() {

        return (
            <div className="App">

                <div className="composant_type_classe">
                    <TitreCC nom={this.state.nom1} />
                    <TitreCC nom={this.state.nom2} >
                    Ok, ça marche
                    </TitreCC>
                    <TitreCC nom={this.state.nom2} />
                </div>

                <div className="composant_type_function">
                    <TitreCF nom={this.state.nom1} />
                    <TitreCF nom={this.state.nom2} >
                    Ok, ça marche
                    </TitreCF>
                    <TitreCF nom={this.state.nom2} />
                </div>
            </div>
        );
        
    }
}

export default App;

