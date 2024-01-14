import Carousel from "react-bootstrap/Carousel";
import "../Carrusel/Carrusel.css";
import React from 'react'
function CarouselHome() {
  return (
    <div className="fondoCarro">
 <Carousel className="Carrete">
      <Carousel.Item interval={3000}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/frizaditas-e-commerce.appspot.com/o/3.png?alt=media&token=9ef3d87d-c641-4e1d-8009-5a210081be9b" alt="1" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="https://firebasestorage.googleapis.com/v0/b/frizaditas-e-commerce.appspot.com/o/2.png?alt=media&token=e96db4f7-a929-4308-a03c-7530ec313e1f" alt="2"/>
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="https://firebasestorage.googleapis.com/v0/b/frizaditas-e-commerce.appspot.com/o/1.png?alt=media&token=fbaeee64-33d9-47bb-a939-0e4550e76acb" alt="3" />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
   
  );
}

export default CarouselHome;
