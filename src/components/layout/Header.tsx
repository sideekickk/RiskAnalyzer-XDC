import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { useRiskAnalyzer } from '../../context/RiskAnalyzerContext';

const Header: React.FC = () => {
  const { setActiveTab, activeTab } = useRiskAnalyzer();

  return (
    <header className="bg-white/70 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShieldCheck className="h-8 w-8 text-blue-500" />
            <div>
              <h1 className="text-xl font-semibold text-gray-900">RiskAnalyzer</h1>
              <p className="text-xs text-gray-500">XDC Tokenized RWA Risk Assessment</p>
            </div>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <button 
                  onClick={() => setActiveTab('dashboard')}
                  className={`text-gray-600 hover:text-gray-900 transition ${activeTab === 'dashboard' ? 'text-blue-500 font-medium' : ''}`}
                >
                  Dashboard
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('history')}
                  className={`text-gray-600 hover:text-gray-900 transition ${activeTab === 'history' ? 'text-blue-500 font-medium' : ''}`}
                >
                  History
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setActiveTab('documentation')}
                  className={`text-gray-600 hover:text-gray-900 transition ${activeTab === 'documentation' ? 'text-blue-500 font-medium' : ''}`}
                >
                  Documentation
                </button>
              </li>
            </ul>
          </nav>
          <div className="rounded-full bg-gray-100 px-4 py-1.5 text-sm text-gray-600">
            XDC Testnet
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;