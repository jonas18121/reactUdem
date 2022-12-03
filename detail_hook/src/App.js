import './App.css';
import { useRef }  from 'react';


function App() {



  const cursorRef = useRef(null);


  /**
   *  mousePos permet d'avoir accès a cursorRef.current a chaque que la souris bouge
   * via onMouseMove
   */
  const mousePos = e => {
    console.log(cursorRef.current);

    // Il faut mettre - 20 a e.pageY et e.pageY pour que la souris soit bien au milieu de la div re-construit
    cursorRef.current.setAttribute('style', `top:${e.pageY - 20}px; left:${e.pageX - 20}px;`);

  }


  return (
    <div onMouseMove={mousePos} className="App">

      <div 
        ref={cursorRef} 
        className="cursor-custom"
      ></div>

      <h1>Lorem ipsum</h1>
    </div>
  );
}

export default App;

// function App() {

//   const [toggle, setToggle] = useState(false);

//   const ref = useRef(null);

  
//   useEffect(() => {
//     console.log(ref);
//     console.log(ref.current);

//     setTimeout(() => {
//       ref.current.pause();
//     }, 5000);

//   }, []);

//   const toggleFunc = () => {
//     setToggle(!toggle);
//   }

//   return (
//     <div className="App">

//       <video 
//         ref={ref}
//         width="100%" 
//         height="500"
//         autoPlay
//         controls
//         muted
//       >
//         <source src={Video_plage} type='video/mp4' />
//       </video>

//       <button onClick={toggleFunc}>Toggle</button>
//     </div>
//   );
// }

// export default App;
