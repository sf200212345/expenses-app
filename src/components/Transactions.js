import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import OutsideClickHandler from 'react-outside-click-handler';

import TransactionItem from './TransactionItem';
import AggregateItem from './AggregateItem';

const Transactions = () => {
  const { transactions, aggregateArr, changeSort, alphabetSorted } = useContext(GlobalContext);

  const [searchText, setSearchText] = useState("");
  const [mode, setMode] = useState("A");
  const [isFocused, setFocus] = useState(false);

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
          <OutsideClickHandler onOutsideClick={() => setFocus(false)}>
            <input className='search rounded focused' type="text" placeholder='Search Transactions...' value={searchText} onChange={(e) => setSearchText(e.target.value)} autoComplete="off" onFocus={() => setFocus(true)} />
            <div className='suggestions-container search-suggestions'>
                {searchText !== "" && isFocused
                  ? (<ul className='suggestions'>
                      {alphabetSorted.filter(curr => curr.toLowerCase().startsWith(searchText.toLowerCase())).map(curr => (<li key={curr}>
                                                                                      <button type="button" className="suggestion-btn" onClick={() => {setSearchText(curr);setFocus(false);}}><span className='bold'>{curr.slice(0, searchText.length)}</span>{curr.slice(searchText.length)}</button>
                                                                                    </li>))}
                    </ul>)
                  : (<></>)}
              </div>
          </OutsideClickHandler>
          <div className='t-container'>
            <label htmlFor='sort'>Sort by:</label>
            <select id="sort" onChange={(e) => changeSort(e.target.value)}>
              {mode === "A"
                ? <><option value="LtS">Largest to Smallest</option>
                  <option value="StL">Smallest to Largest</option>
                  <option value="MR" selected>Most Recent</option>
                  <option value="LR">Least Recent</option>
                  <option value="AAlpha">Alphabet</option>
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
                  <option value="AAgg">Alphabet</option>
                  </>
              }
            </select>
          </div>
        </div>
        <ul className='history'>
          {mode === "A"
            ? transactions.filter((curr) => curr.text.toLowerCase().startsWith(searchText.toLowerCase())).map((curr) => (<TransactionItem key={curr.id} info={curr} length={searchText.length} />))
            : aggregateArr.filter((curr) => curr.toLowerCase().startsWith(searchText.toLowerCase())).map((curr) => (<AggregateItem key={curr} text={curr} length={searchText.length} />))
          } 
        </ul>
    </div>
  )
}

export default Transactions