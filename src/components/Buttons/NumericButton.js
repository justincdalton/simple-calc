import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

export default function NumericButton({ value, onClick }) {
  return (
    <Button onClick={onClick.bind(this, value)}>{value}</Button>
  );
}

NumericButton.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
}
