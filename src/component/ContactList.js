import React from 'react';
import Search from './Search';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
const ContactList = () => {
  const contactList = useSelector((state) => state.contactList);
  return (
    <div>
      <Search />
      {contactList.map((item) => (
        <ContactItem item={item} />
      ))}
    </div>
  );
};

export default ContactList;
