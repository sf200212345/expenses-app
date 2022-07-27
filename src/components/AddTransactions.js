import React, { useState } from 'react'

const AddTransactions = () => {
    const [text, setText] = useState("");
    const [number, setNumber] = useState(0);

  return (
    <div>
        <h3>Add Transactions</h3>
        <form>
            <label htmlFor="text">Classify Transaction Type:</label>
            <input type="text" id="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter Text..." />
            <label htmlFor="number">Enter Amount Spent:</label>
            <input type="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button>Add</button>
        </form>
    </div>
  )
}

export default AddTransactions