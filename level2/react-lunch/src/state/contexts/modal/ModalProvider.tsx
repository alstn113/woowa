import { useReducer } from 'react';

import ModalDispatchContext from './ModalDispatchContext';
import ModalStateContext from './ModalStateContext';
import Modal from '../../../components/common/Modal';
import modalReducer from '../../reducers/modalReducer';
import { ModalState } from '../../types/modal.types';

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const initialState: ModalState = {
    isOpen: false,
    modalComponent: null,
  };

  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalStateContext.Provider value={state}>
      <ModalDispatchContext.Provider value={dispatch}>
        <Modal
          isOpen={state.isOpen}
          onCancel={() => dispatch({ type: 'CLOSE_MODAL' })}
        >
          {state.modalComponent}
        </Modal>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalProvider;
