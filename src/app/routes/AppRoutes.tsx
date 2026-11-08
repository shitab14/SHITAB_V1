import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { ShitabAiContainer } from '@/features/shitab_ai';

export const AppRoutes: React.FC = () => {
  return (
    <Layout>
      <ShitabAiContainer />
    </Layout>
  );
};
