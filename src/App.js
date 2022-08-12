import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import Totals from './components/Totals';
import Transactions from './components/Transactions';
import AddTransactions from './components/AddTransactions';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <Totals />
      <Transactions />
      <AddTransactions />
    </GlobalProvider>
  );
}

export default App;
