# Creer un light mode / Dark mode

ici, on va creer un light mode et un dack mode


### Dans ThemeContext.js

- `const [theme, setTheme] = useState(true);` On va mettre comme valeur par défaut dans notre useState la valeur true, pour nous cette valeur permettra d'afficher le `light mode` par défaut

- On va aller creer les boutons pour activer soit le `light mode` soit le `dark mode`, on va dans `BtnToggle.js`

- On va créer la fonction `toggleTheme()` qui va nous permettre de changer la valeur du booléan dans la constante `theme`

- `<ThemeContext.Provider value={{theme, toggleTheme}}>` On passe `toggleTheme` en props pour que les enfants de `ThemeContext` y acceder

Dans `ThemeContext.js`


    import React, { createContext, useState } from 'react';

    export const ThemeContext = createContext();

    const ThemeContextProvider = (props) => {

        const [theme, setTheme] = useState(true);

        const toggleTheme = () => {
            setTheme(!theme);
        }

        return (

            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        )
    }

    export default ThemeContextProvider;


### Dans BtnToggle.js

- On importe `React` et `useContext` depuis `react`

- On importe le css

- On importe `ThemeContext` depuis `'../../Context/ThemeContext'`

- `const { toggleTheme, theme } = useContext(ThemeContext);` , on va récupéré depuis le fichier `ThemeContext`, 2 constantes :  `theme`, qui contient un booléan pour activer un mode et `toggleTheme` qui est une fonction qui va nous permettre de changer la valeur du booléan dans la constante `theme`

- `onClick={toggleTheme}` au click sur le bouton, on va appeler la fonction `toggleTheme`

- `className={theme ? "btn-toggle goDark" : "btn-toggle goLight"}`, Dans className, 

    - on va faire une condition ternaire pour que la div est comme classe `btn-toggle` et `goDark`, si `theme` est `true` pour affiché le bouton en noir 

    - Et comme classe `btn-toggle` et `goLight`, si `theme` est `false` pour affiché le bouton en blanc 

- `{theme ? 'Dark' : 'Light'}` Dans le div, on va faire une condition ternaire pour afficher le `Dark` si `theme` est `true` ou afficher le `Light` si `theme` est `false`

Dans `BtnToggle.js`

    import React, { useContext } from 'react';
    import './BtnToggle.css';
    import { ThemeContext } from '../../Context/ThemeContext';

    export default function BtnToggle() {

        const { toggleTheme, theme } = useContext(ThemeContext);

        return (

            <div 
                onClick={toggleTheme}
                className={theme ? "btn-toggle goDark" : "btn-toggle goLight"}
            >
                {theme ? 'Dark' : 'Light'}
                
            </div>
        )
    }


### Dans BtnToggle.css

- On fait notre css

- `transition: all .5s ease-in-out;` pour qu'il est un effet de transition, lorsque le bouton va changer de couleur


Dans `BtnToggle.css`


    .btn-toggle {
        position: fixed;
        top: 20px;
        right: 20px;
        height: 50px;
        width: 50px;
        background: #333;
        border: 1px solid #333;
        color: #f1f1f1;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: all .5s ease-in-out;
    }

    .btn-toggle.goDark {
        background: #333;
        color: #f1f1f1;
    }

    .btn-toggle.goLight {
        background: #f1f1f1;
        color: #333;
    }


### Dans App.js

- On importe `BtnToggle` depuis `'./Composants/BtnToggle/BtnToggle'` et on le met en tant qu'enfant de `<ThemeContextProvider>`

Dans `App.js`

    import React from 'react';
    import Contenu from './Composants/Contenu/Contenu';
    import ThemeContextProvider from './Context/ThemeContext';
    import BtnToggle from './Composants/BtnToggle/BtnToggle';



    function App() {
    return (
        <div className="App">

        <ThemeContextProvider>
            <BtnToggle />
            <Contenu />
        </ThemeContextProvider>
        </div>
    );
    }

    export default App;



### Dans Contenu.js

- `className={theme ? "contenu light" : "contenu dark" }`, dans la div, on fait une condition ternaire dans className
    
    - Pour afficher `contenu` et `light`, si `theme` est `true`

    - Ou pour afficher `contenu` et `dark`, si `theme` est `false`

Dans `Contenu.js`


    import React, { useContext } from 'react';
    import './Contenu.css';
    import { ThemeContext } from '../../Context/ThemeContext'

    export default function Contenu() {

        const { theme } = useContext(ThemeContext);

        return (
            <div className={theme ? "contenu light" : "contenu dark" }>
                
                <h1>blabla blabla blabla</h1>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                    ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        )
    }


### Dans Contenu.css

- On fait nous css

- `vw` et `vh` site : https://riptutorial.com/css/example/17657/vh-and-vw

    - `vh`, qui signifie `viewport height` est relatif à 1% de la hauteur de la fenêtre
    - `vw`, qui signifie `viewport width` est relatif à 1% de la largeur de la fenêtre

    exemple: 

    div { 
        width: 20vw; 
        height: 20vh;
    }

    description : `la taille du div occupe 20% de la largeur et de la hauteur de la fenêtre`

Dans `Contenu.css`

    h1 {
        text-align: center;
        font-size: 35px;
    }

    .contenu {
        font-size: 20px;
        text-align: justify;
        padding: 20px 4vw;
        height: 100vh;
        color: #333;
        background: #f1f1f1;
        transition: all 0.5s ease-in-out;
    }

    .contenu.dark {
        color: #f1f1f1;
        background: #333;
    }

    .contenu.light {
        color: #333;
        background: #f1f1f1;
    }