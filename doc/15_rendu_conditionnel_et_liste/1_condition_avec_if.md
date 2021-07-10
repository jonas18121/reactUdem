# Créer un rendu conditionnel avec "if"


### Dans App.js

    import { useState } from "react";
    import Item from "./Components/Item/Item";

    function App() {

        const [ inputData, setInputData ] = useState(10);

        const [toggle, setToggle] = useState(true);



        const changeInput = (e) => {
            setInputData(e)
        }



        const changeToggle = () => {
            setToggle(!toggle)
        }
        
        console.log(inputData);

        let toggleContenu;



        if (toggle) {
            toggleContenu = <h1>Item chat</h1>
        }
        else {
            toggleContenu = <h1>Input</h1>
        }




        if (toggle) {
            
            return (
                <div className="App">

                    {toggleContenu}

                    <div>
                        <button onClick={changeToggle} >Change Toggle</button>
                    </div>
                    
                    <Item />
                </div>
            );
        }
        else {
            return (
                <div className="App">

                    {toggleContenu}

                    <div>
                        <button onClick={changeToggle} >Change Toggle</button>
                    </div>
                    
                    <input
                        type="text"
                        value= {inputData}
                        onInput={e => changeInput(e.target.value)}
                    />
                </div>
            );
        }
    }

    export default App;
