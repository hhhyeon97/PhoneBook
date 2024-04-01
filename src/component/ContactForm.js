import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { UseDispatch, useDispatch } from 'react-redux';
const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(0);
  const dispatch = useDispatch();
  //   const getName = (event) => {
  //     //console.log(event.target.value);
  //     setName(event.target.value);
  //   }; // 단순한 기능만 하고 다시 쓰일 일이 없기 때문에 아래에 직접 넣는걸로 대체됨

  const addContact = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber },
    });
  };
  // payload에서 보내는 값들이 name:name, phoneNumber:phoneNumber 이런식으로
  // 이름이 같을 땐 name, phoneNumber로만 입력해도 됨 !!
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            placeholder="전화번호를 입력해주세요"
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
