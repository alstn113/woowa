import { useReducer, useMemo } from 'react';

import ModalDispatchContext from './ModalDispatchContext';
import ModalStateContext from './ModalStateContext';
import Modal from '../../../components/common/Modal/Modal';
import modalReducer from '../../reducers/modalReducer';
import { ModalState } from '../../types/modal.types';

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  const initialState: ModalState = useMemo(
    () => ({
      isOpen: false,
      modalComponent: null,
    }),
    [],
  );

  const [state, dispatch] = useReducer(modalReducer, initialState);

  const memoizedState = useMemo(() => state, [state]);
  const memoizedDispatch = useMemo(() => dispatch, [dispatch]);

  return (
    <ModalStateContext.Provider value={memoizedState}>
      <ModalDispatchContext.Provider value={memoizedDispatch}>
        <Modal
          isOpen={memoizedState.isOpen}
          onCancel={() => memoizedDispatch({ type: 'CLOSE_MODAL' })}
        >
          {memoizedState.modalComponent}
        </Modal>
        {children}
      </ModalDispatchContext.Provider>
    </ModalStateContext.Provider>
  );
};

export default ModalProvider;
