import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = () => {

    const { addTransaction, nextID } = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [number, setNumber] = useState(0);

    const submit = e => {
      e.preventDefault();

      addTransaction({
        id: nextID,
        text,
        number: +number
      })
    }

  return (
    <div>
        <h3>Add Transactions</h3>
        <form onSubmit={submit}>
            <label htmlFor="text">Classify Transaction Type:</label>
            <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
            <label htmlFor="number">Enter Amount Spent:</label>
            <input type="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    </div>
  )
}

export default AddTransactions