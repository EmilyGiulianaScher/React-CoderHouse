import React from 'react';
const ItemListContainer = () => {
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