# Introduction aux composants et à JSX

Il y a 2 types de composant

- des composants de type classe
- des composants de type fonction

Dans le JSX :

- il faut toujours retourner un seul bloque.


    class App extends Component {

        render() {

            return (
                //1 seul bloque
            <div className="App">
                hello
            </div>
            );
        }
        }

    export default App;


    class App extends Component {

        render() {

            return (
                //1 seul bloque, tous les balises sont regrouper dans 1 seul <div>
            <div className="App">
                <h1>hello</h1>
                <div>
                    <p>paragraphe 1</p>
                </div>
            </div>
            );
        }
        }

    export default App;


- Il faut fermer toute les balises qui son seul exemple

En HTML :

    <br>
    <hr>
    <input>

Devien en JSX :

    <br />
    <hr />
    <input />


## Pourquoi on utilise le JSX ?    

### Le JSX est une notation Javascript

Admettons que l'on veut écrire un < h1> en JSX :
ça a pris qu'une ligne.

    import React, { Component } from 'react';

    class App extends Component {

        render() {

            return (
            <div className="App">
                <h1>Notre Composant</h1>
            </div>
            );
        }
        }

    export default App;


Maintenant, on va écrire ce même < h1> en Javascript native :

    import React, { Component } from 'react';

    class App extends Component {

        render() {

            return React.createElement(
                'div',
                {className: 'App'},
                React.createElement('h1', null, 'Notre Composant')
            )
            
        }
        }

    export default App;


## résultat

c'est plus long et compliquer d'écrire du code en Javascript native qu'en JSX
Il a fallut 4 lignes pour ecrire en Javascript native le < h1> , alors qu'en JSX ,il nous a fallut qu'une ligne.

## Les variables

On utilise les variable entre des accolades, on peut aussi faire des calcules entre les accolades

    import React, { Component } from 'react';

    class App extends Component {

        render() {

            const nom = 'Juliette';

            return (
                <div className="App">
                <h1>Notre Composant</h1>
                {nom} <br />
                { 1 + 1}
                </div>
            );
            
        }
        }

    export default App;

## Les functions 

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