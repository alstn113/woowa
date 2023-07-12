import { createContext } from 'react';

import { CreditCardFormState } from '../../types/creditCardForm.types';

const CreditCardFormStateContext = createContext<CreditCardFormState | null>(
  null,
);

export default CreditCardFormStateContext;
