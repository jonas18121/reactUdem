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

