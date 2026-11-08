import React, { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col justify-center items-center">
        {children}
      </main>
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} SHITAB V1. Built with React & Vite.
      </footer>
    </div>
  );
};
