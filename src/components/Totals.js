import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Totals = () => {
  const allNumbers = useContext(GlobalContext).transactions.map(curr => curr.number);

  const income = allNumbers.filter(curr => curr > 0).reduce((prev, curr) => prev + curr, 0).toFixed(2);
  const expenses = Math.abs(allNumbers.filter(curr => curr < 0).reduce((prev, curr) => prev + curr, 0)).toFixed(2);

  return (
    <div className="totals component">
        <div className="income">
            <h4>Income</h4>
            <p className="money in">${income}</p>
        </div>
        <div className="expenses">
            <h4>Expenses</h4>
            <p className="money out">${expenses}</p>
        </div>
    </div>
  )
}

export default Totals