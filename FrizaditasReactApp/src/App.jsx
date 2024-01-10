import React, { useEffect, useState } from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import PublicidadIg from "./componentes/PublicidadIg/PublicidadIg";

const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={"/"} element={<ItemListContainer />} />
          <Route path={"/category/:id"} element={<ItemListContainer />} />
          <Route path={"/item/:id"} element={<ItemDetailContainer />} />
          <Route path={"*"} element={<Error />} />
        </Routes>
      </BrowserRouter>


      <div>
        {toggle && <PublicidadIg />}
        <div className="button-container">
          <button className="toggle-button" onClick={() => setToggle(!toggle)}>
            {toggle ? "Quitar" : "Mostrar"} publicidad
          </button>
        </div>
      </div>



    </div>
  );
};

export default App;
