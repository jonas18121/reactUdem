import './App.css';
import { useState, useEffect, useRef }  from 'react';
import Video_plage_1 from './assets/video/plage.mp4';
import Video_plage_2 from './assets/video/plage.mp4';
import Video_plage_3 from './assets/video/plage.mp4';

function App() {

  const [toggle, setToggle] = useState(false);

  const ref = useRef([]);

  
  useEffect(() => {
    
    // création d'un écouteur d'évènement pour agir lorsque qu'on redimensionne l'écran
    window.addEventListener('resize', actionResize);

    // actionResize est appeler dans l'écouteur d'évènement
    function actionResize() {
      console.log("Resized !!!");
    }

    // clean up fonction pour supprimer addEventListener lorsque le composant ce détruit
    return () => {
      window.removeEventListener('resize', actionResize);
    }
  }, []);

  const toggleFunc = () => {
    setToggle(!toggle);
  }

  const addToRef = el => {
    console.log(el);


    if (el && !ref.current.includes(el)) {
      ref.current.push(el);
    }
  }

  return (
    <div className="App">

      <video 
        ref={addToRef}
        width="100%" 
        height="500"
        autoPlay
        controls
        muted
      >
        <source src={Video_plage_1} type='video/mp4' />
      </video>

      <video 
        ref={addToRef}
        width="100%" 
        height="500"
        autoPlay
        controls
        muted
      >
        <source src={Video_plage_2} type='video/mp4' />
      </video>

      <video 
        ref={addToRef}
        width="100%" 
        height="500"
        autoPlay
        controls
        muted
      >
        <source src={Video_plage_3} type='video/mp4' />
      </video>

      <button onClick={toggleFunc}>Toggle</button>
    </div>
  );
}

export default App;
