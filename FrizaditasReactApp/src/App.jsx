import React from 'react';
import NavBar from "./componentes/NavBar";
import ItemListContainer from './componentes/ItemListContainer';

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido a la tienda de empanadas!" />
    </div>
  );
};

export default App;
