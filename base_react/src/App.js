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
