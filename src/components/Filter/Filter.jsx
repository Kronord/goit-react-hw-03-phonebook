import React from 'react';
import propTypes from 'prop-types';
import s from './Filter.module.css';

const Filter = ({ filter, id, label, onChange }) => {
  return (
    <div className={s.wrapper}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        type="text"
        id={id}
        value={filter}
        onChange={onChange}
        className={s.input}
      />
    </div>
  );
};

Filter.propTypes = {
  filter: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

export default Filter;
