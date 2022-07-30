import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = () => {

    const { addTransaction, nextID } = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [number, setNumber] = useState("");

    const submit = e => {
      e.preventDefault();

      addTransaction({
        id: nextID,
        text,
        number: +number
      })
    }

  return (
    <div className='component'>
        <h3>Add Transactions</h3>
        <form onSubmit={submit}>
            <label htmlFor="text">Classify Transaction Type:</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
            <label htmlFor="number">Enter Amount (negative = expense, positive = income):</label>
            <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Amount..." />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddTransactions