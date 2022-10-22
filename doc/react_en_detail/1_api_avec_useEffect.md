# Un appel à une API avec useEffect

```js 
import './App.css';
import { useState, useEffect }  from 'react'

function App() {

  const [dataImg, setDataImg] = useState();
  const [dataId, setDataId] = useState();

  useEffect(() => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data);
      setDataImg(data[0].url);
      setDataId(data[0].id)
    })
  }, []);

  return (
    <div className="App">
      {/* Si dataImd exite, on affiche la balise img */}
      {dataImg && <img src={dataImg} alt={dataId} />}
    </div>
  );
}

export default App;
```