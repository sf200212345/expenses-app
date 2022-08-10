import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AggregateItem = ({ text }) => {
    const { aggregate } = useContext(GlobalContext);

  return (
    <div className='item large'>
      <li>
        <div className="item-header">
          {text}
          <div className='right'>
            <span className='lbl count'>Count: </span>{aggregate[text].count}
          </div>
        </div>
        <div className="stats">
          <div className="stat-item">
            <span className='lbl'>Min: </span><div className='number-wrapper'><span className={aggregate[text].min < 0 ? "out" : "in"}>{aggregate[text].min < 0 ? "-" : "+"}${Math.abs(aggregate[text].min).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></div><span className='invisible'>o</span>
          </div>
          <div className="stat-item">
            <span className='lbl'>Max: </span><div className='number-wrapper'><span className={aggregate[text].max < 0 ? "out" : "in"}>{aggregate[text].max < 0 ? "-" : "+"}${Math.abs(aggregate[text].max).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></div><span className='invisible'>o</span>
          </div>
          <div className="stat-item">
            <span className='lbl'>Sum: </span><div className='number-wrapper'><span className={aggregate[text].sum < 0 ? "out" : "in"}>{aggregate[text].sum < 0 ? "-" : "+"}${Math.abs(aggregate[text].sum).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></div><span className='invisible'>o</span>
          </div>
          <div className="stat-item">
            <span className='lbl'>Avg: </span><div className='number-wrapper'><span className={aggregate[text].average < 0 ? "out" : "in"}>{aggregate[text].average < 0 ? "-" : "+"}${Math.abs(aggregate[text].average).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span></div><span className='invisible'>o</span>
          </div> 
        </div>
      </li>
    </div>
  );
}

export default AggregateItem