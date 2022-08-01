import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import TransactionItem from './TransactionItem';

const Transactions = () => {
  const { transactions, changeSort } = useContext(GlobalContext);

  return (
    <div className='component'>
        <h3>Transaction History</h3>
        <div className='sortContainer'>
          <label htmlFor='sort'>Sort: </label>
          <select id="sort" onChange={(e) => changeSort(e.target.value)}>
            <option value="MR">Most Recent</option>
            <option value="LR">Least Recent</option>
            <option value="LS">Largest to Smallest</option>
            <option value="SL">Smallest to Largest</option>
            <option value="MF">Most Frequent</option>
            <option value="LF">Least Frequent</option>
          </select>
        </div>
        <ul className='history'>
            {transactions.map((curr) => (<TransactionItem key={curr.id} info={curr} />))}
        </ul>
    </div>
  )
}

export default Transactions