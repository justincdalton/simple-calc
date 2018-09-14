import React from 'react';
import PropTypes from 'prop-types';
import './calculator.css';

export default function CalculatorWrapper({children}) {
  return <div className="calculator">{children}</div>
}

CalculatorWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
