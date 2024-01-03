import React from 'react';
import { BsCart4 } from "react-icons/bs";
import '../CartWidget/CartWidget.css'; // Importar el archivo CSS

const CartWidget = () => {
  const itemsInCart = 5;

  return (
    <div className="cart-widget">
      <button><BsCart4 /></button>
      <span className="cart-items">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;
