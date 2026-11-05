import { useState, useEffect } from 'react';
import { Feature1Data } from '../types';
import { fetchFeature1Data } from '../api/feature1Api';

export const useFeature1 = () => {
  const [data, setData] = useState<Feature1Data | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchFeature1Data().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
