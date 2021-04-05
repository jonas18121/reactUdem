# Création de l'interface des contacts


on cree src\components\contact\Contact.js

Et dans `Contact.js`

    import React, { Component } from 'react'

    export default class Contact extends Component {
        render() {
            return (
                <div className='card card-body mb-3 text-center' >
                
                    <h4></h4>

                    <ul className="card card-body mb-3">
                        <li className='list-group-item'>
                            Email : 
                        </li>
                        <li className='list-group-item'>
                            Téléphone : 
                        </li>
                    </ul>
                </div>
            )
        }
    }


Dans `App.js`

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header'
    import Contact from './components/contact/Contact'

    class App extends Component {


        render() {

            return (
                <div className="App">
                    <Header />

                    <div className='container'>
                        <Contact />
                        <Contact />
                        <Contact />
                    </div>
                </div>
            );
            
        }
    }

    export default App;