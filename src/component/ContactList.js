import React, { useState, useEffect } from 'react';
import Search from './Search';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactList = () => {
  // useSelector를 사용하여 Redux 상태에서 필요한 속성 가져오기
  const contactList = useSelector((state) => state.contactList);
  const keyword = useSelector((state) => state.keyword);

  // 검색 결과를 관리할 상태 설정
  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    // 키워드가 비어있지 않은 경우에만 필터링 수행
    if (keyword !== '') {
      const filteredList = contactList.filter((item) =>
        item.name.includes(keyword),
      );
      setFilterList(filteredList);
    } else {
      // 키워드가 비어있는 경우에는 전체 목록 보여주기
      setFilterList(contactList);
    }
  }, [keyword, contactList]); // useEffect의 의존성 배열 설정

  return (
    <div>
      <Search className="search-area" />
      {/* 연락처가 없는 경우에는 "연락처가 없습니다." 문구 표시 */}
      {filterList.length === 0 ? (
        <p className="no-text">연락처가 없습니다.</p>
      ) : (
        <>
          {filterList.length} 개
          {filterList.map((item, index) => (
            <ContactItem item={item} key={index} />
          ))}
        </>
      )}
    </div>
  );
};

export default ContactList;
