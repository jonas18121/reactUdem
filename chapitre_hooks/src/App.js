import React, { useRef } from 'react';
import './App.css';
// import Navbar from './Components/Navbar';
// import Compteur from './Components/Compteur';
import Onglet from './Components/onglet/Onglet'


function App() {

    let cursorRef = useRef();

    const mousePos = e => {
        console.log(cursorRef.current);

        cursorRef.current.setAttribute('style', `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`);
    }

    return (
        <div className="App" onMouseMove={mousePos}>
            <div ref={cursorRef} className="custom-cursor"></div>
            <Onglet />
            <button onClick=".expand" className="expand">click</button>
        </div>
    );
}

export default App;
