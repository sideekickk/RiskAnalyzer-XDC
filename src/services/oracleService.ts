import { Asset, MarketData } from '../types';

// Simulates fetching data from Plugin Oracle API
export const fetchAssetData = async (asset: Asset): Promise<{
  marketData: MarketData;
  creditScore: number;
}> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate market data based on asset type
  let assetValue: number;
  let volatilityIndex: number;
  let liquidityScore: number;
  let economicOutlook: string;
  let sectorPerformance: number;
  
  switch (asset.assetType) {
    case 'invoice':
      assetValue = asset.loanAmount * 1.1;
      volatilityIndex = 30 + Math.floor(Math.random() * 20);
      liquidityScore = 70 + Math.floor(Math.random() * 20);
      economicOutlook = 'Stable';
      sectorPerformance = 60 + Math.floor(Math.random() * 20);
      break;
    case 'property':
      assetValue = asset.loanAmount * 1.5;
      volatilityIndex = 20 + Math.floor(Math.random() * 15);
      liquidityScore = 50 + Math.floor(Math.random() * 20);
      economicOutlook = 'Positive';
      sectorPerformance = 70 + Math.floor(Math.random() * 20);
      break;
    case 'bond':
      assetValue = asset.loanAmount * 1.05;
      volatilityIndex = 10 + Math.floor(Math.random() * 10);
      liquidityScore = 80 + Math.floor(Math.random() * 15);
      economicOutlook = 'Neutral';
      sectorPerformance = 65 + Math.floor(Math.random() * 15);
      break;
    default:
      assetValue = asset.loanAmount * 1.2;
      volatilityIndex = 40 + Math.floor(Math.random() * 30);
      liquidityScore = 40 + Math.floor(Math.random() * 30);
      economicOutlook = 'Uncertain';
      sectorPerformance = 50 + Math.floor(Math.random() * 20);
  }
  
  // Simulate credit score based on borrower information
  let creditScore: number;
  if (asset.borrowerInfo && asset.borrowerInfo.toLowerCase().includes('good')) {
    creditScore = 700 + Math.floor(Math.random() * 100); // Good credit
  } else if (asset.borrowerInfo && asset.borrowerInfo.toLowerCase().includes('poor')) {
    creditScore = 500 + Math.floor(Math.random() * 100); // Poor credit
  } else {
    creditScore = 600 + Math.floor(Math.random() * 150); // Random credit
  }
  
  const marketData: MarketData = {
    assetValue,
    volatilityIndex,
    liquidityScore,
    macroTrends: {
      economicOutlook,
      sectorPerformance
    }
  };
  
  return { marketData, creditScore };
};