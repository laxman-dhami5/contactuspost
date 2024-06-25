import React, { useContext } from 'react';
import { Button, Card } from 'react-bootstrap';
import CartContext from './store/cart-context';

const ProductList = (props) => {
  const cartContext = useContext(CartContext);

  const addToCartHandler = (product) => {
    cartContext.addItem({
      id: product.id,
      title: product.title,
      price: product.price,
      imageUrl: product.imageUrl,
      amount: 1 // Ensure each addition is counted correctly
    });
  };

  const productElements = props.productsArr.map((product, index) => (
    <Card key={index} style={{ width: '15rem', margin: '1rem' }}>
      <Card.Title>{product.title}</Card.Title>
      <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
      <Card.Body>
        <p>$ {product.price}</p>
        <Button variant="primary" onClick={() => addToCartHandler(product)}>Add To Cart</Button>
      </Card.Body>
    </Card>
  ));

  return <div className="d-flex flex-wrap">{productElements}</div>;
};

export default ProductList;
