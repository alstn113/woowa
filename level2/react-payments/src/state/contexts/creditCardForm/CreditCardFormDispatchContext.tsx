import { Dispatch, createContext } from 'react';

import { CreditCardFormAction } from '../../types/creditCardForm.types';

const CreditCardFormDispatchContext =
  createContext<Dispatch<CreditCardFormAction> | null>(null);

export default CreditCardFormDispatchContext;
