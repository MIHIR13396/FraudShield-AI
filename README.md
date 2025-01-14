# Fraud Detection System for Banking Sector

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

- [Node.js](https://nodejs.org/)
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

## Example Usage

### DASHBOARD

```txt

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

### Output
```json
{
  "transaction_id": "12345",
  "status": "blocked",
  "reason": "Large international transfer from a new device"
}
```

---

### Preview

## Transaction Metrics of FRAUD DETECTION SYSTEM WEBPAGE 

![Screenshot (62)](https://github.com/user-attachments/assets/8f0cd9b5-f88b-4a1e-9c30-b4484b53be11)

![Fraud Detection Process DETECT AND BLOCKED]

![Fraud Detection Process CONFIRMED AND SUCCESSFULLY COMPLETED]

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For questions or support, contact (mailto:mihirsinghofficial10@gmail.com).
