import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

export default function Input({ inputRef, ...rest }) {
  return (
    <input className="input" ref={inputRef} {...rest} />
  );
}

Input.propTypes = {
  inputRef: PropTypes.func
}
