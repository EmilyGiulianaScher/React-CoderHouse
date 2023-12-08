import React from 'react'
import NavBar from './componentes/NavBar';
import ItemListContainer from './componentes/ItemListContainer';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Congeladas from './componentes/Congeladas';
import Horneadas from './componentes/Horneadas';
import Otros from "./componentes/Otros";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>

        <NavBar />
        <Routes>
          <Route path='/Congeladas' element={<Congeladas />} />
          <Route path='/Horneadas' element={<Horneadas />} />
          <Route path='/Otros' element={<Otros />} />
        </Routes>



      </BrowserRouter>
    </div >
  );
};

export default App;
