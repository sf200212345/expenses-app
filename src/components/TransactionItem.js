import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const TransactionItem = ({ info }) => {
    const { deleteTransaction, frequencies, changeSort } = useContext(GlobalContext);

    const sign = info.number < 0 ? "-" : "+";
    const cls = info.number < 0 ? "negative" : "positive";

    const clicked = () => {
      deleteTransaction(info);
      changeSort("R");
    }

  return (
    <div className='item'>
      <div className='freq'><span>{frequencies[info.text]}x</span></div>
      <li>
        {info.text}<span className={cls}>{sign}${Math.abs(info.number)}</span>
      </li>
      <button className='btn' onClick={clicked}>X</button>
    </div>
  )
}

export default TransactionItem