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
