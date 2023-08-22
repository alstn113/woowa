export type ToastStatus = 'success' | 'error' | 'info';

export type ToastOptions = {
  id: number;
  message: React.ReactNode;
  duration: number | null;
  onRequestClose: () => void;
  requestClose?: boolean;
  status: ToastStatus;
};

export type ToastState = ToastOptions[];
