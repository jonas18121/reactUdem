import React, { useState } from 'react';
import './App.css';
import Modale from './Components/Modale';

function App() {

    const [toggleModale, setToggleModale] = useState(false);

    const closeModale = () => setToggleModale(false);

    const openModale = () => setToggleModale(true);

    const stopPropa = (event) => event.stopPropagation();  

    
    let myModale = '';

    if (toggleModale) {
        myModale = <Modale closeFunc={closeModale } stopPropa={stopPropa} />;    
    }
    else {
        myModale = null;
    }
    

    return (
        <div className="App">

            <button onClick={openModale} >Ouvrir la modale</button>

            {myModale}
        </div>
    );
}

export default App;
