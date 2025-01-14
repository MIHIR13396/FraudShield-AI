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

### Input
```json
{
  "transaction_id": "12345",
  "amount": 10000,
  "device": "new",
  "location": "international",
  "risk_level": "high"
}
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

 ## Preview

![Transaction Metrics of FRAUD DETECTION SYSTEM WEBPAGE ]("C:\Users\mihir\Pictures\Screenshots\Screenshot (62).png")

![Fraud Detection Process DETECT AND BLOCKED]("C:\Users\mihir\Pictures\Screenshots\Screenshot (63).png")

![Fraud Detection Process CONFIRMED AND SUCCESSFULLY COMPLETED]("C:\Users\mihir\Pictures\Screenshots\Screenshot (63).png")

---

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact

For questions or support, contact (mailto:mihirsinghofficial10@gmail.com).
