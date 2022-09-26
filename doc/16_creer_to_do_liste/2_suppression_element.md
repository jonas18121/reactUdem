# ID et suppression

On install uuid

```bash
yarn add uuid
```

### Dans Form.js

- On import uuid
- On ajoute uuidv4() en id des objects
- On utilise item.id dans les props key (pour react) et id (pour nous)
- deleteElement va passer dans la props delFunc
- On utilise filter pour retourner tous les éléments qui ont un id différent de celui que l'on a selectionné pour le supprimer

```js
import {useState} from 'react';
import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chat", id: uuidv4()},
        {txt: "Promener le chien", id: uuidv4()},
        {txt: "Promener le boeuf", id: uuidv4()},
    ]);

    const deleteElement = id => {
        // Ici on utilise filter pour retourner tous les éléments qui ont un id différent
        // de celui que l'on a selectionné pour le supprimer
        const filteredState = dataArr.filter(item => {
            return item.id !== id;
        });

        // setDataArr pour mettre le state à jour
        setDataArr(filteredState);
    }

    return (
        <div className="m-auto px4 col-12 col-sm-10 col-lg_6">
            <form className="mb-3">
                <label htmlFor="todo" className="form-label mt-3">Chose à faire</label>
                <input type="text" className="form-control" id='todo' />
                <button className="mt-2 btn btn-primary d-block">Envoyer</button>
            </form>

            <h2>liste des choses à faire</h2>
            <ul className="list-group">
                {
                    dataArr.map((item, index) => {

                        // On ne va pas utiliser index dans la key car il n'est pas très fiable
                        return (
                            <Item 
                                txt={item.txt}
                                key={item.id}
                                id={item.id}
                                delFunc={deleteElement}
                            />
                        );
                    })
                }
            </ul>
        </div>
    )
}
```

### Dans Item.js

- On utilise onClick pour reagir au click sur le bouton
- On utilise une fonction anonyme pour que la reaction ce fasse au click `{() => props.delFunc(props.id)}`
- Si l'utilisait comme ça : `onClick={props.delFunc(props.id)}`, la fonction s'executerait directement au chargement de la page et non au click
- delFunc reçois l'id et au click, il remote à la props `delFunc={deleteElement}` de  `Form.js ` pour appelé la methode `deleteElement()` qui va faire son taff avec l'id envoyé

```js
export default function Item(props){
    return (
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            <div className="p-3">{props.txt}</div>
            <button 
                className="btn btn-danger p-2 h-50"
                onClick={() => props.delFunc(props.id)}
            >
                Supprimer
            </button>
        </li>
    )
}
```