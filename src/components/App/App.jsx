import React from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList ';
import { ContactsFilter } from 'components/Filter/Filter';
import s from './App.module.css';
export const App = () => {
  return (
    <div className={s.container}>
      <h1 className={s.main_title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.title}>Contacts</h2>
      <ContactsFilter />
      <ContactList />
    </div>
  );
};
