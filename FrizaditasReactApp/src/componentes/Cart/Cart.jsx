import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import "../Cart/Cart.css";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();
  

  if (cart.length === 0) {
    return (
      <div className="cart-container">
        <p>No hay elementos en el carrito 😓​</p>
        <Link to="/">🤑​​ Hacer compras 🤑💲​</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p className="totalPrice">total: $ {totalPrice()}</p>
      <Link to="/checkOut">
        <button  className="btn-total">
          Finalizar Compra
        </button>
      </Link>
    </div>
  );
};

export default Cart;
