import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const Search = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_BY_NAME', payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName} className="search-area">
      <Row>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button variant="dark" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
