import React, { useContext } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Modal from './Modal';
import CartContext from './store/cart-context';

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const removeItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  return (
    <Modal onClose={props.onClose}>
      <Button onClick={props.onClose} variant="danger">X</Button>
      <Row className="justify-content-center">
        {cartCtx.items.map((item) => (
          <Col key={item.id}  className="mb-4">
            <Card style={{ width: '15rem', margin: 'auto' }}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Img variant="top" src={item.imageUrl} alt={item.title} />
              <Card.Body>
                <p>$ {item.price}</p>
                <p>Quantity: {item.amount}</p>
                <Button variant="danger" onClick={() => removeItemHandler(item.id)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row className="mt-5 justify-content-center">
        <Col>
          <Card>
            <Card.Body>
              <Card.Text>Total: ${cartCtx.totalAmount.toFixed(2)}</Card.Text>
              <Button variant="success">Order</Button>
              <Button variant="danger" className="ml-2" onClick={props.onClose}>Cancel</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Modal>
  );
};

export default Cart;
