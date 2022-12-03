# Utiliser les inputs 

### Dans App.js

- On import `useState` de `react`

- `const [ inputData, setInputData ] = useState(10);` crée notre state

- On crée notre `input` de type text

- Dans `input`

    - On va utiliser `onInput` pour lier notre `input`

        - `onInput` renvoie une valeur a chaque caractère qu'on va ajouter dans l' `input`, comme `onChange`

        - Pour nous `onInput` va appeler la méthode `changeInput()` a chaque caractère qu'on va ajouter dans l' `input`

    -  `onInput={e => changeInput(e.target.value)}`, On va utiliser l'évènnement `e` pour reagir. 

        - `e.target.value`, l'évènnement (`e`) cible (`target`) la valeur (`value`) qui est dans l' `input` et renvoie la valeur à la méthode `changeInput()`

- Dans `changeInput(e)`

    - `changeInput(e)` va donner a `setInputData(e)` la valeur qui a  reçus depuis  `onInput`

    - `setInputData(e)` modifie le state

- Un autre moyen pour lier notre `input` c'est d'ajouter la propriété `value` dans l' `input`, lorsque c'est 2 lien sont dans le même `input` (`value` et `onInput` ), on appel ça `Two-Way Binding ` comme dans Angular

- `value= {inputData}`, `value` va recevoir la valeur qui vient du state et l'afficher dans l' `input`

Dans `App.js`

    import { useState } from "react";
    import Item from "./Components/Item/Item";

    function App() {

        const [ inputData, setInputData ] = useState(10);

        const changeInput = (e) => {
            setInputData(e)
        }
        
        console.log(inputData);
        return (
            <div className="App">
                
                <input
                    type="text"
                    value= {inputData}
                    onInput={e => changeInput(e.target.value)}
                />
                <Item />
            </div>
        );
    }

    export default App;