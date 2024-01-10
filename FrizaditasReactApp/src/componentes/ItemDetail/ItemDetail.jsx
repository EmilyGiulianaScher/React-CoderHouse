import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({ item }) => {
    return (
       
        <div>
        <Card style={{ width: '18rem' }}>
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

    </div>

    );
};

export default ItemDetail;