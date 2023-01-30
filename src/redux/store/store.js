import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from 'redux/contactsSlice/contactsSlice';
import { filterReducer } from 'redux/filterSlice.js/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
