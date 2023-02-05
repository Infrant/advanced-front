import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <h1 onClick={() => setCount(prev => prev + 1)}>
      {count}
    </h1>
  );
};

