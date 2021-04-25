import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ListeContact from './components/contact/ListeContact';
import { Provider } from './context';
import AddContact from './components/contact/AddContact';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import APropos from './components/page/APropos';


class App extends Component {

    render() {

        return (

            <Provider>
                <Router>

                    <div className="App">
                        <Header />

                        <div className='container'>
                            <Route exact path="/listeContact" component={ListeContact} />
                            <Route exact path="/" component={ListeContact} />
                            <Route exact path="/ajouteContact" component={AddContact} />
                            <Route exact path="/apropos" component={APropos} />
                        </div>
                    </div>
                </Router>
            </Provider>
        ); 
    }
}

export default App;

