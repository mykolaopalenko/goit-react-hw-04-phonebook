import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import {
  FilterInput,
  FilterLabel,
  FilterContainer,
  FilterTitle,
} from './Filter.styled';

const Filter = ({ value, onChange }) => {
  const findInputId = nanoid();
  return (
    <FilterContainer>
      <FilterTitle htmlFor={findInputId}>Find contacts by name</FilterTitle>
      <FilterLabel >
        <FilterInput
          id={findInputId}
          type="text"
          value={value}
          onChange={onChange}
        />
      </FilterLabel>
    </FilterContainer>
  );
};

Filter.propTypes = {
   value: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
 };

export default Filter;
