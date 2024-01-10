import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../ItemDetail/ItemDetail.css"

const ItemDetail = ({ item }) => {
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
                <Button className='botoncito'> AGREGAR AL CARRITO</Button>
            </div>

        </div>

    );
};

export default ItemDetail;