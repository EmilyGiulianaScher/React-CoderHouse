import React from "react";
import "../Horneadas/Horneadas.css";
import ProductCard from "../../../Product.Card/ProductCard";
import imagenCarne from "../../../imagenes/01-carne.jpg";
import imagenPollo from "../../../imagenes/02-pollo.jpg";
import imagenJyQ from "../../../imagenes/03-jyq-2.jpg";

const Horneadas = () => {
  return (
    <div className="Horneadas">
      <h3 > Horneadas</h3>


      <ProductCard
        title="Carne"
        price="300"
        img={imagenCarne}>
        <p> holaaaaaaaa</p>
        <button> comprar </button>
      </ProductCard>

      <ProductCard
        title="Pollo"
        price="200"
        img={imagenPollo}>
        <p> holaaaaaaaa</p>
        <button> comprar </button>
      </ProductCard>

      <ProductCard
        title="Jamón y Queso"
        price="250"
        img={imagenJyQ}>
        <p> holaaaaaaaa</p>
        <button> comprar </button>
      </ProductCard>

      
    </div>
  );
};

export default Horneadas;
