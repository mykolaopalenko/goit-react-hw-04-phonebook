import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { PhoneTitle, Message } from './ContactList/ContactList.styled';
import Filter from './Filter/Filter';
import useLocalStorage from './LocalStorage/LocalStorage';

// const initialContacts = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = (name, number) => {
    const normalizedName = name.toLowerCase();

    if (contacts.find(({ name }) => name.toLowerCase() === normalizedName)) {
      return toast.error(`${name} is already in contacts`);
    }

    const contact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prevState => [...prevState, contact]);
  };

  const filterSearch = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = contactId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== contactId)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div>
      <PhoneTitle>Phonebook</PhoneTitle>
      <ContactForm onSubmit={addContact} />
      <PhoneTitle>Contacts</PhoneTitle>
      <Filter value={filter} onChange={filterSearch} />
      {visibleContacts.length !== 0 ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <Message>No contacts added yet!</Message>
      )}
      <ToastContainer style={{ fontSize: '20px' }} />
    </div>
  );
};
