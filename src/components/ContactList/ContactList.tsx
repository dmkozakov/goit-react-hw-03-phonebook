import { ContactName } from './ContactName.styled';
import { ContactsList } from './ContactList.styled';
import { MouseEvent } from 'react';
import { IContact } from 'interfaces/IContact';

interface Props {
  filteredContacts: IContact[];
  onRemoveContact: (e: MouseEvent<HTMLButtonElement>) => void;
}

export const ContactList = ({ filteredContacts, onRemoveContact }: Props) => {
  return (
    <ContactsList>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <div>
              <ContactName>{name}</ContactName>: <span>{number}</span>
            </div>
            <button type="button" data-id={id} onClick={onRemoveContact}>
              Delete
            </button>
          </li>
        );
      })}
    </ContactsList>
  );
};
