import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../Item/Item.css'

const Item = ({ item }) => {
    return (
        <Link to={'/item/' + item.id} className='text-decoration-none'>
            
            <Card style={{ width: '15rem' }} className="m-5  p-2  cardItem">
                <Card.Img variant="top" src={item.image} className='imagenCard' />
                <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <div>
                        <p>{item.category}</p>
                        <p className='precioItem'>$ {item.price}</p>
                        <p>{item.description}</p>
                    </div>
                    <div className=' btnItem'>
                    <Button className='botoncito'>COMPRAR</Button>
                    </div>
                   
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item