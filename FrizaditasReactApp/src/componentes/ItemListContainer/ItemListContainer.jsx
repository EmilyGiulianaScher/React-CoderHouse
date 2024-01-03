import React from 'react';
import "../ItemListContainer/ItemListContainer.css";
const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h2 className='saludo'>{greeting}</h2>
    </div>
  );
};
export default ItemListContainer;


/*
<div className="item-list-container">
      <h2>{greeting}</h2>
    </div>


<ul>
{products.map((product) => (
  <li key={product.id}>
    <p>{product.name}</p>
    <p>Precio: ${product.price}</p>
  </li>
))}
</ul>
*/