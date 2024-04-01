import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = () => {
  return (
    <Row>
      <Col lg={2}>
        <img
          width={100}
          src="https://i.pinimg.com/564x/28/fb/47/28fb47d48d382c0debb7ea6d93dc79ed.jpg"
          alt=""
        />
      </Col>
      <Col lg={10}>
        <div>김감자</div>
        <div>010-1111-2222</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
