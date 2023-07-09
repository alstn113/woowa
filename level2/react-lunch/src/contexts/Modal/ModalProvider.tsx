import { useState } from 'react';

import ModalContext from './ModalContext';
import Modal from '../../components/common/Modal';

interface ModalProviderProps {
  children: React.ReactNode;
}

const ModalProvider = ({ children }: ModalProviderProps) => {
  if (!ModalContext) throw new Error('ModalContext not found');

  const [isOpen, setIsOpen] = useState(false);
  const [modalComponent, setModalComponent] = useState<React.ReactNode>(null);

  const openModal = (modalComponent: React.ReactNode) => {
    setModalComponent(modalComponent);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        modalComponent,
        openModal,
        closeModal,
      }}
    >
      <Modal isOpen={isOpen} onCancel={closeModal}>
        {modalComponent}
      </Modal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
