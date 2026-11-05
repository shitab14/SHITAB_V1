import { useState } from 'react';

export const useFeature2 = () => {
  const [active] = useState(true);
  return { active };
};
