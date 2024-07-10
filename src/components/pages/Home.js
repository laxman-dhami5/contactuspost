import React from 'react';

import { Card, Row, Col, Button } from 'react-bootstrap';

const Home = () => {
  const concertsInIndia = [
    { date: '2024-07-15', place: 'Mumbai Stadium', time: '7:00 PM' },
    { date: '2024-08-02', place: 'Bangalore Arena', time: '6:30 PM' },
    { date: '2024-09-10', place: 'Delhi Amphitheater', time: '8:00 PM' },
    { date: '2024-11-05', place: 'Kolkata Stadium', time: '6:00 PM' },
    { date: '2024-12-12', place: 'Hyderabad Arena', time: '8:30 PM' }
  ];

  return (
    <>
      
      <Row className="justify-content-md-center" xs={2}>
        <Col className="mt-4">
          {concertsInIndia.map((ele, index) => (
            <div key={index}>
              <p>
                <b>{ele.date}</b> {ele.place} {ele.time} <Button variant="primary">Buy tickets</Button>
              </p>
              <hr />
            </div>
          ))}
        </Col>
      </Row>
      <Card className="mt-3" style={{ height: '6rem', background: '#ADD8E6' }}>
        <Card.Footer className="display-1">
          <h2 align="center">The Generics</h2>
        </Card.Footer>
      </Card>
    </>
  );
};

export default Home;
