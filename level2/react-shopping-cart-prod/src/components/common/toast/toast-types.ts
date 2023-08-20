export type ToastOptions = {
  id: number;
  message: React.ReactNode;
  duration: number | null;
};

export type ToastState = ToastOptions[];
