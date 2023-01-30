import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    saveContact: {
      reducer(state, action) {
        const names = state.contacts.map(contact => contact.name.toLowerCase());
        if (names.includes(action.payload.name.toLowerCase())) {
          return alert(
            `${action.payload.name} is already in the contacts list.`
          );
        }
        state.contacts.push(action.payload);
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
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

export const { saveContact, deleteContact } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
