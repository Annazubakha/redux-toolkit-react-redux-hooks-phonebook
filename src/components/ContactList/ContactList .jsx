import { ContactListElem } from 'components/ContactListElem/ContactListElem';
import s from './ContactList.module.css';
export const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(contact => (
        <ContactListElem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          id={contact.id}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ul>
  );
};
