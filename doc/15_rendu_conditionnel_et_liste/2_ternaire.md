# L'opérateur ternaire

### Dans App.js

```js
import { useState } from "react";

function App() {

    const [toggle, setToggle] = useState(true);

    const changeToggle = () => {
        setToggle(!toggle)
    }

    return (
        <div className="App">

            {toggle ? <h1>If toggle is true</h1> : <h1>If toggle is false</h1>} {/*  Ternaire */}


            {toggle && <h1>Short circus operator, If toggle is true</h1>} {/*  Short circus operator */}

            <div>
                <button onClick={changeToggle} >Change Toggle</button>
            </div>
        </div>
    ); 
}

export default App;
```