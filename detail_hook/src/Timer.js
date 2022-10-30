import { useState, useEffect, Fragment }  from 'react'

function Timer() {

  const [timer, setTimer] = useState(0);

  useEffect(() => {
    alert('Le Composant Est Construit');
    
    // on récupère l'id de setInterval 
    const intervalId = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000);

    return () => {
      // on utilise clearInterval pour nettoyé grace a l'id contenu dans intervalId
      clearInterval(intervalId);

      alert('Le Composant Est Détruit');
    }
  }, []);

  return (
    <Fragment>
      <h1>{timer}</h1>
    </Fragment>
  );
}

export default Timer;