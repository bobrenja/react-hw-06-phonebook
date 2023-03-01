const { createSlice } = require('@reduxjs/toolkit');

const phoneBooksSlice = createSlice({
  name: 'phoneBooks',
  initialState: {
    contacts: [],
    filters: '',
  },
  reducers: {
    addContact(state, actions) {},
    removeContact(state, actions) {},
    filterContact(state, actions) {},
  },
});

export const { addContact, removeContact, filterContact } =
  phoneBooksSlice.actions;
export default phoneBooksSlice.reducer;
