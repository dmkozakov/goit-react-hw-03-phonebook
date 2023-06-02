import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.styled';
import { ContactFormSection } from './ContactForm/ContactFormSection.styled';
import { ContactListSection } from './ContactList/ContactListSection.styled';

const KEY = 'contacts';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};
export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem(KEY));

    if (contacts) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
    }
  }

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
