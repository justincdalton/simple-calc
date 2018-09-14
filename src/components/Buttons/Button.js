import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default function Button({ children, color, ...rest }) {
  return <button className={`button ${color}`} {...rest}>{children}</button>
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
}
