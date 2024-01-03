import React from "react";
import "../Congeladas/Congeladas.css"; // Importar el archivo CSS
import imagenCarne from "../../../imagenes/Congelada-01.webp";
import imagenHumita from "../../../imagenes/Congelada-04.jpg";
import imagenArabe from "../../../imagenes/congeladas-arabe.jpg";
import ProductCard from "../../../Product.Card/ProductCard";

const Congeladas = () => {
  return (
    <div className="Congeladas">
      <h3>Congeladas</h3>


      <ProductCard
        title="Carne"
        price="300"
        img={imagenCarne}>
        <p> holaaaaaaaa</p>
        <button> comprar </button>
      </ProductCard>

      <ProductCard
        title="Humita"
        price="200"
        img={imagenHumita}>
        <p> holaaaaaaaa</p>
        <button> comprar </button>
      </ProductCard>

      <ProductCard
        title="arabe"
        price="250"
        img={imagenArabe}>
        <p> holaaaaaaaa</p>
        <button> comprar </button>
      </ProductCard>

      
    </div>
  );
};
export default Congeladas;


