import React from 'react';
import { FileText, Shield, Database, GitBranch, Calculator, History, AlertCircle } from 'lucide-react';

const Documentation: React.FC = () => {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section>
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">RiskAnalyzer Documentation</h1>
        <p className="text-gray-600 mb-8">
          A comprehensive guide to using the RiskAnalyzer platform for assessing tokenized Real-World Assets (RWAs) on the XDC blockchain.
        </p>

        <div className="grid gap-6">
          {/* Overview Section */}
          <div className="ios-card p-6">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-2 rounded-xl mr-4">
                <FileText className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Platform Overview</h2>
                <p className="text-gray-600">
                  RiskAnalyzer is a specialized platform designed for DeFi lenders, investors, and asset managers to evaluate 
                  the risk of tokenized real-world assets using advanced analytics and blockchain technology.
                </p>
              </div>
            </div>
            <div className="pl-16 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
              <ul className="list-disc text-gray-600 pl-5 space-y-2">
                <li>Real-time risk assessment of tokenized assets</li>
                <li>Blockchain-verified assessment records</li>
                <li>Comprehensive market data integration</li>
                <li>Historical transaction tracking</li>
                <li>Multi-factor risk analysis</li>
              </ul>
            </div>
          </div>

          {/* Asset Types Section */}
          <div className="ios-card p-6">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-2 rounded-xl mr-4">
                <Database className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Supported Asset Types</h2>
                <p className="text-gray-600">
                  Our platform supports various types of tokenized real-world assets, each with specialized risk assessment parameters.
                </p>
              </div>
            </div>
            <div className="pl-16 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Invoices</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Payment history analysis</li>
                    <li>• Debtor creditworthiness</li>
                    <li>• Invoice aging assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Real Estate</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Property valuation</li>
                    <li>• Location analysis</li>
                    <li>• Market liquidity assessment</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Bonds</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Issuer credit rating</li>
                    <li>• Interest rate risk</li>
                    <li>• Market yield analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Other Assets</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Custom risk parameters</li>
                    <li>• Asset-specific metrics</li>
                    <li>• Specialized valuations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Calculation Section */}
          <div className="ios-card p-6">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-2 rounded-xl mr-4">
                <Calculator className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Risk Calculation Methodology</h2>
                <p className="text-gray-600">
                  Our risk assessment model uses a weighted multi-factor approach to calculate the final risk score.
                </p>
              </div>
            </div>
            <div className="pl-16 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Risk Factors and Weights</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2">Credit Score (40%)</h4>
                  <p className="text-gray-600">Evaluates borrower creditworthiness using historical data and credit bureau information</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2">Liquidity Score (25%)</h4>
                  <p className="text-gray-600">Assesses market demand and ease of asset liquidation</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2">Collateral Ratio (25%)</h4>
                  <p className="text-gray-600">Compares asset value to loan amount requested</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2">Market Trends (10%)</h4>
                  <p className="text-gray-600">Incorporates economic indicators and sector performance metrics</p>
                </div>
              </div>
            </div>
          </div>

          {/* Blockchain Integration */}
          <div className="ios-card p-6">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-2 rounded-xl mr-4">
                <GitBranch className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Integration</h2>
                <p className="text-gray-600">
                  All risk assessments are permanently recorded on the XDC blockchain for transparency and verification.
                </p>
              </div>
            </div>
            <div className="pl-16 space-y-4">
              <h3 className="text-lg font-medium text-gray-900">Technical Implementation</h3>
              <div className="space-y-3">
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2">Smart Contract</h4>
                  <p className="text-gray-600">RiskRegistry contract deployed on XDC Apothem testnet stores all assessment data</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2">Data Storage</h4>
                  <p className="text-gray-600">Each assessment includes asset ID, type, loan amount, risk score, and timestamp</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl">
                  <h4 className="font-medium text-gray-900 mb-2">Verification</h4>
                  <p className="text-gray-600">All transactions can be verified on the XDC Explorer using the provided transaction hash</p>
                </div>
              </div>
            </div>
          </div>

          {/* Using the Platform */}
          <div className="ios-card p-6">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-2 rounded-xl mr-4">
                <History className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Using the Platform</h2>
                <p className="text-gray-600">
                  Step-by-step guide to performing risk assessments and viewing results.
                </p>
              </div>
            </div>
            <div className="pl-16 space-y-4">
              <ol className="space-y-3 text-gray-600">
                <li>
                  <span className="font-medium">1. Input Asset Details</span>
                  <p>Enter the asset ID, type, and requested loan amount in the assessment form</p>
                </li>
                <li>
                  <span className="font-medium">2. Submit for Analysis</span>
                  <p>Click "Analyze Risk" to process the assessment</p>
                </li>
                <li>
                  <span className="font-medium">3. Review Results</span>
                  <p>Examine the comprehensive risk analysis, including all contributing factors</p>
                </li>
                <li>
                  <span className="font-medium">4. Verify on Blockchain</span>
                  <p>Use the transaction hash to verify the assessment on XDC Explorer</p>
                </li>
              </ol>
            </div>
          </div>

          {/* Important Notes */}
          <div className="ios-card p-6">
            <div className="flex items-start mb-4">
              <div className="bg-blue-50 p-2 rounded-xl mr-4">
                <AlertCircle className="h-6 w-6 text-blue-500" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Important Notes</h2>
                <p className="text-gray-600">
                  Key considerations when using the RiskAnalyzer platform.
                </p>
              </div>
            </div>
            <div className="pl-16 space-y-4">
              <ul className="space-y-2 text-gray-600">
                <li>• Risk scores are advisory and should not be the sole factor in lending decisions</li>
                <li>• Market conditions and asset values can change rapidly</li>
                <li>• Always verify transaction success on the XDC Explorer</li>
                <li>• Keep asset IDs and transaction hashes for future reference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;