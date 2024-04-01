import React, { useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const formRef = useRef(null); // 폼 참조 생성
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault();

    const formData = new FormData(formRef.current); // 폼 데이터 생성
    const name = formData.get('name');
    const phoneNumber = formData.get('phoneNumber');
    const profileImage = formData.get('profileImage');

    // 입력값 검증
    if (!name.trim() || !phoneNumber.trim()) {
      // 이름 또는 전화번호가 공백이거나 스페이스만 있는 경우 제출 중단
      alert('이름과 전화번호를 입력해주세요.'); // 알림 표시
      return;
    }

    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber, profileImage },
    });

    // 폼 초기화
    formRef.current.reset();
  };

  return (
    <div>
      <Form ref={formRef} onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>이름</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="이름을 입력해주세요"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type="number"
            name="phoneNumber"
            placeholder="전화번호를 입력해주세요"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formProfileImage">
          <Form.Label>프로필 사진 선택</Form.Label>
          <Form.Control type="file" name="profileImage" />
        </Form.Group>

        <Button variant="dark" type="submit">
          추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
