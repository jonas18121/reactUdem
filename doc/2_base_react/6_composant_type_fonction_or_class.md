# Les composants de type fonction

Les composants de type fonction ne pourront pas utilisé l'objet `state`,
mais on va pouvoir les passer des props 
et les composants de type fonction auront pour but de rendre du contenu

## Composant de type classe

Dans `components/TitreComponentClass.js`.

    import React, { Component } from 'react';

    class Titre extends Component {

        render(){
            return (

                <div>
                    <h1>Notre titre depuis un composant de type classe. </h1>
                    {this.props.nom} <br />
                    {this.props.children}
                </div>
            )
        }
    }

    export default Titre;

## Composant de type function

Dans `components/TitreComponentFunction.js`.

    import React from 'react';

    function TitreCF(props) {
        return (

            <div>
                <h1>Notre titre depuis un composant de type function. </h1>
                {props.nom} <br />
                {props.children}
            </div>
        )
    }

    export default TitreCF;


Dans `App.js`

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

