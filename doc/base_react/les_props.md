# Les propriétés props

Dans `App.js`, on a `<div className="App">` qui est le parent de `<Titre nom='Hugo' /> <Titre nom='Jules' />` et ` <Titre nom='Eva' />`. 
A partir du parent on va pouvoir passer `des propriétés à ses enfants`. 
Ici les propriétés des enfants sont `nom='Hugo'` pour le 1er composant `<Titre>` . 
`nom='Jules'` pour le 2èmes composant `<Titre>`, `nom='Eva'` pour le 3èmes composant `<Titre>`.

On va aller dans `components/Titre.js` pour afficher la propriété avec `{this.props.nom}`.
Comme ça `à l'affichage chaque composant aura le titre <h1></h1> puis la propriété {this.props.nom}`

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
                <Titre nom='Hugo' />
                <Titre nom='Jules' />
                <Titre nom='Eva' />
                </div>
            );
            
        }
    }

    export default App;


Dans `components/Titre.js`

    class Titre extends Component {

        render(){
            return (

                <div>
                    <h1>Notre titre depuis un autre composant. </h1>
                    {this.props.nom}
                </div>
            )
        }
    }

    export default Titre;

On peut aussi écrire des éléments dans les composants


Dans `App.js`,  On va écrire `dans le composant Titre qui contient la propriété Jules <Titre nom='Jules' >` , 
un élément exemple le texte : `Je suis un élément de ce composant`



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
                    Je suis un élément de ce composant
                </Titre>
                <Titre nom='Eva' />
                </div>
            );
            
        }
    }

    export default App;


Dans `components/Titre.js` on affiche l'élément en écrivant `{this.props.children}`

    import React, { Component } from 'react';

    class Titre extends Component {

        render(){
            return (

                <div>
                    <h1>Notre titre depuis un autre composant. </h1>
                    {this.props.nom} <br />
                    {this.props.children}
                </div>
            )
        }
    }

    export default Titre;