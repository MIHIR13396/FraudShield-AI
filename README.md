# FRAUD SHIELD AI 

## Fraud Detection System for Banking Sector

This Fraud Detection System is designed to identify, flag, and block fraudulent transactions in real-time. It provides key metrics such as total transactions, flagged transactions, blocked attempts, and risk levels of transactions to prevent unauthorized or risky activities in the banking sector.

---

## Key Features

- **Real-time Transaction Monitoring:** Tracks all banking transactions and evaluates them based on predefined fraud detection criteria.
- **Flag and Block Transactions:** Identifies high-risk transactions, flags suspicious ones, and blocks fraudulent attempts.
- **Risk Level Assignment:** Assesses and categorizes transactions as low, medium, or high risk.
- **Comprehensive Metrics:** Provides detailed statistics on total transactions, flagged transactions, and blocked attempts.

---

## Fraud Detection Criteria

1. Large international transfers from a new or unregistered device.
2. Transactions from high-risk locations or IP addresses.
3. Multiple rapid transactions from the same account.
4. Transactions exceeding the daily or account-defined limits.
5. Deviations from usual transaction patterns (e.g., new merchants, unusual amounts).

---

## Fraud Detection Tests

1. **Block large international transfer from new device**
   - Ensures high-value international transactions from unknown devices are blocked.
2. **Allow normal transactions from known devices**
   - Validates that routine transactions proceed without interruption.
3. **Flag medium-risk transactions**
   - Identifies and flags transactions that meet medium-risk criteria for review.
4. **Increase metrics correctly**
   - Confirms that all system metrics update accurately upon each transaction.

---

## System Usage in Banking

- **Fraud Prevention:** Mitigates financial losses by proactively blocking fraudulent activities.
- **Customer Security:** Enhances customer trust by securing their transactions.
- **Regulatory Compliance:** Ensures compliance with banking regulations and fraud detection mandates.
- **Operational Efficiency:** Reduces manual intervention through automated fraud detection.

---

## Getting Started

### Prerequisites

To run this project, you need to have the following installed:

- [React.js](https://Reactjs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)

### Installing

1. **Clone the repository:**
    ```sh
    git clone https://github.com/yourusername/fraud-detection-system.git
    cd fraud-detection-system
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up the environment:**
    Create a `.env` file in the root directory and add necessary configurations such as database credentials and API keys.

4. **Run database migrations (if applicable):**
    ```sh
    npm run migrate
    ```

### Running the Application

1. Open the project folder in Visual Studio Code.
2. Start the development server:
    ```sh
    npm start
    ```
3. Open your browser and navigate to `http://localhost:3000`.

### Testing the Application

Run the predefined tests to ensure the system functions correctly:

1. Execute the test suite:
    ```sh
    npm test
    ```
2. Verify the output to ensure all tests pass successfully.

---

## Example CODE's

### DASHBOARD

```tsx

import React from 'react';
import { BarChart3, Shield, AlertTriangle, Ban, Activity } from 'lucide-react';
import { FraudMetrics } from '../types';

const mockMetrics: FraudMetrics = {
  totalTransactions: 1247,
  flaggedTransactions: 23,
  blockedAttempts: 12,
  riskLevel: 'medium'
};

export const Dashboard = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Transactions"
          value={mockMetrics.totalTransactions}
          icon={<Activity className="w-6 h-6 text-blue-500" />}
          color="blue"
        />
        <MetricCard
          title="Flagged Transactions"
          value={mockMetrics.flaggedTransactions}
          icon={<AlertTriangle className="w-6 h-6 text-yellow-500" />}
          color="yellow"
        />
        <MetricCard
          title="Blocked Attempts"
          value={mockMetrics.blockedAttempts}
          icon={<Ban className="w-6 h-6 text-red-500" />}
          color="red"
        />
        <MetricCard
          title="Risk Level"
          value={mockMetrics.riskLevel.toUpperCase()}
          icon={<Shield className="w-6 h-6 text-green-500" />}
          color="green"
        />
      </div>
    </div>
  );
};

const MetricCard = ({ title, value, icon, color }: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}) => {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-${color}-500`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600">{title}</p>
          <p className="text-2xl font-semibold mt-1">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
};
```

### TRANSACTION

```tsx
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
```

---

### Preview

## Transaction Metrics of FRAUD DETECTION SYSTEM WEBPAGE 

![Screenshot (62)](https://github.com/user-attachments/assets/8f0cd9b5-f88b-4a1e-9c30-b4484b53be11)

## Fraud Detection Process DETECT AND BLOCKED

![Screenshot (63)](https://github.com/user-attachments/assets/78a549b5-7a78-4b2a-b378-9ed820ec8982)


## Fraud Detection Process CONFIRMED AND SUCCESSFULLY COMPLETED

![Screenshot (64)](https://github.com/user-attachments/assets/77ae37e6-898e-480a-b778-48338a84a1cf)

---


## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For questions or support, contact (mail to:mihirsinghofficial10@gmail.com).
