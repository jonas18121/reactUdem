# Afficher la liste de la todolist

### Dans App.js

- on import bootstrap
- on import le composant Form

```js
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3">Todo-List</h1>
      <Form />
    </div>
  );
}

export default App;
```

### Dans le composant Form

- On importe composant Item
- On a notre useState qui contient des données en dur (pour l'instant)
- On utilise .map pour parcourir les données dans la variable dataArr
- Puis, on passe les props txt et key au composant Item

```js
import {useState} from 'react';
import Item from './Item';

export default function Form(){

    const [dataArr, setDataArr] = useState([
        {txt: "Promener le chat"},
        {txt: "Promener le chien"},
        {txt: "Promener le boeuf"},
    ]);

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
                        return (
                            <Item 
                                txt={item.txt}
                                key={index}
                            />
                        );
                    })
                }
            </ul>
        </div>
    )
}
```

### Dans le composant Item

- Le composant Item reçois les props venant du composant Form
- Puis il peut les affichées

```js
export default function Item(props){

    return (
        <li className="border d-flex justify-content-between align-items-center p-2 m-2">
            <div className="p-3">{props.txt}</div>
            <button className="btn btn-danger p-2 h-50">Supprimer</button>
        </li>
    )
}
```