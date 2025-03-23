import React from 'react';
import TransactionHistory from '../components/TransactionHistory';

const SomePage = () => {
  const transactions = [
    { id: '1', type: 'Invoice', amount: '200.00', currency: 'USD' },
    { id: '2', type: 'Withdrawal', amount: '100.00', currency: 'EUR' },
  ];

  return <TransactionHistory transactions={transactions} />;
};

export default SomePage;
