# Créer une fenêtre modale

On va créer une fenêtre modale

### premier façon de stopper la propagation

Dans `App.js` 

- On crée notre `state` avec une valeur intiale à `false` pour ne pas qu'il s'affiche sans qu'on clique sur le bouton `Ouvrir la modale`

- On importe notre fenêtre modale, `import Modale from './Components/Modale';`

- `{toggleModale ? <Modale closeFunc={closeModale } /> : null }`, on fait une condition ternaire pour affiché le composant `Modale.js` seulement si le state `toggleModale` est sur `true`

- La fonction `openModale()` sert a faire passé le state `toggleModale` sur `true` pour affiché la modale

- La fonction `closeModale()` sert a faire passé le state `toggleModale` sur `flase` pour caché la modale

- On va passé la fonction `closeModale()` en props dans le composant `Modale`

- `if(event.target.className === 'contenu') return;` dans `closeModale(event)` sert a stopper la propagation sur les composants enfant, car on ne veut pas que la modale ce cache si on clique sur la partie blanche (la div qui a la classe 'contenu')

Dans `App.js` 

    import React, { useState } from 'react';
    import './App.css';
    import Modale from './Components/Modale';

    function App() {

        const [toggleModale, setToggleModale] = useState(false);

        const closeModale = (event) => {
            console.log(event.target.className);

            if(event.target.className === 'contenu') return;
            
            setToggleModale(false);
        }

        const openModale = () => setToggleModale(true);
        

        return (
            <div className="App">

                <button onClick={openModale} >Ouvrir la modale</button>

                {toggleModale ? <Modale closeFunc={closeModale } /> : null }
            </div>
        );
    }

    export default App;


Dans `Modale.js`

- On récupère les props depuis `App.js`

- On fait une div avec une classe "overlay" qui va être la partie noir transparent de la modale

- On fait une div avec une classe "contenu" qui va être la partie blanc de la modale

- On fait un bouton avec une classe "btnClose" pour fermer le modale

Dans `Modale.js`

    import React from 'react'
    import './Modale.css'

    export default function Modale(props) {
        return (
            <div className="overlay" onClick={props.closeFunc} >
                <div className="contenu">

                    Hello Modale
                    <button className="btnClose" onClick={props.closeFunc} >Fermer</button>
                </div>
            </div>
        )
    }


Dans `Modale.css`

- Desing `.overlay` le font sombre

- Desing `.contenu` la partie blache

- Desing `.btnClose` du bouton

Dans `Modale.css`

    .overlay {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.75);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .contenu {
        width: 400px;
        height: 200px;
        background: #f1f1f1;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
    }

    .btnClose {
        position: absolute;
        top: 10px;
        right: 10px;
    }


### Deuxièmes façon de stopper la propagation

Dans `App.js` 

- `const stopPropa = (event) => event.stopPropagation(); ` pour stopper la propagation

Dans `App.js` 

    import React, { useState } from 'react';
    import './App.css';
    import Modale from './Components/Modale';

    function App() {

        const [toggleModale, setToggleModale] = useState(false);

        const closeModale = () => setToggleModale(false);

        const openModale = () => setToggleModale(true);

        const stopPropa = (event) => event.stopPropagation();  
        

        return (
            <div className="App">

                <button onClick={openModale} >Ouvrir la modale</button>

                {toggleModale ? <Modale closeFunc={closeModale } stopPropa={stopPropa} /> : null }
            </div>
        );
    }

    export default App;


Dans `Modale.js`

- On met un event onClick dans la div qui a la classe 'contenu' `onClick={props.stopPropa}`, pour stopper la propagation

Dans `Modale.js`

    import React from 'react'
    import './Modale.css'

    export default function Modale(props) {
        return (
            <div className="overlay" onClick={props.closeFunc} >
                <div className="contenu" onClick={props.stopPropa}>

                    Hello Modale
                    <button className="btnClose" onClick={props.closeFunc} >Fermer</button>
                </div>
            </div>
        )
    }


### les if(){} else {}

Dans `App.js` 

- Les `ternaires` sont accepter dans le `return ()` mais pas les `if(){} else {}`

- On peut créer les `if(){} else {}` en dehors du `return ()` et faire passé une variable dedans exemple `myModale`

.

    let myModale = '';

    if (toggleModale) {
        myModale = <Modale closeFunc={closeModale } stopPropa={stopPropa} />;    
    }
    else {
        myModale = null;
    }


    return (
        <div className="App">

            <button onClick={openModale} >Ouvrir la modale</button>

            {myModale}
        </div>
    );

Dans `App.js` 

    import React, { useState } from 'react';
    import './App.css';
    import Modale from './Components/Modale';

    function App() {

        const [toggleModale, setToggleModale] = useState(false);

        const closeModale = () => setToggleModale(false);

        const openModale = () => setToggleModale(true);

        const stopPropa = (event) => event.stopPropagation();  

        
        let myModale = '';

        if (toggleModale) {
            myModale = <Modale closeFunc={closeModale } stopPropa={stopPropa} />;    
        }
        else {
            myModale = null;
        }
        

        return (
            <div className="App">

                <button onClick={openModale} >Ouvrir la modale</button>

                {myModale}
            </div>
        );
    }

    export default App;