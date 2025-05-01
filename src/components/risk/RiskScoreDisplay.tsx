import React from 'react';
import { RiskResult } from '../../types';
import RiskScoreGauge from './RiskScoreGauge';
import { ExternalLink } from 'lucide-react';

interface RiskScoreDisplayProps {
  result: RiskResult;
}

const RiskScoreDisplay: React.FC<RiskScoreDisplayProps> = ({ result }) => {
  const { 
    assetId, 
    assetType, 
    loanAmount, 
    riskScore, 
    marketData, 
    creditScore, 
    txHash
  } = result;

  const getRiskCategory = (score: number) => {
    if (score < 25) return { label: 'Low Risk', color: 'text-green-500' };
    if (score < 50) return { label: 'Moderate Risk', color: 'text-yellow-500' };
    if (score < 75) return { label: 'High Risk', color: 'text-orange-500' };
    return { label: 'Very High Risk', color: 'text-red-500' };
  };

  const riskCategory = getRiskCategory(riskScore);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-center mb-8">
        <RiskScoreGauge score={riskScore} />
        <h3 className={`text-xl font-semibold mt-4 ${riskCategory.color}`}>
          {riskCategory.label}
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="ios-label">Asset Details</h4>
          <div className="ios-card p-4 space-y-2">
            <p className="text-sm"><span className="font-medium text-gray-600">ID:</span> <span className="text-gray-900">{assetId}</span></p>
            <p className="text-sm"><span className="font-medium text-gray-600">Type:</span> <span className="text-gray-900">{assetType.charAt(0).toUpperCase() + assetType.slice(1)}</span></p>
            <p className="text-sm"><span className="font-medium text-gray-600">Loan Amount:</span> <span className="text-gray-900">${loanAmount.toLocaleString()}</span></p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="ios-label">Market Data</h4>
          <div className="ios-card p-4 space-y-2">
            <p className="text-sm"><span className="font-medium text-gray-600">Asset Value:</span> <span className="text-gray-900">${marketData.assetValue.toLocaleString()}</span></p>
            <p className="text-sm"><span className="font-medium text-gray-600">Volatility:</span> <span className="text-gray-900">{marketData.volatilityIndex}/100</span></p>
            <p className="text-sm"><span className="font-medium text-gray-600">Liquidity:</span> <span className="text-gray-900">{marketData.liquidityScore}/100</span></p>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="ios-label">Risk Factors</h4>
        <div className="ios-card p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium text-gray-600">Credit Score:</span> <span className="text-gray-900">{creditScore}/850</span></p>
              <p className="text-sm"><span className="font-medium text-gray-600">Economic Outlook:</span> <span className="text-gray-900">{marketData.macroTrends.economicOutlook}</span></p>
            </div>
            <div className="space-y-2">
              <p className="text-sm"><span className="font-medium text-gray-600">Sector Performance:</span> <span className="text-gray-900">{marketData.macroTrends.sectorPerformance}/100</span></p>
              <p className="text-sm"><span className="font-medium text-gray-600">Collateral Ratio:</span> <span className="text-gray-900">{(marketData.assetValue / loanAmount).toFixed(2)}</span></p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <h4 className="ios-label">Blockchain Transaction</h4>
        <div className="ios-card p-4">
          <p className="text-sm mb-2"><span className="font-medium text-gray-600">Transaction Hash:</span></p>
          <div className="flex items-center bg-gray-50 rounded-xl p-3">
            <code className="text-xs text-gray-700 font-mono flex-1 overflow-x-auto">
              {txHash}
            </code>
            <a 
              href={`https://explorer.apothem.network/tx/${txHash}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-blue-500 hover:text-blue-600 transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskScoreDisplay;