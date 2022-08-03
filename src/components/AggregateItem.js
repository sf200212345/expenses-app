import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AggregateItem = ({ text }) => {
    const { aggregate } = useContext(GlobalContext);

  return (
    <div className='item'>
      <li>
        <div className='aggregateItem'>
          {text}
        </div>
        <div className='aggregateItem'>
          <span className='lbl'>Min: </span><span className={aggregate[text].min < 0 ? "out" : "in"}>{aggregate[text].min < 0 ? "-" : "+"}${Math.abs(aggregate[text].min)}</span>
        </div>
        <div className='aggregateItem'>
          <span className='lbl'>Max: </span><span className={aggregate[text].max < 0 ? "out" : "in"}>{aggregate[text].max < 0 ? "-" : "+"}${Math.abs(aggregate[text].max)}</span>
        </div>
        <div className='aggregateItem'>
          <span className='lbl'>Sum: </span><span className={aggregate[text].sum < 0 ? "out" : "in"}>{aggregate[text].sum < 0 ? "-" : "+"}${Math.abs(aggregate[text].sum)}</span>
        </div>
        <div className='aggregateItem'>
          <span className='lbl'>Avg: </span><span className={aggregate[text].average < 0 ? "out" : "in"}>{aggregate[text].average < 0 ? "-" : "+"}${Math.abs(aggregate[text].average)}</span>
        </div>
        <div className='aggregateItem'>
          <span className='lbl'>Count: </span>{aggregate[text].count}
        </div>
      </li>
    </div>
  );
}

export default AggregateItem