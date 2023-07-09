import { useState } from 'react';

import Modal from '../../components/common/Modal';

import ModalContext from './ModalContext';

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
      <Modal isOpen={isOpen} onCancel={closeModal} children={modalComponent} />
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
