import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import Search from './Search';

const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  const filterName = useSelector((state) => state.filterName);

  let [filteredList, setFilteredList] = useState([]);
  useEffect(() => {
    if (filterName !== '') {
      let list = contactList.filter((item) => item.name.includes(filterName));

      setFilteredList(list);
    } else {
      setFilteredList(contactList);
    }
  }, [filterName, contactList]);
  return (
    <div>
      <Search className="search-area" />
      <Row className="mt-1">
        <span className="total-area">
          <strong>{filteredList.length}</strong>개의 연락처
        </span>
      </Row>
      <Row className="mt-3">
        {filteredList.map((item, index) => (
          <Col md={4} sm={6} xs={12} className="card-list">
            <ContactItem item={item} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ContactList;
