import React from 'react';
import PropTypes from 'prop-types';

export default function GridItem({
  children,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd
}) {
  const style = {
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd
  };

  return <div className="grid-item" style={style}>{children}</div>;
}

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  gridColumnStart: PropTypes.number,
  gridColumnEnd: PropTypes.number,
  gridRowStart: PropTypes.number,
  gridRowEnd: PropTypes.number,
}
