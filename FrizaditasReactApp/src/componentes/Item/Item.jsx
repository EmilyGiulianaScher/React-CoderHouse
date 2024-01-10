import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Item = ({ item }) => {
    return (
        <Link to={'/item/' + item.id} className='text-decoration-none'>
            
            <Card style={{ width: '15rem' }} className="m-5  p-2  ">
                <Card.Img variant="top" src={item.image} style={{ maxHeight: '200px', maxWidth: '100%', objectFit: 'cover' }} />
                <Card.Body>
                    <Card.Title> {item.title} </Card.Title>
                    <Card.Text>
                        <p>{item.category}</p>
                        <p>$ {item.price}</p>
                        <p>{item.description}</p>
                    </Card.Text>
                    <Button variant="primary">COMPRAR</Button>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default Item