import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Totals from './components/Totals';

import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Balance />
        <Totals />
      </div>
    </div>
  );
}

export default App;
