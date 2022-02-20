import React from 'react';
import propTypes from 'prop-types';
import ListItem from '../ListItem/ListItem';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={s.list}>
      {contacts.map(({ name, id, number }) => (
        <ListItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={onDeleteContact}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(propTypes.object),
  onDeleteContact: propTypes.func.isRequired,
};

export default ContactList;
