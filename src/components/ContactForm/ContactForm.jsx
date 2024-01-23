import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';
import { toast } from 'react-toastify';
import { selectContacts } from '../../redux/selectors';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };
  const oldContact = contacts.find(
    contact => contact.name.toLowerCase() === name.toLowerCase()
  );
  const handleSubmit = event => {
    event.preventDefault();

    if (oldContact) {
      toast.error(`${name} is already in contacts.`);
      return;
    }
    dispatch(addContact({ name, number, id: nanoid() }));
    toast.success(`${name} was added to contacts successfully.`);
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name:
        <input
          placeholder="Anna Zubakha"
          pattern="^([a-zA-Z]{2,}\s[a-zA-Z]{1,}'?-?[a-zA-Z]{2,}\s?([a-zA-Z]{1,})?)"
          title="Please enter name like this: Anna Zubakha"
          minLength="4"
          type="text"
          name="name"
          id={nanoid()}
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={s.label}>
        Number:
        <input
          placeholder="123-456-7890"
          title="Please enter number like this: 123-456-7890"
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          type="tel"
          name="number"
          required
          id={nanoid()}
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={s.form_btn} type="submit">
        Add contact
      </button>
    </form>
  );
};
