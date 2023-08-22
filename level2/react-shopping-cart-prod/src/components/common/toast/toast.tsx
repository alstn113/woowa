import styled from '@emotion/styled';

import SvgSuccessStatus from './vectors/SvgSuccessStatus';
import SvgInfoStatus from './vectors/SvgInfoStatus';
import SvgErrorStatus from './vectors/SvgErrorStatus';
import SvgCross from './vectors/SvgCross';
import { ToastOptions } from './toast-types';

interface ToastProps {
  title?: string;
  description?: string;
  status: ToastOptions['status'];
  onClose: () => void;
}

const toastStatusMap: {
  [key in ToastOptions['status']]: { color: string; icon: React.ReactNode };
} = {
  success: {
    color: '#2ecc71',
    icon: <SvgSuccessStatus />,
  },
  error: {
    color: '#e74c3c',
    icon: <SvgErrorStatus />,
  },
  info: {
    color: '#3498db',
    icon: <SvgInfoStatus />,
  },
};

const Toast = ({ title, description, status, onClose }: ToastProps) => {
  const toastStatus = toastStatusMap[status];

  return (
    <Container toastColor={toastStatus.color}>
      <ToastIcon>{toastStatus.icon}</ToastIcon>
      <ToastContent>
        {title && <ToastTitle>{title}</ToastTitle>}
        {description && <ToastDescription>{description}</ToastDescription>}
      </ToastContent>
      <CloseButton onClick={onClose}>
        <SvgCross />
      </CloseButton>
    </Container>
  );
};

const Container = styled.div<{
  toastColor: string;
}>`
  position: relative;
  display: flex;
  pointer-events: auto;
  max-width: 400px;
  min-width: 250px;
  margin: 0.5rem;
  padding: 16px 32px 16px 16px;
  border-radius: 0.5rem;
  color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  background-color: ${(props) => props.toastColor};
`;

const ToastIcon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 12px;
`;

const ToastContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: auto 0;
`;

const ToastTitle = styled.div`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 700;
  line-height: 1.5rem;
`;

const ToastDescription = styled.div`
  width: 100%;
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 400;
`;

const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  border-radius: 5px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  svg {
    color: #fff;
    width: 18px;
    height: 18px;
  }
`;

export default Toast;
