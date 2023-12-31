import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import * as S from './Modal.styles';
import usePortal from '../../../hooks/usePortal';

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
          <S.Overlay onClick={onCancel} />
          {children}
        </>
      )}
    </>,
    el,
  );
};

export default Modal;
