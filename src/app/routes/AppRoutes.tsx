import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Feature1Card } from '@/features/feature_1';

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] gap-8 px-4 text-center">
        <div className="space-y-4">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 uppercase">
            React + Vite + TypeScript + Tailwind
          </span>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">
            Hello World
          </h1>
          <p className="max-w-xl mx-auto text-slate-400 text-lg sm:text-xl font-normal leading-relaxed">
            A production-ready React application structured with feature-first modularity and clean layered architecture.
          </p>
        </div>

        <div className="w-full max-w-md pt-4">
          <Feature1Card />
        </div>
      </div>
    </Layout>
  );
};
