import React, { useState } from 'react';
import "../ItemDetail/ItemDetail.css";
import { useCartContext } from '../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';


const ItemDetail = ({ item }) => {
    const [goToCart, setGoToCart] = useState(false);
    const { addProduct } = useCartContext()
    const onAdd = (quantity) => {
        setGoToCart(true);
        addProduct(item, quantity);

    }

    return (

        <div className='estructuraItemDetail'>
            <div className='imgItemDetailCont'>
                <img className='imgItemDetail' src={item.image} />
            </div>
            <div className='infoItemDetail'>
                <h3 className='tituloItemDetail'> {item.title} </h3>
                <div className='infoDescItemDetail'>
                    <p className='categoriaItemDetail'>{item.category}</p>
                    <p className='precioItemDetail'>$ {item.price}</p>
                    <p>{item.info}</p>
                    <p>{item.stock} docenas en stock</p>
                </div>
                <div>
                    {goToCart ? <Link to='/Cart'>Terminar compra</Link> : <ItemCount stock={10} initial={1} onAdd={onAdd} />}
                </div>
            </div>

        </div>
    );
};

export default ItemDetail;