import React from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme } from 'styled-components';

const Button = withTheme(styled.button`
  background: white;
  color: ${props => props.theme.palette.primary};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid ${props => props.theme.palette.primary};
  border-radius: 3px;
`);

const Counter = ({ counter, increment, decrement }) => {
  return (
    <div style={{ display: 'flex' }}>
      <span>{counter}</span>
      <div>
        <Button type="button" onClick={increment}>
          INCREMENT
        </Button>
        <Button type="button" onClick={decrement}>
          DECREMENT
        </Button>
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
