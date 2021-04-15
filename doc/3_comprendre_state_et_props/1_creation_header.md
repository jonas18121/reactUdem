# Création du header

on cree src\components\header\Header.js

et dans `Header.js`

    import React from 'react'

    export default function Header() {
        return (
            <div>
                <nav className="navbar navbar-dark bg-primary mb-3 py-0">
                    <div className='container'>
                        <a href='/' className='navbar-brand'>AppContacts</a>

                        <ul className='navbar-nav'>
                            <li className='nav-item ml-auto'>
                                <a href='/' className='nav-link'>Acceuil</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }

Dans `App.js`

    import React, { Component } from 'react';
    import 'bootstrap/dist/css/bootstrap.min.css';
    import Header from './components/header/Header'

    class App extends Component {


        render() {

            return (
                <div className="App">
                    <Header />
                </div>
            );
        }
    }

    export default App;