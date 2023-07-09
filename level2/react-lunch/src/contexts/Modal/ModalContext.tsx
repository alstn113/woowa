import React, { createContext } from 'react';

interface ModalContextProps {
  isOpen: boolean;
  openModal: (modalComponent: React.ReactNode) => void;
  closeModal: () => void;
  modalComponent: React.ReactNode;
}

const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  openModal: () => {
    throw new Error('openModal() not implemented');
  },
  closeModal: () => {
    throw new Error('closeModal() not implemented');
  },
  modalComponent: null,
});

export default ModalContext;
