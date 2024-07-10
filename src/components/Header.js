import { Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import React, { useContext } from 'react';
import Cart from './Cart';
import CartContext from './store/cart-context';
import { NavLink } from 'react-router-dom';

function Header(props) {
  const ctx = useContext(CartContext);

  return (
    <>
      <Navbar bg='black' expand='sm' variant='light'>
        <Container>
          <Navbar.Brand style={{ color: 'white' }}>
            <NavLink to="/home" style={{ color: 'white' }}>Home</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ color: 'white' }}>
            <NavLink to="/store" style={{ color: 'white' }}>Store</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ color: 'white' }}>
            <NavLink to="/about" style={{ color: 'white' }}>About</NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ color: 'white' }}>
            <NavLink to="/contact-us" style={{ color: 'white' }}>Contact Us </NavLink>
          </Navbar.Brand>
          <Navbar.Brand style={{ color: 'white' }}>
            <Button variant="outline-info" size='sm' onClick={ctx.showCartHandler}>Cart
              ({ctx.items.reduce((count, item) => count + item.amount, 0)})
            </Button>
          </Navbar.Brand>
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
