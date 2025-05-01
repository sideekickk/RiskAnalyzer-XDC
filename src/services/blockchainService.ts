import Web3 from 'web3';
import { Asset } from '../types';

const APOTHEM_RPC_URL = 'https://erpc.apothem.network';
const RISK_REGISTRY_CONTRACT = '0x7ECE7919c6105bA3746fa7167B4652a1cDe161E8'; // Replace with actual contract address

// Initialize Web3 provider
const web3 = new Web3(APOTHEM_RPC_URL);

// Contract ABI
const RiskRegistryABI = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "index",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "assetId",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "riskScore",
        "type": "uint256"
      }
    ],
    "name": "RiskSubmitted",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "assetId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "assetType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "riskScore",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "metadata",
        "type": "string"
      }
    ],
    "name": "submitRisk",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getRiskCount",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "risks",
    "outputs": [
      {
        "internalType": "string",
        "name": "assetId",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "assetType",
        "type": "string"
      },
      {
        "internalType": "uint256",
        "name": "riskScore",
        "type": "uint256"
      },
      {
        "internalType": "string",
        "name": "metadata",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "submittedBy",
        "type": "address"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];

// Initialize contract instance
const contract = new web3.eth.Contract(RiskRegistryABI as any, RISK_REGISTRY_CONTRACT);

// Helper to generate random hex string for testing
const generateRandomHex = (length: number): string => {
  const chars = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

export const submitRiskScore = async (
  asset: Asset,
  riskScore: number
): Promise<string> => {
  try {
    // For demo purposes, return a simulated transaction hash
    // In production, this would actually submit to the blockchain
    const metadata = JSON.stringify({
      borrowerInfo: asset.borrowerInfo || '',
      loanAmount: asset.loanAmount,
      timestamp: new Date().toISOString()
    });
    
    // Simulate blockchain delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In production, this would be the actual transaction
    // const tx = await contract.methods
    //   .submitRisk(asset.assetId, asset.assetType, riskScore, metadata)
    //   .send({ from: userAddress });
    // return tx.transactionHash;
    
    const simulatedTxHash = '0x' + generateRandomHex(64);
    return simulatedTxHash;
  } catch (error) {
    console.error('Error submitting risk score:', error);
    throw new Error('Failed to submit risk score to blockchain. Please ensure you are connected to XDC Apothem testnet.');
  }
};