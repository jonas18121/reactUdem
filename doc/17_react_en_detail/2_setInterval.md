# Utiliser "setInterval" avec React

### useEffect agit 2 fois, React.StrictMode en evironnement de dev
Dans `index.js`
```js
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.StrictMode est a dé-commenter pour la prod, 
  // il est en commentaire car en environnement de dev il fait agir useEffect 2 fois, ce qui peut faussé la compréhension
  // En prod, React.StrictMode fait agir useEffect qu'une seule fois 
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
);
```

Dans `App.js`

- En utilisant une fonction callback dans setTimer `timer => timer + 1`, 

  `useState` va comprendre qu'il faut utilisé la constante `timer` avec les nouvelles données qui on été ajouter en argument de la fonction callback dans setTimer.

- Le `return` dans le useEffect va représenter une clean up fonction, pour faire du nettoyage lorsque le composant va ce détruit, comme ça on libère de la mémoire.

Et ça évitera que le project devienne lent. (On évite des problèmes de mémoire)

Pour clear un intervale en JS on utilise `clearInterval`

```js
import './App.css';
import { useState, useEffect }  from 'react'

function App() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    
    // on récupère l'id de ce setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé setInterval de la mémoire du project grace a l'id contenu dans intervalId
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}

export default App;

```