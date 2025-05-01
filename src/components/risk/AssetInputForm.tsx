import React, { useState } from 'react';
import { Asset, AssetType } from '../../types';
import { useRiskAnalyzer } from '../../context/RiskAnalyzerContext';

const AssetInputForm: React.FC = () => {
  const { analyzeRisk, loading } = useRiskAnalyzer();
  const [formData, setFormData] = useState<Asset>({
    assetId: '',
    assetType: 'invoice',
    borrowerInfo: '',
    loanAmount: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'loanAmount' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    analyzeRisk(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="assetId" className="ios-label">
          Asset ID*
        </label>
        <input
          type="text"
          id="assetId"
          name="assetId"
          value={formData.assetId}
          onChange={handleChange}
          required
          className="ios-input"
          placeholder="XDC-ASSET-123456"
        />
      </div>

      <div>
        <label htmlFor="assetType" className="ios-label">
          Asset Type*
        </label>
        <select
          id="assetType"
          name="assetType"
          value={formData.assetType}
          onChange={handleChange as React.ChangeEventHandler<HTMLSelectElement>}
          required
          className="ios-select"
        >
          <option value="invoice">Invoice</option>
          <option value="property">Property</option>
          <option value="bond">Bond</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="borrowerInfo" className="ios-label">
          Borrower Information (Optional)
        </label>
        <textarea
          id="borrowerInfo"
          name="borrowerInfo"
          value={formData.borrowerInfo}
          onChange={handleChange}
          rows={3}
          className="ios-input resize-none"
          placeholder="Enter borrower details or credit information"
        />
      </div>

      <div>
        <label htmlFor="loanAmount" className="ios-label">
          Requested Loan Amount*
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <span className="text-gray-500">$</span>
          </div>
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount || ''}
            onChange={handleChange}
            required
            min="1"
            step="0.01"
            className="ios-input pl-8"
            placeholder="0.00"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="ios-button w-full"
      >
        {loading ? 'Analyzing...' : 'Analyze Risk'}
      </button>
    </form>
  );
};

export default AssetInputForm;