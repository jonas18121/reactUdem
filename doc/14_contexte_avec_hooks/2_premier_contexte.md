# Premier contexte.

Ici on va tester notre api contexte, on va juste passer des données à travers notre application

### Dans Contenu.js

- On importe `React` depuis `react`

- On importe `useContext` depuis `react` qui Accepte un objet contexte et renvoie la valeur actuelle du contexte

- On importe le css

- On importe le composant `ThemeContext` depuis notre fichier `ThemeContext.js` qu'on va créer, c' est depuis ce fichier qu'on va creer notre contexte, 

- le composant `ThemeContext` est exporter depuis notre fichier `ThemeContext.js`

- `const { theme } = useContext(ThemeContext);` On utilise `useContext` pour pouvroir prendre la constante `theme` qui est dans `ThemeContext`

- `{theme}` c'est la constante qui vient depuis `ThemeContext`, et on peut l'utiliser ici car la fonction `Contenu()` est entourer par `<ThemeContextProvider>` dans `App.js`

Dans `Contenu.js`

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


### Dans Contenu.css

- On fait notre css

Dans `Contenu.css`


    h1 {
        text-align: center;
        font-size: 35px;
    }


### Dans App.js

- On importe `Contenu.js`

- On importe le composant `ThemeContextProvider` depuis notre fichier `ThemeContext.js` qu'on va créer, c' est depuis ce fichier qu'on va creer notre contexte

- On va entourer le composant `<Contenu />` avec le composant `<ThemeContextProvider>` afin que `<Contenu />` puisse acceder au contexte

Dans `App.js`

    import React from 'react';
    import Contenu from './Composants/Contenu/Contenu';
    import ThemeContextProvider from './Context/ThemeContext';



    function App() {
    return (
        <div className="App">

            <ThemeContextProvider>
                <Contenu />
            </ThemeContextProvider>
        </div>
    );
    }

    export default App;


### Dans ThemeContext.js

- On importe `React`, `createContext`, `useState ` depuis `react`

- `createContext` va nous servir a creer un contexte : `export const ThemeContext = createContext();`

- `const [theme, setTheme] = useState('Hello World');`

- `<ThemeContext.Provider value={{theme}}>`, il va permettre a tous ses enfants d'accerder à la constante theme 

- Les enfants ` {props.children}`, on ne les connais pas encore 

Dans `ThemeContext.js`



    import React, { createContext, useState } from 'react';

    export const ThemeContext = createContext();

    const ThemeContextProvider = (props) => {

        const [theme, setTheme] = useState('Hello World');

        return (

            <ThemeContext.Provider value={{theme}}>
                {props.children}
            </ThemeContext.Provider>
        )
    }

    export default ThemeContextProvider;
