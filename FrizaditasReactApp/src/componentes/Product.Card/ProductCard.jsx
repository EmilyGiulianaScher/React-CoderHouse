import React from "react";
import "../Product.Card/ProductCard.css";

function ProductCard({ img, title, price, children }) {
  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
      <div className="product-actions"> {children} </div>
    </div>
  );
}

export default ProductCard;
