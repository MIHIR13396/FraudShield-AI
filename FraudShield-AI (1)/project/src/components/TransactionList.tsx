import React, { useState } from 'react';
import { Transaction } from '../types';
import { Shield, AlertCircle, Ban, X, AlertTriangle, Globe, Smartphone, Clock, DollarSign } from 'lucide-react';
import { processTransaction } from '../services/fraudDetection';

// Initial transactions
const initialTransactions: Transaction[] = [
  processTransaction({
    amount: 12500,
    timestamp: new Date(),
    type: 'transfer',
    description: 'Large international transfer',
    location: 'Unknown Location',
    deviceInfo: 'New Device'
  }),
  processTransaction({
    amount: 750,
    timestamp: new Date(),
    type: 'withdrawal',
    description: 'ATM Withdrawal',
    location: 'United States',
    deviceInfo: 'Known Device'
  })
];

export const TransactionList = () => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [selectedTransaction, setSelectedTransaction] = useState<Transaction | null>(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'blocked':
        return 'text-red-600 bg-red-50';
      case 'flagged':
        return 'text-yellow-600 bg-yellow-50';
      case 'completed':
        return 'text-green-600 bg-green-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'blocked':
        return <Ban className="w-4 h-4 mr-1" />;
      case 'flagged':
        return <AlertTriangle className="w-4 h-4 mr-1" />;
      case 'completed':
        return <Shield className="w-4 h-4 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedTransaction(transaction)}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{transaction.description}</p>
                <p className="text-sm text-gray-600">
                  {transaction.timestamp.toLocaleString()}
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold">${transaction.amount.toLocaleString()}</p>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${getStatusColor(transaction.status)}`}>
                  {getStatusIcon(transaction.status)}
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </span>
              </div>
            </div>
            <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Risk Score: {transaction.riskScore}
              </span>
              <span className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                {transaction.location}
              </span>
              <span className="flex items-center">
                <Smartphone className="w-4 h-4 mr-1" />
                {transaction.deviceInfo}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Transaction Details Modal */}
      {selectedTransaction && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">Transaction Details</h3>
              <button
                onClick={() => setSelectedTransaction(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Amount</p>
                  <p className="font-semibold text-lg">
                    ${selectedTransaction.amount.toLocaleString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Status</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-sm ${getStatusColor(selectedTransaction.status)}`}>
                    {getStatusIcon(selectedTransaction.status)}
                    {selectedTransaction.status.charAt(0).toUpperCase() + selectedTransaction.status.slice(1)}
                  </span>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Risk Factors</p>
                <div className="mt-1 space-y-1">
                  {selectedTransaction.riskFactors.map((factor, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <AlertCircle className="w-4 h-4 mr-2 text-yellow-500" />
                      {factor}
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Location</p>
                  <p className="flex items-center mt-1">
                    <Globe className="w-4 h-4 mr-2" />
                    {selectedTransaction.location}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Device</p>
                  <p className="flex items-center mt-1">
                    <Smartphone className="w-4 h-4 mr-2" />
                    {selectedTransaction.deviceInfo}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600">Time</p>
                <p className="flex items-center mt-1">
                  <Clock className="w-4 h-4 mr-2" />
                  {selectedTransaction.timestamp.toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};