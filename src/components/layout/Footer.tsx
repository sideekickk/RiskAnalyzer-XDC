import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-2 md:mb-0">
            <p className="text-sm">© 2025 RiskAnalyzer for XDC Tokenized RWAs</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-sm hover:text-teal-400 transition">Terms</a>
            <a href="#" className="text-sm hover:text-teal-400 transition">Privacy</a>
            <a href="#" className="text-sm hover:text-teal-400 transition">Documentation</a>
            <a href="#" className="text-sm hover:text-teal-400 transition">API</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;