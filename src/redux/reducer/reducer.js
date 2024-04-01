let initialState = {
  contactList: [],
  keyword: '',
};

function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_CONTACT':
      const profileImage =
        payload.profileImage ||
        'https://i.pinimg.com/564x/28/fb/47/28fb47d48d382c0debb7ea6d93dc79ed.jpg';
      return {
        ...state,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
            profileImage: profileImage,
          },
        ],
      };
    case 'SEARCH_BY_NAME':
      return { ...state, keyword: payload.keyword };

    default:
      return { ...state };
  }
}

export default reducer;
