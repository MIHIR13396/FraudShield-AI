import { Transaction } from '../types';

interface TransactionMetrics {
  totalTransactions: number;
  flaggedTransactions: number;
  blockedAttempts: number;
}

// Store known devices (in a real app, this would be in a database)
const knownDevices = new Set(['Known Device']);
let metrics: TransactionMetrics = {
  totalTransactions: 0,
  flaggedTransactions: 0,
  blockedAttempts: 0
};

export const processTransaction = (transaction: Omit<Transaction, 'id' | 'status' | 'riskScore' | 'riskFactors'>): Transaction => {
  metrics.totalTransactions++;
  
  const riskFactors: string[] = [];
  let riskScore = 0;
  
  // Check amount
  if (transaction.amount > 10000) {
    riskScore += 30;
    riskFactors.push('Unusual large amount');
  } else if (transaction.amount > 5000) {
    riskScore += 20;
    riskFactors.push('Large amount');
  }
  
  // Check location
  if (transaction.location !== 'United States') {
    riskScore += 25;
    riskFactors.push('International transaction');
  }
  
  // Check device
  if (!knownDevices.has(transaction.deviceInfo)) {
    riskScore += 25;
    riskFactors.push('New device detected');
  }
  
  // Check transaction type
  if (transaction.type === 'transfer') {
    riskScore += 15;
    if (transaction.amount > 1000) {
      riskFactors.push('Large transfer');
    }
  }
  
  // Time-based risk (example: transactions outside business hours)
  const hour = transaction.timestamp.getHours();
  if (hour < 6 || hour > 22) {
    riskScore += 10;
    riskFactors.push('Outside normal hours');
  }
  
  // Determine transaction status
  let status: Transaction['status'];
  if (riskScore >= 80) {
    status = 'blocked';
    metrics.blockedAttempts++;
  } else if (riskScore >= 60) {
    status = 'flagged';
    metrics.flaggedTransactions++;
  } else {
    status = 'completed';
  }
  
  return {
    ...transaction,
    id: Math.random().toString(36).substr(2, 9),
    status,
    riskScore,
    riskFactors
  };
};

export const getMetrics = () => metrics;

// Reset metrics (for testing)
export const resetMetrics = () => {
  metrics = {
    totalTransactions: 0,
    flaggedTransactions: 0,
    blockedAttempts: 0
  };
};

// Testing functions
export const runFraudDetectionTests = () => {
  resetMetrics();
  const tests: { name: string; test: () => boolean }[] = [
    {
      name: 'Should block large international transfer from new device',
      test: () => {
        const transaction = processTransaction({
          amount: 15000,
          timestamp: new Date(),
          type: 'transfer',
          description: 'Test large international transfer',
          location: 'Unknown Location',
          deviceInfo: 'New Device'
        });
        return transaction.status === 'blocked' && transaction.riskScore >= 80;
      }
    },
    {
      name: 'Should allow normal transaction from known device',
      test: () => {
        const transaction = processTransaction({
          amount: 500,
          timestamp: new Date(),
          type: 'withdrawal',
          description: 'Test normal withdrawal',
          location: 'United States',
          deviceInfo: 'Known Device'
        });
        return transaction.status === 'completed' && transaction.riskScore < 60;
      }
    },
    {
      name: 'Should flag medium-risk transaction',
      test: () => {
        const transaction = processTransaction({
          amount: 7500,
          timestamp: new Date(),
          type: 'transfer',
          description: 'Test medium-risk transfer',
          location: 'United States',
          deviceInfo: 'New Device'
        });
        return transaction.status === 'flagged' && 
               transaction.riskScore >= 60 && 
               transaction.riskScore < 80;
      }
    },
    {
      name: 'Should increase metrics correctly',
      test: () => {
        const metrics = getMetrics();
        return metrics.totalTransactions === 3 && 
               metrics.flaggedTransactions >= 1 && 
               metrics.blockedAttempts >= 1;
      }
    }
  ];

  const results = tests.map(({ name, test }) => ({
    name,
    passed: test()
  }));

  return results;
};