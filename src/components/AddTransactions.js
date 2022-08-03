import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = () => {

    const { addTransaction, nextID, changeSort } = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [number, setNumber] = useState("");

    const submit = e => {
      e.preventDefault();
      if (e.nativeEvent.submitter.value === "income") {
        addTransaction({
          id: nextID,
          text,
          number: +number
        });
      }
      else {
        addTransaction({
          id: nextID,
          text,
          number: +number * -1
        });
      }
      changeSort("R");
    }

  return (
    <div className='component'>
        <h3>Add Transactions</h3>
        <form onSubmit={submit}>
            <label htmlFor="text">Classify Transaction Type:</label>
            <input type="text" required id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
            <label htmlFor="number">Enter Amount:</label>
            <input type="number" required id="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Amount..." />
            <div className="btns">
              <button className='in' type="submit" value="income">Add as Income</button>
              <button className="out" type="submit" value="expense">Add as Expense</button>
            </div>
        </form>
    </div>
  )
}

export default AddTransactions