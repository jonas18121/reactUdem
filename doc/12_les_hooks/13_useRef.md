# Utiliser UseRef

Ici on va faire un curseur personnalisé, ça nous permettra d'utiliser le hook `useRef`

`useRef` renvoie un objet `ref` modifiable dont la propriété current est initialisée avec l’argument fourni (initialValue). 

L’objet renvoyé persistera pendant toute la durée de vie composant.


## Le code


### Dans `App.js`

- On importe `useRef` depuis `react`, pour faire des référence

- `let cursorRef = useRef();` Pour l'uitiliser pour notre curseur

- `<div ref={cursorRef} className="custom-cursor"></div>` on va suivre la sourie avec cette div

- On applique notre reference a notre `div` avec `ref={cursorRef}` 

- `onMouseMove={mousePos}` on va surveiller la position de la sourit avec `onMouseMove` qui va appeler la fonction `mousePos`

- `cursorRef.current` pour avoir accès a notre div cursor

- `setAttribute()` est une méthode natif de JavaScript

- cursorRef.current.setAttribute('style', `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`), on va réagir à la propriété style et changer le `top` et le `left` en fonction de la position de la sourie. 

- `- 20` c'est pour centrer la sourie bien au centre des 2 cercles, car dans dans `App.css` on mis une hauteur et une largeur de 40px dans `.custom-cursor`


Dans `App.js`

    import React, { useRef } from 'react';
    import './App.css';
    // import Navbar from './Components/Navbar';
    // import Compteur from './Components/Compteur';
    import Onglet from './Components/onglet/Onglet'


    function App() {

        let cursorRef = useRef();

        const mousePos = e => {
            console.log(cursorRef.current);

            cursorRef.current.setAttribute('style', `top: ${e.pageY - 20}px; left: ${e.pageX - 20}px;`)
        }

        return (
            <div className="App" onMouseMove={mousePos}>
                <div ref={cursorRef} className="custom-cursor"></div>
                <Onglet />
            </div>
        );
    }

    export default App;



### Dans `Onglet.js`

- Afin de pouvoir bien utiliser la position de notre curseur dans notre page. on va enlever ou commenté le css du flexBox dans le `body{}`, sinon ça va centrer notre curseur et ça ne sera pas bon

- et on va mettre `margin: 0 auto;` dans le `container{}` pour center le texte


Dans `Onglet.js`



    body {
        /* height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #f1f1f1; */
    }

    .contBtn {
        display: flex;
        justify-content: center;
    }

    .onglets {
        width: 250px;
        height: 50px;
        background: #f1f1f1;
        color: #333;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px solid #333;
    }

    .container {
        margin: 0 auto;
        width: 502px;
        height: 600px;
        text-align: justify;
        border: 1px solid #333;
        border-top: none;
    }

    .container p {
        padding: 40px;
        margin: 0;
    }

    .active {
        background: midnightblue;
        color: #fff;
    }


### Dans App.css

- Dans `*, ::before, ::after{}`  on enleve le margin et padding, puis `box-sizing: border-box;` pour prendre en compte les bordure et le remplissage pendant le calcule de la hauteur et la largeur des éléments. on doit mettre de base pour notre css

- Dans `body{}`, on lui enlève le curseur de base avec `cursor: none;`, puis on met une hauteur et une largeur

- Dans `.custom-cursor {}` on met une hauteur, largeur, bordure en cercle, avec position absolute, et `pointer-events: none;` va nous permettre de toujours pouvoir cliquer sur les éléments, sinon la div que l'on suit va nous empéché de cliquer sur un élément cliqueble comme un bouton par exemple? a cette etape il ya un cercle qui est visible


- `.custom-cursor::before{}` on va rajouter un pseudo élément a notre curseur afin de de mettre un petit cercle de couleur rouge dans l'autre cercle.
`position: absolute;` la technique pour centrer un élement position absolute est `top: 50%;` et `left: 50%;` et `transform: translate(-50%, -50%)`

- Dans `.expand{}` on va metttre un animation que l'on va appeler `Anim`

- ` @keyframes Anim` pour faire grossir `Anim` lorsqu'on click

Dans `App.css`

    *, ::before, ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }


    body {
        cursor: none;
        height: 100vh;
        width: 100%;
    }

    .custom-cursor {
        width: 40px;
        height: 40px;
        border: 1px solid #333;
        border-radius: 50%;
        position: absolute;
        pointer-events: none;
    }

    .custom-cursor::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 5px;
        height: 5px;
        background: crimson;
        border-radius: 50%;
    }

    .expand {
    animation: Anim 0.2s linear;
    }

    @keyframes Anim {
        0% {
            transform: scale(1);
        }
        50% {
        transform: scale(1.2);
        }
        100% {
        transform: scale(1);
        }
    }