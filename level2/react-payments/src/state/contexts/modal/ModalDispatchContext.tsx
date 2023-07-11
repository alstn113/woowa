import { Dispatch, createContext } from 'react';

import { ModalAction } from '../../types/modal.types';

const ModalDispatchContext = createContext<Dispatch<ModalAction> | null>(null);

export default ModalDispatchContext;
