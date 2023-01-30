import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsInitialState = () => {
  const contacts = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contacts);
  if (parsedContacts) {
    return parsedContacts;
  }
  return [];
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState(),
  reducers: {
    saveContact: {
      reducer(state, action) {
        const names = state.map(contact => contact.name.toLowerCase());
        if (names.includes(action.payload.name.toLowerCase())) {
          return alert(
            `${action.payload.name} is already in the contacts list.`
          );
        }
        state.push(action.payload);
        localStorage.setItem('contacts', JSON.stringify(state));
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(state));
    },
  },
});

export const { saveContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
