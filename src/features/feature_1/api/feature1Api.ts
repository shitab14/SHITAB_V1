import { Feature1Data } from '../types';

export const fetchFeature1Data = async (): Promise<Feature1Data> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 'f1-001',
        title: 'Feature 1 Active Module',
        description: 'Demonstrating feature-first modular architecture with type safety.',
        status: 'active',
      });
    }, 300);
  });
};
