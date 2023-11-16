import React from 'react';

const ItemListContainer = ({ greeting }) => {
  
  const products = [
    { id: 1, name: 'Empanada de carne', price: 2.5 },
    { id: 2, name: 'Empanada de pollo', price: 2.0 },
    { id: 3, name: 'Empanada de jamón y queso', price: 2.2 },
    
  ];

  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>Precio: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
