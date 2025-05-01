import React from 'react';
import TransactionHistory from '../components/risk/TransactionHistory';

const History: React.FC = () => {
  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">Transaction History</h1>
        <p className="text-gray-600 mb-8">
          View all past risk assessments and their blockchain transactions.
        </p>
        <TransactionHistory />
      </section>
    </div>
  );
};

export default History;