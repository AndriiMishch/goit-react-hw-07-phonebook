import ContactFilter from 'components/Filter';
import ContactListItem from './UserListItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/actions';
import { StyledList } from './UserList.styled';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <>
      <ContactFilter />
      {visibleContacts.length > 0 ? (
        <StyledList>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              <ContactListItem contact={contact} />
            </li>
          ))}
        </StyledList>
      ) : (
        <p>Sorry, no contacts found...</p>
      )}
    </>
  );
}