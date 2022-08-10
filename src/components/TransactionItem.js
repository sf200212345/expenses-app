import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = ({ info, length }) => {
    const { deleteTransaction, changeSort } = useContext(GlobalContext);

    const sign = info.number < 0 ? "-" : "+";
    const cls = info.number < 0 ? "negative" : "positive";

    const clicked = () => {
      deleteTransaction(info);
      changeSort("R");
    }

  return (
    <div className='item rounded'>
      <li>
        <span className='bold'>{info.text.slice(0, length)}</span>{info.text.slice(length)}<span className={cls}>{sign}${Math.abs(info.number).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
      </li>
      <button className='btn' onClick={clicked}>X</button>
    </div>
  )
}

export default TransactionItem