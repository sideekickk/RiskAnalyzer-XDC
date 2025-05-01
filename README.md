
# RiskAnalyzer-XDC 🛡️

A comprehensive tool for analyzing the **risk profile of tokenized Real-World Assets (RWAs)** on the **XDC blockchain** using on-chain verification, Oracle data feeds, and multi-factor risk models.

## 🔍 Overview

**RiskAnalyzer** is built for **DeFi lenders, investors, and asset managers** who want to evaluate tokenized assets before lending or trading. It performs risk scoring based on asset type, borrower data, and simulated Oracle responses — and stores the risk reports immutably on-chain via XDC smart contracts.

## ⚙️ Features

- ✅ Real-time risk analysis for tokenized RWAs
- ✅ Blockchain-verified reports via smart contracts
- ✅ Beautiful Apple-inspired frontend UI
- ✅ Simulated Plugin Oracle integration
- ✅ Multi-asset support (Invoices, Real Estate, Bonds)
- ✅ Transaction history and visualization


## 📊 Supported Asset Types

| Asset Type    | Risk Parameters Considered |
|---------------|-----------------------------|
| **Invoices**      | Payment history, Debtor rating, Invoice aging |
| **Real Estate**   | Property valuation, Market liquidity, Location |
| **Bonds**         | Issuer rating, Interest risk, Market yield |
| **Other Assets**  | Custom risk factors and scoring logic |

## 🧮 Risk Scoring Formula

| Factor            | Weight |
|-------------------|--------|
| Credit Score      | 40%    |
| Liquidity Score   | 25%    |
| Collateral Ratio  | 25%    |
| Market Trends     | 10%    |

Risk is calculated using a weighted average of these factors, simulating data via Oracle responses and returning a percentage-based risk score (0–100%).

## 🔗 Blockchain Integration

- ✅ Smart Contract: `RiskRegistry.sol` on XDC Apothem testnet
- ✅ Stores: `assetID`, `riskScore`, `loanAmount`, `timestamp`
- ✅ Verification: Use transaction hash to validate on XDC Explorer

## 🚀 How to Use

1. **Input Asset Info**  
   Enter asset type, ID, and loan request.

2. **Run Risk Analysis**  
   Click “Analyze” to calculate and visualize risk.

3. **Submit to Blockchain**  
   Record result on-chain using the deployed smart contract.

4. **View Results**  
   Get transaction hash and verify data on-chain.

## 🛠️ Setup Instructions

### Prerequisites

- Node.js + npm
- Git
- MetaMask (connected to XDC Apothem testnet)

### Clone and Run

```bash
git clone https://github.com/sideekickk/RiskAnalyzer-XDC.git
cd RiskAnalyzer-XDC

npm install
npm run dev
```

### Smart Contract Deployment

1. Deploy `RiskRegistry.sol` on Remix IDE
2. Use Injected Web3 → Apothem
3. Copy deployed address into `blockchainService.ts`

## 🎥 Demo Video

Watch a full walkthrough here:  


## 🤖 Technologies Used

- React + Tailwind CSS
- Node.js + Express
- Solidity (XDC-compatible EVM)
- Plugin Oracle (simulated)
- Glassmorphism UI

## ❗ Important Notes

- Risk scores are **advisory only**
- Always verify smart contract submissions via the hash
- Market conditions may affect real-world outcomes
- This is a simulation demo; replace mock services with live Oracles


---

### 🏆 Built for the XDC Plugin Oracle Hackathon using real-world blockchain applications.
