import { Navbar,Container, Button, Row, Col } from "react-bootstrap";
import React, { useState } from "react";
import Cart from "./Cart";
function Header(props) {
  const [cart,showCart]=useState(false)
   const cartHandeler=()=>{
    showCart(true)
   }
   const removeCart=()=>{
    showCart(false)
   }
  return (
    <>
   <Navbar expand="md" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Brand href="/">Store</Navbar.Brand>
        <Navbar.Brand href="/">About</Navbar.Brand>
        <Navbar.Brand >
        <Button onClick={cartHandeler}  variant="primary">Cart</Button>
        </Navbar.Brand>
      </Container>
    </Navbar>
    <Container fluid  >
      <Row>
        <Col backgroud-color='grey' className='mt-1' style={{ height: '10rem' ,background:'grey'}}>
        <h1 className='mt-4 display-3' align='center' style={{fontFamily:'sans-math'}} >The Gererics</h1>
        </Col>
      </Row>
    </Container>
    {cart && <Cart onClose={removeCart}/>}
    
    </>
  );
}

export default Header;
