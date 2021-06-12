import React, { useContext } from 'react';
import './BtnToggle.css';
import { ThemeContext } from '../../Context/ThemeContext';

export default function BtnToggle() {

    const { toggleTheme, theme } = useContext(ThemeContext);

    console.log(theme);

    return (

        <div 
            onClick={toggleTheme}
            className={theme ? "btn-toggle goDark" : "btn-toggle goLight"}
        >
            {theme ? 'Dark' : 'Light'}
            
        </div>
    )
}
