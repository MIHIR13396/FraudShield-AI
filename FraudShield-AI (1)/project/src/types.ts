export interface Transaction {
  id: string;
  amount: number;
  timestamp: Date;
  type: 'deposit' | 'withdrawal' | 'transfer';
  status: 'pending' | 'completed' | 'flagged' | 'blocked';
  description: string;
  riskScore: number;
  location: string;
  deviceInfo: string;
  riskFactors: string[];
}

export interface FraudMetrics {
  totalTransactions: number;
  flaggedTransactions: number;
  blockedAttempts: number;
  riskLevel: 'low' | 'medium' | 'high';
}