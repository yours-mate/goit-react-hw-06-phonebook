import { getContacts, getFilter } from 'redux/selectors/selectors';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export function ContactsList() {
  const currentContacts = useSelector(getContacts);
  const currentFilter = useSelector(getFilter);

  const searchedContacts = useMemo(() => {
    return currentContacts.filter(contact =>
      contact.name.toLowerCase().includes(currentFilter.toLowerCase())
    );
  }, [currentContacts, currentFilter]);

  return (
    <div>
      <ul>
        {searchedContacts.map(contact => (
          <ContactListItem contact={contact} key={contact.id} />
        ))}
      </ul>
    </div>
  );
}
