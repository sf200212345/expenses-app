import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransactions = () => {

    const { addTransaction, nextID, changeSort, aggregateArr } = useContext(GlobalContext);

    const [text, setText] = useState("");
    const [number, setNumber] = useState("");
    const [isFocused, setFocus] = useState(false);

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
        <form onSubmit={submit} autoComplete="off">
            <label htmlFor="text">Classify Transaction Type:</label>
            <input type="text" required id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} />
            <ul className='suggestions'>
              {text === "" || !isFocused ? <></> : aggregateArr.filter(curr => curr.includes(text)).map(curr => (<li><button type="button" value={curr} className="suggestion-btn" onClick={(e) => setText(e.target.value)}>{curr}</button></li>))}
            </ul>
            <label htmlFor="number">Enter Amount:</label>
            <input type="number" required id="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Amount..." />
            <div className="btns">
              <button className='in submit-btn' type="submit" value="income">Add as Income</button>
              <button className="out submit-btn" type="submit" value="expense">Add as Expense</button>
            </div>
        </form>
    </div>
  )
}

export default AddTransactions