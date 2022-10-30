# Les "React fragments"

Dans reactJS, on est obliger d'entourer nos éléments html par un seul élément dans le `return ( code... );`

Exemple dans  `Timer.js` `<div className="Timer">` englobe le h1 du Timer.

Par contre si la div `<div className="Timer">` n'est pas très utile pour nous, on est entrain de charger le html pour rien, c'est à ce moment que React fragments intervient.

Avec React fragments, on simule un container équivalent à `<div className="Timer">`, sauf que React fragments ne sera pas afficher dans DOM du navigateur. 

Et on ne va pas alourdir le navigateur pour rien.

Dans `App.js`

- On import Timer 

```js
// App.js

import './App.css';
import { useState }  from 'react';
import Timer from './Timer';

function App() {

  const [toggle, setToggle] = useState(false);


  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      { toggle && <Timer /> } <!-- rendu conditionnel --> 
    </div>
  );
}

export default App;
```

### Composant Timer sans React fragments

Dans `Timer.js`

- On utilise `<div className="Timer">`, mais il sert a rien dans le rendu final du navigateur

```js
// Timer

import { useState, useEffect }  from 'react'

function Timer() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    alert('Le Composant Est Construit');
    
    // on récupère l'id de setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé grace a l'id contenu dans intervalId
      clearInterval(intervalId);

      alert('Le Composant Est Détruit');
    }
  }, []);

  return (
    <div className="Timer">
      <h1>{timer}</h1>
    </div>
  );
}

export default Timer;
```

#### Affichage dans le navigateur

```html
<div class="App">
    <button>Toggle</button>
    <div className="Timer">
      <h1>312</h1>
    </div>
</div>
```

### Composant Timer avec React fragments

Dans `Timer.js`

- On utilise `Fragment` à la place de `<div className="Timer">`, `Fragment` ne sera pas affiché dans le rendu final du navigateur

```js
// Timer

import { useState, useEffect, Fragment }  from 'react'

function Timer() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    alert('Le Composant Est Construit');
    
    // on récupère l'id de setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé grace a l'id contenu dans intervalId
      clearInterval(intervalId);

      alert('Le Composant Est Détruit');
    }
  }, []);

  return (
    <Fragment>
      <h1>{timer}</h1>
    </Fragment>
  );
}

export default Timer;
```

#### Affichage dans le navigateur

```html
<div class="App">
    <button>Toggle</button>
      <h1>312</h1>
</div>
```

### Composant Timer avec React fragments amélioré

Dans `Timer.js`

- On utilise  `<>` et `</>` qui est un `Fragment` amélioré, il ne sera pas affiché dans le rendu final du navigateur

```js
// Timer

import { useState, useEffect }  from 'react'

function Timer() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    alert('Le Composant Est Construit');
    
    // on récupère l'id de setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé grace a l'id contenu dans intervalId
      clearInterval(intervalId);

      alert('Le Composant Est Détruit');
    }
  }, []);

  return (
    <>
      <h1>{timer}</h1>
    </>
  );
}

export default Timer;
```

#### Affichage dans le navigateur

```html
<div class="App">
    <button>Toggle</button>
      <h1>312</h1>
</div>
```