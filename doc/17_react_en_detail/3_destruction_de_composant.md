# La destruction d'un composant

#### Le cycle de vie des composants
- Un composant va naitre, lorsque l'on veut l'afficher quelques part
- Le composant va se mettre à jour lorsque le state va ce mettre à jour
- Le composant va se détruire, lorsqu'on va le cacher avec un rendu conditionnel ou si on supprime le composant (changer de page)

#### Exemple
Dans `App.js`

- On import Timer et on le met dans un rendu conditionnel

```js
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

Dans `Timer.js`

- On a isolé le timer dans le fichier Timer.js

```js
import { useState, useEffect }  from 'react'

function Timer() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    alert('Le Composant Est Construit'); // Le Composant Est Construit lors de sa naissance
    
    // on récupère l'id de setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé grace a l'id contenu dans intervalId
      clearInterval(intervalId);

      alert('Le Composant Est Détruit'); // Le Composant Est Détruit lorsqu'il est cacher par le rendu conditionnel dans App.js
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