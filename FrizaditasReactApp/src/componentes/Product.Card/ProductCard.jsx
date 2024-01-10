import React from "react";
import "../Product.Card/ProductCard.css";

function ProductCard({ img, title, price, children }) {
  return (
    <div className="container">

      <div className=" card ">
        <img className="product-image" src={img} alt={title} />
        <h2 className="product-title">{title}</h2>
        <p className="product-price">{price}</p>
        <div className="product-actions"> {children} </div>
      </div>
    </div>



  );
}

export default ProductCard;
