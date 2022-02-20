import propTypes from 'prop-types';
import React from 'react';
import s from './ListItem.module.css';

const ListItem = ({ name, number, id, onDeleteContact }) => (
  <li className={s.item}>
    {name}: {number}
    <button
      type="button"
      onClick={() => onDeleteContact(id)}
      className={s.btn}>
      Delete
    </button>
  </li>
);

ListItem.propTypes = {
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onDeleteContact: propTypes.func.isRequired,
};

export default ListItem;
