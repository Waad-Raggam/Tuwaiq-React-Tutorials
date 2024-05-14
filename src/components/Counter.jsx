// counter exercise using setState
// answered by gpt but you already know
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      {/* <button onClick={decrement}>-</button> */}
    </div>
  );
}

export default Counter;
