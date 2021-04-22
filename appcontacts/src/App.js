import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ListeContact from './components/contact/ListeContact';
import AddContact from './components/contact/AddContact';

class App extends Component {

    render() {

        return (
            <div className="App">

                <Header />
                
                <div className='container'>
                    <AddContact />
                    <ListeContact />
                </div>
            </div>
        );
        
    }
}

export default App;

