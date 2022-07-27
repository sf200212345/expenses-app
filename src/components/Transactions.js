import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import TransactionItem from './TransactionItem';

const Transactions = () => {
  const { transactions } = useContext(GlobalContext)

  return (
    <div>
        <h3>Transaction History</h3>
        <ul id="list">
            {transactions.map((curr) => (<TransactionItem key={curr.id} info={curr} />))}
        </ul>
    </div>
  )
}

export default Transactions