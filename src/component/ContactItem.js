import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  console.log('Profile Image:', item.profileImage);
  return (
    <Row className="mt-3 item-area">
      <Col lg={3}>
        {/* 프로필 이미지를 받아와서 표시 */}
        <img className="profile-img" src={item.profileImage} alt="기본이미지" />
      </Col>
      <Col lg={9} className="text-area">
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
