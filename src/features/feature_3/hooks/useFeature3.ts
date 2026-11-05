import { useState } from 'react';

export const useFeature3 = () => {
  const [enabled] = useState(true);
  return { enabled };
};
