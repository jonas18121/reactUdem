import './App.css';
import { useState, useEffect }  from 'react'

function App() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    
    // on récupère l'id de setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé grace a l'id contenu dans intervalId
      clearInterval(intervalId);
    }
  }, []);

  return (
    <div className="App">
      <h1>{timer}</h1>
    </div>
  );
}

export default App;
