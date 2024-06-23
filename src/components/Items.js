import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductList from './ProductList'; 

const Items = () => {
  const productsArr = [
    {
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
  ];

  const halfLength = Math.floor(productsArr.length / 2);

  return (
    <>
      <Row className="justify-content-md-center" xs={3}>
        <Col>
          <ProductList productsArr={productsArr} start={0} end={halfLength} />
        </Col>
        <Col>
          <ProductList productsArr={productsArr} start={halfLength} end={productsArr.length} />
        </Col>
      </Row>
    </>
  );
};

export default Items;
