import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';
import css from '../ContactListItem/ContactListItem.module.css';

export function ContactListItem({ contact }) {
  const dispatch = useDispatch();

  const handleDeleteBtn = evt => {
    dispatch(deleteContact(evt.target.name));
  };

  return (
    <li className={css.contact}>
      {contact.name}: {contact.number}
      <button
        className={css.contact__btn}
        name={contact.id}
        type="button"
        onClick={handleDeleteBtn}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
