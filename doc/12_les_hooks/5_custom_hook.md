# Faire un "Custom Hook"

On va construire notre propre hook,

Construire nos propre hooks, nous permet d'extraire la logique d'un composant sous forme de fonction réutilisables.

Si `on réuitilise une fonction dans plusieurs composant diférents`, c'est mieux de créer une un `hook personnalisé` pour mettre la fonction en question dedans, afin d'avoir à juste appelé ce `hook personalisé` pour l'utilisé dans les composants qui en on besion. Sa évitera de réécrire cette fonction dans chaque composants

Les composants et les Hooks sont des fonctions, ça fonctionne donc aussi pour eux. 

`Un Hook personnalisé est une fonction JavaScript dont le nom commence par ”use”` et qui peut appeler d’autres Hooks.

Contrairement à un composant React, `un Hook personnalisé n’a pas besoin d’avoir une signature particulière`. 

Nous pouvons décider s’il a besoin d’accepter des arguments et ce qu’il doit éventuellement renvoyer. 

En d’autres termes, c’est une simple fonction. 

Son nom doit toujours commencer par use pour qu’au premier coup d’œil qu'on sache que `les règles des Hooks lui sont applicables.`


## Notre code

Pour creer notre propre hook, qui va nous permettre d'avoir des imgages de chat aléatoire, on crée un ficier nommé `useCatImg.js` 

Dans `useCatImg.js`

- On a pris la logique qui était dans `Contenu.js` pour avoir des imgages de chat aléatoire et on l'a mis dans `useCatImg.js` 

- `useCatImg.js` commence par `use` pour que la règle des hooks s'applique a lui aussi

- `useCatImg()` va `return` un URL d'image de chat aléatoire

Dans `useCatImg.js`

    import React, { useState, useEffect } from 'react'

    export default function useCatImg() {

        const [dataImg, setDataImg] = useState();

        useEffect(() => {

            const fetchData = async () => {
                const reponse = await fetch('https://api.thecatapi.com/v1/images/search');

                const data = await reponse.json();

                setDataImg(data[0].url);
            }
            fetchData();
        }, []);


        return dataImg;
    }


Dans `Contenu.js` avant

- Il y a le hook useEffect que l'on va prendre pour le mettre de notre hook personalisé

Dans `Contenu.js` avant

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

                // console.log(data);
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


Dans `Contenu.js` après

- On importe notre hook personalisé

- On l'appel dans une constante `catUrl`, 

- `useCatImg()` retourne l'URL d' image de chat

- On met la balise dans une balise img `<img src={catUrl} />`

Dans `Contenu.js` après

    import React, { useState }  from 'react'
    import useCatImg from './useCatImg';

    export default function Contenu() {

        const [monState, setMonState] = useState(0);

        const ajouteState = () => {
            setMonState(monState + 1 );
        }

        const retireState = () => {
            if(monState > 0 ) return setMonState(monState - 1 );
        }

        const catUrl = useCatImg();    

        return (
            <div>
                <div>
                    <p>{monState}</p>

                    <button onClick={retireState}>Click pour retirer - 1</button>
                    <button onClick={ajouteState}>Click pour ajouter + 1</button>
                </div>

                <div>
                    <img src={catUrl} />
                </div>
            </div>
        )
    }


