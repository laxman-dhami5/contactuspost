import { Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import React, { useContext } from 'react';
import Cart from './Cart';
import CartContext from './store/cart-context';

function Header(props) {
  const ctx = useContext(CartContext);
 

  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="http://localhost:3000/home">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="http://localhost:3000/about">About</Navbar.Brand>
          
          <Button variant="outline-info" size='sm'  onClick={ctx.showCartHandler}>Cart
             ({ctx.items.reduce((count, item) => count + item.amount, 0)})</Button>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col className="mt-1" style={{ height: '10rem', background: 'grey' }}>
            <h1 className="mt-4 display-3" align="center" style={{ fontFamily: 'sans-serif' }}>The Generics</h1>
          </Col>
        </Row>
      </Container>
      {ctx.cartVisible && <Cart onClose={ctx.hideCartHandler} />}
    </>
  );
}

export default Header;
