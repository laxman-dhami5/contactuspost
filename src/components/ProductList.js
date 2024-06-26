import React, { useContext } from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import CartContext from './store/cart-context';

const ProductList = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (product) => {
    cartContext.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      amount: 1 
    });
  };

  const productElements = props.productsArr.map((product) => (
    <Col key={product.id}  lg={5} className="mb-2">
      <Card style={{ width: '13rem'}}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
        <Card.Body>
          <p>$ {product.price}</p>
          <Button variant="primary" onClick={() => addToCartHandler(product)}>Add To Cart</Button>
        </Card.Body>
      </Card>

      
    </Col>
    
  ));

  return (
    <Row className="justify-content-center">
      {productElements}
      <div className="d-flex justify-content-center">
      <Button variant="secondary" size='sm' onClick={cartContext.showCartHandler} >Show Cart</Button>
      </div>
      
    </Row>
    
  );
};

export default ProductList;
