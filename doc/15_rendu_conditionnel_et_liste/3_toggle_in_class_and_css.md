# Faire un "toggle" de classes et de css

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

            <div className={!toggle ? "box animated" : "box"}></div> {/* Ternaire toggle in className */}

            <div className="box" style={{ backgroundColor: toggle ? "salmon" : "lightgreen"}}></div> {/* Ternaire toggle in style */}

            <div>
                <button onClick={changeToggle} >Change Toggle</button>
            </div>
        </div>
    ); 
}

export default App;
```

```css
*, ::before, ::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  height: 100%;
}

body {
  background: #222;
  color: #f1f1f1;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
}

img, video, table {
  width: 100%;
  max-width: 100%;
}

a {
  text-decoration: none;
}


.box {
  width: 200px;
  height: 200px;
  background: salmon;
  margin: 30px;
  transition: all ease-in-out 0.4s;
}

.animated {
  background: lightblue;
  transform: scale(1.3);
}

```