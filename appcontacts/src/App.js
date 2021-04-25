import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ListeContact from './components/contact/ListeContact';
import { Provider } from './context';
import AddContact from './components/contact/AddContact';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {

    render() {

        return (

            <Provider>
                <Router>

                    <div className="App">
                        <Header />

                        <div className='container'>
                            <AddContact />
                            <Route exact path="/listeContact" component={ListeContact} />
                        </div>
                    </div>
                </Router>
            </Provider>
        ); 
    }
}

export default App;

