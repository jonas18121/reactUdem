import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header';
import ListeContact from './components/contact/ListeContact';
import { Provider } from './context';
import AddContact from './components/contact/AddContact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import APropos from './components/page/APropos';
import Erreur from './components/page/Erreur';


class App extends Component {

    render() {

        return (

            <Provider>
                <Router>

                    <div className="App">
                        <Header />
                        
                        <div className='container'>

                            <Switch>
                                <Route exact path="/listeContact" component={ListeContact} />
                                <Route exact path="/" component={ListeContact} />
                                <Route exact path="/ajouteContact" component={AddContact} />
                                <Route exact path="/apropos" component={APropos} />
                                <Route component={Erreur}/>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </Provider>
        ); 
    }
}

export default App;

