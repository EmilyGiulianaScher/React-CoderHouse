import React, { useEffect, useState } from "react";
import NavBar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import PublicidadIg from "./componentes/PublicidadIg/PublicidadIg";
import CartProvider from "./componentes/Context/CartContext";
import CarouselHome from "./componentes/Carrusel/Carrusel";
import Cart from "./componentes/Cart/Cart";
import { CheckOut } from "./componentes/Checkout/CheckOut";
import Error from './componentes/Error';


const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route
              path={"/"}
              element={
                <>
                  <CarouselHome /> <ItemListContainer />
                </>
              }
            />
            <Route path={"/category/:id"} element={<ItemListContainer />} />
            <Route path={"/item/:id"} element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkOut"} element={<CheckOut />} />
            <Route path={'*'} element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>

      <div>
        {toggle && <PublicidadIg />}
        <div className="button-container">
          <button className="toggle-button" onClick={() => setToggle(!toggle)}>
            {toggle ? "📸​❌​" : "📸​↕️​"}
          </button>
        </div>
      </div>

  
    </div>
  );
};

export default App;
