

### useEffect agit 2 fois, React.StrictMode en evironnement de dev

React.StrictMode qui ce trouve dans index.js à la racine du project, doit être mis en commentaire car, il fait agir useEffect 2 fois, ce qui peut faussé la compréhension.

En prod, React.StrictMode fait agir useEffect qu'une seule fois. donc on peut le dé-commenter pour l'environnement de prod.

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