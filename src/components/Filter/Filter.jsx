import PropTypes from 'prop-types';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <>
      <label>
        <p>Filter contacts by name</p>
        <input type="text" value={filter} onChange={changeFilter} />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
