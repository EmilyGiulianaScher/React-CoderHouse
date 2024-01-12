import React from 'react';
import { BsCart4 } from "react-icons/bs";
import '../CartWidget/CartWidget.css'; 
import {useCartContext} from '../Context/CartContext';

const CartWidget = () => {
  const {totalProducts, cart} = useCartContext();

  return (
    <div className="cart-widget">
      <button><BsCart4/></button>
      <span className="cart-items">{totalProducts() || cart}</span>
    </div>
  );
};

export default CartWidget;
