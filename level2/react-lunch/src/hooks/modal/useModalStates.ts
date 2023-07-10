import { useContext } from 'react';

import ModalStateContext from '../../state/contexts/modal/ModalStateContext';

const useModalStates = () => {
  const value = useContext(ModalStateContext);
  if (value === undefined)
    throw new Error(
      'useModalState must be used within a ModalStateContextProvider',
    );
  return value;
};

export default useModalStates;
