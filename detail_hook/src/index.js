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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
