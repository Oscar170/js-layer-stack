import React from 'react';
import PropTypes from 'prop-types';

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div style={{ display: 'flex' }}>
      <span>{counter}</span>
      <div>
        <button type="button" onClick={increment}>
          INCREMENT
        </button>
        <button type="button" onClick={decrement}>
          DECREMENT
        </button>
      </div>
    </div>
  );
};

Counter.propTypes = {
  counter: PropTypes.number,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};

Counter.defaultProps = {
  counter: 0,
};

export default Counter;
