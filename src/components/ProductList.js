import React from 'react';
import { Button, Card } from 'react-bootstrap'; // Ensure the correct import for your Button component

const ProductList = (props) => {
  const productElements = [];

  for (let i = props.start; i < props.end; i++) {
    const product = props.productsArr[i];
    productElements.push(
      <React.Fragment key={i}>
         <Card style={{ width: '15rem' }}>
         <Card.Title>{product.title}</Card.Title>
      <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
      <p>$ {product.price}</p>
      <Card.Body>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>

        
      </React.Fragment>
    );
  }

  return <div>{productElements}</div>;
};

export default ProductList;
