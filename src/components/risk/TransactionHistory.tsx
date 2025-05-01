import React from 'react';
import { useRiskAnalyzer } from '../../context/RiskAnalyzerContext';
import { ExternalLink } from 'lucide-react';

const TransactionHistory: React.FC = () => {
  const { transactions } = useRiskAnalyzer();

  if (!transactions.length) {
    return (
      <div className="ios-card p-8 text-center">
        <p className="text-gray-500">No transactions yet. Analyze an asset to see transaction history.</p>
      </div>
    );
  }

  const getRiskColor = (score: number) => {
    if (score < 25) return 'bg-green-50 text-green-700';
    if (score < 50) return 'bg-yellow-50 text-yellow-700';
    if (score < 75) return 'bg-orange-50 text-orange-700';
    return 'bg-red-50 text-red-700';
  };

  return (
    <div className="ios-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asset ID
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Loan Amount
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Risk Score
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Transaction
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {transactions.map((tx, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {tx.assetId}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {tx.assetType.charAt(0).toUpperCase() + tx.assetType.slice(1)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  ${tx.loanAmount.toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getRiskColor(tx.riskScore)}`}>
                    {tx.riskScore}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                  {new Date(tx.timestamp).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <a 
                    href={`https://explorer.apothem.network/tx/${tx.txHash}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 transition-colors inline-flex items-center"
                  >
                    <span className="mr-1">View</span>
                    <ExternalLink size={14} />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionHistory;