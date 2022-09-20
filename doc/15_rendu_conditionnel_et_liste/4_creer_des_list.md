# Créer des listes

### Dans App.js

```js
import { useState } from "react";

function App() {

    const [dataArr, setDataArr] = useState([
        {nom: "Juliette"},
        {nom: "John"},
        {nom: "Joris"},
    ]);

    // Utiliser index dans  map() pour afficher des tableaux avec des index différente, c'est bon pour des petites données.
    // Mais Si on a une grande bdd, il for utiliser autre choses comme uuid pour données des ids unique

    return (
        <div className="App">
            {dataArr.map((item, index) => {
                console.log(index);
                return <p key={index}>Nom : {item.nom}</p>
            })}
        </div>
    ); 
}

export default App;
```