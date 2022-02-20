import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  contactsChange = (newName, number) => {
    const newObj = { id: nanoid(), name: newName, number: number };
    if (this.state.contacts.find(({name}) => newName.toLowerCase() === name.toLowerCase())) {
      return alert(`${newName} is already in contacts`)
    }
    this.setState(({ contacts }) => ({ contacts: [...contacts, newObj] }));
  };

  filterStateChange = evt => {
    this.setState({
      filter: evt.currentTarget.value,
    });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizedFilter = filter.toLowerCase();
    const filterContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div className={s.wrapper}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm change={this.contactsChange} />

        <h2 className={s.title}>Contacts</h2>
        <Filter
          filter={filter}
          label="Find contacts by name"
          id={nanoid()}
          onChange={this.filterStateChange}
        />
        <ContactList
          contacts={filterContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export { App };
