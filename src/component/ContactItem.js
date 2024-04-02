import React from 'react';

const ContactItem = ({ item }) => {
  //console.log('Profile Image:', item.profileImage);
  return (
    <div>
      <div>
        <img
          src={item.uploadImgUrl}
          alt={`${item.name} 프로필 사진`}
          className="profile-img"
        />
      </div>
      <div className="card-info">
        <div className="name">{item.name}</div>
        <div className="phone">{item.phoneNumber}</div>
      </div>
    </div>
  );
};

export default ContactItem;
