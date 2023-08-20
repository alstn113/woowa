import { ToastPosition } from './toast-placement';

export type ToastOptions = {
  id: number;
  duration: number | null;
  message: React.ReactNode;
};

export type ToastState = {
  [P in ToastPosition]: ToastOptions[];
};
