import React, { useContext } from 'react';
import './Contenu.css';
import { ThemeContext } from '../../Context/ThemeContext'

export default function Contenu() {

    const { theme } = useContext(ThemeContext);

    return (
        <div>
            <h1>blabla blabla blabla</h1>
            {theme}
        </div>
    )
}
