import React, { useState } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Search = () => {
  let [keyword, setKeyword] = useState('');
  let dispatch = useDispatch();
  //let { contact } = useSelector((state) => state);

  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_BY_NAME', payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName} className="search-area">
      <Row>
        <Col lg={10}>
          <Form.Label>검색</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2} className="mt-4 search-btn">
          <Button variant="dark" type="submit">
            찾기
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default Search;
