// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract RiskRegistry {
    struct RiskAssessment {
        string assetId;
        string assetType;
        uint256 loanAmount;
        uint256 riskScore;
        uint256 timestamp;
        address analyst;
    }

    mapping(address => RiskAssessment[]) private userAssessments;
    mapping(string => RiskAssessment) private assetAssessments;

    event RiskSubmitted(
        string indexed assetId,
        string assetType,
        uint256 loanAmount,
        uint256 riskScore,
        uint256 timestamp,
        address indexed analyst
    );

    function submitRiskAssessment(
        string memory _assetId,
        string memory _assetType,
        uint256 _loanAmount,
        uint256 _riskScore
    ) external {
        require(_riskScore <= 100, "Risk score must be between 0 and 100");
        require(bytes(_assetId).length > 0, "Asset ID cannot be empty");
        
        RiskAssessment memory assessment = RiskAssessment({
            assetId: _assetId,
            assetType: _assetType,
            loanAmount: _loanAmount,
            riskScore: _riskScore,
            timestamp: block.timestamp,
            analyst: msg.sender
        });

        userAssessments[msg.sender].push(assessment);
        assetAssessments[_assetId] = assessment;

        emit RiskSubmitted(
            _assetId,
            _assetType,
            _loanAmount,
            _riskScore,
            block.timestamp,
            msg.sender
        );
    }

    function getUserAssessments(address _user) external view returns (RiskAssessment[] memory) {
        return userAssessments[_user];
    }

    function getAssetAssessment(string memory _assetId) external view returns (RiskAssessment memory) {
        return assetAssessments[_assetId];
    }
}