import { useContext } from 'react';

import ModalDispatchContext from '../../state/contexts/modal/ModalDispatchContext';

const useModalAcitons = () => {
  const value = useContext(ModalDispatchContext);
  if (!value)
    throw new Error(
      'useModalActions must be used within a ModalDispatchContextProvider',
    );
  return value;
};

export default useModalAcitons;
