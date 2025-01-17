import React from 'react';
import { Container,Card } from 'react-bootstrap';
import ProductList from './ProductList'; 

const Items = () => {
  const productsArr = [
    {
      id: 'p1',
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      id: 'p2',
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      id: 'p3',
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      id: 'p4',
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  return (
    <Container>
      <ProductList productsArr={productsArr} />
      <Card className="mt-3" style={{ height: '6rem', background: '#ADD8E6' }}>
        <Card.Footer className="display-1">
          <h2 align="center">The Generics</h2>
        </Card.Footer>
      </Card>
    </Container>
    
  );
};

export default Items;
