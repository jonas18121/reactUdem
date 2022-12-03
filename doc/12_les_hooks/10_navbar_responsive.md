# Créer une navbar responsive

Ici on va faire une navbar responsive

Dans `Navbar.js`

- On importe `Navbar.css`

- On crée notre bar de navigation avec la balise `nav` avec nos div dedans

- `const [ toggleMenu, setToggleMenu ] = useState(false);` on crée un state avec une valeur initiale a `false`, ce state nous permettra de controller si `toggleMenu` est sur `false`, on n'affiche pas le menu et si `toggleMenu` est sur `true`, on affiche le menu

- `onClick={toggleNavScreen}`, on a créer un event onClick, qui appel la fonction `toggleNavScreen` qui va modifier `toggleMenu` et lui donner une valeur différente de la valeur que `toggleMenu` avait , au moment ou on a déclenché cette evennement. exemple si `toggleMenu` avait comme valeur `false` lorsqu'on a déclenché l'event onClick, sa nouvelle valeur sera `true` maintenant, et inversement

- `const [ largeur, setLargeur ] = useState(window.innerWidth)` on crée un state avec une valeur initiale qui sera la largeur de l'écran de notre mobile a l'instant T
    - `window.innerWidth` renvoie largeur de l'écran (fenètre) de notre mobile a l'instant T

- Dans le `useEffect` 

    - l'event `window.addEventListener('resize', changeWidth);` va appelé la fonction `changeWidth` a chaque fois que la taille de l'écran va changer

    - `changeWidth` permet a `setLargeur(window.innerWidth);` de mettre la nouvelle taille de l'écran dans le state `largeur` 

    - dans `changeWidth` : `if (window.innerWidth > 500) {setToggleMenu(false); }` va mettre le state `toggleMenu` sur false, afin qu'elle soit fermer lorsq'on sera a plus de 500 pixel

    -  `return () => { window.removeEventListener('resize', changeWidth); }` c'est notre cleanup fonction , qui ne sera pas utile vu qu'on aura toujours besoin de notre navbar , elle ne va jamais disparaitre

- `{(largeur > 500 || toggleMenu) && ( blabla )}` c'est un `short circuit operator` (https://dev.to/2spacemilk/short-circuit-evaluation-with-react-3dn4) , c'est pareil qu'une opération ternaire : `{(largeur > 500 || toggleMenu) ? blabla : blabla }` et un `if()` 

    - Le `&&` remplace ` ? ` et ` : `

    - `(largeur > 500 || toggleMenu) && ( blabla )`, si la largeur (le state `largeur`) du navigateur est plus grand que 500 pixel ou que le state `toggleMenu` a comme valeur `true`, alors on affiche la navbar, sinon on ne affiche rien

Dans `Navbar.js`

    import React, { useState, useEffect }  from 'react';
    import './Navbar.css';

    export default function Navbar() {

        const [ largeur, setLargeur ] = useState(window.innerWidth)

        const [ toggleMenu, setToggleMenu ] = useState(false);

        const toggleNavScreen = () => {
            setToggleMenu(!toggleMenu);
        }

        useEffect(() => {

            const changeWidth = () => {
                setLargeur(window.innerWidth);

                if (window.innerWidth > 500) {
                    setToggleMenu(false);
                }
            }

            window.addEventListener('resize', changeWidth);

            return () => {
                window.removeEventListener('resize', changeWidth);
            }
        },[]);

        return (
            <div>
                <nav>
                    {(largeur > 500 || toggleMenu) && (

                        <div className="liste" >
                            <div className="items" >Accueil</div>
                            <div className="items" >Services</div>
                            <div className="items" >Contact</div>
                        </div>
                    )}
                </nav>

                <div onClick={toggleNavScreen} className="btn">BTN</div>
            </div>
        )
    }


Dans `Navbar.css`

- `line-height: 50px;` doit avoir la même valeur que `height: 50px;`, comme ça, le text aura 25px en haut et 25px en bas

- `.items:nth-child(1)` on agit sur le premier enfant

- `.liste` est en `position relative`, `.btn` est en `position absolute`, ce qui nous permetrra de faire bouger `.btn` par rapport à `.liste`

Dans `Navbar.css`

    body {
        margin: 0;
    }

    nav {
        height: 50px;
        background: midnightblue;
    }

    .liste {
        height:  100%;
        background: midnightblue;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .items {
        margin-right: 10px;
        color: #f1f1f1;
        cursor: pointer;
    }
    .btn {
        display: none;
    }

    @media screen and (max-width: 500px) {

        .liste {
            flex-direction: column;
            height: 200px;
        }

        .items:nth-child(1) {
            border-top: 1px solid #fff;
            margin-top: 50px;
        }
        .items {
            height: 50px;
            width: 100%;
            border-bottom: 1px solid #fff;
            line-height: 50px;
        }
        .btn {
            display: block;
            position: absolute;
            right: 10px;
            top: 15px;
            color: #f1f1f1;
            cursor: pointer;
        }
    }


Dans `App.js`

- On importe `Navbar.js` et on l'utilise

Dans `App.js`


    import React from 'react';
    import './App.css';
    import Navbar from './Components/Navbar'


    function App() {

        return (
            <div className="App">
                <Navbar />
            </div>
        );
    }

    export default App;