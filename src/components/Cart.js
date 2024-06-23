import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Cart = (props) => {
    
    const cartElements = [
        {
            title: 'Colors',
            price: 100,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
            quantity: 2,
        },
        {
            title: 'Black and white Colors',
            price: 50,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
            quantity: 3,
        },
        {
            title: 'Yellow and Black Colors',
            price: 70,
            imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
            quantity: 1,
        }
    ];

    const [arr, setArr] = useState(cartElements);

    const removeItems = (index) => {
        const newItems = arr.filter((_, i) => i !== index);
        setArr(newItems);
    }

    return (
        <>
            <Button onClick={props.onClose} variant="danger">Close</Button>
            {arr.map((ele, index) => (
                <React.Fragment key={index}>
                    <Card style={{ width: '15rem', margin: '10px' }}>
                        <Card.Body>
                            <Card.Title>{ele.title}</Card.Title>
                            <Card.Img variant="top" src={ele.imageUrl} alt={ele.title} />
                            <p>$ {ele.price}</p>
                            <Button variant="danger" onClick={() => removeItems(index)}>Remove</Button>
                        </Card.Body>
                    </Card>
                </React.Fragment>
            ))}
        </>
    );
}

export default Cart;
