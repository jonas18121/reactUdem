# Appel d'une API

On va appeler l'API du site thecatapi.com : https://docs.thecatapi.com/


Dans `Contenu.js`

- On cree une fonction `fetchData` dans le hook `useEffect()`

- On rend la fonction `fetchData` asyncrone avec `async`

- On va chercher des données depuis l'api avec la fonction `fetch` et attendre une reponse de l'api avec `await`

    - `await fetch('https://api.thecatapi.com/v1/images/search');`

- Lorsqu'on a récupérer les données depuis l'api, on les mets au format Json

    - `const data = await reponse.json();`


- On met le résultat de la constante `data` dans le state

    - `setDataImg(data[0].url);`

- On appel `fetchData();` dans `useEffect()`

- On affiche le state dans le render `<div> <img src={dataImg} /></div>`

Dans `Contenu.js`

```js
    import React, { useState, useEffect }  from 'react'

    export default function Contenu() {

        const [monState, setMonState] = useState(0);

        const [dataImg, setDataImg] = useState();


        const ajouteState = () => {
            setMonState(monState + 1 );
        }

        const retireState = () => {
            if(monState > 0 ) return setMonState(monState - 1 );
        }

        useEffect(() => {

            const fetchData = async () => {
                const reponse = await fetch('https://api.thecatapi.com/v1/images/search');
                const data = await reponse.json();
                setDataImg(data[0].url);
            }

            fetchData();

        }, []);

        return (
            <div>
                <div>
                    <p>{monState}</p>

                    <button onClick={retireState}>Click pour retirer - 1</button>
                    <button onClick={ajouteState}>Click pour ajouter + 1</button>
                </div>

                <div>
                    <img src={dataImg} />
                </div>
            </div>
        )
    }
```
### Ci-dessous on fait un appel à une API pareil que ci-dessus mais en utilisant then()
```js
import './App.css';
import { useState, useEffect }  from 'react';

function Contenu() {

    const [dataImg, setDataImg] = useState();
    const [dataId, setDataId] = useState();

    useEffect(() => {
        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            return response.json();
        })
        .then(data => {
            setDataImg(data[0].url);
            setDataId(data[0].id);
        });
    }, []);

    return (
        <div className="App">
            {/* 
                Si dataImd exite, on affiche la balise img,
                si non, on affiche rien 
            */}
            {dataImg && <img src={dataImg} alt={dataId} />}
        </div>
    );
}

export default App;
```