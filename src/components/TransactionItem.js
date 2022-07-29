import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = ({ info }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = info.number < 0 ? "-" : "+";
    const cls = info.number < 0 ? "negative" : "positive";

  return (
    <li className={cls}>{info.text}<span>{sign}${Math.abs(info.number)}</span><button className='btn' onClick={() => deleteTransaction(info.id)}>X</button></li>
  )
}

export default TransactionItem