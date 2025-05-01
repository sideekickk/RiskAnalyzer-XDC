import React, { createContext, useContext, useState, ReactNode } from 'react';
import { fetchAssetData } from '../services/oracleService';
import { submitRiskScore } from '../services/blockchainService';
import { Asset, RiskResult } from '../types';

type ActiveTab = 'dashboard' | 'history' | 'documentation';

interface RiskAnalyzerContextType {
  loading: boolean;
  error: string | null;
  asset: Asset | null;
  riskResult: RiskResult | null;
  transactions: RiskResult[];
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  analyzeRisk: (assetData: Asset) => Promise<void>;
  clearResults: () => void;
}

const RiskAnalyzerContext = createContext<RiskAnalyzerContextType | undefined>(undefined);

export const useRiskAnalyzer = () => {
  const context = useContext(RiskAnalyzerContext);
  if (!context) {
    throw new Error('useRiskAnalyzer must be used within a RiskAnalyzerProvider');
  }
  return context;
};

export const RiskAnalyzerProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [asset, setAsset] = useState<Asset | null>(null);
  const [riskResult, setRiskResult] = useState<RiskResult | null>(null);
  const [transactions, setTransactions] = useState<RiskResult[]>([]);
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');

  const calculateRiskScore = (
    assetData: Asset,
    marketData: any,
    creditScore: number
  ): number => {
    const CREDIT_WEIGHT = 0.4;
    const LIQUIDITY_WEIGHT = 0.25;
    const COLLATERAL_WEIGHT = 0.25;
    const MARKET_WEIGHT = 0.1;

    const normalizedCreditScore = (creditScore / 850) * 100;
    const creditRisk = 100 - normalizedCreditScore;

    const liquidityRisk = assetData.assetType === 'invoice' ? 60 : 
                         assetData.assetType === 'property' ? 80 : 
                         assetData.assetType === 'bond' ? 40 : 70;

    const collateralRatio = Math.min(marketData.assetValue / assetData.loanAmount, 1);
    const collateralRisk = (1 - collateralRatio) * 100;

    const marketRisk = marketData.volatilityIndex;

    const riskScore = (
      creditRisk * CREDIT_WEIGHT +
      liquidityRisk * LIQUIDITY_WEIGHT +
      collateralRisk * COLLATERAL_WEIGHT +
      marketRisk * MARKET_WEIGHT
    );

    return Math.min(Math.round(riskScore), 100);
  };

  const analyzeRisk = async (assetData: Asset) => {
    setLoading(true);
    setError(null);
    setAsset(assetData);
    setRiskResult(null);

    try {
      const { marketData, creditScore } = await fetchAssetData(assetData);
      const riskScore = calculateRiskScore(assetData, marketData, creditScore);
      const txHash = await submitRiskScore(assetData, riskScore);
      
      const result: RiskResult = {
        assetId: assetData.assetId,
        assetType: assetData.assetType,
        loanAmount: assetData.loanAmount,
        borrowerInfo: assetData.borrowerInfo,
        riskScore,
        marketData,
        creditScore,
        txHash,
        timestamp: new Date().toISOString(),
      };
      
      setRiskResult(result);
      setTransactions(prev => [result, ...prev]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  };

  const clearResults = () => {
    setRiskResult(null);
    setAsset(null);
    setError(null);
  };

  return (
    <RiskAnalyzerContext.Provider
      value={{
        loading,
        error,
        asset,
        riskResult,
        transactions,
        activeTab,
        setActiveTab,
        analyzeRisk,
        clearResults
      }}
    >
      {children}
    </RiskAnalyzerContext.Provider>
  );
};