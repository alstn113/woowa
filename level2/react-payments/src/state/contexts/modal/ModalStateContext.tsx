import { createContext } from 'react';

import { ModalState } from '../../types/modal.types';

const ModalStateContext = createContext<ModalState | null>(null);

export default ModalStateContext;
