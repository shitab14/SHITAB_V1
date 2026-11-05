import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-md">
            S
          </div>
          <span className="font-bold text-lg tracking-tight text-white">SHITAB V1</span>
        </div>
        <nav className="flex items-center space-x-4 text-sm text-slate-400">
          <span className="hover:text-white transition-colors cursor-pointer">Docs</span>
          <span className="hover:text-white transition-colors cursor-pointer">Architecture</span>
          <span className="hover:text-white transition-colors cursor-pointer">ADR</span>
        </nav>
      </div>
    </header>
  );
};
