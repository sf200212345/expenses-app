import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = transactions.map(curr => curr.number).reduce((prev, curr) => prev + curr, 0).toFixed(2);
  
  return (
    <div className='component'>
        <h3>Current balance</h3>
        <h2>${total}</h2>
    </div>
  )
}

export default Balance