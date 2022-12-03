# Faire une "Cleanup function"

Les evénnements inline comme `onclick={variable}`, qui sont déclaré en ligne dans le `return()` exemple `<button onclick={variable} >click</button>`. 
Ils sont bien interprété par ReactJs et ne sont pas recréer à chaque fois.

ReactJs ne va pas recréer un evénnements `onclick={variable}` sur le boutton.

Mais si, on creer des evénnements en dehors du `return()` par exemple un `window.addEventListener`

`window.addEventListener` on ne peut pas le mettre dans un `return()`, donc on va devoir créer aussi une fontion `Cleanup` qui va néttoyer le `window.addEventListener` pour éviter les problèmes de performances. Sinon `window.addEventListener` peut faire une boucle infini.


Dans `App.js`

- ici on va surveiller la position de la sourit dans notre page

- `const [ position, setPosition ] = useState([0, 0]);` le state qui va récupéré la position de la sourit  

- On va écouter la position de la sourit avec `window.addEventListener('mousemove', logMousePosition);`

- `logMousePosition` c'est la fonction qu'on appel dans `window.addEventListener` afin de récupéré la position de la sourit, puis pour mettre cette position dans le state `position`

- On va mettre `window.addEventListener('mousemove', logMousePosition);` dans un `useEffect(() => {}, [])` avec un tableau vide en deuxième argument afin d'appeler `window.addEventListener ` qu'une fois au début, pour eviter les bocle infini

- Lorsqu'il y a `return` , dans `useEffect(() => {}, [])`, `useEffect` va comprendre que ce sera une fonction de nettoyage qu'il va appeler au moment du `component unmount`, donc lorsque le composant va ce démonter

Dans `App.js`

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
