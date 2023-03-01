import { configureStore } from '@reduxjs/toolkit';
import phoneBooksSlice from './phoneBooksSlice';

const store = configureStore({
  reducer: {
    phoneBooks: phoneBooksSlice,
  },
});

export default store;
