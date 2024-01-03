import { useState } from "react";

const Empanadas = () => {
  const [empanadas, setEmpanadas] = useState([
    {
      id: 1,
      title: "Carne",
      price: 300,
      image: "imagenes/01-carne.jpg",
      description: "La más vendida",
      category: "Horneadas",
    },
    {
      id: 2,
      title: "Pollo",
      price: 200,
      image: "imagenes/02-pollo.jpg",
      description: "Sabor delicioso",
      category: "Horneadas",
    },
    {
      id: 3,
      title: "Jamón y Queso",
      price: 250,
      image: "imagenes/03-jyq-2.jpg",
      description: "Perfecta combinación",
      category: "Horneadas",
    },
    {
      id: 4,
      title: "Humita",
      price: 180,
      image: "imagenes/04-humita.jpg",
      description: "Sabor único",
      category: "Congeladas",
    },
  ]);

  return (
    <div className="row">
      {empanadas.map((e) => {
        return (
          <div key={e.id}>
            <Empanada
              image={e.image}
              title={e.title}
              description={e.description}
              id={e.id}
              price={e.price}
            />
          </div>
        );
      })}
      <h1>quiero comer unas: </h1>
    </div>
  );
}  

export default Empanadas;
