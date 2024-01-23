import { filterContacts } from '../../redux/filterSlice';
import s from './Filter.module.css';
import { useDispatch } from 'react-redux';

export const ContactsFilter = () => {
  const dispatch = useDispatch();
  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        placeholder="Please enter the name of the contact to find it"
        type="text"
        name="filter"
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </label>
  );
};
