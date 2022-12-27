import React, { useState } from 'react';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(value => value + 1);
  };

  const decrease = () => {
    setCounter(value => value - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div className='counter-container'>
      <h1>React Counter</h1>
      <span className="counter-value">{counter}</span>
      <div className="button-container">
        <button className="counter-button" onClick={decrease}>-</button>
        <button className="counter-reset" onClick={reset}>Reset</button>
        <button className="counter-button" onClick={increase}>+</button>
      </div>
    </div>
  );
};
