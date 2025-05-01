import React from 'react';
import AssetInputForm from '../components/risk/AssetInputForm';
import RiskScoreDisplay from '../components/risk/RiskScoreDisplay';
import TransactionHistory from '../components/risk/TransactionHistory';
import { useRiskAnalyzer } from '../context/RiskAnalyzerContext';

const RiskAnalyzerDashboard: React.FC = () => {
  const { riskResult, loading, error } = useRiskAnalyzer();

  return (
    <div className="space-y-8">
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Risk Analyzer for Tokenized RWAs</h2>
        <p className="text-gray-600 mb-6">
          Analyze tokenized Real-World Assets by retrieving external off-chain data, 
          calculating a risk score, and submitting the assessment to the XDC blockchain.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="ios-card p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Asset Input</h3>
            <AssetInputForm />
          </div>
          
          <div className="ios-card p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">
              {riskResult ? 'Risk Assessment Results' : 'Analysis Results'}
            </h3>
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-2xl px-4 py-3 mb-4">
                {error}
              </div>
            )}
            {loading ? (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="text-gray-600">Analyzing risk and submitting to blockchain...</p>
              </div>
            ) : riskResult ? (
              <RiskScoreDisplay result={riskResult} />
            ) : (
              <div className="text-center py-12 text-gray-500">
                <p>Submit an asset for risk analysis to see results here.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Transaction History</h2>
        <TransactionHistory />
      </section>
    </div>
  );
};

export default RiskAnalyzerDashboard;