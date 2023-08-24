import { ToastPosition } from './toast-position';

export type ToastStatus = 'success' | 'error' | 'info';

export type ToastOptions = {
  id: number;
  title?: string;
  description?: string;
  duration: number | null;
  position?: ToastPosition;
  onRequestClose: () => void;
  status: ToastStatus;
};

export type ToastState = {
  [K in ToastPosition]: ToastOptions[];
};
