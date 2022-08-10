import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const total = transactions.map(curr => curr.number).reduce((prev, curr) => prev + curr, 0);
  
  return (
    <div className='component'>
        <h3>Current balance</h3>
        <h2>${total.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h2>
    </div>
  )
}

export default Balance