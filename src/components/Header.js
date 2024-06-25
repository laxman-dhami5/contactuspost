import { Navbar, Container, Button, Row, Col } from 'react-bootstrap';
import React, { useContext, useState } from 'react';
import Cart from './Cart';
import CartContext from './store/cart-context';

function Header(props) {
  const ctx = useContext(CartContext);
  const [cartVisible, setCartVisible] = useState(false);

  const showCartHandler = () => {
    setCartVisible(true);
  };

  const hideCartHandler = () => {
    setCartVisible(false);
  };

  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/">About</Navbar.Brand>
          <Button onClick={showCartHandler}>
            Cart ({ctx.items.reduce((count, item) => count + item.amount, 0)})
          </Button>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          <Col className="mt-1" style={{ height: '10rem', background: 'grey' }}>
            <h1 className="mt-4 display-3" align="center" style={{ fontFamily: 'sans-serif' }}>The Generics</h1>
          </Col>
        </Row>
      </Container>
      {cartVisible && <Cart onClose={hideCartHandler} />}
    </>
  );
}

export default Header;
