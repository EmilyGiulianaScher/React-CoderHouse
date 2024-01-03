import React from 'react'
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Congeladas from './componentes/NavBar/Sections/Congeladas/Congeladas';
import Horneadas from './componentes/NavBar/Sections/Horneadas/Horneadas';
import Otros from "./componentes/NavBar/Sections/Otros/Otros";
import ProductCard from './componentes/Product.Card/ProductCard';
import Icono from './componentes/NavBar/Icono/Icono';
import "./App.css"
import Home from './componentes/NavBar/Sections/Home/Home';

const App = () => { 
  return (
    <div className="App">

      <BrowserRouter>
      <ItemListContainer greeting='Bienvenidos a Frizaditas'/>
        <NavBar />
      
        <Routes>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/Congeladas' element={<Congeladas />} />
          <Route path='/Horneadas' element={<Horneadas />} />
          <Route path='/Otros' element={<Otros />} />
        </Routes>

        

      </BrowserRouter>  

    
    </div >
  );
};

export default App;
