import React from 'react';

import { Card, Col, Row } from 'react-bootstrap';
import image from '../../assets/image.jpg'

const About = () => {
  return (
    <>
      
      <Row>
        <h3 align='center'>About</h3>
        <Col>
          <img src={image} alt="Musician" style={{ width: '100%', height: 'auto' }} />
        </Col>
        <Col>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem harum itaque eligendi, fugit rerum libero officia maiores beatae quis ex consequatur animi sed voluptatibus commodi illo distinctio omnis inventore sit! Amet doloribus ipsa, ducimus adipisci voluptas delectus libero dolorum consectetur minus esse laboriosam beatae vero voluptate non officiis totam iusto autem pariatur similique sequi animi. Harum voluptatibus fugiat omnis voluptatem quisquam eum repellendus! Deserunt sunt laboriosam quisquam adipisci ratione velit deleniti possimus animi veniam reprehenderit pariatur debitis, ea fugit quos? Iure, neque. Placeat similique aut debitis itaque at nam perspiciatis veniam impedit corporis explicabo animi dolore id ab, consequatur quo nesciunt asperiores sapiente voluptatem labore temporibus. Quisquam nihil illum repellendus ipsam nulla labore perspiciatis perferendis animi, itaque tempore odio aperiam odit recusandae reprehenderit ullam, possimus at ad culpa, laborum quasi maiores? Laboriosam expedita minima sed quibusdam beatae dolor ab! Obcaecati facere quas officiis eum accusamus quisquam sint sed consequuntur soluta?</p>
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

export default About;
