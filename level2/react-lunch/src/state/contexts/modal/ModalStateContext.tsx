import { createContext } from 'react';

import { ModalState } from '../../types/modal.types';

const ModalStateContext = createContext<ModalState | undefined>(undefined);

export default ModalStateContext;
