import React from "react";
import { useCartContext } from "../Context/CartContext";
import "../ItemCart/ItemCart.css";

const ItemCart = ({ product }) => {
  const { removeProduct } = useCartContext();
  return (
    <div className="CartItemsContainer">
      <div className="itemCart">
        <img src={product.image} alt={product.title} />
        <div>
          <p>Título: {product.title}</p>
          <p>Cantidad: {product.quantity}</p>
          <p>Precio u.: {product.price}</p>
          <p>Subtotal: $ {product.quantity * product.price}</p>
          <button onClick={() => removeProduct(product.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCart;
