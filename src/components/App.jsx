import { getContacts } from 'redux/selectors/selectors';
import { useSelector } from 'react-redux';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <div
      style={{
        height: '100vh',
        fontSize: 20,
        color: '#010101',
        padding: '40px',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {contacts.length > 0 && <ContactsList />}
    </div>
  );
}
