import { ChangeEvent, Component, MouseEvent } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { Container } from './Container.styled';
import { ContactFormSection } from './ContactForm/ContactFormSection.styled';
import { ContactListSection } from './ContactList/ContactListSection.styled';
import { IContact } from 'interfaces/IContact';
import { IFormValues } from 'interfaces/IFormValues';

interface State {
  contacts: IContact[];
  filter: string;
}

const KEY = 'contacts';

const INITIAL_STATE = {
  contacts: [],
  filter: '',
};
export class App extends Component {
  state = { ...INITIAL_STATE };

  componentDidMount() {
    const storageKey = localStorage.getItem(KEY);

    if (typeof storageKey === 'string') {
      const contacts = JSON.parse(storageKey);

      if (contacts) {
        this.setState({ contacts });
      }
    }
  }

  componentDidUpdate(prevProps: State, prevState: State) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(KEY, JSON.stringify(this.state.contacts));
    }
  }

  changeFilter = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ filter: e.target.value.toLowerCase() });
  };

  formSubmitHandler = ({ name, number }: IFormValues) => {
    const contact: IContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState((prevState: State) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact: IContact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  removeContact = (e: MouseEvent<HTMLButtonElement>) => {
    const updatedContacts = this.state.contacts.filter(
      (contact: IContact) =>
        contact.id !== (e.target as HTMLInputElement).dataset.id
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
