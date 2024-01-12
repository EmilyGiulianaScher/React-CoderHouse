import Carousel from "react-bootstrap/Carousel";
import "../Carrusel/Carrusel.css";
function CarouselHome() {
  return (
    <Carousel >
      <Carousel.Item interval={3000}>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/frizaditas-e-commerce.appspot.com/o/01-carne.jpg?alt=media&token=1688ea23-b545-4822-9895-fc8839aebb83" alt="carne" />
        <Carousel.Caption>
          <h3>Descubre nuestras empanadas horneadas</h3>
          <p>Con delicioso relleno y una mezcla de sabores irresistibles.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="https://firebasestorage.googleapis.com/v0/b/frizaditas-e-commerce.appspot.com/o/Congelada-01.webp?alt=media&token=0bf37691-beb0-4e12-ace7-10d7ac997a17" alt="pescado"/>
        <Carousel.Caption>
          <h3>Prueba nuestras empanadas congeladas </h3>
          <p>Saludables y listas para cocinar en la comodidad de tu hogar.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src="https://firebasestorage.googleapis.com/v0/b/frizaditas-e-commerce.appspot.com/o/pizza-margarita.jpg?alt=media&token=07d2e210-c841-454e-baff-7b808a370588" alt="pescado" />
        <Carousel.Caption>
          <h3>Disfruta de nuestras exquisitas pizzas </h3>
          <p>El equilibrio perfecto entre los ingredientes.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;
