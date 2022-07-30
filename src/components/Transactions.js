import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import TransactionItem from './TransactionItem';

const Transactions = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div className='component'>
        <h3>Transaction History</h3>
        <ul className='history'>
            {transactions.map((curr) => (<TransactionItem key={curr.id} info={curr} />))}
        </ul>
    </div>
  )
}

export default Transactions