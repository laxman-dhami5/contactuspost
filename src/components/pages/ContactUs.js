import React, { useState } from 'react';
import { Card, Col, Row, Form, Button, Container } from 'react-bootstrap';

const ContactUs = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData={
        name:name,
        email:email,
        phone:phone
    }
    console.log(formData)
 props.data(formData)
 setName('');
 setEmail('');
 setPhone('');
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={4}>
          <Card className="lg">
            <Card.Body>
              <h2 className="text-center mb-4">Contact Us</h2>
              <Form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label>Name</label><br />
                  <input
                    type="text"
                   
                    id="name"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label>Email address</label><br />
                  <input
                    type="email"
                    
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label >Phone Number</label><br/>
                  <input
                    type="text"
                    
                    id="phone"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <Button variant="primary" type="submit" >
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card className="mt-4 text-center shadow-sm" style={{ background: '#ADD8E6' }}>
        <Card.Footer className="py-4">
          <h2>The Generics</h2>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default ContactUs;
