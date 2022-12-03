# Le Hook useRef

1) Le Hook useRef permet de conserver des valeurs entre les rendus.

2) Il peut être utilisé pour stocker une valeur modifiable qui ne provoque pas de nouveau rendu lors de la mise à jour. Ne provoque pas de re-renders.

3) Il peut être utilisé pour accéder directement à un élément DOM et de sélectionner un élément comme un querySelector ou un getElementById.

## Exemple 1 : Affiché une video avec useRef()

- Ici on va utiliser `useRef` afin de pouvoir accéder au méthode spéciale de la vidéo, exemple mettre en pause ou play ect...
- On importe une video, et on voudra que la vidéo s'auto play dès qu'on arrive sur la page.
- On crée une balise `<video>` avec ses attributs. Remarque sans `muted`, `autoPlay` ne vas pas fonctionné.  
- Si on veut sélectionné la vidéo, on va utiliser le hook `useRef` et ajouter la constante `ref` dans l'attribut `ref=` de la balise `<video>`.
- On va utiliser le hook `useEffect` afin de pouvoir recupérer le `ref.current` avec le html de la video.
- On utilise `setTimeout()` pour mettre la vidéo en pause au bout de 4 secondes lorsqu'il s'auto play.

```js
// App.js

import './App.css';
import { useState, useEffect, useRef }  from 'react';
import Video_plage from './assets/video/plage.mp4';

function App() {

  const [toggle, setToggle] = useState(false);

  const ref = useRef(null);

  
  useEffect(() => {
    console.log(ref);
    console.log(ref.current);

    setTimeout(() => {
      ref.current.pause();
    }, 5000);

  }, []);

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">

      <video 
        ref={ref}
        width="100%" 
        height="500"
        autoPlay
        controls
        muted
      >
        <source src={Video_plage} type='video/mp4' />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
```

## Exemple 2 : Curseur personnalisé avec useRef()

- Ici, on va vouloir accéder au mouvement de la souris et redessiner la souris 
- On fait le CSS
- On lie la div `<div className="cursor-custom">` au `cursorRef` via `ref={cursorRef}`, c'est cette div qui va remplacer le design de la souris
- `mousePos` permet d'avoir accès a `cursorRef.current` a chaque fois que la souris bouge via `onMouseMove`
- `cursorRef.current.setAttribute` permet de definir un attribut pour la div `<div className="cursor-custom">`

```js
// App.js

import './App.css';
import { useState, useEffect, useRef }  from 'react';

function App() {

  const cursorRef = useRef(null);

  /**
   *  mousePos permet d'avoir accès a cursorRef.current a chaque fois que la souris bouge
   * via onMouseMove
   */
  const mousePos = e => {
    console.log(cursorRef.current);

    // Il faut mettre - 20 a e.pageY et e.pageY pour que la souris soit bien au milieu de la div re-construit
    cursorRef.current.setAttribute('style', `top:${e.pageY - 20}px; left:${e.pageX - 20}px;`);
  }

  return (
    <div onMouseMove={mousePos} className="App">
      <div ref={cursorRef} className="cursor-custom"></div>

      <h1>Lorem ipsum</h1>
    </div>
  );
}

export default App;
```

```css
/* App.css */

* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #61656d;
  height: 100vh; /* prendre la hauteur de la page */
  cursor: none; /* cacher l'affiche de base du cuseur */
}

.App {
  width: 100vw;
  height: 100vh;
}

h1 {
  text-align: center;
  font-size: 40px;
}

/* représente le cercle blanc de la new souris */
.cursor-custom {
  width: 40px;
  height: 40px;
  border: 1px solid rgb(233, 221, 221);
  border-radius: 50%;
  position: absolute;
  pointer-events: none; /* permet d'ignorer la div utiliser pour recréer la souris lorqu'on veut surligner un autre élément */
}

/* représente le point rouge de la new souris */
.cursor-custom::before {
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
```