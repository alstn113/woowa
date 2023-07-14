import { useContext } from 'react';

import InputNumberContext from '../contexts/InputNumberContext';

const useInputNumber = () => {
  const values = useContext(InputNumberContext);
  if (!values) {
    throw new Error('useInputNumber must be used within a InputNumberProvider');
  }

  return values;
};

export default useInputNumber;
