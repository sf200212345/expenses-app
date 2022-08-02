import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

import TransactionItem from './TransactionItem';
import FrequencyItem from './FrequencyItem';

const Transactions = () => {
  const { transactions, changeSort } = useContext(GlobalContext);

  const [searchText, setSearchText] = useState("");
  const [mode, setMode] = useState("A");

  return (
    <div className='component'>
        <div className='s-header'>
          <h3 className='TH'>Transaction History</h3>
          <div className='t-container'>
            <label htmlFor='modes'>View Transactions by:</label>
            <select id="modes" onChange={(e) => setMode(e.target.value)}>
              <option value="A">Amount</option>
              <option value="F">Frequency</option>
            </select>
          </div>
        </div>
        <div className='s-header'>
          <input className='search' type="text" placeholder='Search Transactions...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <div className='t-container'>
            <label htmlFor='sort'>Sort by:</label>
            {/*make sure the sorting is consistent as you change from amount to frequency and vice versa*/}
            <select id="sort" onChange={(e) => changeSort(e.target.value)}>
              {mode === "A"
                ? <><option value="MR">Most Recent</option>
                  <option value="LR">Least Recent</option>
                  <option value="LS">Largest to Smallest</option>
                  <option value="SL">Smallest to Largest</option></>
                : <><option value="MF">Most Frequent</option>
                  <option value="LF">Least Frequent</option></>
              }
            </select>
          </div>
        </div>
        <ul className='history'>
          {mode === "A"
            ? transactions.filter((curr) => curr.text.includes(searchText)).map((curr) => (<TransactionItem key={curr.id} info={curr} />))
            : <span>hi</span>
          } 
        </ul>
    </div>
  )
}

export default Transactions