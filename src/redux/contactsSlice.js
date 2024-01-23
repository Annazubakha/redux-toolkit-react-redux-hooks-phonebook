import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [],
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.push(payload);
      },
      prerape(contact) {
        return {
          payload: {
            ...contact,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      return state.filter(contact => contact.id !== payload.id);
    },
  },
});

export const phonebookReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;
