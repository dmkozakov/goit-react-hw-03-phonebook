import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.styled';
import { ContactFormSection } from './ContactForm/ContactFormSection.styled';
import { ContactListSection } from './ContactList/ContactListSection.styled';

const INITIAL_STATE = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};
export class App extends Component {
  state = { ...INITIAL_STATE };

  changeFilter = e => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  formSubmitHandler = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  removeContact = e => {
    const updatedContacts = this.state.contacts.filter(
      contact => contact.id !== e.target.dataset.id
    );

    this.setState({ contacts: updatedContacts });
  };

  render() {
    const { filter, contacts } = this.state;

    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <ContactFormSection>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHandler} contacts={contacts} />
        </ContactFormSection>

        <ContactListSection>
          <h2>Contacts</h2>
          <Filter filter={filter} changeFilter={this.changeFilter} />
          <ContactList
            filteredContacts={filteredContacts}
            onRemoveContact={this.removeContact}
          />
        </ContactListSection>
      </Container>
    );
  }
}
