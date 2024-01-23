import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactListElem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <li key={id}>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact({ id: id }))}>
        Delete
      </button>
    </li>
  );
};
