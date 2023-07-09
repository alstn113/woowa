import { createPortal } from 'react-dom';
import styled from '@emotion/styled';

import usePortal from '../../hooks/usePortal';

interface ModalProps {
  children: React.ReactNode;
  onCancel: () => void;
}

const Modal = ({ children, onCancel }: ModalProps) => {
  const el = usePortal('modal');

  if (!el) return null;

  return createPortal(
    <>
      <Overlay />
      {children}
    </>,
    el,
  );
};

const Overlay = styled.div``;

export default Modal;
