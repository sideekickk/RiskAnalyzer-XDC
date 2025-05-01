export type AssetType = 'invoice' | 'property' | 'bond' | 'other';

export interface Asset {
  assetId: string;
  assetType: AssetType;
  borrowerInfo?: string;
  loanAmount: number;
}

export interface MarketData {
  assetValue: number;
  volatilityIndex: number;
  liquidityScore: number;
  macroTrends: {
    economicOutlook: string;
    sectorPerformance: number;
  };
}

export interface RiskResult {
  assetId: string;
  assetType: AssetType;
  borrowerInfo?: string;
  loanAmount: number;
  riskScore: number;
  marketData: MarketData;
  creditScore: number;
  txHash: string;
  timestamp: string;
}