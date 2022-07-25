import React from 'react'

const Totals = () => {
  return (
    <div className="totals">
        <div className="income">
            <h4>Income</h4>
            <p id="money-in" className="money in">+$0.00</p>
        </div>
        <div className="expenses">
            <h4>Expenses</h4>
            <p id="money-out" className="money out">-$0.00</p>
        </div>
    </div>
  )
}

export default Totals