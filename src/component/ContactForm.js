import React, { useState, useRef } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [uploadImgUrl, setUploadImgUrl] = useState(
    'https://i.pinimg.com/236x/28/fb/47/28fb47d48d382c0debb7ea6d93dc79ed.jpg',
  );
  const nameInputRef = useRef(null); // 이름 입력 창에 대한 ref
  const dispatch = useDispatch();
  const addContact = (event) => {
    event.preventDefault();

    // 이름과 전화번호에 대한 유효성 검사
    if (!name.trim() || !phoneNumber.trim()) {
      // 이름 또는 전화번호에 공백이나 스페이스바만 입력된 경우
      alert('이름과 전화번호를 입력해주세요.');
      return;
    }
    // 이름 길이 검사
    if (name.trim().length > 10) {
      alert('이름은 최대 10글자까지 입력 가능합니다.');
      return;
    }

    dispatch({
      type: 'ADD_CONTACT',
      payload: { name, phoneNumber, uploadImgUrl },
    });
    setName('');
    setPhoneNumber('');
    setUploadImgUrl(
      'https://i.pinimg.com/236x/28/fb/47/28fb47d48d382c0debb7ea6d93dc79ed.jpg',
    );
    // 입력 폼 제출 후 이름 입력 창에 포커스 설정
    nameInputRef.current.focus();

    // 파일 선택 부분 초기화
    const fileInput = document.getElementById('formFile');
    if (fileInput) {
      fileInput.value = ''; // 파일 선택 부분 초기화
    }
  };

  const formatPhoneNumber = (input) => {
    // 전화번호에 하이픈(-) 추가
    const regex = /^(01[0|1|6|7|8|9])(\d{3,4})(\d{4})$/;
    return input.replace(regex, '$1-$2-$3');
  };

  const onchangeImageUpload = (e) => {
    const { files } = e.target;
    const uploadFile = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(uploadFile);
    reader.onloadend = () => {
      setUploadImgUrl(reader.result);
    };
  };

  const handlePhoneNumberChange = (event) => {
    // 입력된 값에서 숫자와 하이픈만 추출
    const value = event.target.value.replace(/[^\d-]/g, '');
    // 전화번호에 하이픈(-) 추가
    const formattedValue = formatPhoneNumber(value);
    // 전화번호 업데이트
    setPhoneNumber(formattedValue);
  };

  return (
    <Form onSubmit={addContact} className="form-area">
      <Form.Group controlId="formFile" className="mb-2">
        <Form.Label className="label">프로필 사진</Form.Label>
        <div className="profile-photo">
          <img src={uploadImgUrl} alt="프로필 사진" className="default-img" />
          <Form.Control type="file" onChange={onchangeImageUpload} />
        </div>
      </Form.Group>

      <Form.Group controlId="formName">
        <Form.Label className="label">이름</Form.Label>
        <Form.Control
          type="text"
          placeholder="이름을 입력해 주세요"
          onChange={(event) => setName(event.target.value)}
          value={name}
          ref={nameInputRef}
        />
      </Form.Group>

      <Form.Group controlId="formContact">
        <Form.Label className="label">전화번호</Form.Label>
        <Form.Control
          type="text" // type을 number에서 text로 변경
          placeholder="전화번호를 입력해 주세요"
          onChange={handlePhoneNumberChange} // 변경된 핸들러로 변경
          value={phoneNumber}
        />
      </Form.Group>
      <Button type="submit" variant="dark" className="mt-3">
        추가하기
      </Button>
    </Form>
  );
};

export default ContactForm;
