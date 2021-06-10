import React from 'react';
import Contenu from './Composants/Contenu/Contenu';
import ThemeContextProvider from './Context/ThemeContext';



function App() {
  return (
    <div className="App">

      <ThemeContextProvider>
          <Contenu />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
