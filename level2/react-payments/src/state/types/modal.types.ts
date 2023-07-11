import { CLOSE_MODAL, OPEN_MODAL } from '../actions/modalActions';

export interface ModalState {
  isOpen: boolean;
  modalComponent: React.ReactNode;
}

export type ModalAction =
  | { type: typeof OPEN_MODAL; payload: React.ReactNode }
  | { type: typeof CLOSE_MODAL };
