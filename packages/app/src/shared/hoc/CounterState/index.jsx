import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const CounterState = Component => ({ defaultState = 0, ...otherProps }) => {
  const [counter, setCounter] = useState(defaultState);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);

  return (
    <Component
      counter={counter}
      increment={increment}
      decrement={decrement}
      {...otherProps}
    />
  );
};

export default CounterState;
