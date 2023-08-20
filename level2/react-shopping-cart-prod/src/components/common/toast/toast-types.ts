export type ToastOptions = {
  id: number;
  message: React.ReactNode;
  duration: number | null;
  onRequestClose: () => void;
  requestClose?: boolean;
};

export type ToastState = ToastOptions[];
