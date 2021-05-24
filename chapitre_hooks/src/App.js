import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    
    const [ position, setPosition ] = useState([0, 0]);

    const logMousePosition = e => {
        console.log(e.clientX, e.clientY);

        let arrayPosition = [];
        arrayPosition[0] = e.clientX;
        arrayPosition[1] = e.clientY;

        setPosition(arrayPosition);
    }

    useEffect(() => {
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            window.removeEventListener('mousemove', logMousePosition);
        }
    }, []);

    return (
        <div className="App">
            hello word
        </div>
    );
}

export default App;
