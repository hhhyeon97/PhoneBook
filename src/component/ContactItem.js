import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={2}>
        {/* 프로필 이미지를 받아와서 표시 */}
        <img
          width={90}
          src={
            item.profileImage
              ? URL.createObjectURL(item.profileImage)
              : 'https://i.pinimg.com/564x/28/fb/47/28fb47d48d382c0debb7ea6d93dc79ed.jpg'
          }
          alt=""
        />
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
