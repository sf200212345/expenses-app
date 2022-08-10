import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import OutsideClickHandler from 'react-outside-click-handler';

const AddTransactions = () => {

    const { addTransaction, nextID, changeSort, alphabetSorted } = useContext(GlobalContext);

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
        <form onSubmit={submit} autoComplete="off" >
            <label htmlFor="text">Classify Transaction Type:</label>
            <OutsideClickHandler onOutsideClick={() => setFocus(false)}>
              <input type="text" className='rounded focused' required id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Transaction Type..." onFocus={() => setFocus(true)} />
              <div className='suggestions-container'>
                {text !== "" && isFocused
                  ? (<ul className='suggestions'>
                      {alphabetSorted.filter(curr => curr.toLowerCase().startsWith(text.toLowerCase())).map(curr => (<li key={curr}>
                                                                                      <button type="button" className="suggestion-btn" onClick={() => {setText(curr);setFocus(false);}}><span className='bold'>{curr.slice(0, text.length)}</span>{curr.slice(text.length)}</button>
                                                                                    </li>))}
                    </ul>)
                  : (<></>)}
              </div>
            </OutsideClickHandler>
            <label htmlFor="number">Enter Amount:</label>
            <input type="number" className='rounded' required id="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder="Enter Amount..." />
            <div className="btns">
              <button className='in submit-btn rounded' type="submit" value="income">Add as Income</button>
              <button className="out submit-btn rounded" type="submit" value="expense">Add as Expense</button>
            </div>
        </form>
    </div>
  )
}

export default AddTransactions