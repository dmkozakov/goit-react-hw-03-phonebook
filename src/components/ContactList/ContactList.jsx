import PropTypes from 'prop-types';
import { ContactName } from './ContactName.styled';
import { ContactsList } from './ContactList.styled';

export const ContactList = ({ filteredContacts, onRemoveContact }) => {
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

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
