# Les Évenements avec React

## Font Awesome

Pour utiliser Font Awesome, on va mettre son `CDN dans public\index.html`

Dans `public\index.html`

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
        name="description"
        content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

        <title>React App</title>

        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>

        <!-- toute notre application va être rendu ici, app single page -->
        <div id="root"></div>
    </body>
    </html>

## évènement 

Dans `Contact.js`

    import React, { Component } from 'react'

    export default class Contact extends Component {

        state = {
            show : true
        }

        montrerContact = () => {
            this.setState({
                show : !this.state.show
            });
        }

        render() {
            return (
                <div className='card card-body mb-3 text-center'>

                    <h4>
                        {this.props.nom}&nbsp; 
                        <i 
                            className="fas fa-sort-down" 
                            onClick={this.montrerContact} 
                            style={{ cursor: 'pointer' }}
                        >
                        </i>
                    </h4>

                    { 
                        this.state.show ? (

                            <ul className="card card-body mb-3">
                                <li className='list-group-item'>
                                    Email : {this.props.email}
                                </li>
                                <li className='list-group-item'>
                                    Téléphone : {this.props.tel}
                                </li>
                            </ul>
                            
                        ) : null
                    }
                    
                </div>
            )
        }
    }

### Explication :

`<i className="fas fa-sort-down" onClick={this.montrerContact} style={{ cursor: 'pointer' }}></i>`

- On va creer une balise `<i className="fas fa-sort-down"></i>` qui va recevoir notre icon de font awesome 

- Le code HTML `&nbsp;` sert a faire des espaces

- `onClick={this.montrerContact}`, va réagir au click, et va faire appel à la méthode `montrerContact`

- La méthode `montrerContact` écrit avec une fonction fléchée, va nous permettre de changer `l'objet state` grace à `this.setState()` lors d'un évènement. 

- Dans `this.setState(), show : !this.state.show` va retourner une valeur qui sera toujours différente de `show` qui est dans `state`. 

    - Si `show` est `true`, ça retournera `false`. 
    - Si `show` est `false`, ça retournera `true`

Pourquoi on utilise une fonction fléchée dans `montrerContact` ? 

- `montrerContact` va récupéré la référence du `this` qui est dans `onClick={this.montrerContact}`, afin de l'utiliser dans lui même.
Si c'était écrit en fontion classique, on aurait pas pu récupéré la référence du `this` qui est dans `onClick={this.montrerContact}` car une fontion classique va recréer une autre référence `this` dans lui même. 
Dans ce cas précis, une fontion classique va créer une erreur et l'évènement ne va pas fonctionner.


Ici on utilise une opération ternaire { this.state.show ? () : null }

    { 
        this.state.show ? (

            <ul className="card card-body mb-3">
                <li className='list-group-item'>
                    Email : {this.props.email}
                </li>
                <li className='list-group-item'>
                    Téléphone : {this.props.tel}
                </li>
            </ul>

        ) : null
    }