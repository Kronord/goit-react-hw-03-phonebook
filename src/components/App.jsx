import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import s from './App.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
    console.log(parsedContacts);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  contactsChange = (newName, number) => {
    const newObj = { id: nanoid(), name: newName, number: number };
    if (
      this.state.contacts.find(
        ({ name }) => newName.toLowerCase() === name.toLowerCase()
      )
    ) {
      return alert(`${newName} is already in contacts`);
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
