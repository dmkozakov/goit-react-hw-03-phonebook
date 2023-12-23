import PropTypes from 'prop-types';
import { ChangeEvent } from 'react';

interface FilterProps {
  filter: string;
  changeFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Filter = ({ filter, changeFilter }: FilterProps) => {
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
