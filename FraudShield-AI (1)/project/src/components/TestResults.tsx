import React from 'react';
import { runFraudDetectionTests } from '../services/fraudDetection';
import { CheckCircle, XCircle } from 'lucide-react';

export const TestResults = () => {
  const results = runFraudDetectionTests();
  
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mt-8">
      <h2 className="text-xl font-semibold mb-4">Fraud Detection Tests</h2>
      <div className="space-y-4">
        {results.map((result, index) => (
          <div 
            key={index}
            className={`p-4 rounded-lg ${
              result.passed ? 'bg-green-50' : 'bg-red-50'
            }`}
          >
            <div className="flex items-center">
              {result.passed ? (
                <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500 mr-2" />
              )}
              <span className={`font-medium ${
                result.passed ? 'text-green-700' : 'text-red-700'
              }`}>
                {result.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};