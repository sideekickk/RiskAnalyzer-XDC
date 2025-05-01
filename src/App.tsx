import React from 'react';
import { RiskAnalyzerProvider } from './context/RiskAnalyzerContext';
import AppLayout from './components/layout/AppLayout';
import RiskAnalyzerDashboard from './pages/RiskAnalyzerDashboard';
import History from './pages/History';
import Documentation from './pages/Documentation';
import { useRiskAnalyzer } from './context/RiskAnalyzerContext';

const AppContent: React.FC = () => {
  const { activeTab } = useRiskAnalyzer();

  return (
    <AppLayout>
      {activeTab === 'dashboard' && <RiskAnalyzerDashboard />}
      {activeTab === 'history' && <History />}
      {activeTab === 'documentation' && <Documentation />}
    </AppLayout>
  );
};

function App() {
  return (
    <RiskAnalyzerProvider>
      <AppContent />
    </RiskAnalyzerProvider>
  );
}

export default App;