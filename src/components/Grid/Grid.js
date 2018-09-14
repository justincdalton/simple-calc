import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

export default function Grid({ children, columns = 3 }) {
  const style = {
    gridTemplateColumns: columns
  };

  if (Number.isInteger(columns)) {
    style.gridTemplateColumns = '';

    for (let i = 1; i <= columns; i++) {
      style.gridTemplateColumns += '1fr ';
    }
  }

  return <div className="grid-wrapper" style={style}>{children}</div>;
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  columns: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}
