import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

import TransactionItem from './TransactionItem';
import AggregateItem from './AggregateItem';

const Transactions = () => {
  const { transactions, aggregateArr, changeSort } = useContext(GlobalContext);

  const [searchText, setSearchText] = useState("");
  const [mode, setMode] = useState("A");

  const changeMode = (e) => {
    if (e.target.value === "A") {
      changeSort("MR");
    }
    else {
      changeSort("LC");
    }
    setMode(e.target.value);
  };

  return (
    <div className='component'>
        <div className='s-header'>
          <h3 className='TH'>Transaction History</h3>
          <div className='t-container'>
            <label htmlFor='modes'>View Transactions by:</label>
            <select id="modes" onChange={changeMode}>
              <option value="A">Amount</option>
              <option value="Agg">Aggregate</option>
            </select>
          </div>
        </div>
        <div className='s-header'>
          <input className='search' type="text" placeholder='Search Transactions...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
          <div className='t-container'>
            <label htmlFor='sort'>Sort by:</label>
            <select id="sort" onChange={(e) => changeSort(e.target.value)}>
              {mode === "A"
                ? <><option value="LtS">Largest to Smallest</option>
                  <option value="StL">Smallest to Largest</option>
                  <option value="MR" selected>Most Recent</option>
                  <option value="LR">Least Recent</option>
                  </>
                : <><option selected value="LC">Largest Count</option>
                  <option value="SC">Smallest Count</option>
                  <option value="LS">Largest Sum</option>
                  <option value="SS">Smallest Sum</option>
                  <option value="LA">Largest Average</option>
                  <option value="SA">Smallest Average</option>
                  <option value="LM">Largest Max</option>
                  <option value="SM">Smallest Max</option>
                  <option value="Lm">Largest Min</option>
                  <option value="Sm">Smallest Min</option>
                  </>
              }
            </select>
          </div>
        </div>
        <ul className='history'>
          {mode === "A"
            ? transactions.filter((curr) => curr.text.includes(searchText)).map((curr) => (<TransactionItem key={curr.id} info={curr} />))
            : aggregateArr.filter((curr) => curr.includes(searchText)).map((curr) => (<AggregateItem key={curr} text={curr} />))
          } 
        </ul>
    </div>
  )
}

export default Transactions