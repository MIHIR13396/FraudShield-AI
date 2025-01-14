// Simulated fraud detection logic
export const calculateRiskScore = (transaction: {
  amount: number;
  type: string;
  location: string;
}): number => {
  let score = 0;
  
  // Amount-based risk
  if (transaction.amount > 10000) score += 30;
  else if (transaction.amount > 5000) score += 20;
  else if (transaction.amount > 1000) score += 10;
  
  // Transaction type risk
  if (transaction.type === 'transfer') score += 15;
  
  // Location-based risk (simplified)
  if (transaction.location !== 'United States') score += 25;
  
  return Math.min(score, 100);
};

export const getFraudStatus = (riskScore: number): 'pending' | 'completed' | 'flagged' | 'blocked' => {
  if (riskScore >= 80) return 'blocked';
  if (riskScore >= 60) return 'flagged';
  return 'completed';
};