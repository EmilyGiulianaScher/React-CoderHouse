import React from 'react'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Icono from './componentes/NavBar/Icono/Icono';
import "./App.css"
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';

const App = () => { 
  return (
    <div className="App">

      <BrowserRouter>
      
        <NavBar/>

  
        <Routes>
          <Route path={'/'} element={<ItemListContainer/>}/>
          <Route path={'/category/:id'} element={<ItemListContainer/>}/>
          <Route path={'/item/:id'} element={<ItemDetailContainer/>}/>
          <Route path={'*'} element={<Error/>}/>
        </Routes>

        

      </BrowserRouter>  

    
    </div >
  );
};

export default App;
