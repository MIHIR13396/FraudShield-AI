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