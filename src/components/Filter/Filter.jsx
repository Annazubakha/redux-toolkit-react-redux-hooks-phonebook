import s from './Filter.module.css';
export const ContactsFilter = ({ onChangeFilter, filter }) => {
  return (
    <label className={s.label}>
      Find contacts by name:
      <input
        placeholder="Please enter the name of the contact to find it"
        type="text"
        name="filter"
        value={filter}
        onChange={onChangeFilter}
      />
    </label>
  );
};
