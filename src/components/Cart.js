import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import Modal from './Modal';
import CartContext from './store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  return (
    <Modal onClose={props.onClose}>
      <Button onClick={props.onClose} variant="danger">X</Button>
      {cartCtx.items.map((item, index) => (
        <Card key={item.id} style={{ width: '10rem', margin: '1px' }}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
            <p>$ {item.price}</p>
            <p>Quantity: {item.amount}</p>
            <Button variant="danger" onClick={() => cartCtx.removeItem(item.id)}>Remove</Button>
          </Card.Body>
        </Card>
      ))}
      <div className="d-flex justify-content-between mt-2">
        <Button variant="success">Order</Button>
        <Button variant="danger">Cancel</Button>
      </div>
    </Modal>
  );
};

export default Cart;
