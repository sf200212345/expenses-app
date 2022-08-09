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
            <span className='lbl'>Min: </span><span className={aggregate[text].min < 0 ? "out" : "in"}>{aggregate[text].min < 0 ? "-" : "+"}${Math.abs(aggregate[text].min)}</span><span className='invisible'>o</span>
          </div>
          <div className="stat-item">
            <span className='lbl'>Max: </span><span className={aggregate[text].max < 0 ? "out" : "in"}>{aggregate[text].max < 0 ? "-" : "+"}${Math.abs(aggregate[text].max)}</span><span className='invisible'>o</span>
          </div>
          <div className="stat-item">
            <span className='lbl'>Sum: </span><span className={aggregate[text].sum < 0 ? "out" : "in"}>{aggregate[text].sum < 0 ? "-" : "+"}${Math.abs(aggregate[text].sum)}</span><span className='invisible'>o</span>
          </div>
          <div className="stat-item">
            <span className='lbl'>Avg: </span><span className={aggregate[text].average < 0 ? "out" : "in"}>{aggregate[text].average < 0 ? "-" : "+"}${Math.abs(aggregate[text].average)}</span><span className='invisible'>o</span>
          </div> 
        </div>
      </li>
    </div>
  );
}

export default AggregateItem