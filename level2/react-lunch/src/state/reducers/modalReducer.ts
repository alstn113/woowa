import { ModalAction, ModalState } from '../types/modal.types';

const modalReducer = (state: ModalState, action: ModalAction): ModalState => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        ...state,
        isOpen: true,
        modalComponent: action.payload,
      };
    case 'CLOSE_MODAL':
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
