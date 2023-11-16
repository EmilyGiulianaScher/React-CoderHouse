import React from 'react';

const CartWidget = () => {
  const itemsInCart = 3;

  return (
    <div className="cart-widget">
      <i className="fas fa-shopping-cart"></i>
      <span className="cart-items">{itemsInCart}</span>
    </div>
  );
};

export default CartWidget;
