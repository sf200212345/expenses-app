import React from 'react'

const TransactionItem = ({ info }) => {
    const sign = info.number < 0 ? "-" : "+";
    const cls = info.number < 0 ? "negative" : "positive";

  return (
    <li className={cls}>{info.text}<span>{sign}${Math.abs(info.number)}</span></li>
  )
}

export default TransactionItem