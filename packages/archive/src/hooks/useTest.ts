import { useState } from 'react';

export const useTest = () => {
  const [state, setState] = useState<number>(0);

    return [state];
};
