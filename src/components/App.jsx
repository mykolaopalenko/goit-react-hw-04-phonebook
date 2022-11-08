import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { PhoneTitle, Message } from './ContactList/ContactList.styled';
import Filter from './Filter/Filter';
import useLocalStorage from './LocalStorage/LocalStorage';

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
      <ToastContainer autoClose={2000} />
    </div>
  );
};
