import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from '../Section';
import ContactList from '../UserList';
import ContactForm from '../UserForm';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/actions';
import { AppContainer } from './App.styled';
import { GlobalStyle } from '../BaseStyles.styled';

export default function App() {
  const contacts = useSelector(getContacts);

  return (
    <AppContainer>
      <Section title="Add contact">
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts">
          <ContactList />
        </Section>
      )}
      <ToastContainer />
      <GlobalStyle />
    </AppContainer>
  );
}