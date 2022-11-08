import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import { ContactName, ContactStyle, DeleteBtn } from './ContactList.styled';

const ContactItem = ({ name, number, onDelete }) => {
  return (
    <>
      <ContactName>
        <Avatar size="40" name={name} round={true} />
        <ContactStyle>
          {name}: {number}
        </ContactStyle>
      </ContactName>
      <DeleteBtn   onClick={onDelete} children="Delete" type="button" >
        Delete
      </DeleteBtn>
    </>
  );
};

ContactItem.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
