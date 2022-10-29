import './App.css';
import { useState }  from 'react';
import Timer from './Timer';

function App() {

  const [toggle, setToggle] = useState(false);


  const toggleFunc = () => {
    setToggle(!toggle);
  }

  return (
    <div className="App">
      <button onClick={toggleFunc}>Toggle</button>
      { toggle && <Timer /> }
    </div>
  );
}

export default App;
