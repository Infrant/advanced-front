import React, {useState} from 'react';
import style from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  return (
    <h1 className={style.counter} onClick={() => setCount(prev => prev + 1)}>
      {count}
    </h1>
  );
};

