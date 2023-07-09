import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import styled from '@emotion/styled';

import usePortal from '../../hooks/usePortal';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
  onCancel: () => void;
}

const Modal = ({ isOpen, children, onCancel }: ModalProps) => {
  const el = usePortal('modal');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCancel]);

  if (!el) return null;

  return createPortal(
    <>
      {isOpen && (
        <>
          <Overlay />
          {children}
        </>
      )}
    </>,
    el,
  );
};

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.35);
`;

export default Modal;
