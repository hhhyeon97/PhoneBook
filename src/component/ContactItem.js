import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ContactItem = ({ item }) => {
  return (
    <Row className="mt-3 item-area">
      <Col lg={3}>
        {/* 프로필 이미지를 받아와서 표시 */}
        <img
          className="profile-img"
          src={
            item.profileImage
              ? URL.createObjectURL(item.profileImage)
              : 'https://i.pinimg.com/236x/28/fb/47/28fb47d48d382c0debb7ea6d93dc79ed.jpg'
          }
          alt="기본이미지"
        />
      </Col>
      <Col lg={9} className="text-area">
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
